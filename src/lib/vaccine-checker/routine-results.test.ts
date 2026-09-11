import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import {
  buildRoutineVisitHistory,
  getReceivedRoutineVisits,
} from '@/lib/vaccine-checker/routine-history';
import {
  calculateRoutineMissing,
  calculateRoutineMissingWithVaccines,
  getDueRoutineVisits,
  getMissedRoutineVisits,
} from '@/lib/vaccine-checker/routine';
import { wizardStateToCheckerInput } from '@/lib/vaccine-checker/input-adapter';
import { buildDateParts, type WizardState } from '@/types/wizard-types';
import { translateKey } from '@/translations/translate';

function baseState(overrides: Partial<WizardState> = {}): WizardState {
  return {
    language: 'en',
    dateOfBirth: buildDateParts({ day: 30, month: 8, year: 2025 }),
    calculatedAge: { years: 1, months: 0, days: 0 },
    medicalCondition: { hasCondition: false, showStopMessage: false },
    routineVaccinesStatus: 'some',
    routineVisitHistory: {},
    completedRoutineVisits: [],
    mmrDate: null,
    mmrDose2Date: null,
    additionalVaccinesHistoryAnswer: null,
    additionalVaccines: [],
    currentStep: 'results',
    showResults: true,
    showDisclaimer: false,
    ...overrides,
  };
}

describe('routine results phase 1', () => {
  const dob = new Date(2025, 7, 30);
  const today = new Date(2026, 7, 30);
  const reached = getDueRoutineVisits(dob, today);

  it('1. 12-month SOME with birth, 2m, 4m, 12m received lists only 1m, 6m, 9m as missed', () => {
    const history = buildRoutineVisitHistory('some', reached, [
      'birth',
      '2months',
      '4months',
      '12months',
    ]);
    const state = baseState({
      routineVaccinesStatus: 'some',
      routineVisitHistory: history,
      completedRoutineVisits: getReceivedRoutineVisits(history, reached),
    });
    const input = wizardStateToCheckerInput(state, today);

    expect(input?.routineVisitHistory).toEqual(history);
    expect(getMissedRoutineVisits(input!)).toEqual(['1month', '6months', '9months']);
    expect(calculateRoutineMissing(input!).map((item) => item.visitKey)).toEqual([
      '1month',
      '6months',
      '9months',
    ]);
  });

  it('2. 12-month visit is not listed as missed when marked received', () => {
    const history = buildRoutineVisitHistory('some', reached, [
      'birth',
      '2months',
      '4months',
      '12months',
    ]);
    const input = wizardStateToCheckerInput(
      baseState({
        routineVisitHistory: history,
        completedRoutineVisits: getReceivedRoutineVisits(history, reached),
      }),
      today
    );

    expect(
      calculateRoutineMissing(input!).some((item) => item.visitKey === '12months')
    ).toBe(false);
  });

  it('3. future 18-month visit is not listed as missed at 12 months', () => {
    const history = buildRoutineVisitHistory('none', reached);
    const input = wizardStateToCheckerInput(
      baseState({
        routineVaccinesStatus: 'none',
        routineVisitHistory: history,
      }),
      today
    );

    expect(getMissedRoutineVisits(input!)).not.toContain('18months');
    expect(calculateRoutineMissing(input!).map((item) => item.visitKey)).not.toContain('18months');
  });

  it('4. parent-facing routine missing omits individual vaccine catch-up entries', () => {
    const history = buildRoutineVisitHistory('some', reached, ['birth']);
    const input = wizardStateToCheckerInput(
      baseState({
        routineVisitHistory: history,
        completedRoutineVisits: ['birth'],
      }),
      today
    );

    const missing = calculateRoutineMissing(input!);
    expect(missing.every((item) => item.vaccineKeys.length === 0)).toBe(true);

    const withVaccines = calculateRoutineMissingWithVaccines(input!);
    expect(withVaccines.some((item) => item.vaccineKeys.length > 0)).toBe(true);
  });

  it('5. ALL reached visits received produces no routine missing section data', () => {
    const history = buildRoutineVisitHistory('complete', reached);
    const results = calculateVaccineRecommendations({
      dob,
      referenceDate: today,
      mmrDate: null,
      mmrDates: [],
      routineVaccinesStatus: 'complete',
      completedRoutineVisits: reached,
      routineVisitHistory: history,
      vaccineHistory: [],
    });

    expect(results.routineMissing).toHaveLength(0);
  });

  it('6. NONE marks all reached visits missed while 18 months stays future', () => {
    const history = buildRoutineVisitHistory('none', reached);
    const results = calculateVaccineRecommendations({
      dob,
      referenceDate: today,
      mmrDate: null,
      mmrDates: [],
      routineVaccinesStatus: 'none',
      completedRoutineVisits: [],
      routineVisitHistory: history,
      vaccineHistory: [],
    });

    expect(results.routineMissing.map((item) => item.visitKey)).toEqual([
      'birth',
      '1month',
      '2months',
      '4months',
      '6months',
      '9months',
      '12months',
    ]);
    expect(results.routineMissing.some((item) => item.visitKey === '18months')).toBe(false);
  });

  it('uses routineVisitHistory as the source of truth when status is SOME', () => {
    const history = buildRoutineVisitHistory('some', reached, [
      'birth',
      '2months',
      '4months',
      '12months',
    ]);
    const input = {
      dob,
      referenceDate: today,
      mmrDate: null,
      mmrDates: [],
      routineVaccinesStatus: 'complete' as const,
      completedRoutineVisits: [],
      routineVisitHistory: history,
      vaccineHistory: [],
    };

    expect(getMissedRoutineVisits(input)).toEqual(['1month', '6months', '9months']);
  });
});

describe('Arabic polio labels', () => {
  it('uses شلل الأطفال and bidi-safe OPV booster wording', () => {
    expect(translateKey('ar', 'routineVaccine_opvBooster1')).toBe('جرعة \u2066OPV\u2069 داعمة');
    expect(translateKey('ar', 'routineVaccine_opvDose1')).toContain('شلل الأطفال');
    expect(translateKey('ar', 'routineVaccine_opvDose1')).toContain('\u2066OPV\u2069');
    expect(translateKey('ar', 'routineVaccine_opvBooster1')).not.toContain('dاعمة');
  });
});
