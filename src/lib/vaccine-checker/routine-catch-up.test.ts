import { describe, expect, it } from 'vitest';
import { addMonths } from '@/lib/vaccine-checker/date-utils';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { collectImportantNotes } from '@/lib/vaccine-checker/result-notes';
import {
  buildRoutineVisitHistory,
  getReceivedRoutineVisits,
} from '@/lib/vaccine-checker/routine-history';
import { attachRoutineVaccineLedger } from '@/lib/vaccine-checker/input-adapter';
import { getDueRoutineVisits } from '@/lib/vaccine-checker/routine';
import { assessRoutineCatchUp } from '@/lib/vaccine-checker/routine-catch-up';
import { type CheckerInput } from '@/lib/vaccine-checker/types';
import { formatRoutineCatchUpLines } from '@/translations/routine-catch-up-labels';
import { translateKey } from '@/translations/translate';

function buildInput(
  dob: Date,
  today: Date,
  status: 'complete' | 'some' | 'none',
  selectedVisits: string[] = []
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
  });
}

function t(key: string): string {
  return translateKey('ar', key);
}

describe('routine catch-up assessment phase 2B', () => {
  const dob = new Date(2025, 7, 30);

  it('does not generate Hexavalent catch-up cards when all reached routine visits are received', () => {
    const today = addMonths(dob, 4);
    const assessment = assessRoutineCatchUp(buildInput(dob, today, 'complete'));

    expect(assessment.hexavalent.documentedDoseCount).toBe(2);
    expect(assessment.hexavalent.scheduledPrimaryDoses).toEqual([]);
    expect(assessment.recommendations.filter((item) => item.routineVaccineKey?.includes('hex'))).toEqual(
      []
    );
  });

  it('A. age 5 months with zero Hexavalent doses uses the 3-dose first-year pathway', () => {
    const today = addMonths(dob, 5);
    const assessment = assessRoutineCatchUp(buildInput(dob, today, 'none'));

    expect(assessment.hexavalent.pathway).toBe('FIRST_YEAR_3_DOSE');
    expect(assessment.hexavalent.documentedDoseCount).toBe(0);
    expect(assessment.hexavalent.remainingPrimaryDoses).toBe(3);
    expect(assessment.hexavalent.scheduledPrimaryDoses).toHaveLength(3);
    expect(assessment.hexavalent.scheduledPrimaryDoses[0]?.recommendedDate).toBe('2026-01-30');
    expect(assessment.hexavalent.scheduledPrimaryDoses[1]?.recommendedDate).toBe('2026-03-30');
    expect(assessment.hexavalent.scheduledPrimaryDoses[1]?.minimumValidDate).toBe('2026-02-28');
    expect(assessment.hexavalent.scheduledPrimaryDoses[2]?.recommendedDate).toBe('2026-05-30');
    expect(assessment.hexavalent.boosterDate).toBe('2026-11-30');
    expect(assessment.hexavalent.noteKeys).toContain('note_hexPreferredMinimumInterval');
  });

  it('B. age 5 months with 1 documented Hexavalent dose schedules 2 remaining primaries without restart', () => {
    const today = addMonths(dob, 5);
    const assessment = assessRoutineCatchUp(
      buildInput(dob, today, 'some', ['2months'])
    );

    expect(assessment.hexavalent.pathway).toBe('FIRST_YEAR_3_DOSE');
    expect(assessment.hexavalent.documentedDoseCount).toBe(1);
    expect(assessment.hexavalent.remainingPrimaryDoses).toBe(2);
    expect(assessment.hexavalent.scheduledPrimaryDoses).toHaveLength(2);
    expect(assessment.hexavalent.scheduledPrimaryDoses[0]?.doseKey).toBe('hexavalentDose2');
    expect(assessment.hexavalent.boosterDate).toBe('2026-08-28');
  });

  it('C. age 8 months with 2 documented Hexavalent doses schedules 1 remaining primary and booster after last primary', () => {
    const today = addMonths(dob, 8);
    const assessment = assessRoutineCatchUp(
      buildInput(dob, today, 'some', ['2months', '4months'])
    );

    expect(assessment.hexavalent.pathway).toBe('FIRST_YEAR_3_DOSE');
    expect(assessment.hexavalent.documentedDoseCount).toBe(2);
    expect(assessment.hexavalent.remainingPrimaryDoses).toBe(1);
    expect(assessment.hexavalent.scheduledPrimaryDoses).toHaveLength(1);
    expect(assessment.hexavalent.scheduledPrimaryDoses[0]?.doseKey).toBe('hexavalentDose3');
    expect(assessment.hexavalent.boosterDate).toBe('2026-08-28');
  });

  it('D. age exactly 12 months with zero Hexavalent uses the 2-dose catch-up pathway and booster dates', () => {
    const today = addMonths(dob, 12);
    const assessment = assessRoutineCatchUp(buildInput(dob, today, 'none'));

    expect(assessment.hexavalent.pathway).toBe('AGE_12M_PLUS_NO_PRIOR_2_DOSE');
    expect(assessment.hexavalent.targetPrimaryDoses).toBe(2);
    expect(assessment.hexavalent.scheduledPrimaryDoses).toHaveLength(2);
    expect(assessment.hexavalent.scheduledPrimaryDoses[0]?.recommendedDate).toBe('2026-08-30');
    expect(assessment.hexavalent.scheduledPrimaryDoses[1]?.recommendedDate).toBe('2026-10-30');
    expect(assessment.hexavalent.boosterDate).toBe('2027-04-30');
  });

  it('E. age 2 years with zero previous Hexavalent uses the same 2-dose catch-up pathway', () => {
    const today = addMonths(dob, 24);
    const assessment = assessRoutineCatchUp(buildInput(dob, today, 'none'));

    expect(assessment.hexavalent.pathway).toBe('AGE_12M_PLUS_NO_PRIOR_2_DOSE');
    expect(assessment.hexavalent.scheduledPrimaryDoses).toHaveLength(2);
    expect(assessment.hexavalent.scheduledPrimaryDoses[0]?.recommendedDate).toBe('2027-08-30');
    expect(assessment.hexavalent.scheduledPrimaryDoses[1]?.recommendedDate).toBe('2027-10-30');
    expect(assessment.hexavalent.boosterDate).toBe('2028-04-30');
  });

  it('schedules the Hexavalent booster 6 months after the last primary dose for an 11-month child with zero prior Hexavalent', () => {
    const elevenMonthDob = new Date(2025, 8, 30);
    const today = new Date(2026, 7, 30);
    const assessment = assessRoutineCatchUp(buildInput(elevenMonthDob, today, 'none'));

    expect(assessment.hexavalent.pathway).toBe('FIRST_YEAR_3_DOSE');
    expect(assessment.hexavalent.scheduledPrimaryDoses.map((dose) => dose.recommendedDate)).toEqual([
      '2026-08-30',
      '2026-10-30',
      '2026-12-30',
    ]);
    expect(assessment.hexavalent.boosterDate).toBe('2027-06-30');
  });

  it('F. age >6 months with missed BCG requires Tuberculin test and is not Due Now', () => {
    const today = addMonths(dob, 7);
    const input = buildInput(dob, today, 'none');
    const assessment = assessRoutineCatchUp(input);
    const results = calculateVaccineRecommendations(input);

    expect(assessment.bcg.status).toBe('tuberculin_required');
    expect(results.needsReview.some((item) => item.id === 'routine-bcg-tuberculin-prerequisite')).toBe(
      true
    );
    expect(results.dueNow.some((item) => item.routineVaccineKey === 'bcg')).toBe(false);
    expect(collectImportantNotes(results.needsReview)).not.toContain('note_clinicianReviewRecommended');
    expect(translateKey('ar', 'note_bcgTuberculinRequired')).toBe(
      'قبل أخذ تطعيم BCG بعد عمر 6 شهور، لازم يتعمل اختبار تيوبركلين أولًا.'
    );
  });

  it('G. age <=6 months with missed BCG does not apply the Tuberculin prerequisite', () => {
    const today = addMonths(dob, 5);
    const assessment = assessRoutineCatchUp(buildInput(dob, today, 'none'));

    expect(assessment.bcg.status).toBe('missed_age_lte_6_months');
    expect(
      assessment.recommendations.some((item) => item.reasonKey === 'reason_bcgTuberculinRequired')
    ).toBe(false);
  });

  it('H. age exactly 12 months with 1 previous first-year Hexavalent dose uses the 2-dose catch-up pathway', () => {
    const today = addMonths(dob, 12);
    const assessment = assessRoutineCatchUp(
      buildInput(dob, today, 'some', ['2months'])
    );
    const results = calculateVaccineRecommendations(
      buildInput(dob, today, 'some', ['2months'])
    );

    expect(assessment.hexavalent.pathway).toBe('AGE_12M_PLUS_ONE_PRIOR_2_DOSE');
    expect(assessment.hexavalent.documentedDoseCount).toBe(1);
    expect(assessment.hexavalent.scheduledPrimaryDoses).toHaveLength(2);
    expect(assessment.hexavalent.scheduledPrimaryDoses[0]?.doseKey).toBe('hexavalentDose2');
    expect(assessment.hexavalent.scheduledPrimaryDoses[1]?.doseKey).toBe('hexavalentDose3');
    expect(assessment.hexavalent.scheduledPrimaryDoses[0]?.recommendedDate).toBe('2026-08-30');
    expect(assessment.hexavalent.scheduledPrimaryDoses[1]?.recommendedDate).toBe('2026-10-30');
    expect(assessment.hexavalent.boosterDate).toBe('2027-04-30');
    expect(results.needsReview.some((item) => item.id === 'routine-hex-partial-history-review')).toBe(
      false
    );
  });

  it('schedules only 1 remaining primary dose for age >=12 months with 2 first-year Hexavalent doses', () => {
    const today = addMonths(dob, 14);
    const assessment = assessRoutineCatchUp(
      buildInput(dob, today, 'some', ['2months', '4months'])
    );
    const results = calculateVaccineRecommendations(
      buildInput(dob, today, 'some', ['2months', '4months'])
    );

    expect(assessment.hexavalent.pathway).toBe('AGE_12M_PLUS_TWO_PRIOR_1_REMAINING');
    expect(assessment.hexavalent.documentedDoseCount).toBe(2);
    expect(assessment.hexavalent.scheduledPrimaryDoses).toHaveLength(1);
    expect(assessment.hexavalent.scheduledPrimaryDoses[0]?.doseKey).toBe('hexavalentDose3');
    expect(assessment.hexavalent.scheduledPrimaryDoses[0]?.recommendedDate).toBe('2026-02-28');
    expect(assessment.hexavalent.scheduledPrimaryDoses[0]?.status).toBe('due-now');
    expect(assessment.hexavalent.boosterDate).toBe('2027-04-30');

    const remainingPrimary = results.dueNow.find((item) => item.routineVaccineKey === 'hexavalentDose3');
    expect(remainingPrimary?.doseLabelKey).toBe('routineVaccine_hexRemainingPrimary');
    expect(remainingPrimary?.recommendedDate).toBeUndefined();
    expect(remainingPrimary?.noteKeys).toContain('note_hexRemainingPrimaryDueNow');

    const booster = [...results.dueNow, ...results.upcoming].find(
      (item) => item.id === 'routine-hex-booster'
    );
    expect(booster?.conditionalNextDose).toBe(true);
    expect(booster?.recommendedDate).toBe('2027-04-30');
    expect(booster?.recommendedDate).not.toBe('2026-08-28');
  });

  it('uses parent-facing Arabic wording for one prior Hexavalent dose at age 12 months', () => {
    const today = addMonths(dob, 12);
    const lines = formatRoutineCatchUpLines(
      assessRoutineCatchUp(buildInput(dob, today, 'some', ['2months'])),
      'ar',
      t
    );

    expect(lines).toContain(
      'الطفل أخد جرعة هيكسا واحدة قبل كده، وبيحتاج جرعتين لاستكمال الجرعات الأساسية.'
    );
    expect(lines).toContain('الفرق المفضل بين الجرعتين شهرين.');
    expect(lines).toContain('الجرعة المنشطة بتكون بعد آخر جرعة أساسية بـ 6 شهور.');
    expect(lines.join(' ')).not.toMatch(/PARTIAL_HISTORY|NEEDS_REVIEW|FIRST_YEAR|SECOND_YEAR/i);
  });

  it('I. OPV history is preserved separately and no OPV catch-up schedule is generated', () => {
    const today = addMonths(dob, 12);
    const assessment = assessRoutineCatchUp(
      buildInput(dob, today, 'some', ['birth', '2months', '4months', '12months'])
    );

    expect(assessment.opv.documentedDoseKeys).toEqual(['opvDose1', 'opvDose2', 'opvBooster1']);
    expect(assessment.opv.showHealthOfficeNote).toBe(true);
    expect(assessment.opv.missedOpvVisitKeys).toEqual(['1month', '6months', '9months']);
    expect(
      assessment.recommendations.some((item) => item.routineVaccineKey?.startsWith('opv'))
    ).toBe(false);
    expect(assessment.mmr.documentedDoseKeys).toEqual(['mmrDose1']);
    expect(assessment.hexavalent.documentedDoseKeys).toEqual([
      'hexavalentDose1',
      'hexavalentDose2',
    ]);
  });

  it('shows the OPV health-office note when a reached OPV visit was missed', () => {
    const today = addMonths(dob, 7);
    const assessment = assessRoutineCatchUp(buildInput(dob, today, 'none'));
    const results = calculateVaccineRecommendations(buildInput(dob, today, 'none'));

    expect(assessment.opv.showHealthOfficeNote).toBe(true);
    expect(assessment.opv.missedOpvVisitKeys.length).toBeGreaterThan(0);
    expect(results.needsReview.some((item) => item.routineVaccineKey?.startsWith('opv'))).toBe(false);
    expect(
      [...results.dueNow, ...results.upcoming].some((item) =>
        item.routineVaccineKey?.startsWith('opv')
      )
    ).toBe(false);
  });

  it('does not show the OPV health-office note when all reached OPV visits were received', () => {
    const today = addMonths(dob, 12);
    const input = buildInput(dob, today, 'some', [
      'birth',
      '1month',
      '2months',
      '4months',
      '6months',
      '9months',
      '12months',
    ]);
    const assessment = assessRoutineCatchUp(input);
    const results = calculateVaccineRecommendations(input);

    expect(assessment.opv.showHealthOfficeNote).toBe(false);
    expect(assessment.opv.missedOpvVisitKeys).toEqual([]);
    expect(assessment.opv.documentedDoseKeys).toEqual([
      'opv',
      'opvDose1',
      'opvDose2',
      'opvDose3',
      'opvDose4',
      'opvBooster1',
    ]);
    expect(results.routineCatchUpAssessment?.opv.showHealthOfficeNote).toBe(false);
  });

  it('keeps Hexavalent scheduling unchanged when OPV visits were missed', () => {
    const elevenMonthDob = new Date(2025, 8, 30);
    const today = new Date(2026, 7, 30);
    const input = buildInput(elevenMonthDob, today, 'none');
    const assessment = assessRoutineCatchUp(input);

    expect(assessment.opv.showHealthOfficeNote).toBe(true);
    expect(assessment.hexavalent.scheduledPrimaryDoses.map((dose) => dose.recommendedDate)).toEqual([
      '2026-08-30',
      '2026-10-30',
      '2026-12-30',
    ]);
    expect(assessment.hexavalent.boosterDate).toBe('2027-06-30');
  });

  it('keeps OPV and IPV histories separate in the ledger', () => {
    const today = addMonths(dob, 8);
    const input = buildInput(dob, today, 'some', ['2months', '4months']);
    const assessment = assessRoutineCatchUp(input);

    expect(assessment.opv.documentedDoseKeys).toEqual(['opvDose1', 'opvDose2']);
    expect(assessment.hexavalent.documentedDoseKeys).toEqual(['hexavalentDose1', 'hexavalentDose2']);
    expect(assessment.opv.showHealthOfficeNote).toBe(true);
    expect(input.routineVaccineLedger?.bySeries.polioIpv.doseCount).toBe(2);
    expect(input.routineVaccineLedger?.bySeries.polioOpv.doseCount).toBe(2);
  });

  it('uses parent-facing Arabic catch-up wording without internal enum labels', () => {
    const elevenMonthDob = new Date(2025, 8, 30);
    const today = new Date(2026, 7, 30);
    const lines = formatRoutineCatchUpLines(
      assessRoutineCatchUp(buildInput(elevenMonthDob, today, 'none')),
      'ar',
      t
    );

    expect(lines).toEqual([
      'BCG',
      'لازم يتعمل اختبار تيوبركلين الأول قبل تحديد أخذ التطعيم.',
      'الهيكسا',
      'الطفل ماخدش جرعات هيكسا قبل كده، وبيحتاج استكمال 3 جرعات أساسية.',
      'الفرق المفضل بين الجرعات شهرين، وأقل فرق مسموح شهر.',
      'شلل الأطفال (\u2066OPV\u2069)',
      'تطعيم شلل الأطفال موجود ضمن الهيكسا كـ IPV، لكن لاستكمال جرعات شلل الأطفال الفموي (OPV) لازم تراجع مكتب الصحة حسب سجل التطعيمات.',
    ]);
    expect(lines.join(' ')).not.toMatch(/FIRST_YEAR|NEEDS_REVIEW|MMR|تطوير|catch-up rule pending|documented doses/i);
    expect(lines).toContain('شلل الأطفال (\u2066OPV\u2069)');
  });

  it('counts MMR from a received 12-month visit without duplicating explicit MMR dates', () => {
    const today = addMonths(dob, 12);
    const base = buildInput(dob, today, 'some', ['12months']);
    const withMmrDate = {
      ...base,
      mmrDate: new Date(2026, 7, 30),
      mmrDates: [new Date(2026, 7, 30)],
    };
    const assessment = assessRoutineCatchUp(withMmrDate);

    expect(assessment.mmr.documentedDoseKeys).toEqual(['mmrDose1']);
    expect(withMmrDate.mmrDate).not.toBeNull();
  });
});

