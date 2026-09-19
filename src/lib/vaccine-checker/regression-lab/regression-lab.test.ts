import { describe, expect, it } from 'vitest';
import {
  allRegressionScenarios,
  regressionScenarioStats,
} from '@/lib/vaccine-checker/regression-lab/scenarios/all-scenarios';
import { runAllRegressionScenarios } from '@/lib/vaccine-checker/regression-lab/run-scenario';

describe('Checker regression lab catalog', () => {
  it('includes at least 200 meaningful patient scenarios', () => {
    const stats = regressionScenarioStats();
    expect(stats.total).toBeGreaterThanOrEqual(200);
    expect(stats['age-matrix']).toBeGreaterThanOrEqual(150);
    expect(stats['canonical-historical']).toBeGreaterThanOrEqual(6);
  });

  it('runs all scenarios successfully', () => {
    const results = runAllRegressionScenarios(allRegressionScenarios);
    const failed = results.filter((r) => !r.ok);
    if (failed.length > 0) {
      const sample = failed
        .slice(0, 5)
        .map((f) => `${f.scenarioId}:\n  ${f.failures.join('\n  ')}`)
        .join('\n\n');
      expect.fail(`${failed.length} scenario(s) failed.\n\n${sample}`);
    }
    expect(failed).toEqual([]);
  });
});
