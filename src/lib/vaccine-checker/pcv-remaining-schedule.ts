import { ageAtDate, daysBetween } from '@/lib/vaccine-checker/date-utils';
import { isOlderThanFiveYears } from '@/lib/vaccine-checker/product-options';
import { makeRecommendation, type RuleContext, type VaccineRecommendation } from '@/lib/vaccine-checker/types';

const THREE_PRIMARY_COUNT = 3;

/** Matches `calculatePcv()` — whole months at first dose (days do not increment the month count). */
export function pcvAgeAtFirstDoseMonths(dob: Date, firstDoseDate: Date): number {
  const age = ageAtDate(dob, firstDoseDate);
  return age.years * 12 + age.months;
}

function ageInMonthsAt(dob: Date, date: Date): number {
  const age = ageAtDate(dob, date);
  return age.years * 12 + age.months;
}

function resolvePcvProduct(ctx: RuleContext, recommendations: VaccineRecommendation[]): string | undefined {
  const history = ctx.getHistory('pneumococcal');
  if (history?.product && history.product !== 'dontKnow') {
    return history.product;
  }
  return recommendations.find(
    (item) => item.vaccineCategory === 'pneumococcal' && item.product && item.product !== 'dontKnow'
  )?.product;
}

function allDosesGivenBeforeAgeMonths(dob: Date, doses: Date[], maxAgeMonths: number): boolean {
  return doses.every((dose) => ageInMonthsAt(dob, dose) < maxAgeMonths);
}

function twoInfantDosesNeedTwelveMonthCatchUp(ctx: RuleContext, doses: Date[]): boolean {
  if (doses.length !== 2) {
    return false;
  }
  if (ageInMonthsAt(ctx.dob, ctx.today) < 12) {
    return false;
  }
  return allDosesGivenBeforeAgeMonths(ctx.dob, doses, 12);
}

/** Same branch gate as `calculatePcv()` for 3-primary + booster before 7 months (non–Vaxneuvance). */
export function isPcvThreePrimaryPlusBoosterBeforeSevenMonths(
  ctx: RuleContext,
  product: string | undefined,
  doseDates: Date[]
): boolean {
  if (!product || product === 'vaxneuvance' || product === 'dontKnow') {
    return false;
  }

  if (ageAtDate(ctx.dob, ctx.today).years >= 2) {
    return false;
  }

  const firstDoseDate = doseDates[0] ?? null;
  const ageAtStartMonths = firstDoseDate
    ? pcvAgeAtFirstDoseMonths(ctx.dob, firstDoseDate)
    : ageInMonthsAt(ctx.dob, ctx.today);

  if (ageAtStartMonths >= 7) {
    return false;
  }

  return ageAtStartMonths < 7;
}

/** @deprecated Use isPcvThreePrimaryPlusBoosterBeforeSevenMonths */
export const isSynflorixBeforeSevenMonthPrimarySeries = (
  ctx: RuleContext,
  product: string | undefined,
  doseDates: Date[]
): boolean => product === 'synflorix' && isPcvThreePrimaryPlusBoosterBeforeSevenMonths(ctx, product, doseDates);

export const synflorixAgeAtFirstDoseMonths = pcvAgeAtFirstDoseMonths;

function isPcvSevenToElevenMonthSeries(
  ctx: RuleContext,
  product: string | undefined,
  doseDates: Date[]
): boolean {
  if (!product || product === 'dontKnow') {
    return false;
  }

  if (product === 'vaxneuvance') {
    const firstDoseDate = doseDates[0] ?? null;
    const ageAtStartMonths = firstDoseDate
      ? pcvAgeAtFirstDoseMonths(ctx.dob, firstDoseDate)
      : ageInMonthsAt(ctx.dob, ctx.today);
    if (ageAtStartMonths < 7 || ageAtStartMonths >= 12) {
      return false;
    }
    return ageAtStartMonths >= 7 && ageAtStartMonths <= 11;
  }

  const firstDoseDate = doseDates[0] ?? null;
  const ageAtStartMonths = firstDoseDate
    ? pcvAgeAtFirstDoseMonths(ctx.dob, firstDoseDate)
    : ageInMonthsAt(ctx.dob, ctx.today);

  if (ageAtDate(ctx.dob, ctx.today).years >= 2) {
    return false;
  }

  return ageAtStartMonths >= 7 && ageAtStartMonths < 12;
}

function isVaxneuvanceInfantUnderSeven(ctx: RuleContext, doseDates: Date[]): boolean {
  if (ageAtDate(ctx.dob, ctx.today).years >= 2) {
    return false;
  }

  const firstDoseDate = doseDates[0] ?? null;
  const ageAtStartMonths = firstDoseDate
    ? pcvAgeAtFirstDoseMonths(ctx.dob, firstDoseDate)
    : ageInMonthsAt(ctx.dob, ctx.today);

  return ageAtStartMonths < 7;
}

