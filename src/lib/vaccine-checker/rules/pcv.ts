import {
  addMonths,
  addWeeks,
  addYears,
  ageAtDate,
  daysBetween,
  isAfter,
  isBefore,
  isOnOrAfter,
  laterOf,
} from '@/lib/vaccine-checker/date-utils';
import {
  withMinimumStartOnly,
  withRecommendedWindow,
} from '@/lib/vaccine-checker/recommendation-timing';
import { isOlderThanFiveYears, isSynflorixEligibleForNewStart } from '@/lib/vaccine-checker/product-options';
import {
  iso,
  makeRecommendation,
  type RuleContext,
  type VaccineRecommendation,
} from '@/lib/vaccine-checker/types';

const SINGLE_DOSE_LABEL = 'doseLabel_singleDose';
const ZERO_HISTORY_PCV_NOTE = 'note_pcvRemainingDosesDependOnProduct';

function withZeroHistoryPcvNote(items: VaccineRecommendation[]): VaccineRecommendation[] {
  return items.map((item) => {
    if (
      (item.doseLabelKey === 'doseLabel_dose1' || item.doseLabelKey === SINGLE_DOSE_LABEL) &&
      (item.status === 'due-now' || item.status === 'eligible-now')
    ) {
      return {
        ...item,
        noteKeys: [ZERO_HISTORY_PCV_NOTE],
      };
    }

    return item;
  });
}

