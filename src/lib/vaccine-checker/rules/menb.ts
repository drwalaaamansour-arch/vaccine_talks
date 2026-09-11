import {
  addDays,
  addMonths,
  ageAtDate,
  daysBetween,
  isBefore,
  isOnOrAfter,
  laterOf,
} from '@/lib/vaccine-checker/date-utils';
import {
  withMinimumStartOnly,
  withRecommendedWindow,
} from '@/lib/vaccine-checker/recommendation-timing';
import {
  iso,
  makeRecommendation,
  type RuleContext,
  type VaccineRecommendation,
} from '@/lib/vaccine-checker/types';

function ageInMonthsAt(dob: Date, date: Date): number {
  const age = ageAtDate(dob, date);
  return age.years * 12 + age.months;
}

function ageInYearsAt(dob: Date, date: Date): number {
  return ageAtDate(dob, date).years;
}

function recommendNextDose(
  ctx: RuleContext,
  doseNumber: number,
  recommendedDate: Date,
  intervalNoteKey?: string
): VaccineRecommendation {
  const status = isOnOrAfter(ctx.today, recommendedDate) ? 'due-now' : 'upcoming';
  return makeRecommendation({
    id: `menb-dose${doseNumber}`,
    vaccineCategory: 'meningococcalB',
    product: 'bexsero',
    doseLabelKey: `doseLabel_dose${doseNumber}`,
    status,
    recommendedDate: iso(recommendedDate),
    noteKeys: intervalNoteKey ? [intervalNoteKey] : [],
    urgency: status === 'due-now' ? 80 : 40,
  });
}

function recommendBoosterWindow(
  ctx: RuleContext,
  windowStart: Date,
  windowEnd: Date,
  noteKeys: string[] = []
): VaccineRecommendation {
  return withRecommendedWindow(
    {
      id: 'menb-booster',
      vaccineCategory: 'meningococcalB',
      product: 'bexsero',
      doseLabelKey: 'doseLabel_booster',
      noteKeys,
    },
    windowStart,
    windowEnd,
    ctx.today
  );
}

function recommendBoosterMinimumStart(
  ctx: RuleContext,
  minimumStart: Date,
  noteKeys: string[] = []
): VaccineRecommendation {
  return withMinimumStartOnly(
    {
      id: 'menb-booster',
      vaccineCategory: 'meningococcalB',
      product: 'bexsero',
      doseLabelKey: 'doseLabel_booster',
      noteKeys,
    },
    minimumStart,
    ctx.today
  );
}

