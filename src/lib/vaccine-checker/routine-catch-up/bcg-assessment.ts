import { ageInWholeMonths } from '@/lib/vaccine-checker/date-utils';
import { getDueRoutineVisits } from '@/lib/vaccine-checker/routine';
import { type RoutineVaccineLedger } from '@/lib/vaccine-checker/routine-ledger';
import { iso, makeRecommendation, type CheckerInput, type VaccineRecommendation } from '@/lib/vaccine-checker/types';
import { type BcgCatchUpAssessment, type BcgCatchUpStatus } from '@/lib/vaccine-checker/routine-catch-up/types';

const BCG_VISIT_AGE_MONTHS = 1;

export function assessBcgCatchUp(
  input: CheckerInput,
  ledger: RoutineVaccineLedger
): { assessment: BcgCatchUpAssessment; recommendations: VaccineRecommendation[] } {
  const ageMonths = ageInWholeMonths(input.dob, input.referenceDate);
  const received = ledger.bySeries.bcg.received;
  const bcgVisitReached = getDueRoutineVisits(input.dob, input.referenceDate).includes('1month');

  if (received) {
    return {
      assessment: { status: 'received', received: true },
      recommendations: [],
    };
  }

  if (!bcgVisitReached || ageMonths < BCG_VISIT_AGE_MONTHS) {
    return {
      assessment: { status: 'not_yet_due', received: false },
      recommendations: [],
    };
  }

  const status: BcgCatchUpStatus =
    ageMonths > 6 ? 'tuberculin_required' : 'missed_age_lte_6_months';

  if (status === 'tuberculin_required') {
    return {
      assessment: { status, received: false },
      recommendations: [
        makeRecommendation({
          id: 'routine-bcg-tuberculin-prerequisite',
          vaccineCategory: 'routine',
          routineVaccineKey: 'bcg',
          doseLabelKey: 'routineVaccine_bcg',
          status: 'needs-review',
          noteKeys: ['note_bcgTuberculinRequired'],
          reasonKey: 'reason_bcgTuberculinRequired',
        }),
      ],
    };
  }

  return {
    assessment: { status, received: false },
    recommendations: [
      makeRecommendation({
        id: 'routine-bcg-catch-up',
        vaccineCategory: 'routine',
        routineVaccineKey: 'bcg',
        doseLabelKey: 'routineVaccine_bcg',
        status: 'eligible-now',
        noteKeys: [],
      }),
    ],
  };
}
