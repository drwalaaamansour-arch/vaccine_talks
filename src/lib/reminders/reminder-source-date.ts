import { parseRecommendedIsoDate } from '@/lib/vaccine-checker/result-presentation';
import type { VaccineRecommendation } from '@/lib/vaccine-checker/types';

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export function isValidReminderIsoDate(isoDate: string): boolean {
  if (!ISO_DATE.test(isoDate)) {
    return false;
  }
  const parsed = parseRecommendedIsoDate(isoDate);
  const [year, month, day] = isoDate.split('-').map(Number);
  return (
    parsed.getFullYear() === year &&
    parsed.getMonth() === month - 1 &&
    parsed.getDate() === day
  );
}

/**
 * Stable reminder schedule date: presentation may clear `recommendedDate`, but
 * `reminderDate` keeps the Checker engine's exact ISO date when one existed.
 */
export function getReminderScheduleDateIso(item: VaccineRecommendation): string | undefined {
  const fromReminder = item.reminderDate?.trim();
  if (fromReminder) {
    return fromReminder;
  }
  const fromDisplay = item.recommendedDate?.trim();
  return fromDisplay || undefined;
}

/**
 * Copy the engine's exact `recommendedDate` into `reminderDate` before presentation
 * enrichment may hide display dates. Never invents or derives dates.
 */
export function withReminderDatePreservedFromChecker(
  item: VaccineRecommendation
): VaccineRecommendation {
  if (item.reminderDate?.trim()) {
    return item;
  }

  const source = item.recommendedDate?.trim();
  if (!source || !isValidReminderIsoDate(source)) {
    return item;
  }

  if (item.conditionalNextDose) {
    return item;
  }

  if (item.windowStart && item.windowEnd) {
    return item;
  }

  if (
    item.timingKind === 'RECOMMENDED_WINDOW' ||
    item.timingKind === 'MINIMUM_START_ONLY' ||
    item.timingKind === 'AGE_LIMIT_RANGE'
  ) {
    return item;
  }

  if (item.timingKind && item.timingKind !== 'FIXED_DATE') {
    return item;
  }

  return { ...item, reminderDate: source };
}
