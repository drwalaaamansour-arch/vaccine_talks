import { describe, expect, it } from 'vitest';
import { AR_TRANSLATIONS, TRANSLATIONS } from '@/translations';
import { formatEnglishAge } from '@/translations/format-english-age';
import {
  interpolateTranslation,
  translateKey,
  translationTemplateIncludesDate,
} from '@/translations/translate';

const RESULT_TRANSLATION_KEYS = [
  'resultRecommendedDate',
  'resultOriginalRecommendedDate',
  'resultScheduledDoseDate',
  'resultConditionalNextFixedDose',
  'resultConditionalVaricellaDose2FromPlannedDose1',
  'resultConditionalBoosterStart',
  'resultConditionalPcvSevenToElevenBooster',
  'resultConditionalPcvRemainingPrimaryAfterPrevious',
  'resultConditionalPcvInfantBoosterAfterPrimarySeries',
  'resultConditionalBoosterWindow',
  'resultLatestDate',
  'resultConditionalNextDose',
  'resultConditionalNextDoseRotarix',
  'resultConditionalNextDoseInfluenza',
  'resultConditionalHpvTwoDoseSecond',
  'resultConditionalNextDoseMenacwyBooster',
  'resultConditionalNimenrixInfantTwoPrimaryBooster',
  'resultConditionalNimenrixSinglePrimaryBooster',
  'resultConditionalNextDoseMenactra',
  'resultConditionalNextDoseMenbBooster',
  'resultConditionalMenbBoosterWindow',
  'resultConditionalPreferredBoosterWindow',
  'resultConditionalPreferredWindow',
  'note_rotavirusRotarixOnlyCatchUp',
  'note_rotavirusProductDependsOnChoice',
  'note_rotavirusFinalDoseLimit',
  'note_rotavirusEligibleOrWait',
  'note_pcvEligibleOrWait',
  'note_pcvCatchUpProductDependsOnDoses',
  'note_pcvRemainingDosesDependOnProduct',
  'note_hpvRemainingDosesDependOnProduct',
  'note_hpvThreeDoseSeriesTimingDependsOnProduct',
  'note_hpvRemainingDosesDependOnProductAndAge',
  'note_hpvProductUnknown',
  'note_menacwyProductScheduleDependsOnAge',
  'note_menacwyProductDoseCountDependsOnProduct',
  'note_menbTwoToNineYearInterval',
  'note_menacwyProductUnknownSchedule',
  'note_varicellaMmrScheduling',
  'note_varicellaDelayedAfterRecentMmr',
  'note_influenzaSecondDoseInterval',
  'note_conditionalNextDose',
  'note_clinicianReviewRecommended',
  'reason_rotavirusProductUnknown',
  'reason_rotavirusStartLimitPassed',
  'reason_rotavirusRotateqStartLimitPassed',
  'status_due_now',
  'status_eligible_now',
  'status_upcoming',
  'status_completed',
  'status_not_yet_eligible',
  'status_age_limit_passed',
  'status_needs_review',
  'doseLabel_dose1',
  'doseLabel_singleDose',
  'doseLabel_dose2',
  'doseLabel_dose3',
  'doseLabel_nextDose',
  'doseLabel_booster',
  'doseLabel_completionDose',
  'doseLabel_seriesComplete',
  'doseLabel_reviewNeeded',
  'doseLabel_seasonComplete',
  'doseLabel_seasonDose',
] as const;

