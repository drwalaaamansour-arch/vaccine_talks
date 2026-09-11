import { describe, expect, it } from 'vitest';
import { addMonths } from '@/lib/vaccine-checker/date-utils';
import { getDueRoutineVisits } from '@/lib/vaccine-checker/routine';
import {
  buildRoutineVisitHistory,
  getFutureRoutineVisits,
  getNotReceivedRoutineVisits,
  getReceivedRoutineVisits,
} from '@/lib/vaccine-checker/routine-history';
import {
  getDueRoutineVisitsForState,
  getEffectiveCompletedRoutineVisits,
  getRoutineHistorySummary,
} from '@/lib/vaccine-checker/wizard-flow';
import { wizardStateToCheckerInput } from '@/lib/vaccine-checker/input-adapter';
import { buildDateParts, type WizardState } from '@/types/wizard-types';

function dobFromDate(date: Date) {
  return buildDateParts({
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  });
}

function baseState(overrides: Partial<WizardState> = {}): WizardState {
  const birth = new Date(2024, 5, 22);

  return {
    language: 'en',
    dateOfBirth: dobFromDate(birth),
    calculatedAge: null,
    medicalCondition: { hasCondition: false, showStopMessage: false },
    routineVaccinesStatus: 'none',
    routineVisitHistory: {},
    completedRoutineVisits: [],
    mmrDate: null,
    mmrDose2Date: null,
    additionalVaccinesHistoryAnswer: null,
    additionalVaccines: [],
    currentStep: 'routineVaccines',
    showResults: false,
    showDisclaimer: false,
    ...overrides,
  };
}

function reachedVisitsAtAgeMonths(birth: Date, ageMonths: number) {
  const today = addMonths(birth, ageMonths);
  return getDueRoutineVisits(birth, today);
}

