import { describe, expect, it } from 'vitest';
import {
  addDays,
  addMonths,
  addWeeks,
  toIsoDate,
  weeksAndDaysFromDob,
} from '@/lib/vaccine-checker/date-utils';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import {
  getDisplayCardNoteKeys,
  getRecommendedDateLabelKey,
} from '@/lib/vaccine-checker/result-presentation';
import { type CheckerInput, type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';

function dob(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

function ref(year: number, month: number, day: number): Date {
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
    vaccineHistory: [] as CheckerInput['vaccineHistory'],
    ...overrides,
  };
  const mmrDate = merged.mmrDate ?? null;
  const mmrDose2Date = merged.mmrDose2Date ?? null;
  const mmrDates = merged.mmrDates ?? [
    ...(mmrDate ? [mmrDate] : []),
    ...(mmrDose2Date ? [mmrDose2Date] : []),
  ].sort((a, b) => a.getTime() - b.getTime());

  return {
    ...merged,
    mmrDate,
    mmrDose2Date,
    mmrDates,
  };
}

function history(record: VaccineHistoryRecord): VaccineHistoryRecord {
  return record;
}

function statuses(results: ReturnType<typeof calculateVaccineRecommendations>): string[] {
  return [
    ...results.dueNow,
    ...results.eligibleNow,
    ...results.upcoming,
    ...results.ageLimitPassed,
    ...results.completed,
    ...results.needsReview,
  ].map((item) => `${item.vaccineCategory}:${item.status}:${item.doseLabelKey}`);
}

describe('date utils boundaries', () => {
  it('calculates 14 weeks + 6 days as exactly 104 days after DOB', () => {
    const birth = dob(2024, 1, 1);
    const boundary = weeksAndDaysFromDob(birth, 14, 6);
    expect(toIsoDate(boundary)).toBe(toIsoDate(addDays(addWeeks(birth, 14), 6)));
  });

  it('uses calendar months for 2 months after dose 1', () => {
    const dose1 = dob(2024, 1, 31);
    expect(toIsoDate(addMonths(dose1, 2))).toBe('2024-03-31');
  });
});

describe('rotavirus', () => {
  const birth = dob(2024, 1, 1);

  it('Rotarix 7-week-old 0 doses is eligible-now', () => {
    const today = addWeeks(birth, 7);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [history({ category: 'rotavirus', product: 'rotarix', numberOfDoses: 0, lastDoseDate: null, firstDoseDate: null, doseDates: [] })],
      })
    );
    expect(statuses(results)).toContain('rotavirus:eligible-now:doseLabel_dose1');
  });

  it('Rotarix 2 months 0 doses is due-now', () => {
    const today = addMonths(birth, 2);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [history({ category: 'rotavirus', product: 'rotarix', numberOfDoses: 0, lastDoseDate: null, firstDoseDate: null, doseDates: [] })],
      })
    );
    expect(statuses(results)).toContain('rotavirus:due-now:doseLabel_dose1');
  });

  it('Rotarix dose 1 schedules dose 2 at +2 calendar months', () => {
    const dose1 = addMonths(birth, 2);
    const today = addMonths(dose1, 2);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'rotavirus',
            product: 'rotarix',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      })
    );
    expect(statuses(results)).toContain('rotavirus:due-now:doseLabel_dose2');
  });

  it('Rotarix first-dose age limit passed', () => {
    const today = addWeeks(birth, 21);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [history({ category: 'rotavirus', product: 'rotarix', numberOfDoses: 0, lastDoseDate: null, firstDoseDate: null, doseDates: [] })],
      })
    );
    expect(statuses(results)).toContain('rotavirus:age-limit-passed:doseLabel_dose1');
  });

  it('RotaTeq at 14 weeks + 6 days can still start', () => {
    const today = weeksAndDaysFromDob(birth, 14, 6);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [history({ category: 'rotavirus', product: 'rotateq', numberOfDoses: 0, lastDoseDate: null, firstDoseDate: null, doseDates: [] })],
      })
    );
    expect(statuses(results)).toContain('rotavirus:due-now:doseLabel_dose1');
  });

  it('RotaTeq at 15 weeks 0 days cannot start', () => {
    const today = addWeeks(birth, 15);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [history({ category: 'rotavirus', product: 'rotateq', numberOfDoses: 0, lastDoseDate: null, firstDoseDate: null, doseDates: [] })],
      })
    );
    expect(statuses(results)).toContain('rotavirus:age-limit-passed:doseLabel_dose1');
  });

  it('RotaTeq with 2 doses schedules dose 3', () => {
    const dose1 = addMonths(birth, 2);
    const dose2 = addMonths(dose1, 2);
    const today = addMonths(dose2, 2);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'rotavirus',
            product: 'rotateq',
            numberOfDoses: 2,
            firstDoseDate: dose1,
            lastDoseDate: dose2,
            doseDates: [dose1, dose2],
          }),
        ],
      })
    );
    expect(statuses(results)).toContain('rotavirus:due-now:doseLabel_dose3');
  });

  it('unknown rotavirus product needs review', () => {
    const today = addMonths(birth, 2);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [history({ category: 'rotavirus', product: 'dontKnow', numberOfDoses: 1, firstDoseDate: addMonths(birth, 2), lastDoseDate: addMonths(birth, 2), doseDates: [addMonths(birth, 2)] })],
      })
    );
    expect(statuses(results)).toContain('rotavirus:needs-review:doseLabel_reviewNeeded');
  });
});

