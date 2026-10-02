'use client';

/**
 * Phase 1A: Capacitor Local Notifications wiring only (no scheduling UI yet).
 * Reminder scheduling will consume this in a later phase.
 */

export async function isLocalNotificationsPluginAvailable(): Promise<boolean> {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    const { Capacitor } = await import('@capacitor/core');
    if (!Capacitor.isNativePlatform()) {
      return false;
    }

    const { LocalNotifications } = await import('@capacitor/local-notifications');
    return typeof LocalNotifications.schedule === 'function';
  } catch {
    return false;
  }
}
