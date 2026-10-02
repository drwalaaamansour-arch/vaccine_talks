import { addDays, startOfDay } from '@/lib/vaccine-checker/date-utils';
import { parseRecommendedIsoDate } from '@/lib/vaccine-checker/result-presentation';

/** 09:00 local on the ISO calendar day. */
export function localNotificationAtNineAm(isoDate: string): Date {
  const base = parseRecommendedIsoDate(isoDate);
  return new Date(base.getFullYear(), base.getMonth(), base.getDate(), 9, 0, 0, 0);
}

/**
 * Overdue safe fire time: 09:00 on the day after reference date (never in the past).
 */
export function overdueSafeFireDate(referenceDate: Date): Date {
  const nextDay = addDays(startOfDay(referenceDate), 1);
  return new Date(nextDay.getFullYear(), nextDay.getMonth(), nextDay.getDate(), 9, 0, 0, 0);
}

export function resolveFireDateForReminder(
  recommendedDateIso: string,
  referenceDate: Date,
  overdue: boolean,
  asOf: Date = new Date()
): Date {
  if (!overdue) {
    const atNine = localNotificationAtNineAm(recommendedDateIso);
    if (atNine.getTime() <= asOf.getTime()) {
      return overdueSafeFireDate(referenceDate);
    }
    return atNine;
  }
  return overdueSafeFireDate(referenceDate);
}
