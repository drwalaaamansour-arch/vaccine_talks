#!/usr/bin/env node
/**
 * Adds VaccineLangTitle (with Added date) to vaccine/sera page.tsx files.
 * Run from repo root: node scripts/add-vaccine-title-dates.mjs
 */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');

/** @type {{ file: string; metaKey: string; maxTitles: number }[]} */
const PAGES = [
  { file: 'src/app/influenza/page.tsx', metaKey: 'influenza', maxTitles: 2 },
  { file: 'src/app/pcv/page.tsx', metaKey: 'pcv', maxTitles: 2 },
  { file: 'src/app/ppsv/page.tsx', metaKey: 'ppsv', maxTitles: 2 },
  { file: 'src/app/mmr/page.tsx', metaKey: 'mmr', maxTitles: 2 },
  { file: 'src/app/bcg/page.tsx', metaKey: 'bcg', maxTitles: 1 },
  { file: 'src/app/hib/page.tsx', metaKey: 'hib', maxTitles: 2 },
  { file: 'src/app/hpv/page.tsx', metaKey: 'hpv', maxTitles: 2 },
  { file: 'src/app/rabies/page.tsx', metaKey: 'rabies', maxTitles: 2 },
  { file: 'src/app/meningitis/page.tsx', metaKey: 'meningitis', maxTitles: 2 },
  { file: 'src/app/herpes-zoster/page.tsx', metaKey: 'herpesZoster', maxTitles: 2 },
  { file: 'src/app/hepatitis-a/page.tsx', metaKey: 'hepatitisA', maxTitles: 2 },
  { file: 'src/app/hepatitis-b/page.tsx', metaKey: 'hepatitisB', maxTitles: 2 },
  { file: 'src/app/hepatitis-a-b/page.tsx', metaKey: 'hepatitisAB', maxTitles: 2 },
  { file: 'src/app/rotavirus/page.tsx', metaKey: 'rotavirus', maxTitles: 2 },
  { file: 'src/app/chickenpox/page.tsx', metaKey: 'chickenpox', maxTitles: 2 },
  { file: 'src/app/polio/page.tsx', metaKey: 'polio', maxTitles: 2 },
  { file: 'src/app/tetanus/page.tsx', metaKey: 'tetanus', maxTitles: 2 },
  { file: 'src/app/pertussis/page.tsx', metaKey: 'pertussis', maxTitles: 2 },
  { file: 'src/app/diphtheria/page.tsx', metaKey: 'diphtheria', maxTitles: 2 },
  { file: 'src/app/rsv/page.tsx', metaKey: 'rsv', maxTitles: 2 },
  { file: 'src/app/tuberculosis/page.tsx', metaKey: 'tuberculosis', maxTitles: 2 },
  { file: 'src/app/anti-scorpion/page.tsx', metaKey: 'antiScorpion', maxTitles: 1 },
  { file: 'src/app/anti-snake/page.tsx', metaKey: 'antiSnake', maxTitles: 1 },
  { file: 'src/app/anti-viper/page.tsx', metaKey: 'antiViper', maxTitles: 1 },
  { file: 'src/app/hb-immunoglobulin/page.tsx', metaKey: 'hbImmunoglobulin', maxTitles: 1 },
  { file: 'src/app/hcp/bcg/page.tsx', metaKey: 'hcpBcg', maxTitles: 1 },
  { file: 'src/app/hcp/diphtheria/page.tsx', metaKey: 'hcpDiphtheria', maxTitles: 1 },
  { file: 'src/app/hcp/dt/page.tsx', metaKey: 'hcpDt', maxTitles: 1 },
  { file: 'src/app/hcp/influenza/page.tsx', metaKey: 'hcpInfluenza', maxTitles: 1 },
  { file: 'src/app/hcp/hib/page.tsx', metaKey: 'hcpHib', maxTitles: 1 },
  { file: 'src/app/hcp/hepatitis-a/page.tsx', metaKey: 'hcpHepatitisA', maxTitles: 1 },
  { file: 'src/app/hcp/hepatitis-b/page.tsx', metaKey: 'hcpHepatitisB', maxTitles: 1 },
  { file: 'src/app/hcp/hepatitis-a-b/page.tsx', metaKey: 'hcpHepatitisAB', maxTitles: 1 },
  { file: 'src/app/hcp/hpv/page.tsx', metaKey: 'hcpHpv', maxTitles: 1 },
  { file: 'src/app/hcp/meningococcal/page.tsx', metaKey: 'hcpMeningococcal', maxTitles: 1 },
  { file: 'src/app/hcp/mmr/page.tsx', metaKey: 'hcpMmr', maxTitles: 1 },
  { file: 'src/app/hcp/pneumococcal/page.tsx', metaKey: 'hcpPneumococcal', maxTitles: 1 },
  { file: 'src/app/hcp/polio/page.tsx', metaKey: 'hcpPolio', maxTitles: 1 },
  { file: 'src/app/hcp/rabirs/page.tsx', metaKey: 'hcpRabies', maxTitles: 1 },
  { file: 'src/app/hcp/rota/page.tsx', metaKey: 'hcpRota', maxTitles: 1 },
  { file: 'src/app/hcp/rsv/page.tsx', metaKey: 'hcpRsv', maxTitles: 1 },
  { file: 'src/app/hcp/shingles/page.tsx', metaKey: 'hcpShingles', maxTitles: 1 },
  { file: 'src/app/hcp/tetanus/page.tsx', metaKey: 'hcpTetanus', maxTitles: 1 },
  { file: 'src/app/hcp/varicella/page.tsx', metaKey: 'hcpVaricella', maxTitles: 1 },
  { file: 'src/app/hcp/yellow-fever/page.tsx', metaKey: 'hcpYellowFever', maxTitles: 1 },
  { file: 'src/app/hcp/meningitis/page.tsx', metaKey: 'hcpMeningitis', maxTitles: 1 },
];

