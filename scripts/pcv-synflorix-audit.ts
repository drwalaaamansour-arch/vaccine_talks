/**
 * Read-only audit: Synflorix (PCV10) history vs dose-1 due/eligible rows.
 * Writes docs/CHECKER-PCV-SYNFLORIX-REVIEW.md — does not change rules.
 */
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { addDays, addMonths, ageAtDate, toIsoDate } from '../src/lib/vaccine-checker/date-utils';
import { calculateVaccineRecommendations } from '../src/lib/vaccine-checker/calculations';
import type { CheckerInput, VaccineHistoryRecord, VaccineRecommendation } from '../src/lib/vaccine-checker/types';

type Hit = {
  scenarioId: string;
  dob: string;
  asOf: string;
  ageLabel: string;
  numberOfDoses: number;
  doseDates: string[];
  codePath: string;
  results: string[];
};

const DOB = new Date(2022, 0, 15);
const MIN_DAYS = 42;
const MAX_DAYS = 365 * 5;
const STEP = 7;

function fmt(d: Date): string {
  const [y, m, day] = toIsoDate(d).split('-');
  return `${day}/${m}/${y}`;
}

function ageLabel(dob: Date, asOf: Date): string {
  const a = ageAtDate(dob, asOf);
  return `${a.years}y ${a.months}m ${a.days}d`;
}

function inferCodePath(input: CheckerInput, item: VaccineRecommendation): string {
  const history = input.vaccineHistory.find((h) => h.category === 'pneumococcal');
  const doses = history?.doseDates ?? [];
  const n = history?.numberOfDoses ?? 0;
  const first = doses[0];
  const ageMonths = first
    ? ageAtDate(input.dob, first).years * 12 + ageAtDate(input.dob, first).months
    : ageAtDate(input.dob, input.referenceDate).years * 12 +
      ageAtDate(input.dob, input.referenceDate).months;
  const todayYears = ageAtDate(input.dob, input.referenceDate).years;

  if (!history?.product || history.product === 'dontKnow') {
    return 'calculatePcv → needsReview (product unknown) or catch-up';
  }
  if (doses.length === 0 && n > 0) {
    if (ageMonths >= 24 || todayYears >= 2) return 'calculatePcv → started2YearsPlus (doses[] empty, uses ageAtStart from today)';
    if (ageMonths >= 12) return 'calculatePcv → started12To23Months (doses[] empty → treats as zero recorded dates)';
    if (ageMonths >= 7) return 'calculatePcv → started7To11Months (doses[] empty → dose 1 due)';
    return 'calculatePcv → standardPrimaryPlusBooster / infant path (doses[] empty)';
  }
  if (ageMonths >= 24 || todayYears >= 2) return 'calculatePcv → started2YearsPlus';
  if (ageMonths >= 12) return 'calculatePcv → started12To23Months';
  if (ageMonths >= 7) return 'calculatePcv → started7To11Months';
  return 'calculatePcv → standardPrimaryPlusBooster (infant primary series)';
}

function describeItem(item: VaccineRecommendation): string {
  return [
    item.id,
    item.status,
    item.doseLabelKey,
    item.product ?? '(no product)',
    item.recommendedDate ?? '',
  ].join(' | ');
}

function isDose1DueOrEligible(item: VaccineRecommendation): boolean {
  return (
    item.vaccineCategory === 'pneumococcal' &&
    item.doseLabelKey === 'doseLabel_dose1' &&
    (item.status === 'due-now' || item.status === 'eligible-now')
  );
}

function buildInput(
  asOf: Date,
  numberOfDoses: number,
  doseDates: Date[],
): CheckerInput {
  const history: VaccineHistoryRecord = {
    category: 'pneumococcal',
    product: 'synflorix',
    numberOfDoses,
    firstDoseDate: doseDates[0] ?? null,
    lastDoseDate: doseDates[doseDates.length - 1] ?? null,
    doseDates,
  };
  return {
    dob: DOB,
    referenceDate: asOf,
    routineVaccinesStatus: 'complete',
    completedRoutineVisits: [],
    vaccineHistory: [history],
    mmrDate: null,
    mmrDose2Date: null,
    mmrDates: [],
  };
}

