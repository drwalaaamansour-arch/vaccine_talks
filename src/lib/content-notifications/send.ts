import webpush from 'web-push';
import { selectSubscriptionsForAudience } from '@/lib/content-notifications/audience';
import { shouldDeleteInvalidPushSubscription } from '@/lib/content-notifications/invalid-subscription';
import { serializePushPayload } from '@/lib/content-notifications/payload';
import type { ContentPushSubscriptionStore } from '@/lib/content-notifications/storage';
import type {
  ContentNotificationAudience,
  ContentPushPayload,
  ContentPushSubscriptionRecord,
} from '@/lib/content-notifications/types';

export type SendContentNotificationsResult = {
  attempted: number;
  delivered: number;
  removed: number;
  failed: number;
};

export function configureWebPushFromEnv(env: NodeJS.ProcessEnv = process.env): {
  ok: true;
} | { ok: false; error: string } {
  const publicKey = env.NEXT_PUBLIC_VAPID_PUBLIC_KEY?.trim();
  const privateKey = env.VAPID_PRIVATE_KEY?.trim();
  const subject = env.VAPID_SUBJECT?.trim();
  if (!publicKey || !privateKey || !subject) {
    return { ok: false, error: 'vapid_unconfigured' };
  }

  webpush.setVapidDetails(subject, publicKey, privateKey);
  return { ok: true };
}

export async function sendContentNotifications(options: {
  store: ContentPushSubscriptionStore;
  payload: ContentPushPayload;
  audienceType: ContentNotificationAudience;
  sendNotification?: typeof webpush.sendNotification;
}): Promise<SendContentNotificationsResult> {
  const sendNotification =
    options.sendNotification ?? webpush.sendNotification.bind(webpush);
  const subscriptions = await options.store.listAll();
  const targets = selectSubscriptionsForAudience(
    subscriptions,
    options.audienceType
  );
  const body = serializePushPayload(options.payload);

  let delivered = 0;
  let removed = 0;
  let failed = 0;

  for (const subscription of targets) {
    try {
      await sendNotification(toWebPushSubscription(subscription), body);
      delivered += 1;
    } catch (error) {
      if (shouldDeleteInvalidPushSubscription(error)) {
        await options.store.deleteByEndpoint(subscription.endpoint);
        removed += 1;
        continue;
      }
      failed += 1;
    }
  }

  return {
    attempted: targets.length,
    delivered,
    removed,
    failed,
  };
}

function toWebPushSubscription(record: ContentPushSubscriptionRecord) {
  return {
    endpoint: record.endpoint,
    expirationTime: record.expirationTime,
    keys: {
      p256dh: record.keys.p256dh,
      auth: record.keys.auth,
    },
  };
}
