import { beforeEach, describe, expect, it, vi } from 'vitest';
import { makeRecommendation } from '@/lib/vaccine-checker/types';
import { buildReminderGroupsForItems } from '@/lib/reminders/reminder-grouping';
import {
  cancelReminderGroup,
  requestReminderPermission,
  rescheduleReminderGroup,
  scheduleReminderGroup,
} from '@/lib/reminders/local-notifications-reminder-service';

const scheduleMock = vi.fn().mockResolvedValue(undefined);
const cancelMock = vi.fn().mockResolvedValue(undefined);
const requestPermissionsMock = vi.fn().mockResolvedValue({ display: 'granted' });
const checkPermissionsMock = vi.fn().mockResolvedValue({ display: 'granted' });

vi.mock('@capacitor/core', () => ({
  Capacitor: { isNativePlatform: () => true },
}));

vi.mock('@capacitor/local-notifications', () => ({
  LocalNotifications: {
    schedule: scheduleMock,
    cancel: cancelMock,
    requestPermissions: requestPermissionsMock,
    checkPermissions: checkPermissionsMock,
  },
}));

vi.mock('@capacitor/preferences', () => ({
  Preferences: {
    get: vi.fn().mockResolvedValue({ value: null }),
    set: vi.fn().mockResolvedValue(undefined),
  },
}));

describe('local-notifications-reminder-service', () => {
  beforeEach(() => {
    scheduleMock.mockClear();
    cancelMock.mockClear();
  });

  it('8. permission granted', async () => {
    await expect(requestReminderPermission()).resolves.toBe('granted');
  });

  it('9. permission denied', async () => {
    requestPermissionsMock.mockResolvedValueOnce({ display: 'denied' });
    checkPermissionsMock.mockResolvedValueOnce({ display: 'prompt' });
    await expect(requestReminderPermission()).resolves.toBe('denied');
  });

  it('10–11. schedule exact date and duplicate prevention (cancel before schedule)', async () => {
    const ref = new Date(2026, 8, 1);
    const items = [
      makeRecommendation({
        id: 'pcv',
        vaccineCategory: 'pneumococcal',
        doseLabelKey: 'doseLabel_dose2',
        status: 'upcoming',
        recommendedDate: '2026-09-30',
        timingKind: 'FIXED_DATE',
        noteKeys: [],
      }),
    ];
    const group = buildReminderGroupsForItems(items, '2024-01-01', ref)[0]!;
    const fireAt = new Date(2026, 8, 30, 9, 0, 0);

    await scheduleReminderGroup({
      group,
      fireAt,
      doseLabels: ['PCV — Dose 2'],
      language: 'en',
      overdueUsedSafeDate: false,
    });
    await scheduleReminderGroup({
      group,
      fireAt,
      doseLabels: ['PCV — Dose 2'],
      language: 'en',
      overdueUsedSafeDate: false,
    });

    expect(scheduleMock).toHaveBeenCalledTimes(2);
    expect(cancelMock.mock.calls.length).toBeGreaterThanOrEqual(2);
  });

  it('12. cancel', async () => {
    await cancelReminderGroup('vt-reminder-2024-01-01-2026-09-30');
    expect(cancelMock).toHaveBeenCalled();
  });

  it('13. reschedule cancels then schedules again', async () => {
    const ref = new Date(2026, 8, 1);
    const items = [
      makeRecommendation({
        id: 'pcv',
        vaccineCategory: 'pneumococcal',
        doseLabelKey: 'doseLabel_dose2',
        status: 'upcoming',
        recommendedDate: '2026-09-30',
        timingKind: 'FIXED_DATE',
        noteKeys: [],
      }),
    ];
    const group = buildReminderGroupsForItems(items, '2024-01-01', ref)[0]!;
    const first = new Date(2026, 8, 30, 9, 0, 0);
    const second = new Date(2026, 9, 5, 9, 0, 0);

    await scheduleReminderGroup({
      group,
      fireAt: first,
      doseLabels: ['PCV — Dose 2'],
      language: 'en',
      overdueUsedSafeDate: false,
    });

    await rescheduleReminderGroup({
      group,
      newFireAt: second,
      doseLabels: ['PCV — Dose 2'],
      language: 'en',
    });

    expect(cancelMock.mock.calls.length).toBeGreaterThanOrEqual(2);
    expect(scheduleMock.mock.calls.length).toBeGreaterThanOrEqual(2);
  });
});
