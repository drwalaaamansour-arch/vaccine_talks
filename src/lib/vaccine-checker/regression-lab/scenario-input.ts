import { type CheckerInput, type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';

export function dateParts(y: number, m: number, d: number): Date {
  return new Date(y, m - 1, d);
}

export function baseHealthyInput(
  birth: Date,
  today: Date,
  overrides: Partial<CheckerInput> = {},
): CheckerInput {
  const merged = {
    dob: birth,
    referenceDate: today,
    routineVaccinesStatus: 'complete' as const,
    completedRoutineVisits: [] as CheckerInput['completedRoutineVisits'],
    vaccineHistory: [] as VaccineHistoryRecord[],
    ...overrides,
  };
  const mmrDate = merged.mmrDate ?? null;
  const mmrDose2Date = merged.mmrDose2Date ?? null;
  const mmrDates = merged.mmrDates ?? [
    ...(mmrDate ? [mmrDate] : []),
    ...(mmrDose2Date ? [mmrDose2Date] : []),
  ].sort((a, b) => a.getTime() - b.getTime());

  return {
    ...merged,
    mmrDate,
    mmrDose2Date,
    mmrDates,
  };
}

export function history(record: VaccineHistoryRecord): VaccineHistoryRecord {
  return record;
}
