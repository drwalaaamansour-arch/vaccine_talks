import { type RoutineVisitKey } from '@/types/wizard-types';
import { ROUTINE_VISIT_ORDER } from '@/lib/vaccine-checker/routine';

export type RoutineVisitReceiptStatus = 'received' | 'notReceived';

export type RoutineVisitHistory = Partial<Record<RoutineVisitKey, RoutineVisitReceiptStatus>>;

export function buildRoutineVisitHistory(
  status: 'complete' | 'some' | 'none',
  reachedVisits: RoutineVisitKey[],
  selectedVisits: RoutineVisitKey[] = []
): RoutineVisitHistory {
  const history: RoutineVisitHistory = {};

  for (const visit of reachedVisits) {
    if (status === 'complete') {
      history[visit] = 'received';
    } else if (status === 'none') {
      history[visit] = 'notReceived';
    } else {
      history[visit] = selectedVisits.includes(visit) ? 'received' : 'notReceived';
    }
  }

  return history;
}

export function getReceivedRoutineVisits(
  history: RoutineVisitHistory,
  reachedVisits: RoutineVisitKey[]
): RoutineVisitKey[] {
  return reachedVisits.filter((visit) => history[visit] === 'received');
}

export function getNotReceivedRoutineVisits(
  history: RoutineVisitHistory,
  reachedVisits: RoutineVisitKey[]
): RoutineVisitKey[] {
  return reachedVisits.filter((visit) => history[visit] === 'notReceived');
}

export function getFutureRoutineVisits(reachedVisits: RoutineVisitKey[]): RoutineVisitKey[] {
  return ROUTINE_VISIT_ORDER.filter((visit) => !reachedVisits.includes(visit));
}

export function hasRoutineHistoryForReachedVisits(
  history: RoutineVisitHistory,
  reachedVisits: RoutineVisitKey[]
): boolean {
  return reachedVisits.some((visit) => history[visit] !== undefined);
}

export function completedVisitsFromHistory(
  history: RoutineVisitHistory,
  reachedVisits: RoutineVisitKey[]
): RoutineVisitKey[] {
  return getReceivedRoutineVisits(history, reachedVisits);
}
