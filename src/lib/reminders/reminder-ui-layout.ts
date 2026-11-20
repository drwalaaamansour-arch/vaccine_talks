import type { ResultsSectionKind } from '@/lib/vaccine-checker/result-presentation';
import type { VaccineRecommendation } from '@/lib/vaccine-checker/types';
import { shouldShowReminderBlockOnCard } from '@/lib/reminders/reminder-ui-state';

/** Wrapper: one vaccine info card + optional reminder block directly below. */
export const VACCINE_RECOMMENDATION_STACK_CLASS = 'vaccine-checker-recommendation-stack';

/** Outer shell for reminder UI — sibling below the vaccine info card, not inside it. */
export const REMINDER_BLOCK_SHELL_CLASS = 'vaccine-checker-reminder-block';

export type RecommendationReminderLayoutSpec = {
  vaccineInfoInSeparateCard: true;
  separateReminderBlockBelow: boolean;
};

export function getRecommendationReminderLayout(
  item: VaccineRecommendation,
  referenceDate: Date,
  section: ResultsSectionKind
): RecommendationReminderLayoutSpec {
  const separateReminderBlockBelow = shouldShowReminderBlockOnCard(item, referenceDate, section);
  return {
    vaccineInfoInSeparateCard: true,
    separateReminderBlockBelow,
  };
}

/** Results footer hosts calendar; reminder blocks live only in per-vaccine stacks. */
export const RESULTS_CALENDAR_FOOTER_SLOT = 'vaccine-checker-results-footer' as const;
