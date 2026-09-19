import {
  canProjectHpvTwoDoseWithoutProduct,
  isHpvTwoDoseSeries,
} from '@/lib/vaccine-checker/rules/hpv';
import {
  isMenAcwyProductUnknown,
  isNimenrixInfantSeriesStart,
} from '@/lib/vaccine-checker/rules/menacwy';
import {
  isPcvSevenToElevenMonthZeroHistoryCatchUp,
  shouldShowPcvZeroHistoryProductSchedules,
} from '@/lib/vaccine-checker/pcv-zero-history-schedules';
import { shouldSuppressPcvConditionalNextDoseFromAsOf } from '@/lib/vaccine-checker/pcv-infant-remaining-schedule';
import { isOlderThanFiveYears } from '@/lib/vaccine-checker/product-options';
import { type AdditionalVaccineCategory } from '@/types/wizard-types';
import {
  addMonths,
  addWeeks,
  ageAtDate,
  isAfter,
  isSameDay,
  laterOf,
  startOfDay,
} from '@/lib/vaccine-checker/date-utils';
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

function getConditionalNextDoseLabel(currentDoseLabelKey: string): string {
  if (currentDoseLabelKey === 'doseLabel_dose1') return 'doseLabel_dose2';
  if (currentDoseLabelKey === 'doseLabel_dose2') return 'doseLabel_dose3';
  return 'doseLabel_nextDose';
}

function isNimenrixSixToElevenMonthStart(ctx: RuleContext, projectedDose1Date: Date): boolean {
  const ageMonths = ageInMonthsAt(ctx.dob, projectedDose1Date);
  return ageMonths >= 6 && ageMonths <= 11;
}

type MenBConditionalBoosterTiming =
  | { kind: 'window'; windowStart: Date; windowEnd: Date }
  | { kind: 'minimum_start'; minimumStart: Date };

function getMenBConditionalBoosterTiming(
  ctx: RuleContext,
  projectedDose1Date: Date
): MenBConditionalBoosterTiming | null {
  const { dob } = ctx;
  const ageMonths = ageInMonthsAt(dob, projectedDose1Date);
  const dose2Date = addMonths(projectedDose1Date, 2);

  if (ageMonths >= 2 && ageMonths <= 5) {
    return {
      kind: 'window',
      windowStart: laterOf(addMonths(dob, 12), addMonths(dose2Date, 6)),
      windowEnd: addMonths(dob, 15),
    };
  }

  if (ageMonths >= 6 && ageMonths <= 11) {
    return {
      kind: 'minimum_start',
      minimumStart: laterOf(addMonths(dob, 12), addMonths(dose2Date, 2)),
    };
  }

  if (ageMonths >= 12 && ageMonths <= 23) {
    return {
      kind: 'window',
      windowStart: addMonths(dose2Date, 12),
      windowEnd: addMonths(dose2Date, 23),
    };
  }

  return null;
}

function getConditionalNextDoseDate(
  item: VaccineRecommendation,
  ctx: RuleContext,
  projectedDose1Date: Date
): Date | null {
  switch (item.vaccineCategory) {
    case 'rotavirus': {
      const nextDoseDate = addMonths(projectedDose1Date, 2);
      const finalDoseLimit = addMonths(ctx.dob, 8);
      if (isAfter(nextDoseDate, finalDoseLimit)) {
        return null;
      }
      return nextDoseDate;
    }
    case 'pneumococcal': {
      if (isOlderThanFiveYears(ctx.dob, projectedDose1Date)) {
        return null;
      }
      const ageMonths = ageInMonthsAt(ctx.dob, projectedDose1Date);
      if (ageMonths >= 24 && item.product !== 'synflorix') {
        return null;
      }
      return addMonths(projectedDose1Date, 2);
    }
    case 'meningococcalB':
      return addMonths(projectedDose1Date, 2);
    case 'meningococcalACWY': {
      if (item.product === 'menactra') {
        return addMonths(projectedDose1Date, 3);
      }

      const ageMonths = ageInMonthsAt(ctx.dob, projectedDose1Date);
      if (ageMonths >= 12) {
        return null;
      }

      if (ageMonths >= 6 && ageMonths <= 11) {
        return laterOf(addMonths(ctx.dob, 12), addMonths(projectedDose1Date, 2));
      }

      return addMonths(projectedDose1Date, 2);
    }
    case 'influenza':
      return addWeeks(projectedDose1Date, 4);
    case 'varicella': {
      const ageYears = ageAtDate(ctx.dob, projectedDose1Date).years;
      return addMonths(projectedDose1Date, ageYears >= 13 ? 1 : 3);
    }
    case 'hepatitisA':
      return addMonths(projectedDose1Date, 6);
    case 'hpv': {
      if (!item.product || item.product === 'dontKnow' || item.product === 'other') {
        if (!canProjectHpvTwoDoseWithoutProduct(ctx.dob, projectedDose1Date)) {
          return null;
        }
        return addMonths(projectedDose1Date, 6);
      }
      if (!isHpvTwoDoseSeries(item.product, ctx.dob, projectedDose1Date)) {
        return null;
      }
      return addMonths(projectedDose1Date, 6);
    }
    default:
      return null;
  }
}

