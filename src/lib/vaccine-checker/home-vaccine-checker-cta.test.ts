import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('Home Vaccine Checker CTA layout', () => {
  const homeCta = readFileSync(
    resolve(process.cwd(), 'src/components/HomeVaccineCheckerCta.tsx'),
    'utf8'
  );
  const homePage = readFileSync(resolve(process.cwd(), 'src/app/page.tsx'), 'utf8');

  it('uses Arabic-first title hierarchy without slash titles', () => {
    expect(homeCta).toContain('home-vaccine-checker-title-ar');
    expect(homeCta).toContain('home-vaccine-checker-title-en');
    expect(homeCta).toContain('اعرف تطعيمات طفلك');
    expect(homeCta).not.toContain('home-audience-title-sep');
  });

  it('keeps primary and share actions with existing behavior', () => {
    expect(homeCta).toContain('href="/vaccine-checker"');
    expect(homeCta).toContain('<ShareCheckerButton appearance="link"');
    expect(homeCta).toContain('home-vaccine-checker-primary');
  });

  it('places Arabic description before English description', () => {
    const arIndex = homeCta.indexOf('home-vaccine-checker-copy-ar');
    const enIndex = homeCta.indexOf('home-vaccine-checker-copy-en');
    expect(arIndex).toBeGreaterThan(-1);
    expect(enIndex).toBeGreaterThan(arIndex);
  });

  it('renders within the dedicated homepage section wrapper', () => {
    expect(homePage).toContain('home-vaccine-checker-section');
    expect(homePage).toContain('<HomeVaccineCheckerCta />');
  });
});
