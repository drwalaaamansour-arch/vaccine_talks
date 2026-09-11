import {
  type AdditionalVaccineCategory,
  type RoutineVisitKey,
  type WizardState,
  type WizardStepId,
  parseDateParts,
} from '@/types/wizard-types';
import { ageAtDate, type AgeAtDate } from '@/lib/vaccine-checker/date-utils';
import {
  completedVisitsFromHistory,
  getNotReceivedRoutineVisits,
  getReceivedRoutineVisits,
  hasRoutineHistoryForReachedVisits,
} from '@/lib/vaccine-checker/routine-history';
import {
  getDueRoutineVisits,
  ROUTINE_VISIT_ORDER,
} from '@/lib/vaccine-checker/routine';
import { categoryNeedsProduct, isVaccineRecordComplete } from '@/lib/vaccine-checker/input-adapter';
import {
  couldMmrDose1DateAffectVaricella,
  couldMmrDose2DateAffectVaricella,
} from '@/lib/vaccine-checker/mmr-varicella-gating';

export const ADDITIONAL_VACCINE_CATEGORY_ORDER: AdditionalVaccineCategory[] = [
  'rotavirus',
  'pneumococcal',
  'meningococcalACWY',
  'meningococcalB',
  'varicella',
  'hepatitisA',
  'influenza',
  'hpv',
];

type AdditionalVaccineMinAge = {
  minWeeks?: number;
  minMonths?: number;
  minYears?: number;
};

const ADDITIONAL_VACCINE_MIN_AGE: Record<AdditionalVaccineCategory, AdditionalVaccineMinAge> = {
  rotavirus: { minWeeks: 6 },
  pneumococcal: { minWeeks: 6 },
  meningococcalACWY: { minWeeks: 6 },
  meningococcalB: { minMonths: 2 },
  influenza: { minMonths: 6 },
  varicella: { minMonths: 12 },
  hepatitisA: { minMonths: 12 },
  hpv: { minYears: 9 },
};

export function getReferenceDate(): Date {
  return new Date();
}

export function getChildAgeMonths(state: WizardState, today: Date = getReferenceDate()): number | null {
  if (!state.dateOfBirth) return null;
  const age = ageAtDate(parseDateParts(state.dateOfBirth), today);
  return age.years * 12 + age.months;
}

export function getChildAgeAtReference(state: WizardState, today: Date = getReferenceDate()): AgeAtDate | null {
  if (!state.dateOfBirth) return null;
  return ageAtDate(parseDateParts(state.dateOfBirth), today);
}

export function isAdditionalVaccineCategoryEligibleAtAge(
  age: AgeAtDate,
  category: AdditionalVaccineCategory
): boolean {
  const requirement = ADDITIONAL_VACCINE_MIN_AGE[category];

  if (requirement.minYears !== undefined && age.years < requirement.minYears) {
    return false;
  }

  if (requirement.minMonths !== undefined) {
    const totalMonths = age.years * 12 + age.months;
    if (totalMonths < requirement.minMonths) {
      return false;
    }
  }

  if (requirement.minWeeks !== undefined && age.totalWeeks < requirement.minWeeks) {
    return false;
  }

  return true;
}

export function getEligibleAdditionalVaccineCategories(
  state: WizardState,
  today: Date = getReferenceDate()
): AdditionalVaccineCategory[] {
  const age = getChildAgeAtReference(state, today);
  if (!age) return [];

  return ADDITIONAL_VACCINE_CATEGORY_ORDER.filter((category) =>
    isAdditionalVaccineCategoryEligibleAtAge(age, category)
  );
}

export function shouldShowAdditionalVaccinesStep(
  state: WizardState,
  today: Date = getReferenceDate()
): boolean {
  return getEligibleAdditionalVaccineCategories(state, today).length > 0;
}

export function getDueRoutineVisitsForState(
  state: WizardState,
  today: Date = getReferenceDate()
): RoutineVisitKey[] {
  if (!state.dateOfBirth) return [];
  return getDueRoutineVisits(parseDateParts(state.dateOfBirth), today);
}

export function getEffectiveCompletedRoutineVisits(
  state: WizardState,
  today: Date = getReferenceDate()
): RoutineVisitKey[] {
  const dueVisits = getDueRoutineVisitsForState(state, today);

  if (hasRoutineHistoryForReachedVisits(state.routineVisitHistory, dueVisits)) {
    return completedVisitsFromHistory(state.routineVisitHistory, dueVisits);
  }

  if (state.routineVaccinesStatus === 'complete') {
    return dueVisits;
  }

  if (state.routineVaccinesStatus === 'some') {
    return state.completedRoutineVisits.filter((visit) => dueVisits.includes(visit));
  }

  return [];
}

