import { describe, expect, it } from 'vitest';
import {
  buildRoutineVisitHistory,
  getReceivedRoutineVisits,
} from '@/lib/vaccine-checker/routine-history';
import { buildRoutineVaccineLedger } from '@/lib/vaccine-checker/routine-ledger';
import { getDueRoutineVisits } from '@/lib/vaccine-checker/routine';
import { attachRoutineVaccineLedger, wizardStateToCheckerInput } from '@/lib/vaccine-checker/input-adapter';
import { buildDateParts, type WizardState } from '@/types/wizard-types';
import { type CheckerInput } from '@/lib/vaccine-checker/types';

const dob = new Date(2025, 7, 30);
const today = new Date(2026, 7, 30);

function inputWithHistory(
  status: 'complete' | 'some' | 'none',
  selectedVisits: string[] = []
): CheckerInput {
  const reached = getDueRoutineVisits(dob, today);
  const history = buildRoutineVisitHistory(
    status,
    reached,
    status === 'some' ? (selectedVisits as typeof reached) : []
  );

  return attachRoutineVaccineLedger({
    dob,
    referenceDate: today,
    mmrDate: null,
    mmrDates: [],
    routineVaccinesStatus: status,
    completedRoutineVisits: getReceivedRoutineVisits(history, reached),
    routineVisitHistory: history,
    vaccineHistory: [],
  });
}

function baseState(overrides: Partial<WizardState> = {}): WizardState {
  return {
    language: 'en',
    dateOfBirth: buildDateParts({ day: 30, month: 8, year: 2025 }),
    calculatedAge: { years: 1, months: 0, days: 0 },
    medicalCondition: { hasCondition: false, showStopMessage: false },
    routineVaccinesStatus: 'some',
    routineVisitHistory: {},
    completedRoutineVisits: [],
    mmrDate: null,
    mmrDose2Date: null,
    additionalVaccinesHistoryAnswer: null,
    additionalVaccines: [],
    currentStep: 'review',
    showResults: false,
    showDisclaimer: false,
    ...overrides,
  };
}

const PHASE_2A_RECEIVED_DOSES = [
  'hepatitisB',
  'opvDose1',
  'hexavalentDose1',
  'opvDose2',
  'hexavalentDose2',
  'mmrDose1',
  'opvBooster1',
];

