import { addMonths } from '@/lib/vaccine-checker/date-utils';
import type { RegressionScenario } from '@/lib/vaccine-checker/regression-lab/types';
import { baseHealthyInput, dateParts, history } from '@/lib/vaccine-checker/regression-lab/scenario-input';

function formatDate(d: Date): string {
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

/**
 * Dose history vs displayed next dose — consistency (recorded doses should not contradict card dose labels).
 */
export function buildDoseStateScenarios(): RegressionScenario[] {
  const birth = dateParts(2024, 1, 1);
  const scenarios: RegressionScenario[] = [];

  for (let months = 2; months <= 24; months += 2) {
    const asOf = addMonths(birth, months);
    const dose1 = addMonths(birth, 2);
    const id = `dose-state-pcv-1-recorded-at-${months}m`;
    scenarios.push({
      id,
      category: 'dose-state',
      title: `PCV: 1 recorded dose at ${months} months`,
      description:
        'After 1 Synflorix dose recorded, dose 1 must not still appear as due-now; next step is dose 2 or later.',
      dobLabel: formatDate(birth),
      asOfLabel: formatDate(asOf),
      buildInput: () =>
        baseHealthyInput(birth, asOf, {
          vaccineHistory: [
            history({
              category: 'pneumococcal',
              product: 'synflorix',
              numberOfDoses: 1,
              firstDoseDate: dose1,
              lastDoseDate: dose1,
              doseDates: [dose1],
            }),
          ],
        }),
      expectations: [
        {
          kind: 'excludes',
          bucket: 'dueNow',
          match: {
            vaccineCategory: 'pneumococcal',
            doseLabelKey: 'doseLabel_dose1',
          },
        },
      ],
    });
  }

  return scenarios;
}
