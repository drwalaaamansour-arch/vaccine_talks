import { type RoutineVisitKey } from '@/types/wizard-types';
import {
  addMonths,
  ageAtDate,
  isOnOrBefore,
} from '@/lib/vaccine-checker/date-utils';
import {
  getNotReceivedRoutineVisits,
  hasRoutineHistoryForReachedVisits,
} from '@/lib/vaccine-checker/routine-history';
import {
  ROUTINE_VISIT_AGE_MONTHS,
  ROUTINE_VISIT_ORDER,
  ROUTINE_VISIT_VACCINES,
  getRoutineDoseKeysForVisit,
} from '@/lib/vaccine-checker/routine-schedule';
import { type CheckerInput, type RoutineMissingItem } from '@/lib/vaccine-checker/types';

export {
  ROUTINE_ANTIGEN_SERIES_ORDER,
  ROUTINE_VISIT_AGE_MONTHS,
  ROUTINE_VISIT_DOSES,
  ROUTINE_VISIT_ORDER,
  ROUTINE_VISIT_VACCINES,
  getRoutineDoseKeysForVisit,
  getRoutineDosesForVisit,
} from '@/lib/vaccine-checker/routine-schedule';

export function getDueRoutineVisits(dob: Date, today: Date): RoutineVisitKey[] {
  const age = ageAtDate(dob, today);
  const ageMonths = age.years * 12 + age.months;

  return ROUTINE_VISIT_ORDER.filter((visit) => ROUTINE_VISIT_AGE_MONTHS[visit] <= ageMonths);
}

export function getVisitDueDate(dob: Date, visit: RoutineVisitKey): Date {
  return addMonths(dob, ROUTINE_VISIT_AGE_MONTHS[visit]);
}

export function getRoutineVisitVaccineKeys(visit: RoutineVisitKey): string[] {
  return getRoutineDoseKeysForVisit(visit);
}

export function getMissedRoutineVisits(input: CheckerInput): RoutineVisitKey[] {
  const dueVisits = getDueRoutineVisits(input.dob, input.referenceDate);

  if (
    input.routineVisitHistory &&
    hasRoutineHistoryForReachedVisits(input.routineVisitHistory, dueVisits)
  ) {
    return getNotReceivedRoutineVisits(input.routineVisitHistory, dueVisits);
  }

  if (input.routineVaccinesStatus === 'complete') {
    return [];
  }

  if (input.routineVaccinesStatus === 'some') {
    const completed = new Set(input.completedRoutineVisits);
    return dueVisits.filter((visit) => !completed.has(visit));
  }

  return dueVisits;
}

/** Phase 1: visit-level only. Individual vaccine mapping is disabled until catch-up engine ships. */
export function calculateRoutineMissing(input: CheckerInput): RoutineMissingItem[] {
  return getMissedRoutineVisits(input).map((visitKey) => ({
    visitKey,
    vaccineKeys: [],
    visitLabelKey: `routineVisit_${visitKey}`,
  }));
}

/** Reserved for the future catch-up engine; not used in parent-facing Results yet. */
export function calculateRoutineMissingWithVaccines(input: CheckerInput): RoutineMissingItem[] {
  return getMissedRoutineVisits(input).map((visitKey) => ({
    visitKey,
    vaccineKeys: ROUTINE_VISIT_VACCINES[visitKey],
    visitLabelKey: `routineVisit_${visitKey}`,
  }));
}

export function isVisitOverdue(dob: Date, visit: RoutineVisitKey, today: Date): boolean {
  const dueDate = getVisitDueDate(dob, visit);
  return isOnOrBefore(dueDate, today);
}

export function hasCompletedRoutineVisitFromInput(
  input: CheckerInput,
  visit: RoutineVisitKey
): boolean {
  const dueVisits = getDueRoutineVisits(input.dob, input.referenceDate);

  if (!dueVisits.includes(visit)) {
    return false;
  }

  if (
    input.routineVisitHistory &&
    hasRoutineHistoryForReachedVisits(input.routineVisitHistory, dueVisits)
  ) {
    return input.routineVisitHistory[visit] === 'received';
  }

  if (input.routineVaccinesStatus === 'complete') {
    return true;
  }

  if (input.routineVaccinesStatus === 'some') {
    return input.completedRoutineVisits.includes(visit);
  }

  return false;
}
