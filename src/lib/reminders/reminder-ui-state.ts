import type { ResultsSectionKind } from '@/lib/vaccine-checker/result-presentation';
import type { VaccineRecommendation } from '@/lib/vaccine-checker/types';
import { getReminderEligibility } from '@/lib/reminders/reminder-eligibility';

export type ReminderCardUiPhase =
  | 'hidden'
  | 'conditional_message'
  | 'set'
  | 'scheduled'
  | 'changing';

const REMINDER_SECTIONS: ResultsSectionKind[] = ['dueNow', 'eligibleNow', 'upcoming'];

export function isReminderSection(section: ResultsSectionKind): boolean {
  return REMINDER_SECTIONS.includes(section);
}

/** Whether this card should show any reminder UI (action or conditional note). */
export function shouldShowReminderBlockOnCard(
  item: VaccineRecommendation,
  referenceDate: Date,
  section: ResultsSectionKind
): boolean {
  if (!isReminderSection(section)) {
    return false;
  }
  if (item.conditionalNextDose) {
    return true;
  }
  return getReminderEligibility(item, referenceDate).eligible;
}

export function getReminderCardUiPhase(
  item: VaccineRecommendation,
  referenceDate: Date,
  ui: { isScheduled: boolean; isChanging: boolean }
): ReminderCardUiPhase {
  if (item.conditionalNextDose) {
    return 'conditional_message';
  }
  const eligibility = getReminderEligibility(item, referenceDate);
  if (!eligibility.eligible) {
    return 'hidden';
  }
  if (ui.isChanging) {
    return 'changing';
  }
  if (ui.isScheduled) {
    return 'scheduled';
  }
  return 'set';
}

/**
 * When presentation hides `recommendedDate` (e.g. overdue unadministered dose), show the
 * exact schedule date on the card above the reminder action — not inside the action block.
 */
export function getSupplementalCardScheduleDateIso(
  item: VaccineRecommendation,
  referenceDate: Date
): string | null {
  if (item.conditionalNextDose || item.recommendedDate?.trim()) {
    return null;
  }
  const eligibility = getReminderEligibility(item, referenceDate);
  if (!eligibility.eligible) {
    return null;
  }
  return eligibility.recommendedDate;
}