describe('routine vaccine dose ledger phase 2A', () => {
  const reached = getDueRoutineVisits(dob, today);

  it('maps Birth + 2m + 4m + 12m received visits to the configured dose ledger', () => {
    const ledger = buildRoutineVaccineLedger(
      inputWithHistory('some', ['birth', '2months', '4months', '12months'])
    );

    expect(ledger.receivedVisits).toEqual(['birth', '2months', '4months', '12months']);
    expect(ledger.documentedDoseKeys).toEqual(PHASE_2A_RECEIVED_DOSES);
    expect(ledger.documentedDoseKeys).not.toContain('opv');
    expect(ledger.documentedDoseKeys).not.toContain('bcg');
    expect(ledger.documentedDoseKeys).not.toContain('opvDose3');
    expect(ledger.documentedDoseKeys).not.toContain('hexavalentDose3');
    expect(ledger.documentedDoseKeys).not.toContain('opvDose4');
    expect(ledger.bySeries.mmr.documentedDoseKeys).toEqual(['mmrDose1']);
    expect(ledger.bySeries.bcg.received).toBe(false);
    expect(ledger.bySeries.polioOpv.documentedDoseKeys).toEqual([
      'opvDose1',
      'opvDose2',
      'opvBooster1',
    ]);
  });

  it('A. ALL reached visits received builds the full ledger for age 12 months', () => {
    const ledger = buildRoutineVaccineLedger(inputWithHistory('complete'));

    expect(ledger.receivedVisits).toEqual(reached);
    expect(ledger.documentedDoseKeys).toEqual([
      'hepatitisB',
      'bcg',
      'opv',
      'opvDose1',
      'hexavalentDose1',
      'opvDose2',
      'hexavalentDose2',
      'opvDose3',
      'hexavalentDose3',
      'opvDose4',
      'mmrDose1',
      'opvBooster1',
    ]);
    expect(ledger.bySeries.bcg.received).toBe(true);
  });

  it('B. SOME counts doses only from selected received visits', () => {
    const ledger = buildRoutineVaccineLedger(
      inputWithHistory('some', ['birth', '2months', '4months', '12months'])
    );

    expect(ledger.documentedDoseKeys).toEqual(PHASE_2A_RECEIVED_DOSES);
    expect(ledger.bySeries.dtpContaining.documentedDoseKeys).toEqual([
      'hexavalentDose1',
      'hexavalentDose2',
    ]);
    expect(ledger.bySeries.hib.documentedDoseKeys).toEqual(['hexavalentDose1', 'hexavalentDose2']);
  });

  it('C. NONE produces no documented routine doses from reached visits', () => {
    const ledger = buildRoutineVaccineLedger(inputWithHistory('none'));

    expect(ledger.receivedVisits).toEqual([]);
    expect(ledger.documentedDoseKeys).toEqual([]);
    expect(ledger.bySeries.mmr.documentedDoseKeys).toEqual([]);
    expect(ledger.bySeries.bcg.received).toBe(false);
  });

  it('D. future 18-month visit never contributes doses at age 12 months', () => {
    const ledger = buildRoutineVaccineLedger(inputWithHistory('complete'));

    expect(ledger.documentedDoseKeys).not.toContain('mmrDose2');
    expect(ledger.documentedDoseKeys).not.toContain('dtpBooster');
    expect(ledger.documentedDoseKeys).not.toContain('opvBooster2');
    expect(ledger.receivedVisits).not.toContain('18months');
  });

  it('E. selected 12-month visit counts its configured MMR dose', () => {
    const ledger = buildRoutineVaccineLedger(
      inputWithHistory('some', ['12months'])
    );

    expect(ledger.bySeries.mmr.documentedDoseKeys).toEqual(['mmrDose1']);
    expect(ledger.bySeries.mmr.doseCount).toBe(1);
  });

  it('F. missed 12-month visit does not count its MMR dose', () => {
    const ledger = buildRoutineVaccineLedger(
      inputWithHistory('some', ['birth', '2months', '4months'])
    );

    expect(ledger.bySeries.mmr.documentedDoseKeys).toEqual([]);
    expect(ledger.documentedDoseKeys).not.toContain('mmrDose1');
  });

  it('attaches the ledger through wizardStateToCheckerInput', () => {
    const reachedVisits = getDueRoutineVisits(dob, today);
    const history = buildRoutineVisitHistory('some', reachedVisits, [
      'birth',
      '2months',
      '4months',
      '12months',
    ]);
    const input = wizardStateToCheckerInput(
      baseState({
        routineVaccinesStatus: 'some',
        routineVisitHistory: history,
        completedRoutineVisits: getReceivedRoutineVisits(history, reachedVisits),
      }),
      today
    );

    expect(input?.routineVaccineLedger?.documentedDoseKeys).toEqual(PHASE_2A_RECEIVED_DOSES);
  });

  it('keeps explicit MMR dates separate without duplicating ledger doses', () => {
    const reachedVisits = getDueRoutineVisits(dob, today);
    const history = buildRoutineVisitHistory('some', reachedVisits, ['12months']);
    const mmrDate = buildDateParts({ day: 30, month: 8, year: 2026 });
    const input = wizardStateToCheckerInput(
      baseState({
        routineVaccinesStatus: 'some',
        routineVisitHistory: history,
        completedRoutineVisits: ['12months'],
        mmrDate,
      }),
      today
    );

    expect(input?.mmrDate).not.toBeNull();
    expect(input?.routineVaccineLedger?.bySeries.mmr.documentedDoseKeys).toEqual(['mmrDose1']);
    expect(input?.routineVaccineLedger?.documentedDoseKeys.filter((key) => key.startsWith('mmr'))).toEqual([
      'mmrDose1',
    ]);
  });
});