function getConditionalNextDoseMeta(
  item: VaccineRecommendation,
  ctx: RuleContext,
  projectedDose1Date: Date
): {
  doseLabelKey: string;
  product?: string;
  conditionalNoteKey?: string;
} {
  if (item.vaccineCategory === 'meningococcalACWY') {
    if (item.product === 'menactra') {
      return {
        doseLabelKey: 'doseLabel_dose2',
        product: 'menactra',
        conditionalNoteKey: 'resultConditionalNextDoseMenactra',
      };
    }

    if (isNimenrixSixToElevenMonthStart(ctx, projectedDose1Date)) {
      return {
        doseLabelKey: 'doseLabel_booster',
        product: 'nimenrix',
        conditionalNoteKey: 'resultConditionalNextDoseMenacwyBooster',
      };
    }
  }

  if (
    item.vaccineCategory === 'meningococcalB' &&
    item.doseLabelKey === 'doseLabel_booster'
  ) {
    return {
      doseLabelKey: 'doseLabel_booster',
      product: item.product ?? 'bexsero',
      conditionalNoteKey: 'resultConditionalNextDoseMenbBooster',
    };
  }

  if (item.vaccineCategory === 'hpv') {
    return {
      doseLabelKey: 'doseLabel_dose2',
      product: item.product,
      conditionalNoteKey: 'resultConditionalHpvTwoDoseSecond',
    };
  }

  return {
    doseLabelKey: getConditionalNextDoseLabel(item.doseLabelKey),
    product: item.product,
  };
}

function getConditionalFollowUpNoteKeys(
  item: VaccineRecommendation,
  ctx: RuleContext,
  projectedDose1Date: Date,
  meta: { conditionalNoteKey?: string }
): string[] {
  if (meta.conditionalNoteKey) {
    return [];
  }

  if (item.vaccineCategory === 'meningococcalB' && item.doseLabelKey === 'doseLabel_dose1') {
    const ageYears = ageAtDate(ctx.dob, projectedDose1Date).years;
    if (ageYears >= 2) {
      return ['note_menbTwoToNineYearInterval'];
    }
  }

  return [];
}

function parseIsoDate(isoDate: string): Date {
  const [year, month, day] = isoDate.split('-').map(Number);
  return startOfDay(new Date(year, month - 1, day));
}

function getProjectedPrimaryDoseDate(
  item: VaccineRecommendation,
  ctx: RuleContext
): Date | null {
  const today = startOfDay(ctx.input.referenceDate ?? ctx.today);

  if (item.vaccineCategory === 'varicella' && item.doseLabelKey === 'doseLabel_dose1') {
    if (item.status === 'upcoming' && item.recommendedDate) {
      const plannedDose1Date = parseIsoDate(item.recommendedDate);
      if (isAfter(plannedDose1Date, today)) {
        return plannedDose1Date;
      }
    }

    if (item.status === 'due-now' || item.status === 'eligible-now') {
      return today;
    }

    return null;
  }

  if (item.status !== 'due-now' && item.status !== 'eligible-now') {
    return null;
  }

  return today;
}

