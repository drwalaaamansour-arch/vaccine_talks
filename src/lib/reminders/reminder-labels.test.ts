import { describe, expect, it } from 'vitest';
import { buildGroupedNotificationCopy } from '@/lib/reminders/reminder-labels';

describe('buildGroupedNotificationCopy', () => {
  it('14. grouped notification body lists vaccines', () => {
    const en = buildGroupedNotificationCopy('en', ['PCV Dose 2', 'MMR Dose 1']);
    expect(en.body).toContain('PCV Dose 2');
    expect(en.body).toContain('MMR Dose 1');
  });
});
