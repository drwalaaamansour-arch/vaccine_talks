#!/usr/bin/env node
/**
 * Extracts HCP vaccine page content from legacy page.tsx files into data modules.
 * Run: node scripts/migrate-hcp-vaccine-pages.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const hcpDir = path.join(root, 'src/app/hcp');

const SLUG_META = {
  bcg: { metaKey: 'hcpBcg', emoji: '💉' },
  diphtheria: { metaKey: 'hcpDiphtheria', emoji: '🦠' },
  dt: { metaKey: 'hcpDt', emoji: '📋' },
  'hepatitis-a-b': { metaKey: 'hcpHepatitisAB', emoji: '🔵' },
  'hepatitis-b': { metaKey: 'hcpHepatitisB', emoji: '🟠' },
  hib: { metaKey: 'hcpHib', emoji: '👶' },
  hpv: { metaKey: 'hcpHpv', emoji: '💗' },
  influenza: { metaKey: 'hcpInfluenza', emoji: '🤧' },
  meningococcal: { metaKey: 'hcpMeningococcal', emoji: '🧫' },
  meningitis: { metaKey: 'hcpMeningitis', emoji: '🧠' },
  mmr: { metaKey: 'hcpMmr', emoji: '📊' },
  pneumococcal: { metaKey: 'hcpPneumococcal', emoji: '🦠' },
  polio: { metaKey: 'hcpPolio', emoji: '🦵' },
  rabirs: { metaKey: 'hcpRabies', emoji: '🐕' },
  rota: { metaKey: 'hcpRota', emoji: '🌀' },
  rsv: { metaKey: 'hcpRsv', emoji: '🫁' },
  shingles: { metaKey: 'hcpShingles', emoji: '⚡' },
  tetanus: { metaKey: 'hcpTetanus', emoji: '🔧' },
  varicella: { metaKey: 'hcpVaricella', emoji: '🔴' },
  'yellow-fever': { metaKey: 'hcpYellowFever', emoji: '🟨' },
};

function slugToExport(slug) {
  return slug
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

function cleanText(html) {
  return html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<strong>/gi, '')
    .replace(/<\/strong>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseListItems(ulHtml) {
  const items = [];
  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/g;
  let m;
  while ((m = liRegex.exec(ulHtml)) !== null) {
    const t = cleanText(m[1]);
    if (t) items.push(t);
  }
  return items;
}

function parseBlocksFromChunk(chunk) {
  const blocks = [];
  const elements = [];
  const pRegex = /<p className="about-lang-intro"[^>]*>([\s\S]*?)<\/p>/g;
  const ulRegex = /<ul className="about-lang-intro"[^>]*>([\s\S]*?)<\/ul>/g;
  let m;
  while ((m = pRegex.exec(chunk)) !== null) {
    elements.push({ index: m.index, type: 'p', content: m[1] });
  }
  while ((m = ulRegex.exec(chunk)) !== null) {
    elements.push({ index: m.index, type: 'ul', content: m[0] });
  }
  elements.sort((a, b) => a.index - b.index);
  for (const el of elements) {
    if (el.type === 'p') {
      const text = cleanText(el.content);
      if (!text || text.startsWith('References:') || text.startsWith('Sources:')) continue;
      blocks.push({ type: 'p', text });
    } else {
      const items = parseListItems(el.content);
      if (items.length) blocks.push({ type: 'ul', items });
    }
  }
  return blocks;
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 56);
}

function parseSections(inner) {
  const sections = [];
  const h3Regex = /<h3[^>]*>([\s\S]*?)<\/h3>/g;
  const matches = [...inner.matchAll(h3Regex)];
  const firstH3 = matches[0]?.index ?? inner.length;
  const introChunk = inner.slice(0, firstH3);
  const introBlocks = parseBlocksFromChunk(introChunk);
  if (introBlocks.length) {
    sections.push({ id: 'overview', title: 'Overview', icon: '📋', blocks: introBlocks });
  }

  for (let i = 0; i < matches.length; i++) {
    const title = cleanText(matches[i][1]);
    const start = matches[i].index + matches[i][0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index : inner.length;
    const chunk = inner.slice(start, end);
    const blocks = parseBlocksFromChunk(chunk);
    if (!title) continue;
    sections.push({
      id: slugify(title),
      title,
      icon: title.length > 40 ? '🇪🇬' : '📋',
      blocks: blocks.length ? blocks : [{ type: 'p', text: '—' }],
    });
  }
  return sections;
}

function parseReferences(inner) {
  const refs = [];
  const refPara = inner.match(/References:[\s\S]*?<\/p>/i) || inner.match(/Sources:[\s\S]*?<\/p>/i);
  if (!refPara) return refs;
  const linkRegex = /<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  let m;
  while ((m = linkRegex.exec(refPara[0])) !== null) {
    refs.push({ href: m[1], label: cleanText(m[2]) });
  }
  if (refs.length === 0 && refPara[0].includes('https://')) {
    const urls = refPara[0].match(/https:\/\/[^\s,<"]+/g) || [];
    urls.forEach((url) => refs.push({ href: url, label: url }));
  }
  return refs;
}

function parsePdfs(source) {
  const pdfs = [];
  const seen = new Set();
  const re = /<h2 className="about-lang-title"[^>]*>([\s\S]*?)<\/h2>[\s\S]*?iframe[\s\S]*?src="([^"]+)"/g;
  let m;
  while ((m = re.exec(source)) !== null) {
    if (seen.has(m[2])) continue;
    seen.add(m[2]);
    pdfs.push({ productName: cleanText(m[1]), src: m[2] });
  }
  if (pdfs.length === 0) {
    const re2 = /iframe[\s\S]*?src="([^"]+\.pdf[^"]*)"[^>]*title="([^"]*)"/gi;
    while ((m = re2.exec(source)) !== null) {
      if (seen.has(m[1])) continue;
      seen.add(m[1]);
      pdfs.push({ productName: m[2].replace(/ PDF$/i, '').trim(), src: m[1] });
    }
  }
  return pdfs;
}

function stripMainContent(source) {
  let s = source;
  const footerIdx = s.indexOf('{/* Footer */}');
  if (footerIdx !== -1) s = s.slice(0, footerIdx);
  const firstPdfSection = s.indexOf('{/* Havrix') !== -1 ? s.indexOf('{/* Havrix') : s.indexOf('{/* Vaccine');
  if (firstPdfSection === -1) {
    const alt = s.indexOf('{/* PDF');
    if (alt !== -1) s = s.slice(0, alt);
  } else if (s.indexOf('{/* PDF') !== -1 && s.indexOf('{/* PDF') < firstPdfSection) {
    s = s.slice(0, s.indexOf('{/* PDF'));
  } else {
    const pdfMarkers = ['{/* Havrix', '{/* Avaxim', '{/* Healive', '{/* Vaccine Section */}', '{/* PDF'];
    let cut = s.length;
    for (const marker of pdfMarkers) {
      const idx = s.indexOf(marker);
      if (idx !== -1 && idx < cut) cut = idx;
    }
    if (cut < s.length) s = s.slice(0, cut);
  }
  return s;
}

