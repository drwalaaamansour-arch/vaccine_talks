import { describe, expect, it } from 'vitest';
import { AR_TRANSLATIONS, TRANSLATIONS } from '@/translations';

describe('reminder UI copy', () => {
  it('17–18. English and Arabic exact-date reminder actions', () => {
    expect(TRANSLATIONS.reminderSetAction).toBe('Set Reminder');
    expect(TRANSLATIONS.reminderCancelAction).toBe('Cancel Reminder');
    expect(AR_TRANSLATIONS.reminderSetAction).toBe('Set Reminder');
  });

  it('19–20. English and Arabic conditional unavailable message', () => {
    expect(TRANSLATIONS.reminderConditionalUnavailable).toBe(
      'Reminder will be available once the vaccination date is known.'
    );
    expect(AR_TRANSLATIONS.reminderConditionalUnavailable).toBe(
      'هنقدر نحدد الـ Reminder لما تاريخ التطعيم يبقى معروف.'
    );
  });
});