describe('final Hexavalent catch-up rules', () => {
  const dob = new Date(2025, 7, 30);
  const routinePrimaryDob = new Date(2025, 4, 31);

  it('TEST 1: age 11 months with 0 previous Hexa schedules 3 primary doses with 2-month preferred interval', () => {
    const elevenMonthDob = new Date(2025, 8, 30);
    const today = new Date(2026, 7, 30);
    const assessment = assessRoutineCatchUp(buildInput(elevenMonthDob, today, 'none'));

    expect(assessment.hexavalent.pathway).toBe('FIRST_YEAR_3_DOSE');
    expect(assessment.hexavalent.scheduledPrimaryDoses).toHaveLength(3);
    expect(assessment.hexavalent.scheduledPrimaryDoses.map((dose) => dose.recommendedDate)).toEqual([
      '2026-08-30',
      '2026-10-30',
      '2026-12-30',
    ]);
    expect(assessment.hexavalent.scheduledPrimaryDoses[1]?.minimumValidDate).toBe('2026-09-30');
  });

  it('TEST 2: age 11 months with 2 previous Hexa schedules only 1 remaining primary dose', () => {
    const elevenMonthDob = new Date(2025, 8, 30);
    const today = new Date(2026, 7, 30);
    const assessment = assessRoutineCatchUp(
      buildInput(elevenMonthDob, today, 'some', ['2months', '4months'])
    );

    expect(assessment.hexavalent.pathway).toBe('FIRST_YEAR_3_DOSE');
    expect(assessment.hexavalent.scheduledPrimaryDoses).toHaveLength(1);
    expect(assessment.hexavalent.scheduledPrimaryDoses[0]?.doseKey).toBe('hexavalentDose3');
  });

  it('TEST 3: age 15 months with routine 2m + 4m + 6m Hexa shows booster at 18 months only', () => {
    const today = new Date(2026, 7, 31);
    const input = buildInput(routinePrimaryDob, today, 'some', ['2months', '4months', '6months']);
    const assessment = assessRoutineCatchUp(input);
    const results = calculateVaccineRecommendations(input);

    expect(assessment.hexavalent.pathway).toBe('ROUTINE_PRIMARY_COMPLETED_IN_FIRST_YEAR');
    expect(assessment.hexavalent.scheduledPrimaryDoses).toHaveLength(0);
    expect(assessment.hexavalent.boosterDate).toBe('2026-11-30');
    expect(assessment.hexavalent.boosterDate).not.toBe('2026-05-30');
    expect(results.dueNow.some((item) => item.id === 'routine-hex-booster')).toBe(false);
    expect(results.upcoming.find((item) => item.id === 'routine-hex-booster')?.recommendedDate).toBe(
      '2026-11-30'
    );
  });

  it('TEST 4: age >=12 months with 2 first-year Hexa doses schedules 1 remaining primary then conditional booster', () => {
    const today = addMonths(dob, 14);
    const assessment = assessRoutineCatchUp(
      buildInput(dob, today, 'some', ['2months', '4months'])
    );

    expect(assessment.hexavalent.pathway).toBe('AGE_12M_PLUS_TWO_PRIOR_1_REMAINING');
    expect(assessment.hexavalent.scheduledPrimaryDoses).toHaveLength(1);
    expect(assessment.hexavalent.scheduledPrimaryDoses[0]?.doseKey).toBe('hexavalentDose3');
    expect(assessment.hexavalent.boosterDate).toBe('2027-04-30');
    expect(assessment.hexavalent.boosterDate).not.toBe('2026-08-28');
  });

  it('TEST 5: age >=12 months with 1 first-year Hexa dose schedules 2 catch-up doses then booster +6 months', () => {
    const today = addMonths(dob, 12);
    const assessment = assessRoutineCatchUp(
      buildInput(dob, today, 'some', ['2months'])
    );

    expect(assessment.hexavalent.pathway).toBe('AGE_12M_PLUS_ONE_PRIOR_2_DOSE');
    expect(assessment.hexavalent.scheduledPrimaryDoses).toHaveLength(2);
    expect(assessment.hexavalent.scheduledPrimaryDoses[0]?.recommendedDate).toBe('2026-08-30');
    expect(assessment.hexavalent.scheduledPrimaryDoses[1]?.recommendedDate).toBe('2026-10-30');
    expect(assessment.hexavalent.boosterDate).toBe('2027-04-30');
  });

  it('TEST 6: age >=12 months with 0 first-year Hexa doses schedules 2 catch-up doses then booster +6 months', () => {
    const today = addMonths(dob, 12);
    const assessment = assessRoutineCatchUp(buildInput(dob, today, 'none'));

    expect(assessment.hexavalent.pathway).toBe('AGE_12M_PLUS_NO_PRIOR_2_DOSE');
    expect(assessment.hexavalent.scheduledPrimaryDoses).toHaveLength(2);
    expect(assessment.hexavalent.scheduledPrimaryDoses[0]?.recommendedDate).toBe('2026-08-30');
    expect(assessment.hexavalent.scheduledPrimaryDoses[1]?.recommendedDate).toBe('2026-10-30');
    expect(assessment.hexavalent.boosterDate).toBe('2027-04-30');
  });

  it('TEST 7: child older than 2 years with zero Hexa uses the same age >=12-month rule', () => {
    const today = addMonths(dob, 24);
    const assessment = assessRoutineCatchUp(buildInput(dob, today, 'none'));

    expect(assessment.hexavalent.pathway).toBe('AGE_12M_PLUS_NO_PRIOR_2_DOSE');
    expect(assessment.hexavalent.scheduledPrimaryDoses).toHaveLength(2);
    expect(assessment.hexavalent.boosterDate).toBe('2028-04-30');
  });

  it('TEST 8: routine infant primary series does not show a past Hexavalent booster under Due Now', () => {
    const today = new Date(2026, 7, 31);
    const input = buildInput(routinePrimaryDob, today, 'some', ['2months', '4months', '6months']);
    const results = calculateVaccineRecommendations(input);

    expect(results.dueNow.some((item) => item.id === 'routine-hex-booster')).toBe(false);
    expect(
      results.dueNow.some(
        (item) => item.routineVaccineKey === 'dtpBooster' && item.recommendedDate === '2026-05-30'
      )
    ).toBe(false);
  });
});

