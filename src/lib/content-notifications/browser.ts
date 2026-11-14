import type { ContentPushClientDeps } from '@/lib/content-notifications/client';

function browserPermission(): NotificationPermission | 'unsupported' {
  if (typeof Notification === 'undefined') return 'unsupported';
  return Notification.permission;
}

export function createBrowserContentPushClientDeps(): ContentPushClientDeps {
  const hasNotification =
    typeof window !== 'undefined' && 'Notification' in window;
  const hasServiceWorker =
    typeof navigator !== 'undefined' && 'serviceWorker' in navigator;
  const hasPushManager =
    typeof window !== 'undefined' && 'PushManager' in window;

  return {
    hasNotification,
    hasServiceWorker,
    hasPushManager,
    permission: browserPermission(),
    vapidPublicKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
    requestPermission: () => Notification.requestPermission(),
    readyServiceWorker: () => navigator.serviceWorker.ready,
    getPushSubscription: async () => {
      const registration = await navigator.serviceWorker.ready;
      return registration.pushManager.getSubscription();
    },
    subscribePush: async (key) => {
      const registration = await navigator.serviceWorker.ready;
      return registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: key as BufferSource,
      });
    },
    unsubscribePush: (subscription) => subscription.unsubscribe(),
    fetchImpl: window.fetch.bind(window),
  };
}

export async function getBrowserContentPushSubscription(): Promise<PushSubscription | null> {
  if (
    typeof navigator === 'undefined' ||
    !('serviceWorker' in navigator) ||
    typeof window === 'undefined' ||
    !('PushManager' in window)
  ) {
    return null;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    return registration.pushManager.getSubscription();
  } catch {
    return null;
  }
}
