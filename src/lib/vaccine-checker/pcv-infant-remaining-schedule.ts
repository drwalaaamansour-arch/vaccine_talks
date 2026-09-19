import { addMonths, ageAtDate, isAfter, laterOf } from '@/lib/vaccine-checker/date-utils';
import { makeRecommendation, type RuleContext, type VaccineRecommendation } from '@/lib/vaccine-checker/types';

const PRIMARY_COUNT = 3;

/** Matches `calculatePcv()` — whole months at first dose (days do not increment the month count). */
export function synflorixAgeAtFirstDoseMonths(dob: Date, firstDoseDate: Date): number {
  const age = ageAtDate(dob, firstDoseDate);
  return age.years * 12 + age.months;
}

/** Same branch gate as `calculatePcv()` → `standardPrimaryPlusBooster` for Synflorix (first dose before 7 months). */
export function isSynflorixBeforeSevenMonthPrimarySeries(
  ctx: RuleContext,
  product: string | undefined,
  doseDates: Date[]
): boolean {
  if (product !== 'synflorix') {
    return false;
  }

  if (ageAtDate(ctx.dob, ctx.today).years >= 2) {
    return false;
  }

  const firstDoseDate = doseDates[0] ?? null;
  if (firstDoseDate) {
    return synflorixAgeAtFirstDoseMonths(ctx.dob, firstDoseDate) < 7;
  }

  // No first dose yet: same fallback as `calculatePcv()` uses only while infant is under 7 months.
  const ageAtReferenceMonths =
    ageAtDate(ctx.dob, ctx.today).years * 12 + ageAtDate(ctx.dob, ctx.today).months;
  return ageAtReferenceMonths < 7;
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
  const product = resolveSynflorixProduct(ctx, [item]);

  return (
    isSynflorixBeforeSevenMonthPrimarySeries(ctx, product, doses) &&
    (history?.numberOfDoses ?? 0) === 0 &&
    doses.length === 0
  );
}

function resolveSynflorixProduct(
  ctx: RuleContext,
  recommendations: VaccineRecommendation[]
): string | undefined {
  const history = ctx.getHistory('pneumococcal');
  if (history?.product === 'synflorix') {
    return 'synflorix';
  }
  const fromRec = recommendations.find(
    (item) => item.vaccineCategory === 'pneumococcal' && item.product === 'synflorix'
  );
  return fromRec?.product;
}

/**
 * Preferred booster window (11–15 months) vs minimum 6 months after last primary — may be impossible if primaries are late.
 * Does not pick a calendar date; flags for clinical review only.
 */
export function synflorixBoosterPrimaryWindowConflict(dob: Date, doseDates: Date[]): boolean {
  if (doseDates.length < PRIMARY_COUNT) {
    return false;
  }

  const lastPrimary = doseDates[PRIMARY_COUNT - 1]!;
  const earliestByAge = addMonths(dob, 11);
  const latestByAge = addMonths(dob, 15);
  const earliestByInterval = addMonths(lastPrimary, 6);
  const effectiveEarliest = laterOf(earliestByAge, earliestByInterval);

  return isAfter(effectiveEarliest, latestByAge);
}

