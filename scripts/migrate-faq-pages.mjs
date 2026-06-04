#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const faqAppDir = path.join(root, 'src/app/faq');
const outDir = path.join(root, 'src/data/faq-pages');

const SLUG_META = [
  ['administering-vaccines', 'faqAdministeringVaccines'],
  ['bcg', 'faqBcg'],
  ['contraindications-precautions', 'faqContraindications'],
  ['dt', 'faqDt'],
  ['dt-containing', 'faqDtContaining'],
  ['hepa-hepb', 'faqHepaHepb'],
  ['hepatitis-a', 'faqHepatitisA'],
  ['hepatitis-b', 'faqHepatitisB'],
  ['hib', 'faqHib'],
  ['hpv', 'faqHpv'],
  ['influenza', 'faqInfluenza'],
  ['meningococcal-acwy', 'faqMeningococcalAcwy'],
  ['meningococcal-b', 'faqMeningococcalB'],
  ['mmr', 'faqMmr'],
  ['pneumococcal', 'faqPneumococcal'],
  ['rabies', 'faqRabies'],
  ['rotavirus', 'faqRotavirus'],
  ['rsv', 'faqRsv'],
  ['scheduling', 'faqScheduling'],
  ['varicella', 'faqVaricella'],
  ['zoster', 'faqZoster'],
];

const EXTRA_TOPICS = {
  dt: {
    title: 'DT Containing Vaccines',
    subtitle: 'FAQ',
    emoji: '💉',
    excerpt: 'Diphtheria and tetanus containing vaccines — schedules, intervals, and product questions.',
  },
  bcg: {
    title: 'BCG',
    subtitle: 'FAQ',
    emoji: '🫁',
    excerpt: 'BCG vaccine — use in Egypt and clinical FAQs.',
  },
  'dt-containing': {
    title: 'DT Containing Vaccines',
    subtitle: 'FAQ',
    emoji: '💉',
    excerpt: 'Diphtheria and tetanus containing vaccines — expanded clinical FAQs.',
  },
};

function slugToExport(slug) {
  return (
    'FAQ_' +
    slug
      .replace(/-/g, '_')
      .toUpperCase() +
    '_PAGE'
  );
}

function parseHubTopics() {
  const hubSrc = fs.readFileSync(path.join(root, 'src/data/hcp-faq-hub.ts'), 'utf8');
  const topics = {};
  const itemRe =
    /\{\s*href:\s*'\/faq\/([^']+)',\s*title:\s*'([^']*)',\s*subtitle:\s*'([^']*)',\s*emoji:\s*'([^']*)',\s*excerpt:\s*'([^']*)',/g;
  let m;
  while ((m = itemRe.exec(hubSrc)) !== null) {
    topics[m[1]] = {
      title: m[2],
      subtitle: m[3],
      emoji: m[4],
      excerpt: m[5],
    };
  }
  return topics;
}

function htmlToPlain(html) {
  return html
    .replace(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
      const label = text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      return `[${label}](${href})`;
    })
    .replace(/<strong>/g, '**')
    .replace(/<\/strong>/g, '**')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractItems(pageSrc) {
  const items = [];
  const blocks = pageSrc.split(/<h3[^>]*>/).slice(1);
  for (const block of blocks) {
    const endTitle = block.indexOf('</h3>');
    if (endTitle < 0) continue;
    const question = htmlToPlain(block.slice(0, endTitle));
    const rest = block.slice(endTitle + 5);
    const pRe = /<p className="about-lang-intro"[^>]*>([\s\S]*?)<\/p>/g;
    const paragraphs = [];
    let m;
    while ((m = pRe.exec(rest)) !== null) {
      const parts = m[1]
        .split(/<br\s*\/?>/i)
        .map(htmlToPlain)
        .filter(Boolean);
      paragraphs.push(...parts);
    }
    if (question && paragraphs.length) items.push({ question, paragraphs });
  }
  return items;
}

function readLegacyPage(slug) {
  const file = path.join(faqAppDir, slug, 'page.tsx');
  if (slug === 'administering-vaccines') {
    const dataFile = path.join(root, 'src/data/faq-administering-vaccines.ts');
    if (fs.existsSync(dataFile)) {
      const src = fs.readFileSync(dataFile, 'utf8');
      const match = src.match(/export const FAQ_ADMINISTERING_ITEMS[\s\S]*?= (\[[\s\S]*\]);/);
      if (match) return { type: 'data', items: JSON.parse(match[1]) };
    }
  }
  try {
    const gitSrc = execSync(`git show HEAD:src/app/faq/${slug}/page.tsx`, {
      cwd: root,
      encoding: 'utf8',
    });
    return { type: 'git', src: gitSrc };
  } catch {
    if (fs.existsSync(file)) {
      return { type: 'disk', src: fs.readFileSync(file, 'utf8') };
    }
    return null;
  }
}

const hubTopics = parseHubTopics();
fs.mkdirSync(outDir, { recursive: true });

const indexExports = [];

for (const [slug, metaKey] of SLUG_META) {
  const hub = hubTopics[slug] || EXTRA_TOPICS[slug];
  if (!hub) {
    console.warn('Skip', slug, '- no hub metadata');
    continue;
  }

  const legacy = readLegacyPage(slug);
  let items = [];
  if (legacy?.type === 'data') {
    items = legacy.items;
  } else if (legacy?.src) {
    items = extractItems(legacy.src).map((item, i) => ({
      id: `q-${i + 1}`,
      question: item.question,
      paragraphs: item.paragraphs,
    }));
  }

  const exportName = slugToExport(slug);
  const lead =
    items.length === 0 && slug === 'dt-containing'
      ? 'Content coming soon. Check back for DT-containing vaccine FAQs aligned with Egyptian practice.'
      : hub.excerpt;

  const config = {
    metaKey,
    topic: {
      tag: 'HCP · Clinical FAQ · Egypt',
      title: hub.title,
      subtitle: hub.subtitle,
      emoji: hub.emoji,
      lead,
      backHref: '/hcp-faq',
      backLabel: '← Back to HCP FAQ',
    },
    note: 'FAQ_TOPIC_NOTE',
    items,
  };

  const fileBody = `import type { FaqPageConfig } from '@/data/faq-pages/types';
import { FAQ_TOPIC_NOTE } from '@/data/faq-pages/shared';

export const ${exportName}: FaqPageConfig = ${JSON.stringify(config, null, 2).replace(
    '"FAQ_TOPIC_NOTE"',
    'FAQ_TOPIC_NOTE',
  )};
`;

  fs.writeFileSync(path.join(outDir, `${slug}.ts`), fileBody);

  const pageBody = `import { createFaqTopicPage } from '@/components/faq/createFaqTopicPage';
import { ${exportName} } from '@/data/faq-pages/${slug}';

export default createFaqTopicPage(${exportName});
`;

  fs.writeFileSync(path.join(faqAppDir, slug, 'page.tsx'), pageBody);
  indexExports.push(`export { ${exportName} } from './${slug}';`);
  console.log(slug, items.length, 'items');
}

fs.writeFileSync(path.join(outDir, 'index.ts'), indexExports.join('\n') + '\n');
