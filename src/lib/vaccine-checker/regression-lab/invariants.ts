import type { CheckerInput, CheckerResults, RecommendationStatus } from '@/lib/vaccine-checker/types';
import { allItems } from '@/lib/vaccine-checker/regression-lab/matchers';

const ISO = /^\d{4}-\d{2}-\d{2}$/;
const VALID_STATUS: RecommendationStatus[] = [
  'due-now',
  'eligible-now',
  'upcoming',
  'completed',
  'not-yet-eligible',
  'age-limit-passed',
  'needs-review',
];

/** Software/consistency checks — not medical schedule assertions. */
export function runEngineInvariants(results: CheckerResults, input: CheckerInput): string[] {
  const failures: string[] = [];
  const items = allItems(results);

  const ids = items.map((i) => i.id);
  const uniqueIds = new Set(ids);
  if (uniqueIds.size !== ids.length) {
    failures.push('Duplicate recommendation ids in result buckets.');
  }

  if (input.referenceDate.getTime() < input.dob.getTime()) {
    failures.push('referenceDate is before dob (invalid input survived).');
  }

  for (const item of items) {
    if (!item.doseLabelKey?.trim()) {
      failures.push(`Missing doseLabelKey on ${item.id}.`);
    }
    if (!VALID_STATUS.includes(item.status)) {
      failures.push(`Invalid status "${item.status}" on ${item.id}.`);
    }
    if (item.recommendedDate !== undefined && item.recommendedDate !== '' && !ISO.test(item.recommendedDate)) {
      failures.push(`Non-ISO recommendedDate "${item.recommendedDate}" on ${item.id}.`);
    }
    /* conditionalProjectedFromDate is not set on all conditional rows today — see CHECKER-REGRESSION-AMBIGUITIES.md */
    if (item.historicalRecommendedDate && !ISO.test(item.historicalRecommendedDate)) {
      failures.push(`Invalid historicalRecommendedDate on ${item.id}.`);
    }
  }

  return failures;
}