export function shouldSuppressPcvConditionalNextDoseFromAsOf(
  ctx: RuleContext,
  item: VaccineRecommendation
): boolean {
  if (item.vaccineCategory !== 'pneumococcal' || item.doseLabelKey !== 'doseLabel_dose1') {
    return false;
  }

  const history = ctx.getHistory('pneumococcal');
  const doses = history?.doseDates ?? [];
  const product = resolvePcvProduct(ctx, [item]);

  if ((history?.numberOfDoses ?? 0) !== 0 || doses.length !== 0) {
    return false;
  }

  if (isPcvThreePrimaryPlusBoosterBeforeSevenMonths(ctx, product, doses)) {
    return true;
  }

  return product === 'vaxneuvance' && isVaxneuvanceInfantUnderSeven(ctx, doses);
}

function hasPcvRow(
  recommendations: VaccineRecommendation[],
  doseLabelKey: string,
  options: { conditionalOnly?: boolean; nonConditionalOnly?: boolean } = {}
): boolean {
  return recommendations.some(
    (item) =>
      item.vaccineCategory === 'pneumococcal' &&
      item.doseLabelKey === doseLabelKey &&
      (options.conditionalOnly
        ? item.conditionalNextDose === true
        : options.nonConditionalOnly
          ? !item.conditionalNextDose
          : true)
  );
}

function makeRemainingPrimary(
  product: string,
  doseNumber: 2 | 3,
  previousDoseNumber: 1 | 2
): VaccineRecommendation {
  return makeRecommendation({
    id: `pcv-remaining-dose${doseNumber}-after-dose${previousDoseNumber}`,
    vaccineCategory: 'pneumococcal',
    product,
    doseLabelKey: doseNumber === 2 ? 'doseLabel_dose2' : 'doseLabel_dose3',
    status: 'upcoming',
    conditionalNextDose: true,
    noteKeys: [],
    urgency: 15,
  });
}

function makeRemainingBoosterAfterPrimarySeries(product: string): VaccineRecommendation {
  return makeRecommendation({
    id: 'pcv-remaining-booster-after-primary-series',
    vaccineCategory: 'pneumococcal',
    product,
    doseLabelKey: 'doseLabel_booster',
    status: 'upcoming',
    conditionalNextDose: true,
    noteKeys: [],
    urgency: 10,
  });
}

function makeRemainingSevenToElevenBooster(product: string): VaccineRecommendation {
  return makeRecommendation({
    id: 'pcv-remaining-booster-seven-to-eleven-after-dose2',
    vaccineCategory: 'pneumococcal',
    product,
    doseLabelKey: 'doseLabel_booster',
    status: 'upcoming',
    conditionalNextDose: true,
    noteKeys: [],
    urgency: 10,
  });
}

function appendThreePrimaryPlusBoosterRemaining(
  recommendations: VaccineRecommendation[],
  ctx: RuleContext,
  product: string,
  doses: Date[]
): VaccineRecommendation[] {
  if (twoInfantDosesNeedTwelveMonthCatchUp(ctx, doses)) {
    return [];
  }

  if (doses.length > THREE_PRIMARY_COUNT) {
    return [];
  }

  const extras: VaccineRecommendation[] = [];
  const recordedPrimaries = Math.min(doses.length, THREE_PRIMARY_COUNT);

  if (recordedPrimaries < THREE_PRIMARY_COUNT) {
    for (let doseNum = recordedPrimaries + 2; doseNum <= THREE_PRIMARY_COUNT; doseNum++) {
      const doseLabelKey = doseNum === 2 ? 'doseLabel_dose2' : 'doseLabel_dose3';
      if (hasPcvRow(recommendations, doseLabelKey, { nonConditionalOnly: true })) {
        continue;
      }
      if (hasPcvRow([...recommendations, ...extras], doseLabelKey, { conditionalOnly: true })) {
        continue;
      }
      if (doseNum === 2) {
        extras.push(makeRemainingPrimary(product, 2, 1));
      } else {
        extras.push(makeRemainingPrimary(product, 3, 2));
      }
    }
  }

  const boosterAlreadyShown =
    hasPcvRow(recommendations, 'doseLabel_booster') || hasPcvRow(extras, 'doseLabel_booster');

  if (!boosterAlreadyShown && recordedPrimaries < THREE_PRIMARY_COUNT) {
    extras.push(makeRemainingBoosterAfterPrimarySeries(product));
  }

  return extras;
}