function getConditionalNextDoseDateForItem(
  item: VaccineRecommendation,
  ctx: RuleContext
): { nextDoseDate: Date; projectedDose1Date: Date } | null {
  const history = ctx.getHistory(item.vaccineCategory as AdditionalVaccineCategory);
  if (history && history.numberOfDoses > 0) {
    return null;
  }

  if (item.doseLabelKey !== 'doseLabel_dose1') {
    return null;
  }

  if (item.vaccineCategory === 'meningococcalACWY' && isMenAcwyProductUnknown(ctx)) {
    return null;
  }

  if (item.vaccineCategory === 'pneumococcal' && shouldShowPcvZeroHistoryProductSchedules(ctx)) {
    return null;
  }

  if (shouldSuppressPcvConditionalNextDoseFromAsOf(ctx, item)) {
    return null;
  }

  const projectedDose1Date = getProjectedPrimaryDoseDate(item, ctx);
  if (!projectedDose1Date) {
    return null;
  }

  const nextDoseDate = getConditionalNextDoseDate(item, ctx, projectedDose1Date);
  if (!nextDoseDate) {
    return null;
  }

  return { nextDoseDate, projectedDose1Date };
}

function getNimenrixInfantConditionalBoosterStart(
  ctx: RuleContext,
  projectedDose1Date: Date
): Date | null {
  if (!isNimenrixInfantSeriesStart(ctx.dob, projectedDose1Date)) {
    return null;
  }

  const projectedDose2Date = addMonths(projectedDose1Date, 2);
  return laterOf(addMonths(ctx.dob, 12), addMonths(projectedDose2Date, 2));
}

function appendMenAcwyInfantBoosterConditional(
  recommendations: VaccineRecommendation[],
  ctx: RuleContext,
  conditionalItems: VaccineRecommendation[]
): void {
  const history = ctx.getHistory('meningococcalACWY');
  if (history && history.numberOfDoses > 0) {
    return;
  }

  if (isMenAcwyProductUnknown(ctx)) {
    return;
  }

  const menacwyDose1 = recommendations.find(
    (item) =>
      item.vaccineCategory === 'meningococcalACWY' &&
      item.product === 'nimenrix' &&
      item.doseLabelKey === 'doseLabel_dose1' &&
      (item.status === 'due-now' || item.status === 'eligible-now')
  );

  if (!menacwyDose1) {
    return;
  }

  const projectedDose1Date = startOfDay(ctx.input.referenceDate ?? ctx.today);
  const minimumStart = getNimenrixInfantConditionalBoosterStart(ctx, projectedDose1Date);
  if (!minimumStart) {
    return;
  }

  conditionalItems.push(
    makeRecommendation({
      id: `${menacwyDose1.id}-conditional-infant-booster`,
      vaccineCategory: 'meningococcalACWY',
      product: 'nimenrix',
      doseLabelKey: 'doseLabel_booster',
      status: 'upcoming',
      timingKind: 'MINIMUM_START_ONLY',
      minimumValidDate: iso(minimumStart),
      recommendedDate: iso(minimumStart),
      noteKeys: [],
      urgency: 20,
      conditionalNextDose: true,
    })
  );
}

function getPcvSevenToElevenConditionalBoosterStart(
  ctx: RuleContext,
  projectedDose1Date: Date
): Date {
  const projectedDose2Date = addMonths(projectedDose1Date, 2);
  return laterOf(addMonths(ctx.dob, 12), addMonths(projectedDose2Date, 2));
}

function appendPcvSevenToElevenBoosterConditional(
  recommendations: VaccineRecommendation[],
  ctx: RuleContext,
  conditionalItems: VaccineRecommendation[]
): void {
  if (!isPcvSevenToElevenMonthZeroHistoryCatchUp(ctx)) {
    return;
  }

  const pcvDose1 = recommendations.find(
    (item) =>
      item.vaccineCategory === 'pneumococcal' &&
      item.doseLabelKey === 'doseLabel_dose1' &&
      (item.status === 'due-now' || item.status === 'eligible-now')
  );

  if (!pcvDose1) {
    return;
  }

  const projectedDose1Date = startOfDay(ctx.input.referenceDate ?? ctx.today);
  const minimumStart = getPcvSevenToElevenConditionalBoosterStart(ctx, projectedDose1Date);

  conditionalItems.push(
    makeRecommendation({
      id: `${pcvDose1.id}-conditional-seven-to-eleven-booster`,
      vaccineCategory: 'pneumococcal',
      doseLabelKey: 'doseLabel_booster',
      status: 'upcoming',
      timingKind: 'MINIMUM_START_ONLY',
      minimumValidDate: iso(minimumStart),
      recommendedDate: iso(minimumStart),
      noteKeys: [],
      urgency: 20,
      conditionalNextDose: true,
    })
  );
}

