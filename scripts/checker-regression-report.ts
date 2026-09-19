import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  allRegressionScenarios,
  regressionScenarioStats,
} from '../src/lib/vaccine-checker/regression-lab/scenarios/all-scenarios';
import { runAllRegressionScenarios } from '../src/lib/vaccine-checker/regression-lab/run-scenario';

const stats = regressionScenarioStats();
const results = runAllRegressionScenarios(allRegressionScenarios);
const failed = results.filter((r) => !r.ok);
const passed = results.length - failed.length;

const lines: string[] = [
  '# Vaccine Checker regression report',
  '',
  `Generated: ${new Date().toISOString()}`,
  '',
  '## Summary',
  '',
  `- **Total scenarios:** ${stats.total}`,
  `- **Passed:** ${passed}`,
  `- **Failed:** ${failed.length}`,
  '',
  '### By category',
  '',
  ...Object.entries(stats)
    .filter(([k]) => k !== 'total')
    .map(([k, v]) => `- ${k}: ${v}`),
  '',
];

if (failed.length > 0) {
  lines.push('## Failures', '');
  for (const f of failed.slice(0, 50)) {
    lines.push(`### ${f.scenarioId}`, '');
    for (const msg of f.failures) lines.push(`- ${msg}`);
    lines.push('');
  }
  if (failed.length > 50) {
    lines.push(`_… and ${failed.length - 50} more._`, '');
  }
} else {
  lines.push('All scenarios passed.', '');
}

lines.push(
  '## Notes',
  '',
  '- Medical schedules were **not** modified for this report.',
  '- Age-matrix scenarios assert **engine invariants** only, not full clinical expectations.',
  '- See `docs/CHECKER-REGRESSION-AMBIGUITIES.md` for open clinical questions.',
  '',
);

const outPath = resolve(process.cwd(), 'docs/CHECKER-REGRESSION-REPORT.md');
writeFileSync(outPath, lines.join('\n'), 'utf8');
console.log(`Wrote ${outPath} (${passed}/${results.length} passed)`);
process.exit(failed.length > 0 ? 1 : 0);
