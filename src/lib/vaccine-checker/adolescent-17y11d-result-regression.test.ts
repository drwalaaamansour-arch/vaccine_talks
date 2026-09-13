import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { getTimingDisplayLines } from '@/lib/vaccine-checker/recommendation-timing';
import { type CheckerInput, type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';
import { translateKey } from '@/translations/translate';

const AS_OF = new Date(2026, 8, 13);
const DOB = new Date(2009, 8, 2);

function history(
  entry: Omit<VaccineHistoryRecord, 'firstDoseDate' | 'lastDoseDate'> &
    Partial<Pick<VaccineHistoryRecord, 'firstDoseDate' | 'lastDoseDate'>>
): VaccineHistoryRecord {
  const doseDates = entry.doseDates ?? [];
  const first = entry.firstDoseDate ?? doseDates[0] ?? null;
  const last = entry.lastDoseDate ?? doseDates[doseDates.length - 1] ?? null;
  return { ...entry, firstDoseDate: first, lastDoseDate: last };
}

function baseInput(overrides: Partial<CheckerInput> = {}): CheckerInput {
  return {
    dob: DOB,
    referenceDate: AS_OF,
    routineVaccinesStatus: 'complete',
    completedRoutineVisits: [],
    vaccineHistory: [],
    mmrDate: null,
    mmrDose2Date: null,
    mmrDates: [],
    ...overrides,
  };
}

describe('17y11d adolescent result regression (as-of 13/09/2026)', () => {
  it('A) Varicella dose 2 overdue shows due now, not historical interval date', () => {
    const dose1 = new Date(2012, 8, 2);
    const results = calculateVaccineRecommendations(
      baseInput({
        vaccineHistory: [
          history({
            category: 'varicella',
            product: 'varivax',
            numberOfDoses: 1,
            doseDates: [dose1],
          }),
        ],
      })
    );

    const varicella = results.dueNow.find((item) => item.vaccineCategory === 'varicella');
    expect(varicella?.doseLabelKey).toBe('doseLabel_dose2');
    expect(varicella?.status).toBe('due-now');
    expect(varicella?.recommendedDate).toBeUndefined();
    const lines = getTimingDisplayLines(varicella!, AS_OF);
    expect(lines[0]?.key).toBe('resultDoseDueNow');
    expect(translateKey('en', 'resultDoseDueNow', { doseLabel: 'Dose 2' })).toBe(
      'Dose 2 is due now.'
    );
    expect(translateKey('ar', 'resultDoseDueNow', { doseLabel: 'الجرعة الثانية' })).toBe(
      'الجرعة الثانية مستحقة دلوقتي.'
    );
    expect(results.upcoming.some((item) => item.vaccineCategory === 'varicella')).toBe(false);
  });

  it('B) Bexsero dose 2 uses +2 month preferred interval and is due now by September 2026', () => {
    const dose1 = new Date(2026, 3, 2);
    const results = calculateVaccineRecommendations(
      baseInput({
        vaccineHistory: [
          history({
            category: 'meningococcalB',
            product: 'bexsero',
            numberOfDoses: 1,
            doseDates: [dose1],
          }),
        ],
      })
    );

    const menb = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalB');
    expect(menb?.doseLabelKey).toBe('doseLabel_dose2');
    expect(menb?.status).toBe('due-now');
    expect(menb?.recommendedDate).toBeUndefined();
    expect(menb?.noteKeys).toContain('note_menbTwoToNineYearInterval');
    expect(menb?.recommendedDate).not.toBe('2026-10-02');
    expect(getTimingDisplayLines(menb!, AS_OF)[0]?.key).toBe('resultDoseDueNow');
  });

  it('C) Influenza teen current season = No → seasonal dose due now', () => {
    const results = calculateVaccineRecommendations(
      baseInput({
        vaccineHistory: [
          history({
            category: 'influenza',
            numberOfDoses: 0,
            doseDates: [],
            influenzaCurrentSeasonReceived: false,
          }),
        ],
      })
    );

    const flu = results.dueNow.find((item) => item.vaccineCategory === 'influenza');
    expect(flu?.doseLabelKey).toBe('doseLabel_seasonDose');
    expect(flu?.status).toBe('due-now');
  });

  it('D) Influenza teen current season = Yes → complete for season', () => {
    const results = calculateVaccineRecommendations(
      baseInput({
        vaccineHistory: [
          history({
            category: 'influenza',
            numberOfDoses: 1,
            doseDates: [],
            influenzaCurrentSeasonReceived: true,
          }),
        ],
      })
    );

    expect(
      results.completed.some(
        (item) =>
          item.vaccineCategory === 'influenza' && item.doseLabelKey === 'doseLabel_seasonComplete'
      )
    ).toBe(true);
  });

  it('E) Any overdue unadministered next dose hides past projected date', () => {
    const results = calculateVaccineRecommendations(
      baseInput({
        vaccineHistory: [
          history({
            category: 'varicella',
            product: 'varivax',
            numberOfDoses: 1,
            doseDates: [new Date(2012, 8, 2)],
          }),
          history({
            category: 'meningococcalB',
            product: 'bexsero',
            numberOfDoses: 1,
            doseDates: [new Date(2026, 3, 2)],
          }),
        ],
      })
    );

    for (const item of results.dueNow) {
      if (!item.recommendedDate) {
        continue;
      }
      const [y, m, d] = item.recommendedDate.split('-').map(Number);
      const recommended = new Date(y, m - 1, d);
      expect(recommended.getTime()).toBeGreaterThanOrEqual(AS_OF.getTime());
    }
  });

  it('Full QA bundle: preserved completes and due-now varicella, menb, influenza', () => {
    const results = calculateVaccineRecommendations(
      baseInput({
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            numberOfDoses: 1,
            doseDates: [],
          }),
          history({
            category: 'meningococcalACWY',
            numberOfDoses: 1,
            doseDates: [],
          }),
          history({
            category: 'hepatitisA',
            numberOfDoses: 2,
            doseDates: [],
          }),
          history({
            category: 'hpv',
            product: 'gardasil4',
            numberOfDoses: 2,
            doseDates: [new Date(2019, 8, 2), new Date(2020, 8, 2)],
          }),
          history({
            category: 'influenza',
            numberOfDoses: 0,
            doseDates: [],
            influenzaCurrentSeasonReceived: false,
          }),
          history({
            category: 'varicella',
            product: 'varivax',
            numberOfDoses: 1,
            doseDates: [new Date(2012, 8, 2)],
          }),
          history({
            category: 'meningococcalB',
            product: 'bexsero',
            numberOfDoses: 1,
            doseDates: [new Date(2026, 3, 2)],
          }),
        ],
      })
    );

    expect(results.completed.some((i) => i.vaccineCategory === 'pneumococcal')).toBe(true);
    expect(results.completed.some((i) => i.vaccineCategory === 'meningococcalACWY')).toBe(true);
    expect(results.completed.some((i) => i.vaccineCategory === 'hepatitisA')).toBe(true);
    expect(results.completed.some((i) => i.vaccineCategory === 'hpv')).toBe(true);

    expect(results.dueNow.some((i) => i.vaccineCategory === 'influenza')).toBe(true);
    expect(
      results.dueNow.some(
        (i) => i.vaccineCategory === 'varicella' && i.doseLabelKey === 'doseLabel_dose2'
      )
    ).toBe(true);
    expect(
      results.dueNow.some(
        (i) => i.vaccineCategory === 'meningococcalB' && i.doseLabelKey === 'doseLabel_dose2'
      )
    ).toBe(true);
  });
});
