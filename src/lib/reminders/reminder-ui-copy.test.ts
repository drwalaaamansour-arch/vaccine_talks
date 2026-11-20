import { describe, expect, it } from 'vitest';
import { AR_TRANSLATIONS, TRANSLATIONS } from '@/translations';

describe('reminder UI copy', () => {
  it('7–8. English and Arabic Set Reminder labels', () => {
    expect(TRANSLATIONS.reminderSetAction).toBe('Set Reminder');
    expect(AR_TRANSLATIONS.reminderSetAction).toBe('تعيين تذكير');
  });

  it('scheduled / cancel / change English and Arabic labels', () => {
    expect(TRANSLATIONS.reminderSetLabel).toBe('Reminder Set');
    expect(TRANSLATIONS.reminderCancelAction).toBe('Cancel');
    expect(TRANSLATIONS.reminderChangeAction).toBe('Change');
    expect(AR_TRANSLATIONS.reminderSetLabel).toBe('تم تعيين التذكير');
    expect(AR_TRANSLATIONS.reminderCancelAction).toBe('إلغاء');
    expect(AR_TRANSLATIONS.reminderChangeAction).toBe('تغيير');
  });

  it('conditional unavailable message (EN + AR)', () => {
    expect(TRANSLATIONS.reminderConditionalUnavailable).toBe(
      'Reminder will be available once the vaccination date is known.'
    );
    expect(AR_TRANSLATIONS.reminderConditionalUnavailable).toBe(
      'هنقدر نحدد التذكير لما نعرف تاريخ التطعيم.'
    );
  });
});
