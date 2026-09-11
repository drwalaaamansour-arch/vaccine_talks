import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { VACCINE_RESULT_CARD_CLASS } from '@/components/wizard/vaccine-result-card-styles';

const globalsCss = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), '../../app/globals.css'),
  'utf8'
);

describe('vaccine result card padding', () => {
  it('uses direction-safe inline padding on each result card class', () => {
    expect(VACCINE_RESULT_CARD_CLASS).toContain('[padding-inline:18px]');
    expect(VACCINE_RESULT_CARD_CLASS).toContain('[padding-block:10px]');
  });

  it('keeps matching unlayered CSS padding for LTR and RTL rendering', () => {
    expect(globalsCss).toMatch(
      /\.vaccine-checker-results-grid \.vaccine-checker-result-card[\s\S]*padding-inline:\s*1\.125rem\s*!important/
    );
    expect(globalsCss).toMatch(
      /\.vaccine-checker-results-grid \.vaccine-checker-result-card[\s\S]*padding-block:\s*0\.625rem\s*!important/
    );
  });
});