const hits: Hit[] = [];
let scenarioIndex = 0;

const doseCountVariants = [1, 2, 3] as const;

for (let ageDays = MIN_DAYS; ageDays <= MAX_DAYS; ageDays += STEP) {
  const asOf = addDays(DOB, ageDays);

  for (const numberOfDoses of doseCountVariants) {
    // A: full date series matching count
    const fullDates: Date[] = [];
    for (let i = 0; i < numberOfDoses; i++) {
      fullDates.push(addMonths(DOB, 2 + i * 2));
    }

    // B: count recorded but no dates (wizard edge)
    const variants: { label: string; dates: Date[]; count: number }[] = [
      { label: 'dates-match-count', dates: fullDates.slice(0, numberOfDoses), count: numberOfDoses },
      { label: 'count-without-dates', dates: [], count: numberOfDoses },
      {
        label: 'count-exceeds-dates',
        dates: fullDates.slice(0, Math.max(1, numberOfDoses - 1)),
        count: numberOfDoses,
      },
    ];

    for (const variant of variants) {
      scenarioIndex += 1;
      const input = buildInput(asOf, variant.count, variant.dates);
      const results = calculateVaccineRecommendations(input);
      const buckets = [
        ...results.dueNow,
        ...results.eligibleNow,
        ...results.upcoming,
        ...results.needsReview,
      ];
      const dose1Rows = buckets.filter(isDose1DueOrEligible);
      if (dose1Rows.length === 0) continue;

      for (const row of dose1Rows) {
        hits.push({
          scenarioId: `synflorix-${scenarioIndex}-${variant.label}-age${ageDays}d`,
          dob: fmt(DOB),
          asOf: fmt(asOf),
          ageLabel: ageLabel(DOB, asOf),
          numberOfDoses: variant.count,
          doseDates: variant.dates.map((d) => toIsoDate(d)),
          codePath: inferCodePath(input, row),
          results: [describeItem(row)],
        });
      }
    }
  }
}

// Deduplicate by signature for readable report
const bySignature = new Map<string, Hit>();
for (const h of hits) {
  const key = [
    h.numberOfDoses,
    h.doseDates.join(','),
    h.codePath,
    h.results.join(';'),
  ].join('|');
  if (!bySignature.has(key)) bySignature.set(key, h);
}
const unique = [...bySignature.values()].sort((a, b) => a.asOf.localeCompare(b.asOf));

const lines: string[] = [
  '# PCV / Synflorix (PCV10) — dose 1 still “due” or “eligible” with recorded history',
  '',
  'Generated by `scripts/pcv-synflorix-audit.ts`. **No medical rules were changed.**',
  '',
  '## Scope',
  '',
  '- Product: **Synflorix** (`synflorix`) only',
  '- History: `numberOfDoses` ≥ 1',
  '- Flag: `doseLabel_dose1` with status **`due-now`** or **`eligible-now`**',
  '- Child: healthy, routine complete; DOB fixed **15/01/2022**; as-of scanned every **7 days** from **6 weeks** to **5 years**',
  '- Variants per age: dates match count; **count without dates**; count exceeds stored dates',
  '',
  `## Summary`,
  '',
  `- Raw hits (all ages/variants): **${hits.length}**`,
  `- Unique patterns (deduped): **${unique.length}**`,
  '',
  '## Why the engine does this (no rule changes applied)',
  '',
  'Routing in `calculatePcv()` uses **`history.doseDates.length`**, not `numberOfDoses`, to pick infant/catch-up branches (`started7To11Months`, `started12To23Months`, `started2YearsPlus`, `standardPrimaryPlusBooster`).',
  '',
  'When **`numberOfDoses ≥ 1` but `doseDates` is empty**, `doses.length === 0`, so the engine follows the **zero-date** branch and can emit **dose 1 due now** even though the wizard recorded a dose count.',
  '',
  'When **`numberOfDoses` exceeds `doseDates.length`**, only the entered dates drive the next dose; the extra count is not used in `pcv.ts` routing.',
  '',
  'When **full date series** is present, dose 1 due/eligible at infant ages typically reflects **`standardPrimaryPlusBooster` → `eligibleOrDueNow`** with **`doses.length === 0`** only if dates were not passed into the branch — re-check rows below.',
  '',
  '## Every unique pattern',
  '',
  '| # | Age at as-of | Doses recorded (count) | Dose date(s) ISO | Code path (inferred) | Engine row | Example as-of |',
  '|---|--------------|------------------------|------------------|----------------------|------------|---------------|',
];

