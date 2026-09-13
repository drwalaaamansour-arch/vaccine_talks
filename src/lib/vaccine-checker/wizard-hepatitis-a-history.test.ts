import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import {
  getActiveVaccineIndexForState,
  isVaccineRecordComplete,
  wizardStateToCheckerInput,
} from '@/lib/vaccine-checker/input-adapter';
import {
  getNextStepAfterAdditionalVaccineHistory,
  getNextStepAfterDoseCount,
} from '@/lib/vaccine-checker/wizard-flow';
import { getWizardRequiredDoseDateCount } from '@/lib/vaccine-checker/teen-history-simplification';
import { buildDateParts, type AdditionalVaccineRecord, type WizardState } from '@/types/wizard-types';

const AS_OF = new Date(2026, 8, 13);

function teenDobParts() {
  return buildDateParts({ day: 2, month: 9, year: 2009 });
}

function baseTeenState(additionalVaccines: AdditionalVaccineRecord[]): WizardState {
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
    currentStep: 'doseCount',
    showResults: false,
    showDisclaimer: false,
  };
}

function hepARecord(overrides: Partial<AdditionalVaccineRecord> = {}): AdditionalVaccineRecord {
  return {
    category: 'hepatitisA',
    numberOfDoses: 0,
    lastDoseDate: null,
    doseDates: [],
    ...overrides,
  };
}

describe('Hepatitis A wizard history (17y11d, as-of 13/09/2026)', () => {
  const dob = new Date(2009, 8, 2);

  it('A: 0 previous doses — no date screen, dose 1 due, dose 2 projected at +6 months from dose 1', () => {
    const record = hepARecord({ numberOfDoses: 0 });
    const state = baseTeenState([record]);

    expect(getWizardRequiredDoseDateCount(record, dob, AS_OF)).toBe(0);
    expect(getNextStepAfterDoseCount(state, 0, AS_OF)).toBe('review');
    expect(isVaccineRecordComplete(record, AS_OF, teenDobParts())).toBe(true);

    const input = wizardStateToCheckerInput(state, AS_OF);
    expect(input).not.toBeNull();
    const results = calculateVaccineRecommendations(input!);
    const hepA = [...results.dueNow, ...results.upcoming, ...results.completed].filter(
      (item) => item.vaccineCategory === 'hepatitisA'
    );
    const dose1 = hepA.find((item) => item.doseLabelKey === 'doseLabel_dose1');
    expect(dose1?.status).toBe('due-now');

    const afterFirstDose = hepARecord({
      numberOfDoses: 1,
      firstDoseDate: buildDateParts({ day: 13, month: 9, year: 2026 }),
      doseDates: [buildDateParts({ day: 13, month: 9, year: 2026 })],
    });
    const afterInput = wizardStateToCheckerInput(baseTeenState([afterFirstDose]), AS_OF);
    const afterResults = calculateVaccineRecommendations(afterInput!);
    const dose2 = afterResults.upcoming
      .concat(afterResults.dueNow)
      .find(
        (item) =>
          item.vaccineCategory === 'hepatitisA' && item.doseLabelKey === 'doseLabel_dose2'
      );
    expect(dose2?.recommendedDate).toBe('2027-03-13');
  });

  it('B: 1 previous dose — one date field, dose 2 from interval, no dose 2 history field', () => {
    const record = hepARecord({ numberOfDoses: 1 });
    const state = baseTeenState([record]);

    expect(getWizardRequiredDoseDateCount(record, dob, AS_OF)).toBe(1);
    expect(getNextStepAfterDoseCount(state, 0, AS_OF)).toBe('lastDoseDate');
    expect(isVaccineRecordComplete(record, AS_OF, teenDobParts())).toBe(false);

    const dose1Date = buildDateParts({ day: 10, month: 1, year: 2020 });
    const withDate = hepARecord({
      numberOfDoses: 1,
      firstDoseDate: dose1Date,
      doseDates: [dose1Date],
    });
    expect(isVaccineRecordComplete(withDate, AS_OF, teenDobParts())).toBe(true);

    const input = wizardStateToCheckerInput(baseTeenState([withDate]), AS_OF);
    const results = calculateVaccineRecommendations(input!);
    const dose2 = results.dueNow
      .concat(results.upcoming)
      .find((item) => item.vaccineCategory === 'hepatitisA' && item.doseLabelKey === 'doseLabel_dose2');
    expect(dose2).toBeDefined();
    expect(dose2?.status).toBe('due-now');
    expect(dose2?.recommendedDate).toBeUndefined();
  });

  it('C: 2 previous doses — complete, no date screen, no extra recommendation', () => {
    const record = hepARecord({ numberOfDoses: 2 });
    const state = baseTeenState([record]);

    expect(getWizardRequiredDoseDateCount(record, dob, AS_OF)).toBe(0);
    expect(getNextStepAfterDoseCount(state, 0, AS_OF)).toBe('review');
    expect(isVaccineRecordComplete(record, AS_OF, teenDobParts())).toBe(true);

    const input = wizardStateToCheckerInput(state, AS_OF);
    const results = calculateVaccineRecommendations(input!);
    const hepA = [...results.completed, ...results.dueNow, ...results.upcoming].filter(
      (item) => item.vaccineCategory === 'hepatitisA'
    );
    expect(hepA.some((item) => item.status === 'completed')).toBe(true);
    expect(hepA.some((item) => item.status === 'due-now')).toBe(false);
  });

  it('D: after 2 doses, unrelated vaccines do not reopen Hep A date step', () => {
    const hepComplete = hepARecord({ numberOfDoses: 2 });
    const hpvPending: AdditionalVaccineRecord = {
      category: 'hpv',
      numberOfDoses: 0,
      lastDoseDate: null,
      doseDates: [],
    };

    let state = baseTeenState([hepComplete, hpvPending]);
    expect(getNextStepAfterAdditionalVaccineHistory(state, AS_OF)).toBe('productSelection');
    expect(getActiveVaccineIndexForState(state, AS_OF)).toBe(1);

    state = baseTeenState([
      hepComplete,
      {
        category: 'hpv',
        product: 'gardasil9',
        numberOfDoses: 2,
        lastDoseDate: buildDateParts({ day: 1, month: 6, year: 2024 }),
        dose1Date: buildDateParts({ day: 1, month: 6, year: 2024 }),
        dose2Date: buildDateParts({ day: 1, month: 12, year: 2024 }),
        firstDoseDate: buildDateParts({ day: 1, month: 6, year: 2024 }),
        doseDates: [
          buildDateParts({ day: 1, month: 6, year: 2024 }),
          buildDateParts({ day: 1, month: 12, year: 2024 }),
        ],
      },
      {
        category: 'influenza',
        numberOfDoses: 0,
        lastDoseDate: null,
        doseDates: [],
        influenzaCurrentSeasonReceived: true,
      },
    ]);

    expect(getNextStepAfterAdditionalVaccineHistory(state, AS_OF)).toBe('review');
    expect(getNextStepAfterAdditionalVaccineHistory(state, AS_OF)).not.toBe('lastDoseDate');
    expect(getActiveVaccineIndexForState(state, AS_OF)).toBe(2);
  });
});