describe('PCV', () => {
  const birth = dob(2024, 1, 1);

  it('PCV at 7 weeks is eligible-now', () => {
    const today = addWeeks(birth, 7);
    const results = calculateVaccineRecommendations(baseInput(birth, today));
    expect(statuses(results)).toContain('pneumococcal:eligible-now:doseLabel_dose1');
  });

  it('Prevenar 13 started at 2 months recommends next primary dose', () => {
    const dose1 = addMonths(birth, 2);
    const today = addMonths(dose1, 2);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'prevenar13',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      })
    );
    expect(statuses(results)).toContain('pneumococcal:due-now:doseLabel_dose2');
  });

  it('Vaxneuvance 8-week interval uses 2+1 booster pathway', () => {
    const dose1 = addMonths(birth, 2);
    const dose2 = addDays(dose1, 56);
    const today = addMonths(birth, 13);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'vaxneuvance',
            numberOfDoses: 2,
            firstDoseDate: dose1,
            lastDoseDate: dose2,
            doseDates: [dose1, dose2],
          }),
        ],
      })
    );
    expect(statuses(results)).toContain('pneumococcal:due-now:doseLabel_booster');
  });

  it('Vaxneuvance short interval requires dose 3', () => {
    const dose1 = addMonths(birth, 2);
    const dose2 = addDays(dose1, 30);
    const today = addMonths(dose2, 2);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'vaxneuvance',
            numberOfDoses: 2,
            firstDoseDate: dose1,
            lastDoseDate: dose2,
            doseDates: [dose1, dose2],
          }),
        ],
      })
    );
    expect(statuses(results)).toContain('pneumococcal:due-now:doseLabel_dose3');
  });

  it('Prevenar 13 with 2 infant doses before 12 months recommends booster window', () => {
    const birthDate = dob(2025, 3, 2);
    const dose1 = dob(2025, 9, 2);
    const dose2 = dob(2025, 11, 2);
    const today = dob(2026, 9, 2);
    const results = calculateVaccineRecommendations(
      baseInput(birthDate, today, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'prevenar13',
            numberOfDoses: 2,
            firstDoseDate: dose1,
            lastDoseDate: dose2,
            doseDates: [dose1, dose2],
          }),
        ],
      })
    );

    const pcv = results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal');
    expect(pcv?.product).toBe('prevenar13');
    expect(pcv?.doseLabelKey).toBe('doseLabel_booster');
    expect(pcv?.recommendedDate).toBeUndefined();
    expect(pcv?.windowStart).toBe('2026-02-02');
    expect(pcv?.windowEnd).toBe('2026-06-02');
    expect(
      [...results.dueNow, ...results.upcoming].some(
        (item) => item.vaccineCategory === 'pneumococcal' && item.doseLabelKey === 'doseLabel_dose2'
      )
    ).toBe(false);
  });
});

describe('MenACWY', () => {
  const birth = dob(2024, 1, 1);

  it('Menactra previously received does not create separate Nimenrix missing vaccine', () => {
    const dose1 = addMonths(birth, 9);
    const today = addMonths(birth, 10);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'meningococcalACWY',
            product: 'menactra',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      })
    );
    const nimenrixItems = [...results.dueNow, ...results.upcoming, ...results.needsReview].filter(
      (item) => item.product === 'nimenrix'
    );
    expect(nimenrixItems).toHaveLength(0);
  });

  it('labels Nimenrix at age 2 years as a single-dose pathway', () => {
    const today = addMonths(birth, 24);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'meningococcalACWY',
            product: 'nimenrix',
            numberOfDoses: 0,
            firstDoseDate: null,
            lastDoseDate: null,
            doseDates: [],
          }),
        ],
      })
    );

    const menacwy = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalACWY');
    expect(menacwy?.doseLabelKey).toBe('doseLabel_singleDose');
    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'meningococcalACWY' && item.conditionalNextDose
      )
    ).toBe(false);
  });

  it('labels Menactra at age 2 years as a single-dose pathway', () => {
    const today = addMonths(birth, 24);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'meningococcalACWY',
            product: 'menactra',
            numberOfDoses: 0,
            firstDoseDate: null,
            lastDoseDate: null,
            doseDates: [],
          }),
        ],
      })
    );

    const menacwy = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalACWY');
    expect(menacwy?.doseLabelKey).toBe('doseLabel_singleDose');
  });

  it('keeps Menactra dose numbering for the 9–23 month two-dose pathway', () => {
    const today = addMonths(birth, 10);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'meningococcalACWY',
            product: 'menactra',
            numberOfDoses: 0,
            firstDoseDate: null,
            lastDoseDate: null,
            doseDates: [],
          }),
        ],
      })
    );

    const menacwy = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalACWY');
    expect(menacwy?.doseLabelKey).toBe('doseLabel_dose1');
  });
});

describe('Synflorix exact 5-year PCV boundary', () => {
  const birth = dob(2021, 8, 24);

  it('offers Synflorix on the exact 5th birthday', () => {
    const today = dob(2026, 8, 24);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'synflorix',
            numberOfDoses: 0,
            firstDoseDate: null,
            lastDoseDate: null,
            doseDates: [],
          }),
        ],
      })
    );

    expect(
      results.dueNow.some(
        (item) => item.vaccineCategory === 'pneumococcal' && item.product === 'synflorix'
      )
    ).toBe(true);
  });

  it('does not offer Synflorix for a new start the day after the 5th birthday', () => {
    const today = dob(2026, 8, 25);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'synflorix',
            numberOfDoses: 0,
            firstDoseDate: null,
            lastDoseDate: null,
            doseDates: [],
          }),
        ],
      })
    );

    expect(
      [...results.dueNow, ...results.upcoming, ...results.eligibleNow].some(
        (item) => item.vaccineCategory === 'pneumococcal' && item.product === 'synflorix'
      )
    ).toBe(false);
  });
});

describe('PCV for healthy children older than 5 years', () => {
  const birth = dob(2021, 8, 23);

  function catchUpAt(asOf: Date, vaccineHistory: VaccineHistoryRecord[] = []) {
    return calculateVaccineRecommendations(
      baseInput(birth, asOf, {
        routineVaccinesStatus: 'complete',
        completedRoutineVisits: ['12months', '18months'],
        vaccineHistory,
      })
    );
  }

  it('recommends one PCV dose only with single-dose label when product is unknown', () => {
    const results = catchUpAt(dob(2026, 8, 24));

    const pcv = results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal');
    expect(pcv?.doseLabelKey).toBe('doseLabel_singleDose');
    expect(pcv?.status).toBe('due-now');
    expect(pcv?.noteKeys).not.toContain('note_pcvCatchUpProductDependsOnDoses');
    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'pneumococcal' && item.conditionalNextDose
      )
    ).toBe(false);
  });

  it.each(['prevenar13', 'vaxneuvance', 'prevenar20'] as const)(
    'recommends one %s dose only after age 5 years',
    (product) => {
      const results = catchUpAt(dob(2026, 8, 24), [
        history({
          category: 'pneumococcal',
          product,
          numberOfDoses: 0,
          firstDoseDate: null,
          lastDoseDate: null,
          doseDates: [],
        }),
      ]);

      const pcv = results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal');
      expect(pcv?.doseLabelKey).toBe('doseLabel_singleDose');
      expect(pcv?.product).toBe(product);
      expect(
        results.upcoming.some(
          (item) => item.vaccineCategory === 'pneumococcal' && item.conditionalNextDose
        )
      ).toBe(false);
    }
  );

  it('does not offer Synflorix for a new start after age 5 years', () => {
    const results = catchUpAt(dob(2026, 8, 24), [
      history({
        category: 'pneumococcal',
        product: 'synflorix',
        numberOfDoses: 0,
        firstDoseDate: null,
        lastDoseDate: null,
        doseDates: [],
      }),
    ]);

    expect(
      [...results.dueNow, ...results.upcoming, ...results.eligibleNow].some(
        (item) => item.vaccineCategory === 'pneumococcal' && item.product === 'synflorix'
      )
    ).toBe(false);
  });

  it('still supports an in-progress Synflorix series started before age 5 years', () => {
    const dose1 = dob(2025, 8, 23);
    const results = catchUpAt(dob(2026, 8, 24), [
      history({
        category: 'pneumococcal',
        product: 'synflorix',
        numberOfDoses: 1,
        firstDoseDate: dose1,
        lastDoseDate: dose1,
        doseDates: [dose1],
      }),
    ]);

    const pcv = [...results.dueNow, ...results.upcoming].find(
      (item) => item.vaccineCategory === 'pneumococcal' && item.product === 'synflorix'
    );
    expect(pcv?.doseLabelKey).toBe('doseLabel_dose2');
  });
});

