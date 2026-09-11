import { describe, expect, it } from 'vitest';
import { addMonths } from '@/lib/vaccine-checker/date-utils';
import {
  getEligibleProductOptions,
  getProductEligibilityReferenceDate,
  isSynflorixEligibleForNewStart,
} from '@/lib/vaccine-checker/product-options';
import { parseDateParts } from '@/types/wizard-types';

describe('Synflorix exact 5-year boundary', () => {
  const dob = new Date(2021, 7, 24);

  it('allows Synflorix on the exact 5th birthday', () => {
    const asOf = new Date(2026, 7, 24);
    expect(isSynflorixEligibleForNewStart(dob, asOf)).toBe(true);

    const options = getEligibleProductOptions(
      'pneumococcal',
      dob,
      { numberOfDoses: 0, firstDoseDate: null, lastDoseDate: null, doseDates: [] },
      asOf
    );
    expect(options.map((option) => option.value)).toContain('synflorix');
  });

  it('hides Synflorix for a new start the day after the 5th birthday', () => {
    const asOf = new Date(2026, 7, 25);
    expect(isSynflorixEligibleForNewStart(dob, asOf)).toBe(false);

    const options = getEligibleProductOptions(
      'pneumococcal',
      dob,
      { numberOfDoses: 0, firstDoseDate: null, lastDoseDate: null, doseDates: [] },
      asOf
    );
    expect(options.map((option) => option.value)).not.toContain('synflorix');
  });

  it('offers only age-appropriate PCV products after age 5 years', () => {
    const asOf = new Date(2026, 7, 24);
    const options = getEligibleProductOptions(
      'pneumococcal',
      new Date(2021, 7, 23),
      { numberOfDoses: 0, firstDoseDate: null, lastDoseDate: null, doseDates: [] },
      asOf
    );

    expect(options.map((option) => option.value)).toEqual([
      'prevenar13',
      'vaxneuvance',
      'prevenar20',
      'dontKnow',
    ]);
  });

  it('keeps Synflorix available when it was started before the 5th birthday', () => {
    const asOf = new Date(2026, 7, 25);
    const firstDose = new Date(2025, 7, 24);
    const firstDoseParts = {
      day: firstDose.getDate(),
      month: firstDose.getMonth() + 1,
      year: firstDose.getFullYear(),
      iso: '2025-08-24',
    };

    const options = getEligibleProductOptions(
      'pneumococcal',
      dob,
      {
        numberOfDoses: 1,
        firstDoseDate: firstDoseParts,
        lastDoseDate: firstDoseParts,
        doseDates: [],
      },
      asOf
    );

    expect(options.map((option) => option.value)).toContain('synflorix');
  });
});

describe('MenACWY product options', () => {
  const today = new Date(2026, 7, 22);

  function dobAtAgeMonths(ageMonths: number): Date {
    return addMonths(today, -ageMonths);
  }

  it('hides Menactra for a 2-month-old at current age', () => {
    const dob = dobAtAgeMonths(2);
    const options = getEligibleProductOptions(
      'meningococcalACWY',
      dob,
      { numberOfDoses: 0, firstDoseDate: null, lastDoseDate: null, doseDates: [] },
      today
    );

    expect(options.map((option) => option.value)).toEqual(['nimenrix', 'other', 'dontKnow']);
  });

  it('shows Menactra for a 10-month-old at current age', () => {
    const dob = dobAtAgeMonths(10);
    const options = getEligibleProductOptions(
      'meningococcalACWY',
      dob,
      { numberOfDoses: 0, firstDoseDate: null, lastDoseDate: null, doseDates: [] },
      today
    );

    expect(options.map((option) => option.value)).toContain('menactra');
    expect(options.map((option) => option.value)).toContain('nimenrix');
  });

  it('uses age at earliest dose date for historical product eligibility', () => {
    const dob = dobAtAgeMonths(10);
    const doseAtTwoMonths = addMonths(dob, 2);
    const options = getEligibleProductOptions(
      'meningococcalACWY',
      dob,
      {
        numberOfDoses: 1,
        firstDoseDate: {
          day: doseAtTwoMonths.getDate(),
          month: doseAtTwoMonths.getMonth() + 1,
          year: doseAtTwoMonths.getFullYear(),
          iso: '2026-04-22',
        },
        lastDoseDate: {
          day: doseAtTwoMonths.getDate(),
          month: doseAtTwoMonths.getMonth() + 1,
          year: doseAtTwoMonths.getFullYear(),
          iso: '2026-04-22',
        },
        doseDates: [],
      },
      today
    );

    expect(options.map((option) => option.value)).toEqual(['nimenrix', 'other', 'dontKnow']);
  });

  it('prefers earliest known dose date when validating historical products', () => {
    const dob = dobAtAgeMonths(10);
    const firstDose = addMonths(dob, 2);
    const firstDoseParts = {
      day: firstDose.getDate(),
      month: firstDose.getMonth() + 1,
      year: firstDose.getFullYear(),
      iso: '2026-04-22',
    };
    const reference = getProductEligibilityReferenceDate(
      {
        numberOfDoses: 2,
        firstDoseDate: firstDoseParts,
        lastDoseDate: {
          day: today.getDate(),
          month: today.getMonth() + 1,
          year: today.getFullYear(),
          iso: '2026-08-22',
        },
        doseDates: [],
      },
      today
    );

    expect(reference.getTime()).toBe(parseDateParts(firstDoseParts).getTime());
  });
});
