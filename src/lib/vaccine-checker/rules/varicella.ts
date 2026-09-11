import {
  addDays,
  addMonths,
  ageAtDate,
  isAfter,
  isBefore,
  isOnOrAfter,
  isOnOrBefore,
  isSameDay,
  laterOf,
  startOfDay,
} from '@/lib/vaccine-checker/date-utils';
import { hasCompletedRoutineVisitFromInput } from '@/lib/vaccine-checker/routine';
import {
  couldMmrDose1DateAffectVaricella,
  couldMmrDose2DateAffectVaricella,
} from '@/lib/vaccine-checker/mmr-varicella-gating';
import {
  iso,
  makeRecommendation,
  type CheckerInput,
  type RuleContext,
  type VaccineRecommendation,
} from '@/lib/vaccine-checker/types';

const LIVE_VACCINE_GAP_DAYS = 28;

function requiresMmrDateForVaricella(ctx: RuleContext, doseCount: number): boolean {
  if (doseCount >= 2) return false;

  const { dob, today } = ctx;

  if (
    hasCompletedRoutineVisitFromInput(ctx.input, '18months') &&
    !ctx.input.mmrDose2Date &&
    couldMmrDose2DateAffectVaricella(dob, today)
  ) {
    return true;
  }

  if (doseCount === 0) {
    if (!hasCompletedRoutineVisitFromInput(ctx.input, '12months')) return false;
    if (!couldMmrDose1DateAffectVaricella(dob, today)) return false;
    if (hasCompletedRoutineVisitFromInput(ctx.input, '18months')) return false;
    return ctx.input.mmrDate === null;
  }

  if (
    hasCompletedRoutineVisitFromInput(ctx.input, '12months') &&
    ctx.input.mmrDate === null &&
    couldMmrDose1DateAffectVaricella(dob, today) &&
    !hasCompletedRoutineVisitFromInput(ctx.input, '18months')
  ) {
    return true;
  }

  return false;
}

export function getVaricellaSpacingMmrDatesFromInput(input: CheckerInput): Date[] {
  const today = startOfDay(input.referenceDate);

  if (
    hasCompletedRoutineVisitFromInput(input, '18months') &&
    couldMmrDose2DateAffectVaricella(input.dob, today) &&
    input.mmrDose2Date
  ) {
    return [startOfDay(input.mmrDose2Date)];
  }

  return input.mmrDates.map((date) => startOfDay(date));
}

function getVaricellaSpacingMmrDates(ctx: RuleContext): Date[] {
  return getVaricellaSpacingMmrDatesFromInput(ctx.input);
}

function makeVaricellaNeedsMmrDateRecommendation(
  product: string | undefined
): VaccineRecommendation {
  return makeRecommendation({
    id: 'varicella-needs-mmr-date',
    vaccineCategory: 'varicella',
    product,
    doseLabelKey: 'doseLabel_dose1',
    status: 'needs-review',
    noteKeys: ['note_varicellaMmrDateNeeded'],
    reasonKey: 'reason_varicellaMmrDateNeeded',
  });
}

function normalizeMmrDates(mmrDates: Date[]): Date[] {
  return mmrDates.map((date) => startOfDay(date));
}

function resolveEarliestVaricellaDate(
  proposedDate: Date,
  asOfDate: Date,
  mmrDates: Date[]
): { date: Date; noteKeys: string[] } {
  let date = startOfDay(proposedDate);
  const today = startOfDay(asOfDate);
  const noteKeys = new Set<string>();

  for (const mmrDate of normalizeMmrDates(mmrDates)) {
    if (isSameDay(date, mmrDate)) {
      noteKeys.add('note_varicellaMmrSameDay');
      continue;
    }

    const earliestAfterMmr = addDays(mmrDate, LIVE_VACCINE_GAP_DAYS);
    const earliestBeforeMmr = addDays(mmrDate, -LIVE_VACCINE_GAP_DAYS);

    if (isAfter(date, mmrDate) && isBefore(date, earliestAfterMmr)) {
      date = earliestAfterMmr;
      noteKeys.add('note_varicellaMmrInterval');
      continue;
    }

    if (isBefore(date, mmrDate) && isAfter(date, earliestBeforeMmr)) {
      if (isOnOrBefore(mmrDate, today)) {
        date = laterOf(date, earliestAfterMmr);
      } else {
        date = earliestBeforeMmr;
      }
      noteKeys.add('note_varicellaMmrInterval');
    }
  }

  return { date, noteKeys: Array.from(noteKeys) };
}

