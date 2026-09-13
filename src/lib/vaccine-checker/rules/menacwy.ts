import {
  addMonths,
  addWeeks,
  ageAtDate,
  isBefore,
  isOnOrAfter,
  laterOf,
} from '@/lib/vaccine-checker/date-utils';
import { withMinimumStartOnly } from '@/lib/vaccine-checker/recommendation-timing';
import {
  iso,
  makeRecommendation,
  type RuleContext,
  type VaccineRecommendation,
} from '@/lib/vaccine-checker/types';

const SINGLE_DOSE_LABEL = 'doseLabel_singleDose';

function isPrimaryMenacwyStartLabel(doseLabelKey: string): boolean {
  return doseLabelKey === 'doseLabel_dose1' || doseLabelKey === SINGLE_DOSE_LABEL;
}

function recommendNimenrixBooster(
  ctx: RuleContext,
  doses: Date[],
  doseIndex: number
): VaccineRecommendation[] {
  const { dob, today } = ctx;
  const product = 'nimenrix';
  const minimumStart = laterOf(addMonths(dob, 12), addMonths(doses[doseIndex], 2));

  return [
    withMinimumStartOnly(
      {
        id: 'menacwy-booster',
        vaccineCategory: 'meningococcalACWY',
        product,
        doseLabelKey: 'doseLabel_booster',
        noteKeys: [],
      },
      minimumStart,
      today
    ),
  ];
}

function ageInMonthsAt(dob: Date, date: Date): number {
  const age = ageAtDate(dob, date);
  return age.years * 12 + age.months;
}

export function isNimenrixInfantSeriesStart(dob: Date, firstDoseDate: Date): boolean {
  const age = ageAtDate(dob, firstDoseDate);
  const totalMonths = age.years * 12 + age.months;

  if (totalMonths >= 6) {
    return false;
  }

  return age.totalWeeks >= 6;
}

function nimenrixInfantPrimarySeries(
  ctx: RuleContext,
  doses: Date[],
  product: string
): VaccineRecommendation[] | null {
  const { today } = ctx;
  const firstDoseDate = doses[0] ?? ctx.today;

  if (!isNimenrixInfantSeriesStart(ctx.dob, firstDoseDate)) {
    return null;
  }

  if (doses.length >= 2) {
    if (doses.length >= 3) {
      return [
        makeRecommendation({
          id: 'menacwy-completed',
          vaccineCategory: 'meningococcalACWY',
          product,
          doseLabelKey: 'doseLabel_seriesComplete',
          status: 'completed',
          noteKeys: [],
        }),
      ];
    }

    return recommendNimenrixBooster(ctx, doses, 1);
  }

  if (doses.length === 1) {
    const dose2Recommended = addMonths(doses[0], 2);
    const status = isOnOrAfter(today, dose2Recommended) ? 'due-now' : 'upcoming';

    return [
      makeRecommendation({
        id: 'menacwy-dose2',
        vaccineCategory: 'meningococcalACWY',
        product,
        doseLabelKey: 'doseLabel_dose2',
        status,
        recommendedDate: iso(dose2Recommended),
        noteKeys: [],
      }),
      ...recommendNimenrixBooster(ctx, doses, 0),
    ];
  }

  return null;
}

