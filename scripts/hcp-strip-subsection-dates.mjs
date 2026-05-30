#!/usr/bin/env node
/** Keep Added date only on the first VaccineLangTitle per HCP vaccine page. */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');
const HCP_DIR = path.join(ROOT, 'src/app/hcp');

const VLT_RE =
  /<VaccineLangTitle(\s+\{\.\.\.ARTICLE_META\.\w+\}(?:\s+style=\{\{[\s\S]*?\}\})?)>([\s\S]*?)<\/VaccineLangTitle>/g;

function extractStyle(attrs) {
  const m = attrs.match(/\s+style=\{\{[\s\S]*?\}\}/);
  return m ? m[0].trim() : '';
}

for (const ent of fs.readdirSync(HCP_DIR, { withFileTypes: true })) {
  if (!ent.isDirectory()) continue;
  const file = path.join(HCP_DIR, ent.name, 'page.tsx');
  if (!fs.existsSync(file)) continue;
  let src = fs.readFileSync(file, 'utf8');
  if (!src.includes('VaccineLangTitle')) continue;

  let n = 0;
  src = src.replace(VLT_RE, (full, attrs, inner) => {
    n += 1;
    if (n === 1) return full;
    const stylePart = extractStyle(attrs);
    const className = 'about-lang-title';
    return stylePart
      ? `<h2 className="${className}" ${stylePart}>${inner}</h2>`
      : `<h2 className="${className}">${inner}</h2>`;
  });

  if (n > 1) {
    fs.writeFileSync(file, src);
    console.log('kept 1 date on', ent.name, `(${n - 1} subsections reverted)`);
  }
}
