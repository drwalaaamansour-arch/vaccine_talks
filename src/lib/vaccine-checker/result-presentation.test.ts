import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { collectImportantNotes } from '@/lib/vaccine-checker/result-notes';
import {
  dedupeNeedsReviewItems,
  enrichRecommendationsForPresentation,
  filterImportantNotesForDisplay,
  getConditionalNextDoseTranslationKey,
  getConditionalNextDoseTranslationParams,
  getProductDisplayLabel,
  getRecommendedDateLabelKey,
  isOverdueRecommendedDate,
  shouldHideCatchUpStartRecommendedDate,
  shouldHideOverdueUnadministeredRecommendedDate,
  shouldHideDoseLabelForTimingDisplay,
  shouldShowStatusOnCard,
} from '@/lib/vaccine-checker/result-presentation';
import { getTimingDisplayLines } from '@/lib/vaccine-checker/recommendation-timing';
import { type VaccineRecommendation } from '@/lib/vaccine-checker/types';

function dob(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

function reviewItem(
  overrides: Partial<VaccineRecommendation> = {}
): VaccineRecommendation {
  return {
    id: 'rotavirus-needs-review',
    vaccineCategory: 'rotavirus',
    doseLabelKey: 'doseLabel_reviewNeeded',
    status: 'needs-review',
    noteKeys: ['note_rotavirusProductUnknown'],
    reasonKey: 'reason_rotavirusProductUnknown',
    urgency: 0,
    ...overrides,
  };
}

describe('result presentation', () => {
  it('keeps English brand names for product labels', () => {
    expect(getProductDisplayLabel('vaxneuvance')).toBe('Vaxneuvance');
    expect(getProductDisplayLabel('prevenar13')).toBe('Prevenar 13');
  });

  it('hides redundant status labels inside section cards', () => {
    expect(shouldShowStatusOnCard('dueNow', 'due-now')).toBe(false);
    expect(shouldShowStatusOnCard('upcoming', 'upcoming')).toBe(false);
    expect(shouldShowStatusOnCard('needsReview', 'needs-review')).toBe(false);
  });

  it('deduplicates needs-review items by vaccine category', () => {
    const items = dedupeNeedsReviewItems([
      reviewItem({ id: 'a' }),
      reviewItem({ id: 'b', noteKeys: ['note_rotavirusProductUnknown'] }),
    ]);

    expect(items).toHaveLength(1);
  });

  it('does not add clinician review for missing-information-only needs review', () => {
    const notes = collectImportantNotes([reviewItem()]);
    expect(notes).not.toContain('note_clinicianReviewRecommended');
  });

  it('filters card notes out of important notes', () => {
    const items = [
      {
        id: 'pcv-dose2',
        vaccineCategory: 'pneumococcal' as const,
        product: 'vaxneuvance',
        doseLabelKey: 'doseLabel_dose2',
        status: 'upcoming' as const,
        noteKeys: ['note_vaxneuvanceTwoPlusOne'],
        urgency: 0,
      },
    ];

    const filtered = filterImportantNotesForDisplay(
      ['note_vaxneuvanceTwoPlusOne', 'note_rotavirusFinalDoseLimit'],
      items
    );

    expect(filtered).toEqual(['note_rotavirusFinalDoseLimit']);
  });

  it('filters varicella MMR notes from important notes when already shown on a card', () => {
    const items = [
      {
        id: 'varicella-dose1',
        vaccineCategory: 'varicella' as const,
        doseLabelKey: 'doseLabel_dose1',
        status: 'due-now' as const,
        noteKeys: ['note_varicellaMmrScheduling', 'note_varicellaMmrInterval'],
        urgency: 80,
      },
    ];

    const filtered = filterImportantNotesForDisplay(
      ['note_varicellaMmrInterval', 'note_rotavirusFinalDoseLimit'],
      items
    );

    expect(filtered).toEqual(['note_rotavirusFinalDoseLimit']);
  });

  it('keeps varicella MMR interval in important notes when it is not shown on a card', () => {
    const items = [
      {
        id: 'varicella-dose2',
        vaccineCategory: 'varicella' as const,
        doseLabelKey: 'doseLabel_dose2',
        status: 'upcoming' as const,
        noteKeys: ['note_varicellaMmrInterval'],
        urgency: 40,
      },
    ];

    const filtered = filterImportantNotesForDisplay(['note_varicellaMmrInterval'], items);

    expect(filtered).toEqual(['note_varicellaMmrInterval']);
  });

  it('detects overdue unadministered recommended dates', () => {
    const referenceDate = new Date(2026, 7, 22);
    const item: VaccineRecommendation = {
      id: 'varicella-dose2',
      vaccineCategory: 'varicella',
      doseLabelKey: 'doseLabel_dose2',
      status: 'due-now',
      recommendedDate: '2026-06-22',
      noteKeys: [],
      urgency: 95,
    };

    expect(isOverdueRecommendedDate(item, referenceDate)).toBe(true);
    expect(shouldHideOverdueUnadministeredRecommendedDate(item, referenceDate)).toBe(true);
  });

  it('keeps recommended date label when due-now date is today or later', () => {
    const referenceDate = new Date(2026, 7, 22);
    const item: VaccineRecommendation = {
      id: 'pcv-dose1-due',
      vaccineCategory: 'pneumococcal',
      doseLabelKey: 'doseLabel_dose1',
      status: 'due-now',
      recommendedDate: '2026-08-22',
      noteKeys: [],
      urgency: 95,
    };

    expect(isOverdueRecommendedDate(item, referenceDate)).toBe(false);
    expect(getRecommendedDateLabelKey(item, referenceDate)).toBe('resultRecommendedDate');
  });

  it('hides stale infant recommended dates for 9-month catch-up dose 1 with zero history', () => {
    const birth = dob(2025, 11, 27);
    const referenceDate = dob(2026, 8, 27);
    const input = {
      dob: birth,
      referenceDate,
      mmrDate: null,
      mmrDose2Date: null,
      mmrDates: [],
      routineVaccinesStatus: 'complete' as const,
      completedRoutineVisits: [],
      vaccineHistory: [],
    };
    const results = calculateVaccineRecommendations(input);

    const menb = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalB');
    expect(menb?.doseLabelKey).toBe('doseLabel_dose1');
    expect(menb?.status).toBe('due-now');
    expect(menb?.recommendedDate).toBeUndefined();
    expect(menb?.recommendedDateLabelKey).toBeUndefined();
    expect(getTimingDisplayLines(menb!, referenceDate)).toEqual([]);

    const menbBooster = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalB' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_booster'
    );
    expect(menbBooster?.timingKind).toBe('MINIMUM_START_ONLY');
    expect(menbBooster?.minimumValidDate).toBe('2026-12-27');
    expect(menbBooster?.recommendedDate).toBe('2026-12-27');
    expect(menbBooster?.windowStart).toBeUndefined();
    expect(menbBooster?.windowEnd).toBeUndefined();
    expect(getConditionalNextDoseTranslationKey(menbBooster!)).toBe(
      'resultConditionalBoosterStart'
    );
  });

  it('hides stale infant recommended dates for 4-month catch-up dose 1 with zero history', () => {
    const birth = dob(2026, 3, 22);
    const referenceDate = dob(2026, 7, 22);
    const input = {
      dob: birth,
      referenceDate,
      mmrDate: null,
      mmrDose2Date: null,
      mmrDates: [],
      routineVaccinesStatus: 'complete' as const,
      completedRoutineVisits: [],
      vaccineHistory: [],
    };
    const results = calculateVaccineRecommendations(input);

    for (const category of ['pneumococcal', 'meningococcalB', 'meningococcalACWY', 'rotavirus'] as const) {
      const item = results.dueNow.find((entry) => entry.vaccineCategory === category);
      expect(item?.status).toBe('due-now');
      expect(item?.doseLabelKey).toBe('doseLabel_dose1');
      expect(item?.recommendedDate).toBeUndefined();
      expect(item?.recommendedDateLabelKey).toBeUndefined();
      expect(getTimingDisplayLines(item!, referenceDate)).toEqual([]);
    }
  });

  it('hides stale routine recommended dates for catch-up dose 1 at age 2 years', () => {
    const birth = dob(2024, 8, 23);
    const referenceDate = dob(2026, 8, 23);
    const raw: VaccineRecommendation = {
      id: 'varicella-dose1',
      vaccineCategory: 'varicella',
      doseLabelKey: 'doseLabel_dose1',
      status: 'due-now',
      recommendedDate: '2025-08-23',
      noteKeys: ['note_varicellaMmrScheduling'],
      urgency: 80,
    };

    expect(shouldHideCatchUpStartRecommendedDate(raw, referenceDate, birth, true)).toBe(true);

    const [enriched] = enrichRecommendationsForPresentation(
      {
        dob: birth,
        referenceDate,
        mmrDate: referenceDate,
        mmrDates: [referenceDate],
        routineVaccinesStatus: 'complete',
        completedRoutineVisits: ['12months', '18months'],
        vaccineHistory: [],
      },
      [raw]
    );

    expect(enriched.recommendedDate).toBeUndefined();
    expect(getTimingDisplayLines(enriched, referenceDate)).toEqual([]);
  });

  it('uses simple recommended date wording for generic conditional follow-up doses', () => {
    const conditional: VaccineRecommendation = {
      id: 'varicella-dose2-conditional',
      vaccineCategory: 'varicella',
      doseLabelKey: 'doseLabel_dose2',
      status: 'upcoming',
      recommendedDate: '2026-11-23',
      noteKeys: [],
      urgency: 25,
      conditionalNextDose: true,
    };

    expect(getConditionalNextDoseTranslationKey(conditional)).toBe('resultConditionalNextFixedDose');
    expect(
      getConditionalNextDoseTranslationParams(
        conditional,
        (isoDate) => isoDate ?? '',
        (key) => key
      )
    ).toEqual({
      previousDose: 'doseLabel_dose1',
      nextDose: 'doseLabel_dose2',
      date: '2026-11-23',
    });
  });

  it('uses booster window wording for conditional booster windows', () => {
    const conditional: VaccineRecommendation = {
      id: 'menb-booster-conditional',
      vaccineCategory: 'meningococcalB',
      doseLabelKey: 'doseLabel_booster',
      status: 'upcoming',
      windowStart: '2027-10-23',
      windowEnd: '2028-09-23',
      noteKeys: [],
      urgency: 20,
      conditionalNextDose: true,
    };

    expect(getConditionalNextDoseTranslationKey(conditional)).toBe(
      'resultConditionalBoosterWindow'
    );
  });

  it('uses scheduled dose date wording for recorded follow-up doses', () => {
    const birth = dob(2024, 8, 23);
    const referenceDate = dob(2026, 8, 23);
    const item: VaccineRecommendation = {
      id: 'varicella-dose2',
      vaccineCategory: 'varicella',
      doseLabelKey: 'doseLabel_dose2',
      status: 'upcoming',
      recommendedDate: '2026-11-23',
      noteKeys: [],
      urgency: 40,
    };

    expect(getTimingDisplayLines(item, referenceDate)).toEqual([
      {
        key: 'resultScheduledDoseDate',
        params: {
          date: '2026-11-23',
          doseLabelKey: 'doseLabel_dose2',
        },
      },
    ]);
    expect(shouldHideDoseLabelForTimingDisplay(item, ['resultScheduledDoseDate'])).toBe(true);
  });

  it('keeps vaccine-specific conditional wording where needed', () => {
    expect(
      getConditionalNextDoseTranslationKey({
        id: 'influenza-dose2-conditional',
        vaccineCategory: 'influenza',
        doseLabelKey: 'doseLabel_dose2',
        status: 'upcoming',
        recommendedDate: '2026-09-20',
        noteKeys: [],
        urgency: 25,
        conditionalNextDose: true,
      })
    ).toBe('resultConditionalNextDoseInfluenza');
  });
});
