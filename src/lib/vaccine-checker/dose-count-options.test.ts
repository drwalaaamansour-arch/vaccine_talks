import { describe, expect, it } from 'vitest';
import { addMonths, addWeeks } from '@/lib/vaccine-checker/date-utils';
import { getAvailableDoseCountsForVaccine } from '@/lib/vaccine-checker/dose-count-options';

function dobFromToday(today: Date, ageMonths: number, ageWeeks = 0): Date {
  let dob = addMonths(today, -ageMonths);
  if (ageWeeks > 0) {
    dob = addWeeks(dob, -ageWeeks);
  }
  return dob;
}

describe('dose count options', () => {
  const today = new Date(2026, 7, 22);

  describe('rotavirus', () => {
    it('Rotarix at ~2 months offers only 1 previous dose', () => {
      const dob = dobFromToday(today, 2);
      const options = getAvailableDoseCountsForVaccine(dob, today, {
        category: 'rotavirus',
        product: 'rotarix',
      });

      expect(options).toEqual([1]);
    });

    it('Rotarix never offers 3 or 4 doses', () => {
      const dob = dobFromToday(today, 8);
      const options = getAvailableDoseCountsForVaccine(dob, today, {
        category: 'rotavirus',
        product: 'rotarix',
      });

      expect(options).toEqual([1, 2]);
      expect(options).not.toContain(3);
      expect(options).not.toContain(4);
    });

    it('RotaTeq never offers 4 doses', () => {
      const dob = dobFromToday(today, 8);
      const options = getAvailableDoseCountsForVaccine(dob, today, {
        category: 'rotavirus',
        product: 'rotateq',
      });

      expect(options).toEqual([1, 2, 3]);
      expect(options).not.toContain(4);
    });

    it('unknown rotavirus product never offers 4 doses', () => {
      const dob = dobFromToday(today, 8);
      const options = getAvailableDoseCountsForVaccine(dob, today, {
        category: 'rotavirus',
        product: 'dontKnow',
      });

      expect(options).toEqual([1, 2, 3]);
      expect(options).not.toContain(4);
    });
  });

  describe('pneumococcal', () => {
    it('Vaxneuvance at 12 months offers 1, 2, and 3 previous doses', () => {
      const dob = new Date(2025, 7, 23);
      const today = new Date(2026, 7, 23);
      const options = getAvailableDoseCountsForVaccine(dob, today, {
        category: 'pneumococcal',
        product: 'vaxneuvance',
      });

      expect(options).toEqual(expect.arrayContaining([1, 2, 3]));
    });

    it('PCV at ~2 months offers zero or one previous dose', () => {
      const dob = dobFromToday(today, 2);
      const options = getAvailableDoseCountsForVaccine(dob, today, {
        category: 'pneumococcal',
        product: 'prevenar13',
      });

      expect(options).toEqual([0, 1]);
    });
  });

  describe('other vaccines', () => {
    it('hepatitis A maxes at 2 doses', () => {
      const dob = dobFromToday(today, 24);
      const options = getAvailableDoseCountsForVaccine(dob, today, {
        category: 'hepatitisA',
      });

      expect(options).toEqual([0, 1, 2]);
      expect(options).not.toContain(3);
    });

    it('varicella maxes at 2 doses', () => {
      const dob = dobFromToday(today, 24);
      const options = getAvailableDoseCountsForVaccine(dob, today, {
        category: 'varicella',
      });

      expect(options).toEqual([1, 2]);
    });

    it('influenza under 9 years maxes at 2 doses', () => {
      const dob = dobFromToday(today, 24);
      const options = getAvailableDoseCountsForVaccine(dob, today, {
        category: 'influenza',
      });

      expect(options).toEqual([1, 2]);
      expect(options).not.toContain(3);
    });

    it('influenza at 9 years or older offers only 1 dose', () => {
      const dob = dobFromToday(today, 120);
      const options = getAvailableDoseCountsForVaccine(dob, today, {
        category: 'influenza',
      });

      expect(options).toEqual([1]);
    });
  });
});
