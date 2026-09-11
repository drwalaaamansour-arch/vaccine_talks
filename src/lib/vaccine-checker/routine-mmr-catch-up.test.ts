import { describe, expect, it } from 'vitest';
import { addDays, addMonths } from '@/lib/vaccine-checker/date-utils';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { getCardExplanation } from '@/lib/vaccine-checker/result-presentation';
import { getTimingDisplayLines } from '@/lib/vaccine-checker/recommendation-timing';
import { translateKey } from '@/translations/translate';
import {
  buildRoutineVisitHistory,
  getReceivedRoutineVisits,
} from '@/lib/vaccine-checker/routine-history';
import { attachRoutineVaccineLedger } from '@/lib/vaccine-checker/input-adapter';
import { getDueRoutineVisits } from '@/lib/vaccine-checker/routine';
import { assessRoutineCatchUp } from '@/lib/vaccine-checker/routine-catch-up';
import { type CheckerInput } from '@/lib/vaccine-checker/types';

function buildInput(
  dob: Date,
  today: Date,
  status: 'complete' | 'some' | 'none',
  selectedVisits: string[] = [],
  overrides: Partial<CheckerInput> = {}
): CheckerInput {
  const reached = getDueRoutineVisits(dob, today);
  const history = buildRoutineVisitHistory(
    status,
    reached,
    status === 'some' ? (selectedVisits as typeof reached) : []
  );

  return attachRoutineVaccineLedger({
    dob,
    referenceDate: today,
    mmrDate: null,
    mmrDates: [],
    routineVaccinesStatus: status,
    completedRoutineVisits: getReceivedRoutineVisits(history, reached),
    routineVisitHistory: history,
    vaccineHistory: [],
    ...overrides,
  });
}

function mmrRecs(input: CheckerInput) {
  const assessment = assessRoutineCatchUp(input);
  return {
    assessment,
    recommendations: assessment.recommendations.filter((item) =>
      item.routineVaccineKey?.startsWith('mmr')
    ),
    results: calculateVaccineRecommendations(input),
  };
}

