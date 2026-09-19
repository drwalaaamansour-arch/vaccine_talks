import type { RegressionScenario } from '@/lib/vaccine-checker/regression-lab/types';
import { baseHealthyInput, dateParts, history } from '@/lib/vaccine-checker/regression-lab/scenario-input';

const birth = dateParts(2026, 1, 19);
const dose1 = dateParts(2026, 3, 19);
const dose2 = dateParts(2026, 5, 19);
const dose3 = dateParts(2026, 7, 19);
const asOf = dateParts(2026, 9, 19);

function infantOneDoseScenario(product: string, id: string): RegressionScenario {
  return {
    id,
    category: 'dose-state',
    title: `PCV remaining: ${product} infant 1 dose — dose 3 & booster conditional`,
    description: 'Start before 7 months; full remaining schedule on results.',
    dobLabel: '19/01/2026',
    asOfLabel: '19/09/2026',
    buildInput: () =>
      baseHealthyInput(birth, asOf, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product,
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      }),
    expectations: [
      {
        kind: 'includes',
        bucket: 'dueNow',
        match: { vaccineCategory: 'pneumococcal', product, doseLabelKey: 'doseLabel_dose2' },
      },
      {
        kind: 'includes',
        bucket: 'upcoming',
        match: {
          vaccineCategory: 'pneumococcal',
          product,
          doseLabelKey: 'doseLabel_dose3',
          conditionalNextDose: true,
        },
      },
      {
        kind: 'includes',
        bucket: 'upcoming',
        match: {
          vaccineCategory: 'pneumococcal',
          product,
          doseLabelKey: 'doseLabel_booster',
          conditionalNextDose: true,
        },
      },
    ],
  };
}

export function buildPcvRemainingScheduleScenarios(): RegressionScenario[] {
  return [
    infantOneDoseScenario('prevenar13', 'pcv-remaining-prevenar13-1-dose-infant'),
    infantOneDoseScenario('prevenar20', 'pcv-remaining-prevenar20-1-dose-infant'),
    infantOneDoseScenario('synflorix', 'pcv-remaining-synflorix-1-dose-infant'),
    {
      id: 'pcv-remaining-vaxneuvance-1-dose-infant',
      category: 'dose-state',
      title: 'PCV remaining: Vaxneuvance infant 1 dose — conditional booster',
      description: '2+1 Vaxneuvance path; booster still required while primaries incomplete.',
      dobLabel: '19/01/2026',
      asOfLabel: '19/09/2026',
      buildInput: () =>
        baseHealthyInput(birth, asOf, {
          vaccineHistory: [
            history({
              category: 'pneumococcal',
              product: 'vaxneuvance',
              numberOfDoses: 1,
              firstDoseDate: dose1,
              lastDoseDate: dose1,
              doseDates: [dose1],
            }),
          ],
        }),
      expectations: [
        {
          kind: 'includes',
          bucket: 'dueNow',
          match: {
            vaccineCategory: 'pneumococcal',
            product: 'vaxneuvance',
            doseLabelKey: 'doseLabel_dose2',
          },
        },
        {
          kind: 'includes',
          bucket: 'upcoming',
          match: {
            vaccineCategory: 'pneumococcal',
            product: 'vaxneuvance',
            doseLabelKey: 'doseLabel_booster',
            conditionalNextDose: true,
          },
        },
      ],
    },
    {
      id: 'pcv-remaining-prevenar13-7-11-one-dose',
      category: 'dose-state',
      title: 'PCV remaining: Prevenar13 7–11 mo start, 1 dose — conditional booster',
      description: 'After dose 1 in 7–11 month branch, booster must appear without waiting for dose 2.',
      dobLabel: '01/06/2025',
      asOfLabel: '01/04/2026',
      buildInput: () => {
        const b = dateParts(2025, 6, 1);
        const ref = dateParts(2026, 4, 1);
        const first = dateParts(2026, 2, 1);
        return baseHealthyInput(b, ref, {
          vaccineHistory: [
            history({
              category: 'pneumococcal',
              product: 'prevenar13',
              numberOfDoses: 1,
              firstDoseDate: first,
              lastDoseDate: first,
              doseDates: [first],
            }),
          ],
        });
      },
      expectations: [
        {
          kind: 'includes',
          bucket: 'upcoming',
          match: {
            vaccineCategory: 'pneumococcal',
            doseLabelKey: 'doseLabel_booster',
            conditionalNextDose: true,
          },
        },
      ],
    },
    {
      id: 'pcv-remaining-prevenar13-3-primary-booster-due',
      category: 'dose-state',
      title: 'PCV remaining: Prevenar13 3 primaries — no duplicate booster rows',
      description: 'Engine booster only when primaries complete.',
      dobLabel: '19/01/2026',
      asOfLabel: '19/09/2026',
      buildInput: () =>
        baseHealthyInput(birth, asOf, {
          vaccineHistory: [
            history({
              category: 'pneumococcal',
              product: 'prevenar13',
              numberOfDoses: 3,
              firstDoseDate: dose1,
              lastDoseDate: dose3,
              doseDates: [dose1, dose2, dose3],
            }),
          ],
        }),
      expectations: [
        {
          kind: 'includes',
          bucket: 'upcoming',
          match: {
            vaccineCategory: 'pneumococcal',
            doseLabelKey: 'doseLabel_booster',
            conditionalNextDose: false,
          },
        },
        {
          kind: 'excludes',
          bucket: 'upcoming',
          match: {
            vaccineCategory: 'pneumococcal',
            doseLabelKey: 'doseLabel_booster',
            conditionalNextDose: true,
          },
        },
      ],
    },
  ];
}
