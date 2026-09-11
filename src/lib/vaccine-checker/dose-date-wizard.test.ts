import { describe, expect, it } from 'vitest';
import {
  applyDoseDatesToRecord,
  getAllDoseDatesFromRecord,
  getDoseDateFromRecord,
  hasAllRequiredDoseDates,
} from '@/lib/vaccine-checker/dose-date-storage';
import { buildDate } from '@/lib/vaccine-checker/wizard-history';
import { recordToHistory } from '@/lib/vaccine-checker/input-adapter';
import { getDoseDateFieldLabel, getDoseDatesHeading } from '@/translations/vaccine-history-labels';
import { translateKey } from '@/translations/translate';

describe('dose date storage', () => {
  it('stores Rotarix dose 1 individually for a single previous dose', () => {
    const dose1 = buildDate(27, 10, 2025);
    const record = applyDoseDatesToRecord(
      {
        category: 'rotavirus',
        product: 'rotarix',
        numberOfDoses: 1,
        lastDoseDate: null,
        doseDates: [],
      },
      [dose1]
    );

    expect(record.dose1Date?.iso).toBe('2025-10-27');
    expect(record.dose2Date).toBeNull();
    expect(record.lastDoseDate?.iso).toBe('2025-10-27');
    expect(getAllDoseDatesFromRecord(record).map((date) => date.iso)).toEqual(['2025-10-27']);
    expect(hasAllRequiredDoseDates(record)).toBe(true);
  });

  it('stores Rotarix dose 1 and dose 2 separately for two previous doses', () => {
    const dose1 = buildDate(27, 10, 2025);
    const dose2 = buildDate(27, 12, 2025);
    const record = applyDoseDatesToRecord(
      {
        category: 'rotavirus',
        product: 'rotarix',
        numberOfDoses: 2,
        lastDoseDate: null,
        doseDates: [],
      },
      [dose1, dose2]
    );

    expect(record.dose1Date?.iso).toBe('2025-10-27');
    expect(record.dose2Date?.iso).toBe('2025-12-27');
    expect(record.dose3Date).toBeNull();
    expect(getDoseDateFromRecord(record, 2)?.iso).toBe('2025-12-27');

    const history = recordToHistory(record);
    expect(history.doseDates).toHaveLength(2);
    expect(history.doseDates[0]?.toISOString().slice(0, 10)).toBeTruthy();
  });

  it('stores RotaTeq dose 1, 2, and 3 separately for three previous doses', () => {
    const dose1 = buildDate(27, 8, 2025);
    const dose2 = buildDate(27, 10, 2025);
    const dose3 = buildDate(27, 12, 2025);
    const record = applyDoseDatesToRecord(
      {
        category: 'rotavirus',
        product: 'rotateq',
        numberOfDoses: 3,
        lastDoseDate: null,
        doseDates: [],
      },
      [dose1, dose2, dose3]
    );

    expect(record.dose1Date?.iso).toBe('2025-08-27');
    expect(record.dose2Date?.iso).toBe('2025-10-27');
    expect(record.dose3Date?.iso).toBe('2025-12-27');
    expect(record.dose4Date).toBeNull();
    expect(getAllDoseDatesFromRecord(record)).toHaveLength(3);
  });
});

describe('dose date wording', () => {
  const t = (key: string, params?: Record<string, string>) => translateKey('en', key, params);

  it('uses one-dose Rotavirus heading and one field label', () => {
    expect(getDoseDatesHeading('rotavirus', 1, 'en', t)).toBe('When was the Rotavirus dose given?');
    expect(getDoseDateFieldLabel(1, t)).toBe('Dose 1 date');
  });

  it('uses two-dose Rotavirus heading and numbered field labels', () => {
    expect(getDoseDatesHeading('rotavirus', 2, 'en', t)).toBe('When were the Rotavirus doses given?');
    expect(getDoseDateFieldLabel(1, t)).toBe('Dose 1 date');
    expect(getDoseDateFieldLabel(2, t)).toBe('Dose 2 date');
  });

  it('uses three-dose RotaTeq field labels', () => {
    expect(getDoseDatesHeading('rotavirus', 3, 'en', t)).toBe('When were the Rotavirus doses given?');
    expect(getDoseDateFieldLabel(3, t)).toBe('Dose 3 date');
  });

  it('uses Arabic single and multiple headings with numbered labels', () => {
    const tAr = (key: string) => translateKey('ar', key);
    expect(getDoseDatesHeading('rotavirus', 1, 'ar', tAr)).toBe('الجرعة اتاخدت إمتى؟');
    expect(getDoseDatesHeading('rotavirus', 2, 'ar', tAr)).toBe('الجرعات اتاخدت إمتى؟');
    expect(getDoseDateFieldLabel(1, tAr)).toBe('تاريخ الجرعة الأولى');
    expect(getDoseDateFieldLabel(2, tAr)).toBe('تاريخ الجرعة الثانية');
    expect(getDoseDateFieldLabel(3, tAr)).toBe('تاريخ الجرعة الثالثة');
  });
});