describe('varicella and MMR interaction', () => {
  const birth = dob(2023, 1, 1);

  it('adjusts dose 2 when MMR was within 4 weeks of recommended varicella dose 2', () => {
    const dose1 = addMonths(birth, 12);
    const dose2Recommended = addMonths(dose1, 3);
    const mmr = addDays(dose2Recommended, -14);
    const today = dose2Recommended;
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        mmrDate: mmr,
        vaccineHistory: [
          history({
            category: 'varicella',
            product: 'varivax',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      })
    );
    const dose2 = [...results.dueNow, ...results.upcoming].find(
      (item) => item.vaccineCategory === 'varicella' && item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(dose2?.noteKeys).toContain('note_varicellaMmrInterval');
  });

  it('adjusts dose 2 earlier when varicella was given before a future MMR dose', () => {
    const dose1 = addMonths(birth, 12);
    const dose2Recommended = addMonths(dose1, 3);
    const mmr = addDays(dose2Recommended, 14);
    const today = dose2Recommended;
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        mmrDate: mmr,
        vaccineHistory: [
          history({
            category: 'varicella',
            product: 'varivax',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      })
    );
    const dose2 = [...results.dueNow, ...results.upcoming].find(
      (item) => item.vaccineCategory === 'varicella' && item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(dose2?.recommendedDate).toBe(toIsoDate(addDays(mmr, -28)));
    expect(dose2?.noteKeys).toContain('note_varicellaMmrInterval');
  });
});

describe('varicella MMR contextual history at 12 months', () => {
  const birth = dob(2025, 8, 23);
  const today = dob(2026, 8, 23);

  function catchUpWithMmr(mmrDate: Date) {
    return baseInput(birth, today, {
      routineVaccinesStatus: 'complete',
      vaccineHistory: [],
      mmrDate,
      mmrDates: [mmrDate],
    });
  }

  it('shows varicella as needing the MMR date when it is missing instead of silently omitting it', () => {
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        routineVaccinesStatus: 'complete',
        vaccineHistory: [],
      })
    );

    const allVaricella = [
      ...results.dueNow,
      ...results.upcoming,
      ...results.needsReview,
      ...results.eligibleNow,
    ].filter((item) => item.vaccineCategory === 'varicella');

    expect(allVaricella).toHaveLength(1);
    expect(allVaricella[0]?.status).toBe('needs-review');
    expect(allVaricella[0]?.reasonKey).toBe('reason_varicellaMmrDateNeeded');
    expect(results.importantNotes).not.toContain('note_clinicianReviewRecommended');
  });

  it('shows varicella due now when MMR was given on the as-of date', () => {
    const results = calculateVaccineRecommendations(catchUpWithMmr(today));
    const varicella = results.dueNow.find((item) => item.vaccineCategory === 'varicella');
    expect(varicella?.doseLabelKey).toBe('doseLabel_dose1');
    expect(varicella?.status).toBe('due-now');
    expect(varicella?.noteKeys).toContain('note_varicellaMmrScheduling');
  });

  it('schedules varicella at MMR + 4 weeks when MMR was given 1 week ago', () => {
    const mmr = ref(2026, 8, 16);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        routineVaccinesStatus: 'complete',
        vaccineHistory: [],
        mmrDate: mmr,
        mmrDates: [mmr],
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
    expect(varicella?.recommendedDate).toBe('2026-09-13');
    expect(varicella?.noteKeys).toContain('note_varicellaMmrInterval');

    expect(
      getDisplayCardNoteKeys(
        varicella!,
        baseInput(birth, today, {
          routineVaccinesStatus: 'complete',
          vaccineHistory: [],
          mmrDate: mmr,
          mmrDates: [mmr],
        })
      )
    ).toEqual(['note_varicellaDelayedAfterRecentMmr']);

    const varicellaDose2 = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'varicella' &&
        item.doseLabelKey === 'doseLabel_dose2' &&
        item.conditionalNextDose
    );
    expect(varicellaDose2?.recommendedDate).toBe('2026-12-13');
    expect(varicellaDose2?.conditionalProjectedFromDate).toBe('2026-09-13');
  });

  it('schedules varicella at MMR + 4 weeks when MMR was given 7 days ago', () => {
    const mmr = addDays(today, -7);
    const results = calculateVaccineRecommendations(catchUpWithMmr(mmr));
    const varicella = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'varicella' &&
        item.doseLabelKey === 'doseLabel_dose1' &&
        !item.conditionalNextDose
    );
    expect(varicella?.status).toBe('upcoming');
    expect(varicella?.recommendedDate).toBe(toIsoDate(addDays(mmr, 28)));
    expect(results.dueNow.some((item) => item.vaccineCategory === 'varicella')).toBe(false);
  });

  it.each([
    { daysAgo: 0, expectedStatus: 'due-now' as const },
    { daysAgo: 1, expectedStatus: 'upcoming' as const },
    { daysAgo: 27, expectedStatus: 'upcoming' as const },
    { daysAgo: 28, expectedStatus: 'due-now' as const },
    { daysAgo: 35, expectedStatus: 'due-now' as const },
  ])('applies MMR gap boundary when MMR was given $daysAgo days ago', ({ daysAgo, expectedStatus }) => {
    const mmr = addDays(today, -daysAgo);
    const results = calculateVaccineRecommendations(catchUpWithMmr(mmr));
    const varicella = [...results.dueNow, ...results.upcoming].find(
      (item) =>
        item.vaccineCategory === 'varicella' &&
        item.doseLabelKey === 'doseLabel_dose1' &&
        !item.conditionalNextDose
    );

    expect(varicella?.status).toBe(expectedStatus);
    if (expectedStatus === 'upcoming') {
      expect(varicella?.recommendedDate).toBe(toIsoDate(addDays(mmr, 28)));
    }
  });

  it('shows varicella due now when MMR was given 4 weeks ago', () => {
    const mmr = addDays(today, -28);
    const results = calculateVaccineRecommendations(catchUpWithMmr(mmr));
    const varicella = results.dueNow.find((item) => item.vaccineCategory === 'varicella');
    expect(varicella?.doseLabelKey).toBe('doseLabel_dose1');
    expect(varicella?.status).toBe('due-now');
  });
});