function appendMenBBoosterConditional(
  recommendations: VaccineRecommendation[],
  ctx: RuleContext,
  conditionalItems: VaccineRecommendation[]
): void {
  const history = ctx.getHistory('meningococcalB');
  if (history && history.numberOfDoses > 0) {
    return;
  }

  const menbDose1 = recommendations.find(
    (item) =>
      item.vaccineCategory === 'meningococcalB' &&
      item.doseLabelKey === 'doseLabel_dose1' &&
      (item.status === 'due-now' || item.status === 'eligible-now')
  );

  if (!menbDose1) {
    return;
  }

  const projectedDose1Date = startOfDay(ctx.input.referenceDate ?? ctx.today);
  const boosterTiming = getMenBConditionalBoosterTiming(ctx, projectedDose1Date);
  if (!boosterTiming) {
    return;
  }

  const meta = getConditionalNextDoseMeta(
    {
      ...menbDose1,
      doseLabelKey: 'doseLabel_booster',
    },
    ctx,
    projectedDose1Date
  );

  if (boosterTiming.kind === 'minimum_start') {
    conditionalItems.push(
      makeRecommendation({
        id: `${menbDose1.id}-conditional-booster`,
        vaccineCategory: 'meningococcalB',
        product: meta.product,
        doseLabelKey: meta.doseLabelKey,
        status: 'upcoming',
        timingKind: 'MINIMUM_START_ONLY',
        minimumValidDate: iso(boosterTiming.minimumStart),
        recommendedDate: iso(boosterTiming.minimumStart),
        noteKeys: [],
        urgency: 20,
        conditionalNextDose: true,
      })
    );
    return;
  }

  conditionalItems.push(
    makeRecommendation({
      id: `${menbDose1.id}-conditional-booster`,
      vaccineCategory: 'meningococcalB',
      product: meta.product,
      doseLabelKey: meta.doseLabelKey,
      status: 'upcoming',
      timingKind: 'RECOMMENDED_WINDOW',
      windowStart: iso(boosterTiming.windowStart),
      windowEnd: iso(boosterTiming.windowEnd),
      noteKeys: [],
      urgency: 20,
      conditionalNextDose: true,
    })
  );
}

export function buildConditionalUpcomingRecommendations(
  recommendations: VaccineRecommendation[],
  ctx: RuleContext
): VaccineRecommendation[] {
  const conditionalItems: VaccineRecommendation[] = [];
  const today = startOfDay(ctx.input.referenceDate ?? ctx.today);

  for (const item of recommendations) {
    const projection = getConditionalNextDoseDateForItem(item, ctx);
    if (!projection) continue;

    const { nextDoseDate, projectedDose1Date } = projection;
    const meta = getConditionalNextDoseMeta(item, ctx, projectedDose1Date);
    const usesPlannedVaricellaDose1Date =
      item.vaccineCategory === 'varicella' && !isSameDay(projectedDose1Date, today);

    conditionalItems.push(
      makeRecommendation({
        id: `${item.id}-conditional-next`,
        vaccineCategory: item.vaccineCategory,
        product: meta.product,
        doseLabelKey: meta.doseLabelKey,
        status: 'upcoming',
        recommendedDate: iso(nextDoseDate),
        conditionalProjectedFromDate: usesPlannedVaricellaDose1Date
          ? iso(projectedDose1Date)
          : undefined,
        noteKeys: getConditionalFollowUpNoteKeys(item, ctx, projectedDose1Date, meta),
        urgency: 25,
        conditionalNextDose: true,
      })
    );
  }

  appendMenAcwyInfantBoosterConditional(recommendations, ctx, conditionalItems);
  appendMenBBoosterConditional(recommendations, ctx, conditionalItems);
  appendPcvSevenToElevenBoosterConditional(recommendations, ctx, conditionalItems);

  return conditionalItems;
}

export function getConditionalNextAgeLabel(dob: Date, nextDoseDate: Date): string {
  const ageMonths =
    (nextDoseDate.getFullYear() - dob.getFullYear()) * 12 +
    (nextDoseDate.getMonth() - dob.getMonth());
  return String(Math.max(ageMonths, 0));
}
