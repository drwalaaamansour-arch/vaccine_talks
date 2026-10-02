import { getReminderEligibility } from '@/lib/reminders/reminder-eligibility';
import {
  getReminderGroupId,
  getReminderMemberKey,
  reminderGroupIdToNotificationId,
} from '@/lib/reminders/reminder-identity';
import type { VaccineRecommendation } from '@/lib/vaccine-checker/types';

export type ReminderGroupCandidate = {
  groupId: string;
  notificationId: number;
  childScopeId: string;
  displayDate: string;
  memberKeys: string[];
  items: VaccineRecommendation[];
};

export function buildReminderGroupsForItems(
  items: VaccineRecommendation[],
  childScopeId: string,
  referenceDate: Date
): ReminderGroupCandidate[] {
  const byDate = new Map<string, VaccineRecommendation[]>();

  for (const item of items) {
    const eligibility = getReminderEligibility(item, referenceDate);
    if (!eligibility.eligible) {
      continue;
    }
    const list = byDate.get(eligibility.recommendedDate) ?? [];
    list.push(item);
    byDate.set(eligibility.recommendedDate, list);
  }

  const groups: ReminderGroupCandidate[] = [];

  for (const [displayDate, groupItems] of byDate.entries()) {
    const groupId = getReminderGroupId(childScopeId, displayDate);
    groups.push({
      groupId,
      notificationId: reminderGroupIdToNotificationId(groupId),
      childScopeId,
      displayDate,
      memberKeys: groupItems.map((item) => getReminderMemberKey(childScopeId, item, displayDate)),
      items: groupItems,
    });
  }

  return groups.sort((a, b) => a.displayDate.localeCompare(b.displayDate));
}

export function findReminderGroupForItem(
  items: VaccineRecommendation[],
  childScopeId: string,
  referenceDate: Date,
  target: VaccineRecommendation
): ReminderGroupCandidate | null {
  const eligibility = getReminderEligibility(target, referenceDate);
  if (!eligibility.eligible) {
    return null;
  }

  const groups = buildReminderGroupsForItems(items, childScopeId, referenceDate);
  return groups.find((group) => group.displayDate === eligibility.recommendedDate) ?? null;
}
