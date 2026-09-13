import { describe, expect, it } from 'vitest';
import { addDays, addMonths, daysBetween, toIsoDate } from '@/lib/vaccine-checker/date-utils';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { attachRoutineVaccineLedger } from '@/lib/vaccine-checker/input-adapter';
import {
  buildRoutineVisitHistory,
  getReceivedRoutineVisits,
} from '@/lib/vaccine-checker/routine-history';
import { getDueRoutineVisits } from '@/lib/vaccine-checker/routine';
import { getCardExplanation } from '@/lib/vaccine-checker/result-presentation';
import { getTimingDisplayLines } from '@/lib/vaccine-checker/recommendation-timing';
import { translateKey } from '@/translations/translate';
import { type CheckerInput } from '@/lib/vaccine-checker/types';

function liveGapDays(isoDate: string, date: Date): number {
  const [year, month, day] = isoDate.split('-').map(Number);
  const other = new Date(year, month - 1, day);
  return Math.abs(Math.round((other.getTime() - date.getTime()) / 86400000));
}

function buildInput(
  dob: Date,
  today: Date,
  status: 'complete' | 'some' | 'none',
  selectedVisits: string[] = [],
  overrides: Partial<CheckerInput> = {}
): CheckerInput {
  const reached = getDueRoutineVisits(dob, today);
  const history = buildRoutineVisitHistory(
    status,
    reached,
    status === 'some' || status === 'complete' ? (selectedVisits as typeof reached) : []
  );

  return attachRoutineVaccineLedger({
    dob,
    referenceDate: today,
    mmrDate: null,
    mmrDates: [],
    routineVaccinesStatus: status,
    completedRoutineVisits: getReceivedRoutineVisits(history, reached),
    routineVisitHistory: history,
    vaccineHistory: [],
    ...overrides,
  });
}