export function calculateMenB(ctx: RuleContext): VaccineRecommendation[] {
  const history = ctx.getHistory('meningococcalB');
  const doses = history?.doseDates ?? [];
  const { dob, today } = ctx;

  if (doses.length >= 3) {
    return [
      makeRecommendation({
        id: 'menb-completed',
        vaccineCategory: 'meningococcalB',
        doseLabelKey: 'doseLabel_seriesComplete',
        status: 'completed',
        noteKeys: [],
      }),
    ];
  }

  const firstDoseDate = doses[0] ?? null;
  const startAgeMonths = firstDoseDate ? ageInMonthsAt(dob, firstDoseDate) : ageInMonthsAt(dob, today);
  const startAgeYears = firstDoseDate ? ageInYearsAt(dob, firstDoseDate) : ageInYearsAt(dob, today);

  if (doses.length === 0) {
    if (startAgeMonths < 2) {
      return [
        makeRecommendation({
          id: 'menb-not-yet-eligible',
          vaccineCategory: 'meningococcalB',
          product: 'bexsero',
          doseLabelKey: 'doseLabel_dose1',
          status: 'not-yet-eligible',
          recommendedDate: iso(addMonths(dob, 2)),
          noteKeys: [],
        }),
      ];
    }
    return [
      makeRecommendation({
        id: 'menb-dose1-due',
        vaccineCategory: 'meningococcalB',
        product: 'bexsero',
        doseLabelKey: 'doseLabel_dose1',
        status: 'due-now',
        recommendedDate: startAgeMonths < 12 ? iso(addMonths(dob, 2)) : undefined,
        noteKeys: [],
      }),
    ];
  }

  if (startAgeMonths >= 2 && startAgeMonths <= 5) {
    const projectedDose2Date = addMonths(doses[0], 2);
    const lastPrimaryDoseDate = doses.length === 1 ? projectedDose2Date : doses[1];
    const windowStart = laterOf(addMonths(dob, 12), addMonths(lastPrimaryDoseDate, 6));
    const windowEnd = addMonths(dob, 15);

    if (doses.length === 1) {
      return [
        recommendNextDose(ctx, 2, projectedDose2Date),
        recommendBoosterWindow(ctx, windowStart, windowEnd),
      ];
    }

    return [recommendBoosterWindow(ctx, windowStart, windowEnd)];
  }

  if (startAgeMonths >= 6 && startAgeMonths <= 11) {
    if (doses.length === 1) {
      return [recommendNextDose(ctx, 2, addMonths(doses[0], 2))];
    }
    const minimumStart = laterOf(addMonths(dob, 12), addMonths(doses[1], 2));
    return [recommendBoosterMinimumStart(ctx, minimumStart)];
  }

  if (startAgeMonths >= 12 && startAgeMonths <= 23) {
    if (doses.length === 1) {
      return [recommendNextDose(ctx, 2, addMonths(doses[0], 2))];
    }
    const windowStart = addMonths(doses[1], 12);
    const windowEnd = addMonths(doses[1], 23);
    return [recommendBoosterWindow(ctx, windowStart, windowEnd)];
  }

  if (startAgeYears >= 2 && startAgeYears <= 9) {
    if (doses.length === 1) {
      const recommended = addMonths(doses[0], 2);
      const minIntervalMet = daysBetween(doses[0], today) >= 28;
      if (minIntervalMet && isBefore(today, recommended)) {
        return [
          makeRecommendation({
            id: 'menb-dose2-eligible',
            vaccineCategory: 'meningococcalB',
            product: 'bexsero',
            doseLabelKey: 'doseLabel_dose2',
            status: 'eligible-now',
            timingKind: 'FIXED_DATE',
            recommendedDate: iso(recommended),
            minimumValidDate: iso(addDays(doses[0], 28)),
            noteKeys: ['note_menbTwoToNineYearInterval'],
          }),
        ];
      }
      return [recommendNextDose(ctx, 2, recommended, 'note_menbTwoToNineYearInterval')];
    }
    return [
      makeRecommendation({
        id: 'menb-completed',
        vaccineCategory: 'meningococcalB',
        doseLabelKey: 'doseLabel_seriesComplete',
        status: 'completed',
        noteKeys: ['note_menbTwoToNineYearInterval'],
      }),
    ];
  }

  if (startAgeYears >= 10 && startAgeYears <= 17) {
    if (doses.length === 1) {
      return [recommendNextDose(ctx, 2, addMonths(doses[0], 6), 'note_menbTeenMinInterval')];
    }
    return [
      makeRecommendation({
        id: 'menb-completed',
        vaccineCategory: 'meningococcalB',
        doseLabelKey: 'doseLabel_seriesComplete',
        status: 'completed',
        noteKeys: ['note_menbTeenMinInterval'],
      }),
    ];
  }

  return [];
}

export function calculateMenBCatchUp(ctx: RuleContext): VaccineRecommendation[] {
  const { dob, today } = ctx;
  const recommendedStart = addMonths(dob, 2);
  const ageMonths = ageInMonthsAt(dob, today);
  const ageYears = ageInYearsAt(dob, today);

  if (ageMonths < 2) {
    return [
      makeRecommendation({
        id: 'menb-not-yet-eligible',
        vaccineCategory: 'meningococcalB',
        product: 'bexsero',
        doseLabelKey: 'doseLabel_dose1',
        status: 'not-yet-eligible',
        recommendedDate: iso(recommendedStart),
        noteKeys: [],
      }),
    ];
  }

  if (ageYears >= 2 && ageYears <= 17) {
    return [
      makeRecommendation({
        id: 'menb-dose1-due',
        vaccineCategory: 'meningococcalB',
        product: 'bexsero',
        doseLabelKey: 'doseLabel_dose1',
        status: 'due-now',
        noteKeys: [],
      }),
    ];
  }

  if (ageMonths >= 2 && ageMonths <= 23) {
    return [
      makeRecommendation({
        id: 'menb-dose1-due',
        vaccineCategory: 'meningococcalB',
        product: 'bexsero',
        doseLabelKey: 'doseLabel_dose1',
        status: 'due-now',
        recommendedDate: ageMonths < 12 ? iso(recommendedStart) : undefined,
        noteKeys: [],
      }),
    ];
  }

  return [];
}
