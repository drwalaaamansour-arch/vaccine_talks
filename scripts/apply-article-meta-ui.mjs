#!/usr/bin/env node
/** Add locale to meta components; wire h2 titles on content pages. */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');
const APP = path.join(ROOT, 'src/app');

const SKIP = /^src\/app\/(auth|api)\//;

/** path fragment -> ARTICLE_META key */
const PATH_KEY = [
  ['hcp-special-populations/pregnancy-breastfeeding', 'hcpPregnancy'],
  ['hcp-special-populations/breastfeeding', 'hcpBreastfeeding'],
  ['hcp-special-populations/preterm-infants/vaccine-specific-guidelines', 'hcpPretermVaccineGuidelines'],
  ['hcp-special-populations/preterm-infants', 'hcpPretermInfants'],
  ['hcp-special-populations/cochlear-implants', 'hcpCochlearImplants'],
  ['hcp-special-populations/anaesthesia-surgery', 'hcpAnaesthesiaSurgery'],
  ['hcp-special-populations/immunoglobulin-blood-products', 'hcpImmunoglobulinBloodProducts'],
  ['altered-immunocompetence/general-principles', 'hcpAlteredImmunocompetenceGeneral'],
  ['altered-immunocompetence/vaccination-of-contacts', 'hcpVaccinationOfContacts'],
  ['anatomic-or-functional-asplenia/pneumococcal', 'hcpAspleniaPneumococcal'],
  ['anatomic-or-functional-asplenia/meningococcal', 'hcpAspleniaMeningococcal'],
  ['anatomic-or-functional-asplenia/hib', 'hcpAspleniaHib'],
  ['anatomic-or-functional-asplenia', 'hcpAsplenia'],
  ['corticosteroids-and-immunosuppressive-drugs', 'hcpCorticosteroids'],
  ['hematopoietic-cell-transplants', 'hcpHematopoieticTransplants'],
  ['safety-and-effectiveness', 'hcpSafetyEffectiveness'],
  ['altered-immunocompetence', 'hcpAlteredImmunocompetenceHub'],
  ['hcp-special-populations', 'hcpSpecialPopulationsHub'],
  ['non-hcp/special-cases-vaccines/pregnancy-and-breastfeeding', 'nonHcpPregnancy'],
  ['non-hcp/special-cases-vaccines/post-cochlear-implant', 'nonHcpCochlear'],
  ['non-hcp/special-cases-vaccines/preterm-infants', 'nonHcpPreterm'],
  ['non-hcp/special-cases-vaccines/splenectomy', 'nonHcpSplenectomy'],
  ['non-hcp/special-cases-vaccines', 'nonHcpSpecialCasesHub'],
  ['non-hcp/preterm/vaccine-specific-guidelines', 'nonHcpPretermGuidelines'],
  ['non-hcp/common-questions', 'nonHcpCommonQuestions'],
  ['non-hcp', 'nonHcpHub'],
  ['herpes-zoster', 'herpesZoster'],
  ['hepatitis-a-b', 'hepatitisAB'],
  ['hepatitis-a', 'hepatitisA'],
  ['hepatitis-b', 'hepatitisB'],
  ['zero-dose', 'zeroDose'],
  ['at-birth', 'atBirth'],
  ['two-months', 'twoMonths'],
  ['four-months', 'fourMonths'],
  ['six-months', 'sixMonths'],
  ['nine-months', 'nineMonths'],
  ['one-year', 'oneYear'],
  ['second-year', 'secondYear'],
  ['anti-scorpion', 'antiScorpion'],
  ['anti-snake', 'antiSnake'],
  ['anti-viper', 'antiViper'],
  ['hb-immunoglobulin', 'hbImmunoglobulin'],
  ['hcp-vaccines-sera', 'hcpVaccinesSera'],
  ['hcp-vaccine-updates', 'hcpVaccineUpdates'],
  ['hcp-vaccine-release', 'hcpVaccineRelease'],
  ['hcp-vaccine-composition', 'hcpVaccineComposition'],
  ['hcp-vaccine-administration', 'hcpVaccineAdministration'],
  ['hcp-vaccination-basics', 'hcpVaccinationBasics'],
  ['hcp-types-of-vaccines', 'hcpTypesOfVaccines'],
  ['hcp-how-vaccines-work', 'hcpHowVaccinesWork'],
  ['hcp-herd-immunity', 'hcpHerdImmunity'],
  ['hcp-resources', 'hcpResources'],
  ['hcp-documents/preterm', 'hcpDocumentsPreterm'],
  ['hcp-documents', 'hcpDocuments'],
  ['hcp-faq', 'hcpFaq'],
  ['children-vaccines', 'childrenVaccines'],
  ['adult-vaccines', 'adultVaccines'],
  ['vaccinations', 'vaccinations'],
  ['whats-new', 'whatsNew'],
  ['important-info', 'importantInfo'],
  ['disclaimer', 'disclaimer'],
  ['administration-scheduling-contraindications', 'docAdministrationScheduling'],
  ['meningococcal-acwy', 'docMeningococcalAcwy'],
  ['meningococcal-b', 'docMeningococcalB'],
  ['contraindications-precautions', 'faqContraindications'],
  ['administering-vaccines', 'faqAdministeringVaccines'],
  ['hepa-hepb', 'faqHepaHepb'],
];

