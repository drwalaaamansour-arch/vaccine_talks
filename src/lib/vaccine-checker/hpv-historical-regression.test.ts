import { describe, expect, it } from 'vitest';
import { addMonths } from '@/lib/vaccine-checker/date-utils';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { getWizardRequiredDoseDateCount } from '@/lib/vaccine-checker/teen-history-simplification';
import { getHpvAdministeredDoseDates as getHpvDatesFromRecord } from '@/lib/vaccine-checker/dose-date-storage';
import { isHpvTwoDoseSeries } from '@/lib/vaccine-checker/rules/hpv';
import { recordToHistory } from '@/lib/vaccine-checker/input-adapter';
import { buildDateParts, parseDateParts, type AdditionalVaccineRecord } from '@/types/wizard-types';
import { type VaccineHistoryRecord } from '@/lib/vaccine-checker/types';

const AS_OF = new Date(2026, 8, 13);
const DOB = new Date(2009, 8, 2);

function dobParts() {
  return buildDateParts({ day: 2, month: 9, year: 2009 });
}

function dateParts(day: number, month: number, year: number) {
  return buildDateParts({ day, month, year });
}

function hpvRecord(overrides: Partial<AdditionalVaccineRecord>): AdditionalVaccineRecord {
  return {
    category: 'hpv',
    product: 'gardasil4',
    numberOfDoses: 1,
    lastDoseDate: null,
    doseDates: [],
    ...overrides,
  };
}

function runEngine(history: VaccineHistoryRecord) {
  return calculateVaccineRecommendations({
    dob: DOB,
    referenceDate: AS_OF,
    routineVaccinesStatus: 'complete',
    completedRoutineVisits: [],
    vaccineHistory: [history],
    mmrDate: null,
    mmrDose2Date: null,
    mmrDates: [],
  });
}

describe('HPV historical dates (DOB 02/09/2009, as-of 13/09/2026)', () => {
  it('A: first dose at age 6 is rejected by engine review (before age 9)', () => {
    const dose1 = dateParts(2, 9, 2015);
    const results = runEngine(
      recordToHistory(
        hpvRecord({
          numberOfDoses: 1,
          firstDoseDate: dose1,
          dose1Date: dose1,
          doseDates: [dose1],
        })
      )
    );
    expect(results.needsReview.some((item) => item.vaccineCategory === 'hpv')).toBe(true);
    expect(isHpvTwoDoseSeries('gardasil4', DOB, parseDateParts(dose1))).toBe(false);
  });

  it('B: Gardasil 4, first dose at age 13, two documented doses — 2-dose pathway, no Dose 3', () => {
    const dose1 = dateParts(2, 9, 2022);
    const dose2 = dateParts(2, 3, 2023);
    const results = runEngine(
      recordToHistory(
        hpvRecord({
          numberOfDoses: 2,
          dose1Date: dose1,
          dose2Date: dose2,
          firstDoseDate: dose1,
          lastDoseDate: dose2,
          doseDates: [dose1, dose2],
        })
      )
    );

    expect(isHpvTwoDoseSeries('gardasil4', DOB, parseDateParts(dose1))).toBe(true);
    const hpv = [...results.completed, ...results.dueNow, ...results.upcoming].filter(
      (item) => item.vaccineCategory === 'hpv'
    );
    expect(hpv.some((item) => item.status === 'completed')).toBe(true);
    expect(hpv.some((item) => item.doseLabelKey === 'doseLabel_dose3')).toBe(false);
  });

  it('C: Gardasil 9, first dose at age 13, one prior dose — Dose 2 at +6 months', () => {
    const dose1 = dateParts(1, 6, 2022);
    const results = runEngine(
      recordToHistory(
        hpvRecord({
          product: 'gardasil9',
          numberOfDoses: 1,
          dose1Date: dose1,
          firstDoseDate: dose1,
          doseDates: [dose1],
        })
      )
    );
    const dose2 = results.dueNow
      .concat(results.upcoming)
      .find((item) => item.vaccineCategory === 'hpv' && item.doseLabelKey === 'doseLabel_dose2');
    expect(dose2?.status).toBe('due-now');
    expect(dose2?.recommendedDate).toBeUndefined();
  });

  it('D: Gardasil 4, first dose at age 14, two doses — 3-dose pathway may still need Dose 3', () => {
    const dose1 = dateParts(2, 9, 2023);
    const dose2 = dateParts(2, 11, 2023);
    expect(isHpvTwoDoseSeries('gardasil4', DOB, parseDateParts(dose1))).toBe(false);

    const results = runEngine(
      recordToHistory(
        hpvRecord({
          numberOfDoses: 2,
          dose1Date: dose1,
          dose2Date: dose2,
          firstDoseDate: dose1,
          lastDoseDate: dose2,
          doseDates: [dose1, dose2],
        })
      )
    );
    expect(
      [...results.dueNow, ...results.upcoming].some(
        (item) => item.vaccineCategory === 'hpv' && item.doseLabelKey === 'doseLabel_dose3'
      )
    ).toBe(true);
  });

  it('E: two prior doses with only Dose 1 stored — no invented Dose 2 in history adapter', () => {
    const dose1 = dateParts(2, 9, 2022);
    const record = hpvRecord({
      numberOfDoses: 2,
      dose1Date: dose1,
      firstDoseDate: dose1,
      lastDoseDate: dose1,
      doseDates: [dose1],
    });

    expect(getHpvDatesFromRecord(record)).toEqual([dose1]);
    const history = recordToHistory(record);
    expect(history.doseDates).toHaveLength(1);
    expect(getWizardRequiredDoseDateCount(record, DOB, AS_OF)).toBe(2);

    const results = runEngine(history);
    expect(
      results.upcoming
        .concat(results.dueNow)
        .some((item) => item.vaccineCategory === 'hpv' && item.doseLabelKey === 'doseLabel_dose3')
    ).toBe(false);
  });

  it('F: Dose 2 date unknown — complete 2-dose series without invented date or Dose 3', () => {
    const dose1 = dateParts(2, 9, 2022);
    const history = recordToHistory(
      hpvRecord({
        numberOfDoses: 2,
        dose1Date: dose1,
        firstDoseDate: dose1,
        secondDoseDateUnknown: true,
        doseDates: [dose1],
      })
    );
    expect(history.doseDates).toHaveLength(1);

    const results = runEngine(history);
    expect(results.completed.some((item) => item.vaccineCategory === 'hpv')).toBe(true);
    expect(
      results.dueNow
        .concat(results.upcoming)
        .some((item) => item.vaccineCategory === 'hpv' && item.recommendedDate)
    ).toBe(false);
  });

  it('G: current age 17 with first dose at 13 — remains 2-dose series (not 3-dose at check-up)', () => {
    const dose1 = dateParts(2, 9, 2022);
    expect(isHpvTwoDoseSeries('gardasil4', DOB, parseDateParts(dose1))).toBe(true);
    expect(isHpvTwoDoseSeries('gardasil4', DOB, AS_OF)).toBe(false);

    const results = runEngine(
      recordToHistory(
        hpvRecord({
          numberOfDoses: 1,
          dose1Date: dose1,
          firstDoseDate: dose1,
          doseDates: [dose1],
        })
      )
    );
    const dose2 = results.dueNow.find(
      (item) => item.vaccineCategory === 'hpv' && item.doseLabelKey === 'doseLabel_dose2'
    );
    expect(dose2?.status).toBe('due-now');
    expect(dose2?.recommendedDate).toBeUndefined();
    expect(results.upcoming.some((item) => item.doseLabelKey === 'doseLabel_dose3')).toBe(false);
  });
});
