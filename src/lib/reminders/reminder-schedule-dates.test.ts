import { describe, expect, it } from 'vitest';
import {
  localNotificationAtNineAm,
  overdueSafeFireDate,
  resolveFireDateForReminder,
} from '@/lib/reminders/reminder-schedule-dates';

describe('reminder schedule dates', () => {
  it('7. overdue uses safe future fire date', () => {
    const ref = new Date(2026, 8, 19, 12, 0, 0);
    const fire = resolveFireDateForReminder('2026-01-15', ref, true);
    const expected = overdueSafeFireDate(ref);
    expect(fire.getTime()).toBe(expected.getTime());
    expect(fire.getTime()).toBeGreaterThan(ref.getTime());
  });

  it('10. schedules exact date at 9am when future', () => {
    const ref = new Date(2026, 8, 1);
    const asOf = new Date(2026, 8, 1, 8, 0, 0);
    const fire = resolveFireDateForReminder('2026-09-30', ref, false, asOf);
    expect(fire).toEqual(localNotificationAtNineAm('2026-09-30'));
  });
});
