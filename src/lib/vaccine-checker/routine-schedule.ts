import { type RoutineVisitKey } from '@/types/wizard-types';

export const ROUTINE_VISIT_ORDER: RoutineVisitKey[] = [
  'birth',
  '1month',
  '2months',
  '4months',
  '6months',
  '9months',
  '12months',
  '18months',
];

export const ROUTINE_VISIT_AGE_MONTHS: Record<RoutineVisitKey, number> = {
  birth: 0,
  '1month': 1,
  '2months': 2,
  '4months': 4,
  '6months': 6,
  '9months': 9,
  '12months': 12,
  '18months': 18,
};

export type RoutineAntigenSeries =
  | 'hepatitisB'
  | 'bcg'
  | 'polioOpv'
  | 'polioIpv'
  | 'dtpContaining'
  | 'hib'
  | 'mmr';

export const ROUTINE_ANTIGEN_SERIES_ORDER: RoutineAntigenSeries[] = [
  'bcg',
  'polioOpv',
  'polioIpv',
  'dtpContaining',
  'hepatitisB',
  'hib',
  'mmr',
];

export type RoutineSeriesContribution = {
  series: RoutineAntigenSeries;
  doseNumber?: number;
};

export type RoutineScheduleDose = {
  doseKey: string;
  contributions: RoutineSeriesContribution[];
};

/** Central MOH routine visit → vaccine dose mapping for the Vaccine Checker. */
export const ROUTINE_VISIT_DOSES: Record<RoutineVisitKey, RoutineScheduleDose[]> = {
  birth: [{ doseKey: 'hepatitisB', contributions: [{ series: 'hepatitisB', doseNumber: 1 }] }],
  '1month': [
    { doseKey: 'bcg', contributions: [{ series: 'bcg', doseNumber: 1 }] },
    { doseKey: 'opv', contributions: [{ series: 'polioOpv', doseNumber: 1 }] },
  ],
  '2months': [
    { doseKey: 'opvDose1', contributions: [{ series: 'polioOpv', doseNumber: 2 }] },
    {
      doseKey: 'hexavalentDose1',
      contributions: [
        { series: 'dtpContaining', doseNumber: 1 },
        { series: 'hib', doseNumber: 1 },
        { series: 'polioIpv', doseNumber: 1 },
        { series: 'hepatitisB', doseNumber: 2 },
      ],
    },
  ],
  '4months': [
    { doseKey: 'opvDose2', contributions: [{ series: 'polioOpv', doseNumber: 3 }] },
    {
      doseKey: 'hexavalentDose2',
      contributions: [
        { series: 'dtpContaining', doseNumber: 2 },
        { series: 'hib', doseNumber: 2 },
        { series: 'polioIpv', doseNumber: 2 },
        { series: 'hepatitisB', doseNumber: 3 },
      ],
    },
  ],
  '6months': [
    { doseKey: 'opvDose3', contributions: [{ series: 'polioOpv', doseNumber: 4 }] },
    {
      doseKey: 'hexavalentDose3',
      contributions: [
        { series: 'dtpContaining', doseNumber: 3 },
        { series: 'hib', doseNumber: 3 },
        { series: 'polioIpv', doseNumber: 3 },
        { series: 'hepatitisB', doseNumber: 4 },
      ],
    },
  ],
  '9months': [{ doseKey: 'opvDose4', contributions: [{ series: 'polioOpv', doseNumber: 5 }] }],
  '12months': [
    { doseKey: 'mmrDose1', contributions: [{ series: 'mmr', doseNumber: 1 }] },
    { doseKey: 'opvBooster1', contributions: [{ series: 'polioOpv', doseNumber: 6 }] },
  ],
  '18months': [
    { doseKey: 'dtpBooster', contributions: [{ series: 'dtpContaining', doseNumber: 4 }] },
    { doseKey: 'mmrDose2', contributions: [{ series: 'mmr', doseNumber: 2 }] },
    { doseKey: 'opvBooster2', contributions: [{ series: 'polioOpv', doseNumber: 7 }] },
  ],
};

export const ROUTINE_VISIT_VACCINES: Record<RoutineVisitKey, string[]> = Object.fromEntries(
  ROUTINE_VISIT_ORDER.map((visit) => [
    visit,
    ROUTINE_VISIT_DOSES[visit].map((dose) => dose.doseKey),
  ])
) as Record<RoutineVisitKey, string[]>;

export function getRoutineDosesForVisit(visit: RoutineVisitKey): RoutineScheduleDose[] {
  return ROUTINE_VISIT_DOSES[visit];
}

export function getRoutineDoseKeysForVisit(visit: RoutineVisitKey): string[] {
  return ROUTINE_VISIT_VACCINES[visit];
}
