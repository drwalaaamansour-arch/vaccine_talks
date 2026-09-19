import { describe, expect, it } from 'vitest';
import {
  isVaccineRecordCompleteForState,
  recordToHistory,
  wizardStateToCheckerInput,
} from '@/lib/vaccine-checker/input-adapter';
import { applyDoseDatesToRecord } from '@/lib/vaccine-checker/dose-date-storage';
import {
  getNextStepAfterAdditionalVaccineHistory,
  getNextStepAfterDoseCount,
} from '@/lib/vaccine-checker/wizard-flow';
import { applyDobStepSubmission } from '@/lib/vaccine-checker/wizard-dob-update';
import {
  buildAdditionalVaccinesAfterSelection,
  buildDate,
  patchAdditionalVaccineAtIndex,
} from '@/lib/vaccine-checker/wizard-history';
import { buildDateParts, type WizardState } from '@/types/wizard-types';

const AS_OF = new Date(2026, 8, 19);

function infantDob() {
  return buildDateParts({ day: 19, month: 1, year: 2026 });
}

function teenDob() {
  return buildDateParts({ day: 2, month: 9, year: 2009 });
}

function baseState(
  additionalVaccines: WizardState['additionalVaccines'],
  overrides: Partial<WizardState> = {}
): WizardState {
  return {
    language: 'en',
    dateOfBirth: infantDob(),
    calculatedAge: { years: 0, months: 8, days: 0 },
    medicalCondition: { hasCondition: false, showStopMessage: false },
    routineVaccinesStatus: 'complete',
    routineVisitHistory: {},
    completedRoutineVisits: [],
    mmrDate: null,
    mmrDose2Date: null,
    additionalVaccinesHistoryAnswer: 'yes',
    additionalVaccines,
    currentStep: 'lastDoseDate',
    showResults: false,
    showDisclaimer: false,
    ...overrides,
  };
}

function synflorixRecord(
  numberOfDoses: number,
  withDates: boolean
): WizardState['additionalVaccines'][number] {
  const dose1 = buildDate(19, 3, 2026);
  const base = {
    category: 'pneumococcal' as const,
    product: 'synflorix',
    numberOfDoses,
    lastDoseDate: withDates ? dose1 : null,
    firstDoseDate: withDates ? dose1 : null,
    doseDates: withDates ? [dose1] : [],
    dose1Date: withDates ? dose1 : null,
    dose2Date: null,
    dose3Date: null,
    dose4Date: null,
  };
  return withDates ? applyDoseDatesToRecord(base, [dose1]) : base;
}

describe('PCV dose count vs doseDates — wizard flow guards', () => {
  it('forward flow: infant Synflorix dose count 1 without dates is incomplete and cannot reach review', () => {
    let state = baseState([synflorixRecord(1, false)]);
    expect(isVaccineRecordCompleteForState(state, state.additionalVaccines[0]!, AS_OF)).toBe(false);
    expect(getNextStepAfterDoseCount(state, 0, AS_OF)).toBe('lastDoseDate');
    expect(getNextStepAfterAdditionalVaccineHistory(state, AS_OF)).not.toBe('review');
  });

  it('forward flow: infant Synflorix with dose count 1 and date reaches review', () => {
    const state = baseState([synflorixRecord(1, true)]);
    expect(isVaccineRecordCompleteForState(state, state.additionalVaccines[0]!, AS_OF)).toBe(true);
    expect(getNextStepAfterAdditionalVaccineHistory(state, AS_OF)).toBe('review');
    const history = recordToHistory(state.additionalVaccines[0]!);
    expect(history.numberOfDoses).toBe(1);
    expect(history.doseDates).toHaveLength(1);
  });

  it('valid intentional state B: healthy >5y PCV count 1 without dates completes and maps to engine', () => {
    const vaccines = buildAdditionalVaccinesAfterSelection(
      [],
      ['pneumococcal'],
      ['pneumococcal'],
      new Date(2009, 8, 2),
      AS_OF
    );
    expect(vaccines[0]?.numberOfDoses).toBe(1);
    expect(vaccines[0]?.doseDates).toHaveLength(0);

    const state = baseState(vaccines, {
      dateOfBirth: teenDob(),
      calculatedAge: { years: 17, months: 0, days: 11 },
    });
    expect(isVaccineRecordCompleteForState(state, state.additionalVaccines[0]!, AS_OF)).toBe(true);
    expect(getNextStepAfterDoseCount(state, 0, AS_OF)).toBe('review');

    const history = recordToHistory(state.additionalVaccines[0]!);
    expect(history.numberOfDoses).toBe(1);
    expect(history.doseDates).toHaveLength(0);
  });

  it('classification E: review/results can run engine on incomplete infant PCV if state is injected (not forward flow)', () => {
    const state = baseState([synflorixRecord(1, false)], { currentStep: 'review' });
    expect(isVaccineRecordCompleteForState(state, state.additionalVaccines[0]!, AS_OF)).toBe(false);
    const input = wizardStateToCheckerInput(state, AS_OF);
    const pcv = input!.vaccineHistory.find((h) => h.category === 'pneumococcal');
    expect(pcv?.numberOfDoses).toBe(1);
    expect(pcv?.doseDates).toHaveLength(0);
  });

  it('classification D: same-DOB edit shortcut can land on review while infant PCV still incomplete', () => {
    const incomplete = baseState([synflorixRecord(1, false)], { currentStep: 'lastDoseDate' });
    const jumped = applyDobStepSubmission(incomplete, infantDob(), incomplete.calculatedAge!);
    expect(jumped.currentStep).toBe('review');
    expect(isVaccineRecordCompleteForState(jumped, jumped.additionalVaccines[0]!, AS_OF)).toBe(false);
  });

  it('changing dose count does not clear dates; lowering count still maps one date to engine', () => {
    const twoDates = applyDoseDatesToRecord(
      {
        category: 'pneumococcal',
        product: 'synflorix',
        numberOfDoses: 2,
        lastDoseDate: null,
        doseDates: [],
      },
      [buildDate(19, 3, 2026), buildDate(19, 5, 2026)]
    );
    const lowered = patchAdditionalVaccineAtIndex([twoDates], 0, { numberOfDoses: 1 })[0]!;
    const history = recordToHistory(lowered);
    expect(history.numberOfDoses).toBe(1);
    expect(history.doseDates).toHaveLength(1);
  });

  it('UI-flow bug C: raising dose count reuses lastDoseDate as final dose date (2 doses, same date twice)', () => {
    const oneDate = synflorixRecord(1, true);
    const raised = patchAdditionalVaccineAtIndex([oneDate], 0, { numberOfDoses: 2 })[0]!;
    const state = baseState([raised]);
    expect(isVaccineRecordCompleteForState(state, state.additionalVaccines[0]!, AS_OF)).toBe(true);
    const history = recordToHistory(raised);
    expect(history.numberOfDoses).toBe(2);
    expect(history.doseDates).toHaveLength(2);
    expect(history.doseDates[0]?.getTime()).toBe(history.doseDates[1]?.getTime());
  });
});
