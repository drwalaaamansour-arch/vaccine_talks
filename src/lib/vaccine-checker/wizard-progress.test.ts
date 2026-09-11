import { describe, expect, it } from 'vitest';
import {
  buildWizardProgressScreens,
  getWizardProgressPosition,
} from '@/lib/vaccine-checker/wizard-progress';
import { buildDateParts, type WizardState } from '@/types/wizard-types';

const today = new Date(2026, 7, 27);

function baseState(overrides: Partial<WizardState> = {}): WizardState {
  return {
    language: 'en',
    dateOfBirth: buildDateParts({ day: 27, month: 8, year: 2025 }),
    calculatedAge: null,
    medicalCondition: { hasCondition: false, showStopMessage: false },
    routineVaccinesStatus: 'complete',
    routineVisitHistory: {},
    completedRoutineVisits: [],
    mmrDate: buildDateParts({ day: 27, month: 8, year: 2026 }),
    mmrDose2Date: null,
    additionalVaccinesHistoryAnswer: 'yes',
    additionalVaccines: [
      { category: 'rotavirus', product: 'rotarix', numberOfDoses: 0, lastDoseDate: null, doseDates: [] },
      { category: 'pneumococcal', product: 'vaxneuvance', numberOfDoses: 0, lastDoseDate: null, doseDates: [] },
      { category: 'meningococcalB', product: 'bexsero', numberOfDoses: 0, lastDoseDate: null, doseDates: [] },
      { category: 'meningococcalACWY', product: 'nimenrix', numberOfDoses: 0, lastDoseDate: null, doseDates: [] },
    ],
    currentStep: 'productSelection',
    showResults: false,
    showDisclaimer: false,
    ...overrides,
  };
}

describe('wizard progress', () => {
  it('expands the total step count for multiple selected additional vaccines', () => {
    const screens = buildWizardProgressScreens(baseState(), today);

    expect(screens).toEqual([
      'dob',
      'medicalCondition',
      'routineVaccines',
      'additionalVaccinesYesNo',
      'additionalVaccinesSelect',
      { kind: 'product', category: 'rotavirus' },
      { kind: 'doseCount', category: 'rotavirus' },
      { kind: 'doseDates', category: 'rotavirus' },
      { kind: 'doseCount', category: 'pneumococcal' },
      { kind: 'product', category: 'pneumococcal' },
      { kind: 'doseDates', category: 'pneumococcal' },
      { kind: 'doseCount', category: 'meningococcalB' },
      { kind: 'doseDates', category: 'meningococcalB' },
      { kind: 'product', category: 'meningococcalACWY' },
      { kind: 'doseCount', category: 'meningococcalACWY' },
      { kind: 'doseDates', category: 'meningococcalACWY' },
      'mmrDate',
      'review',
    ]);
    expect(screens.length).toBe(18);
  });

  it('keeps progress position aligned with the active product step', () => {
    const state = baseState({ currentStep: 'productSelection' });
    expect(getWizardProgressPosition(state, today)).toEqual({ current: 6, total: 18 });
  });

  it('preserves entered dose dates when returning to a dose-date screen', () => {
    const dose1 = buildDateParts({ day: 27, month: 10, year: 2025 });
    const dose2 = buildDateParts({ day: 27, month: 12, year: 2025 });
    const state = baseState({
      currentStep: 'lastDoseDate',
      additionalVaccines: [
        {
          category: 'rotavirus',
          product: 'rotarix',
          numberOfDoses: 2,
          dose1Date: dose1,
          dose2Date: dose2,
          firstDoseDate: dose1,
          lastDoseDate: dose2,
          doseDates: [dose1, dose2],
        },
      ],
    });

    expect(getWizardProgressPosition(state, today)).toEqual({ current: 8, total: 10 });
    expect(state.additionalVaccines[0]?.dose1Date?.iso).toBe('2025-10-27');
    expect(state.additionalVaccines[0]?.dose2Date?.iso).toBe('2025-12-27');
  });
});
