import {
  addMonths,
  addYears,
  ageAtDate,
  daysBetween,
  isBefore,
  isOnOrAfter,
} from '@/lib/vaccine-checker/date-utils';
import {
  iso,
  makeRecommendation,
  type RuleContext,
  type VaccineRecommendation,
} from '@/lib/vaccine-checker/types';

export function getAgeAtFirstDoseYears(dob: Date, firstDoseDate: Date): number {
  return ageAtDate(dob, firstDoseDate).years;
}

export function isHpvTwoDoseSeries(
  product: string,
  dob: Date,
  firstDoseDate: Date
): boolean {
  const ageAtFirstDose = getAgeAtFirstDoseYears(dob, firstDoseDate);
  if (ageAtFirstDose < 9) {
    return false;
  }

  switch (product) {
    case 'cervarix':
      return ageAtFirstDose <= 14;
    case 'gardasil4':
      return ageAtFirstDose <= 13;
    case 'gardasil9':
      return ageAtFirstDose <= 14;
    default:
      return false;
  }
}

export function canProjectHpvTwoDoseWithoutProduct(dob: Date, asOfDate: Date): boolean {
  const ageYears = ageAtDate(dob, asOfDate).years;
  return ageYears >= 9 && ageYears <= 13;
}

export function requiresHpvProductForZeroDoseCatchUp(dob: Date, asOfDate: Date): boolean {
  return ageAtDate(dob, asOfDate).years === 14;
}

export function isStartingHpvAtFifteenOrOlder(dob: Date, asOfDate: Date): boolean {
  return ageAtDate(dob, asOfDate).years >= 15;
}

function zeroDoseCatchUp(ctx: RuleContext): VaccineRecommendation[] {
  const ageYears = ageAtDate(ctx.dob, ctx.today).years;

  if (canProjectHpvTwoDoseWithoutProduct(ctx.dob, ctx.today)) {
    return dose1Due();
  }

  if (requiresHpvProductForZeroDoseCatchUp(ctx.dob, ctx.today)) {
    return dose1Due(undefined, ['note_hpvRemainingDosesDependOnProduct']);
  }

  if (isStartingHpvAtFifteenOrOlder(ctx.dob, ctx.today)) {
    return dose1Due(undefined, ['note_hpvThreeDoseSeriesTimingDependsOnProduct']);
  }

  return dose1Due();
}

function needsReview(product?: string): VaccineRecommendation[] {
  return [
    makeRecommendation({
      id: 'hpv-needs-review',
      vaccineCategory: 'hpv',
      product,
      doseLabelKey: 'doseLabel_reviewNeeded',
      status: 'needs-review',
      noteKeys: ['note_hpvProductUnknown'],
      reasonKey: 'reason_hpvProductUnknown',
    }),
  ];
}

function doseStatus(ctx: RuleContext, recommended: Date): 'due-now' | 'upcoming' {
  return isOnOrAfter(ctx.today, recommended) ? 'due-now' : 'upcoming';
}

function resolveHpvDoseDates(history: NonNullable<ReturnType<RuleContext['getHistory']>>): Date[] {
  if (history.doseDates.length > 0) {
    return history.doseDates;
  }

  if (history.firstDoseDate) {
    return [history.firstDoseDate];
  }

  return [];
}

function hpvTwoDoseSeriesComplete(
  history: NonNullable<ReturnType<RuleContext['getHistory']>>,
  doses: Date[],
  twoDoseSeries: boolean
): boolean {
  if (!twoDoseSeries) {
    return false;
  }

  const claimed = history.numberOfDoses ?? 0;
  return claimed >= 2 && Boolean(history.secondDoseDateUnknown) && doses.length >= 1;
}