describe('routine MMR catch-up', () => {
  const dob = new Date(2025, 7, 30);

  it('A. exactly 12 months with zero MMR schedules dose 1 due now and dose 2 at 18 months', () => {
    const today = addMonths(dob, 12);
    const { assessment, recommendations } = mmrRecs(buildInput(dob, today, 'none'));

    expect(assessment.mmr.status).toBe('catch_up');
    expect(recommendations.find((item) => item.routineVaccineKey === 'mmrDose1')?.status).toBe(
      'due-now'
    );
    expect(recommendations.find((item) => item.routineVaccineKey === 'mmrDose2')?.recommendedDate).toBe(
      '2027-02-28'
    );
  });

  it('B. 15 months with zero MMR schedules dose 1 due now and dose 2 at 18 months', () => {
    const today = addMonths(dob, 15);
    const { recommendations } = mmrRecs(buildInput(dob, today, 'none'));

    expect(recommendations.find((item) => item.routineVaccineKey === 'mmrDose1')?.status).toBe(
      'due-now'
    );
    expect(recommendations.find((item) => item.routineVaccineKey === 'mmrDose2')?.recommendedDate).toBe(
      '2027-02-28'
    );
  });

  it('C. 17 months 20 days with zero MMR schedules dose 2 one month after dose 1', () => {
    const today = addDays(addMonths(dob, 17), 20);
    const { recommendations } = mmrRecs(buildInput(dob, today, 'none'));

    expect(recommendations.find((item) => item.routineVaccineKey === 'mmrDose1')?.status).toBe(
      'due-now'
    );
    expect(recommendations.find((item) => item.routineVaccineKey === 'mmrDose2')?.recommendedDate).toBe(
      '2027-03-19'
    );
    expect(
      recommendations.find((item) => item.routineVaccineKey === 'mmrDose2')?.noteKeys
    ).toContain('note_mmrDose2MinInterval');
  });

  it('D. exactly 18 months with zero MMR schedules dose 2 one month after dose 1', () => {
    const today = addMonths(dob, 18);
    const { recommendations } = mmrRecs(buildInput(dob, today, 'none'));

    expect(recommendations.find((item) => item.routineVaccineKey === 'mmrDose1')?.status).toBe(
      'due-now'
    );
    expect(recommendations.find((item) => item.routineVaccineKey === 'mmrDose2')?.recommendedDate).toBe(
      '2027-03-28'
    );
    expect(
      recommendations.find((item) => item.routineVaccineKey === 'mmrDose2')?.noteKeys
    ).toContain('note_mmrDose2OneMonthAfterFirst');
  });

  it('E. age 2 years with zero MMR schedules dose 2 one month after dose 1', () => {
    const today = addMonths(dob, 24);
    const { recommendations } = mmrRecs(buildInput(dob, today, 'none'));

    expect(recommendations.find((item) => item.routineVaccineKey === 'mmrDose1')?.status).toBe(
      'due-now'
    );
    expect(recommendations.find((item) => item.routineVaccineKey === 'mmrDose2')?.recommendedDate).toBe(
      '2027-09-30'
    );
  });

  it('F. age 16 months with one previous MMR dose schedules dose 2 at 18 months', () => {
    const today = addMonths(dob, 16);
    const { recommendations } = mmrRecs(buildInput(dob, today, 'some', ['12months']));

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0]?.routineVaccineKey).toBe('mmrDose2');
    expect(recommendations[0]?.recommendedDate).toBe('2027-02-28');
    expect(recommendations[0]?.noteKeys).toContain('note_mmrDose2At18Months');
  });

  it('G. age >18 months with one previous MMR dose and minimum interval passed marks dose 2 due now', () => {
    const today = addMonths(dob, 24);
    const input = buildInput(dob, today, 'some', ['12months']);
    const { recommendations, results } = mmrRecs(input);

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0]?.routineVaccineKey).toBe('mmrDose2');
    expect(recommendations[0]?.status).toBe('due-now');
    expect(recommendations[0]?.noteKeys).toContain('note_mmrDose2DueAfterOneMonthPassed');
    expect(recommendations[0]?.noteKeys).not.toContain('note_mmrDose2OneMonthAfterFirst');
    expect(results.dueNow.some((item) => item.routineVaccineKey === 'mmrDose2')).toBe(true);
  });

  it('H. two documented MMR doses are completed with no further routine doses', () => {
    const today = addMonths(dob, 24);
    const input = buildInput(dob, today, 'some', ['12months', '18months']);
    const { assessment, recommendations, results } = mmrRecs(input);

    expect(assessment.mmr.status).toBe('completed');
    expect(assessment.mmr.documentedDoseCount).toBe(2);
    expect(recommendations.some((item) => item.status === 'completed')).toBe(true);
    expect(
      [...results.dueNow, ...results.upcoming].some((item) => item.routineVaccineKey?.startsWith('mmr'))
    ).toBe(false);
    expect(results.completed.some((item) => item.id === 'routine-mmr-series-complete')).toBe(true);
  });

  it('I. MMR and Varicella same-day and 4-week scheduling remain unchanged when MMR date is documented', () => {
    const birth = new Date(2025, 8, 23);
    const today = new Date(2026, 8, 23);
    const results = calculateVaccineRecommendations(
      buildInput(birth, today, 'complete', [], {
        mmrDate: today,
        mmrDates: [today],
        vaccineHistory: [],
      })
    );

    expect(
      [...results.dueNow, ...results.upcoming].some((item) => item.routineVaccineKey?.startsWith('mmr'))
    ).toBe(false);

    const varicella = results.dueNow.find((item) => item.vaccineCategory === 'varicella');
    expect(varicella?.status).toBe('due-now');
    expect(varicella?.noteKeys).toContain('note_varicellaMmrScheduling');
  });

  it('J. exactly 12 months with complete routine and documented MMR dose 1 hides future dose 2', () => {
    const birth = new Date(2025, 8, 11);
    const today = new Date(2026, 8, 11);
    const { assessment, recommendations, results } = mmrRecs(
      buildInput(birth, today, 'complete', [], {
        mmrDate: today,
        mmrDates: [today],
      })
    );

    expect(assessment.mmr.documentedDoseCount).toBe(1);
    expect(assessment.mmr.status).toBe('not_yet_due');
    expect(recommendations).toHaveLength(0);
    expect(
      [...results.dueNow, ...results.upcoming].some((item) => item.routineVaccineKey?.startsWith('mmr'))
    ).toBe(false);

    const varicella = results.dueNow.find((item) => item.vaccineCategory === 'varicella');
    expect(varicella?.status).toBe('due-now');
  });

  it('documents MMR dose 1 from a received 12-month visit and dose 2 from an 18-month visit separately', () => {
    const today = addMonths(dob, 24);
    const input = buildInput(dob, today, 'some', ['12months', '18months']);

    expect(input.routineVaccineLedger?.bySeries.mmr.documentedDoseKeys).toEqual([
      'mmrDose1',
      'mmrDose2',
    ]);
  });

  it('uses explicit MMR dose dates without requiring duplicate ledger entries', () => {
    const today = addMonths(dob, 16);
    const dose1 = addMonths(dob, 12);
    const input = buildInput(dob, today, 'none', [], {
      mmrDate: dose1,
      mmrDates: [dose1],
    });
    const { recommendations } = mmrRecs(input);

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0]?.routineVaccineKey).toBe('mmrDose2');
    expect(recommendations[0]?.recommendedDate).toBe('2027-02-28');
  });
});

