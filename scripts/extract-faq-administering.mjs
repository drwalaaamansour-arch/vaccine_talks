#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = fs.readFileSync(
  path.join(root, 'src/app/faq/administering-vaccines/page.tsx'),
  'utf8',
);

function normalizeParagraph(html) {
  return html
    .replace(/\s+/g, ' ')
    .replace(/<strong>/g, '**')
    .replace(/<\/strong>/g, '**')
    .trim();
}

const items = [];
const blocks = src.split(/<h3[^>]*>/).slice(1);
for (const block of blocks) {
  const endTitle = block.indexOf('</h3>');
  if (endTitle < 0) continue;
  const question = block.slice(0, endTitle).replace(/\s+/g, ' ').trim();
  const rest = block.slice(endTitle + 5);
  const pRe = /<p className="about-lang-intro"[^>]*>([\s\S]*?)<\/p>/g;
  const paragraphs = [];
  let m;
  while ((m = pRe.exec(rest)) !== null) {
    const parts = m[1]
      .split(/<br\s*\/?>/i)
      .map(normalizeParagraph)
      .filter(Boolean);
    paragraphs.push(...parts);
  }
  if (question && paragraphs.length) items.push({ question, paragraphs });
}

const out = `export type FaqQaItem = {
  id: string;
  question: string;
  paragraphs: string[];
};

export const FAQ_ADMINISTERING_META = {
  tag: 'HCP · Clinical FAQ · Egypt',
  title: 'Administering Vaccines',
  subtitle: 'Technique & workflow',
  emoji: '✋',
  lead:
    'Routes, injection sites, simultaneous administration, preparation, and correcting administration errors — adapted from ACIP/CDC guidance for Egyptian practice.',
  backHref: '/hcp-faq',
  backLabel: '← Back to HCP FAQ',
} as const;

export const FAQ_ADMINISTERING_NOTE =
  'Answers are adapted from ACIP and CDC immunization best practices and tailored for use in Egypt.';

export const FAQ_ADMINISTERING_ITEMS: FaqQaItem[] = ${JSON.stringify(
  items.map((item, i) => ({
    id: `q-${i + 1}`,
    question: item.question,
    paragraphs: item.paragraphs,
  })),
  null,
  2,
)};
`;

fs.writeFileSync(path.join(root, 'src/data/faq-administering-vaccines.ts'), out);
console.log('Wrote', items.length, 'items');
