import { getDueRoutineVisits, getVisitDueDate } from '@/lib/vaccine-checker/routine';
import {
  getNotReceivedRoutineVisits,
  hasRoutineHistoryForReachedVisits,
} from '@/lib/vaccine-checker/routine-history';
import { type RoutineVaccineLedger } from '@/lib/vaccine-checker/routine-ledger';
import { type CheckerInput } from '@/lib/vaccine-checker/types';
import { type RoutineVisitKey } from '@/types/wizard-types';
import { isAfter } from '@/lib/vaccine-checker/date-utils';

export const ROUTINE_INFANT_HEX_VISITS: RoutineVisitKey[] = ['2months', '4months', '6months'];

export const HEXAVALENT_PRIMARY_DOSE_KEYS = [
  'hexavalentDose1',
  'hexavalentDose2',
  'hexavalentDose3',
] as const;

export type HexavalentPrimaryDoseKey = (typeof HEXAVALENT_PRIMARY_DOSE_KEYS)[number];

export const HEXAVALENT_DOSE_VISIT: Record<HexavalentPrimaryDoseKey, RoutineVisitKey> = {
  hexavalentDose1: '2months',
  hexavalentDose2: '4months',
  hexavalentDose3: '6months',
};

export const HEXAVALENT_DOSE_LABEL_KEYS: Record<HexavalentPrimaryDoseKey, string> = {
  hexavalentDose1: 'routineVaccine_hexavalentDose1',
  hexavalentDose2: 'routineVaccine_hexavalentDose2',
  hexavalentDose3: 'routineVaccine_hexavalentDose3',
};

export function getDocumentedHexavalentDoseKeys(ledger: RoutineVaccineLedger): HexavalentPrimaryDoseKey[] {
  return HEXAVALENT_PRIMARY_DOSE_KEYS.filter((key) => ledger.documentedDoseKeys.includes(key));
}

export function countDocumentedHexavalentDoses(ledger: RoutineVaccineLedger): number {
  return getDocumentedHexavalentDoseKeys(ledger).length;
}

export function isRoutinePrimaryCompletedInFirstYear(ledger: RoutineVaccineLedger): boolean {
  if (getDocumentedHexavalentDoseKeys(ledger).length < HEXAVALENT_PRIMARY_DOSE_KEYS.length) {
    return false;
  }

  return ROUTINE_INFANT_HEX_VISITS.every((visit) => ledger.receivedVisits.includes(visit));
}

/** @deprecated Use isRoutinePrimaryCompletedInFirstYear */
export const isRoutineInfantHexPrimaryComplete = isRoutinePrimaryCompletedInFirstYear;

export function getRoutineHexBoosterDate(dob: Date): Date {
  return getVisitDueDate(dob, '18months');
}

export function getLastHexavalentDoseDate(
  input: CheckerInput,
  ledger: RoutineVaccineLedger
): Date | null {
  let lastDate: Date | null = null;

  for (const doseKey of getDocumentedHexavalentDoseKeys(ledger)) {
    const visitDate = getVisitDueDate(input.dob, HEXAVALENT_DOSE_VISIT[doseKey]);
    if (!lastDate || isAfter(visitDate, lastDate)) {
      lastDate = visitDate;
    }
  }

  return lastDate;
}

export function isHexavalentBoosterReceived(ledger: RoutineVaccineLedger): boolean {
  return ledger.documentedDoseKeys.includes('dtpBooster');
}

export function getReachedHexPrimaryDoseKeys(input: CheckerInput): HexavalentPrimaryDoseKey[] {
  const reachedVisits = getDueRoutineVisits(input.dob, input.referenceDate);

  return HEXAVALENT_PRIMARY_DOSE_KEYS.filter((doseKey) =>
    reachedVisits.includes(HEXAVALENT_DOSE_VISIT[doseKey])
  );
}

export function getMissingHexPrimaryAmongReached(
  input: CheckerInput,
  ledger: RoutineVaccineLedger
): HexavalentPrimaryDoseKey[] {
  const documented = getDocumentedHexavalentDoseKeys(ledger);

  return getReachedHexPrimaryDoseKeys(input).filter((doseKey) => !documented.includes(doseKey));
}

export function getMissedRoutineVisitsForHexCatchUp(input: CheckerInput): RoutineVisitKey[] {
  const reachedVisits = getDueRoutineVisits(input.dob, input.referenceDate);

  if (
    input.routineVisitHistory &&
    hasRoutineHistoryForReachedVisits(input.routineVisitHistory, reachedVisits)
  ) {
    return getNotReceivedRoutineVisits(input.routineVisitHistory, reachedVisits);
  }

  if (input.routineVaccinesStatus === 'complete') {
    return [];
  }

  if (input.routineVaccinesStatus === 'some') {
    const completed = new Set(input.completedRoutineVisits);
    return reachedVisits.filter((visit) => !completed.has(visit));
  }

  return reachedVisits;
}

export function shouldSuppressHexCatchUp(input: CheckerInput, ledger: RoutineVaccineLedger): boolean {
  if (getMissedRoutineVisitsForHexCatchUp(input).length > 0) {
    return false;
  }

  return getMissingHexPrimaryAmongReached(input, ledger).length === 0;
}