describe('Hexavalent two prior doses at age 12 months', () => {
  const dob = new Date(2025, 7, 31);
  const today = new Date(2026, 7, 31);

  it('shows one remaining primary dose Due Now without a past vaccination date', () => {
    const input = buildInput(dob, today, 'some', ['2months', '4months']);
    const assessment = assessRoutineCatchUp(input);
    const results = calculateVaccineRecommendations(input);

    expect(assessment.hexavalent.pathway).toBe('AGE_12M_PLUS_TWO_PRIOR_1_REMAINING');
    expect(assessment.hexavalent.scheduledPrimaryDoses).toHaveLength(1);

    const remainingPrimary = results.dueNow.find((item) => item.routineVaccineKey === 'hexavalentDose3');
    expect(remainingPrimary?.doseLabelKey).toBe('routineVaccine_hexRemainingPrimary');
    expect(remainingPrimary?.doseLabelKey).not.toBe('routineVaccine_hexavalentDose2');
    expect(remainingPrimary?.status).toBe('due-now');
    expect(remainingPrimary?.recommendedDate).toBeUndefined();
    expect(remainingPrimary?.noteKeys).toContain('note_hexRemainingPrimaryDueNow');
  });

  it('does not show booster 28/08/2026 and uses conditional booster from today + 6 months', () => {
    const input = buildInput(dob, today, 'some', ['2months', '4months']);
    const results = calculateVaccineRecommendations(input);

    const allHex = [...results.dueNow, ...results.upcoming, ...results.eligibleNow].filter(
      (item) => item.routineVaccineKey === 'dtpBooster' || item.id === 'routine-hex-booster'
    );

    expect(allHex.some((item) => item.recommendedDate === '2026-08-28')).toBe(false);
    expect(allHex.some((item) => item.recommendedDate === '2026-02-28')).toBe(false);

    const booster = results.upcoming.find((item) => item.id === 'routine-hex-booster');
    expect(booster?.conditionalNextDose).toBe(true);
    expect(booster?.recommendedDate).toBe('2027-02-28');
  });

  it('uses parent-facing Arabic conditional booster wording', () => {
    const results = calculateVaccineRecommendations(
      buildInput(dob, today, 'some', ['2months', '4months'])
    );
    const booster = results.upcoming.find((item) => item.id === 'routine-hex-booster');

    expect(
      translateKey('ar', 'resultConditionalHexBoosterAfterRemainingPrimary', {
        date: '28/02/2027',
      })
    ).toBe('لو اتاخدت الجرعة الأساسية المتبقية النهارده، الجرعة المنشطة تبقى يوم 28/02/2027.');
    expect(booster?.conditionalNextDose).toBe(true);
  });

  it('recalculates to routine 18-month booster once the third primary dose visit is recorded', () => {
    const input = buildInput(dob, today, 'some', ['2months', '4months', '6months']);
    const assessment = assessRoutineCatchUp(input);
    const results = calculateVaccineRecommendations(input);

    expect(assessment.hexavalent.pathway).toBe('ROUTINE_PRIMARY_COMPLETED_IN_FIRST_YEAR');
    expect(assessment.hexavalent.boosterDate).toBe('2027-02-28');
    expect(results.upcoming.find((item) => item.id === 'routine-hex-booster')?.conditionalNextDose).toBe(
      undefined
    );
    expect(
      [...results.dueNow, ...results.upcoming].some((item) => item.recommendedDate === '2026-08-28')
    ).toBe(false);
  });
});