function ageInMonthsAt(dob: Date, date: Date): number {
  const age = ageAtDate(dob, date);
  return age.years * 12 + age.months;
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

function twelveMonthCatchUpAfterTwoInfantDoses(
  ctx: RuleContext,
  product: string,
  _doses: Date[]
): VaccineRecommendation[] {
  const { dob, today } = ctx;
  const preferredWindowStart = addMonths(dob, 11);
  const preferredWindowEnd = addMonths(dob, 15);

  return [
    withRecommendedWindow(
      {
        id: 'pcv-booster-after-two-infant-doses',
        vaccineCategory: 'pneumococcal',
        product,
        doseLabelKey: 'doseLabel_booster',
        noteKeys: isAfter(today, preferredWindowEnd) ? ['note_pcvBoosterDelayed'] : [],
      },
      preferredWindowStart,
      preferredWindowEnd,
      today
    ),
  ];
}

function needsReview(product: string | undefined, noteKey: string, reasonKey: string): VaccineRecommendation[] {
  return [
    makeRecommendation({
      id: `pcv-needs-review-${product ?? 'unknown'}`,
      vaccineCategory: 'pneumococcal',
      product,
      doseLabelKey: 'doseLabel_reviewNeeded',
      status: 'needs-review',
      noteKeys: [noteKey],
      reasonKey,
    }),
  ];
}

function eligibleOrDueNow(
  ctx: RuleContext,
  product: string,
  recommendedStart: Date
): VaccineRecommendation[] {
  const earliestStart = addWeeks(ctx.dob, 6);
  const { today } = ctx;

  if (isBefore(today, earliestStart)) {
    return [
      makeRecommendation({
        id: 'pcv-not-yet-eligible',
        vaccineCategory: 'pneumococcal',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'not-yet-eligible',
        earliestDate: iso(earliestStart),
        recommendedDate: iso(recommendedStart),
        noteKeys: [],
      }),
    ];
  }

  if (isBefore(today, recommendedStart)) {
    return [
      makeRecommendation({
        id: 'pcv-eligible-now',
        vaccineCategory: 'pneumococcal',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'eligible-now',
        earliestDate: iso(earliestStart),
        recommendedDate: iso(recommendedStart),
        noteKeys: ['note_pcvEligibleOrWait'],
      }),
    ];
  }

  return [
    makeRecommendation({
      id: 'pcv-dose1-due',
      vaccineCategory: 'pneumococcal',
      product,
      doseLabelKey: 'doseLabel_dose1',
      status: 'due-now',
      recommendedDate: iso(recommendedStart),
      noteKeys: [],
      urgency: 80,
    }),
  ];
}

function standardPrimaryPlusBooster(
  ctx: RuleContext,
  product: string,
  doses: Date[],
  primaryCount = 3
): VaccineRecommendation[] {
  const { dob, today } = ctx;
  const preferredWindowStart = addMonths(dob, 11);
  const preferredWindowEnd = addMonths(dob, 15);

  if (doses.length >= primaryCount) {
    if (doses.length > primaryCount) {
      return [
        makeRecommendation({
          id: 'pcv-completed',
          vaccineCategory: 'pneumococcal',
          product,
          doseLabelKey: 'doseLabel_seriesComplete',
          status: 'completed',
          noteKeys: [],
        }),
      ];
    }

    return [
      withRecommendedWindow(
        {
          id: 'pcv-booster',
          vaccineCategory: 'pneumococcal',
          product,
          doseLabelKey: 'doseLabel_booster',
          noteKeys: isAfter(today, preferredWindowEnd) ? ['note_pcvBoosterDelayed'] : [],
        },
        preferredWindowStart,
        preferredWindowEnd,
        today
      ),
    ];
  }

  if (twoInfantDosesNeedTwelveMonthCatchUp(ctx, doses)) {
    return twelveMonthCatchUpAfterTwoInfantDoses(ctx, product, doses);
  }

  const nextDose = doses.length + 1;
  const recommended =
    doses.length === 0 ? addMonths(dob, 2) : addMonths(doses[doses.length - 1], 2);
  const status = doses.length === 0 ? 'due-now' : isOnOrAfter(today, recommended) ? 'due-now' : 'upcoming';

  if (doses.length === 0) {
    return eligibleOrDueNow(ctx, product, addMonths(dob, 2));
  }

  return [
    makeRecommendation({
      id: `pcv-dose${nextDose}`,
      vaccineCategory: 'pneumococcal',
      product,
      doseLabelKey: `doseLabel_dose${nextDose}`,
      status,
      recommendedDate: iso(recommended),
      noteKeys: [],
      urgency: status === 'due-now' ? 80 : 40,
    }),
  ];
}

function vaxneuvanceRules(ctx: RuleContext, doses: Date[]): VaccineRecommendation[] {
  const product = 'vaxneuvance';
  const { dob, today } = ctx;

  if (doses.length === 0) {
    const ageMonths = ageAtDate(dob, today).years * 12 + ageAtDate(dob, today).months;
    if (isOlderThanFiveYears(dob, today)) {
      return [
        makeRecommendation({
          id: 'pcv-vaxneuvance-single-due',
          vaccineCategory: 'pneumococcal',
          product,
          doseLabelKey: SINGLE_DOSE_LABEL,
          status: 'due-now',
          noteKeys: [],
        }),
      ];
    }
    if (ageMonths >= 24) {
      return [
        makeRecommendation({
          id: 'pcv-vaxneuvance-single-due',
          vaccineCategory: 'pneumococcal',
          product,
          doseLabelKey: 'doseLabel_dose1',
          status: 'due-now',
          noteKeys: [],
        }),
      ];
    }
    return eligibleOrDueNow(ctx, product, addMonths(dob, 2));
  }

  if (doses.length === 1) {
    return standardPrimaryPlusBooster(ctx, product, doses, 2);
  }

  if (doses.length === 2) {
    const intervalWeeks = daysBetween(doses[0], doses[1]) / 7;
    const primaryComplete = intervalWeeks >= 8;

    if (!primaryComplete) {
      const dose3Recommended = addMonths(doses[1], 2);
      if (isBefore(today, dose3Recommended)) {
        return [
          makeRecommendation({
            id: 'pcv-vaxneuvance-dose3-upcoming',
            vaccineCategory: 'pneumococcal',
            product,
            doseLabelKey: 'doseLabel_dose3',
            status: 'upcoming',
            recommendedDate: iso(dose3Recommended),
            noteKeys: ['note_vaxneuvanceShortInterval'],
          }),
        ];
      }
      return [
        makeRecommendation({
          id: 'pcv-vaxneuvance-dose3-due',
          vaccineCategory: 'pneumococcal',
          product,
          doseLabelKey: 'doseLabel_dose3',
          status: 'due-now',
          recommendedDate: iso(dose3Recommended),
          noteKeys: ['note_vaxneuvanceShortInterval'],
        }),
      ];
    }

    const boosterEarliest = addMonths(dob, 11);
    const boosterLatest = addMonths(dob, 15);
    const windowStart = laterOf(boosterEarliest, addMonths(doses[1], 2));
    return [
      withRecommendedWindow(
        {
          id: 'pcv-vaxneuvance-booster',
          vaccineCategory: 'pneumococcal',
          product,
          doseLabelKey: 'doseLabel_booster',
          noteKeys: isAfter(today, boosterLatest)
            ? ['note_pcvBoosterDelayed']
            : ['note_vaxneuvanceTwoPlusOne'],
        },
        windowStart,
        boosterLatest,
        today
      ),
    ];
  }

  if (doses.length >= 3) {
    return standardPrimaryPlusBooster(ctx, product, doses.slice(0, 3), 3);
  }

  return [];
}

function started7To11Months(ctx: RuleContext, product: string, doses: Date[]): VaccineRecommendation[] {
  const { dob, today } = ctx;

  if (doses.length === 0) {
    return [
      makeRecommendation({
        id: 'pcv-dose1-due',
        vaccineCategory: 'pneumococcal',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'due-now',
        noteKeys: [],
      }),
    ];
  }

  if (doses.length === 1) {
    const dose2Recommended = addMonths(doses[0], 2);
    const status = isOnOrAfter(today, dose2Recommended) ? 'due-now' : 'upcoming';
    return [
      makeRecommendation({
        id: 'pcv-dose2',
        vaccineCategory: 'pneumococcal',
        product,
        doseLabelKey: 'doseLabel_dose2',
        status,
        recommendedDate: iso(dose2Recommended),
        noteKeys: [],
      }),
    ];
  }

  const minimumStart = laterOf(addMonths(dob, 12), addMonths(doses[1], 2));
  return [
    withMinimumStartOnly(
      {
        id: 'pcv-booster',
        vaccineCategory: 'pneumococcal',
        product,
        doseLabelKey: 'doseLabel_booster',
        noteKeys: [],
      },
      minimumStart,
      today
    ),
  ];
}

function started12To23Months(ctx: RuleContext, product: string, doses: Date[]): VaccineRecommendation[] {
  const { today } = ctx;

  if (doses.length >= 2) {
    return [
      makeRecommendation({
        id: 'pcv-completed',
        vaccineCategory: 'pneumococcal',
        product,
        doseLabelKey: 'doseLabel_seriesComplete',
        status: 'completed',
        noteKeys: [],
      }),
    ];
  }

  if (doses.length === 1) {
    const dose2Recommended = addMonths(doses[0], 2);
    const status = isOnOrAfter(today, dose2Recommended) ? 'due-now' : 'upcoming';
    return [
      makeRecommendation({
        id: 'pcv-dose2',
        vaccineCategory: 'pneumococcal',
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
      id: 'pcv-dose1-due',
      vaccineCategory: 'pneumococcal',
      product,
      doseLabelKey: 'doseLabel_dose1',
      status: 'due-now',
      noteKeys: [],
    }),
  ];
}

function singlePcvDoseDue(
  product: string | undefined,
  id = 'pcv-single-dose-due'
): VaccineRecommendation[] {
  return [
    makeRecommendation({
      id,
      vaccineCategory: 'pneumococcal',
      product: product === 'pcv' ? undefined : product,
      doseLabelKey: SINGLE_DOSE_LABEL,
      status: 'due-now',
      noteKeys: [],
    }),
  ];
}

function started2YearsPlus(ctx: RuleContext, product: string, doses: Date[]): VaccineRecommendation[] {
  const { dob, today } = ctx;

  if (product === 'synflorix') {
    if (!isSynflorixEligibleForNewStart(dob, today) && doses.length === 0) {
      return [];
    }
    if (doses.length >= 2) {
      return [
        makeRecommendation({
          id: 'pcv-completed',
          vaccineCategory: 'pneumococcal',
          product,
          doseLabelKey: 'doseLabel_seriesComplete',
          status: 'completed',
          noteKeys: [],
        }),
      ];
    }
    if (doses.length === 1) {
      const dose2Recommended = addMonths(doses[0], 2);
      const status = isOnOrAfter(today, dose2Recommended) ? 'due-now' : 'upcoming';
      return [
        makeRecommendation({
          id: 'pcv-dose2',
          vaccineCategory: 'pneumococcal',
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
        id: 'pcv-dose1-due',
        vaccineCategory: 'pneumococcal',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'due-now',
        noteKeys: [],
      }),
    ];
  }

  if (isOlderThanFiveYears(dob, today)) {
    if (doses.length >= 1) {
      return [
        makeRecommendation({
          id: 'pcv-completed',
          vaccineCategory: 'pneumococcal',
          product,
          doseLabelKey: 'doseLabel_seriesComplete',
          status: 'completed',
          noteKeys: [],
        }),
      ];
    }

    return singlePcvDoseDue(product);
  }

  if (doses.length >= 1) {
    return [
      makeRecommendation({
        id: 'pcv-completed',
        vaccineCategory: 'pneumococcal',
        product,
        doseLabelKey: 'doseLabel_seriesComplete',
        status: 'completed',
        noteKeys: [],
      }),
    ];
  }

  return [
    makeRecommendation({
      id: 'pcv-dose1-due',
      vaccineCategory: 'pneumococcal',
      product,
      doseLabelKey: 'doseLabel_dose1',
      status: 'due-now',
      noteKeys: [],
    }),
  ];
}

export function calculatePcv(ctx: RuleContext): VaccineRecommendation[] {
  const history = ctx.getHistory('pneumococcal');
  const product = history?.product;
  const doses = history?.doseDates ?? [];
  const priorDoseCount = Math.max(doses.length, history?.numberOfDoses ?? 0);

  if (isOlderThanFiveYears(ctx.dob, ctx.today) && priorDoseCount >= 1) {
    const effectiveDoses = doses.length > 0 ? doses : [ctx.today];
    return started2YearsPlus(ctx, product ?? 'pcv', effectiveDoses);
  }

  if (!product || product === 'dontKnow') {
    if (doses.length === 0 && priorDoseCount === 0) {
      const ageMonths = ageAtDate(ctx.dob, ctx.today).years * 12 + ageAtDate(ctx.dob, ctx.today).months;
      if (ageMonths < 2) {
        return eligibleOrDueNow(ctx, 'pcv', addMonths(ctx.dob, 2));
      }

      return calculatePcvCatchUp(ctx);
    }

    if (doses.length === 0) {
      return needsReview(product, 'note_pcvProductUnknown', 'reason_pcvProductUnknown');
    }
    return needsReview(product, 'note_pcvProductUnknown', 'reason_pcvProductUnknown');
  }

  const firstDoseDate = doses[0] ?? null;
  const ageAtStartMonths = firstDoseDate
    ? ageAtDate(ctx.dob, firstDoseDate).years * 12 + ageAtDate(ctx.dob, firstDoseDate).months
    : ageAtDate(ctx.dob, ctx.today).years * 12 + ageAtDate(ctx.dob, ctx.today).months;

  if (product === 'vaxneuvance') {
    if (ageAtStartMonths >= 24) {
      return started2YearsPlus(ctx, product, doses);
    }
    if (ageAtStartMonths >= 12) {
      return started12To23Months(ctx, product, doses);
    }
    if (ageAtStartMonths >= 7) {
      return started7To11Months(ctx, product, doses);
    }
    return vaxneuvanceRules(ctx, doses);
  }

  if (ageAtStartMonths >= 24 || ageAtDate(ctx.dob, ctx.today).years >= 2) {
    return started2YearsPlus(ctx, product, doses);
  }
  if (ageAtStartMonths >= 12) {
    return started12To23Months(ctx, product, doses);
  }
  if (ageAtStartMonths >= 7) {
    return started7To11Months(ctx, product, doses);
  }

  return standardPrimaryPlusBooster(ctx, product, doses, 3);
}

export function calculatePcvCatchUp(ctx: RuleContext): VaccineRecommendation[] {
  const history = ctx.getHistory('pneumococcal');
  if (history && (history.numberOfDoses > 0 || history.doseDates.length > 0)) {
    return calculatePcv(ctx);
  }

  const ageMonths = ageAtDate(ctx.dob, ctx.today).years * 12 + ageAtDate(ctx.dob, ctx.today).months;
  if (ageMonths < 1) {
    return [];
  }

  const mapCatchUp = (items: VaccineRecommendation[]) =>
    items.map((item) => ({
      ...item,
      product: undefined,
      recommendedDate:
        (item.doseLabelKey === 'doseLabel_dose1' || item.doseLabelKey === SINGLE_DOSE_LABEL) &&
        item.status === 'due-now' &&
        ageMonths >= 12
          ? undefined
          : item.recommendedDate,
    }));

  if (isOlderThanFiveYears(ctx.dob, ctx.today)) {
    return mapCatchUp(started2YearsPlus(ctx, 'pcv', []));
  }

  if (ageMonths >= 24) {
    return withZeroHistoryPcvNote(mapCatchUp(started2YearsPlus(ctx, 'pcv', [])));
  }
  if (ageMonths >= 12) {
    return mapCatchUp(started12To23Months(ctx, 'pcv', []));
  }
  if (ageMonths >= 7) {
    return mapCatchUp(started7To11Months(ctx, 'pcv', []));
  }

  return withZeroHistoryPcvNote(
    eligibleOrDueNow(ctx, 'pcv', addMonths(ctx.dob, 2)).map((item) => ({
      ...item,
      product: undefined,
    }))
  );
}
