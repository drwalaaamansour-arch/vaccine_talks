import { describe, expect, it, vi } from 'vitest';
import {
  subscribeToContentNotifications,
  unsubscribeFromContentNotifications,
} from '@/lib/content-notifications/client';
import {
  canStartContentPushSubscribe,
  requestNotificationPermissionAfterClick,
  shouldRequestNotificationPermission,
  vapidPublicKeyToUint8Array,
} from '@/lib/content-notifications/permission-flow';
import {
  CONTENT_PUSH_SUBSCRIBE_ROUTE,
  CONTENT_PUSH_UNSUBSCRIBE_ROUTE,
} from '@/lib/content-notifications/types';

describe('permission and subscription flow helpers', () => {
  it('does not request permission on page load / without a click', () => {
    expect(
      shouldRequestNotificationPermission({
        explicitUserAction: false,
        permission: 'default',
      })
    ).toBe(false);
    expect(
      canStartContentPushSubscribe({
        explicitUserAction: false,
        hasNotification: true,
        hasServiceWorker: true,
        hasPushManager: true,
        permission: 'default',
      })
    ).toEqual({ ok: false, reason: 'requires_user_action' });
  });

  it('requests permission only after an explicit follow click when permission is default', async () => {
    const requestPermission = vi.fn().mockResolvedValue('granted');
    expect(
      shouldRequestNotificationPermission({
        explicitUserAction: true,
        permission: 'default',
      })
    ).toBe(true);
    await expect(
      requestNotificationPermissionAfterClick({
        explicitUserAction: true,
        permission: 'default',
        requestPermission,
      })
    ).resolves.toBe('granted');
    expect(requestPermission).toHaveBeenCalledTimes(1);
  });

  it('does not prompt again when permission is already granted or denied', async () => {
    const requestPermission = vi.fn();
    await requestNotificationPermissionAfterClick({
      explicitUserAction: true,
      permission: 'granted',
      requestPermission,
    });
    await requestNotificationPermissionAfterClick({
      explicitUserAction: true,
      permission: 'denied',
      requestPermission,
    });
    expect(requestPermission).not.toHaveBeenCalled();
  });

  it('subscribes after a click and saves the browser subscription to the server', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({ ok: true });
    const subscribePush = vi.fn().mockResolvedValue({
      toJSON: () => ({
        endpoint: 'https://fcm.googleapis.com/fcm/send/token',
        expirationTime: null,
        keys: { p256dh: 'p256dh-key-value', auth: 'auth-key-value' },
      }),
    });

    const result = await subscribeToContentNotifications('HCP', true, {
      hasNotification: true,
      hasServiceWorker: true,
      hasPushManager: true,
      permission: 'granted',
      vapidPublicKey: 'BNbxR2d0',
      requestPermission: vi.fn(),
      getPushSubscription: vi.fn(),
      subscribePush,
      unsubscribePush: vi.fn(),
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });

    expect(result.ok).toBe(true);
    expect(subscribePush).toHaveBeenCalled();
    expect(fetchImpl).toHaveBeenCalledWith(
      CONTENT_PUSH_SUBSCRIBE_ROUTE,
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({
          endpoint: 'https://fcm.googleapis.com/fcm/send/token',
          expirationTime: null,
          keys: { p256dh: 'p256dh-key-value', auth: 'auth-key-value' },
          audienceType: 'HCP',
        }),
      })
    );
  });

  it('unsubscribes locally and asks the server to drop the endpoint', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({ ok: true });
    const unsubscribePush = vi.fn().mockResolvedValue(true);
    const result = await unsubscribeFromContentNotifications({
      getPushSubscription: async () =>
        ({
          endpoint: 'https://fcm.googleapis.com/fcm/send/token',
        }) as PushSubscription,
      unsubscribePush,
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });

    expect(result).toEqual({ ok: true });
    expect(unsubscribePush).toHaveBeenCalled();
    expect(fetchImpl).toHaveBeenCalledWith(
      CONTENT_PUSH_UNSUBSCRIBE_ROUTE,
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({
          endpoint: 'https://fcm.googleapis.com/fcm/send/token',
        }),
      })
    );
  });

  it('converts a VAPID public key to bytes for PushManager.subscribe', () => {
    const bytes = vapidPublicKeyToUint8Array('AQID');
    expect(Array.from(bytes)).toEqual([1, 2, 3]);
  });
});
