import { type Language, type RoutineVisitKey, type TranslateFn } from '@/types/wizard-types';

const ROUTINE_VISIT_LABEL_KEYS: Record<RoutineVisitKey, string> = {
  birth: 'routineVisitBirth',
  '1month': 'routineVisit1Month',
  '2months': 'routineVisit2Months',
  '4months': 'routineVisit4Months',
  '6months': 'routineVisit6Months',
  '9months': 'routineVisit9Months',
  '12months': 'routineVisit12Months',
  '18months': 'routineVisit18Months',
};

export function getRoutineVisitLabel(
  visit: RoutineVisitKey,
  language: Language,
  t: TranslateFn
): string {
  return t(ROUTINE_VISIT_LABEL_KEYS[visit]);
}

export function formatRoutineVisitList(
  visits: RoutineVisitKey[],
  language: Language,
  t: TranslateFn
): string {
  return visits.map((visit) => getRoutineVisitLabel(visit, language, t)).join(', ');
}