export function getRoutineHistorySummary(
  state: WizardState,
  today: Date = getReferenceDate()
) {
  const reachedVisits = getDueRoutineVisitsForState(state, today);

  if (hasRoutineHistoryForReachedVisits(state.routineVisitHistory, reachedVisits)) {
    const receivedVisits = getReceivedRoutineVisits(state.routineVisitHistory, reachedVisits);
    const notReceivedVisits = getNotReceivedRoutineVisits(state.routineVisitHistory, reachedVisits);
    const allReachedReceived =
      reachedVisits.length > 0 &&
      notReceivedVisits.length === 0 &&
      receivedVisits.length === reachedVisits.length;

    return {
      reachedVisits,
      receivedVisits,
      notReceivedVisits,
      allReachedReceived,
    };
  }

  const receivedVisits = getEffectiveCompletedRoutineVisits(state, today);
  const notReceivedVisits =
    state.routineVaccinesStatus === 'none'
      ? reachedVisits
      : state.routineVaccinesStatus === 'some'
        ? reachedVisits.filter((visit) => !receivedVisits.includes(visit))
        : [];
  const allReachedReceived =
    state.routineVaccinesStatus === 'complete' &&
    reachedVisits.length > 0 &&
    receivedVisits.length === reachedVisits.length;

  return {
    reachedVisits,
    receivedVisits,
    notReceivedVisits,
    allReachedReceived,
  };
}

export function hasCompletedRoutineVisit(
  state: WizardState,
  visit: RoutineVisitKey,
  today: Date = getReferenceDate()
): boolean {
  return getEffectiveCompletedRoutineVisits(state, today).includes(visit);
}

export function hasSelectedVaricellaInWizard(state: WizardState): boolean {
  return state.additionalVaccines.some((record) => record.category === 'varicella');
}

export function isVaricellaCatchUpSchedulingRelevant(
  state: WizardState,
  today: Date = getReferenceDate()
): boolean {
  const ageMonths = getChildAgeMonths(state, today);
  if (ageMonths === null || ageMonths < 12) return false;
  if (!hasCompletedRoutineVisit(state, '12months', today)) return false;

  const varicellaRecord = state.additionalVaccines.find((record) => record.category === 'varicella');
  if (varicellaRecord && varicellaRecord.numberOfDoses >= 2) return false;

  return true;
}

export function isVaricellaEvaluationActive(
  state: WizardState,
  today: Date = getReferenceDate()
): boolean {
  if (state.additionalVaccinesHistoryAnswer === 'no') {
    return false;
  }

  if (hasSelectedVaricellaInWizard(state)) {
    const varicellaRecord = state.additionalVaccines.find((record) => record.category === 'varicella');
    return !varicellaRecord || varicellaRecord.numberOfDoses < 2;
  }

  if (state.additionalVaccinesHistoryAnswer !== 'yes') {
    return false;
  }

  return isVaricellaCatchUpSchedulingRelevant(state, today);
}

export function isVaricellaSchedulingRelevant(
  state: WizardState,
  today: Date = getReferenceDate()
): boolean {
  return isVaricellaEvaluationActive(state, today);
}

export function hasAllReachedRoutineVisitsReceived(
  state: WizardState,
  today: Date = getReferenceDate()
): boolean {
  return getRoutineHistorySummary(state, today).allReachedReceived;
}

export function shouldCollectMostRecentMmrDateForVaricella(
  state: WizardState,
  today: Date = getReferenceDate()
): boolean {
  return shouldCollectMmrDose2Date(state, today);
}

export function hasExactlyOneDocumentedMmrDose(
  state: WizardState,
  today: Date = getReferenceDate()
): boolean {
  return (
    hasCompletedRoutineVisit(state, '12months', today) &&
    !hasCompletedRoutineVisit(state, '18months', today)
  );
}

export function shouldCollectMmrDose1DateForCatchUp(
  state: WizardState,
  today: Date = getReferenceDate()
): boolean {
  if (!state.dateOfBirth) return false;
  if (state.mmrDate) return false;

  const ageMonths = getChildAgeMonths(state, today);
  if (ageMonths === null || ageMonths < 12) return false;

  return hasExactlyOneDocumentedMmrDose(state, today);
}

export function shouldCollectMmrDose1DateForVaricella(
  state: WizardState,
  today: Date = getReferenceDate()
): boolean {
  if (!state.dateOfBirth) return false;
  if (state.mmrDate) return false;
  if (shouldCollectMostRecentMmrDateForVaricella(state, today)) return false;

  const dob = parseDateParts(state.dateOfBirth);
  if (!couldMmrDose1DateAffectVaricella(dob, today)) return false;
  if (!hasCompletedRoutineVisit(state, '12months', today)) return false;
  if (hasCompletedRoutineVisit(state, '18months', today)) return false;
  if (!isVaricellaEvaluationActive(state, today)) return false;

  return true;
}

export function shouldCollectMmrDose1Date(
  state: WizardState,
  today: Date = getReferenceDate()
): boolean {
  return (
    shouldCollectMmrDose1DateForCatchUp(state, today) ||
    shouldCollectMmrDose1DateForVaricella(state, today)
  );
}

export function shouldCollectMmrDose2Date(
  state: WizardState,
  today: Date = getReferenceDate()
): boolean {
  if (!state.dateOfBirth) return false;
  if (state.mmrDose2Date) return false;
  if (!hasCompletedRoutineVisit(state, '18months', today)) return false;
  if (!isVaricellaCatchUpSchedulingRelevant(state, today)) return false;

  const dob = parseDateParts(state.dateOfBirth);
  return couldMmrDose2DateAffectVaricella(dob, today);
}