function getEarliestValidVaricellaDateForToday(
  today: Date,
  mmrDates: Date[]
): Date | null {
  const delay = getRecentMmrCausingVaricellaDelay(today, mmrDates);
  return delay?.earliestVaricellaDate ?? null;
}

export function getRecentMmrCausingVaricellaDelay(
  asOfDate: Date,
  mmrDates: Date[]
): { mmrDate: Date; earliestVaricellaDate: Date } | null {
  const todayDay = startOfDay(asOfDate);
  let result: { mmrDate: Date; earliestVaricellaDate: Date } | null = null;

  for (const mmrDate of normalizeMmrDates(mmrDates)) {
    if (isSameDay(todayDay, mmrDate)) {
      continue;
    }

    const earliestAfterMmr = addDays(mmrDate, LIVE_VACCINE_GAP_DAYS);
    if (isAfter(todayDay, mmrDate) && isBefore(todayDay, earliestAfterMmr)) {
      if (
        !result ||
        earliestAfterMmr.getTime() > result.earliestVaricellaDate.getTime()
      ) {
        result = { mmrDate, earliestVaricellaDate: earliestAfterMmr };
      }
    }
  }

  return result;
}

function getVaricellaDose1Status(
  today: Date,
  earliestDate: Date,
  mmrDates: Date[]
): 'due-now' | 'upcoming' {
  const todayDay = startOfDay(today);
  const earliest = startOfDay(earliestDate);
  const mmrEnforcedEarliest = getEarliestValidVaricellaDateForToday(todayDay, mmrDates);

  if (mmrEnforcedEarliest && isBefore(todayDay, mmrEnforcedEarliest)) {
    return 'upcoming';
  }

  if (isBefore(todayDay, earliest)) {
    return 'upcoming';
  }

  return 'due-now';
}

function adjustForSingleMmrConflict(
  recommendedDate: Date,
  mmrDate: Date
): { date: Date; noteKeys: string[] } {
  return resolveEarliestVaricellaDate(recommendedDate, recommendedDate, [mmrDate]);
}

function adjustForMmrConflict(
  recommendedDate: Date,
  mmrDates: Date[],
  asOfDate: Date
): { date: Date; noteKeys: string[] } {
  if (mmrDates.length === 0) {
    return { date: startOfDay(recommendedDate), noteKeys: [] };
  }

  return resolveEarliestVaricellaDate(recommendedDate, asOfDate, mmrDates);
}