function upcomingThreeDoseSeriesFromDose1(
  ctx: RuleContext,
  product: string,
  dose1: Date,
  dose2Months: number
): VaccineRecommendation[] {
  const dose2Recommended = addMonths(dose1, dose2Months);
  const dose3Recommended = addMonths(dose1, 6);

  return [
    makeRecommendation({
      id: 'hpv-dose2',
      vaccineCategory: 'hpv',
      product,
      doseLabelKey: 'doseLabel_dose2',
      status: doseStatus(ctx, dose2Recommended),
      recommendedDate: iso(dose2Recommended),
      noteKeys: [],
    }),
    makeRecommendation({
      id: 'hpv-dose3',
      vaccineCategory: 'hpv',
      product,
      doseLabelKey: 'doseLabel_dose3',
      status: doseStatus(ctx, dose3Recommended),
      recommendedDate: iso(dose3Recommended),
      noteKeys: [],
    }),
  ];
}

function dose1Due(product?: string, noteKeys: string[] = []): VaccineRecommendation[] {
  return [
    makeRecommendation({
      id: 'hpv-dose1-due',
      vaccineCategory: 'hpv',
      product,
      doseLabelKey: 'doseLabel_dose1',
      status: 'due-now',
      noteKeys,
    }),
  ];
}

function gardasil4Rules(
  ctx: RuleContext,
  doses: Date[],
  firstDoseDate: Date,
  history: NonNullable<ReturnType<RuleContext['getHistory']>>
): VaccineRecommendation[] {
  const product = 'gardasil4';
  const twoDoseSeries = isHpvTwoDoseSeries(product, ctx.dob, firstDoseDate);
  const targetDoses = twoDoseSeries ? 2 : 3;

  if (hpvTwoDoseSeriesComplete(history, doses, twoDoseSeries)) {
    return [
      makeRecommendation({
        id: 'hpv-completed',
        vaccineCategory: 'hpv',
        product,
        doseLabelKey: 'doseLabel_seriesComplete',
        status: 'completed',
        noteKeys: [],
      }),
    ];
  }

  if (doses.length >= targetDoses) {
    return [
      makeRecommendation({
        id: 'hpv-completed',
        vaccineCategory: 'hpv',
        product,
        doseLabelKey: 'doseLabel_seriesComplete',
        status: 'completed',
        noteKeys: [],
      }),
    ];
  }

  if (doses.length === 0) {
    return dose1Due(product);
  }

  if (twoDoseSeries) {
    const dose2Recommended = addMonths(doses[0], 6);
    const status = isOnOrAfter(ctx.today, dose2Recommended) ? 'due-now' : 'upcoming';
    return [
      makeRecommendation({
        id: 'hpv-dose2',
        vaccineCategory: 'hpv',
        product,
        doseLabelKey: 'doseLabel_dose2',
        status,
        recommendedDate: iso(dose2Recommended),
        noteKeys: [],
      }),
    ];
  }

  if (doses.length === 1) {
    return upcomingThreeDoseSeriesFromDose1(ctx, product, doses[0], 2);
  }

  const dose3Recommended = addMonths(doses[0], 6);
  const status = isOnOrAfter(ctx.today, dose3Recommended) ? 'due-now' : 'upcoming';
  return [
    makeRecommendation({
      id: 'hpv-dose3',
      vaccineCategory: 'hpv',
      product,
      doseLabelKey: 'doseLabel_dose3',
      status,
      recommendedDate: iso(dose3Recommended),
      noteKeys: [],
    }),
  ];
}