export function shouldShowMmrDateStep(
  state: WizardState,
  today: Date = getReferenceDate()
): boolean {
  return shouldCollectMmrDose1Date(state, today) || shouldCollectMmrDose2Date(state, today);
}

export function shouldIncludeMmrStepInFlow(
  state: WizardState,
  today: Date = getReferenceDate()
): boolean {
  return (
    shouldShowMmrDateStep(state, today) ||
    Boolean(state.mmrDate) ||
    Boolean(state.mmrDose2Date)
  );
}

export function getFirstAdditionalVaccineStep(state: WizardState): WizardStepId {
  if (state.additionalVaccines.length === 0) {
    return 'review';
  }

  const first = state.additionalVaccines[0];
  if (first.category === 'pneumococcal') {
    return 'doseCount';
  }

  return categoryNeedsProduct(first.category) ? 'productSelection' : 'doseCount';
}

export function getNextStepAfterDoseCount(
  state: WizardState,
  currentIndex: number,
  today: Date = getReferenceDate()
): WizardStepId {
  const vaccine = state.additionalVaccines[currentIndex];
  if (!vaccine) {
    return 'review';
  }

  if (vaccine.numberOfDoses === 0) {
    return getNextStepAfterAdditionalVaccineHistory(state, today);
  }

  if (vaccine.category === 'pneumococcal') {
    return vaccine.product ? 'lastDoseDate' : 'productSelection';
  }

  if (categoryNeedsProduct(vaccine.category) && !vaccine.product) {
    return 'productSelection';
  }

  return 'lastDoseDate';
}

export function getNextStepAfterRoutineVaccines(
  state: WizardState,
  today: Date = getReferenceDate()
): WizardStepId {
  if (shouldShowAdditionalVaccinesStep(state, today)) {
    return 'additionalVaccines';
  }

  if (shouldShowMmrDateStep(state, today)) {
    return 'mmrDate';
  }

  return 'review';
}

export function getPreviousStepBeforeMmrDate(
  state: WizardState,
  today: Date = getReferenceDate()
): WizardStepId {
  const nextIncomplete = state.additionalVaccines.findIndex((record) => !isVaccineRecordComplete(record));

  if (nextIncomplete !== -1) {
    const nextVaccine = state.additionalVaccines[nextIncomplete];
    if (nextVaccine.category === 'pneumococcal') {
      return 'doseCount';
    }

    return categoryNeedsProduct(nextVaccine.category) ? 'productSelection' : 'doseCount';
  }

  if (state.additionalVaccines.some((record) => isVaccineRecordComplete(record))) {
    return 'lastDoseDate';
  }

  if (shouldShowAdditionalVaccinesStep(state, today)) {
    return 'additionalVaccines';
  }

  return 'routineVaccines';
}

export function getNextStepAfterAdditionalVaccines(
  state: WizardState,
  today: Date = getReferenceDate()
): WizardStepId {
  if (state.additionalVaccines.length === 0) {
    if (shouldShowMmrDateStep(state, today)) {
      return 'mmrDate';
    }

    return 'review';
  }

  return getFirstAdditionalVaccineStep(state);
}

export function getNextStepAfterMmrDate(
  _state: WizardState,
  _today: Date = getReferenceDate()
): WizardStepId {
  return 'review';
}

export function getNextStepAfterAdditionalVaccineHistory(
  state: WizardState,
  today: Date = getReferenceDate()
): WizardStepId {
  const nextIncomplete = state.additionalVaccines.findIndex((record) => !isVaccineRecordComplete(record));

  if (nextIncomplete !== -1) {
    const nextVaccine = state.additionalVaccines[nextIncomplete];
    if (nextVaccine.category === 'pneumococcal') {
      return 'doseCount';
    }

    return categoryNeedsProduct(nextVaccine.category) ? 'productSelection' : 'doseCount';
  }

  if (shouldShowMmrDateStep(state, today)) {
    return 'mmrDate';
  }

  return 'review';
}

export function getPreviousStepBeforeAdditionalVaccineFlow(
  _state: WizardState,
  _today: Date = getReferenceDate()
): WizardStepId {
  return 'additionalVaccines';
}

export function resolveMmrDatesForEngine(state: WizardState): Date[] {
  const dates: Date[] = [];

  if (state.mmrDate) {
    dates.push(parseDateParts(state.mmrDate));
  }

  if (state.mmrDose2Date) {
    dates.push(parseDateParts(state.mmrDose2Date));
  }

  return dates.sort((a, b) => a.getTime() - b.getTime());
}

export function resolvePrimaryMmrDateForEngine(state: WizardState): Date | null {
  const dates = resolveMmrDatesForEngine(state);
  if (dates.length === 0) return null;
  return dates[dates.length - 1];
}

export { ROUTINE_VISIT_ORDER };
export {
  getNotReceivedRoutineVisits,
  getReceivedRoutineVisits,
} from '@/lib/vaccine-checker/routine-history';