function nimenrixRules(ctx: RuleContext, doses: Date[]): VaccineRecommendation[] {
  const { dob, today } = ctx;
  const product = 'nimenrix';
  const firstDoseDate = doses[0] ?? today;
  const startAgeMonths = ageInMonthsAt(dob, firstDoseDate);
  const infantSeries = nimenrixInfantPrimarySeries(ctx, doses, product);

  if (infantSeries) {
    return infantSeries;
  }

  if (startAgeMonths >= 12) {
    if (doses.length >= 1) {
      return [
        makeRecommendation({
          id: 'menacwy-completed',
          vaccineCategory: 'meningococcalACWY',
          product,
          doseLabelKey: 'doseLabel_seriesComplete',
          status: 'completed',
          noteKeys: [],
        }),
      ];
    }
    return [
      makeRecommendation({
        id: 'menacwy-dose1-due',
        vaccineCategory: 'meningococcalACWY',
        product,
        doseLabelKey: SINGLE_DOSE_LABEL,
        status: 'due-now',
        noteKeys: [],
      }),
    ];
  }

  if (startAgeMonths >= 6 && startAgeMonths <= 11) {
    if (doses.length >= 1) {
      return recommendNimenrixBooster(ctx, doses, 0);
    }
    return [
      makeRecommendation({
        id: 'menacwy-dose1-due',
        vaccineCategory: 'meningococcalACWY',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'due-now',
        noteKeys: [],
      }),
    ];
  }

  if (doses.length >= 2) {
    if (doses.length >= 3) {
      return [
        makeRecommendation({
          id: 'menacwy-completed',
          vaccineCategory: 'meningococcalACWY',
          product,
          doseLabelKey: 'doseLabel_seriesComplete',
          status: 'completed',
          noteKeys: [],
        }),
      ];
    }
    return recommendNimenrixBooster(ctx, doses, 1);
  }

  if (doses.length === 1) {
    const dose2Recommended = addMonths(doses[0], 2);
    const status = isOnOrAfter(today, dose2Recommended) ? 'due-now' : 'upcoming';
    return [
      makeRecommendation({
        id: 'menacwy-dose2',
        vaccineCategory: 'meningococcalACWY',
        product,
        doseLabelKey: 'doseLabel_dose2',
        status,
        recommendedDate: iso(dose2Recommended),
        noteKeys: [],
      }),
    ];
  }

  if (isBefore(today, addWeeks(dob, 6))) {
    return [
      makeRecommendation({
        id: 'menacwy-not-yet-eligible',
        vaccineCategory: 'meningococcalACWY',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'not-yet-eligible',
        earliestDate: iso(addWeeks(dob, 6)),
        noteKeys: [],
      }),
    ];
  }

  const recommendedStart = addMonths(dob, 2);

  if (isBefore(today, recommendedStart)) {
    return [
      makeRecommendation({
        id: 'menacwy-dose1-eligible',
        vaccineCategory: 'meningococcalACWY',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'eligible-now',
        earliestDate: iso(addWeeks(dob, 6)),
        recommendedDate: iso(recommendedStart),
        noteKeys: [],
      }),
    ];
  }

  return [
    makeRecommendation({
      id: 'menacwy-dose1-due',
      vaccineCategory: 'meningococcalACWY',
      product,
      doseLabelKey: 'doseLabel_dose1',
      status: 'due-now',
      recommendedDate: iso(recommendedStart),
      noteKeys: [],
    }),
  ];
}