function gardasil9Rules(
  ctx: RuleContext,
  doses: Date[],
  firstDoseDate: Date,
  history: NonNullable<ReturnType<RuleContext['getHistory']>>
): VaccineRecommendation[] {
  const product = 'gardasil9';
  const twoDoseSeries = isHpvTwoDoseSeries(product, ctx.dob, firstDoseDate);

  if (twoDoseSeries) {
    if (hpvTwoDoseSeriesComplete(history, doses, true)) {
      return [
        makeRecommendation({
          id: 'hpv-completed',
          vaccineCategory: 'hpv',
          product,
          doseLabelKey: 'doseLabel_seriesComplete',
          status: 'completed',
          noteKeys: [],
        }),
      ];
    }

    if (doses.length >= 2) {
      const intervalDays = daysBetween(doses[0], doses[1]);
      if (intervalDays < 150) {
        const dose3Recommended = addMonths(doses[0], 6);
        const status = isOnOrAfter(ctx.today, dose3Recommended) ? 'due-now' : 'upcoming';
        return [
          makeRecommendation({
            id: 'hpv-dose3-required',
            vaccineCategory: 'hpv',
            product,
            doseLabelKey: 'doseLabel_dose3',
            status,
            recommendedDate: iso(dose3Recommended),
            noteKeys: ['note_gardasil9ThirdDoseRequired'],
            urgency: 85,
          }),
        ];
      }
      return [
        makeRecommendation({
          id: 'hpv-completed',
          vaccineCategory: 'hpv',
          product,
          doseLabelKey: 'doseLabel_seriesComplete',
          status: 'completed',
          noteKeys: [],
        }),
      ];
    }

    if (doses.length === 1) {
      const dose2Recommended = addMonths(doses[0], 6);
      const status = isOnOrAfter(ctx.today, dose2Recommended) ? 'due-now' : 'upcoming';
      return [
        makeRecommendation({
          id: 'hpv-dose2',
          vaccineCategory: 'hpv',
          product,
          doseLabelKey: 'doseLabel_dose2',
          status,
          recommendedDate: iso(dose2Recommended),
          noteKeys: [],
        }),
      ];
    }
  } else {
    if (doses.length >= 3) {
      return [
        makeRecommendation({
          id: 'hpv-completed',
          vaccineCategory: 'hpv',
          product,
          doseLabelKey: 'doseLabel_seriesComplete',
          status: 'completed',
          noteKeys: [],
        }),
      ];
    }
    if (doses.length === 2) {
      const dose3Recommended = addMonths(doses[0], 6);
      const status = isOnOrAfter(ctx.today, dose3Recommended) ? 'due-now' : 'upcoming';
      return [
        makeRecommendation({
          id: 'hpv-dose3',
          vaccineCategory: 'hpv',
          product,
          doseLabelKey: 'doseLabel_dose3',
          status,
          recommendedDate: iso(dose3Recommended),
          noteKeys: [],
        }),
      ];
    }
    if (doses.length === 1) {
      return upcomingThreeDoseSeriesFromDose1(ctx, product, doses[0], 2);
    }
  }

  return dose1Due(product);
}

function cervarixRules(
  ctx: RuleContext,
  doses: Date[],
  firstDoseDate: Date,
  history: NonNullable<ReturnType<RuleContext['getHistory']>>
): VaccineRecommendation[] {
  const product = 'cervarix';
  const twoDoseSeries = isHpvTwoDoseSeries(product, ctx.dob, firstDoseDate);
  const targetDoses = twoDoseSeries ? 2 : 3;

  if (hpvTwoDoseSeriesComplete(history, doses, twoDoseSeries)) {
    return [
      makeRecommendation({
        id: 'hpv-completed',
        vaccineCategory: 'hpv',
        product,
        doseLabelKey: 'doseLabel_seriesComplete',
        status: 'completed',
        noteKeys: [],
      }),
    ];
  }

  if (doses.length >= targetDoses) {
    return [
      makeRecommendation({
        id: 'hpv-completed',
        vaccineCategory: 'hpv',
        product,
        doseLabelKey: 'doseLabel_seriesComplete',
        status: 'completed',
        noteKeys: [],
      }),
    ];
  }

  if (doses.length === 0) {
    return dose1Due(product);
  }

  if (twoDoseSeries) {
    const dose2Recommended = addMonths(doses[0], 6);
    const status = isOnOrAfter(ctx.today, dose2Recommended) ? 'due-now' : 'upcoming';
    return [
      makeRecommendation({
        id: 'hpv-dose2',
        vaccineCategory: 'hpv',
        product,
        doseLabelKey: 'doseLabel_dose2',
        status,
        recommendedDate: iso(dose2Recommended),
        noteKeys: [],
      }),
    ];
  }

  if (doses.length === 1) {
    return upcomingThreeDoseSeriesFromDose1(ctx, product, doses[0], 1);
  }

  const dose3Recommended = addMonths(doses[0], 6);
  const status = isOnOrAfter(ctx.today, dose3Recommended) ? 'due-now' : 'upcoming';
  return [
    makeRecommendation({
      id: 'hpv-dose3',
      vaccineCategory: 'hpv',
      product,
      doseLabelKey: 'doseLabel_dose3',
      status,
      recommendedDate: iso(dose3Recommended),
      noteKeys: [],
    }),
  ];
}