describe('varicella without MMR date for older children', () => {
  const birth = dob(2021, 8, 24);
  const today = dob(2026, 8, 24);

  it('shows varicella due now for a 5-year-old with routine vaccines complete and no MMR date', () => {
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        routineVaccinesStatus: 'complete',
        completedRoutineVisits: ['12months', '18months'],
        vaccineHistory: [],
      })
    );

    const varicella = results.dueNow.find((item) => item.vaccineCategory === 'varicella');
    expect(varicella?.doseLabelKey).toBe('doseLabel_dose1');
    expect(varicella?.status).toBe('due-now');
  });
});

describe('routine vaccines missing', () => {
  const birth = dob(2023, 10, 1);

  it('14-month child with complete routine has no missing visits', () => {
    const today = addMonths(birth, 14);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, { routineVaccinesStatus: 'complete' })
    );
    expect(results.routineMissing).toHaveLength(0);
  });

  it('14-month child with some visits missing shows only due missing visits', () => {
    const today = addMonths(birth, 14);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        routineVaccinesStatus: 'some',
        completedRoutineVisits: ['birth', '1month', '2months'],
      })
    );
    expect(results.routineMissing.map((item) => item.visitKey)).toEqual([
      '4months',
      '6months',
      '9months',
      '12months',
    ]);
    expect(results.routineMissing.every((item) => item.vaccineKeys.length === 0)).toBe(true);
  });

  it('12-month child with none selected excludes the future 18-month visit', () => {
    const today = addMonths(birth, 12);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, { routineVaccinesStatus: 'none' })
    );
    expect(results.routineMissing.map((item) => item.visitKey)).not.toContain('18months');
    expect(results.routineMissing.length).toBeGreaterThan(0);
  });
});

describe('HPV and influenza', () => {
  const birth = dob(2012, 1, 1);

  it('Gardasil 9 dose 2 under 5 months requires third dose', () => {
    const dose1 = ref(2024, 1, 1);
    const dose2 = ref(2024, 4, 1);
    const today = ref(2024, 8, 1);
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        vaccineHistory: [
          history({
            category: 'hpv',
            product: 'gardasil9',
            numberOfDoses: 2,
            firstDoseDate: dose1,
            lastDoseDate: dose2,
            doseDates: [dose1, dose2],
          }),
        ],
      })
    );
    expect(statuses(results)).toContain('hpv:due-now:doseLabel_dose3');
  });

  it('first influenza vaccination in a 2-year-old recommends priming dose 1', () => {
    const birthChild = dob(2022, 1, 1);
    const today = addMonths(birthChild, 24);
    const results = calculateVaccineRecommendations(baseInput(birthChild, today));
    expect(statuses(results)).toContain('influenza:due-now:doseLabel_dose1');
  });

  it('primed 5-year-old gets one seasonal dose', () => {
    const birthChild = dob(2020, 1, 1);
    const today = ref(2025, 11, 1);
    const results = calculateVaccineRecommendations(
      baseInput(birthChild, today, {
        vaccineHistory: [
          history({
            category: 'influenza',
            numberOfDoses: 2,
            firstDoseDate: ref(2024, 10, 1),
            lastDoseDate: ref(2024, 11, 15),
            doseDates: [ref(2024, 10, 1), ref(2024, 11, 15)],
            influenzaPrimingComplete: true,
          }),
        ],
      })
    );
    expect(statuses(results)).toContain('influenza:due-now:doseLabel_seasonDose');
  });

  it('6-month-old needing priming shows conditional dose 2 four weeks after dose 1', () => {
    const birthChild = dob(2026, 2, 23);
    const today = dob(2026, 8, 23);

    const results = calculateVaccineRecommendations(
      baseInput(birthChild, today, {
        routineVaccinesStatus: 'complete',
        vaccineHistory: [],
      })
    );

    const dose1 = results.dueNow.find((item) => item.vaccineCategory === 'influenza');
    expect(dose1?.doseLabelKey).toBe('doseLabel_dose1');
    expect(dose1?.status).toBe('due-now');

    const conditionalDose2 = results.upcoming.find(
      (item) => item.vaccineCategory === 'influenza' && item.conditionalNextDose
    );
    expect(conditionalDose2?.doseLabelKey).toBe('doseLabel_dose2');
    expect(conditionalDose2?.recommendedDate).toBe('2026-09-20');
    expect(conditionalDose2?.status).toBe('upcoming');

    const directDose2 = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'influenza' &&
        item.doseLabelKey === 'doseLabel_dose2' &&
        !item.conditionalNextDose
    );
    expect(directDose2).toBeUndefined();
  });
});

