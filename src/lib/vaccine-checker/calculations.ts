import { type AdditionalVaccineCategory } from '@/types/wizard-types';
import { getHistoryForCategory } from '@/lib/vaccine-checker/input-adapter';
import {
  type CheckerInput,
  type CheckerResults,
  type RecommendationStatus,
  type RuleContext,
  type VaccineRecommendation,
} from '@/lib/vaccine-checker/types';
import { calculateRoutineMissing } from '@/lib/vaccine-checker/routine';
import { assessRoutineCatchUp } from '@/lib/vaccine-checker/routine-catch-up';
import { buildConditionalUpcomingRecommendations } from '@/lib/vaccine-checker/conditional-upcoming';
import { coordinateMmrVaricellaPlannedDates } from '@/lib/vaccine-checker/mmr-varicella-coordination';
import { collectImportantNotes } from '@/lib/vaccine-checker/result-notes';
import { enrichRecommendationsForPresentation } from '@/lib/vaccine-checker/result-presentation';
import { normalizeRecommendationTiming, getEffectiveSortDate } from '@/lib/vaccine-checker/recommendation-timing';
import { calculateRotavirus } from '@/lib/vaccine-checker/rules/rotavirus';
import { calculatePcv, calculatePcvCatchUp } from '@/lib/vaccine-checker/rules/pcv';
import { calculateMenB, calculateMenBCatchUp } from '@/lib/vaccine-checker/rules/menb';
import { calculateMenACWY } from '@/lib/vaccine-checker/rules/menacwy';
import { calculateVaricella, calculateVaricellaCatchUp } from '@/lib/vaccine-checker/rules/varicella';
import { calculateHepatitisA, calculateHepatitisACatchUp } from '@/lib/vaccine-checker/rules/hepatitis-a';
import { calculateHpv, calculateHpvCatchUp } from '@/lib/vaccine-checker/rules/hpv';
import { calculateInfluenza, calculateInfluenzaCatchUp } from '@/lib/vaccine-checker/rules/influenza';

function createContext(input: CheckerInput): RuleContext {
  return {
    input,
    dob: input.dob,
    today: input.referenceDate,
    mmrDate: input.mmrDate,
    mmrDates: input.mmrDates,
    getHistory: (category: AdditionalVaccineCategory) =>
      getHistoryForCategory(input.vaccineHistory, category),
  };
}

function sortByUrgencyThenDate(items: VaccineRecommendation[]): VaccineRecommendation[] {
  return [...items].sort((a, b) => {
    if (b.urgency !== a.urgency) {
      return b.urgency - a.urgency;
    }
    const aDate = getEffectiveSortDate(a);
    const bDate = getEffectiveSortDate(b);
    return aDate.localeCompare(bDate);
  });
}

function sortUpcoming(items: VaccineRecommendation[]): VaccineRecommendation[] {
  return [...items].sort((a, b) => {
    const aDate = getEffectiveSortDate(a) || '9999-99-99';
    const bDate = getEffectiveSortDate(b) || '9999-99-99';
    return aDate.localeCompare(bDate);
  });
}

function bucketRecommendations(recommendations: VaccineRecommendation[]): Pick<
  CheckerResults,
  'dueNow' | 'eligibleNow' | 'upcoming' | 'ageLimitPassed' | 'completed' | 'needsReview'
> {
  const dueNow: VaccineRecommendation[] = [];
  const eligibleNow: VaccineRecommendation[] = [];
  const upcoming: VaccineRecommendation[] = [];
  const ageLimitPassed: VaccineRecommendation[] = [];
  const completed: VaccineRecommendation[] = [];
  const needsReview: VaccineRecommendation[] = [];

  for (const item of recommendations) {
    switch (item.status) {
      case 'due-now':
        dueNow.push(item);
        break;
      case 'age-limit-passed':
        ageLimitPassed.push(item);
        break;
      case 'eligible-now':
        eligibleNow.push(item);
        break;
      case 'upcoming':
      case 'not-yet-eligible':
        upcoming.push(item);
        break;
      case 'completed':
        completed.push(item);
        break;
      case 'needs-review':
        needsReview.push(item);
        break;
      default:
        break;
    }
  }

  return {
    dueNow: sortByUrgencyThenDate(dueNow),
    eligibleNow: sortByUrgencyThenDate(eligibleNow),
    upcoming: sortUpcoming(upcoming),
    ageLimitPassed: sortByUrgencyThenDate(ageLimitPassed),
    completed,
    needsReview,
  };
}

function collectImportantNotesFromRecommendations(recommendations: VaccineRecommendation[]): string[] {
  return collectImportantNotes(recommendations);
}

export function calculateVaccineRecommendations(input: CheckerInput): CheckerResults {
  const ctx = createContext(input);
  const routineCatchUpAssessment = assessRoutineCatchUp(input);

  const allRecommendations: VaccineRecommendation[] = [
    ...routineCatchUpAssessment.recommendations,
    ...calculateRotavirus(ctx),
    ...(ctx.getHistory('pneumococcal') ? calculatePcv(ctx) : calculatePcvCatchUp(ctx)),
    ...(ctx.getHistory('meningococcalB') ? calculateMenB(ctx) : calculateMenBCatchUp(ctx)),
    ...calculateMenACWY(ctx),
    ...(ctx.getHistory('varicella') ? calculateVaricella(ctx) : calculateVaricellaCatchUp(ctx)),
    ...(ctx.getHistory('hepatitisA') ? calculateHepatitisA(ctx) : calculateHepatitisACatchUp(ctx)),
    ...(ctx.getHistory('hpv') ? calculateHpv(ctx) : calculateHpvCatchUp(ctx)),
    ...(ctx.getHistory('influenza') ? calculateInfluenza(ctx) : calculateInfluenzaCatchUp(ctx)),
  ];

  const coordinatedRecommendations = coordinateMmrVaricellaPlannedDates(
    allRecommendations,
    input
  );

  const conditionalUpcoming = buildConditionalUpcomingRecommendations(coordinatedRecommendations, ctx);
  const combinedRecommendations = enrichRecommendationsForPresentation(input, [
    ...coordinatedRecommendations,
    ...conditionalUpcoming,
  ]).map((item) => normalizeRecommendationTiming(item, input.referenceDate));

  const buckets = bucketRecommendations(combinedRecommendations);
  const routineMissing = calculateRoutineMissing(input);

  return {
    ...buckets,
    routineMissing,
    routineCatchUpAssessment,
    importantNotes: collectImportantNotesFromRecommendations(combinedRecommendations),
  };
}

export function getStatusTranslationKey(status: RecommendationStatus): string {
  return `status_${status.replace(/-/g, '_')}`;
}
