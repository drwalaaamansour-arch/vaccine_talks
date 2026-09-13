import { describe, expect, it } from 'vitest';
import {
  getActiveVaccineIndex,
  getActiveVaccineIndexForState,
  isVaccineRecordComplete,
} from '@/lib/vaccine-checker/input-adapter';
import {
  getFirstAdditionalVaccineStep,
  getNextStepAfterAdditionalVaccineHistory,
  getNextStepAfterDoseCount,
} from '@/lib/vaccine-checker/wizard-flow';
import { wizardRequiresProductSelection } from '@/lib/vaccine-checker/teen-history-simplification';
import { buildDateParts, getPreviousWizardStep, type AdditionalVaccineRecord, type WizardState } from '@/types/wizard-types';

const AS_OF = new Date(2026, 8, 13);

function teenDobParts() {
  return buildDateParts({ day: 2, month: 9, year: 2009 });
}

function baseTeenState(
  additionalVaccines: AdditionalVaccineRecord[],
  overrides: Partial<WizardState> = {}
): WizardState {
  return {
    language: 'en',
    dateOfBirth: teenDobParts(),
    calculatedAge: { years: 17, months: 0, days: 11 },
    medicalCondition: { hasCondition: false, showStopMessage: false },
    routineVaccinesStatus: 'complete',
    routineVisitHistory: {},
    completedRoutineVisits: [],
    mmrDate: null,
    mmrDose2Date: null,
    additionalVaccinesHistoryAnswer: 'yes',
    additionalVaccines,
    currentStep: 'doseCount',
    showResults: false,
    showDisclaimer: false,
    ...overrides,
  };
}

function menAcwyOneDose(): AdditionalVaccineRecord {
  return {
    category: 'meningococcalACWY',
    numberOfDoses: 1,
    lastDoseDate: null,
    doseDates: [],
  };
}

function hpvIncomplete(): AdditionalVaccineRecord {
  return {
    category: 'hpv',
    numberOfDoses: 0,
    lastDoseDate: null,
    doseDates: [],
  };
}

function hpvWithProduct(product: string, doses = 2): AdditionalVaccineRecord {
  const dose1 = buildDateParts({ day: 1, month: 6, year: 2024 });
  const dose2 = buildDateParts({ day: 1, month: 12, year: 2024 });
  return {
    category: 'hpv',
    product,
    numberOfDoses: doses,
    dose1Date: dose1,
    dose2Date: doses >= 2 ? dose2 : null,
    lastDoseDate: doses >= 2 ? dose2 : null,
    firstDoseDate: dose1,
    doseDates: doses >= 2 ? [dose1, dose2] : [dose1],
  };
}

