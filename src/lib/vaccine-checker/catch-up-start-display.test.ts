import { describe, expect, it } from 'vitest';
import { addMonths, toIsoDate } from '@/lib/vaccine-checker/date-utils';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { getTimingDisplayLines } from '@/lib/vaccine-checker/recommendation-timing';
import {
  getConditionalNextDoseTranslationKey,
  getConditionalNextDoseTranslationParams,
  getRecommendedDateLabelKey,
} from '@/lib/vaccine-checker/result-presentation';
import { type CheckerInput, type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';
import { translateKey } from '@/translations/translate';

function dob(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

function baseInput(
  birth: Date,
  today: Date,
  overrides: Partial<CheckerInput> = {}
): CheckerInput {
  const merged = {
    dob: birth,
    referenceDate: today,
    routineVaccinesStatus: 'complete' as const,
    completedRoutineVisits: [] as CheckerInput['completedRoutineVisits'],
    vaccineHistory: [] as VaccineHistoryRecord[],
    ...overrides,
  };

  return {
    ...merged,
    mmrDate: merged.mmrDate ?? null,
    mmrDose2Date: merged.mmrDose2Date ?? null,
    mmrDates: merged.mmrDates ?? [],
  };
}

function history(record: VaccineHistoryRecord): VaccineHistoryRecord {
  return record;
}

function formatConditionalLine(
  language: 'en' | 'ar',
  item: NonNullable<ReturnType<typeof calculateVaccineRecommendations>['upcoming'][number]>
): string {
  const key = getConditionalNextDoseTranslationKey(item);
  const params = getConditionalNextDoseTranslationParams(
    item,
    (isoDate) => {
      if (!isoDate) {
        return '';
      }
      const [year, month, day] = isoDate.split('-');
      return language === 'ar' ? `${day}/${month}/${year}` : `${month}/${day}/${year}`;
    },
    (doseLabelKey) => {
      const doseLabels: Record<string, Record<'en' | 'ar', string>> = {
        doseLabel_dose1: { en: 'Dose 1', ar: 'الجرعة الأولى' },
        doseLabel_dose2: { en: 'Dose 2', ar: 'الجرعة الثانية' },
      };
      return doseLabels[doseLabelKey]?.[language] ?? doseLabelKey;
    }
  );

  return translateKey(language, key, params);
}

describe('catch-up start date display (zero previous doses)', () => {
  const birth = dob(2026, 4, 22);
  const today = dob(2026, 8, 22);
  const conditionalDose2Date = '2026-10-22';

  it('A) 4-month child with zero PCV shows dose 1 due now without stale infant date', () => {
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'prevenar13',
            numberOfDoses: 0,
            firstDoseDate: null,
            lastDoseDate: null,
            doseDates: [],
          }),
        ],
      })
    );

    const pcv = results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal');
    expect(pcv?.doseLabelKey).toBe('doseLabel_dose1');
    expect(pcv?.status).toBe('due-now');
    expect(pcv?.recommendedDate).toBeUndefined();
    expect(pcv?.recommendedDateLabelKey).toBeUndefined();
    expect(getTimingDisplayLines(pcv!, today)).toEqual([]);

    const projectedDose2 = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'pneumococcal' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_dose2' &&
        item.id.endsWith('-conditional-next')
    );
    expect(projectedDose2).toBeUndefined();

    const remainingDose2 = results.upcoming.find(
      (item) => item.id === 'pcv-remaining-dose2-after-dose1'
    );
    expect(remainingDose2?.recommendedDate).toBeUndefined();
    expect(formatConditionalLine('en', remainingDose2!)).toMatch(/Dose 2 is still required/);
    expect(formatConditionalLine('ar', remainingDose2!)).toMatch(/الجرعة الثانية لسه مطلوبة/);
  });

  it('B) 4-month child with zero Rotarix shows dose 1 due now without stale infant date', () => {
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'rotavirus',
            product: 'rotarix',
            numberOfDoses: 0,
            firstDoseDate: null,
            lastDoseDate: null,
            doseDates: [],
          }),
        ],
      })
    );

    const rotavirus = results.dueNow.find((item) => item.vaccineCategory === 'rotavirus');
    expect(rotavirus?.product).toBe('rotarix');
    expect(rotavirus?.doseLabelKey).toBe('doseLabel_dose1');
    expect(rotavirus?.status).toBe('due-now');
    expect(rotavirus?.recommendedDate).toBeUndefined();
    expect(getTimingDisplayLines(rotavirus!, today)).toEqual([]);

    const conditional = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'rotavirus' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(conditional?.recommendedDate).toBe(conditionalDose2Date);
    expect(formatConditionalLine('en', conditional!)).toBe(
      'If Dose 1 is given today, Dose 2 would be on 10/22/2026.'
    );
  });

  it('C) 4-month child with zero MenB shows dose 1 due now without stale infant date', () => {
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'meningococcalB',
            product: 'bexsero',
            numberOfDoses: 0,
            firstDoseDate: null,
            lastDoseDate: null,
            doseDates: [],
          }),
        ],
      })
    );

    const menb = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalB');
    expect(menb?.doseLabelKey).toBe('doseLabel_dose1');
    expect(menb?.status).toBe('due-now');
    expect(menb?.recommendedDate).toBeUndefined();
    expect(getTimingDisplayLines(menb!, today)).toEqual([]);

    const conditional = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalB' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(conditional?.recommendedDate).toBe(conditionalDose2Date);
  });

  it('D) child with dose 1 already given may still show original recommended date for overdue dose 2', () => {
    const dose1Birth = dob(2024, 1, 1);
    const dose1Date = addMonths(dose1Birth, 2);
    const overdueToday = addMonths(dose1Date, 3);
    const expectedDose2Date = addMonths(dose1Date, 2);

    const results = calculateVaccineRecommendations(
      baseInput(dose1Birth, overdueToday, {
        vaccineHistory: [
          history({
            category: 'rotavirus',
            product: 'rotarix',
            numberOfDoses: 1,
            firstDoseDate: dose1Date,
            lastDoseDate: dose1Date,
            doseDates: [dose1Date],
          }),
        ],
      })
    );

    const dose2 = results.dueNow.find(
      (item) => item.vaccineCategory === 'rotavirus' && item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(dose2?.status).toBe('due-now');
    expect(dose2?.recommendedDate).toBeUndefined();
    expect(getTimingDisplayLines(dose2!, overdueToday)[0]?.key).toBe('resultDoseDueNow');
  });
});