function menactraRules(ctx: RuleContext, doses: Date[]): VaccineRecommendation[] {
  const { dob, today } = ctx;
  const product = 'menactra';
  const firstDoseDate = doses[0] ?? today;
  const startAgeMonths = ageInMonthsAt(dob, firstDoseDate);

  if (startAgeMonths < 9) {
    return [
      makeRecommendation({
        id: 'menacwy-not-yet-eligible',
        vaccineCategory: 'meningococcalACWY',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'not-yet-eligible',
        recommendedDate: iso(addMonths(dob, 9)),
        noteKeys: ['note_menactraMinimumAge'],
      }),
    ];
  }

  if (startAgeMonths >= 24) {
    if (doses.length >= 1) {
      return [
        makeRecommendation({
          id: 'menacwy-completed',
          vaccineCategory: 'meningococcalACWY',
          product,
          doseLabelKey: 'doseLabel_seriesComplete',
          status: 'completed',
          noteKeys: [],
        }),
      ];
    }
    return [
      makeRecommendation({
        id: 'menacwy-dose1-due',
        vaccineCategory: 'meningococcalACWY',
        product,
        doseLabelKey: SINGLE_DOSE_LABEL,
        status: 'due-now',
        noteKeys: [],
      }),
    ];
  }

  if (doses.length >= 2) {
    return [
      makeRecommendation({
        id: 'menacwy-completed',
        vaccineCategory: 'meningococcalACWY',
        product,
        doseLabelKey: 'doseLabel_seriesComplete',
        status: 'completed',
        noteKeys: [],
      }),
    ];
  }

  if (doses.length === 1) {
    const dose2Recommended = addMonths(doses[0], 3);
    const status = isOnOrAfter(today, dose2Recommended) ? 'due-now' : 'upcoming';
    return [
      makeRecommendation({
        id: 'menacwy-dose2',
        vaccineCategory: 'meningococcalACWY',
        product,
        doseLabelKey: 'doseLabel_dose2',
        status,
        recommendedDate: iso(dose2Recommended),
        noteKeys: [],
      }),
    ];
  }

  return [
    makeRecommendation({
      id: 'menacwy-dose1-due',
      vaccineCategory: 'meningococcalACWY',
      product,
      doseLabelKey: 'doseLabel_dose1',
      status: 'due-now',
      noteKeys: [],
    }),
  ];
}

function isMenacwyUnknownProductCatchUpAge(ageMonths: number): boolean {
  return ageMonths >= 12 && ageMonths <= 23;
}

export type MenAcwyProduct = 'nimenrix' | 'menactra';

export function getAgeEligibleMenAcwyProducts(
  ctx: RuleContext,
  asOfDate: Date = ctx.today
): MenAcwyProduct[] {
  const age = ageAtDate(ctx.dob, asOfDate);
  const ageMonths = age.years * 12 + age.months;
  const eligible: MenAcwyProduct[] = [];

  if (age.totalWeeks >= 6) {
    eligible.push('nimenrix');
  }

  if (ageMonths >= 9) {
    eligible.push('menactra');
  }

  return eligible;
}

export function getSoleAgeEligibleMenAcwyProduct(
  ctx: RuleContext,
  asOfDate: Date = ctx.today
): MenAcwyProduct | null {
  const eligible = getAgeEligibleMenAcwyProducts(ctx, asOfDate);
  return eligible.length === 1 ? eligible[0]! : null;
}

function unknownProductZeroDoseCatchUp(ageMonths: number): VaccineRecommendation[] {
  if (ageMonths >= 24) {
    return [
      makeRecommendation({
        id: 'menacwy-dose1-due',
        vaccineCategory: 'meningococcalACWY',
        doseLabelKey: SINGLE_DOSE_LABEL,
        status: 'due-now',
        noteKeys: ['note_menacwyProductScheduleDependsOnAge'],
        reasonKey: 'reason_menacwyProductUnknownSchedule',
      }),
    ];
  }

  if (isMenacwyUnknownProductCatchUpAge(ageMonths)) {
    return [
      makeRecommendation({
        id: 'menacwy-dose1-due',
        vaccineCategory: 'meningococcalACWY',
        doseLabelKey: 'doseLabel_dose1',
        status: 'due-now',
        noteKeys: ['note_menacwyProductDoseCountDependsOnProduct'],
        reasonKey: 'reason_menacwyProductUnknownSchedule',
      }),
    ];
  }

  return [
    makeRecommendation({
      id: 'menacwy-dose1-due',
      vaccineCategory: 'meningococcalACWY',
      doseLabelKey: 'doseLabel_dose1',
      status: 'due-now',
      noteKeys: ['note_menacwyProductScheduleDependsOnAge'],
      reasonKey: 'reason_menacwyProductUnknownSchedule',
    }),
  ];
}

