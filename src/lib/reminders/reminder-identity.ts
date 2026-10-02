import type { VaccineRecommendation } from '@/lib/vaccine-checker/types';

/** Extensible child scope — today: one DOB ISO per wizard session. */
export function getChildScopeId(dobIso: string): string {
  return dobIso;
}

export function getReminderMemberKey(
  childScopeId: string,
  item: VaccineRecommendation,
  recommendedDate: string
): string {
  return `${childScopeId}:${item.id}:${item.doseLabelKey}:${recommendedDate}`;
}

/** Stable group id for same child + same Checker display date. */
export function getReminderGroupId(childScopeId: string, displayDateIso: string): string {
  return `vt-reminder-${childScopeId}-${displayDateIso}`;
}

/** Capacitor local notifications require numeric ids on some platforms. */
export function reminderGroupIdToNotificationId(groupId: string): number {
  let hash = 0;
  for (let i = 0; i < groupId.length; i += 1) {
    hash = (hash << 5) - hash + groupId.charCodeAt(i);
    hash |= 0;
  }
  const positive = Math.abs(hash) % 2147483646;
  return positive === 0 ? 1 : positive;
}
