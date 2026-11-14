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

export const CONTENT_PUSH_SUBSCRIBE_STAGES = [
  'support_checks',
  'vapid_public_key',
  'notification_permission',
  'service_worker_ready',
  'existing_push_subscription',
  'push_manager_subscribe',
  'subscription_to_json',
  'subscribe_post',
  'subscribe_response',
] as const;

export type ContentPushSubscribeStage =
  (typeof CONTENT_PUSH_SUBSCRIBE_STAGES)[number];

export type ContentPushClientDeps = {
  hasNotification: boolean;
  hasServiceWorker: boolean;
  hasPushManager: boolean;
  permission: BrowserNotificationPermission;
  vapidPublicKey: string | undefined;
  requestPermission: () => Promise<NotificationPermission>;
  readyServiceWorker?: () => Promise<unknown>;
  getPushSubscription: () => Promise<PushSubscription | null>;
  subscribePush: (key: Uint8Array) => Promise<PushSubscription>;
  unsubscribePush: (subscription: PushSubscription) => Promise<boolean>;
  fetchImpl: typeof fetch;
};

export type ContentPushClientFailure = {
  ok: false;
  reason: string;
  stage: ContentPushSubscribeStage;
  errorName: string;
  errorMessage: string;
};

export type ContentPushClientResult =
  | { ok: true; subscription: PushSubscriptionJSON }
  | ContentPushClientFailure;

function diagnosticFromUnknown(error: unknown): {
  errorName: string;
  errorMessage: string;
} {
  if (error instanceof Error) {
    return {
      errorName: error.name?.trim() || 'Error',
      errorMessage: (error.message || '').trim().slice(0, 180),
    };
  }
  return {
    errorName: 'Error',
    errorMessage: String(error).slice(0, 180),
  };
}

function failSubscribeStage(
  stage: ContentPushSubscribeStage,
  reason: string,
  error?: unknown
): ContentPushClientFailure {
  const diagnostic = diagnosticFromUnknown(error ?? new Error(reason));
  const errorObject =
    error instanceof Error ? error : new Error(diagnostic.errorMessage);
  console.error('content-push-subscribe-failed', {
    stage,
    reason,
    errorName: diagnostic.errorName,
    errorMessage: diagnostic.errorMessage,
  }, errorObject);
  return {
    ok: false,
    reason,
    stage,
    errorName: diagnostic.errorName,
    errorMessage: diagnostic.errorMessage,
  };
}

export async function subscribeToContentNotifications(
  audienceType: ContentNotificationAudience,
  explicitUserAction: boolean,
  deps: ContentPushClientDeps
): Promise<ContentPushClientResult> {
  let stage: ContentPushSubscribeStage = 'support_checks';

  try {
    stage = 'support_checks';
    const gate = canStartContentPushSubscribe({
      explicitUserAction,
      hasNotification: deps.hasNotification,
      hasServiceWorker: deps.hasServiceWorker,
      hasPushManager: deps.hasPushManager,
      permission: deps.permission,
    });
    if (!gate.ok) {
      return failSubscribeStage(
        'support_checks',
        gate.reason,
        new Error(gate.reason)
      );
    }

    stage = 'vapid_public_key';
    if (!deps.vapidPublicKey) {
      return failSubscribeStage(
        'vapid_public_key',
        'vapid_unconfigured',
        new Error('public_key_missing')
      );
    }

    let applicationServerKey: Uint8Array;
    try {
      applicationServerKey = vapidPublicKeyToUint8Array(deps.vapidPublicKey);
    } catch (error) {
      return failSubscribeStage('vapid_public_key', 'vapid_unconfigured', error);
    }

    stage = 'notification_permission';
    let permission: BrowserNotificationPermission;
    try {
      permission = await requestNotificationPermissionAfterClick({
        explicitUserAction,
        permission: deps.permission,
        requestPermission: deps.requestPermission,
      });
    } catch (error) {
      return failSubscribeStage(
        'notification_permission',
        'permission_denied',
        error
      );
    }
    if (permission !== 'granted') {
      return failSubscribeStage(
        'notification_permission',
        'permission_denied',
        new Error(String(permission))
      );
    }

    if (deps.readyServiceWorker) {
      stage = 'service_worker_ready';
      try {
        await deps.readyServiceWorker();
      } catch (error) {
        return failSubscribeStage(
          'service_worker_ready',
          'service_worker_ready_failed',
          error
        );
      }
    }

    stage = 'existing_push_subscription';
    try {
      await deps.getPushSubscription();
    } catch (error) {
      return failSubscribeStage(
        'existing_push_subscription',
        'existing_subscription_lookup_failed',
        error
      );
    }

    stage = 'push_manager_subscribe';
    let pushSubscription: PushSubscription;
    try {
      pushSubscription = await deps.subscribePush(applicationServerKey);
    } catch (error) {
      return failSubscribeStage(
        'push_manager_subscribe',
        'subscribe_failed',
        error
      );
    }

    stage = 'subscription_to_json';
    let json: PushSubscriptionJSON;
    try {
      json = pushSubscription.toJSON();
    } catch (error) {
      return failSubscribeStage(
        'subscription_to_json',
        'subscription_to_json_failed',
        error
      );
    }

    stage = 'subscribe_post';
    let response: Response;
    try {
      response = await deps.fetchImpl(CONTENT_PUSH_SUBSCRIBE_ROUTE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          endpoint: json.endpoint,
          expirationTime: json.expirationTime ?? null,
          keys: json.keys,
          audienceType,
        }),
      });
    } catch (error) {
      return failSubscribeStage('subscribe_post', 'save_failed', error);
    }

    stage = 'subscribe_response';
    if (!response.ok) {
      let body = '';
      try {
        body = (await response.text()).slice(0, 180);
      } catch {
        body = '';
      }
      return failSubscribeStage(
        'subscribe_response',
        'save_failed',
        new Error(`${response.status} ${body}`.trim())
      );
    }

    return { ok: true, subscription: json };
  } catch (error) {
    return failSubscribeStage(stage, 'subscribe_failed', error);
  }
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
