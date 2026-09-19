import { addDays } from '@/lib/vaccine-checker/date-utils';
import type { RegressionScenario } from '@/lib/vaccine-checker/regression-lab/types';
import { baseHealthyInput, dateParts, history } from '@/lib/vaccine-checker/regression-lab/scenario-input';

function fmt(d: Date): string {
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

/**
 * As-of dates one day before / on / after critical schedule boundaries.
 * Guards status bucket bugs (e.g. recommendedDate === asOfDate must not land only in upcoming).
 */
export function buildIntervalBoundaryScenarios(): RegressionScenario[] {
  const birth = dateParts(2026, 4, 23);
  const dose1 = dateParts(2026, 6, 23);
  const dose2Due = dateParts(2026, 8, 23);

  const historyBlock = [
    history({
      category: 'meningococcalB',
      product: 'bexsero',
      numberOfDoses: 1,
      firstDoseDate: dose1,
      lastDoseDate: dose1,
      doseDates: [dose1],
    }),
    history({
      category: 'meningococcalACWY',
      product: 'nimenrix',
      numberOfDoses: 1,
      firstDoseDate: dose1,
      lastDoseDate: dose1,
      doseDates: [dose1],
    }),
  ];

  const offsets: { suffix: string; days: number; expectDueNow: boolean }[] = [
    { suffix: 'minus-1d', days: -1, expectDueNow: false },
    { suffix: 'on-day', days: 0, expectDueNow: true },
    { suffix: 'plus-1d', days: 1, expectDueNow: true },
  ];

  return offsets.flatMap(({ suffix, days, expectDueNow }) => {
    const asOf = addDays(dose2Due, days);
    const id = `interval-dose2-menb-menacwy-${suffix}`;
    const expectations = expectDueNow
      ? [
          {
            kind: 'includes' as const,
            bucket: 'dueNow' as const,
            match: {
              vaccineCategory: 'meningococcalB',
              doseLabelKey: 'doseLabel_dose2',
              status: 'due-now',
            },
          },
          {
            kind: 'includes' as const,
            bucket: 'dueNow' as const,
            match: {
              vaccineCategory: 'meningococcalACWY',
              doseLabelKey: 'doseLabel_dose2',
              status: 'due-now',
            },
          },
        ]
      : [
          {
            kind: 'excludes' as const,
            bucket: 'dueNow' as const,
            match: { vaccineCategory: 'meningococcalB', doseLabelKey: 'doseLabel_dose2' },
          },
        ];

    return {
      id,
      category: 'interval-boundary' as const,
      historicalBugTag: 'recommended-date-equals-asof-not-upcoming',
      title: `MenB/MenACWY dose 2 boundary (${suffix})`,
      description: `Dose 2 due 23/08/2026; as-of ${fmt(asOf)}. Due-now when as-of >= due date.`,
      dobLabel: fmt(birth),
      asOfLabel: fmt(asOf),
      buildInput: () =>
        baseHealthyInput(birth, asOf, {
          vaccineHistory: historyBlock,
        }),
      expectations,
    };
  });
}
