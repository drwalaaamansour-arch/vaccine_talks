import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { AR_TRANSLATIONS, TRANSLATIONS } from '@/translations';
import { translateKey } from '@/translations/translate';

describe('Results educational CTA', () => {
  it('provides Arabic and English copy for the vaccinations link', () => {
    expect(translateKey('en', 'resultsLearnMoreHeading')).toBe(
      'Want more details about each vaccine?'
    );
    expect(translateKey('en', 'resultsLearnMoreText')).toBe(
      'Learn more about vaccine types and schedules.'
    );
    expect(translateKey('en', 'resultsLearnMoreButton')).toBe('Learn more about vaccines');

    expect(translateKey('ar', 'resultsLearnMoreHeading')).toBe('محتاج تفاصيل أكتر عن كل تطعيم؟');
    expect(translateKey('ar', 'resultsLearnMoreText')).toBe(
      'اعرف أكتر عن أنواع التطعيمات ومواعيدها.'
    );
    expect(translateKey('ar', 'resultsLearnMoreButton')).toBe('اعرف أكتر عن التطعيمات');
  });

  it('keeps translation keys in both dictionaries', () => {
    for (const key of [
      'resultsLearnMoreHeading',
      'resultsLearnMoreText',
      'resultsLearnMoreButton',
    ] as const) {
      expect(TRANSLATIONS[key]).toBeTruthy();
      expect(AR_TRANSLATIONS[key]).toBeTruthy();
    }
  });

  it('links to the internal vaccinations route without a hardcoded domain', () => {
    const source = readFileSync(
      resolve(process.cwd(), 'src/components/wizard/ResultsEducationalCta.tsx'),
      'utf8'
    );

    expect(source).toContain('href="/vaccinations"');
    expect(source).toContain('vaccine-checker-results-edu-cta-link');
    expect(source).not.toContain('btn-outline');
    expect(source).not.toContain('localhost');
    expect(source).not.toContain('http');
  });

  it('is placed on Results after sections and before disclaimer and actions', () => {
    const resultsStep = readFileSync(
      resolve(process.cwd(), 'src/components/wizard/ResultsStep.tsx'),
      'utf8'
    );
    const disclaimerIndex = resultsStep.indexOf('vaccine-checker-disclaimer-box');
    const ctaIndex = resultsStep.indexOf('<ResultsEducationalCta');
    const actionsIndex = resultsStep.indexOf('<ResultsActions');

    expect(ctaIndex).toBeGreaterThan(-1);
    expect(ctaIndex).toBeLessThan(disclaimerIndex);
    expect(actionsIndex).toBeGreaterThan(disclaimerIndex);
  });

  it('does not alter Share Result or Check another child actions', () => {
    const resultsStep = readFileSync(
      resolve(process.cwd(), 'src/components/wizard/ResultsStep.tsx'),
      'utf8'
    );
    const resultsActions = readFileSync(
      resolve(process.cwd(), 'src/components/wizard/ResultsActions.tsx'),
      'utf8'
    );

    expect(resultsStep).toContain("t('shareResultTitle')");
    expect(resultsStep).toContain("t('checkAnother')");
    expect(resultsStep).toContain("t('checkAnotherAr')");
    expect(resultsActions).toContain('shareResultsText');
    expect(resultsActions).toContain("t('shareResult')");
    expect(resultsActions).toContain("t('printResult')");
  });
});