export function calculateMenACWY(ctx: RuleContext): VaccineRecommendation[] {
  const history = ctx.getHistory('meningococcalACWY');

  if (!history) {
    const { dob, today } = ctx;
    const ageMonths = ageInMonthsAt(dob, today);

    if (isBefore(today, addWeeks(dob, 6))) {
      return [
        makeRecommendation({
          id: 'menacwy-not-yet-eligible',
          vaccineCategory: 'meningococcalACWY',
          doseLabelKey: 'doseLabel_dose1',
          status: 'not-yet-eligible',
          earliestDate: iso(addWeeks(dob, 6)),
          noteKeys: [],
        }),
      ];
    }

    if (ageMonths >= 24) {
      return [
        makeRecommendation({
          id: 'menacwy-dose1-due',
          vaccineCategory: 'meningococcalACWY',
          doseLabelKey: SINGLE_DOSE_LABEL,
          status: 'due-now',
          noteKeys: [],
        }),
      ];
    }

    if (isMenacwyUnknownProductCatchUpAge(ageMonths)) {
      return unknownProductZeroDoseCatchUp(ageMonths);
    }

    const soleEligibleProduct = getSoleAgeEligibleMenAcwyProduct(ctx, today);
    if (soleEligibleProduct === 'nimenrix') {
      return nimenrixRules(ctx, []);
    }

    if (soleEligibleProduct === 'menactra') {
      return menactraRules(ctx, []);
    }

    return nimenrixRules(ctx, []).map((item) => ({
      ...item,
      product: undefined,
      recommendedDate:
        isPrimaryMenacwyStartLabel(item.doseLabelKey) &&
        item.status === 'due-now' &&
        ageMonths >= 12
          ? undefined
          : item.recommendedDate,
      noteKeys:
        isPrimaryMenacwyStartLabel(item.doseLabelKey) &&
        (item.status === 'due-now' || item.status === 'eligible-now')
          ? ['note_menacwyProductScheduleDependsOnAge']
          : item.noteKeys,
    }));
  }

  const product = history.product;
  const doses = history.doseDates;
  const priorDoseCount = Math.max(doses.length, history.numberOfDoses ?? 0);
  const ageMonthsToday = ageInMonthsAt(ctx.dob, ctx.today);
  const effectiveDoses =
    doses.length > 0
      ? doses
      : priorDoseCount >= 1 && ageMonthsToday >= 24
        ? [ctx.today]
        : doses;

  if (!product || product === 'dontKnow' || product === 'other') {
    if (ageMonthsToday >= 24 && priorDoseCount >= 1) {
      return [
        makeRecommendation({
          id: 'menacwy-completed',
          vaccineCategory: 'meningococcalACWY',
          doseLabelKey: 'doseLabel_seriesComplete',
          status: 'completed',
          noteKeys: [],
        }),
      ];
    }

    if (doses.length === 0) {
      return unknownProductZeroDoseCatchUp(ageMonthsToday);
    }

    return [
      makeRecommendation({
        id: 'menacwy-needs-review',
        vaccineCategory: 'meningococcalACWY',
        product,
        doseLabelKey: 'doseLabel_reviewNeeded',
        status: 'needs-review',
        noteKeys: ['note_menacwyProductUnknownSchedule'],
        reasonKey: 'reason_menacwyProductUnknownSchedule',
      }),
    ];
  }

  if (product === 'menactra') {
    return menactraRules(ctx, effectiveDoses);
  }

  return nimenrixRules(ctx, effectiveDoses);
}

export function hasMenACWYHistory(ctx: RuleContext): boolean {
  const history = ctx.getHistory('meningococcalACWY');
  return Boolean(history && history.numberOfDoses > 0);
}

export function isMenAcwyProductUnknown(ctx: RuleContext): boolean {
  const history = ctx.getHistory('meningococcalACWY');
  if (!history) {
    return getSoleAgeEligibleMenAcwyProduct(ctx) === null;
  }

  const product = history.product;
  return product !== 'nimenrix' && product !== 'menactra';
}
