import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { allItems, bucketItems, findMatches, formatItem } from '@/lib/vaccine-checker/regression-lab/matchers';
import { runEngineInvariants } from '@/lib/vaccine-checker/regression-lab/invariants';
import type { RegressionScenario, ScenarioRunResult } from '@/lib/vaccine-checker/regression-lab/types';

export function runRegressionScenario(scenario: RegressionScenario): ScenarioRunResult {
  const failures: string[] = [];
  const input = scenario.buildInput();
  const results = calculateVaccineRecommendations(input);

  failures.push(...runEngineInvariants(results, input));

  for (const rule of scenario.expectations) {
    if (rule.kind === 'includes') {
      const items = bucketItems(results, rule.bucket);
      const hits = findMatches(items, rule.match);
      const need = rule.count ?? 1;
      if (hits.length < need) {
        failures.push(
          `Expected ${need}+ in ${rule.bucket} matching ${JSON.stringify(rule.match)}; found ${hits.length}. Bucket: ${items.map(formatItem).join('; ') || '(empty)'}`,
        );
      }
      continue;
    }

    if (rule.kind === 'excludes') {
      const items = bucketItems(results, rule.bucket);
      const hits = findMatches(items, rule.match);
      if (hits.length > 0) {
        failures.push(
          `Expected none in ${rule.bucket} matching ${JSON.stringify(rule.match)}; found: ${hits.map(formatItem).join('; ')}`,
        );
      }
      continue;
    }

    const hits = findMatches(allItems(results), rule.match);
    if (hits.length > 0) {
      failures.push(
        `Expected absent everywhere matching ${JSON.stringify(rule.match)}; found: ${hits.map(formatItem).join('; ')}`,
      );
    }
  }

  if (scenario.validate) {
    failures.push(...scenario.validate(results, input));
  }

  return {
    scenarioId: scenario.id,
    ok: failures.length === 0,
    failures,
  };
}

export function runAllRegressionScenarios(scenarios: RegressionScenario[]): ScenarioRunResult[] {
  return scenarios.map(runRegressionScenario);
}
