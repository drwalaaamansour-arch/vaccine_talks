import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import {
  getActiveVaccineIndexForState,
  isVaccineRecordCompleteForState,
  recordToHistory,
  wizardStateToCheckerInput,
} from '@/lib/vaccine-checker/input-adapter';
import {
  getNextStepAfterAdditionalVaccineHistory,
  getNextStepAfterDoseCount,
} from '@/lib/vaccine-checker/wizard-flow';
import {
  buildEmptyAdditionalVaccineRecord,
  buildAdditionalVaccinesAfterSelection,
  mergeSelectedAdditionalVaccineRecords,
  patchAdditionalVaccineAtIndex,
  UNSPECIFIED_DOSE_COUNT,
} from '@/lib/vaccine-checker/wizard-history';
import { buildDateParts, type WizardState } from '@/types/wizard-types';

const AS_OF = new Date(2026, 8, 13);

function teenDobParts() {
  return buildDateParts({ day: 2, month: 9, year: 2009 });
}

function baseTeenState(
  additionalVaccines: WizardState['additionalVaccines'],
  overrides: Partial<WizardState> = {}
): WizardState {
  return {
    language: 'en',
    dateOfBirth: teenDobParts(),
    calculatedAge: { years: 17, months: 0, days: 11 },
    medicalCondition: { hasCondition: false, showStopMessage: false },
    routineVaccinesStatus: 'complete',
    routineVisitHistory: {},
    completedRoutineVisits: [],
    mmrDate: null,
    mmrDose2Date: null,
    additionalVaccinesHistoryAnswer: 'yes',
    additionalVaccines,
    currentStep: 'review',
    showResults: false,
    showDisclaimer: false,
    ...overrides,
  };
}

function applyDoseCount(state: WizardState, index: number, count: number): WizardState {
  return {
    ...state,
    additionalVaccines: patchAdditionalVaccineAtIndex(state.additionalVaccines, index, {
      numberOfDoses: count,
    }),
  };
}

describe('wizard dose count persistence (teen PCV + Hep A)', () => {
  it('fresh merged records are incomplete until dose count is chosen', () => {
    const merged = mergeSelectedAdditionalVaccineRecords([], ['pneumococcal', 'hepatitisA']);
    expect(merged[0]?.numberOfDoses).toBe(UNSPECIFIED_DOSE_COUNT);
    expect(merged[1]?.numberOfDoses).toBe(UNSPECIFIED_DOSE_COUNT);

    const state = baseTeenState(merged);
    expect(isVaccineRecordCompleteForState(state, merged[0]!, AS_OF)).toBe(false);
    expect(isVaccineRecordCompleteForState(state, merged[1]!, AS_OF)).toBe(false);
    expect(getNextStepAfterAdditionalVaccineHistory(state, AS_OF)).toBe('doseCount');
  });

  it('PCV teen after selection defaults to 1 dose without dose-count step', () => {
    const vaccines = buildAdditionalVaccinesAfterSelection(
      [],
      ['pneumococcal', 'hepatitisA'],
      ['pneumococcal', 'hepatitisA', 'hpv'],
      new Date(2009, 8, 2),
      AS_OF
    );
    expect(vaccines.find((r) => r.category === 'pneumococcal')?.numberOfDoses).toBe(1);
    const state = baseTeenState(vaccines);
    expect(getNextStepAfterAdditionalVaccineHistory(state, AS_OF)).toBe('doseCount');
  });

  it('A: PCV previous doses = 1 — review/engine input = 1, PCV complete for healthy >5y', () => {
    let state = baseTeenState(
      mergeSelectedAdditionalVaccineRecords([], ['pneumococcal'])
    );
    state = applyDoseCount(state, 0, 1);
    expect(getNextStepAfterDoseCount(state, 0, AS_OF)).toBe('review');

    const history = recordToHistory(state.additionalVaccines[0]!);
    expect(history.numberOfDoses).toBe(1);

    const input = wizardStateToCheckerInput(state, AS_OF);
    const results = calculateVaccineRecommendations(input!);
    const pcv = [...results.completed, ...results.dueNow, ...results.upcoming].filter(
      (item) => item.vaccineCategory === 'pneumococcal'
    );
    expect(pcv.some((item) => item.status === 'completed')).toBe(true);
    expect(pcv.some((item) => item.status === 'due-now')).toBe(false);
  });

  it('B: PCV previous doses = 2 — review/engine input = 2', () => {
    const state = applyDoseCount(
      baseTeenState(mergeSelectedAdditionalVaccineRecords([], ['pneumococcal'])),
      0,
      2
    );
    expect(recordToHistory(state.additionalVaccines[0]!).numberOfDoses).toBe(2);
  });

  it('C: Hepatitis A previous doses = 2 — complete, no extra dose', () => {
    const state = applyDoseCount(
      baseTeenState(mergeSelectedAdditionalVaccineRecords([], ['hepatitisA'])),
      0,
      2
    );
    expect(recordToHistory(state.additionalVaccines[0]!).numberOfDoses).toBe(2);
    expect(getNextStepAfterDoseCount(state, 0, AS_OF)).toBe('review');

    const results = calculateVaccineRecommendations(wizardStateToCheckerInput(state, AS_OF)!);
    const hepA = [...results.completed, ...results.dueNow].filter(
      (item) => item.vaccineCategory === 'hepatitisA'
    );
    expect(hepA.some((item) => item.status === 'completed')).toBe(true);
  });

  it('D: Hepatitis A previous doses = 1 — retains count; dose 2 interval when date entered', () => {
    const dose1 = buildDateParts({ day: 1, month: 3, year: 2018 });
    const state = baseTeenState([
      {
        ...buildEmptyAdditionalVaccineRecord('hepatitisA'),
        numberOfDoses: 1,
        firstDoseDate: dose1,
        doseDates: [dose1],
      },
    ]);
    expect(recordToHistory(state.additionalVaccines[0]!).numberOfDoses).toBe(1);
    const results = calculateVaccineRecommendations(wizardStateToCheckerInput(state, AS_OF)!);
    const dose2 = results.dueNow
      .concat(results.upcoming)
      .find((item) => item.vaccineCategory === 'hepatitisA' && item.doseLabelKey === 'doseLabel_dose2');
    expect(dose2?.status).toBe('due-now');
    expect(dose2?.recommendedDate).toBeUndefined();
  });

  it('E–G: PCV=1 and Hep A=2 persist through multi-vaccine flow and merge', () => {
    let state = baseTeenState(
      mergeSelectedAdditionalVaccineRecords([], ['pneumococcal', 'hepatitisA', 'hpv'])
    );
    state = applyDoseCount(state, 0, 1);
    state = applyDoseCount(state, 1, 2);
    state = applyDoseCount(state, 2, 0);

    expect(getActiveVaccineIndexForState(state, AS_OF)).toBe(2);
    expect(state.additionalVaccines[0]?.numberOfDoses).toBe(1);
    expect(state.additionalVaccines[1]?.numberOfDoses).toBe(2);

    const remerged = mergeSelectedAdditionalVaccineRecords(state.additionalVaccines, [
      'pneumococcal',
      'hepatitisA',
      'meningococcalB',
      'hpv',
    ]);
    expect(remerged[0]?.numberOfDoses).toBe(1);
    expect(remerged[1]?.numberOfDoses).toBe(2);
    expect(remerged[2]?.numberOfDoses).toBe(UNSPECIFIED_DOSE_COUNT);
    expect(remerged[3]?.numberOfDoses).toBe(0);
  });
});
