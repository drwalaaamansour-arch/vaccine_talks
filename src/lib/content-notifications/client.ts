import {
  canStartContentPushSubscribe,
  requestNotificationPermissionAfterClick,
  vapidPublicKeyToUint8Array,
  type BrowserNotificationPermission,
} from '@/lib/content-notifications/permission-flow';
import {
  CONTENT_PUSH_SUBSCRIBE_ROUTE,
  CONTENT_PUSH_UNSUBSCRIBE_ROUTE,
  type ContentNotificationAudience,
} from '@/lib/content-notifications/types';

export type ContentPushClientDeps = {
  hasNotification: boolean;
  hasServiceWorker: boolean;
  hasPushManager: boolean;
  permission: BrowserNotificationPermission;
  vapidPublicKey: string | undefined;
  requestPermission: () => Promise<NotificationPermission>;
  getPushSubscription: () => Promise<PushSubscription | null>;
  subscribePush: (key: Uint8Array) => Promise<PushSubscription>;
  unsubscribePush: (subscription: PushSubscription) => Promise<boolean>;
  fetchImpl: typeof fetch;
};

export type ContentPushClientResult =
  | { ok: true; subscription: PushSubscriptionJSON }
  | { ok: false; reason: string };

export async function subscribeToContentNotifications(
  audienceType: ContentNotificationAudience,
  explicitUserAction: boolean,
  deps: ContentPushClientDeps
): Promise<ContentPushClientResult> {
  const gate = canStartContentPushSubscribe({
    explicitUserAction,
    hasNotification: deps.hasNotification,
    hasServiceWorker: deps.hasServiceWorker,
    hasPushManager: deps.hasPushManager,
    permission: deps.permission,
  });
  if (!gate.ok) return gate;

  if (!deps.vapidPublicKey) {
    return { ok: false, reason: 'vapid_unconfigured' };
  }

  const permission = await requestNotificationPermissionAfterClick({
    explicitUserAction,
    permission: deps.permission,
    requestPermission: deps.requestPermission,
  });
  if (permission !== 'granted') {
    return { ok: false, reason: 'permission_denied' };
  }

  const applicationServerKey = vapidPublicKeyToUint8Array(deps.vapidPublicKey);
  const pushSubscription = await deps.subscribePush(applicationServerKey);
  const json = pushSubscription.toJSON();

  const response = await deps.fetchImpl(CONTENT_PUSH_SUBSCRIBE_ROUTE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      endpoint: json.endpoint,
      expirationTime: json.expirationTime ?? null,
      keys: json.keys,
      audienceType,
    }),
  });

  if (!response.ok) {
    return { ok: false, reason: 'save_failed' };
  }

  return { ok: true, subscription: json };
}

export async function unsubscribeFromContentNotifications(
  deps: Pick<
    ContentPushClientDeps,
    'getPushSubscription' | 'unsubscribePush' | 'fetchImpl'
  >
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const subscription = await deps.getPushSubscription();
  if (!subscription) {
    return { ok: true };
  }

  const endpoint = subscription.endpoint;
  await deps.unsubscribePush(subscription);

  const response = await deps.fetchImpl(CONTENT_PUSH_UNSUBSCRIBE_ROUTE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ endpoint }),
  });

  if (!response.ok) {
    return { ok: false, reason: 'unsubscribe_failed' };
  }

  return { ok: true };
}
