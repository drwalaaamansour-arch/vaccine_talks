import { isBefore, startOfDay } from '@/lib/vaccine-checker/date-utils';
import { parseRecommendedIsoDate } from '@/lib/vaccine-checker/result-presentation';
import type { RecommendationStatus, TimingKind, VaccineRecommendation } from '@/lib/vaccine-checker/types';
import {
  getReminderScheduleDateIso,
  isValidReminderIsoDate,
} from '@/lib/reminders/reminder-source-date';

export type ReminderIneligibleReason =
  | 'conditional'
  | 'missing_date'
  | 'invalid_date'
  | 'window'
  | 'minimum_start'
  | 'age_range'
  | 'non_fixed_timing'
  | 'not_actionable_status';

export type ReminderEligibilityResult =
  | { eligible: true; recommendedDate: string; overdue: boolean }
  | { eligible: false; reason: ReminderIneligibleReason };

const ACTIONABLE_STATUSES: RecommendationStatus[] = ['due-now', 'eligible-now', 'upcoming'];

function inferDisqualifyingTimingKind(item: VaccineRecommendation): TimingKind | null {
  if (item.timingKind) {
    return item.timingKind;
  }
  if (item.windowStart && item.windowEnd) {
    return 'RECOMMENDED_WINDOW';
  }
  if (item.minimumValidDate && !getReminderScheduleDateIso(item)) {
    return 'MINIMUM_START_ONLY';
  }
  if (item.earliestDate && item.latestDate && !getReminderScheduleDateIso(item)) {
    return 'AGE_LIMIT_RANGE';
  }
  return null;
}

/**
 * Reminder eligibility — reads Checker output only; never computes schedule dates.
 */
export function getReminderEligibility(
  item: VaccineRecommendation,
  referenceDate: Date
): ReminderEligibilityResult {
  if (item.conditionalNextDose) {
    return { eligible: false, reason: 'conditional' };
  }

  if (!ACTIONABLE_STATUSES.includes(item.status)) {
    return { eligible: false, reason: 'not_actionable_status' };
  }

  if (item.doseLabelKey === 'doseLabel_seriesComplete' || item.doseLabelKey === 'doseLabel_reviewNeeded') {
    return { eligible: false, reason: 'not_actionable_status' };
  }

  const timingKind = inferDisqualifyingTimingKind(item);
  if (timingKind === 'RECOMMENDED_WINDOW') {
    return { eligible: false, reason: 'window' };
  }
  if (timingKind === 'MINIMUM_START_ONLY') {
    return { eligible: false, reason: 'minimum_start' };
  }
  if (timingKind === 'AGE_LIMIT_RANGE') {
    return { eligible: false, reason: 'age_range' };
  }

  if (item.windowStart && item.windowEnd) {
    return { eligible: false, reason: 'window' };
  }

  const scheduleDate = getReminderScheduleDateIso(item);
  if (!scheduleDate) {
    return { eligible: false, reason: 'missing_date' };
  }

  const recommendedDate = scheduleDate;

  if (!isValidReminderIsoDate(recommendedDate)) {
    return { eligible: false, reason: 'invalid_date' };
  }

  if (item.minimumValidDate && item.timingKind === 'MINIMUM_START_ONLY') {
    return { eligible: false, reason: 'minimum_start' };
  }

  if (item.timingKind && item.timingKind !== 'FIXED_DATE') {
    return { eligible: false, reason: 'non_fixed_timing' };
  }

  const overdue = isBefore(parseRecommendedIsoDate(recommendedDate), startOfDay(referenceDate));

  return { eligible: true, recommendedDate, overdue };
}