describe('healthy 2-month-old with complete routine and no additional history', () => {
  const birth = dob(2024, 6, 15);
  const today = addMonths(birth, 2);

  it('shows actionable due-now results with useful upcoming preview', () => {
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        routineVaccinesStatus: 'complete',
        vaccineHistory: [],
      })
    );

    const dueCategories = results.dueNow.map((item) => item.vaccineCategory);
    expect(dueCategories).toEqual(
      expect.arrayContaining(['rotavirus', 'pneumococcal', 'meningococcalB', 'meningococcalACWY'])
    );
    expect(dueCategories).toHaveLength(4);
    expect(results.needsReview).toHaveLength(0);
    expect(results.routineMissing).toHaveLength(0);

    const rotavirus = results.dueNow.find((item) => item.vaccineCategory === 'rotavirus');
    expect(rotavirus?.doseLabelKey).toBe('doseLabel_dose1');
    expect(rotavirus?.noteKeys).toContain('note_rotavirusProductDependsOnChoice');
    expect(rotavirus?.noteKeys).not.toContain('note_rotavirusProductNeededForSeries');

    const menb = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalB');
    expect(menb?.noteKeys).not.toContain('note_menbFirstYearConsideration');
    expect(menb?.recommendedDate).toBeTruthy();

    const menacwy = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalACWY');
    expect(menacwy?.noteKeys).not.toContain('note_menacwyFirstYearConsideration');
    expect(menacwy?.noteKeys).not.toContain('note_menacwyProductScheduleDependsOnAge');
    expect(menacwy?.product).toBe('nimenrix');

    const allShownCategories = [
      ...results.dueNow,
      ...results.eligibleNow,
      ...results.upcoming,
      ...results.needsReview,
    ].map((item) => item.vaccineCategory);
    expect(allShownCategories).not.toContain('varicella');
    expect(allShownCategories).not.toContain('hepatitisA');
    expect(allShownCategories).not.toContain('influenza');
    expect(allShownCategories).not.toContain('hpv');

    expect(results.importantNotes).not.toContain('note_menbFirstYearConsideration');
    expect(results.importantNotes).not.toContain('note_menacwyFirstYearConsideration');
    expect(results.importantNotes).not.toContain('note_rotavirusProductDependsOnChoice');
    expect(results.importantNotes).toContain('note_rotavirusFinalDoseLimit');

    const conditionalUpcoming = results.upcoming.filter((item) => item.conditionalNextDose);
    expect(conditionalUpcoming.length).toBe(5);

    const pcv = results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal');
    expect(pcv?.noteKeys).toContain('note_pcvRemainingDosesDependOnProduct');
    expect(conditionalUpcoming.every((item) => item.status === 'upcoming')).toBe(true);

    const menbBoosterConditional = conditionalUpcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalB' && item.doseLabelKey === 'doseLabel_booster'
    );
    expect(menbBoosterConditional?.windowStart).toBeTruthy();
    expect(menbBoosterConditional?.windowEnd).toBeTruthy();
    expect(menbBoosterConditional?.recommendedDate).toBeUndefined();
  });
});

describe('7-week boundary case (04/07/2026 DOB, 22/08/2026 as-of)', () => {
  const birth = dob(2026, 7, 4);
  const today = dob(2026, 8, 22);
  const recommendedStart = '2026-09-04';
  const additionalCategories = [
    'rotavirus',
    'pneumococcal',
    'meningococcalACWY',
    'meningococcalB',
  ] as const;

  it('places rotavirus, PCV, and MenACWY in eligible-now; MenB in upcoming; none due-now', () => {
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        routineVaccinesStatus: 'complete',
        vaccineHistory: [],
      })
    );

    const dueNowAdditional = results.dueNow.filter((item) =>
      additionalCategories.includes(item.vaccineCategory as (typeof additionalCategories)[number])
    );
    expect(dueNowAdditional).toHaveLength(0);

    const eligibleCategories = results.eligibleNow.map((item) => item.vaccineCategory);
    expect(eligibleCategories).toEqual(
      expect.arrayContaining(['rotavirus', 'pneumococcal', 'meningococcalACWY'])
    );
    expect(eligibleCategories.filter((category) => category === 'meningococcalACWY')).toHaveLength(
      1
    );

    for (const category of ['rotavirus', 'pneumococcal', 'meningococcalACWY'] as const) {
      const item = results.eligibleNow.find((entry) => entry.vaccineCategory === category);
      expect(item?.status).toBe('eligible-now');
      expect(item?.doseLabelKey).toBe('doseLabel_dose1');
      expect(item?.recommendedDate).toBe(recommendedStart);
    }

    const menb = results.upcoming.find(
      (item) => item.vaccineCategory === 'meningococcalB' && !item.conditionalNextDose
    );
    expect(menb?.status).toBe('not-yet-eligible');
    expect(menb?.doseLabelKey).toBe('doseLabel_dose1');
    expect(menb?.recommendedDate).toBe(recommendedStart);

    const menacwyEligible = results.eligibleNow.find(
      (item) => item.vaccineCategory === 'meningococcalACWY'
    );
    expect(menacwyEligible?.product).toBe('nimenrix');
    expect(menacwyEligible?.noteKeys).not.toContain('note_menacwyProductScheduleDependsOnAge');

    const menacwyConditional = results.upcoming.find(
      (item) => item.vaccineCategory === 'meningococcalACWY' && item.conditionalNextDose
    );
    expect(menacwyConditional?.product).toBe('nimenrix');
    expect(menacwyConditional?.doseLabelKey).toBe('doseLabel_dose2');
    expect(menacwyConditional?.recommendedDate).toBe('2026-10-22');

    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'meningococcalB' && item.conditionalNextDose
      )
    ).toBe(false);
  });
});

