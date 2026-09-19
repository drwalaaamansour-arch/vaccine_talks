import { canonicalRegressionScenarios } from '@/lib/vaccine-checker/regression-lab/scenarios/canonical-scenarios';
import { buildAgeMatrixScenarios } from '@/lib/vaccine-checker/regression-lab/scenarios/generate-age-matrix-scenarios';
import { buildDoseStateScenarios } from '@/lib/vaccine-checker/regression-lab/scenarios/dose-state-scenarios';
import { buildPcvRemainingScheduleScenarios } from '@/lib/vaccine-checker/regression-lab/scenarios/pcv-remaining-schedule-scenarios';
import { buildIntervalBoundaryScenarios } from '@/lib/vaccine-checker/regression-lab/scenarios/interval-boundary-scenarios';
import type { RegressionScenario } from '@/lib/vaccine-checker/regression-lab/types';

export const allRegressionScenarios: RegressionScenario[] = [
  ...canonicalRegressionScenarios,
  ...buildIntervalBoundaryScenarios(),
  ...buildDoseStateScenarios(),
  ...buildPcvRemainingScheduleScenarios(),
  ...buildAgeMatrixScenarios(),
];

export function regressionScenarioStats(): Record<string, number> {
  const stats: Record<string, number> = {};
  for (const s of allRegressionScenarios) {
    stats[s.category] = (stats[s.category] ?? 0) + 1;
  }
  stats.total = allRegressionScenarios.length;
  return stats;
}
