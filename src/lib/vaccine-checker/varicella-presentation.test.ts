import { describe, expect, it } from 'vitest';
import { addDays } from '@/lib/vaccine-checker/date-utils';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import {
  getDisplayCardNoteKeys,
  getDisplayCardNoteParams,
} from '@/lib/vaccine-checker/result-presentation';
import { type CheckerInput } from '@/lib/vaccine-checker/types';
import { translateKey } from '@/translations/translate';

function dob(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

function baseInput(
  birth: Date,
  today: Date,
  overrides: Partial<CheckerInput> = {}
): CheckerInput {
  return {
    dob: birth,
    referenceDate: today,
    routineVaccinesStatus: 'complete',
    completedRoutineVisits: [],
    vaccineHistory: [],
    mmrDate: null,
    mmrDose2Date: null,
    mmrDates: [],
    ...overrides,
  };
}

function formatDateEn(isoDate: string | undefined): string {
  if (!isoDate) return '';
  const [year, month, day] = isoDate.split('-').map(Number);
  return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
}

function formatDateAr(isoDate: string | undefined): string {
  if (!isoDate) return '';
  const [year, month, day] = isoDate.split('-').map(Number);
  return `${day}/${month}/${year}`;
}

describe('Varicella MMR delay presentation', () => {
  const birth = dob(2025, 9, 4);
  const today = dob(2026, 9, 11);

  function varicellaDose1(input: CheckerInput) {
    const results = calculateVaccineRecommendations(input);
    return [...results.dueNow, ...results.upcoming].find(
      (item) =>
        item.vaccineCategory === 'varicella' &&
        item.doseLabelKey === 'doseLabel_dose1' &&
        !item.conditionalNextDose
    );
  }

  it('shows specific prior-MMR wording when MMR was given 7 days ago', () => {
    const mmr = dob(2026, 9, 4);
    const input = baseInput(birth, today, {
      mmrDate: mmr,
      mmrDates: [mmr],
    });
    const varicella = varicellaDose1(input);

    expect(varicella?.status).toBe('upcoming');
    expect(varicella?.recommendedDate).toBe('2026-10-02');
    expect(getDisplayCardNoteKeys(varicella!, input)).toEqual([
      'note_varicellaDelayedAfterRecentMmr',
    ]);
    expect(
      translateKey(
        'ar',
        'note_varicellaDelayedAfterRecentMmr',
        getDisplayCardNoteParams(
          'note_varicellaDelayedAfterRecentMmr',
          varicella!,
          input,
          formatDateAr
        )
      )
    ).toBe(
      'بما إن تطعيم MMR اتاخد يوم 4/9/2026، يمكن أخذ الجرعة الأولى من الجديري المائي بداية من 2/10/2026.'
    );
    expect(
      translateKey(
        'en',
        'note_varicellaDelayedAfterRecentMmr',
        getDisplayCardNoteParams(
          'note_varicellaDelayedAfterRecentMmr',
          varicella!,
          input,
          formatDateEn
        )
      )
    ).toBe(
      'Since MMR was given on 04/09/2026, Varicella Dose 1 can be given starting from 02/10/2026.'
    );
  });

  it('keeps generic same-day wording when MMR was given today and Varicella is due now', () => {
    const sameDayBirth = dob(2025, 9, 11);
    const sameDayToday = dob(2026, 9, 11);
    const input = baseInput(sameDayBirth, sameDayToday, {
      mmrDate: sameDayToday,
      mmrDates: [sameDayToday],
    });
    const varicella = varicellaDose1(input);

    expect(varicella?.status).toBe('due-now');
    expect(getDisplayCardNoteKeys(varicella!, input)).toContain('note_varicellaMmrScheduling');
    expect(getDisplayCardNoteKeys(varicella!, input)).not.toContain(
      'note_varicellaDelayedAfterRecentMmr'
    );
  });

  it('shows Varicella due now with no MMR notes when MMR was given exactly 28 days ago', () => {
    const mmr = dob(2026, 8, 14);
    const input = baseInput(birth, today, {
      mmrDate: mmr,
      mmrDates: [mmr],
    });
    const varicella = varicellaDose1(input);

    expect(varicella?.status).toBe('due-now');
    expect(varicella?.doseLabelKey).toBe('doseLabel_dose1');
    expect(getDisplayCardNoteKeys(varicella!, input)).toEqual([]);
  });

  it('shows Varicella due now with no MMR notes when MMR was given more than 28 days ago', () => {
    const mmr = addDays(today, -35);
    const input = baseInput(birth, today, {
      mmrDate: mmr,
      mmrDates: [mmr],
    });
    const varicella = varicellaDose1(input);

    expect(varicella?.status).toBe('due-now');
    expect(getDisplayCardNoteKeys(varicella!, input)).toEqual([]);
    expect(getDisplayCardNoteKeys(varicella!, input)).not.toContain(
      'note_varicellaDelayedAfterRecentMmr'
    );
    expect(getDisplayCardNoteKeys(varicella!, input)).not.toContain('note_varicellaMmrScheduling');
  });

  it('keeps existing fallback behavior when no MMR date is available', () => {
    const input = baseInput(birth, today);
    const results = calculateVaccineRecommendations(input);

    expect(
      [...results.dueNow, ...results.upcoming].some((item) => item.vaccineCategory === 'varicella')
    ).toBe(false);
  });
});
