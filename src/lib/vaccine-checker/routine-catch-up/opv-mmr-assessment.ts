import {
  getNotReceivedRoutineVisits,
  hasRoutineHistoryForReachedVisits,
} from '@/lib/vaccine-checker/routine-history';
import { getDueRoutineVisits } from '@/lib/vaccine-checker/routine';
import {
  ROUTINE_VISIT_DOSES,
  type RoutineScheduleDose,
} from '@/lib/vaccine-checker/routine-schedule';
import { type RoutineVaccineLedger } from '@/lib/vaccine-checker/routine-ledger';
import { type CheckerInput } from '@/lib/vaccine-checker/types';
import { type OpvCatchUpAssessment } from '@/lib/vaccine-checker/routine-catch-up/types';
import { type RoutineVisitKey } from '@/types/wizard-types';

function visitContainsOpv(visit: RoutineVisitKey): boolean {
  return ROUTINE_VISIT_DOSES[visit].some((dose: RoutineScheduleDose) =>
    dose.contributions.some((contribution) => contribution.series === 'polioOpv')
  );
}

export function getOpvContainingVisits(visits: RoutineVisitKey[]): RoutineVisitKey[] {
  return visits.filter(visitContainsOpv);
}

export function getMissedOpvContainingVisits(input: CheckerInput): RoutineVisitKey[] {
  const reachedVisits = getDueRoutineVisits(input.dob, input.referenceDate);
  const opvVisits = getOpvContainingVisits(reachedVisits);

  if (
    input.routineVisitHistory &&
    hasRoutineHistoryForReachedVisits(input.routineVisitHistory, reachedVisits)
  ) {
    return getOpvContainingVisits(
      getNotReceivedRoutineVisits(input.routineVisitHistory, reachedVisits)
    );
  }

  if (input.routineVaccinesStatus === 'complete') {
    return [];
  }

  if (input.routineVaccinesStatus === 'some') {
    const completed = new Set(input.completedRoutineVisits);
    return opvVisits.filter((visit) => !completed.has(visit));
  }

  return opvVisits;
}

export function assessOpvCatchUp(
  input: CheckerInput,
  ledger: RoutineVaccineLedger
): OpvCatchUpAssessment {
  const missedOpvVisitKeys = getMissedOpvContainingVisits(input);

  return {
    documentedDoseKeys: [...ledger.bySeries.polioOpv.documentedDoseKeys],
    missedOpvVisitKeys,
    showHealthOfficeNote: missedOpvVisitKeys.length > 0,
  };
}
