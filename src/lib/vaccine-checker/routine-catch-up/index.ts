import { buildRoutineVaccineLedger } from '@/lib/vaccine-checker/routine-ledger';
import { assessBcgCatchUp } from '@/lib/vaccine-checker/routine-catch-up/bcg-assessment';
import { assessHexavalentCatchUp } from '@/lib/vaccine-checker/routine-catch-up/hexavalent-assessment';
import {
  assessOpvCatchUp,
} from '@/lib/vaccine-checker/routine-catch-up/opv-mmr-assessment';
import { assessMmrCatchUp } from '@/lib/vaccine-checker/routine-catch-up/mmr-assessment';
import { type RoutineCatchUpAssessment } from '@/lib/vaccine-checker/routine-catch-up/types';
import { type CheckerInput } from '@/lib/vaccine-checker/types';

export function assessRoutineCatchUp(input: CheckerInput): RoutineCatchUpAssessment {
  const ledger = input.routineVaccineLedger ?? buildRoutineVaccineLedger(input);
  const bcg = assessBcgCatchUp(input, ledger);
  const hexavalent = assessHexavalentCatchUp(input, ledger);
  const opv = assessOpvCatchUp(input, ledger);
  const mmr = assessMmrCatchUp(input, ledger);

  return {
    bcg: bcg.assessment,
    hexavalent: hexavalent.assessment,
    opv,
    mmr: mmr.assessment,
    recommendations: [
      ...bcg.recommendations,
      ...hexavalent.recommendations,
      ...mmr.recommendations,
    ],
  };
}

export type {
  BcgCatchUpAssessment,
  BcgCatchUpStatus,
  HexavalentCatchUpAssessment,
  HexavalentPathway,
  MmrCatchUpAssessment,
  OpvCatchUpAssessment,
  RoutineCatchUpAssessment,
} from '@/lib/vaccine-checker/routine-catch-up/types';
