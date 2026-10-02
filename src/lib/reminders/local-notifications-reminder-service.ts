'use client';

import { buildGroupedNotificationCopy } from '@/lib/reminders/reminder-labels';
import { reminderGroupIdToNotificationId } from '@/lib/reminders/reminder-identity';
import {
  removeStoredReminderGroup,
  saveStoredReminderGroup,
  type StoredReminderGroup,
} from '@/lib/reminders/reminder-storage';
import type { ReminderGroupCandidate } from '@/lib/reminders/reminder-grouping';

export type ReminderPermissionStatus = 'granted' | 'denied' | 'prompt' | 'unavailable';

export type ScheduleReminderResult =
  | { ok: true; group: StoredReminderGroup }
  | { ok: false; error: 'unavailable' | 'denied' | 'schedule_failed' };

async function getLocalNotificationsModule() {
  const { Capacitor } = await import('@capacitor/core');
  if (!Capacitor.isNativePlatform()) {
    return null;
  }
  const { LocalNotifications } = await import('@capacitor/local-notifications');
  return LocalNotifications;
}

export async function getReminderPermissionStatus(): Promise<ReminderPermissionStatus> {
  const LocalNotifications = await getLocalNotificationsModule();
  if (!LocalNotifications) {
    return 'unavailable';
  }

  const { display } = await LocalNotifications.checkPermissions();
  if (display === 'granted') {
    return 'granted';
  }
  if (display === 'denied') {
    return 'denied';
  }
  return 'prompt';
}

export async function requestReminderPermission(): Promise<ReminderPermissionStatus> {
  const LocalNotifications = await getLocalNotificationsModule();
  if (!LocalNotifications) {
    return 'unavailable';
  }

  const current = await getReminderPermissionStatus();
  if (current === 'granted' || current === 'denied') {
    return current;
  }

  const { display } = await LocalNotifications.requestPermissions();
  if (display === 'granted') {
    return 'granted';
  }
  if (display === 'denied') {
    return 'denied';
  }
  return 'prompt';
}

export async function cancelReminderGroup(groupId: string): Promise<void> {
  const LocalNotifications = await getLocalNotificationsModule();
  const notificationId = reminderGroupIdToNotificationId(groupId);
  if (LocalNotifications) {
    await LocalNotifications.cancel({ notifications: [{ id: notificationId }] });
  }
  await removeStoredReminderGroup(groupId);
}

export async function scheduleReminderGroup(options: {
  group: ReminderGroupCandidate;
  fireAt: Date;
  doseLabels: string[];
  language: 'en' | 'ar';
  overdueUsedSafeDate: boolean;
}): Promise<ScheduleReminderResult> {
  const permission = await requestReminderPermission();
  if (permission === 'unavailable') {
    return { ok: false, error: 'unavailable' };
  }
  if (permission === 'denied') {
    return { ok: false, error: 'denied' };
  }

  const LocalNotifications = await getLocalNotificationsModule();
  if (!LocalNotifications) {
    return { ok: false, error: 'unavailable' };
  }

  const { title, body } = buildGroupedNotificationCopy(options.language, options.doseLabels);
  const notificationId = options.group.notificationId;

  await LocalNotifications.cancel({ notifications: [{ id: notificationId }] });

  try {
    await LocalNotifications.schedule({
      notifications: [
        {
          id: notificationId,
          title,
          body,
          schedule: { at: options.fireAt, allowWhileIdle: true },
        },
      ],
    });
  } catch {
    return { ok: false, error: 'schedule_failed' };
  }

  const stored: StoredReminderGroup = {
    groupId: options.group.groupId,
    childScopeId: options.group.childScopeId,
    displayDate: options.group.displayDate,
    fireAtMs: options.fireAt.getTime(),
    memberKeys: options.group.memberKeys,
    doseLabels: options.doseLabels,
  };

  await saveStoredReminderGroup(stored);
  return { ok: true, group: stored };
}

export async function rescheduleReminderGroup(options: {
  group: ReminderGroupCandidate;
  newFireAt: Date;
  doseLabels: string[];
  language: 'en' | 'ar';
}): Promise<ScheduleReminderResult> {
  await cancelReminderGroup(options.group.groupId);
  return scheduleReminderGroup({
    group: options.group,
    fireAt: options.newFireAt,
    doseLabels: options.doseLabels,
    language: options.language,
    overdueUsedSafeDate: options.newFireAt.getTime() > Date.now(),
  });
}