describe('MMR and Varicella planned-date coordination', () => {
  const dob = new Date(2024, 8, 1);
  const today = new Date(2026, 8, 1);
  const visitsThrough12Months = [
    'birth',
    '1month',
    '2months',
    '4months',
    '6months',
    '9months',
    '12months',
  ];

  it('1. aligns upcoming Varicella with planned MMR dose 2 on the later same day', () => {
    const dose1Date = new Date(2026, 7, 15);
    const results = calculateVaccineRecommendations(
      buildInput(dob, today, 'some', visitsThrough12Months, {
        mmrDate: dose1Date,
        mmrDates: [dose1Date],
      })
    );

    const mmrDose2 = results.upcoming.find((item) => item.routineVaccineKey === 'mmrDose2');
    const varicella = results.upcoming.find(
      (item) => item.vaccineCategory === 'varicella' && item.doseLabelKey === 'doseLabel_dose1'
    );

    expect(mmrDose2?.recommendedDate).toBe('2026-09-15');
    expect(varicella?.recommendedDate).toBe('2026-09-15');
    expect(varicella?.noteKeys).toContain('note_varicellaMmrScheduling');
    expect(varicella?.noteKeys).not.toContain('note_varicellaMmrInterval');

    expect(
      translateKey('ar', 'note_varicellaMmrScheduling')
    ).toBe(
      'يمكن أخذ تطعيم الجديري المائي و MMR في نفس اليوم. لو مش هيتاخدوا في نفس اليوم، لازم يكون بينهم 4 أسابيع على الأقل.'
    );
    expect(getCardExplanation(varicella!, (key) => translateKey('ar', key))).toBe(
      'يمكن أخذ تطعيم الجديري المائي و MMR في نفس اليوم. لو مش هيتاخدوا في نفس اليوم، لازم يكون بينهم 4 أسابيع على الأقل.'
    );
    expect(getTimingDisplayLines(mmrDose2!, today)).toEqual([
      { key: 'resultRecommendedDate', params: { date: '2026-09-15' } },
    ]);
    expect(getTimingDisplayLines(varicella!, today)).toEqual([
      { key: 'resultRecommendedDate', params: { date: '2026-09-15' } },
    ]);
  });

  it('projects Varicella Dose 2 from the planned Dose 1 date when Dose 1 is upcoming', () => {
    const dose1Date = new Date(2026, 7, 15);
    const results = calculateVaccineRecommendations(
      buildInput(dob, today, 'some', visitsThrough12Months, {
        mmrDate: dose1Date,
        mmrDates: [dose1Date],
      })
    );

    const varicellaDose1 = results.upcoming.find(
      (item) => item.vaccineCategory === 'varicella' && item.doseLabelKey === 'doseLabel_dose1'
    );
    const varicellaDose2 = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'varicella' &&
        item.doseLabelKey === 'doseLabel_dose2' &&
        item.conditionalNextDose
    );

    expect(varicellaDose1?.recommendedDate).toBe('2026-09-15');
    expect(varicellaDose2?.recommendedDate).toBe('2026-12-15');
    expect(varicellaDose2?.conditionalProjectedFromDate).toBe('2026-09-15');

    expect(
      translateKey('ar', 'resultConditionalVaricellaDose2FromPlannedDose1', {
        dose1Date: '15/9/2026',
        date: '15/12/2026',
      })
    ).toBe('لو الجرعة الأولى اتاخدت يوم 15/9/2026، الجرعة الثانية تبقى يوم 15/12/2026.');
    expect(
      translateKey('en', 'resultConditionalVaricellaDose2FromPlannedDose1', {
        dose1Date: '15/09/2026',
        date: '15/12/2026',
      })
    ).toBe('If Dose 1 is given on 15/09/2026, Dose 2 would be on 15/12/2026.');
  });

  it('2. allows MMR and Varicella to both be Due Now on the same day when eligible today', () => {
    const birth = new Date(2025, 7, 23);
    const asOf = new Date(2026, 7, 23);
    const results = calculateVaccineRecommendations(
      buildInput(birth, asOf, 'complete', [], {
        mmrDate: asOf,
        mmrDates: [asOf],
      })
    );

    const varicella = results.dueNow.find(
      (item) => item.vaccineCategory === 'varicella' && item.doseLabelKey === 'doseLabel_dose1'
    );

    expect(varicella?.status).toBe('due-now');
    expect(varicella?.noteKeys).toContain('note_varicellaMmrScheduling');
    expect(
      results.upcoming.some(
        (item) =>
          item.vaccineCategory === 'varicella' &&
          item.doseLabelKey === 'doseLabel_dose1' &&
          item.recommendedDate &&
          liveGapDays(item.recommendedDate, asOf) > 0 &&
          liveGapDays(item.recommendedDate, asOf) < 28
      )
    ).toBe(false);
  });

  it('3. keeps Varicella upcoming at actual MMR date + 28 days when MMR was given 10 days ago', () => {
    const mmrDose1Date = addMonths(dob, 12);
    const mmrDate = addDays(today, -10);
    const results = calculateVaccineRecommendations(
      buildInput(dob, today, 'complete', [], {
        mmrDate: mmrDose1Date,
        mmrDose2Date: mmrDate,
        mmrDates: [mmrDose1Date, mmrDate],
      })
    );

    expect(results.dueNow.some((item) => item.vaccineCategory === 'varicella')).toBe(false);

    const varicella = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'varicella' &&
        item.doseLabelKey === 'doseLabel_dose1' &&
        !item.conditionalNextDose
    );

    expect(varicella?.status).toBe('upcoming');
    expect(varicella?.recommendedDate).toBe(toIsoDate(addDays(mmrDate, 28)));
    expect(varicella?.noteKeys).toContain('note_varicellaMmrInterval');
  });

  it('4. leaves planned MMR and Varicella unchanged when already at least 28 days apart', () => {
    const dose1Date = new Date(2026, 4, 1);
    const varicellaDose1Date = new Date(2026, 4, 1);
    const results = calculateVaccineRecommendations(
      buildInput(dob, today, 'some', visitsThrough12Months, {
        mmrDate: dose1Date,
        mmrDates: [dose1Date],
        vaccineHistory: [
          {
            category: 'varicella',
            product: 'varivax',
            numberOfDoses: 1,
            firstDoseDate: varicellaDose1Date,
            lastDoseDate: varicellaDose1Date,
            doseDates: [varicellaDose1Date],
          },
        ],
      })
    );

    const mmrDose2 = results.dueNow.find((item) => item.routineVaccineKey === 'mmrDose2');
    const varicellaDose2 = [...results.dueNow, ...results.upcoming].find(
      (item) => item.vaccineCategory === 'varicella' && item.doseLabelKey === 'doseLabel_dose2'
    );

    expect(mmrDose2?.status).toBe('due-now');
    expect(mmrDose2?.recommendedDate).toBeUndefined();
    expect(varicellaDose2?.status).toBe('due-now');
    expect(varicellaDose2?.recommendedDate).toBeUndefined();
    expect(
      Math.abs(daysBetween(new Date(2026, 5, 1), new Date(2026, 7, 1)))
    ).toBeGreaterThanOrEqual(28);
  });
});