describe('4-month boundary case (22/04/2026 DOB, 22/08/2026 as-of)', () => {
  const birth = dob(2026, 4, 22);
  const today = dob(2026, 8, 22);
  const conditionalDose2Date = '2026-10-22';
  const additionalCategories = [
    'rotavirus',
    'pneumococcal',
    'meningococcalACWY',
    'meningococcalB',
  ] as const;

  it('shows dose 1 due now without stale infant dates, rotarix-only guidance, and as-of-based conditionals', () => {
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        routineVaccinesStatus: 'complete',
        vaccineHistory: [],
      })
    );

    for (const category of ['pneumococcal', 'meningococcalB', 'meningococcalACWY'] as const) {
      const item = results.dueNow.find((entry) => entry.vaccineCategory === category);
      expect(item?.status).toBe('due-now');
      expect(item?.doseLabelKey).toBe('doseLabel_dose1');
      expect(item?.recommendedDate).toBeUndefined();
      expect(item?.recommendedDateLabelKey).toBeUndefined();
      expect(getRecommendedDateLabelKey(item!, today)).toBe('resultRecommendedDate');
    }

    const rotavirus = results.dueNow.find((item) => item.vaccineCategory === 'rotavirus');
    expect(rotavirus?.status).toBe('due-now');
    expect(rotavirus?.doseLabelKey).toBe('doseLabel_dose1');
    expect(rotavirus?.recommendedDate).toBeUndefined();
    expect(rotavirus?.recommendedDateLabelKey).toBeUndefined();
    expect(rotavirus?.product).toBe('rotarix');
    expect(rotavirus?.noteKeys).toContain('note_rotavirusRotarixOnlyCatchUp');
    expect(rotavirus?.noteKeys).not.toContain('note_rotavirusProductDependsOnChoice');

    expect(
      results.dueNow.some(
        (item) =>
          item.vaccineCategory === 'rotavirus' &&
          item.product === 'rotateq' &&
          item.status === 'due-now'
      )
    ).toBe(false);

    const rotateqCatchUp = [...results.dueNow, ...results.eligibleNow, ...results.upcoming].find(
      (item) => item.vaccineCategory === 'rotavirus' && item.product === 'rotateq'
    );
    expect(rotateqCatchUp).toBeUndefined();

    expect(
      results.upcoming.filter(
        (item) => item.doseLabelKey === 'doseLabel_dose2' && !item.conditionalNextDose
      )
    ).toHaveLength(0);

    const conditionalByCategory = Object.fromEntries(
      additionalCategories.map((category) => [
        category,
        results.upcoming.find(
          (item) => item.vaccineCategory === category && item.conditionalNextDose
        ),
      ])
    );

    for (const category of ['rotavirus', 'meningococcalB'] as const) {
      expect(conditionalByCategory[category]?.doseLabelKey).toBe('doseLabel_dose2');
      expect(conditionalByCategory[category]?.recommendedDate).toBe(conditionalDose2Date);
      expect(conditionalByCategory[category]?.recommendedDate).not.toBe('2026-08-22');
    }

    expect(conditionalByCategory.pneumococcal).toBeUndefined();

    expect(conditionalByCategory.meningococcalACWY?.doseLabelKey).toBe('doseLabel_dose2');
    expect(conditionalByCategory.meningococcalACWY?.product).toBe('nimenrix');
    expect(conditionalByCategory.meningococcalACWY?.recommendedDate).toBe(conditionalDose2Date);

    expect(conditionalByCategory.rotavirus?.product).toBe('rotarix');
  });
});

describe('today boundary: recommendedDate === asOfDate is due-now', () => {
  const birth = dob(2026, 4, 23);
  const today = dob(2026, 8, 23);
  const dose1 = dob(2026, 6, 23);
  const dose2Date = '2026-08-23';
  const categories = [
    'rotavirus',
    'pneumococcal',
    'meningococcalB',
    'meningococcalACWY',
  ] as const;

  const vaccineHistory = [
    history({
      category: 'rotavirus',
      product: 'rotarix',
      numberOfDoses: 1,
      firstDoseDate: dose1,
      lastDoseDate: dose1,
      doseDates: [dose1],
    }),
    history({
      category: 'pneumococcal',
      product: 'synflorix',
      numberOfDoses: 1,
      firstDoseDate: dose1,
      lastDoseDate: dose1,
      doseDates: [dose1],
    }),
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
  ];

  it('classifies dose 2 as due-now when recommended date equals as-of date', () => {
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        routineVaccinesStatus: 'complete',
        vaccineHistory,
      })
    );

    for (const category of categories) {
      const dueItem = results.dueNow.find(
        (item) => item.vaccineCategory === category && item.doseLabelKey === 'doseLabel_dose2'
      );
      expect(dueItem, `${category} dose 2 should be due-now`).toBeDefined();
      expect(dueItem?.status).toBe('due-now');
      expect(dueItem?.recommendedDate).toBe(dose2Date);
    }

    const upcomingDose2 = results.upcoming.filter(
      (item) =>
        categories.includes(item.vaccineCategory as (typeof categories)[number]) &&
        item.doseLabelKey === 'doseLabel_dose2' &&
        !item.conditionalNextDose
    );
    expect(upcomingDose2).toHaveLength(0);
  });
});

describe('8-month catch-up scenario (23/12/2025 DOB, 23/08/2026 as-of)', () => {
  const birth = dob(2025, 12, 23);
  const today = dob(2026, 8, 23);

  it('matches rotavirus age-limit, due-now primaries, and conditional follow-up doses', () => {
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        routineVaccinesStatus: 'complete',
        vaccineHistory: [],
      })
    );

    expect(results.dueNow.some((item) => item.vaccineCategory === 'rotavirus')).toBe(false);

    const rotavirusAgeLimit = results.ageLimitPassed.find(
      (item) => item.vaccineCategory === 'rotavirus'
    );
    expect(rotavirusAgeLimit?.status).toBe('age-limit-passed');
    expect(rotavirusAgeLimit?.reasonKey).toBe('reason_rotavirusCatchUpStartLimitPassed');

    for (const category of [
      'pneumococcal',
      'meningococcalB',
      'meningococcalACWY',
      'influenza',
    ] as const) {
      const dose1 = results.dueNow.find((item) => item.vaccineCategory === category);
      expect(dose1?.doseLabelKey).toBe('doseLabel_dose1');
      expect(dose1?.status).toBe('due-now');
    }

    expect(results.dueNow).toHaveLength(4);

    const influenzaConditional = results.upcoming.find(
      (item) => item.vaccineCategory === 'influenza' && item.conditionalNextDose
    );
    expect(influenzaConditional?.doseLabelKey).toBe('doseLabel_dose2');
    expect(influenzaConditional?.recommendedDate).toBe('2026-09-20');

    const pcv = results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal');
    expect(pcv?.noteKeys).not.toContain('note_pcvRemainingDosesDependOnProduct');

    const pcvDose2Conditional = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'pneumococcal' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(pcvDose2Conditional?.recommendedDate).toBe('2026-10-23');

    const pcvBoosterConditional = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'pneumococcal' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_booster'
    );
    expect(pcvBoosterConditional?.recommendedDate).toBe('2026-12-23');

    const menbConditional = results.upcoming.find(
      (item) => item.vaccineCategory === 'meningococcalB' && item.conditionalNextDose
    );
    expect(menbConditional?.doseLabelKey).toBe('doseLabel_dose2');
    expect(menbConditional?.recommendedDate).toBe('2026-10-23');

    const menacwy = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalACWY');
    expect(menacwy?.product).toBe('nimenrix');
    expect(menacwy?.noteKeys).not.toContain('note_menacwyProductScheduleDependsOnAge');

    const menacwyConditional = results.upcoming.find(
      (item) => item.vaccineCategory === 'meningococcalACWY' && item.conditionalNextDose
    );
    expect(menacwyConditional?.product).toBe('nimenrix');
    expect(menacwyConditional?.doseLabelKey).toBe('doseLabel_booster');
    expect(menacwyConditional?.recommendedDate).toBe('2026-12-23');
  });
});

