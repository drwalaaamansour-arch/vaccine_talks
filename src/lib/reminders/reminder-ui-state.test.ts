import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { makeRecommendation, type CheckerInput } from '@/lib/vaccine-checker/types';
import { buildReminderGroupsForItems } from '@/lib/reminders/reminder-grouping';
import {
  getReminderCardUiPhase,
  getSupplementalCardScheduleDateIso,
  shouldShowReminderBlockOnCard,
} from '@/lib/reminders/reminder-ui-state';

function synflorixOverdueInput(): CheckerInput {
  const birth = new Date(2026, 0, 1);
  const referenceDate = new Date(2026, 9, 2);
  const dose1 = new Date(2026, 6, 30);
  return {
    dob: birth,
    referenceDate,
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

describe('reminder card UI state', () => {
  it('1. exact-date vaccine → set reminder phase on its own card', () => {
    const item = makeRecommendation({
      id: 'pcv-d2',
      vaccineCategory: 'pneumococcal',
      doseLabelKey: 'doseLabel_dose2',
      status: 'upcoming',
      recommendedDate: '2026-10-30',
      timingKind: 'FIXED_DATE',
      noteKeys: [],
    });
    expect(shouldShowReminderBlockOnCard(item, new Date(2026, 8, 1), 'upcoming')).toBe(true);
    expect(getReminderCardUiPhase(item, new Date(2026, 8, 1), { isScheduled: false, isChanging: false })).toBe(
      'set'
    );
  });

  it('2. conditional → message phase, no set button phase', () => {
    const item = makeRecommendation({
      id: 'cond',
      vaccineCategory: 'meningococcalB',
      doseLabelKey: 'doseLabel_booster',
      status: 'upcoming',
      conditionalNextDose: true,
      noteKeys: [],
    });
    expect(getReminderCardUiPhase(item, new Date(2026, 8, 1), { isScheduled: false, isChanging: false })).toBe(
      'conditional_message'
    );
  });

  it('3. overdue exact-date → set phase with supplemental card date', () => {
    const input = synflorixOverdueInput();
    const results = calculateVaccineRecommendations(input);
    const dose2 = results.dueNow.find((item) => item.doseLabelKey === 'doseLabel_dose2')!;
    expect(getSupplementalCardScheduleDateIso(dose2, input.referenceDate)).toBe('2026-09-30');
    expect(getReminderCardUiPhase(dose2, input.referenceDate, { isScheduled: false, isChanging: false })).toBe(
      'set'
    );
  });

  it('4. scheduled phase', () => {
    const item = makeRecommendation({
      id: 'pcv-d2',
      vaccineCategory: 'pneumococcal',
      doseLabelKey: 'doseLabel_dose2',
      status: 'upcoming',
      recommendedDate: '2026-10-30',
      timingKind: 'FIXED_DATE',
      noteKeys: [],
    });
    expect(getReminderCardUiPhase(item, new Date(2026, 8, 1), { isScheduled: true, isChanging: false })).toBe(
      'scheduled'
    );
  });

  it('5. cancel returns to set phase', () => {
    const item = makeRecommendation({
      id: 'pcv-d2',
      vaccineCategory: 'pneumococcal',
      doseLabelKey: 'doseLabel_dose2',
      status: 'upcoming',
      recommendedDate: '2026-10-30',
      timingKind: 'FIXED_DATE',
      noteKeys: [],
    });
    expect(getReminderCardUiPhase(item, new Date(2026, 8, 1), { isScheduled: false, isChanging: false })).toBe(
      'set'
    );
  });

  it('6. change phase', () => {
    const item = makeRecommendation({
      id: 'pcv-d2',
      vaccineCategory: 'pneumococcal',
      doseLabelKey: 'doseLabel_dose2',
      status: 'upcoming',
      recommendedDate: '2026-10-30',
      timingKind: 'FIXED_DATE',
      noteKeys: [],
    });
    expect(getReminderCardUiPhase(item, new Date(2026, 8, 1), { isScheduled: true, isChanging: true })).toBe(
      'changing'
    );
  });

  it('9. multiple cards stay independently actionable; grouping unchanged for same date', () => {
    const ref = new Date(2026, 8, 1);
    const childScope = '2024-01-01';
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
      makeRecommendation({
        id: 'mmr-d1',
        vaccineCategory: 'routine',
        routineVaccineKey: 'mmrDose1',
        doseLabelKey: 'doseLabel_dose1',
        status: 'upcoming',
        recommendedDate: sharedDate,
        timingKind: 'FIXED_DATE',
        noteKeys: [],
      }),
    ];

    for (const item of items) {
      expect(getReminderCardUiPhase(item, ref, { isScheduled: false, isChanging: false })).toBe('set');
    }

    const groups = buildReminderGroupsForItems(items, childScope, ref);
    expect(groups).toHaveLength(1);
    expect(groups[0]!.items).toHaveLength(3);
    expect(groups[0]!.displayDate).toBe(sharedDate);
  });

  it('10. completed section hides reminder block', () => {
    const item = makeRecommendation({
      id: 'pcv-d2',
      vaccineCategory: 'pneumococcal',
      doseLabelKey: 'doseLabel_dose2',
      status: 'completed',
      recommendedDate: '2026-10-30',
      timingKind: 'FIXED_DATE',
      noteKeys: [],
    });
    expect(shouldShowReminderBlockOnCard(item, new Date(2026, 8, 1), 'completed')).toBe(false);
  });
});
