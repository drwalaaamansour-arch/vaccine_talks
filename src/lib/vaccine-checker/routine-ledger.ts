import {
  getReceivedRoutineVisits,
  hasRoutineHistoryForReachedVisits,
} from '@/lib/vaccine-checker/routine-history';
import { getDueRoutineVisits } from '@/lib/vaccine-checker/routine';
import {
  ROUTINE_ANTIGEN_SERIES_ORDER,
  ROUTINE_VISIT_DOSES,
  ROUTINE_VISIT_ORDER,
  type RoutineAntigenSeries,
  type RoutineScheduleDose,
} from '@/lib/vaccine-checker/routine-schedule';
import { type CheckerInput } from '@/lib/vaccine-checker/types';
import { type RoutineVisitKey } from '@/types/wizard-types';

export type RoutineSeriesLedgerEntry = {
  series: RoutineAntigenSeries;
  documentedDoseKeys: string[];
  doseCount: number;
  received: boolean;
};

export type RoutineVaccineLedger = {
  receivedVisits: RoutineVisitKey[];
  documentedDoseKeys: string[];
  bySeries: Record<RoutineAntigenSeries, RoutineSeriesLedgerEntry>;
};

function emptySeriesEntry(series: RoutineAntigenSeries): RoutineSeriesLedgerEntry {
  return {
    series,
    documentedDoseKeys: [],
    doseCount: 0,
    received: false,
  };
}

function createEmptyLedger(): Record<RoutineAntigenSeries, RoutineSeriesLedgerEntry> {
  return Object.fromEntries(
    ROUTINE_ANTIGEN_SERIES_ORDER.map((series) => [series, emptySeriesEntry(series)])
  ) as Record<RoutineAntigenSeries, RoutineSeriesLedgerEntry>;
}

export function getReceivedRoutineVisitsFromInput(input: CheckerInput): RoutineVisitKey[] {
  const reachedVisits = getDueRoutineVisits(input.dob, input.referenceDate);

  if (
    input.routineVisitHistory &&
    hasRoutineHistoryForReachedVisits(input.routineVisitHistory, reachedVisits)
  ) {
    return getReceivedRoutineVisits(input.routineVisitHistory, reachedVisits);
  }

  if (input.routineVaccinesStatus === 'complete') {
    return reachedVisits;
  }

  if (input.routineVaccinesStatus === 'some') {
    return input.completedRoutineVisits.filter((visit) => reachedVisits.includes(visit));
  }

  return [];
}

function recordDoseInLedger(
  bySeries: Record<RoutineAntigenSeries, RoutineSeriesLedgerEntry>,
  dose: RoutineScheduleDose
): void {
  for (const contribution of dose.contributions) {
    const entry = bySeries[contribution.series];
    if (!entry.documentedDoseKeys.includes(dose.doseKey)) {
      entry.documentedDoseKeys.push(dose.doseKey);
    }
    entry.doseCount = entry.documentedDoseKeys.length;
    entry.received = entry.doseCount > 0;
  }
}

export function buildRoutineVaccineLedger(input: CheckerInput): RoutineVaccineLedger {
  const receivedVisits = getReceivedRoutineVisitsFromInput(input);
  const bySeries = createEmptyLedger();
  const documentedDoseKeys: string[] = [];

  for (const visit of ROUTINE_VISIT_ORDER) {
    if (!receivedVisits.includes(visit)) {
      continue;
    }

    for (const dose of ROUTINE_VISIT_DOSES[visit]) {
      if (!documentedDoseKeys.includes(dose.doseKey)) {
        documentedDoseKeys.push(dose.doseKey);
      }
      recordDoseInLedger(bySeries, dose);
    }
  }

  if (bySeries.bcg.doseCount === 0) {
    bySeries.bcg.received = false;
  }

  return {
    receivedVisits,
    documentedDoseKeys,
    bySeries,
  };
}

export function isSingleDoseSeries(series: RoutineAntigenSeries): boolean {
  return series === 'bcg';
}
