import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { getTimingDisplayLines } from '@/lib/vaccine-checker/recommendation-timing';
import { isRoutineHexRecommendation } from '@/lib/vaccine-checker/result-presentation';
import { type CheckerInput, type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';
import { translateKey } from '@/translations/translate';

function dob(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

function baseInput(
  birth: Date,
  today: Date,
  vaccineHistory: VaccineHistoryRecord[] = []
): CheckerInput {
  return {
    dob: birth,
    referenceDate: today,
    routineVaccinesStatus: 'complete',
    completedRoutineVisits: ['2months', '4months'],
    vaccineHistory,
    mmrDate: null,
    mmrDose2Date: null,
    mmrDates: [],
  };
}

function bexseroHistory(dose1: Date): VaccineHistoryRecord {
  return {
    category: 'meningococcalB',
    product: 'bexsero',
    numberOfDoses: 1,
    firstDoseDate: dose1,
    lastDoseDate: dose1,
    doseDates: [dose1],
  };
}

function formatTimingLine(
  line: { key: string; params: Record<string, string> },
  language: 'en' | 'ar'
): string {
  const params: Record<string, string> = {};

  for (const [key, value] of Object.entries(line.params)) {
    if (key.endsWith('Date')) {
      const [year, month, day] = value.split('-').map(Number);
      params[key] =
        language === 'ar'
          ? `${day}/${month}/${year}`
          : `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
      continue;
    }

    params[key] = value;
  }

  return translateKey(language, line.key, params);
}

describe('Bexsero infant 2–5 month start booster', () => {
  const birth = dob(2026, 5, 9);
  const today = dob(2026, 9, 9);
  const dose1 = dob(2026, 7, 9);

  it('shows dose 2 due now and booster upcoming window after one infant dose', () => {
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, [bexseroHistory(dose1)])
    );

    const menbDose2 = results.dueNow.find(
      (item) => item.vaccineCategory === 'meningococcalB' && item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(menbDose2?.status).toBe('due-now');
    expect(menbDose2?.recommendedDate).toBe('2026-09-09');
    expect(menbDose2?.product).toBe('bexsero');

    const menbBoosters = results.upcoming.filter(
      (item) => item.vaccineCategory === 'meningococcalB' && item.doseLabelKey === 'doseLabel_booster'
    );
    expect(menbBoosters).toHaveLength(1);
    expect(menbBoosters[0]?.windowStart).toBe('2027-05-09');
    expect(menbBoosters[0]?.windowEnd).toBe('2027-08-09');
    expect(menbBoosters[0]?.conditionalNextDose).not.toBe(true);

    const lines = getTimingDisplayLines(menbBoosters[0]!, today);
    expect(lines[0]?.key).toBe('resultPreferredBoosterWindow');
    expect(formatTimingLine(lines[0]!, 'ar')).toBe(
      translateKey('ar', 'resultPreferredBoosterWindow', {
        startDate: '9/5/2027',
        endDate: '9/8/2027',
      })
    );
    expect(formatTimingLine(lines[0]!, 'en')).toBe(
      translateKey('en', 'resultPreferredBoosterWindow', {
        startDate: '09/05/2027',
        endDate: '09/08/2027',
      })
    );
  });

  it('does not attach Bexsero notes to Hexavalent labels', () => {
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, [bexseroHistory(dose1)])
    );

    const menbDose2 = results.dueNow.find(
      (item) => item.vaccineCategory === 'meningococcalB' && item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(menbDose2?.noteKeys ?? []).not.toContain('note_hexAge12TwoDoseInterval');
    expect(menbDose2?.noteKeys ?? []).not.toContain('note_hexPreferredMinimumInterval');
    expect(menbDose2?.noteKeys ?? []).not.toContain('note_menbTwoToNineYearInterval');

    expect(
      [...results.dueNow, ...results.upcoming].filter(isRoutineHexRecommendation)
    ).toEqual([]);
  });

  it('does not duplicate the Bexsero booster recommendation', () => {
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, [bexseroHistory(dose1)])
    );

    const menbBoosters = [...results.dueNow, ...results.upcoming].filter(
      (item) => item.vaccineCategory === 'meningococcalB' && item.doseLabelKey === 'doseLabel_booster'
    );
    expect(menbBoosters).toHaveLength(1);
  });
});