describe('vaccine checker translations', () => {
  it('formats English age with correct singular and plural labels', () => {
    expect(formatEnglishAge({ years: 1, months: 0, days: 1 })).toBe('1 year, 0 months, 1 day');
    expect(formatEnglishAge({ years: 2, months: 1, days: 5 })).toBe('2 years, 1 month, 5 days');
    expect(formatEnglishAge({ years: 0, months: 9, days: 0 })).toBe('0 years, 9 months, 0 days');
  });

  it('defines every results translation key in Arabic and English', () => {
    for (const key of RESULT_TRANSLATION_KEYS) {
      expect(typeof AR_TRANSLATIONS[key]).toBe('string');
      expect(AR_TRANSLATIONS[key].length).toBeGreaterThan(0);
      expect(typeof TRANSLATIONS[key]).toBe('string');
      expect(TRANSLATIONS[key].length).toBeGreaterThan(0);
    }
  });

  it('never returns raw keys from translateKey', () => {
    expect(translateKey('en', 'resultMinimumStartBooster', { startDate: '27/12/2026' })).toBe(
      'The booster can be given starting on 27/12/2026.'
    );
    expect(translateKey('en', 'note_vaxneuvanceTwoPlusOne')).toBe(
      'Based on the previous doses, the next dose is the booster.'
    );
    expect(translateKey('ar', 'resultOriginalRecommendedDate', { date: '22/06/2026' })).toBe(
      'كان ميعاده المقترح: 22/06/2026'
    );
    expect(translateKey('en', 'resultOriginalRecommendedDate', { date: '22/06/2026' })).toBe(
      'Original recommended date: 22/06/2026'
    );
    expect(translateKey('ar', 'note_rotavirusRotarixOnlyCatchUp')).toContain('Rotarix');
    expect(translateKey('ar', 'missing_translation_key_xyz')).toBe('');
  });

  it('interpolates both {date} and {{previousDose}} placeholders', () => {
    const template =
      'لو اتاخدت {{previousDose}} دلوقتي، {{nextDose}} هتبقى مقترحة يوم {date}.';
    expect(
      interpolateTranslation(template, {
        previousDose: 'الجرعة الأولى',
        nextDose: 'الجرعة الثانية',
        date: '22/10/2026',
      })
    ).toBe('لو اتاخدت الجرعة الأولى دلوقتي، الجرعة الثانية هتبقى مقترحة يوم 22/10/2026.');
  });

  it('detects date placeholders in templates', () => {
    expect(translationTemplateIncludesDate('كان ميعاده المقترح: {date}')).toBe(true);
    expect(translationTemplateIncludesDate('الميعاد المقترح')).toBe(false);
  });

  it('does not expose priming terminology in Arabic influenza copy', () => {
    const arabicInfluenzaStrings = Object.entries(AR_TRANSLATIONS)
      .filter(([key]) => key.includes('influenza') || key.includes('Influenza'))
      .map(([, value]) => value);

    for (const value of arabicInfluenzaStrings) {
      expect(value).not.toContain('تمهيد');
    }

    expect(translateKey('ar', 'resultConditionalNextFixedDose', {
      previousDose: 'الجرعة الأولى',
      nextDose: 'الجرعة الثانية',
      date: '23/11/2026',
    })).toBe('لو اتاخدت الجرعة الأولى النهارده، الجرعة الثانية تبقى يوم 23/11/2026.');

    expect(translateKey('ar', 'resultConditionalNextDoseInfluenza', { date: '20/09/2026' })).toContain(
      'أول مرة'
    );
  });

  it('keeps commercial brand names in English in Arabic checker copy', () => {
    const approvedBrands = [
      'Rotarix',
      'RotaTeq',
      'Synflorix',
      'Prevenar 13',
      'Vaxneuvance',
      'Prevenar 20',
      'Nimenrix',
      'Menactra',
      'Bexsero',
      'Barycela',
      'Varivax',
      'Gardasil 4',
      'Gardasil 9',
      'Cervarix',
    ];

    for (const brand of approvedBrands) {
      expect(Object.values(AR_TRANSLATIONS).some((value) => typeof value === 'string' && value === brand)).toBe(
        true
      );
    }

    const forbiddenPatterns = ['مينكترا', 'ميناكترا', 'نينيمريكس', 'بيكسيرو', 'جدري الماء'];
    const arabicStrings = Object.values(AR_TRANSLATIONS).flatMap((value) =>
      typeof value === 'string' ? [value] : typeof value === 'object' && value ? Object.values(value) : []
    );

    for (const pattern of forbiddenPatterns) {
      expect(arabicStrings.some((value) => typeof value === 'string' && value.includes(pattern))).toBe(false);
    }

    expect(AR_TRANSLATIONS.category_varicella).toBe('الجديري المائي');
    expect(AR_TRANSLATIONS.varicella).toBe('الجديري المائي');
  });
});