function metaKeyForRel(rel) {
  const inner = rel.replace(/^src\/app\//, '').replace(/\/page\.tsx$/, '');
  for (const [frag, key] of PATH_KEY) {
    if (inner === frag || inner.endsWith('/' + frag) || inner.includes(frag)) {
      if (inner === frag || inner.endsWith(frag)) return key;
    }
  }
  // sorted longest match
  const sorted = [...PATH_KEY].sort((a, b) => b[0].length - a[0].length);
  for (const [frag, key] of sorted) {
    if (inner === frag || inner.endsWith('/' + frag)) return key;
  }
  if (inner.startsWith('hcp/')) {
    const slug = inner.split('/')[1];
    if (slug === 'rabirs') return 'hcpRabies';
    return 'hcp' + slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^./, (c) => c.toUpperCase());
  }
  if (inner.startsWith('faq/')) {
    const slug = inner.split('/')[1];
    return 'faq' + slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^./, (c) => c.toUpperCase());
  }
  if (inner.startsWith('doc/')) {
    const slug = inner.split('/')[1];
    return 'doc' + slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^./, (c) => c.toUpperCase());
  }
  if (inner === '') return 'home';
  const slug = inner.split('/').pop();
  return slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function ensureImports(src) {
  let out = src;
  const needsVlt = out.includes('VaccineLangTitle') || out.includes('ArticlePageTitle');
  const needsMeta = out.includes('ARTICLE_META');
  const needsAmd = out.includes('ArticleMetaDate');
  if (!needsVlt && !needsAmd && !needsMeta) return out;
  if (needsMeta && !out.includes("from '@/lib/article-meta'")) {
    const imp = `import { ARTICLE_META } from '@/lib/article-meta';\n`;
    if (out.includes("'use client'")) {
      out = out.replace(/('use client';\n\n?)/, `$1${imp}`);
    } else {
      const m = out.match(/^import .+;\n/m);
      if (m) out = out.replace(m[0], m[0] + imp);
      else out = imp + out;
    }
  }
  if (needsVlt && !out.includes("VaccineLangTitle")) {
    /* noop */
  }
  if (out.includes('VaccineLangTitle') && !out.includes("from '@/components/VaccineLangTitle'")) {
    const imp = `import VaccineLangTitle from '@/components/VaccineLangTitle';\n`;
    if (out.includes("'use client'")) out = out.replace(/('use client';\n\n?)/, `$1${imp}`);
    else {
      const m = out.match(/^import .+;\n/m);
      if (m) out = out.replace(m[0], m[0] + imp);
    }
  }
  if (out.includes('ArticlePageTitle') && !out.includes("from '@/components/ArticlePageTitle'")) {
    const imp = `import ArticlePageTitle from '@/components/ArticlePageTitle';\n`;
    const m = out.match(/^import .+;\n/m);
    if (m) out = out.replace(m[0], m[0] + imp);
  }
  if (needsAmd && !out.includes("from '@/components/ArticleMetaDate'")) {
    const imp = `import ArticleMetaDate from '@/components/ArticleMetaDate';\n`;
    if (out.includes("'use client'")) out = out.replace(/('use client';\n\n?)/, `$1${imp}`);
    else {
      const m = out.match(/^import .+;\n/m);
      if (m) out = out.replace(m[0], m[0] + imp);
    }
  }
  return out;
}