describe('12-month catch-up scenario (23/08/2025 DOB, 23/08/2026 as-of)', () => {
  const birth = dob(2025, 8, 23);
  const today = dob(2026, 8, 23);

  function baseCatchUp(overrides: Partial<Parameters<typeof baseInput>[2]> = {}) {
    return baseInput(birth, today, {
      routineVaccinesStatus: 'complete',
      vaccineHistory: [],
      ...overrides,
    });
  }

  it('shows age-appropriate due-now primaries without infant overdue dates', () => {
    const results = calculateVaccineRecommendations(
      baseCatchUp({
        mmrDate: today,
        mmrDates: [today],
      })
    );

    expect(results.dueNow.some((item) => item.vaccineCategory === 'rotavirus')).toBe(false);
    expect(results.ageLimitPassed.some((item) => item.vaccineCategory === 'rotavirus')).toBe(true);

    const dueCategories = results.dueNow.map((item) => item.vaccineCategory);
    expect(dueCategories).toEqual(
      expect.arrayContaining([
        'pneumococcal',
        'meningococcalB',
        'meningococcalACWY',
        'varicella',
        'hepatitisA',
        'influenza',
      ])
    );
    const additionalDueNow = results.dueNow.filter((item) => item.vaccineCategory !== 'routine');
    expect(additionalDueNow).toHaveLength(6);

    for (const category of ['pneumococcal', 'meningococcalB'] as const) {
      const dose1 = additionalDueNow.find((item) => item.vaccineCategory === category);
      expect(dose1?.doseLabelKey).toBe('doseLabel_dose1');
      expect(dose1?.recommendedDate).toBeUndefined();
    }

    const menacwy = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalACWY');
    expect(menacwy?.doseLabelKey).toBe('doseLabel_dose1');
    expect(menacwy?.noteKeys).toContain('note_menacwyProductDoseCountDependsOnProduct');
    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'meningococcalACWY' && item.conditionalNextDose
      )
    ).toBe(false);
  });

  it('projects conditional follow-up doses for eligible vaccines', () => {
    const results = calculateVaccineRecommendations(
      baseCatchUp({
        mmrDate: today,
        mmrDates: [today],
      })
    );
    const conditional = (category: string) =>
      results.upcoming.find(
        (item) => item.vaccineCategory === category && item.conditionalNextDose
      );

    expect(conditional('influenza')?.recommendedDate).toBe('2026-09-20');
    expect(
      results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal')?.noteKeys
    ).not.toContain('note_pcvRemainingDosesDependOnProduct');
    expect(conditional('pneumococcal')?.doseLabelKey).toBe('doseLabel_dose2');
    expect(conditional('pneumococcal')?.recommendedDate).toBe('2026-10-23');
    expect(conditional('meningococcalB')?.doseLabelKey).toBe('doseLabel_dose2');
    expect(conditional('meningococcalB')?.recommendedDate).toBe('2026-10-23');
    expect(conditional('varicella')?.recommendedDate).toBe('2026-11-23');
    expect(conditional('hepatitisA')?.recommendedDate).toBe('2027-02-23');

    const menbBooster = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalB' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_booster'
    );
    expect(menbBooster?.windowStart).toBe('2027-10-23');
    expect(menbBooster?.windowEnd).toBe('2028-09-23');
    expect(menbBooster?.recommendedDate).toBeUndefined();
    expect(menbBooster?.timingKind).toBe('RECOMMENDED_WINDOW');
  });

  it('includes varicella MMR scheduling note on dose 1', () => {
    const results = calculateVaccineRecommendations(
      baseCatchUp({
        mmrDate: today,
        mmrDates: [today],
      })
    );
    const varicella = results.dueNow.find((item) => item.vaccineCategory === 'varicella');
    expect(varicella?.noteKeys).toContain('note_varicellaMmrScheduling');
  });
});

describe('MenACWY product-specific catch-up at 12 months', () => {
  const birth = dob(2025, 8, 23);
  const today = dob(2026, 8, 23);

  it('shows dose 1 due with product-dependent note when product is unknown', () => {
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        routineVaccinesStatus: 'complete',
        vaccineHistory: [
          history({
            category: 'meningococcalACWY',
            product: 'dontKnow',
            numberOfDoses: 0,
            firstDoseDate: null,
            lastDoseDate: null,
            doseDates: [],
          }),
        ],
      })
    );

    const menacwy = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalACWY');
    expect(menacwy?.doseLabelKey).toBe('doseLabel_dose1');
    expect(menacwy?.noteKeys).toContain('note_menacwyProductDoseCountDependsOnProduct');
    expect(results.needsReview.some((item) => item.vaccineCategory === 'meningococcalACWY')).toBe(
      false
    );
    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'meningococcalACWY' && item.conditionalNextDose
      )
    ).toBe(false);
  });

  it('completes after one Nimenrix dose when started at 12 months', () => {
    const dose1 = today;
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        routineVaccinesStatus: 'complete',
        vaccineHistory: [
          history({
            category: 'meningococcalACWY',
            product: 'nimenrix',
            numberOfDoses: 1,
            firstDoseDate: dose1,
            lastDoseDate: dose1,
            doseDates: [dose1],
          }),
        ],
      })
    );

    expect(statuses(results)).toContain('meningococcalACWY:completed:doseLabel_seriesComplete');
    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'meningococcalACWY' && item.conditionalNextDose
      )
    ).toBe(false);
  });

  it('projects Menactra dose 2 three months after dose 1', () => {
    const results = calculateVaccineRecommendations(
      baseInput(birth, today, {
        routineVaccinesStatus: 'complete',
        vaccineHistory: [
          history({
            category: 'meningococcalACWY',
            product: 'menactra',
            numberOfDoses: 0,
            firstDoseDate: null,
            lastDoseDate: null,
            doseDates: [],
          }),
        ],
      })
    );

    const menacwy = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalACWY');
    expect(menacwy?.product).toBe('menactra');

    const conditional = results.upcoming.find(
      (item) => item.vaccineCategory === 'meningococcalACWY' && item.conditionalNextDose
    );
    expect(conditional?.doseLabelKey).toBe('doseLabel_dose2');
    expect(conditional?.product).toBe('menactra');
    expect(conditional?.recommendedDate).toBe('2026-11-23');
  });
});

