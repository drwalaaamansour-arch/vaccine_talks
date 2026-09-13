import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import {
  formatRecommendationShareLine,
} from '@/lib/vaccine-checker/result-share-format';
import {
  getDisplayCardNoteKeys,
  getResultsCardTimingLines,
  isInfluenzaTeenSeasonDueNowCard,
} from '@/lib/vaccine-checker/result-presentation';
import { type CheckerInput } from '@/lib/vaccine-checker/types';
import { translateKey } from '@/translations/translate';

const AS_OF = new Date(2026, 8, 13);
const TEEN_DOB = new Date(2009, 8, 2);

function teenInfluenzaInput(currentSeasonReceived: boolean): CheckerInput {
  return {
    dob: TEEN_DOB,
    referenceDate: AS_OF,
    routineVaccinesStatus: 'complete',
    completedRoutineVisits: [],
    vaccineHistory: [
      {
        category: 'influenza',
        numberOfDoses: currentSeasonReceived ? 1 : 0,
        doseDates: [],
        influenzaCurrentSeasonReceived: currentSeasonReceived,
        lastDoseDate: null,
        firstDoseDate: null,
      },
    ],
    mmrDate: null,
    mmrDose2Date: null,
    mmrDates: [],
  };
}

describe('Influenza teen season result wording', () => {
  it('current season = No shows one due-now line and no duplicate season note', () => {
    const input = teenInfluenzaInput(false);
    const results = calculateVaccineRecommendations(input);
    const flu = results.dueNow.find((item) => item.vaccineCategory === 'influenza');
    expect(flu?.doseLabelKey).toBe('doseLabel_seasonDose');
    expect(isInfluenzaTeenSeasonDueNowCard(flu!, input)).toBe(true);

    expect(getDisplayCardNoteKeys(flu!, input)).not.toContain('note_influenzaOneDosePerSeason');
    expect(getResultsCardTimingLines(flu!, AS_OF, input)).toEqual([
      { key: 'resultInfluenzaSeasonDueNow', params: {} },
    ]);

    const enLine = translateKey('en', 'resultInfluenzaSeasonDueNow');
    const arLine = translateKey('ar', 'resultInfluenzaSeasonDueNow');
    expect(enLine).toBe('Seasonal dose is due now.');
    expect(arLine).toBe('جرعة الموسم مستحقة دلوقتي.');

    const shareEn = formatRecommendationShareLine(
      flu!,
      'dueNow',
      'en',
      AS_OF,
      input,
      (key) => translateKey('en', key)
    );
    expect(shareEn).toContain('Seasonal dose is due now.');
    expect(shareEn).not.toContain('One dose is recommended for the current flu season.');

    const shareAr = formatRecommendationShareLine(
      flu!,
      'dueNow',
      'ar',
      AS_OF,
      input,
      (key) => translateKey('ar', key)
    );
    expect(shareAr).toContain('جرعة الموسم مستحقة دلوقتي.');
    expect(shareAr).not.toContain('جرعة واحدة مقترحة للموسم الحالي.');
  });

  it('current season = Yes keeps season-complete wording', () => {
    const input = teenInfluenzaInput(true);
    const results = calculateVaccineRecommendations(input);
    const flu = results.completed.find((item) => item.vaccineCategory === 'influenza');
    expect(flu?.doseLabelKey).toBe('doseLabel_seasonComplete');
    expect(isInfluenzaTeenSeasonDueNowCard(flu!, input)).toBe(false);
    expect(translateKey('ar', 'doseLabel_seasonComplete')).toBe('مكتمل للموسم الحالي');
  });

  it('primed child under 9 still shows seasonal dose note (unchanged)', () => {
    const dob = new Date(2020, 0, 1);
    const referenceDate = new Date(2025, 10, 1);
    const input: CheckerInput = {
      dob,
      referenceDate,
      routineVaccinesStatus: 'complete',
      completedRoutineVisits: [],
      vaccineHistory: [
        {
          category: 'influenza',
          numberOfDoses: 2,
          doseDates: [new Date(2024, 9, 1), new Date(2024, 10, 15)],
          influenzaPrimingComplete: true,
          lastDoseDate: new Date(2024, 10, 15),
          firstDoseDate: new Date(2024, 9, 1),
        },
      ],
      mmrDate: null,
      mmrDose2Date: null,
      mmrDates: [],
    };
    const results = calculateVaccineRecommendations(input);
    const flu = results.dueNow.find((item) => item.vaccineCategory === 'influenza');
    expect(flu?.doseLabelKey).toBe('doseLabel_seasonDose');
    expect(isInfluenzaTeenSeasonDueNowCard(flu!, input)).toBe(false);
    expect(getDisplayCardNoteKeys(flu!, input)).toContain('note_influenzaOneDosePerSeason');
    expect(getResultsCardTimingLines(flu!, referenceDate, input).map((line) => line.key)).not.toContain(
      'resultInfluenzaSeasonDueNow'
    );
  });
});