function addLocales(src, rel) {
  const isHcp = rel.includes('/hcp/');
  let vltIndex = 0;
  return src.replace(/<VaccineLangTitle(\s*)(\{[^}]+\}[^>]*)>/g, (_, sp, rest) => {
    if (rest.includes('locale=')) return `<VaccineLangTitle${sp}${rest}>`;
    vltIndex++;
    const locale = isHcp ? 'en' : vltIndex === 1 ? 'ar' : 'en';
    return `<VaccineLangTitle${sp}${rest} locale="${locale}">`;
  }).replace(/<ArticlePageTitle(\s*)(\{[^}]+\}[^>]*)>/g, (_, sp, rest) => {
    if (rest.includes('locale=')) return `<ArticlePageTitle${sp}${rest}>`;
    return `<ArticlePageTitle${sp}${rest} locale="en">`;
  }).replace(/<ArticleMetaDate(\s*)(\{[^}]+\}[^/>]*)\/>/g, (_, sp, rest) => {
    if (rest.includes('locale=')) return `<ArticleMetaDate${sp}${rest} />`;
    return `<ArticleMetaDate${sp}${rest} locale="en" />`;
  }).replace(/<ArticleMetaDate(\s*)(\{[^}]+\}[^>]*) compact/g, (_, sp, rest) => {
    if (rest.includes('locale=')) return `<ArticleMetaDate${sp}${rest} compact`;
    return `<ArticleMetaDate${sp}${rest} locale="en" compact`;
  });
}

function fixSplenectomyLocales(src) {
  if (!src.includes('nonHcpSplenectomy')) return src;
  let n = 0;
  return src.replace(
    /<ArticleMetaDate\s+\{\.\.\.ARTICLE_META\.nonHcpSplenectomy\}([^/]*)\/>/g,
    (_, attrs) => {
      n++;
      const locale = n === 1 ? 'ar' : 'en';
      if (attrs.includes('locale=')) return _;
      return `<ArticleMetaDate {...ARTICLE_META.nonHcpSplenectomy}${attrs} locale="${locale}" />`;
    }
  );
}

function wireMainTitle(src, metaKey) {
  if (!metaKey || src.includes('ArticlePageTitle') || src.includes('VaccineLangTitle')) return src;
  const h2Re = /<h2(\s+className="about-lang-title"[^>]*)>([\s\S]*?)<\/h2>/;
  if (!h2Re.test(src)) return src;
  const isBilingual = (src.match(/about-lang arabic/g) || []).length > 0;
  if (isBilingual) return src; // handled by VaccineLangTitle script separately

  return src.replace(h2Re, (full, attrs, inner) => {
    const styleMatch = attrs.match(/\s+style=\{\{[\s\S]*?\}\}/);
    const stylePart = styleMatch ? ` ${styleMatch[0].trim()}` : '';
    return `<ArticlePageTitle {...ARTICLE_META.${metaKey}}${stylePart}>${inner}</ArticlePageTitle>`;
  });
}

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (ent.name === 'page.tsx') files.push(p);
  }
  return files;
}

for (const abs of walk(APP)) {
  const rel = path.relative(ROOT, abs).replace(/\\/g, '/');
  if (SKIP.test(rel)) continue;
  const metaKey = metaKeyForRel(rel);
  if (!metaKey) continue;

  let src = fs.readFileSync(abs, 'utf8');
  const orig = src;
  src = ensureImports(src);
  src = wireMainTitle(src, metaKey);
  src = addLocales(src, rel);
  src = fixSplenectomyLocales(src);

  // Fix splenectomy/pregnancy title rows - second ArticleMetaDate needs locale en
  if (rel.includes('splenectomy') || rel.includes('pregnancy-and-breastfeeding') || rel.includes('post-cochlear') || rel.includes('preterm-infants/page')) {
    let amd = 0;
    src = src.replace(/<ArticleMetaDate\s+\{\.\.\.ARTICLE_META\.\w+\}([^>]*)\/>/g, (m, attrs) => {
      amd++;
      if (attrs.includes('locale=')) return m;
      const locale = amd === 1 ? 'ar' : 'en';
      return m.replace(/\/>/, ` locale="${locale}" />`).replace(/ compact/, ` locale="${locale}" compact`);
    });
  }

  if (src !== orig) {
    fs.writeFileSync(abs, src);
    console.log('updated', rel, metaKey);
  }
}