describe('2-year healthy catch-up scenario (23/08/2024 DOB, 23/08/2026 as-of)', () => {
  const birth = dob(2024, 8, 23);
  const today = dob(2026, 8, 23);
  const mmrDose1Date = dob(2025, 8, 23);
  const mmrDose2Date = dob(2026, 2, 23);

  function baseCatchUp(overrides: Partial<Parameters<typeof baseInput>[2]> = {}) {
    return baseInput(birth, today, {
      routineVaccinesStatus: 'complete',
      completedRoutineVisits: ['12months', '18months'],
      mmrDate: mmrDose1Date,
      mmrDose2Date: mmrDose2Date,
      mmrDates: [mmrDose1Date, mmrDose2Date],
      vaccineHistory: [],
      ...overrides,
    });
  }

  it('shows the expected due-now vaccines without HPV or rotavirus', () => {
    const results = calculateVaccineRecommendations(baseCatchUp());

    const dueCategories = results.dueNow.map((item) => item.vaccineCategory);
    expect(dueCategories).toEqual(
      expect.arrayContaining([
        'pneumococcal',
        'meningococcalB',
        'meningococcalACWY',
        'influenza',
        'varicella',
        'hepatitisA',
      ])
    );
    expect(dueCategories).not.toContain('hpv');
    expect(dueCategories).not.toContain('rotavirus');
    expect(results.dueNow).toHaveLength(6);

    expect(results.ageLimitPassed.some((item) => item.vaccineCategory === 'rotavirus')).toBe(true);
  });

  it('includes MenB and MenACWY dose 1 at age 2 years', () => {
    const results = calculateVaccineRecommendations(baseCatchUp());

    const menb = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalB');
    expect(menb?.doseLabelKey).toBe('doseLabel_dose1');
    expect(menb?.status).toBe('due-now');
    expect(menb?.product).toBe('bexsero');
    expect(menb?.recommendedDate).toBeUndefined();

    const menacwy = results.dueNow.find((item) => item.vaccineCategory === 'meningococcalACWY');
    expect(menacwy?.doseLabelKey).toBe('doseLabel_singleDose');
    expect(menacwy?.status).toBe('due-now');
    expect(menacwy?.product).toBeUndefined();
  });

  it('does not invent PCV dose 2 before product is known', () => {
    const results = calculateVaccineRecommendations(baseCatchUp());

    const pcv = results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal');
    expect(pcv?.doseLabelKey).toBe('doseLabel_dose1');
    expect(pcv?.noteKeys).toContain('note_pcvRemainingDosesDependOnProduct');
    expect(pcv?.recommendedDate).toBeUndefined();

    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'pneumococcal' && item.conditionalNextDose
      )
    ).toBe(false);
  });

  it('projects MenB dose 2 at +2 months with interval note, not infant booster', () => {
    const results = calculateVaccineRecommendations(baseCatchUp());

    const menbDose2 = results.upcoming.find(
      (item) =>
        item.vaccineCategory === 'meningococcalB' &&
        item.conditionalNextDose &&
        item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(menbDose2?.recommendedDate).toBe('2026-10-23');
    expect(menbDose2?.noteKeys).toContain('note_menbTwoToNineYearInterval');
    expect(menbDose2?.minimumValidDate).toBeUndefined();

    expect(
      results.upcoming.some(
        (item) =>
          item.vaccineCategory === 'meningococcalB' &&
          item.conditionalNextDose &&
          item.doseLabelKey === 'doseLabel_booster'
      )
    ).toBe(false);
  });

  it('does not project MenACWY dose 2 for the healthy ≥2-year pathway', () => {
    const results = calculateVaccineRecommendations(baseCatchUp());

    expect(
      results.upcoming.some(
        (item) => item.vaccineCategory === 'meningococcalACWY' && item.conditionalNextDose
      )
    ).toBe(false);
  });

  it('omits stale infant recommended date for new Varicella catch-up start', () => {
    const results = calculateVaccineRecommendations(baseCatchUp());

    const varicella = results.dueNow.find((item) => item.vaccineCategory === 'varicella');
    expect(varicella?.doseLabelKey).toBe('doseLabel_dose1');
    expect(varicella?.status).toBe('due-now');
    expect(varicella?.recommendedDate).toBeUndefined();
    expect(varicella?.recommendedDateLabelKey).toBeUndefined();
  });

  it('keeps influenza, varicella, and hepatitis A conditional follow-up doses', () => {
    const results = calculateVaccineRecommendations(baseCatchUp());

    expect(
      results.upcoming.find(
        (item) => item.vaccineCategory === 'influenza' && item.conditionalNextDose
      )?.recommendedDate
    ).toBe('2026-09-20');

    expect(
      results.upcoming.find(
        (item) => item.vaccineCategory === 'varicella' && item.conditionalNextDose
      )?.recommendedDate
    ).toBe('2026-11-23');
    expect(
      results.upcoming.find(
        (item) => item.vaccineCategory === 'varicella' && item.conditionalNextDose
      )?.noteKeys
    ).not.toContain('note_conditionalNextDose');

    expect(
      results.upcoming.find(
        (item) => item.vaccineCategory === 'hepatitisA' && item.conditionalNextDose
      )?.recommendedDate
    ).toBe('2027-02-23');
  });

  it('projects Synflorix dose 2 only when product is Synflorix', () => {
    const results = calculateVaccineRecommendations(
      baseCatchUp({
        vaccineHistory: [
          history({
            category: 'pneumococcal',
            product: 'synflorix',
            numberOfDoses: 0,
            firstDoseDate: null,
            lastDoseDate: null,
            doseDates: [],
          }),
        ],
      })
    );

    const pcvConditional = results.upcoming.find(
      (item) => item.vaccineCategory === 'pneumococcal' && item.conditionalNextDose
    );
    expect(pcvConditional?.doseLabelKey).toBe('doseLabel_dose2');
    expect(pcvConditional?.recommendedDate).toBe('2026-10-23');
  });

  it.each(['prevenar13', 'vaxneuvance', 'prevenar20'] as const)(
    'shows one PCV dose only for %s at age 2 years',
    (product) => {
      const results = calculateVaccineRecommendations(
        baseCatchUp({
          vaccineHistory: [
            history({
              category: 'pneumococcal',
              product,
              numberOfDoses: 0,
              firstDoseDate: null,
              lastDoseDate: null,
              doseDates: [],
            }),
          ],
        })
      );

      expect(results.dueNow.find((item) => item.vaccineCategory === 'pneumococcal')?.doseLabelKey).toBe(
        'doseLabel_dose1'
      );
      expect(
        results.upcoming.some(
          (item) => item.vaccineCategory === 'pneumococcal' && item.conditionalNextDose
        )
      ).toBe(false);
    }
  );
});