describe('routine history phase 1', () => {
  const birth = new Date(2024, 5, 22);

  it('A. 12-month-old + ALL stores reached visits through 12 months and keeps 18 months future', () => {
    const today = addMonths(birth, 12);
    const reached = reachedVisitsAtAgeMonths(birth, 12);
    const history = buildRoutineVisitHistory('complete', reached);

    expect(reached).toEqual([
      'birth',
      '1month',
      '2months',
      '4months',
      '6months',
      '9months',
      '12months',
    ]);
    expect(history['18months']).toBeUndefined();
    expect(getReceivedRoutineVisits(history, reached)).toEqual(reached);
    expect(getFutureRoutineVisits(reached)).toEqual(['18months']);

    const state = baseState({
      dateOfBirth: dobFromDate(birth),
      routineVaccinesStatus: 'complete',
      routineVisitHistory: history,
      completedRoutineVisits: getReceivedRoutineVisits(history, reached),
    });

    expect(getEffectiveCompletedRoutineVisits(state, today)).toEqual(reached);
    expect(getRoutineHistorySummary(state, today).allReachedReceived).toBe(true);
    expect(getRoutineHistorySummary(state, today).notReceivedVisits).toEqual([]);
  });

  it('B. 12-month-old + SOME stores selected visits and marks unselected reached visits separately', () => {
    const today = addMonths(birth, 12);
    const reached = reachedVisitsAtAgeMonths(birth, 12);
    const selected = ['birth', '2months', '4months'] as const;
    const history = buildRoutineVisitHistory('some', reached, [...selected]);

    expect(getReceivedRoutineVisits(history, reached)).toEqual(['birth', '2months', '4months']);
    expect(getNotReceivedRoutineVisits(history, reached)).toEqual([
      '1month',
      '6months',
      '9months',
      '12months',
    ]);
    expect(history['18months']).toBeUndefined();

    const state = baseState({
      dateOfBirth: dobFromDate(birth),
      routineVaccinesStatus: 'some',
      routineVisitHistory: history,
      completedRoutineVisits: getReceivedRoutineVisits(history, reached),
    });

    const summary = getRoutineHistorySummary(state, today);
    expect(summary.allReachedReceived).toBe(false);
    expect(summary.receivedVisits).toEqual(['birth', '2months', '4months']);
    expect(summary.notReceivedVisits).toEqual(['1month', '6months', '9months', '12months']);
  });

  it('C. 12-month-old + NONE stores all reached visits as not received and keeps 18 months future', () => {
    const today = addMonths(birth, 12);
    const reached = reachedVisitsAtAgeMonths(birth, 12);
    const history = buildRoutineVisitHistory('none', reached);

    expect(getReceivedRoutineVisits(history, reached)).toEqual([]);
    expect(getNotReceivedRoutineVisits(history, reached)).toEqual(reached);
    expect(history['18months']).toBeUndefined();

    const state = baseState({
      dateOfBirth: dobFromDate(birth),
      routineVaccinesStatus: 'none',
      routineVisitHistory: history,
      completedRoutineVisits: [],
    });

    expect(getEffectiveCompletedRoutineVisits(state, today)).toEqual([]);
    expect(getRoutineHistorySummary(state, today).notReceivedVisits).toEqual(reached);
    expect(getRoutineHistorySummary(state, today).allReachedReceived).toBe(false);
  });

  it('D. 6-month-old history selection excludes 9-, 12-, and 18-month visits', () => {
    const today = addMonths(birth, 6);
    const reached = reachedVisitsAtAgeMonths(birth, 6);

    expect(reached).toEqual(['birth', '1month', '2months', '4months', '6months']);
    expect(reached).not.toContain('9months');
    expect(reached).not.toContain('12months');
    expect(reached).not.toContain('18months');

    const state = baseState({ dateOfBirth: dobFromDate(birth) });
    expect(getDueRoutineVisitsForState(state, today)).toEqual(reached);
  });

  it('E. back/edit preserves routine selections, MMR dates, and additional vaccine history', () => {
    const today = addMonths(birth, 12);
    const reached = reachedVisitsAtAgeMonths(birth, 12);
    const history = buildRoutineVisitHistory('some', reached, ['birth', '2months']);
    const mmrDate = dobFromDate(addMonths(birth, 12));
    const additionalVaccines = [
      {
        category: 'rotavirus' as const,
        product: 'Rotarix',
        numberOfDoses: 2,
        lastDoseDate: dobFromDate(addMonths(birth, 3)),
        doseDates: [dobFromDate(addMonths(birth, 2)), dobFromDate(addMonths(birth, 3))],
        dose1Date: dobFromDate(addMonths(birth, 2)),
        dose2Date: dobFromDate(addMonths(birth, 3)),
      },
    ];

    const editedState = baseState({
      dateOfBirth: dobFromDate(birth),
      routineVaccinesStatus: 'some',
      routineVisitHistory: history,
      completedRoutineVisits: ['birth', '2months'],
      mmrDate,
      additionalVaccinesHistoryAnswer: 'yes',
      additionalVaccines,
      currentStep: 'routineVaccines',
    });

    expect(getReceivedRoutineVisits(editedState.routineVisitHistory, reached)).toEqual([
      'birth',
      '2months',
    ]);
    expect(editedState.mmrDate).toEqual(mmrDate);
    expect(editedState.additionalVaccines).toEqual(additionalVaccines);

    const nextHistory = buildRoutineVisitHistory('complete', reached);
    const continuedState = {
      ...editedState,
      routineVaccinesStatus: 'complete' as const,
      routineVisitHistory: nextHistory,
      completedRoutineVisits: getReceivedRoutineVisits(nextHistory, reached),
      additionalVaccines,
      additionalVaccinesHistoryAnswer: 'yes' as const,
      mmrDate,
    };

    expect(continuedState.additionalVaccines).toEqual(additionalVaccines);
    expect(continuedState.mmrDate).toEqual(mmrDate);
    expect(getEffectiveCompletedRoutineVisits(continuedState, today)).toEqual(reached);
  });

  it('F. Arabic and English flows produce identical stored history and checker input', () => {
    const today = addMonths(birth, 12);
    const reached = reachedVisitsAtAgeMonths(birth, 12);
    const history = buildRoutineVisitHistory('some', reached, ['birth', '12months']);

    const englishState = baseState({
      language: 'en',
      dateOfBirth: dobFromDate(birth),
      routineVaccinesStatus: 'some',
      routineVisitHistory: history,
      completedRoutineVisits: ['birth', '12months'],
    });
    const arabicState = {
      ...englishState,
      language: 'ar' as const,
    };

    expect(getRoutineHistorySummary(englishState, today)).toEqual(
      getRoutineHistorySummary(arabicState, today)
    );

    const englishInput = wizardStateToCheckerInput(englishState, today);
    const arabicInput = wizardStateToCheckerInput(arabicState, today);

    expect(englishInput?.routineVisitHistory).toEqual(arabicInput?.routineVisitHistory);
    expect(englishInput?.completedRoutineVisits).toEqual(arabicInput?.completedRoutineVisits);
    expect(englishInput?.routineVaccinesStatus).toBe('some');
  });
});
