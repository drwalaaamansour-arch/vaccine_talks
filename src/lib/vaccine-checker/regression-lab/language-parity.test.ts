import { describe, expect, it } from 'vitest';
import { calculateVaccineRecommendations } from '@/lib/vaccine-checker/calculations';
import { allRegressionScenarios } from '@/lib/vaccine-checker/regression-lab/scenarios/all-scenarios';
import { allItems } from '@/lib/vaccine-checker/regression-lab/matchers';
import { AR_TRANSLATIONS, TRANSLATIONS } from '@/translations';

function collectTranslationKeys(scenarioIds: string[]): Set<string> {
  const keys = new Set<string>();
  for (const scenario of allRegressionScenarios.filter((s) => scenarioIds.includes(s.id))) {
    const results = calculateVaccineRecommendations(scenario.buildInput());
    for (const item of allItems(results)) {
      keys.add(item.doseLabelKey);
      if (item.reasonKey) keys.add(item.reasonKey);
      for (const noteKey of item.noteKeys) keys.add(noteKey);
      if (item.recommendedDateLabelKey) keys.add(item.recommendedDateLabelKey);
    }
    for (const note of results.importantNotes) keys.add(note);
  }
  return keys;
}

describe('Arabic vs English — logic uses language-neutral keys', () => {
  it('calculation output keys exist in both en.ts and ar.ts (sample of historical scenarios)', () => {
    const sampleIds = [
      'seven-week-eligible-start',
      'four-month-catch-up-conditionals',
      'dose-two-due-today-boundary',
      'varicella-after-recent-mmr',
      'influenza-priming-conditional',
    ];
    const keys = collectTranslationKeys(sampleIds);
    const missingEn: string[] = [];
    const missingAr: string[] = [];
    for (const key of keys) {
      if (!(key in TRANSLATIONS)) missingEn.push(key);
      if (!(key in AR_TRANSLATIONS)) missingAr.push(key);
    }
    expect(missingEn, `Missing English keys: ${missingEn.join(', ')}`).toEqual([]);
    expect(missingAr, `Missing Arabic keys: ${missingAr.join(', ')}`).toEqual([]);
  });

  it('engine has no language parameter — EN/AR parity is structural', () => {
    const scenario = allRegressionScenarios.find((s) => s.id === 'seven-week-eligible-start');
    expect(scenario).toBeDefined();
    const a = calculateVaccineRecommendations(scenario!.buildInput());
    const b = calculateVaccineRecommendations(scenario!.buildInput());
    expect(JSON.stringify(a)).toBe(JSON.stringify(b));
  });
});