const H2_RE = /<h2(\s+className="about-lang-title"[^>]*)>([\s\S]*?)<\/h2>/;

function ensureImports(src) {
  if (src.includes('VaccineLangTitle')) return src;
  const importBlock = `import VaccineLangTitle from '@/components/VaccineLangTitle';\nimport { ARTICLE_META } from '@/lib/article-meta';\n`;
  if (src.includes("'use client'")) {
    return src.replace(/('use client';\n\n)/, `$1${importBlock}`);
  }
  const firstImport = src.match(/^import .+;\n/m);
  if (firstImport) {
    const idx = src.indexOf(firstImport[0]) + firstImport[0].length;
    return src.slice(0, idx) + importBlock + src.slice(idx);
  }
  return importBlock + src;
}

function replaceTitles(src, metaKey, maxTitles) {
  let count = 0;
  let out = src;
  const spread = `{...ARTICLE_META.${metaKey}}`;
  while (count < maxTitles) {
    const m = out.match(H2_RE);
    if (!m) break;
    const attrs = m[1];
    const inner = m[2];
    const styleMatch = attrs.match(/\s+style=\{\{[\s\S]*?\}\}/);
    const stylePart = styleMatch ? styleMatch[0].trim() : '';
    const replacement = stylePart
      ? `<VaccineLangTitle ${spread} ${stylePart}>${inner}</VaccineLangTitle>`
      : `<VaccineLangTitle ${spread}>${inner}</VaccineLangTitle>`;
    out = out.replace(H2_RE, replacement);
    count += 1;
  }
  return { out, count };
}

for (const { file, metaKey, maxTitles } of PAGES) {
  const full = path.join(ROOT, file);
  if (!fs.existsSync(full)) {
    console.warn('skip missing', file);
    continue;
  }
  let src = fs.readFileSync(full, 'utf8');
  if (src.includes('VaccineLangTitle')) {
    console.log('skip already done', file);
    continue;
  }
  src = ensureImports(src);
  const { out, count } = replaceTitles(src, metaKey, maxTitles);
  if (count === 0) {
    console.warn('no h2 replaced', file);
    continue;
  }
  fs.writeFileSync(full, out);
  console.log('updated', file, `(${count} title${count > 1 ? 's' : ''})`);
}
