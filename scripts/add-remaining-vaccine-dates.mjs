#!/usr/bin/env node
/**
 * Adds VaccineLangTitle to any remaining about-lang-title h2 on vaccine pages.
 */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');

/** @type {{ file: string; metaKey: string; replaceAll?: boolean; maxTitles?: number }[]} */
const PAGES = [
  { file: 'src/app/zero-dose/page.tsx', metaKey: 'zeroDose', maxTitles: 2 },
  { file: 'src/app/at-birth/page.tsx', metaKey: 'atBirth', maxTitles: 2 },
  { file: 'src/app/two-months/page.tsx', metaKey: 'twoMonths', maxTitles: 2 },
  { file: 'src/app/four-months/page.tsx', metaKey: 'fourMonths', maxTitles: 2 },
  { file: 'src/app/six-months/page.tsx', metaKey: 'sixMonths', maxTitles: 2 },
  { file: 'src/app/nine-months/page.tsx', metaKey: 'nineMonths', maxTitles: 2 },
  { file: 'src/app/one-year/page.tsx', metaKey: 'oneYear', maxTitles: 2 },
  { file: 'src/app/second-year/page.tsx', metaKey: 'secondYear', maxTitles: 2 },
  { file: 'src/app/hcp/bcg/page.tsx', metaKey: 'hcpBcg', replaceAll: true },
  { file: 'src/app/hcp/diphtheria/page.tsx', metaKey: 'hcpDiphtheria', replaceAll: true },
  { file: 'src/app/hcp/dt/page.tsx', metaKey: 'hcpDt', replaceAll: true },
  { file: 'src/app/hcp/influenza/page.tsx', metaKey: 'hcpInfluenza', replaceAll: true },
  { file: 'src/app/hcp/hib/page.tsx', metaKey: 'hcpHib', replaceAll: true },
  { file: 'src/app/hcp/hepatitis-a/page.tsx', metaKey: 'hcpHepatitisA', replaceAll: true },
  { file: 'src/app/hcp/hepatitis-b/page.tsx', metaKey: 'hcpHepatitisB', replaceAll: true },
  { file: 'src/app/hcp/hepatitis-a-b/page.tsx', metaKey: 'hcpHepatitisAB', replaceAll: true },
  { file: 'src/app/hcp/hpv/page.tsx', metaKey: 'hcpHpv', replaceAll: true },
  { file: 'src/app/hcp/meningococcal/page.tsx', metaKey: 'hcpMeningococcal', replaceAll: true },
  { file: 'src/app/hcp/mmr/page.tsx', metaKey: 'hcpMmr', replaceAll: true },
  { file: 'src/app/hcp/pneumococcal/page.tsx', metaKey: 'hcpPneumococcal', replaceAll: true },
  { file: 'src/app/hcp/polio/page.tsx', metaKey: 'hcpPolio', replaceAll: true },
  { file: 'src/app/hcp/rabirs/page.tsx', metaKey: 'hcpRabies', replaceAll: true },
  { file: 'src/app/hcp/rota/page.tsx', metaKey: 'hcpRota', replaceAll: true },
  { file: 'src/app/hcp/rsv/page.tsx', metaKey: 'hcpRsv', replaceAll: true },
  { file: 'src/app/hcp/shingles/page.tsx', metaKey: 'hcpShingles', replaceAll: true },
  { file: 'src/app/hcp/tetanus/page.tsx', metaKey: 'hcpTetanus', replaceAll: true },
  { file: 'src/app/hcp/varicella/page.tsx', metaKey: 'hcpVaricella', replaceAll: true },
  { file: 'src/app/hcp/yellow-fever/page.tsx', metaKey: 'hcpYellowFever', replaceAll: true },
  { file: 'src/app/hcp/meningitis/page.tsx', metaKey: 'hcpMeningitis', replaceAll: true },
];

const H2_RE = /<h2(\s+className="about-lang-title"[^>]*)>([\s\S]*?)<\/h2>/;

function extractStyle(attrs) {
  const start = attrs.indexOf('style={{');
  if (start === -1) return '';
  let depth = 0;
  let i = start + 'style='.length;
  for (; i < attrs.length; i++) {
    const ch = attrs[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        return attrs.slice(start, i + 1).trim();
      }
    }
  }
  return '';
}

function ensureImports(src) {
  if (src.includes("from '@/components/VaccineLangTitle'")) return src;
  const importBlock = `import VaccineLangTitle from '@/components/VaccineLangTitle';\nimport { ARTICLE_META } from '@/lib/article-meta';\n`;
  if (src.includes("'use client'")) {
    return src.replace(/('use client';\n\n)/, `$1${importBlock}`);
  }
  if (src.includes("'use client';\n")) {
    return src.replace(/('use client';\n)/, `$1\n${importBlock}`);
  }
  const firstImport = src.match(/^import .+;\n/m);
  if (firstImport) {
    const idx = src.indexOf(firstImport[0]) + firstImport[0].length;
    return src.slice(0, idx) + importBlock + src.slice(idx);
  }
  return importBlock + src;
}

function replaceOneH2(src, metaKey) {
  const m = src.match(H2_RE);
  if (!m) return { out: src, replaced: false };
  const attrs = m[1];
  const inner = m[2];
  const stylePart = extractStyle(attrs);
  const spread = `{...ARTICLE_META.${metaKey}}`;
  const replacement = stylePart
    ? `<VaccineLangTitle ${spread} ${stylePart}>${inner}</VaccineLangTitle>`
    : `<VaccineLangTitle ${spread}>${inner}</VaccineLangTitle>`;
  return { out: src.replace(H2_RE, replacement), replaced: true };
}

for (const { file, metaKey, replaceAll = false, maxTitles = 1 } of PAGES) {
  const full = path.join(ROOT, file);
  if (!fs.existsSync(full)) {
    console.warn('missing', file);
    continue;
  }
  let src = fs.readFileSync(full, 'utf8');
  src = ensureImports(src);
  let count = 0;
  const limit = replaceAll ? 999 : maxTitles;
  while (count < limit) {
    const { out, replaced } = replaceOneH2(src, metaKey);
    if (!replaced) break;
    src = out;
    count++;
  }
  if (count === 0) {
    console.log('no changes', file);
    continue;
  }
  fs.writeFileSync(full, src);
  console.log('updated', file, `(${count} titles)`);
}
