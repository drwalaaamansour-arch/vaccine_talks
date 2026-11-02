export const CONTENT_NOTIFICATION_AUDIENCES = ['HCP', 'PARENT', 'BOTH'] as const;

export type ContentNotificationAudience =
  (typeof CONTENT_NOTIFICATION_AUDIENCES)[number];

export type ContentPushKeys = {
  p256dh: string;
  auth: string;
};

/** Stored browser push subscription. No medical or identity fields. */
export type ContentPushSubscriptionRecord = {
  endpoint: string;
  expirationTime: number | null;
  keys: ContentPushKeys;
  audienceType: ContentNotificationAudience;
  createdAt: string;
  updatedAt: string;
};

export type ContentPushPayload = {
  title: string;
  body: string;
  url: string;
  audienceType?: ContentNotificationAudience;
  category?: string;
};

export const CONTENT_PUSH_SUBSCRIBE_ROUTE =
  '/api/content-notifications/subscribe';
export const CONTENT_PUSH_UNSUBSCRIBE_ROUTE =
  '/api/content-notifications/unsubscribe';
export const CONTENT_PUSH_ADMIN_SEND_ROUTE =
  '/api/content-notifications/admin/send';

export const CONTENT_PUSH_REDIS_HASH_KEY = 'vt:content-push:subscriptions';