export function calculateVaricella(ctx: RuleContext): VaccineRecommendation[] {
  const history = ctx.getHistory('varicella');
  const product = history?.product;
  const doses = history?.doseDates ?? [];
  const { dob, today } = ctx;
  const mmrDates = getVaricellaSpacingMmrDates(ctx);

  if (product === 'dontKnow' || product === 'other') {
    return [
      makeRecommendation({
        id: 'varicella-needs-review',
        vaccineCategory: 'varicella',
        product,
        doseLabelKey: 'doseLabel_reviewNeeded',
        status: 'needs-review',
        noteKeys: ['note_varicellaProductUnknown'],
        reasonKey: 'reason_varicellaProductUnknown',
      }),
    ];
  }

  const ageYears = ageAtDate(dob, today).years;
  const intervalMonths = ageYears >= 13 ? 1 : 3;

  if (doses.length >= 2) {
    return [
      makeRecommendation({
        id: 'varicella-completed',
        vaccineCategory: 'varicella',
        product,
        doseLabelKey: 'doseLabel_seriesComplete',
        status: 'completed',
        noteKeys: ['note_varicellaMmrSameDay'],
      }),
    ];
  }

  if (doses.length === 1) {
    if (requiresMmrDateForVaricella(ctx, doses.length)) {
      return [makeVaricellaNeedsMmrDateRecommendation(product)];
    }

    let dose2Recommended = addMonths(doses[0], intervalMonths);
    const adjusted = adjustForMmrConflict(dose2Recommended, mmrDates, today);
    dose2Recommended = adjusted.date;
    const noteKeys = [...adjusted.noteKeys];
    const mmrEnforcedEarliest = getEarliestValidVaricellaDateForToday(today, mmrDates);
    if (mmrEnforcedEarliest) {
      dose2Recommended = laterOf(dose2Recommended, mmrEnforcedEarliest);
    }
    const status = isOnOrAfter(today, dose2Recommended) ? 'due-now' : 'upcoming';

    return [
      makeRecommendation({
        id: 'varicella-dose2',
        vaccineCategory: 'varicella',
        product,
        doseLabelKey: 'doseLabel_dose2',
        status,
        recommendedDate: iso(dose2Recommended),
        noteKeys,
        urgency: status === 'due-now' ? 80 : 40,
      }),
    ];
  }

  if (requiresMmrDateForVaricella(ctx, doses.length)) {
    return [makeVaricellaNeedsMmrDateRecommendation(product)];
  }

  const recommendedDose1 = addMonths(dob, 12);
  const adjusted = adjustForMmrConflict(recommendedDose1, mmrDates, today);
  let adjustedDose1 = adjusted.date;
  const mmrEnforcedEarliest = getEarliestValidVaricellaDateForToday(today, mmrDates);
  if (mmrEnforcedEarliest) {
    adjustedDose1 = laterOf(adjustedDose1, mmrEnforcedEarliest);
    if (!adjusted.noteKeys.includes('note_varicellaMmrInterval')) {
      adjusted.noteKeys.push('note_varicellaMmrInterval');
    }
  }

  if (isBefore(today, addMonths(dob, 12))) {
    return [
      makeRecommendation({
        id: 'varicella-not-yet-eligible',
        vaccineCategory: 'varicella',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'not-yet-eligible',
        recommendedDate: iso(adjustedDose1),
        noteKeys: adjusted.noteKeys,
      }),
    ];
  }

  const status = getVaricellaDose1Status(today, adjustedDose1, mmrDates);
  const dose1NoteKeys = new Set<string>(['note_varicellaMmrScheduling', ...adjusted.noteKeys]);
  if (mmrDates.some((mmrDate) => isSameDay(mmrDate, today))) {
    dose1NoteKeys.add('note_varicellaMmrSameDay');
  }

  return [
    makeRecommendation({
      id: 'varicella-dose1',
      vaccineCategory: 'varicella',
      product,
      doseLabelKey: 'doseLabel_dose1',
      status,
      recommendedDate: iso(adjustedDose1),
      noteKeys: Array.from(dose1NoteKeys),
      urgency: status === 'due-now' ? 80 : 40,
    }),
  ];
}

export function calculateVaricellaCatchUp(ctx: RuleContext): VaccineRecommendation[] {
  if (ctx.getHistory('varicella')) {
    return calculateVaricella(ctx);
  }

  const ageMonths = ageAtDate(ctx.dob, ctx.today).years * 12 + ageAtDate(ctx.dob, ctx.today).months;
  if (ageMonths < 12) {
    return [];
  }

  return calculateVaricella(ctx).map((item) => {
    if (
      item.doseLabelKey === 'doseLabel_dose1' &&
      item.status === 'due-now' &&
      item.recommendedDate
    ) {
      return {
        ...item,
        recommendedDate: undefined,
        recommendedDateLabelKey: undefined,
      };
    }
    return item;
  });
}
