import { describe, expect, it } from 'vitest';
import { addMonths } from '@/lib/vaccine-checker/date-utils';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { attachRoutineVaccineLedger } from '@/lib/vaccine-checker/input-adapter';
import {
  buildRoutineVisitHistory,
  getReceivedRoutineVisits,
} from '@/lib/vaccine-checker/routine-history';
import { getDueRoutineVisits } from '@/lib/vaccine-checker/routine';
import { filterRecommendationsForResultsDisplay } from '@/lib/vaccine-checker/result-presentation';
import { type CheckerInput } from '@/lib/vaccine-checker/types';

function buildInput(
  dob: Date,
  today: Date,
  status: 'complete' | 'some' | 'none',
  selectedVisits: string[] = [],
  overrides: Partial<CheckerInput> = {}
): CheckerInput {
  const reached = getDueRoutineVisits(dob, today);
  const history = buildRoutineVisitHistory(
    status,
    reached,
    status === 'some' ? (selectedVisits as typeof reached) : []
  );

  return attachRoutineVaccineLedger({
    dob,
    referenceDate: today,
    mmrDate: null,
    mmrDates: [],
    routineVaccinesStatus: status,
    completedRoutineVisits: getReceivedRoutineVisits(history, reached),
    routineVisitHistory: history,
    vaccineHistory: [],
    ...overrides,
  });
}

function displayedCompleted(results: ReturnType<typeof calculateVaccineRecommendations>) {
  return filterRecommendationsForResultsDisplay(results.completed);
}

function displayedActionableRoutine(results: ReturnType<typeof calculateVaccineRecommendations>) {
  return filterRecommendationsForResultsDisplay([
    ...results.dueNow,
    ...results.upcoming,
    ...results.eligibleNow,
  ]).filter((item) => item.vaccineCategory === 'routine');
}

describe('routine results display', () => {
  const dob = new Date(2025, 7, 30);

  it('1. hides completed MMR cards when routine vaccines and MMR are complete', () => {
    const today = addMonths(dob, 24);
    const input = buildInput(dob, today, 'some', ['12months', '18months']);
    const results = calculateVaccineRecommendations(input);

    expect(results.completed.some((item) => item.id === 'routine-mmr-series-complete')).toBe(true);
    expect(
      displayedCompleted(results).some((item) => item.id === 'routine-mmr-series-complete')
    ).toBe(false);
    expect(
      displayedCompleted(results).some((item) => item.vaccineCategory === 'routine')
    ).toBe(false);
  });

  it('2. does not show a completed Hexavalent card when the series is complete', () => {
    const today = addMonths(dob, 24);
    const input = buildInput(dob, today, 'complete');
    const results = calculateVaccineRecommendations(input);

    expect(
      displayedCompleted(results).some(
        (item) =>
          item.vaccineCategory === 'routine' &&
          (item.routineVaccineKey?.startsWith('hexavalent') || item.routineVaccineKey === 'dtpBooster')
      )
    ).toBe(false);
    expect(
      [...results.dueNow, ...results.upcoming].some(
        (item) => item.routineVaccineKey?.startsWith('hexavalent') || item.routineVaccineKey === 'dtpBooster'
      )
    ).toBe(false);
  });

  it('3. still shows missing MMR doses as due or upcoming', () => {
    const today = addMonths(dob, 15);
    const input = buildInput(dob, today, 'none');
    const results = calculateVaccineRecommendations(input);

    expect(
      displayedActionableRoutine(results).some((item) => item.routineVaccineKey === 'mmrDose1')
    ).toBe(true);
    expect(
      displayedActionableRoutine(results).some((item) => item.routineVaccineKey === 'mmrDose2')
    ).toBe(true);
  });

  it('4. still shows Hexavalent catch-up doses when catch-up is needed', () => {
    const today = addMonths(dob, 12);
    const input = buildInput(dob, today, 'none');
    const results = calculateVaccineRecommendations(input);

    expect(
      displayedActionableRoutine(results).some((item) =>
        item.routineVaccineKey?.startsWith('hexavalent')
      )
    ).toBe(true);
  });
});
