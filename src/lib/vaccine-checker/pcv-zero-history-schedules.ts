import { ageAtDate } from '@/lib/vaccine-checker/date-utils';
import { type RuleContext } from '@/lib/vaccine-checker/types';

function ageInMonthsAt(dob: Date, date: Date): number {
  const age = ageAtDate(dob, date);
  return age.years * 12 + age.months;
}

function hasPcvDoseHistory(ctx: RuleContext): boolean {
  const history = ctx.getHistory('pneumococcal');
  return Boolean(history && (history.numberOfDoses > 0 || history.doseDates.length > 0));
}

function zeroHistoryAgeMonthsAtReference(ctx: RuleContext): number {
  const referenceDate = ctx.input.referenceDate ?? ctx.today;
  return ageInMonthsAt(ctx.dob, referenceDate);
}

export function isPcvSevenToElevenMonthZeroHistoryCatchUp(ctx: RuleContext): boolean {
  if (hasPcvDoseHistory(ctx)) {
    return false;
  }

  const ageMonths = zeroHistoryAgeMonthsAtReference(ctx);
  return ageMonths >= 7 && ageMonths <= 11;
}

export function isPcvTwelveToTwentyThreeMonthZeroHistoryCatchUp(ctx: RuleContext): boolean {
  if (hasPcvDoseHistory(ctx)) {
    return false;
  }

  const ageMonths = zeroHistoryAgeMonthsAtReference(ctx);
  return ageMonths >= 12 && ageMonths <= 23;
}

export function isPcvCommonZeroHistoryCatchUpSchedule(ctx: RuleContext): boolean {
  return (
    isPcvSevenToElevenMonthZeroHistoryCatchUp(ctx) ||
    isPcvTwelveToTwentyThreeMonthZeroHistoryCatchUp(ctx)
  );
}

export function shouldShowPcvZeroHistoryProductSchedules(ctx: RuleContext): boolean {
  if (isPcvCommonZeroHistoryCatchUpSchedule(ctx)) {
    return false;
  }

  const history = ctx.getHistory('pneumococcal');
  if (!history) {
    return true;
  }

  if (history.numberOfDoses > 0 || history.doseDates.length > 0) {
    return false;
  }

  const product = history.product;
  return !product || product === 'dontKnow';
}
