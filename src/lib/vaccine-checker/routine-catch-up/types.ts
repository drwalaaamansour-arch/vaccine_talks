import { type VaccineRecommendation } from '@/lib/vaccine-checker/types';

export type BcgCatchUpStatus =
  | 'received'
  | 'not_yet_due'
  | 'missed_age_lte_6_months'
  | 'tuberculin_required';

export type HexavalentPathway =
  | 'FIRST_YEAR_3_DOSE'
  | 'AGE_12M_PLUS_NO_PRIOR_2_DOSE'
  | 'AGE_12M_PLUS_ONE_PRIOR_2_DOSE'
  | 'AGE_12M_PLUS_TWO_PRIOR_1_REMAINING'
  | 'ROUTINE_PRIMARY_COMPLETED_IN_FIRST_YEAR'
  | 'SECOND_YEAR_CATCHUP_PRIMARY_COMPLETE';

export type ScheduledRoutineCatchUpDose = {
  doseKey: string;
  doseLabelKey: string;
  recommendedDate?: string;
  minimumValidDate?: string;
  status: 'due-now' | 'upcoming' | 'not-yet-eligible';
};

export type BcgCatchUpAssessment = {
  status: BcgCatchUpStatus;
  received: boolean;
};

export type HexavalentCatchUpAssessment = {
  documentedDoseCount: number;
  documentedDoseKeys: string[];
  pathway: HexavalentPathway;
  targetPrimaryDoses: number;
  remainingPrimaryDoses: number;
  scheduledPrimaryDoses: ScheduledRoutineCatchUpDose[];
  boosterDate?: string;
  boosterReceived: boolean;
  noteKeys: string[];
  reasonKey?: string;
};

export type OpvCatchUpAssessment = {
  documentedDoseKeys: string[];
  missedOpvVisitKeys: string[];
  showHealthOfficeNote: boolean;
};

export type MmrCatchUpStatus = 'not_yet_due' | 'catch_up' | 'completed';

export type MmrCatchUpAssessment = {
  documentedDoseCount: number;
  documentedDoseKeys: string[];
  dose1Date?: string;
  dose2Date?: string;
  scheduledDose2Date?: string;
  status: MmrCatchUpStatus;
};

export type RoutineCatchUpAssessment = {
  bcg: BcgCatchUpAssessment;
  hexavalent: HexavalentCatchUpAssessment;
  opv: OpvCatchUpAssessment;
  mmr: MmrCatchUpAssessment;
  recommendations: VaccineRecommendation[];
};
