import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import {
  getAvailableDoseCounts,
  getAvailableDoseCountsForVaccine,
} from '@/lib/vaccine-checker/dose-count-options';
import {
  getFirstAdditionalVaccineStep,
  getNextStepAfterAdditionalVaccineHistory,
  getWizardStepForIncompleteAdditionalVaccine,
} from '@/lib/vaccine-checker/wizard-flow';
import {
  buildAdditionalVaccinesAfterSelection,
  buildEmptyAdditionalVaccineRecord,
  mergeSelectedAdditionalVaccineRecords,
} from '@/lib/vaccine-checker/wizard-history';
import {
  isVaccineRecordCompleteForState,
  wizardStateToCheckerInput,
} from '@/lib/vaccine-checker/input-adapter';
import { buildDateParts, type WizardState } from '@/types/wizard-types';

const AS_OF = new Date(2026, 8, 13);
const TEEN_DOB = new Date(2009, 8, 2);

function teenDobParts() {
  return buildDateParts({ day: 2, month: 9, year: 2009 });
}

function baseTeenState(additionalVaccines: WizardState['additionalVaccines']): WizardState {
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
    currentStep: 'additionalVaccines',
    showResults: false,
    showDisclaimer: false,
  };
}

const TEEN_ELIGIBLE = [
  'pneumococcal',
  'meningococcalACWY',
  'meningococcalB',
  'varicella',
  'hepatitisA',
  'influenza',
  'hpv',
] as const;

describe('dose count UX when previously received', () => {
  it('1. PCV age 17 + previous received Yes — no dose-count screen, complete', () => {
    const vaccines = buildAdditionalVaccinesAfterSelection(
      [],
      ['pneumococcal'],
      [...TEEN_ELIGIBLE],
      TEEN_DOB,
      AS_OF
    );
    expect(vaccines[0]?.numberOfDoses).toBe(1);

    const state = baseTeenState(vaccines);
    expect(getFirstAdditionalVaccineStep(state, AS_OF)).not.toBe('doseCount');
    expect(isVaccineRecordCompleteForState(state, vaccines[0]!, AS_OF)).toBe(true);

    const input = wizardStateToCheckerInput(state, AS_OF);
    expect(input).not.toBeNull();
    const results = calculateVaccineRecommendations(input!);
    expect(results.completed.some((item) => item.vaccineCategory === 'pneumococcal')).toBe(true);
  });

  it('2. PCV previous received No — doseCount 0 stored automatically, no count screen', () => {
    const vaccines = buildAdditionalVaccinesAfterSelection(
      [],
      ['hpv'],
      [...TEEN_ELIGIBLE],
      TEEN_DOB,
      AS_OF
    );
    const pcv = vaccines.find((record) => record.category === 'pneumococcal');
    expect(pcv?.numberOfDoses).toBe(0);
    expect(isVaccineRecordCompleteForState(baseTeenState(vaccines), pcv!, AS_OF)).toBe(true);
    expect(getWizardStepForIncompleteAdditionalVaccine(baseTeenState(vaccines), pcv!, AS_OF)).not.toBe(
      'doseCount'
    );
  });

  it('3. Hep A previous received Yes — options 1 and 2 only, not 0', () => {
    const record = buildEmptyAdditionalVaccineRecord('hepatitisA');
    const state = baseTeenState([record]);
    expect(getAvailableDoseCounts(state, record, AS_OF)).toEqual([1, 2]);
    expect(getAvailableDoseCountsForVaccine(TEEN_DOB, AS_OF, record, { previouslyReceived: true })).toEqual([
      1,
      2,
    ]);
  });

  it('4. Hep A previous received No — doseCount 0 automatically, no count screen', () => {
    const vaccines = buildAdditionalVaccinesAfterSelection(
      [],
      ['pneumococcal'],
      [...TEEN_ELIGIBLE],
      TEEN_DOB,
      AS_OF
    );
    const hepA = vaccines.find((record) => record.category === 'hepatitisA');
    expect(hepA?.numberOfDoses).toBe(0);
    expect(isVaccineRecordCompleteForState(baseTeenState(vaccines), hepA!, AS_OF)).toBe(true);
  });

  it('5. HPV / MenB / Varicella — previously received Yes never offers 0', () => {
    for (const category of ['hpv', 'meningococcalB', 'varicella'] as const) {
      const record = buildEmptyAdditionalVaccineRecord(category);
      const options = getAvailableDoseCounts(baseTeenState([record]), record, AS_OF);
      expect(options.length).toBeGreaterThan(0);
      expect(options).not.toContain(0);
    }

    const menAcwy = buildEmptyAdditionalVaccineRecord('meningococcalACWY');
    const menAcwyOptions = getAvailableDoseCounts(baseTeenState([menAcwy]), menAcwy, AS_OF);
    expect(menAcwyOptions).not.toContain(0);
  });

  it('merged PCV teen record skips dose-count step in additional-vaccine loop', () => {
    const merged = mergeSelectedAdditionalVaccineRecords([], ['pneumococcal']);
    const withDefaults = buildAdditionalVaccinesAfterSelection(
      merged,
      ['pneumococcal'],
      ['pneumococcal'],
      TEEN_DOB,
      AS_OF
    );
    const state = baseTeenState(withDefaults);
    expect(getNextStepAfterAdditionalVaccineHistory(state, AS_OF)).toBe('review');
  });
});