describe('MMR parent-facing wording with recorded dose 1 date', () => {
  const dob = new Date(2024, 8, 1);
  const today = new Date(2026, 8, 1);
  const visitsThrough12Months = [
    'birth',
    '1month',
    '2months',
    '4months',
    '6months',
    '9months',
    '12months',
  ];

  function inputWithDose1(dose1Date: Date) {
    return buildInput(dob, today, 'some', visitsThrough12Months, {
      mmrDate: dose1Date,
      mmrDates: [dose1Date],
    });
  }

  it('1. actual dose 1 exactly 1 month ago shows dose 2 Due Now with factual wording', () => {
    const dose1Date = new Date(2026, 7, 1);
    const { results } = mmrRecs(inputWithDose1(dose1Date));
    const dose2 = results.dueNow.find((item) => item.routineVaccineKey === 'mmrDose2');

    expect(dose2?.status).toBe('due-now');
    expect(dose2?.recommendedDate).toBe('2026-09-01');
    expect(dose2?.noteKeys).toContain('note_mmrDose2DueAfterOneMonthPassed');
    expect(dose2?.noteKeys).not.toContain('note_mmrDose2OneMonthAfterFirst');
    expect(getCardExplanation(dose2!, (key) => translateKey('ar', key))).toBe(
      'مر شهر على الجرعة الأولى، والجرعة الثانية مستحقة دلوقتي.'
    );
    expect(results.upcoming.some((item) => item.routineVaccineKey === 'mmrDose2')).toBe(false);
  });

  it('2. actual dose 1 less than 1 month ago shows dose 2 Upcoming on dose 1 + 1 calendar month', () => {
    const dose1Date = new Date(2026, 7, 15);
    const { results } = mmrRecs(inputWithDose1(dose1Date));
    const dose2 = results.upcoming.find((item) => item.routineVaccineKey === 'mmrDose2');

    expect(dose2?.status).toBe('upcoming');
    expect(dose2?.recommendedDate).toBe('2026-09-15');
    expect(dose2?.noteKeys).not.toContain('note_mmrDose2OneMonthAfterFirst');
    expect(dose2?.noteKeys).not.toContain('note_mmrDose2DueAfterOneMonthPassed');

    const timingLines = getTimingDisplayLines(dose2!, today);
    expect(timingLines).toEqual([{ key: 'resultRecommendedDate', params: { date: '2026-09-15' } }]);
    expect(
      translateKey('ar', timingLines[0]!.key, {
        date: '15/9/2026',
      })
    ).toBe('الميعاد المقترح: 15/9/2026');
    expect(getCardExplanation(dose2!, (key) => translateKey('ar', key))).toBeNull();
    expect(results.dueNow.some((item) => item.routineVaccineKey === 'mmrDose2')).toBe(false);
  });

  it('3. no actual dose 1 yet may still use conditional wording', () => {
    const { recommendations } = mmrRecs(buildInput(dob, today, 'none'));
    const dose2 = recommendations.find((item) => item.routineVaccineKey === 'mmrDose2');

    expect(dose2?.noteKeys).toContain('note_mmrDose2OneMonthAfterFirst');
    expect(dose2?.noteKeys).not.toContain('note_mmrDose2DueAfterOneMonthPassed');
    expect(translateKey('ar', 'note_mmrDose2OneMonthAfterFirst')).toBe(
      'لو اتاخدت الجرعة الأولى النهارده، الجرعة الثانية تبقى بعد شهر.'
    );
  });
});
