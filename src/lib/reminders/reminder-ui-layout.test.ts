import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { makeRecommendation, type CheckerInput } from '@/lib/vaccine-checker/types';
import { buildReminderGroupsForItems } from '@/lib/reminders/reminder-grouping';
import {
  getRecommendationReminderLayout,
  REMINDER_BLOCK_SHELL_CLASS,
  RESULTS_CALENDAR_FOOTER_SLOT,
  VACCINE_RECOMMENDATION_STACK_CLASS,
} from '@/lib/reminders/reminder-ui-layout';
import { getReminderCardUiPhase } from '@/lib/reminders/reminder-ui-state';
import { AR_TRANSLATIONS, TRANSLATIONS } from '@/translations';
import { VACCINE_RESULT_CARD_CLASS } from '@/components/wizard/vaccine-result-card-styles';

function synflorixOverdueInput(): CheckerInput {
  const dose1 = new Date(2026, 6, 30);
  return {
    dob: new Date(2026, 0, 1),
    referenceDate: new Date(2026, 9, 2),
    mmrDate: null,
    mmrDates: [],
    routineVaccinesStatus: 'complete',
    completedRoutineVisits: ['2months', '4months', '6months'],
    vaccineHistory: [
      {
        category: 'pneumococcal',
        product: 'synflorix',
        numberOfDoses: 1,
        firstDoseDate: dose1,
        lastDoseDate: dose1,
        doseDates: [dose1],
      },
    ],
  };
}

describe('reminder block layout (separate from vaccine info card)', () => {
  it('1. exact-date → separate reminder block below vaccine card', () => {
    const item = makeRecommendation({
      id: 'pcv-d2',
      vaccineCategory: 'pneumococcal',
      doseLabelKey: 'doseLabel_dose2',
      status: 'upcoming',
      recommendedDate: '2026-10-30',
      timingKind: 'FIXED_DATE',
      noteKeys: [],
    });
    const layout = getRecommendationReminderLayout(item, new Date(2026, 8, 1), 'upcoming');
    expect(layout).toEqual({
      vaccineInfoInSeparateCard: true,
      separateReminderBlockBelow: true,
    });
    expect(VACCINE_RECOMMENDATION_STACK_CLASS).toBeTruthy();
    expect(REMINDER_BLOCK_SHELL_CLASS).toBeTruthy();
    expect(VACCINE_RESULT_CARD_CLASS).not.toContain(REMINDER_BLOCK_SHELL_CLASS);
  });

  it('2. overdue exact-date → separate reminder block below', () => {
    const input = synflorixOverdueInput();
    const results = calculateVaccineRecommendations(input);
    const dose2 = results.dueNow.find((item) => item.doseLabelKey === 'doseLabel_dose2')!;
    const layout = getRecommendationReminderLayout(dose2, input.referenceDate, 'dueNow');
    expect(layout.separateReminderBlockBelow).toBe(true);
    expect(getReminderCardUiPhase(dose2, input.referenceDate, { isScheduled: false, isChanging: false })).toBe(
      'set'
    );
  });

  it('3. conditional → separate unavailable block below', () => {
    const item = makeRecommendation({
      id: 'flu-d2-cond',
      vaccineCategory: 'influenza',
      doseLabelKey: 'doseLabel_dose2',
      status: 'upcoming',
      conditionalNextDose: true,
      noteKeys: [],
    });
    expect(getRecommendationReminderLayout(item, new Date(2026, 8, 1), 'upcoming').separateReminderBlockBelow).toBe(
      true
    );
    expect(getReminderCardUiPhase(item, new Date(2026, 8, 1), { isScheduled: false, isChanging: false })).toBe(
      'conditional_message'
    );
  });

  it('4. completed → no reminder block', () => {
    const item = makeRecommendation({
      id: 'pcv-d2',
      vaccineCategory: 'pneumococcal',
      doseLabelKey: 'doseLabel_dose2',
      status: 'completed',
      recommendedDate: '2026-10-30',
      timingKind: 'FIXED_DATE',
      noteKeys: [],
    });
    expect(getRecommendationReminderLayout(item, new Date(2026, 8, 1), 'completed').separateReminderBlockBelow).toBe(
      false
    );
  });

  it('5. multiple vaccines → independent reminder blocks', () => {
    const ref = new Date(2026, 8, 1);
    const items = ['pcv-d2', 'flu-d2', 'mmr-d1'].map((id, index) =>
      makeRecommendation({
        id,
        vaccineCategory: index === 2 ? 'routine' : index === 1 ? 'influenza' : 'pneumococcal',
        doseLabelKey: index === 2 ? 'doseLabel_dose1' : 'doseLabel_dose2',
        status: 'upcoming',
        recommendedDate: '2026-10-30',
        timingKind: 'FIXED_DATE',
        noteKeys: [],
      })
    );
    for (const item of items) {
      expect(getRecommendationReminderLayout(item, ref, 'upcoming').separateReminderBlockBelow).toBe(true);
    }
  });

  it('6–7. English and Arabic reminder action copy', () => {
    expect(TRANSLATIONS.reminderSetAction).toBe('Set Reminder');
    expect(TRANSLATIONS.reminderSetLabel).toBe('Reminder Set');
    expect(TRANSLATIONS.reminderCancelAction).toBe('Cancel');
    expect(TRANSLATIONS.reminderChangeAction).toBe('Change');
    expect(AR_TRANSLATIONS.reminderSetAction).toBe('تعيين تذكير');
    expect(AR_TRANSLATIONS.reminderSetLabel).toBe('تم تعيين التذكير');
    expect(AR_TRANSLATIONS.reminderCancelAction).toBe('إلغاء');
    expect(AR_TRANSLATIONS.reminderChangeAction).toBe('تغيير');
    expect(AR_TRANSLATIONS.reminderConditionalUnavailable).toBe(
      'هنقدر نحدد التذكير لما نعرف تاريخ التطعيم.'
    );
  });

  it('8. notification grouping unchanged for same date', () => {
    const ref = new Date(2026, 8, 1);
    const sharedDate = '2026-10-30';
    const items = [
      makeRecommendation({
        id: 'pcv-d2',
        vaccineCategory: 'pneumococcal',
        doseLabelKey: 'doseLabel_dose2',
        status: 'upcoming',
        recommendedDate: sharedDate,
        timingKind: 'FIXED_DATE',
        noteKeys: [],
      }),
      makeRecommendation({
        id: 'flu-d2',
        vaccineCategory: 'influenza',
        doseLabelKey: 'doseLabel_dose2',
        status: 'upcoming',
        recommendedDate: sharedDate,
        timingKind: 'FIXED_DATE',
        noteKeys: [],
      }),
    ];
    const groups = buildReminderGroupsForItems(items, '2024-01-01', ref);
    expect(groups).toHaveLength(1);
    expect(groups[0]!.items).toHaveLength(2);
  });

  it('9. calendar remains in results footer slot, not in reminder block', () => {
    expect(RESULTS_CALENDAR_FOOTER_SLOT).toBe('vaccine-checker-results-footer');
    expect(REMINDER_BLOCK_SHELL_CLASS).not.toBe(RESULTS_CALENDAR_FOOTER_SLOT);
  });
});