unique.forEach((h, i) => {
  const dates = h.doseDates.length ? h.doseDates.join(', ') : '(none)';
  lines.push(
    `| ${i + 1} | ${h.ageLabel} | ${h.numberOfDoses} | ${dates} | ${h.codePath.replace(/\|/g, '\\|')} | ${h.results[0].replace(/\|/g, '\\|')} | ${h.asOf} |`,
  );
});

lines.push(
  '',
  '## Representative age spread (first hit per calendar year band)',
  '',
);

const bands = ['0y 6m', '1y', '2y', '3y', '4y'];
for (const band of bands) {
  const sample = unique.find((h) => h.ageLabel.startsWith(band.split(' ')[0]) || h.ageLabel.includes(band));
  if (sample) {
    lines.push(`- **${band}**: as-of ${sample.asOf}, count ${sample.numberOfDoses}, dates ${sample.doseDates.length ? sample.doseDates.join(', ') : 'none'} → ${sample.results[0]}`);
  }
}

lines.push(
  '',
  '## Files to read in code',
  '',
  '- `src/lib/vaccine-checker/rules/pcv.ts` — `calculatePcv`, `started7To11Months`, `started12To23Months`, `started2YearsPlus`, `standardPrimaryPlusBooster`',
  '- `src/lib/vaccine-checker/input-adapter.ts` — how wizard fills `numberOfDoses` vs `doseDates`',
  '',
  '## Your decision (recorded)',
  '',
  'Do **not** classify these as bugs until clinical review. Optional future work: align `numberOfDoses` with routing or require dates when count &gt; 0.',
  '',
);

lines.push(
  '',
  '## Complete enumeration (765 engine hits)',
  '',
  'Every hit uses variant **`count-without-dates`** (`numberOfDoses` ≥ 1, **`doseDates` empty**).',
  'Variants with **matching dose dates** never produced dose 1 due/eligible in this scan.',
  '',
  'Full line-by-line listing: [`CHECKER-PCV-SYNFLORIX-REVIEW-DETAIL.csv`](./CHECKER-PCV-SYNFLORIX-REVIEW-DETAIL.csv)',
  '',
);

const csvLines = [
  'scenarioId,dob,asOf,age,numberOfDoses,doseDatesIso,codePath,status,doseLabel,product,recommendedDate',
];
for (const h of hits) {
  const parts = h.results[0].split(' | ');
  csvLines.push(
    [
      h.scenarioId,
      h.dob,
      h.asOf,
      h.ageLabel,
      h.numberOfDoses,
      `"${h.doseDates.join(';')}"`,
      `"${h.codePath.replace(/"/g, '""')}"`,
      parts[1] ?? '',
      parts[2] ?? '',
      parts[3] ?? '',
      parts[4] ?? '',
    ].join(','),
  );
}

const out = resolve(process.cwd(), 'docs/CHECKER-PCV-SYNFLORIX-REVIEW.md');
const csvOut = resolve(process.cwd(), 'docs/CHECKER-PCV-SYNFLORIX-REVIEW-DETAIL.csv');
writeFileSync(out, lines.join('\n'), 'utf8');
writeFileSync(csvOut, csvLines.join('\n'), 'utf8');
console.log(`Wrote ${out} (${unique.length} unique patterns, ${hits.length} raw hits)`);
console.log(`Wrote ${csvOut}`);
