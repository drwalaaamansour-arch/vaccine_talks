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

describe('temporary subscribe stage diagnostics', () => {
  const baseDeps = {
    hasNotification: true,
    hasServiceWorker: true,
    hasPushManager: true,
    permission: 'granted' as const,
    vapidPublicKey: 'BNbxR2d0',
    requestPermission: vi.fn(),
    getPushSubscription: vi.fn().mockResolvedValue(null),
    subscribePush: vi.fn().mockResolvedValue({
      toJSON: () => ({
        endpoint: 'https://fcm.googleapis.com/fcm/send/token',
        expirationTime: null,
        keys: { p256dh: 'p256dh-key-value', auth: 'auth-key-value' },
      }),
    }),
    unsubscribePush: vi.fn(),
    fetchImpl: vi.fn().mockResolvedValue({ ok: true }) as unknown as typeof fetch,
  };

  it('tags support-check failures', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = await subscribeToContentNotifications('HCP', false, baseDeps);
    expect(result).toMatchObject({
      ok: false,
      reason: 'requires_user_action',
      stage: 'support_checks',
    });
    errorSpy.mockRestore();
  });

  it('tags missing VAPID public key', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = await subscribeToContentNotifications('HCP', true, {
      ...baseDeps,
      vapidPublicKey: undefined,
    });
    expect(result).toMatchObject({
      ok: false,
      reason: 'vapid_unconfigured',
      stage: 'vapid_public_key',
      errorMessage: 'public_key_missing',
    });
    errorSpy.mockRestore();
  });

  it('tags Notification.requestPermission failures', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = await subscribeToContentNotifications('HCP', true, {
      ...baseDeps,
      permission: 'default',
      requestPermission: vi.fn().mockRejectedValue(new TypeError('permission boom')),
    });
    expect(result).toMatchObject({
      ok: false,
      stage: 'notification_permission',
      errorName: 'TypeError',
      errorMessage: 'permission boom',
    });
    errorSpy.mockRestore();
  });

  it('tags service worker ready failures', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = await subscribeToContentNotifications('HCP', true, {
      ...baseDeps,
      readyServiceWorker: vi
        .fn()
        .mockRejectedValue(new Error('ready failed')),
    });
    expect(result).toMatchObject({
      ok: false,
      stage: 'service_worker_ready',
      errorMessage: 'ready failed',
    });
    errorSpy.mockRestore();
  });

  it('tags existing subscription lookup failures', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = await subscribeToContentNotifications('HCP', true, {
      ...baseDeps,
      getPushSubscription: vi
        .fn()
        .mockRejectedValue(new Error('lookup failed')),
    });
    expect(result).toMatchObject({
      ok: false,
      stage: 'existing_push_subscription',
      errorMessage: 'lookup failed',
    });
    errorSpy.mockRestore();
  });

  it('tags pushManager.subscribe failures', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = await subscribeToContentNotifications('HCP', true, {
      ...baseDeps,
      subscribePush: vi
        .fn()
        .mockRejectedValue(new DOMException('subscribe failed', 'AbortError')),
    });
    expect(result).toMatchObject({
      ok: false,
      stage: 'push_manager_subscribe',
      errorName: 'AbortError',
      errorMessage: 'subscribe failed',
    });
    errorSpy.mockRestore();
  });

  it('tags subscription.toJSON failures', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = await subscribeToContentNotifications('HCP', true, {
      ...baseDeps,
      subscribePush: vi.fn().mockResolvedValue({
        toJSON: () => {
          throw new Error('toJSON failed');
        },
      }),
    });
    expect(result).toMatchObject({
      ok: false,
      stage: 'subscription_to_json',
      errorMessage: 'toJSON failed',
    });
    errorSpy.mockRestore();
  });

  it('tags POST subscribe network failures', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = await subscribeToContentNotifications('HCP', true, {
      ...baseDeps,
      fetchImpl: vi.fn().mockRejectedValue(new TypeError('fetch failed')) as unknown as typeof fetch,
    });
    expect(result).toMatchObject({
      ok: false,
      stage: 'subscribe_post',
      errorName: 'TypeError',
      errorMessage: 'fetch failed',
    });
    errorSpy.mockRestore();
  });

  it('tags subscribe response status and body', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = await subscribeToContentNotifications('HCP', true, {
      ...baseDeps,
      fetchImpl: vi.fn().mockResolvedValue({
        ok: false,
        status: 503,
        text: async () => '{"error":"content_push_store_unconfigured"}',
      }) as unknown as typeof fetch,
    });
    expect(result).toMatchObject({
      ok: false,
      stage: 'subscribe_response',
      errorMessage: '503 {"error":"content_push_store_unconfigured"}',
    });
    errorSpy.mockRestore();
  });
});
