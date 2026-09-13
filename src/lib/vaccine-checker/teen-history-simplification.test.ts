import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import {
  getNextStepAfterDoseCount,
  getNextStepAfterAdditionalVaccineHistory,
} from '@/lib/vaccine-checker/wizard-flow';
import {
  isVaccineRecordComplete,
  recordToHistory,
  wizardStateToCheckerInput,
} from '@/lib/vaccine-checker/input-adapter';
import type { AdditionalVaccineRecord, WizardState } from '@/types/wizard-types';
import { buildDateParts } from '@/types/wizard-types';

const AS_OF = new Date(2026, 8, 13);
const DOB = new Date(2009, 8, 2);

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

function recommendationsFor(records: AdditionalVaccineRecord[]) {
  const state = baseTeenState(records);
  const input = wizardStateToCheckerInput(state, AS_OF);
  expect(input).not.toBeNull();
  return calculateVaccineRecommendations(input!);
}

describe('Teen checker simplification (17y11d, as-of 13/09/2026)', () => {
  it('Scenario A: PCV 1 prior dose → completed without product or dates', () => {
    const record: AdditionalVaccineRecord = {
      category: 'pneumococcal',
      numberOfDoses: 1,
      lastDoseDate: null,
      doseDates: [],
    };
    expect(isVaccineRecordComplete(record, AS_OF, teenDobParts())).toBe(true);

    const state = baseTeenState([record]);
    expect(getNextStepAfterDoseCount(state, 0, AS_OF)).toBe('review');

    const results = recommendationsFor([record]);
    const pcv = [...results.completed, ...results.dueNow, ...results.upcoming].filter(
      (item) => item.vaccineCategory === 'pneumococcal'
    );
    expect(pcv.some((item) => item.status === 'completed')).toBe(true);
    expect(pcv.some((item) => item.status === 'due-now')).toBe(false);
  });

  it('Scenario B: MenACWY 1 prior dose → completed, no product/date steps', () => {
    const record: AdditionalVaccineRecord = {
      category: 'meningococcalACWY',
      numberOfDoses: 1,
      lastDoseDate: null,
      doseDates: [],
    };
    expect(isVaccineRecordComplete(record, AS_OF, teenDobParts())).toBe(true);
    expect(getNextStepAfterDoseCount(baseTeenState([record]), 0, AS_OF)).toBe('review');

    const results = recommendationsFor([record]);
    const men = [...results.completed, ...results.dueNow].filter(
      (item) => item.vaccineCategory === 'meningococcalACWY'
    );
    expect(men.some((item) => item.status === 'completed')).toBe(true);
  });

  it('Scenario C: Influenza current season = no → one seasonal dose due', () => {
    const record: AdditionalVaccineRecord = {
      category: 'influenza',
      numberOfDoses: 0,
      lastDoseDate: null,
      doseDates: [],
      influenzaCurrentSeasonReceived: false,
    };
    expect(isVaccineRecordComplete(record, AS_OF, teenDobParts())).toBe(true);

    const results = recommendationsFor([record]);
    const flu = results.dueNow.filter((item) => item.vaccineCategory === 'influenza');
    expect(flu).toHaveLength(1);
    expect(flu[0]?.doseLabelKey).toBe('doseLabel_seasonDose');
  });

  it('Scenario D: Influenza current season = yes → completed', () => {
    const record: AdditionalVaccineRecord = {
      category: 'influenza',
      numberOfDoses: 1,
      lastDoseDate: null,
      doseDates: [],
      influenzaCurrentSeasonReceived: true,
    };
    const results = recommendationsFor([record]);
    expect(
      results.completed.some(
        (item) =>
          item.vaccineCategory === 'influenza' && item.doseLabelKey === 'doseLabel_seasonComplete'
      )
    ).toBe(true);
  });

  it('Scenario E: HPV 0 prior doses → dose 1 due without wizard historical dates', () => {
    const results = recommendationsFor([]);
    const hpvDue = results.dueNow.filter((item) => item.vaccineCategory === 'hpv');
    expect(hpvDue.some((item) => item.doseLabelKey === 'doseLabel_dose1')).toBe(true);
  });

  it('Scenario F: HPV 1 prior dose with known first dose date → schedules next dose', () => {
    const firstDose = buildDateParts({ day: 1, month: 3, year: 2024 });
    const record: AdditionalVaccineRecord = {
      category: 'hpv',
      product: 'gardasil9',
      numberOfDoses: 1,
      dose1Date: firstDose,
      firstDoseDate: firstDose,
      lastDoseDate: firstDose,
      doseDates: [firstDose],
    };
    expect(isVaccineRecordComplete(record, AS_OF, teenDobParts())).toBe(true);

    const history = recordToHistory(record);
    const results = calculateVaccineRecommendations({
      dob: DOB,
      referenceDate: AS_OF,
      mmrDate: null,
      mmrDates: [],
      routineVaccinesStatus: 'complete',
      completedRoutineVisits: [],
      vaccineHistory: [history],
    });

    const hpvNext = [...results.dueNow, ...results.upcoming].filter(
      (item) => item.vaccineCategory === 'hpv'
    );
    expect(hpvNext.length).toBeGreaterThan(0);
    expect(hpvNext[0]?.recommendedDate).toBeTruthy();
  });

  it('Scenario G: HPV 1 prior dose, date unknown → continues with due dose and note', () => {
    const record: AdditionalVaccineRecord = {
      category: 'hpv',
      product: 'gardasil9',
      numberOfDoses: 1,
      firstDoseDateUnknown: true,
      lastDoseDate: null,
      doseDates: [],
    };
    expect(isVaccineRecordComplete(record, AS_OF, teenDobParts())).toBe(true);

    const results = recommendationsFor([record]);
    const hpv = results.dueNow.filter((item) => item.vaccineCategory === 'hpv');
    expect(hpv).toHaveLength(1);
    expect(hpv[0]?.recommendedDate).toBeUndefined();
    expect(hpv[0]?.noteKeys).toContain('note_hpvRemainingTimingDependsOnFirstDose');
  });

  it('wizard skips lastDoseDate after teen MenACWY dose count', () => {
    const state = baseTeenState([
      {
        category: 'meningococcalACWY',
        numberOfDoses: 1,
        lastDoseDate: null,
        doseDates: [],
      },
    ]);
    expect(getNextStepAfterDoseCount(state, 0, AS_OF)).toBe('review');
    expect(getNextStepAfterAdditionalVaccineHistory(state, AS_OF)).toBe('review');
  });
});
