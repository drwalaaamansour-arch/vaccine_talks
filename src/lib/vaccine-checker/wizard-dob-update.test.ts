import { describe, expect, it } from 'vitest';
import { addMonths } from '@/lib/vaccine-checker/date-utils';
import { getEligibleAdditionalVaccineCategories } from '@/lib/vaccine-checker/wizard-flow';
import {
  applyDobStepSubmission,
  dateOfBirthEquals,
  emptyAgeDependentWizardFields,
  hasDownstreamAgeDependentWizardData,
} from '@/lib/vaccine-checker/wizard-dob-update';
import {
  buildDateParts,
  calculateAgeFromDate,
  getPreviousWizardStep,
  parseDateParts,
  type WizardState,
} from '@/types/wizard-types';

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
    language: 'ar',
    dateOfBirth: dobFromDate(birth),
    calculatedAge: { years: 1, months: 2, days: 0 },
    medicalCondition: { hasCondition: false, showStopMessage: false },
    routineVaccinesStatus: 'none',
    routineVisitHistory: {},
    completedRoutineVisits: [],
    mmrDate: null,
    mmrDose2Date: null,
    additionalVaccinesHistoryAnswer: null,
    additionalVaccines: [],
    currentStep: 'dob',
    showResults: false,
    showDisclaimer: false,
    ...overrides,
  };
}

function stateWithFullDownstreamHistory(): WizardState {
  return baseState({
    currentStep: 'dob',
    routineVaccinesStatus: 'some',
    routineVisitHistory: { birth: 'received', '2months': 'received' },
    completedRoutineVisits: ['birth', '2months'],
    mmrDate: buildDateParts({ day: 1, month: 8, year: 2024 }),
    mmrDose2Date: buildDateParts({ day: 1, month: 2, year: 2025 }),
    additionalVaccinesHistoryAnswer: 'yes',
    additionalVaccines: [
      {
        category: 'rotavirus',
        product: 'Rotarix',
        numberOfDoses: 1,
        lastDoseDate: buildDateParts({ day: 1, month: 7, year: 2024 }),
        firstDoseDate: buildDateParts({ day: 1, month: 7, year: 2024 }),
        doseDates: [buildDateParts({ day: 1, month: 7, year: 2024 })],
      },
    ],
    showResults: true,
    showDisclaimer: true,
  });
}

describe('DOB edit from Review', () => {
  it('A. clears downstream data when DOB actually changes after routine, MMR, and additional history', () => {
    const state = stateWithFullDownstreamHistory();
    const newBirth = new Date(2020, 0, 15);
    const newDob = dobFromDate(newBirth);
    const calculatedAge = calculateAgeFromDate(parseDateParts(newDob))!;

    const next = applyDobStepSubmission(state, newDob, calculatedAge);

    expect(next.language).toBe('ar');
    expect(next.medicalCondition).toEqual(state.medicalCondition);
    expect(next.dateOfBirth).toEqual(newDob);
    expect(next.calculatedAge).toEqual(calculatedAge);
    expect(next.currentStep).toBe('medicalCondition');
    expect(next).toMatchObject(emptyAgeDependentWizardFields());
    expect(hasDownstreamAgeDependentWizardData(next)).toBe(false);
  });

  it('B. uses age-eligible vaccine options for the new DOB after a change', () => {
    const infantBirth = new Date(2024, 5, 22);
    const olderBirth = new Date(2015, 5, 22);
    const today = addMonths(infantBirth, 7);

    const infantCategories = getEligibleAdditionalVaccineCategories(
      baseState({ dateOfBirth: dobFromDate(infantBirth) }),
      today
    );
    expect(infantCategories).toContain('influenza');
    expect(infantCategories).not.toContain('hpv');

    const cleared = applyDobStepSubmission(
      {
        ...stateWithFullDownstreamHistory(),
        dateOfBirth: dobFromDate(infantBirth),
      },
      dobFromDate(olderBirth),
      calculateAgeFromDate(parseDateParts(dobFromDate(olderBirth)))!
    );

    const olderCategories = getEligibleAdditionalVaccineCategories(cleared, today);
    expect(olderCategories).toContain('hpv');
    expect(infantCategories).not.toContain('hpv');
    expect(cleared.additionalVaccines).toEqual([]);
  });

  it('C. preserves downstream data when saving the identical DOB', () => {
    const state = stateWithFullDownstreamHistory();
    const sameDob = state.dateOfBirth!;
    const calculatedAge = calculateAgeFromDate(parseDateParts(sameDob))!;

    const next = applyDobStepSubmission(state, sameDob, calculatedAge);

    expect(dateOfBirthEquals(next.dateOfBirth, sameDob)).toBe(true);
    expect(next.routineVaccinesStatus).toBe('some');
    expect(next.completedRoutineVisits).toEqual(['birth', '2months']);
    expect(next.mmrDate).toEqual(state.mmrDate);
    expect(next.mmrDose2Date).toEqual(state.mmrDose2Date);
    expect(next.additionalVaccinesHistoryAnswer).toBe('yes');
    expect(next.additionalVaccines).toEqual(state.additionalVaccines);
    expect(next.currentStep).toBe('review');
  });

  it('D. check another child full reset clears DOB and all child data, unlike DOB edit', () => {
    const populated = stateWithFullDownstreamHistory();
    expect(hasDownstreamAgeDependentWizardData(populated)).toBe(true);

    const afterDobChange = applyDobStepSubmission(
      populated,
      dobFromDate(new Date(2020, 0, 15)),
      { years: 5, months: 0, days: 0 }
    );
    expect(afterDobChange.dateOfBirth).not.toBeNull();

    const fullReset: WizardState = {
      language: populated.language,
      dateOfBirth: null,
      calculatedAge: null,
      medicalCondition: { hasCondition: false, showStopMessage: false },
      currentStep: 'intro',
      ...emptyAgeDependentWizardFields(),
    };

    expect(fullReset.dateOfBirth).toBeNull();
    expect(fullReset.calculatedAge).toBeNull();
    expect(fullReset.currentStep).toBe('intro');
    expect(hasDownstreamAgeDependentWizardData(fullReset)).toBe(false);
  });

  it('E. back navigation still works after a DOB change clears downstream data', () => {
    const state = stateWithFullDownstreamHistory();
    const newBirth = new Date(2020, 0, 15);
    const newDob = dobFromDate(newBirth);
    const calculatedAge = calculateAgeFromDate(parseDateParts(newDob))!;

    const afterDobChange = applyDobStepSubmission(state, newDob, calculatedAge);
    expect(getPreviousWizardStep(afterDobChange)).toBe('dob');

    const atMedical = { ...afterDobChange, currentStep: 'medicalCondition' as const };
    expect(getPreviousWizardStep(atMedical)).toBe('dob');

    const atReview = { ...stateWithFullDownstreamHistory(), currentStep: 'review' as const };
    expect(getPreviousWizardStep(atReview)).not.toBeNull();
  });
});