export function flagSynflorixBoosterTimingConflictNotes(
  recommendations: VaccineRecommendation[],
  ctx: RuleContext
): VaccineRecommendation[] {
  const history = ctx.getHistory('pneumococcal');
  if (history?.product !== 'synflorix') {
    return recommendations;
  }

  const doses = history.doseDates ?? [];
  if (!synflorixBoosterPrimaryWindowConflict(ctx.dob, doses)) {
    return recommendations;
  }

  return recommendations.map((item) => {
    if (
      item.vaccineCategory !== 'pneumococcal' ||
      item.doseLabelKey !== 'doseLabel_booster' ||
      item.conditionalNextDose
    ) {
      return item;
    }

    if (item.noteKeys.includes('note_pcvSynflorixBoosterTimingNeedsReview')) {
      return item;
    }

    return {
      ...item,
      noteKeys: [...item.noteKeys, 'note_pcvSynflorixBoosterTimingNeedsReview'],
    };
  });
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

function makeRemainingPrimary(doseNumber: 2 | 3, previousDoseNumber: 1 | 2): VaccineRecommendation {
  return makeRecommendation({
    id: `pcv-remaining-dose${doseNumber}-after-dose${previousDoseNumber}`,
    vaccineCategory: 'pneumococcal',
    product: 'synflorix',
    doseLabelKey: doseNumber === 2 ? 'doseLabel_dose2' : 'doseLabel_dose3',
    status: 'upcoming',
    conditionalNextDose: true,
    noteKeys: [],
    urgency: 15,
  });
}

function makeRemainingBooster(noteKeys: string[] = []): VaccineRecommendation {
  return makeRecommendation({
    id: 'pcv-remaining-booster-after-primary-series',
    vaccineCategory: 'pneumococcal',
    product: 'synflorix',
    doseLabelKey: 'doseLabel_booster',
    status: 'upcoming',
    conditionalNextDose: true,
    noteKeys,
    urgency: 10,
  });
}

/**
 * Synflorix before-7-month start: show remaining primaries/booster without projecting dates from unrecorded doses.
 */
export function appendPcvInfantPrimaryPlusBoosterRemainingSchedule(
  recommendations: VaccineRecommendation[],
  ctx: RuleContext
): VaccineRecommendation[] {
  const history = ctx.getHistory('pneumococcal');
  const doses = history?.doseDates ?? [];
  const product = resolveSynflorixProduct(ctx, recommendations);

  if (!isSynflorixBeforeSevenMonthPrimarySeries(ctx, product, doses)) {
    return [];
  }

  if (
    recommendations.some(
      (item) => item.vaccineCategory === 'pneumococcal' && item.status === 'completed'
    )
  ) {
    return [];
  }

  if (doses.length > PRIMARY_COUNT) {
    return [];
  }

  const extras: VaccineRecommendation[] = [];
  const recordedPrimaries = Math.min(doses.length, PRIMARY_COUNT);

  if (recordedPrimaries < PRIMARY_COUNT) {
    for (let doseNum = recordedPrimaries + 2; doseNum <= PRIMARY_COUNT; doseNum++) {
      const doseLabelKey = doseNum === 2 ? 'doseLabel_dose2' : 'doseLabel_dose3';
      if (hasPcvRow(recommendations, doseLabelKey, { nonConditionalOnly: true })) {
        continue;
      }
      if (hasPcvRow([...recommendations, ...extras], doseLabelKey, { conditionalOnly: true })) {
        continue;
      }
      if (doseNum === 2) {
        extras.push(makeRemainingPrimary(2, 1));
      } else {
        extras.push(makeRemainingPrimary(3, 2));
      }
    }
  }

  const boosterAlreadyShown =
    hasPcvRow(recommendations, 'doseLabel_booster') || hasPcvRow(extras, 'doseLabel_booster');

  if (!boosterAlreadyShown) {
    const conflictNotes =
      recordedPrimaries === PRIMARY_COUNT && synflorixBoosterPrimaryWindowConflict(ctx.dob, doses)
        ? ['note_pcvSynflorixBoosterTimingNeedsReview']
        : [];
    if (recordedPrimaries < PRIMARY_COUNT || conflictNotes.length > 0) {
      extras.push(makeRemainingBooster(conflictNotes));
    }
  }

  return extras;
}

/** @deprecated Use isSynflorixBeforeSevenMonthPrimarySeries */
export const isPcvInfantThreePrimaryPlusBoosterSchedule = isSynflorixBeforeSevenMonthPrimarySeries;

export function isPcvInfantRemainingPrimaryConditionalItem(item: VaccineRecommendation): boolean {
  return (
    item.vaccineCategory === 'pneumococcal' &&
    item.product === 'synflorix' &&
    item.conditionalNextDose === true &&
    /^pcv-remaining-dose[23]-after-dose[12]$/.test(item.id)
  );
}

export function isPcvInfantRemainingBoosterConditionalItem(item: VaccineRecommendation): boolean {
  return (
    item.vaccineCategory === 'pneumococcal' &&
    item.product === 'synflorix' &&
    item.conditionalNextDose === true &&
    item.id === 'pcv-remaining-booster-after-primary-series'
  );
}

export function assertNoProjectedDatesOnPcvRemainingItems(items: VaccineRecommendation[]): void {
  for (const item of items) {
    if (
      isPcvInfantRemainingPrimaryConditionalItem(item) ||
      isPcvInfantRemainingBoosterConditionalItem(item)
    ) {
      if (item.recommendedDate || item.conditionalProjectedFromDate) {
        throw new Error(`PCV remaining item ${item.id} must not include projected dates.`);
      }
    }
  }
}

export { PRIMARY_COUNT as PCV_INFANT_PRIMARY_COUNT };
