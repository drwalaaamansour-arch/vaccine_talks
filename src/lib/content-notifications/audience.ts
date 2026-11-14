import {
  CONTENT_NOTIFICATION_AUDIENCES,
  type ContentNotificationAudience,
  type ContentPushSubscriptionRecord,
} from '@/lib/content-notifications/types';

export function isContentNotificationAudience(
  value: unknown
): value is ContentNotificationAudience {
  return (
    typeof value === 'string' &&
    (CONTENT_NOTIFICATION_AUDIENCES as readonly string[]).includes(value)
  );
}

/**
 * HCP → HCP and BOTH
 * PARENT → PARENT and BOTH
 * BOTH → all active subscriptions
 */
export function subscriptionMatchesSendAudience(
  subscriptionAudience: ContentNotificationAudience,
  sendAudience: ContentNotificationAudience
): boolean {
  if (sendAudience === 'BOTH') return true;
  return (
    subscriptionAudience === sendAudience || subscriptionAudience === 'BOTH'
  );
}

export function selectSubscriptionsForAudience(
  subscriptions: ContentPushSubscriptionRecord[],
  sendAudience: ContentNotificationAudience
): ContentPushSubscriptionRecord[] {
  return subscriptions.filter((subscription) =>
    subscriptionMatchesSendAudience(subscription.audienceType, sendAudience)
  );
}
