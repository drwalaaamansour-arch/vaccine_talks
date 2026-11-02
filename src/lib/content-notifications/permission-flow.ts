export type BrowserNotificationPermission =
  | NotificationPermission
  | 'unsupported';

export function shouldRequestNotificationPermission(input: {
  explicitUserAction: boolean;
  permission: BrowserNotificationPermission;
}): boolean {
  return input.explicitUserAction && input.permission === 'default';
}

export function canStartContentPushSubscribe(input: {
  explicitUserAction: boolean;
  hasNotification: boolean;
  hasServiceWorker: boolean;
  hasPushManager: boolean;
  permission: BrowserNotificationPermission;
}): { ok: true } | { ok: false; reason: string } {
  if (!input.explicitUserAction) {
    return { ok: false, reason: 'requires_user_action' };
  }
  if (
    !input.hasNotification ||
    !input.hasServiceWorker ||
    !input.hasPushManager ||
    input.permission === 'unsupported'
  ) {
    return { ok: false, reason: 'unsupported' };
  }
  if (input.permission === 'denied') {
    return { ok: false, reason: 'permission_denied' };
  }
  return { ok: true };
}

export async function requestNotificationPermissionAfterClick(input: {
  explicitUserAction: boolean;
  permission: BrowserNotificationPermission;
  requestPermission: () => Promise<NotificationPermission>;
}): Promise<BrowserNotificationPermission> {
  if (
    !shouldRequestNotificationPermission({
      explicitUserAction: input.explicitUserAction,
      permission: input.permission,
    })
  ) {
    return input.permission;
  }
  return input.requestPermission();
}

export function vapidPublicKeyToUint8Array(base64UrlKey: string): Uint8Array {
  const padding = '='.repeat((4 - (base64UrlKey.length % 4)) % 4);
  const base64 = (base64UrlKey + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(base64);
  const output = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i += 1) {
    output[i] = raw.charCodeAt(i);
  }
  return output;
}