function appendVaxneuvanceInfantRemaining(
  recommendations: VaccineRecommendation[],
  ctx: RuleContext,
  doses: Date[]
): VaccineRecommendation[] {
  const product = 'vaxneuvance';
  if (doses.length >= 3) {
    return [];
  }

  const extras: VaccineRecommendation[] = [];

  if (doses.length === 0) {
    const boosterAlreadyShown = hasPcvRow(recommendations, 'doseLabel_booster');
    if (!boosterAlreadyShown) {
      extras.push(makeRemainingBoosterAfterPrimarySeries(product));
    }
    return extras;
  }

  if (doses.length === 1) {
    const boosterAlreadyShown = hasPcvRow(recommendations, 'doseLabel_booster');
    if (!boosterAlreadyShown) {
      extras.push(makeRemainingBoosterAfterPrimarySeries(product));
    }
    return extras;
  }

  if (doses.length === 2) {
    const intervalWeeks = daysBetween(doses[0], doses[1]) / 7;
    const primaryComplete = intervalWeeks >= 8;
    if (primaryComplete) {
      return [];
    }
    const boosterAlreadyShown = hasPcvRow(recommendations, 'doseLabel_booster');
    if (!boosterAlreadyShown) {
      extras.push(makeRemainingBoosterAfterPrimarySeries(product));
    }
  }

  return extras;
}

function appendSevenToElevenRemaining(
  recommendations: VaccineRecommendation[],
  product: string,
  doses: Date[]
): VaccineRecommendation[] {
  if (doses.length !== 1) {
    return [];
  }

  if (hasPcvRow(recommendations, 'doseLabel_booster')) {
    return [];
  }

  return [makeRemainingSevenToElevenBooster(product)];
}

/**
 * Show remaining primaries/booster implied by `calculatePcv()` without projecting dates from unrecorded doses.
 */
export function appendPcvRemainingSchedule(
  recommendations: VaccineRecommendation[],
  ctx: RuleContext
): VaccineRecommendation[] {
  const history = ctx.getHistory('pneumococcal');
  const doses = history?.doseDates ?? [];
  const product = resolvePcvProduct(ctx, recommendations);

  if (!product || product === 'dontKnow') {
    return [];
  }

  if (
    recommendations.some(
      (item) => item.vaccineCategory === 'pneumococcal' && item.status === 'completed'
    )
  ) {
    return [];
  }

  if (isOlderThanFiveYears(ctx.dob, ctx.today) && doses.length >= 1) {
    return [];
  }

  if (product === 'vaxneuvance' && isVaxneuvanceInfantUnderSeven(ctx, doses)) {
    return appendVaxneuvanceInfantRemaining(recommendations, ctx, doses);
  }

  if (isPcvThreePrimaryPlusBoosterBeforeSevenMonths(ctx, product, doses)) {
    return appendThreePrimaryPlusBoosterRemaining(recommendations, ctx, product, doses);
  }

  if (isPcvSevenToElevenMonthSeries(ctx, product, doses)) {
    return appendSevenToElevenRemaining(recommendations, product, doses);
  }

  return [];
}

/** @deprecated Use appendPcvRemainingSchedule */
export function appendPcvInfantPrimaryPlusBoosterRemainingSchedule(
  recommendations: VaccineRecommendation[],
  ctx: RuleContext
): VaccineRecommendation[] {
  return appendPcvRemainingSchedule(recommendations, ctx);
}

export function isPcvRemainingPrimaryConditionalItem(item: VaccineRecommendation): boolean {
  return (
    item.vaccineCategory === 'pneumococcal' &&
    item.conditionalNextDose === true &&
    /^pcv-remaining-dose[23]-after-dose[12]$/.test(item.id)
  );
}

export function isPcvRemainingBoosterAfterPrimarySeriesConditionalItem(
  item: VaccineRecommendation
): boolean {
  return (
    item.vaccineCategory === 'pneumococcal' &&
    item.conditionalNextDose === true &&
    item.id === 'pcv-remaining-booster-after-primary-series'
  );
}

export function isPcvRemainingSevenToElevenBoosterConditionalItem(
  item: VaccineRecommendation
): boolean {
  return (
    item.vaccineCategory === 'pneumococcal' &&
    item.conditionalNextDose === true &&
    item.id === 'pcv-remaining-booster-seven-to-eleven-after-dose2'
  );
}

/** @deprecated Use isPcvRemainingPrimaryConditionalItem */
export const isPcvInfantRemainingPrimaryConditionalItem = isPcvRemainingPrimaryConditionalItem;

/** @deprecated Use isPcvRemainingBoosterAfterPrimarySeriesConditionalItem */
export const isPcvInfantRemainingBoosterConditionalItem = (
  item: VaccineRecommendation
): boolean =>
  isPcvRemainingBoosterAfterPrimarySeriesConditionalItem(item) ||
  isPcvRemainingSevenToElevenBoosterConditionalItem(item);

export function assertNoProjectedDatesOnPcvRemainingItems(items: VaccineRecommendation[]): void {
  for (const item of items) {
    if (
      isPcvRemainingPrimaryConditionalItem(item) ||
      isPcvRemainingBoosterAfterPrimarySeriesConditionalItem(item) ||
      isPcvRemainingSevenToElevenBoosterConditionalItem(item)
    ) {
      if (item.recommendedDate || item.conditionalProjectedFromDate) {
        throw new Error(`PCV remaining item ${item.id} must not include projected dates.`);
      }
    }
  }
}

export { THREE_PRIMARY_COUNT as PCV_INFANT_PRIMARY_COUNT };
