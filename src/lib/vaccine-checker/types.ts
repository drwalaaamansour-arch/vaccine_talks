import { type AdditionalVaccineCategory, type DateOfBirth, type RoutineVisitKey } from '@/types/wizard-types';
import { type RoutineVisitHistory } from '@/lib/vaccine-checker/routine-history';
import { type RoutineVaccineLedger } from '@/lib/vaccine-checker/routine-ledger';
import { type RoutineCatchUpAssessment } from '@/lib/vaccine-checker/routine-catch-up/types';

export type RecommendationStatus =
  | 'due-now'
  | 'eligible-now'
  | 'upcoming'
  | 'completed'
  | 'not-yet-eligible'
  | 'age-limit-passed'
  | 'needs-review';

export type VaccineCategory =
  | AdditionalVaccineCategory
  | 'routine';

export type TimingKind =
  | 'FIXED_DATE'
  | 'RECOMMENDED_WINDOW'
  | 'MINIMUM_START_ONLY'
  | 'AGE_LIMIT_RANGE';

export type VaccineRecommendation = {
  id: string;
  vaccineCategory: VaccineCategory;
  product?: string;
  doseLabelKey: string;
  status: RecommendationStatus;
  timingKind?: TimingKind;
  recommendedDate?: string;
  windowStart?: string;
  windowEnd?: string;
  minimumValidDate?: string;
  earliestDate?: string;
  latestDate?: string;
  pastPreferredWindow?: boolean;
  noteKeys: string[];
  reasonKey?: string;
  urgency: number;
  visitKey?: RoutineVisitKey;
  routineVaccineKey?: string;
  conditionalNextDose?: boolean;
  conditionalProjectedFromDate?: string;
  recommendedDateLabelKey?: 'resultRecommendedDate' | 'resultOriginalRecommendedDate';
  historicalRecommendedDate?: string;
};

export type RoutineMissingItem = {
  visitKey: RoutineVisitKey;
  vaccineKeys: string[];
  visitLabelKey: string;
};

export type VaccineHistoryRecord = {
  category: AdditionalVaccineCategory;
  product?: string;
  numberOfDoses: number;
  lastDoseDate: Date | null;
  firstDoseDate: Date | null;
  doseDates: Date[];
  influenzaPrimingComplete?: boolean;
};

export type CheckerInput = {
  dob: Date;
  referenceDate: Date;
  mmrDate: Date | null;
  mmrDose2Date?: Date | null;
  mmrDates: Date[];
  routineVaccinesStatus: 'complete' | 'some' | 'none';
  completedRoutineVisits: RoutineVisitKey[];
  routineVisitHistory?: RoutineVisitHistory;
  routineVaccineLedger?: RoutineVaccineLedger;
  vaccineHistory: VaccineHistoryRecord[];
};

export type CheckerResults = {
  dueNow: VaccineRecommendation[];
  eligibleNow: VaccineRecommendation[];
  upcoming: VaccineRecommendation[];
  ageLimitPassed: VaccineRecommendation[];
  routineMissing: RoutineMissingItem[];
  completed: VaccineRecommendation[];
  importantNotes: string[];
  needsReview: VaccineRecommendation[];
  routineCatchUpAssessment?: RoutineCatchUpAssessment;
};

export type RuleContext = {
  input: CheckerInput;
  dob: Date;
  today: Date;
  mmrDate: Date | null;
  mmrDates: Date[];
  getHistory: (category: AdditionalVaccineCategory) => VaccineHistoryRecord | undefined;
};

export function makeRecommendation(
  partial: Omit<VaccineRecommendation, 'urgency'> & { urgency?: number }
): VaccineRecommendation {
  return {
    urgency: partial.urgency ?? defaultUrgency(partial.status),
    ...partial,
  };
}

function defaultUrgency(status: RecommendationStatus): number {
  switch (status) {
    case 'age-limit-passed':
      return 100;
    case 'due-now':
      return 90;
    case 'eligible-now':
      return 70;
    case 'needs-review':
      return 60;
    case 'upcoming':
      return 40;
    case 'not-yet-eligible':
      return 20;
    case 'completed':
      return 0;
    default:
      return 0;
  }
}

export function iso(date: Date | null | undefined): string | undefined {
  if (!date) return undefined;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function dateFromParts(parts: DateOfBirth | null | undefined): Date | null {
  if (!parts) return null;
  return new Date(parts.year, parts.month - 1, parts.day);
}
