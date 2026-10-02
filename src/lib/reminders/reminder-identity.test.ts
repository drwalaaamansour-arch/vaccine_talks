import { describe, expect, it } from 'vitest';
import { getReminderGroupId, reminderGroupIdToNotificationId } from '@/lib/reminders/reminder-identity';

describe('reminder identity', () => {
  it('6. stable group id and notification id for same logical reminder', () => {
    const a = getReminderGroupId('2024-01-01', '2026-09-30');
    const b = getReminderGroupId('2024-01-01', '2026-09-30');
    expect(a).toBe(b);
    expect(reminderGroupIdToNotificationId(a)).toBe(reminderGroupIdToNotificationId(b));
  });

  it('11. duplicate prevention — same group id when revisiting', () => {
    expect(getReminderGroupId('2024-01-01', '2026-09-30')).toBe('vt-reminder-2024-01-01-2026-09-30');
  });
});