describe('MenACWY product step regression (teen 17y11d)', () => {
  it('A: healthy teen MenACWY 1 prior dose — no product or date steps, completes to review', () => {
    const record = menAcwyOneDose();
    const state = baseTeenState([record]);

    expect(wizardRequiresProductSelection(state, 'meningococcalACWY', AS_OF)).toBe(false);
    expect(
      getFirstAdditionalVaccineStep(
        baseTeenState([{ ...record, numberOfDoses: 0 }]),
        AS_OF
      )
    ).toBe('doseCount');
    expect(isVaccineRecordComplete(record, AS_OF, teenDobParts())).toBe(true);
    expect(getNextStepAfterDoseCount(state, 0, AS_OF)).toBe('review');
    expect(getNextStepAfterAdditionalVaccineHistory(state, AS_OF)).toBe('review');
  });

  it('B: after MenACWY is complete, product step targets HPV not MenACWY (no repeat loop)', () => {
    const vaccines = [menAcwyOneDose(), hpvIncomplete()];
    const state = baseTeenState(vaccines);

    expect(getActiveVaccineIndex(vaccines, AS_OF)).toBe(0);
    expect(getActiveVaccineIndex(vaccines, AS_OF, teenDobParts())).toBe(1);
    expect(getActiveVaccineIndexForState(state, AS_OF)).toBe(1);

    expect(getNextStepAfterAdditionalVaccineHistory(state, AS_OF)).toBe('productSelection');

    const afterHpvProduct = baseTeenState([
      menAcwyOneDose(),
      { ...hpvIncomplete(), product: 'gardasil9', numberOfDoses: 2 },
    ]);
    expect(getNextStepAfterAdditionalVaccineHistory(afterHpvProduct, AS_OF)).toBe('lastDoseDate');

    const afterFlu = baseTeenState([
      menAcwyOneDose(),
      {
        category: 'hpv',
        product: 'gardasil9',
        numberOfDoses: 2,
        lastDoseDate: buildDateParts({ day: 1, month: 1, year: 2025 }),
        firstDoseDate: buildDateParts({ day: 1, month: 1, year: 2024 }),
        dose1Date: buildDateParts({ day: 1, month: 1, year: 2024 }),
        dose2Date: buildDateParts({ day: 1, month: 1, year: 2025 }),
        doseDates: [
          buildDateParts({ day: 1, month: 1, year: 2024 }),
          buildDateParts({ day: 1, month: 1, year: 2025 }),
        ],
      },
      {
        category: 'influenza',
        numberOfDoses: 0,
        lastDoseDate: null,
        doseDates: [],
        influenzaCurrentSeasonReceived: false,
      },
    ]);
    expect(getNextStepAfterAdditionalVaccineHistory(afterFlu, AS_OF)).toBe('review');
    expect(getNextStepAfterAdditionalVaccineHistory(afterFlu, AS_OF)).not.toBe('productSelection');
  });

  it('C: HPV product "dontKnow" counts as answered — no product step again', () => {
    const record = {
      ...hpvIncomplete(),
      product: 'dontKnow',
      numberOfDoses: 1,
      firstDoseDateUnknown: true,
    };
    expect(isVaccineRecordComplete(record, AS_OF, teenDobParts())).toBe(true);

    const state = baseTeenState([menAcwyOneDose(), record]);
    expect(getNextStepAfterAdditionalVaccineHistory(state, AS_OF)).toBe('review');
  });

  it('D: HPV product "other" counts as answered — no product step again', () => {
    const record = {
      ...hpvIncomplete(),
      product: 'other',
      numberOfDoses: 1,
      firstDoseDate: buildDateParts({ day: 15, month: 3, year: 2023 }),
      doseDates: [buildDateParts({ day: 15, month: 3, year: 2023 })],
    };
    expect(isVaccineRecordComplete(record, AS_OF, teenDobParts())).toBe(true);

    const state = baseTeenState([record]);
    expect(getNextStepAfterAdditionalVaccineHistory(state, AS_OF)).toBe('review');
  });

  it('E: back from dose count after product keeps stored product; previous step is product only when required', () => {
    const hpvWithProductOnly = baseTeenState(
      [{ ...hpvIncomplete(), product: 'gardasil9' }],
      { currentStep: 'doseCount' }
    );
    expect(getPreviousWizardStep(hpvWithProductOnly)).toBe('productSelection');

    const menAcwyState = baseTeenState([menAcwyOneDose()], { currentStep: 'doseCount' });
    expect(getPreviousWizardStep(menAcwyState)).toBe('additionalVaccines');
  });

  it('F: editing influenza history does not re-open MenACWY product step', () => {
    const completed = baseTeenState([
      menAcwyOneDose(),
      hpvWithProduct('gardasil9'),
      {
        category: 'influenza',
        numberOfDoses: 0,
        lastDoseDate: null,
        doseDates: [],
        influenzaCurrentSeasonReceived: true,
      },
    ]);
    expect(getNextStepAfterAdditionalVaccineHistory(completed, AS_OF)).toBe('review');

    const toggledFlu = baseTeenState([
      menAcwyOneDose(),
      hpvWithProduct('gardasil9'),
      {
        category: 'influenza',
        numberOfDoses: 0,
        lastDoseDate: null,
        doseDates: [],
        influenzaCurrentSeasonReceived: false,
      },
    ]);
    expect(getNextStepAfterAdditionalVaccineHistory(toggledFlu, AS_OF)).toBe('review');
    expect(wizardRequiresProductSelection(toggledFlu, 'meningococcalACWY', AS_OF)).toBe(false);
  });

  it('full teen flow: PCV + MenACWY + flu + HPV reaches review without MenACWY product step', () => {
    let vaccines: AdditionalVaccineRecord[] = [
      { category: 'pneumococcal', numberOfDoses: 1, lastDoseDate: null, doseDates: [] },
      menAcwyOneDose(),
      hpvIncomplete(),
      {
        category: 'influenza',
        numberOfDoses: 0,
        lastDoseDate: null,
        doseDates: [],
      },
    ];
    let state = baseTeenState(vaccines);

    expect(getFirstAdditionalVaccineStep(state, AS_OF)).toBe('productSelection');
    expect(getActiveVaccineIndexForState(state, AS_OF)).toBe(2);

    vaccines = [...vaccines];
    vaccines[2] = { ...hpvIncomplete(), product: 'gardasil9', numberOfDoses: 2 };
    state = baseTeenState(vaccines);
    let step = getNextStepAfterDoseCount(state, 2, AS_OF);
    expect(step).toBe('lastDoseDate');

    vaccines = [...vaccines];
    vaccines[2] = {
      ...vaccines[2],
      dose1Date: buildDateParts({ day: 1, month: 1, year: 2024 }),
      dose2Date: buildDateParts({ day: 1, month: 1, year: 2025 }),
      firstDoseDate: buildDateParts({ day: 1, month: 1, year: 2024 }),
      doseDates: [
        buildDateParts({ day: 1, month: 1, year: 2024 }),
        buildDateParts({ day: 1, month: 1, year: 2025 }),
      ],
    };
    vaccines[3] = {
      ...vaccines[3],
      influenzaCurrentSeasonReceived: true,
    };
    state = baseTeenState(vaccines);
    expect(getNextStepAfterAdditionalVaccineHistory(state, AS_OF)).toBe('review');
  });
});
