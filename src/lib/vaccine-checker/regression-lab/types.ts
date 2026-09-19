import type { CheckerInput, CheckerResults, VaccineRecommendation } from '@/lib/vaccine-checker/types';

export type ScenarioCategory =
  | 'canonical-historical'
  | 'age-matrix'
  | 'interval-boundary'
  | 'dose-state'
  | 'language-parity';

export type ResultBucket =
  | 'dueNow'
  | 'eligibleNow'
  | 'upcoming'
  | 'ageLimitPassed'
  | 'completed'
  | 'needsReview';

export type RecommendationMatcher = {
  vaccineCategory: string;
  doseLabelKey?: string;
  conditionalNextDose?: boolean;
  product?: string;
  status?: string;
  /** Omit to skip date check. Use `null` to require no recommendedDate. */
  recommendedDate?: string | null;
};

export type BucketExpectation =
  | { kind: 'includes'; bucket: ResultBucket; match: RecommendationMatcher; count?: number }
  | { kind: 'excludes'; bucket: ResultBucket; match: RecommendationMatcher }
  | { kind: 'absentEverywhere'; match: RecommendationMatcher };

export type RegressionScenario = {
  id: string;
  title: string;
  description: string;
  category: ScenarioCategory;
  /** Known bug class this guards (if any). */
  historicalBugTag?: string;
  /** DD/MM/YYYY for human docs */
  dobLabel: string;
  asOfLabel: string;
  buildInput: () => CheckerInput;
  expectations: BucketExpectation[];
  /** Extra software/consistency validation (not medical rule changes). */
  validate?: (results: CheckerResults, input: CheckerInput) => string[];
};

export type ScenarioRunResult = {
  scenarioId: string;
  ok: boolean;
  failures: string[];
};

export type RecommendationSnapshot = Pick<
  VaccineRecommendation,
  | 'vaccineCategory'
  | 'doseLabelKey'
  | 'status'
  | 'recommendedDate'
  | 'conditionalNextDose'
  | 'product'
>;
