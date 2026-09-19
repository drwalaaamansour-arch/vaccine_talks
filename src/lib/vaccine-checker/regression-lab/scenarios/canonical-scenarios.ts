import type { RegressionScenario } from '@/lib/vaccine-checker/regression-lab/types';
import { baseHealthyInput, dateParts, history } from '@/lib/vaccine-checker/regression-lab/scenario-input';

/** Canonical scenarios distilled from approved boundary fixes (see medical-engine.test.ts). */
export const canonicalRegressionScenarios: RegressionScenario[] = [
  {
    id: 'seven-week-eligible-start',
    category: 'canonical-historical',
    historicalBugTag: 'seven-week-eligible-vs-menb-upcoming',
    title: '7-week healthy child — eligible vs upcoming MenB',
    description:
      'Rotavirus, PCV, and MenACWY eligible-now at 2-month schedule date; MenB dose 1 upcoming; MenACWY conditional dose 2 from as-of + 2 months.',
    dobLabel: '04/07/2026',
    asOfLabel: '22/08/2026',
    buildInput: () =>
      baseHealthyInput(dateParts(2026, 7, 4), dateParts(2026, 8, 22), {
        vaccineHistory: [],
      }),
    expectations: [
      { kind: 'excludes', bucket: 'dueNow', match: { vaccineCategory: 'rotavirus' } },
      {
        kind: 'includes',
        bucket: 'eligibleNow',
        match: {
          vaccineCategory: 'rotavirus',
          doseLabelKey: 'doseLabel_dose1',
          status: 'eligible-now',
          recommendedDate: '2026-09-04',
        },
      },
      {
        kind: 'includes',
        bucket: 'eligibleNow',
        match: {
          vaccineCategory: 'pneumococcal',
          doseLabelKey: 'doseLabel_dose1',
          status: 'eligible-now',
          recommendedDate: '2026-09-04',
        },
      },
      {
        kind: 'includes',
        bucket: 'upcoming',
        match: {
          vaccineCategory: 'meningococcalB',
          doseLabelKey: 'doseLabel_dose1',
          status: 'not-yet-eligible',
          recommendedDate: '2026-09-04',
        },
      },
      {
        kind: 'includes',
        bucket: 'upcoming',
        match: {
          vaccineCategory: 'meningococcalACWY',
          doseLabelKey: 'doseLabel_dose2',
          conditionalNextDose: true,
          recommendedDate: '2026-10-22',
          product: 'nimenrix',
        },
      },
      {
        kind: 'absentEverywhere',
        match: { vaccineCategory: 'meningococcalB', conditionalNextDose: true },
      },
    ],
  },
  {
    id: 'four-month-catch-up-conditionals',
    category: 'canonical-historical',
    historicalBugTag: 'four-month-asof-conditional-dose2',
    title: '4-month catch-up — due now + as-of conditionals',
    description:
      'Dose 1 due now without stale dates; Rotarix-only rotavirus note; conditional dose 2 at as-of + 2 calendar months.',
    dobLabel: '22/04/2026',
    asOfLabel: '22/08/2026',
    buildInput: () =>
      baseHealthyInput(dateParts(2026, 4, 22), dateParts(2026, 8, 22), {
        vaccineHistory: [],
      }),
    expectations: [
      {
        kind: 'includes',
        bucket: 'dueNow',
        match: {
          vaccineCategory: 'rotavirus',
          doseLabelKey: 'doseLabel_dose1',
          status: 'due-now',
          product: 'rotarix',
          recommendedDate: null,
        },
      },
      {
        kind: 'includes',
        bucket: 'upcoming',
        match: {
          vaccineCategory: 'rotavirus',
          doseLabelKey: 'doseLabel_dose2',
          conditionalNextDose: true,
          recommendedDate: '2026-10-22',
          product: 'rotarix',
        },
      },
      {
        kind: 'includes',
        bucket: 'upcoming',
        match: {
          vaccineCategory: 'meningococcalB',
          doseLabelKey: 'doseLabel_dose2',
          conditionalNextDose: true,
          recommendedDate: '2026-10-22',
        },
      },
      { kind: 'absentEverywhere', match: { vaccineCategory: 'rotavirus', product: 'rotateq' } },
    ],
  },
  {
    id: 'dose-two-due-today-boundary',
    category: 'canonical-historical',
    historicalBugTag: 'recommended-date-equals-asof-not-upcoming',
    title: 'Dose 2 recommended date equals as-of → due now',
    description: 'MenB and MenACWY dose 2 must be due-now when recommended date is today, not upcoming.',
    dobLabel: '23/04/2026',
    asOfLabel: '23/08/2026',
    buildInput: () => {
      const birth = dateParts(2026, 4, 23);
      const today = dateParts(2026, 8, 23);
      const dose1 = dateParts(2026, 6, 23);
      return baseHealthyInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'meningococcalB',
            product: 'bexsero',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          }),
          history({
            category: 'meningococcalACWY',
            product: 'nimenrix',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      });
    },
    expectations: [
      {
        kind: 'includes',
        bucket: 'dueNow',
        match: {
          vaccineCategory: 'meningococcalB',
          doseLabelKey: 'doseLabel_dose2',
          status: 'due-now',
          recommendedDate: '2026-08-23',
        },
      },
      {
        kind: 'includes',
        bucket: 'dueNow',
        match: {
          vaccineCategory: 'meningococcalACWY',
          doseLabelKey: 'doseLabel_dose2',
          status: 'due-now',
          recommendedDate: '2026-08-23',
        },
      },
      {
        kind: 'excludes',
        bucket: 'upcoming',
        match: { vaccineCategory: 'meningococcalB', doseLabelKey: 'doseLabel_dose2', conditionalNextDose: false },
      },
    ],
  },
  {
    id: 'eight-month-rota-age-limit',
    category: 'canonical-historical',
    historicalBugTag: 'eight-month-rota-age-limit-passed',
    title: '8-month zero-dose rotavirus — age limit passed',
    description: 'Rotavirus must not appear as due now when both products cannot be started.',
    dobLabel: '23/12/2025',
    asOfLabel: '23/08/2026',
    buildInput: () =>
      baseHealthyInput(dateParts(2025, 12, 23), dateParts(2026, 8, 23), {
        vaccineHistory: [],
      }),
    expectations: [
      { kind: 'excludes', bucket: 'dueNow', match: { vaccineCategory: 'rotavirus' } },
      {
        kind: 'includes',
        bucket: 'ageLimitPassed',
        match: { vaccineCategory: 'rotavirus', status: 'age-limit-passed' },
      },
    ],
  },
  {
    id: 'varicella-after-recent-mmr',
    category: 'canonical-historical',
    historicalBugTag: 'varicella-mmr-28-day-gap',
    title: 'Varicella blocked 4 weeks after MMR',
    description: 'Varicella dose 1 upcoming at MMR + 28 days, not due now.',
    dobLabel: '23/08/2025',
    asOfLabel: '23/08/2026',
    buildInput: () => {
      const birth = dateParts(2025, 8, 23);
      const today = dateParts(2026, 8, 23);
      const mmr = dateParts(2026, 8, 16);
      return baseHealthyInput(birth, today, {
        mmrDate: mmr,
        mmrDates: [mmr],
        vaccineHistory: [],
      });
    },
    expectations: [
      { kind: 'excludes', bucket: 'dueNow', match: { vaccineCategory: 'varicella', doseLabelKey: 'doseLabel_dose1' } },
      {
        kind: 'includes',
        bucket: 'upcoming',
        match: {
          vaccineCategory: 'varicella',
          doseLabelKey: 'doseLabel_dose1',
          status: 'upcoming',
          recommendedDate: '2026-09-13',
        },
      },
    ],
  },
  {
    id: 'influenza-priming-conditional',
    category: 'canonical-historical',
    historicalBugTag: 'influenza-priming-conditional-dose2',
    title: 'Influenza priming — conditional dose 2 at +28 days',
    description: '6-month child with no flu history: dose 1 due now, conditional dose 2 four weeks after as-of.',
    dobLabel: '23/02/2026',
    asOfLabel: '23/08/2026',
    buildInput: () =>
      baseHealthyInput(dateParts(2026, 2, 23), dateParts(2026, 8, 23), {
        vaccineHistory: [],
      }),
    expectations: [
      {
        kind: 'includes',
        bucket: 'dueNow',
        match: {
          vaccineCategory: 'influenza',
          doseLabelKey: 'doseLabel_dose1',
          status: 'due-now',
        },
      },
      {
        kind: 'includes',
        bucket: 'upcoming',
        match: {
          vaccineCategory: 'influenza',
          doseLabelKey: 'doseLabel_dose2',
          conditionalNextDose: true,
          recommendedDate: '2026-09-20',
        },
      },
    ],
  },
  {
    id: 'manual-pcv-synflorix-8m-dose1-mar19-2026',
    category: 'canonical-historical',
    historicalBugTag: 'manual-pcv-synflorix-8m-dose1-still-due',
    title: 'Manual: 8-month infant — Synflorix dose 1 on 19/03/2026 still shows dose 1 due',
    description:
      'Walaa manual test (as-of 19/09/2026). Locks engine output when pneumococcal history reports 1 prior dose but doseDates[] is empty at calculatePcv (see docs/CHECKER-PCV-MANUAL-8M-TRACE.md). When doseDates includes 2026-03-19, the same rule code returns dose 2 due instead — not this scenario.',
    dobLabel: '19/01/2026',
    asOfLabel: '19/09/2026',
    buildInput: () => {
      const birth = dateParts(2026, 1, 19);
      const asOf = dateParts(2026, 9, 19);
      const dose1 = dateParts(2026, 3, 19);
      return baseHealthyInput(birth, asOf, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'synflorix',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [],
          }),
        ],
      });
    },
    expectations: [
      {
        kind: 'includes',
        bucket: 'dueNow',
        match: {
          vaccineCategory: 'pneumococcal',
          product: 'synflorix',
          doseLabelKey: 'doseLabel_dose1',
          status: 'due-now',
        },
      },
      {
        kind: 'excludes',
        bucket: 'dueNow',
        match: {
          vaccineCategory: 'pneumococcal',
          doseLabelKey: 'doseLabel_dose2',
        },
      },
      {
        kind: 'absentEverywhere',
        match: {
          vaccineCategory: 'pneumococcal',
          doseLabelKey: 'doseLabel_booster',
        },
      },
      {
        kind: 'absentEverywhere',
        match: {
          vaccineCategory: 'pneumococcal',
          conditionalNextDose: true,
        },
      },
    ],
  },
  {
    id: 'manual-pcv-synflorix-8m-dose2-due-20260919',
    category: 'canonical-historical',
    historicalBugTag: 'manual-pcv-synflorix-8m-dose2-no-future-rows',
    title: 'Manual: 8-month infant — Synflorix dose 1 on 19/03/2026 → dose 2 due, no booster row',
    description:
      'Walaa manual test with review showing Synflorix, 1 prior dose, dose date 19/03/2026; as-of 19/09/2026. Full doseDates[] (wizard-normal). See docs/CHECKER-PCV-SYNFLORIX-REVIEW.md § Manual case (full dates).',
    dobLabel: '19/01/2026',
    asOfLabel: '19/09/2026',
    buildInput: () => {
      const birth = dateParts(2026, 1, 19);
      const asOf = dateParts(2026, 9, 19);
      const dose1 = dateParts(2026, 3, 19);
      return baseHealthyInput(birth, asOf, {
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
      });
    },
    expectations: [
      {
        kind: 'includes',
        bucket: 'dueNow',
        match: {
          vaccineCategory: 'pneumococcal',
          product: 'synflorix',
          doseLabelKey: 'doseLabel_dose2',
          status: 'due-now',
        },
      },
      {
        kind: 'excludes',
        bucket: 'dueNow',
        match: {
          vaccineCategory: 'pneumococcal',
          doseLabelKey: 'doseLabel_dose1',
        },
      },
      {
        kind: 'includes',
        bucket: 'upcoming',
        match: {
          vaccineCategory: 'pneumococcal',
          doseLabelKey: 'doseLabel_dose3',
          conditionalNextDose: true,
        },
      },
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
];
