import { addDays } from '@/lib/vaccine-checker/date-utils';
import type { RegressionScenario } from '@/lib/vaccine-checker/regression-lab/types';
import { baseHealthyInput, dateParts } from '@/lib/vaccine-checker/regression-lab/scenario-input';

const ANCHOR_DOB = dateParts(2022, 3, 10);
const MIN_AGE_DAYS = 42; // 6 weeks
const MAX_AGE_DAYS = 365 * 5; // 5 years
const STEP_DAYS = 7;

function formatDdMmYyyy(d: Date): string {
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
}

/** Healthy child, routine complete, no additional history — engine smoke + invariants across ages. */
export function buildAgeMatrixScenarios(): RegressionScenario[] {
  const scenarios: RegressionScenario[] = [];

  for (let ageDays = MIN_AGE_DAYS; ageDays <= MAX_AGE_DAYS; ageDays += STEP_DAYS) {
    const asOf = addDays(ANCHOR_DOB, ageDays);
    const id = `age-matrix-${ageDays}d`;
    scenarios.push({
      id,
      category: 'age-matrix',
      title: `Healthy routine-complete child at ${ageDays} days since DOB`,
      description:
        'Software regression: calculation completes; IDs unique; dates ISO-shaped. Does not assert a specific medical schedule row.',
      dobLabel: formatDdMmYyyy(ANCHOR_DOB),
      asOfLabel: formatDdMmYyyy(asOf),
      buildInput: () =>
        baseHealthyInput(ANCHOR_DOB, asOf, {
          routineVaccinesStatus: 'complete',
          vaccineHistory: [],
        }),
      expectations: [],
    });
  }

  return scenarios;
}

export const ageMatrixScenarioCount = Math.floor((MAX_AGE_DAYS - MIN_AGE_DAYS) / STEP_DAYS) + 1;