describe('overdue routine Hexavalent booster presentation', () => {
  const routineVisits = ['2months', '4months', '6months'] as const;

  it('1. age 15 months with routine 2m/4m/6m series shows booster Upcoming at 18 months', () => {
    const dob = new Date(2025, 7, 31);
    const today = addMonths(dob, 15);
    const results = calculateVaccineRecommendations(
      buildInput(dob, today, 'some', [...routineVisits])
    );

    const booster = results.upcoming.find((item) => item.id === 'routine-hex-booster');
    expect(booster?.status).toBe('upcoming');
    expect(booster?.recommendedDate).toBe('2027-02-28');
    expect(booster?.noteKeys).not.toContain('note_hexRoutineBoosterOverdue');
    expect(results.dueNow.some((item) => item.id === 'routine-hex-booster')).toBe(false);
  });

  it('2. exactly 18 months shows routine booster Due Now', () => {
    const dob = new Date(2025, 7, 31);
    const today = addMonths(dob, 18);
    const results = calculateVaccineRecommendations(
      buildInput(dob, today, 'some', [...routineVisits])
    );

    const booster = results.dueNow.find((item) => item.id === 'routine-hex-booster');
    expect(booster?.status).toBe('due-now');
    expect(booster?.recommendedDate).toBe('2027-02-28');
    expect(booster?.noteKeys).toContain('note_hexRoutineBoosterDueNow');
    expect(booster?.noteKeys).not.toContain('note_hexRoutineBoosterOverdue');
  });

  it('3. age 2 years with missed 18-month booster shows Due Now with overdue Arabic note', () => {
    const dob = new Date(2024, 7, 31);
    const today = new Date(2026, 7, 31);
    const results = calculateVaccineRecommendations(
      buildInput(dob, today, 'some', [...routineVisits])
    );

    const booster = results.dueNow.find((item) => item.id === 'routine-hex-booster');
    expect(booster?.status).toBe('due-now');
    expect(booster?.recommendedDate).toBeUndefined();
    expect(booster?.historicalRecommendedDate).toBe('2026-02-28');
    expect(booster?.noteKeys).toContain('note_hexRoutineBoosterDueNow');
    expect(booster?.noteKeys).toContain('note_hexRoutineBoosterOverdue');
    expect(translateKey('ar', 'note_hexRoutineBoosterOverdue')).toBe(
      'دي جرعة السنة ونص، ومعادها فات.'
    );
  });

  it('4. overdue routine booster keeps old date only as historical context', () => {
    const dob = new Date(2024, 7, 31);
    const today = new Date(2026, 7, 31);
    const results = calculateVaccineRecommendations(
      buildInput(dob, today, 'some', [...routineVisits])
    );

    const booster = results.dueNow.find((item) => item.id === 'routine-hex-booster');
    expect(booster?.recommendedDate).toBeUndefined();
    expect(booster?.historicalRecommendedDate).toBe('2026-02-28');
    expect(
      translateKey('ar', 'note_hexRoutineBoosterHistoricalDate', { date: '28/02/2026' })
    ).toBe('كان ميعادها عند سنة ونص: 28/02/2026.');
  });
});