function isUnknownHpvProduct(product: string | undefined): boolean {
  return !product || product === 'dontKnow' || product === 'other';
}

export function calculateHpv(ctx: RuleContext): VaccineRecommendation[] {
  const history = ctx.getHistory('hpv');
  const product = history?.product;
  const doses = history ? resolveHpvDoseDates(history) : [];
  const ageYears = ageAtDate(ctx.dob, ctx.today).years;

  if (ageYears < 9 && doses.length === 0) {
    return [
      makeRecommendation({
        id: 'hpv-not-yet-eligible',
        vaccineCategory: 'hpv',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'not-yet-eligible',
        recommendedDate: iso(addYears(ctx.dob, 9)),
        noteKeys: [],
      }),
    ];
  }

  if (history?.firstDoseDateUnknown && (history.numberOfDoses ?? 0) >= 1) {
    return [
      makeRecommendation({
        id: 'hpv-additional-dose-needed',
        vaccineCategory: 'hpv',
        product,
        doseLabelKey: 'doseLabel_dose2',
        status: 'due-now',
        noteKeys: ['note_hpvRemainingTimingDependsOnFirstDose'],
        reasonKey: 'reason_hpvFirstDoseDateUnknown',
      }),
    ];
  }

  if (history?.secondDoseDateUnknown && (history.numberOfDoses ?? 0) >= 2) {
    const firstDose = history.firstDoseDate ?? doses[0];
    if (firstDose && getAgeAtFirstDoseYears(ctx.dob, firstDose) >= 9 && product && !isUnknownHpvProduct(product)) {
      const twoDoseSeries = isHpvTwoDoseSeries(product, ctx.dob, firstDose);
      if (twoDoseSeries) {
        return [
          makeRecommendation({
            id: 'hpv-completed',
            vaccineCategory: 'hpv',
            product,
            doseLabelKey: 'doseLabel_seriesComplete',
            status: 'completed',
            noteKeys: ['note_hpvSecondDoseDateUnknown'],
          }),
        ];
      }
    }

    return [
      makeRecommendation({
        id: 'hpv-additional-dose-timing-unknown',
        vaccineCategory: 'hpv',
        product,
        doseLabelKey: 'doseLabel_dose2',
        status: 'due-now',
        noteKeys: ['note_hpvRemainingTimingDependsOnFirstDose'],
        reasonKey: 'reason_hpvSecondDoseDateUnknown',
      }),
    ];
  }

  if (isUnknownHpvProduct(product)) {
    if (doses.length === 0 && ageYears >= 9) {
      return zeroDoseCatchUp(ctx);
    }
    if (doses.length > 0 && !history?.firstDoseDate) {
      return needsReview(product);
    }
    return needsReview(product);
  }

  const firstDoseDate = history?.firstDoseDate ?? doses[0];
  if (!firstDoseDate && doses.length >= 2) {
    return needsReview(product);
  }

  if (firstDoseDate && getAgeAtFirstDoseYears(ctx.dob, firstDoseDate) < 9) {
    return needsReview(product);
  }

  const resolvedFirst = firstDoseDate ?? ctx.today;

  switch (product) {
    case 'gardasil4':
      return gardasil4Rules(ctx, doses, resolvedFirst, history!);
    case 'gardasil9':
      return gardasil9Rules(ctx, doses, resolvedFirst, history!);
    case 'cervarix':
      return cervarixRules(ctx, doses, resolvedFirst, history!);
    default:
      return needsReview(product);
  }
}

export function calculateHpvCatchUp(ctx: RuleContext): VaccineRecommendation[] {
  if (ctx.getHistory('hpv')) {
    return calculateHpv(ctx);
  }

  const ageYears = ageAtDate(ctx.dob, ctx.today).years;
  if (ageYears < 9) {
    return [];
  }

  return zeroDoseCatchUp(ctx);
}
