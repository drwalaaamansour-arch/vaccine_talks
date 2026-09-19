import type { RecommendationMatcher, RecommendationSnapshot, ResultBucket } from '@/lib/vaccine-checker/regression-lab/types';
import type { VaccineRecommendation } from '@/lib/vaccine-checker/types';

export function bucketItems(
  results: ReturnType<typeof import('@/lib/vaccine-checker/calculations').calculateVaccineRecommendations>,
  bucket: ResultBucket,
): VaccineRecommendation[] {
  return results[bucket];
}

export function allItems(
  results: ReturnType<typeof import('@/lib/vaccine-checker/calculations').calculateVaccineRecommendations>,
): VaccineRecommendation[] {
  return [
    ...results.dueNow,
    ...results.eligibleNow,
    ...results.upcoming,
    ...results.ageLimitPassed,
    ...results.completed,
    ...results.needsReview,
  ];
}

function matches(item: RecommendationSnapshot, match: RecommendationMatcher): boolean {
  if (item.vaccineCategory !== match.vaccineCategory) return false;
  if (match.doseLabelKey !== undefined && item.doseLabelKey !== match.doseLabelKey) return false;
  if (match.conditionalNextDose !== undefined) {
    const itemConditional = Boolean(item.conditionalNextDose);
    const wantConditional = match.conditionalNextDose;
    if (itemConditional !== wantConditional) return false;
  }
  if (match.product !== undefined && item.product !== match.product) return false;
  if (match.status !== undefined && item.status !== match.status) return false;
  if (match.recommendedDate !== undefined) {
    const date = item.recommendedDate ?? null;
    if (match.recommendedDate === null) {
      if (date !== null && date !== undefined && date !== '') return false;
    } else if (date !== match.recommendedDate) {
      return false;
    }
  }
  return true;
}

export function findMatches(items: RecommendationSnapshot[], match: RecommendationMatcher): RecommendationSnapshot[] {
  return items.filter((item) => matches(item, match));
}

export function formatItem(item: RecommendationSnapshot): string {
  const parts = [
    item.vaccineCategory,
    item.doseLabelKey,
    item.status,
    item.product ?? '',
    item.recommendedDate ?? '(no date)',
    item.conditionalNextDose ? 'conditional' : '',
  ].filter(Boolean);
  return parts.join(' · ');
}
