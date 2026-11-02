import { describe, expect, it, vi } from 'vitest';
import { shouldDeleteInvalidPushSubscription } from '@/lib/content-notifications/invalid-subscription';
import { sendContentNotifications } from '@/lib/content-notifications/send';
import { createMemoryContentPushStore } from '@/lib/content-notifications/storage';
import type { ContentPushSubscriptionRecord } from '@/lib/content-notifications/types';

function record(
  audienceType: ContentPushSubscriptionRecord['audienceType'],
  endpoint: string
): ContentPushSubscriptionRecord {
  return {
    endpoint,
    expirationTime: null,
    keys: { p256dh: 'p256dh-key-value', auth: 'auth-key-value' },
    audienceType,
    createdAt: '2026-11-02T00:00:00.000Z',
    updatedAt: '2026-11-02T00:00:00.000Z',
  };
}

describe('invalid subscription cleanup', () => {
  it('treats 404 and 410 push responses as gone', () => {
    expect(shouldDeleteInvalidPushSubscription({ statusCode: 404 })).toBe(true);
    expect(shouldDeleteInvalidPushSubscription({ statusCode: 410 })).toBe(true);
    expect(shouldDeleteInvalidPushSubscription({ statusCode: 500 })).toBe(false);
    expect(shouldDeleteInvalidPushSubscription(new Error('network'))).toBe(
      false
    );
  });

  it('removes expired subscriptions from storage during send', async () => {
    const gone = record('HCP', 'https://push.example/gone');
    const live = record('HCP', 'https://push.example/live');
    const parentOnly = record('PARENT', 'https://push.example/parent');
    const store = createMemoryContentPushStore([gone, live, parentOnly]);

    const sendNotification = vi.fn(async (subscription: { endpoint: string }) => {
      if (subscription.endpoint === gone.endpoint) {
        const error = new Error('Gone') as Error & { statusCode: number };
        error.statusCode = 410;
        throw error;
      }
    });

    const result = await sendContentNotifications({
      store,
      payload: {
        title: 'HCP update',
        body: 'New guideline PDF',
        url: '/hcp-resources',
        audienceType: 'HCP',
      },
      audienceType: 'HCP',
      sendNotification: sendNotification as never,
    });

    expect(result).toEqual({
      attempted: 2,
      delivered: 1,
      removed: 1,
      failed: 0,
    });
    expect(await store.getByEndpoint(gone.endpoint)).toBeNull();
    expect(await store.getByEndpoint(live.endpoint)).not.toBeNull();
    expect(await store.getByEndpoint(parentOnly.endpoint)).not.toBeNull();
    expect(sendNotification).toHaveBeenCalledTimes(2);
  });
});