function parseTitle(source) {
  const m = source.match(/VaccineLangTitle[\s\S]*?locale="en">\s*([\s\S]*?)\s*<\/VaccineLangTitle>/);
  return m ? m[1].trim() : 'Vaccine';
}

function parseImage(inner) {
  const m = inner.match(/<img[\s\S]*?src="([^"]+\.(?:png|jpeg|jpg|webp)[^"]*)"/i);
  return m ? m[1] : undefined;
}

function parseLinks(inner) {
  const faq = inner.match(/href="(\/faq\/[^"]+)"/);
  const doc = inner.match(/href="(\/doc\/[^"]+)"/);
  return { faqHref: faq?.[1], docHref: doc?.[1] };
}

function processPage(slug) {
  const filePath = path.join(hcpDir, slug, 'page.tsx');
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, 'utf8');
  if (source.includes('HcpHepatitisAArticle') || source.includes('HcpVaccineProductPage')) {
    return null;
  }

  const meta = SLUG_META[slug];
  if (!meta) return null;

  const mainSource = stripMainContent(source);
  const innerStart = mainSource.indexOf('<div className="about-lang"');
  const inner = mainSource.slice(innerStart);
  const title = parseTitle(source);
  const imageSrc = parseImage(inner);
  const { faqHref, docHref } = parseLinks(inner);
  const pdfs = parsePdfs(source);
  const references = parseReferences(inner);
  let sections = parseSections(inner);
  if (sections.length === 0 && pdfs.length) {
    sections = [
      {
        id: 'overview',
        title: 'Overview',
        icon: '📋',
        blocks: [{ type: 'p', text: `Product information for ${title} in Egypt.` }],
      },
    ];
  }

  const leadBlock = sections[0]?.blocks?.find((b) => b.type === 'p');
  const lead = leadBlock?.text?.slice(0, 220) ?? `HCP guide for ${title} — vaccines and sera in Egypt.`;

  return {
    slug,
    metaKey: meta.metaKey,
    emoji: meta.emoji,
    title,
    lead,
    imageSrc,
    faqHref,
    docHref,
    pdfs,
    references,
    sections,
  };
}

const outDir = path.join(root, 'src/data/hcp-vaccine-pages');
fs.mkdirSync(outDir, { recursive: true });

const slugs = fs.readdirSync(hcpDir).filter((d) => fs.statSync(path.join(hcpDir, d)).isDirectory());

const exports = [];

for (const slug of slugs.sort()) {
  const data = processPage(slug);
  if (!data) continue;
  const exportName = `${slugToExport(slug)}Page`;
  const file = path.join(outDir, `${slug}.ts`);
  const payload = {
    metaKey: data.metaKey,
    title: data.title,
    lead: data.lead,
    emoji: data.emoji,
    imageSrc: data.imageSrc,
    sections: data.sections,
    faqHref: data.faqHref,
    docHref: data.docHref,
    references: data.references,
    pdfs: data.pdfs,
  };
  fs.writeFileSync(
    file,
    `import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';

export const ${exportName}: HcpVaccineProductPageProps = ${JSON.stringify(payload, null, 2)};
`,
  );
  exports.push({ slug, exportName });
  console.log('Wrote', slug, `(${data.sections.length} sections, ${data.pdfs.length} PDFs)`);
}

fs.writeFileSync(
  path.join(outDir, 'index.ts'),
  `/* Auto-generated by scripts/migrate-hcp-vaccine-pages.mjs */\n${exports.map(({ slug, exportName }) => `export { ${exportName} } from './${slug}';`).join('\n')}\n\nexport const HCP_VACCINE_PAGE_SLUGS = ${JSON.stringify(exports.map((e) => e.slug))} as const;\n`,
);
console.log('Done', exports.length, 'pages');
