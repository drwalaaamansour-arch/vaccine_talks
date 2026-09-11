import {
  type AgeRange,
  type DateOfBirth,
  type WizardState,
} from '@/types/wizard-types';

export function dateOfBirthEquals(
  a: DateOfBirth | null,
  b: DateOfBirth | null
): boolean {
  if (a === null || b === null) return a === b;
  return a.day === b.day && a.month === b.month && a.year === b.year;
}

export function hasDownstreamAgeDependentWizardData(state: WizardState): boolean {
  return (
    state.routineVaccinesStatus !== 'none' ||
    state.completedRoutineVisits.length > 0 ||
    Object.keys(state.routineVisitHistory).length > 0 ||
    state.mmrDate !== null ||
    state.mmrDose2Date !== null ||
    state.additionalVaccinesHistoryAnswer !== null ||
    state.additionalVaccines.length > 0 ||
    state.showResults ||
    state.showDisclaimer
  );
}

export function emptyAgeDependentWizardFields(): Pick<
  WizardState,
  | 'routineVaccinesStatus'
  | 'routineVisitHistory'
  | 'completedRoutineVisits'
  | 'mmrDate'
  | 'mmrDose2Date'
  | 'additionalVaccinesHistoryAnswer'
  | 'additionalVaccines'
  | 'showResults'
  | 'showDisclaimer'
> {
  return {
    routineVaccinesStatus: 'none',
    routineVisitHistory: {},
    completedRoutineVisits: [],
    mmrDate: null,
    mmrDose2Date: null,
    additionalVaccinesHistoryAnswer: null,
    additionalVaccines: [],
    showResults: false,
    showDisclaimer: false,
  };
}

export function applyDobStepSubmission(
  state: WizardState,
  newDob: DateOfBirth,
  calculatedAge: AgeRange
): WizardState {
  const dobChanged = !dateOfBirthEquals(state.dateOfBirth, newDob);

  if (dobChanged) {
    return {
      ...state,
      ...emptyAgeDependentWizardFields(),
      dateOfBirth: newDob,
      calculatedAge,
      currentStep: 'medicalCondition',
    };
  }

  const hasDownstream = hasDownstreamAgeDependentWizardData(state);

  return {
    ...state,
    dateOfBirth: newDob,
    calculatedAge,
    currentStep: hasDownstream ? 'review' : 'medicalCondition',
  };
}
