#!/usr/bin/env node
/** Regenerate added + lastUpdated in src/lib/article-meta.ts from git history. */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = path.resolve(import.meta.dirname, '..');
const META_PATH = path.join(ROOT, 'src/lib/article-meta.ts');

/** Explicit keys (stable names used in page imports). */
const ROUTES = {
  hcpPregnancy: 'src/app/hcp-special-populations/pregnancy-breastfeeding/page.tsx',
  hcpBreastfeeding: 'src/app/hcp-special-populations/breastfeeding/page.tsx',
  hcpPretermInfants: 'src/app/hcp-special-populations/preterm-infants/page.tsx',
  hcpPretermVaccineGuidelines:
    'src/app/hcp-special-populations/preterm-infants/vaccine-specific-guidelines/page.tsx',
  hcpCochlearImplants: 'src/app/hcp-special-populations/cochlear-implants/page.tsx',
  hcpAnaesthesiaSurgery: 'src/app/hcp-special-populations/anaesthesia-surgery/page.tsx',
  hcpImmunoglobulinBloodProducts:
    'src/app/hcp-special-populations/immunoglobulin-blood-products/page.tsx',
  hcpAlteredImmunocompetenceGeneral:
    'src/app/hcp-special-populations/altered-immunocompetence/general-principles/page.tsx',
  hcpVaccinationOfContacts:
    'src/app/hcp-special-populations/altered-immunocompetence/vaccination-of-contacts/page.tsx',
  hcpAsplenia:
    'src/app/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia/page.tsx',
  hcpAspleniaMeningococcal:
    'src/app/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia/meningococcal/page.tsx',
  hcpAspleniaHib:
    'src/app/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia/hib/page.tsx',
  hcpAspleniaPneumococcal:
    'src/app/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia/pneumococcal/page.tsx',
  hcpCorticosteroids:
    'src/app/hcp-special-populations/altered-immunocompetence/corticosteroids-and-immunosuppressive-drugs/page.tsx',
  hcpHematopoieticTransplants:
    'src/app/hcp-special-populations/haematopoietic-stem-cell-transplant-recipients/page.tsx',
  hcpPediatricOncologyReimmunizationEgypt:
    'src/app/hcp-special-populations/expert-consensus-pediatric-oncology-re-immunization-egypt/page.tsx',
  hcpVaccinationInPatientsWithCancer:
    'src/app/hcp-special-populations/vaccination-in-patients-with-cancer/page.tsx',
  hcpSafetyEffectiveness:
    'src/app/hcp-special-populations/altered-immunocompetence/safety-and-effectiveness/page.tsx',
  hcpAlteredImmunocompetenceHub:
    'src/app/hcp-special-populations/altered-immunocompetence/page.tsx',
  hcpSpecialPopulationsHub: 'src/app/hcp-special-populations/page.tsx',
  hcpOccupationalRisk: 'src/app/hcp-special-populations/occupational-risk/page.tsx',
  hcpInternationalTravellers: 'src/app/hcp-special-populations/international-travellers/page.tsx',
  nonHcpPregnancy: 'src/app/non-hcp/special-cases-vaccines/pregnancy-and-breastfeeding/page.tsx',
  nonHcpCochlear: 'src/app/non-hcp/special-cases-vaccines/post-cochlear-implant/page.tsx',
  nonHcpPreterm: 'src/app/non-hcp/special-cases-vaccines/preterm-infants/page.tsx',
  nonHcpSplenectomy: 'src/app/non-hcp/special-cases-vaccines/splenectomy/page.tsx',
  nonHcpChemotherapyDuringAfter:
    'src/app/non-hcp/special-cases-vaccines/during-and-after-chemotherapy/page.tsx',
  nonHcpSpecialCasesHub: 'src/app/non-hcp/special-cases-vaccines/page.tsx',
  nonHcpPretermGuidelines: 'src/app/non-hcp/preterm/vaccine-specific-guidelines/page.tsx',
  nonHcpHub: 'src/app/non-hcp/page.tsx',
  nonHcpCommonQuestions: 'src/app/non-hcp/common-questions/page.tsx',
  influenza: 'src/app/influenza/page.tsx',
  pcv: 'src/app/pcv/page.tsx',
  ppsv: 'src/app/ppsv/page.tsx',
  mmr: 'src/app/mmr/page.tsx',
  bcg: 'src/app/bcg/page.tsx',
  hib: 'src/app/hib/page.tsx',
  hpv: 'src/app/hpv/page.tsx',
  rabies: 'src/app/rabies/page.tsx',
  meningitis: 'src/app/meningitis/page.tsx',
  herpesZoster: 'src/app/herpes-zoster/page.tsx',
  hepatitisA: 'src/app/hepatitis-a/page.tsx',
  hepatitisB: 'src/app/hepatitis-b/page.tsx',
  hepatitisAB: 'src/app/hepatitis-a-b/page.tsx',
  rotavirus: 'src/app/rotavirus/page.tsx',
  chickenpox: 'src/app/chickenpox/page.tsx',
  polio: 'src/app/polio/page.tsx',
  tetanus: 'src/app/tetanus/page.tsx',
  pertussis: 'src/app/pertussis/page.tsx',
  diphtheria: 'src/app/diphtheria/page.tsx',
  rsv: 'src/app/rsv/page.tsx',
  tuberculosis: 'src/app/tuberculosis/page.tsx',
  zeroDose: 'src/app/zero-dose/page.tsx',
  atBirth: 'src/app/at-birth/page.tsx',
  twoMonths: 'src/app/two-months/page.tsx',
  fourMonths: 'src/app/four-months/page.tsx',
  sixMonths: 'src/app/six-months/page.tsx',
  nineMonths: 'src/app/nine-months/page.tsx',
  oneYear: 'src/app/one-year/page.tsx',
  secondYear: 'src/app/second-year/page.tsx',
  antiScorpion: 'src/app/anti-scorpion/page.tsx',
  antiSnake: 'src/app/anti-snake/page.tsx',
  antiViper: 'src/app/anti-viper/page.tsx',
  hbImmunoglobulin: 'src/app/hb-immunoglobulin/page.tsx',
  hcpBcg: 'src/app/hcp/bcg/page.tsx',
  hcpDiphtheria: 'src/app/hcp/diphtheria/page.tsx',
  hcpDt: 'src/app/hcp/dt/page.tsx',
  hcpInfluenza: 'src/app/hcp/influenza/page.tsx',
  hcpHib: 'src/app/hcp/hib/page.tsx',
  hcpHepatitisA: 'src/app/hcp/hepatitis-a/page.tsx',
  hcpHepatitisB: 'src/app/hcp/hepatitis-b/page.tsx',
  hcpHepatitisAB: 'src/app/hcp/hepatitis-a-b/page.tsx',
  hcpHpv: 'src/app/hcp/hpv/page.tsx',
  hcpMeningococcal: 'src/app/hcp/meningococcal/page.tsx',
  hcpMmr: 'src/app/hcp/mmr/page.tsx',
  hcpPneumococcal: 'src/app/hcp/pneumococcal/page.tsx',
  hcpPolio: 'src/app/hcp/polio/page.tsx',
  hcpRabies: 'src/app/hcp/rabirs/page.tsx',
  hcpRota: 'src/app/hcp/rota/page.tsx',
  hcpRsv: 'src/app/hcp/rsv/page.tsx',
  hcpShingles: 'src/app/hcp/shingles/page.tsx',
  hcpTetanus: 'src/app/hcp/tetanus/page.tsx',
  hcpVaricella: 'src/app/hcp/varicella/page.tsx',
  hcpYellowFever: 'src/app/hcp/yellow-fever/page.tsx',
  hcpMeningitis: 'src/app/hcp/meningitis/page.tsx',
  vaccinations: 'src/app/vaccinations/page.tsx',
  childrenVaccines: 'src/app/children-vaccines/page.tsx',
  adultVaccines: 'src/app/adult-vaccines/page.tsx',
  hcpVaccinesSera: 'src/app/hcp-vaccines-sera/page.tsx',
  hcpVaccineUpdates: 'src/app/hcp-vaccine-updates/page.tsx',
  hcpVaccineRelease: 'src/app/hcp-vaccine-release/page.tsx',
  hcpVaccineComposition: 'src/app/hcp-vaccine-composition/page.tsx',
  hcpVaccineAdministration: 'src/app/hcp-vaccine-administration/page.tsx',
  hcpVaccinationBasics: 'src/app/hcp-vaccination-basics/page.tsx',
  hcpTypesOfVaccines: 'src/app/hcp-types-of-vaccines/page.tsx',
  hcpResources: 'src/app/hcp-resources/page.tsx',
  hcpHowVaccinesWork: 'src/app/hcp-how-vaccines-work/page.tsx',
  hcpHerdImmunity: 'src/app/hcp-herd-immunity/page.tsx',
  hcpFaq: 'src/app/hcp-faq/page.tsx',
  hcpDocuments: 'src/app/hcp-documents/page.tsx',
  hcpDocumentsPreterm: 'src/app/hcp-documents/preterm/page.tsx',
  whatsNew: 'src/app/whats-new/page.tsx',
  importantInfo: 'src/app/important-info/page.tsx',
  about: 'src/app/about/page.tsx',
  disclaimer: 'src/app/disclaimer/page.tsx',
  copy: 'src/app/copy/page.tsx',
  home: 'src/app/page.tsx',
  faqHub: 'src/app/faq/page.tsx',
  faqBcg: 'src/app/faq/bcg/page.tsx',
  faqDt: 'src/app/faq/dt/page.tsx',
  faqDtContaining: 'src/app/faq/dt-containing/page.tsx',
  faqInfluenza: 'src/app/faq/influenza/page.tsx',
  faqHib: 'src/app/faq/hib/page.tsx',
  faqHpv: 'src/app/faq/hpv/page.tsx',
  faqMmr: 'src/app/faq/mmr/page.tsx',
  faqRabies: 'src/app/faq/rabies/page.tsx',
  faqRsv: 'src/app/faq/rsv/page.tsx',
  faqRotavirus: 'src/app/faq/rotavirus/page.tsx',
  faqPneumococcal: 'src/app/faq/pneumococcal/page.tsx',
  faqHepatitisA: 'src/app/faq/hepatitis-a/page.tsx',
  faqHepatitisB: 'src/app/faq/hepatitis-b/page.tsx',
  faqHepaHepb: 'src/app/faq/hepa-hepb/page.tsx',
  faqVaricella: 'src/app/faq/varicella/page.tsx',
  faqZoster: 'src/app/faq/zoster/page.tsx',
  faqMeningococcalB: 'src/app/faq/meningococcal-b/page.tsx',
  faqMeningococcalAcwy: 'src/app/faq/meningococcal-acwy/page.tsx',
  faqScheduling: 'src/app/faq/scheduling/page.tsx',
  faqAdministeringVaccines: 'src/app/faq/administering-vaccines/page.tsx',
  faqContraindications: 'src/app/faq/contraindications-precautions/page.tsx',
  docPneumococcal: 'src/app/doc/pneumococcal/page.tsx',
  docVaricella: 'src/app/doc/varicella/page.tsx',
  docStorage: 'src/app/doc/storage/page.tsx',
  docShingles: 'src/app/doc/shingles/page.tsx',
  docRsv: 'src/app/doc/rsv/page.tsx',
  docRotavirus: 'src/app/doc/rotavirus/page.tsx',
  docRabies: 'src/app/doc/rabies/page.tsx',
  docPretermInfants: 'src/app/doc/preterm-infants/page.tsx',
  docMmr: 'src/app/doc/mmr/page.tsx',
  docMeningococcalB: 'src/app/doc/meningococcal-b/page.tsx',
  docMeningococcalAcwy: 'src/app/doc/meningococcal-acwy/page.tsx',
  docInfluenza: 'src/app/doc/influenza/page.tsx',
  docHpv: 'src/app/doc/hpv/page.tsx',
  docHepatitisB: 'src/app/doc/hepatitis-b/page.tsx',
  docHepatitisA: 'src/app/doc/hepatitis-a/page.tsx',
  docAdministrationScheduling:
    'src/app/doc/administration-scheduling-contraindications/page.tsx',
};

/** When git "first commit" is a stub/hub but real content landed later, set added/lastUpdated here. */
const MANUAL = {
  hcpBreastfeeding: { added: 'MAY 22, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpPregnancy: { added: 'MAY 15, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpPretermInfants: { added: 'JANUARY 31, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpPretermVaccineGuidelines: { added: 'FEBRUARY 23, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpCochlearImplants: { added: 'FEBRUARY 13, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpAnaesthesiaSurgery: { added: 'JANUARY 31, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpImmunoglobulinBloodProducts: { added: 'JANUARY 31, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpAlteredImmunocompetenceGeneral: { added: 'MAY 07, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpVaccinationOfContacts: { added: 'MAY 07, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpAsplenia: { added: 'MAY 07, 2026', lastUpdated: 'AUGUST 03, 2026' },
  hcpAspleniaMeningococcal: { added: 'MAY 07, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpAspleniaHib: { added: 'MAY 07, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpAspleniaPneumococcal: { added: 'MAY 07, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpCorticosteroids: { added: 'MAY 07, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpSafetyEffectiveness: { added: 'MAY 07, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpHematopoieticTransplants: { added: 'JUNE 01, 2026', lastUpdated: 'AUGUST 03, 2026' },
  hcpAlteredImmunocompetenceHub: { added: 'JANUARY 31, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpSpecialPopulationsHub: { added: 'NOVEMBER 29, 2025', lastUpdated: 'JUNE 04, 2026' },
  hcpOccupationalRisk: { added: 'JANUARY 31, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpInternationalTravellers: { added: 'JANUARY 31, 2026', lastUpdated: 'JUNE 04, 2026' },
  hcpPediatricOncologyReimmunizationEgypt: { added: 'JUNE 01, 2026', lastUpdated: 'JUNE 05, 2026' },
  hcpVaccinationInPatientsWithCancer: { added: 'JUNE 03, 2026', lastUpdated: 'AUGUST 03, 2026' },
};

/** Extra paths for lastUpdated (guide article components). */
const ARTICLE_SOURCES = {
  hcpSpecialPopulationsHub: ['src/components/hcp-guide/HcpSpecialPopulationsHub.tsx'],
  hcpAlteredImmunocompetenceHub: ['src/components/hcp-guide/HcpAlteredImmunocompetenceHub.tsx'],
  hcpAlteredImmunocompetenceGeneral: [
    'src/components/hcp-guide/articles/GeneralPrinciplesArticle.tsx',
  ],
  hcpVaccinationOfContacts: [
    'src/components/hcp-guide/articles/VaccinationOfContactsArticle.tsx',
  ],
  hcpAsplenia: ['src/components/hcp-guide/articles/AnatomicOrFunctionalAspleniaArticle.tsx'],
  hcpAspleniaHib: ['src/components/hcp-guide/articles/AspleniaHibArticle.tsx'],
  hcpAspleniaMeningococcal: ['src/components/hcp-guide/articles/AspleniaMeningococcalArticle.tsx'],
  hcpAspleniaPneumococcal: ['src/components/hcp-guide/articles/AspleniaPneumococcalArticle.tsx'],
  hcpCorticosteroids: ['src/components/hcp-guide/HcpGuideComingSoon.tsx'],
  hcpSafetyEffectiveness: ['src/components/hcp-guide/HcpGuideComingSoon.tsx'],
  hcpHematopoieticTransplants: [
    'src/components/hcp-guide/articles/HaematopoieticStemCellTransplantArticle.tsx',
  ],
  hcpPregnancy: ['src/components/hcp-guide/articles/PregnancyArticle.tsx'],
  hcpBreastfeeding: ['src/components/hcp-guide/articles/BreastfeedingArticle.tsx'],
  hcpPretermInfants: ['src/components/hcp-guide/articles/PretermInfantsArticle.tsx'],
  hcpPretermVaccineGuidelines: [
    'src/components/hcp-guide/articles/PretermVaccineSpecificGuidelinesArticle.tsx',
  ],
  hcpAnaesthesiaSurgery: ['src/components/hcp-guide/articles/AnaesthesiaSurgeryArticle.tsx'],
  hcpImmunoglobulinBloodProducts: [
    'src/components/hcp-guide/articles/ImmunoglobulinBloodProductsArticle.tsx',
  ],
  hcpCochlearImplants: ['src/components/hcp-guide/articles/CochlearImplantsArticle.tsx'],
  hcpOccupationalRisk: ['src/app/hcp-special-populations/occupational-risk/page.tsx'],
  hcpInternationalTravellers: [
    'src/app/hcp-special-populations/international-travellers/page.tsx',
  ],
};

const MONTH_ORDER = {
  JANUARY: 1,
  FEBRUARY: 2,
  MARCH: 3,
  APRIL: 4,
  MAY: 5,
  JUNE: 6,
  JULY: 7,
  AUGUST: 8,
  SEPTEMBER: 9,
  OCTOBER: 10,
  NOVEMBER: 11,
  DECEMBER: 12,
};

function parseMetaDate(s) {
  const m = s.match(/^([A-Z]+) (\d{1,2}), (\d{4})$/);
  if (!m) return 0;
  return (
    Number(m[3]) * 10000 +
    (MONTH_ORDER[m[1]] ?? 0) * 100 +
    Number(m[2])
  );
}

function latestDate(...dates) {
  return dates.filter(Boolean).sort((a, b) => parseMetaDate(b) - parseMetaDate(a))[0] ?? null;
}

function gitDate(relPath, reverse) {
  if (!fs.existsSync(path.join(ROOT, relPath))) return null;
  const flag = reverse ? '--reverse' : '';
  try {
    const cmd = reverse
      ? `git log --follow ${flag} --format='%ad' --date=format:'%B %d, %Y' -- ${JSON.stringify(relPath)} | head -1`
      : `git log --follow --format='%ad' --date=format:'%B %d, %Y' -1 -- ${JSON.stringify(relPath)}`;
    const out = execSync(cmd, { encoding: 'utf8', shell: '/bin/bash', cwd: ROOT }).trim();
    return out ? out.toUpperCase() : null;
  } catch {
    return null;
  }
}

const sections = {
  'HCP special populations': [
    'hcpPregnancy',
    'hcpBreastfeeding',
    'hcpPretermInfants',
    'hcpPretermVaccineGuidelines',
    'hcpCochlearImplants',
    'hcpAnaesthesiaSurgery',
    'hcpImmunoglobulinBloodProducts',
    'hcpAlteredImmunocompetenceGeneral',
    'hcpVaccinationOfContacts',
    'hcpAsplenia',
    'hcpAspleniaMeningococcal',
    'hcpAspleniaHib',
    'hcpAspleniaPneumococcal',
    'hcpCorticosteroids',
    'hcpHematopoieticTransplants',
    'hcpVaccinationInPatientsWithCancer',
    'hcpPediatricOncologyReimmunizationEgypt',
    'hcpSafetyEffectiveness',
    'hcpAlteredImmunocompetenceHub',
    'hcpSpecialPopulationsHub',
    'hcpOccupationalRisk',
    'hcpInternationalTravellers',
  ],
  'Non-HCP special cases': [
    'nonHcpPregnancy',
    'nonHcpCochlear',
    'nonHcpPreterm',
    'nonHcpSplenectomy',
    'nonHcpChemotherapyDuringAfter',
    'nonHcpSpecialCasesHub',
    'nonHcpPretermGuidelines',
    'nonHcpHub',
    'nonHcpCommonQuestions',
  ],
  'Public vaccines & schedules': [
    'influenza',
    'pcv',
    'ppsv',
    'mmr',
    'bcg',
    'hib',
    'hpv',
    'rabies',
    'meningitis',
    'herpesZoster',
    'hepatitisA',
    'hepatitisB',
    'hepatitisAB',
    'rotavirus',
    'chickenpox',
    'polio',
    'tetanus',
    'pertussis',
    'diphtheria',
    'rsv',
    'tuberculosis',
    'zeroDose',
    'atBirth',
    'twoMonths',
    'fourMonths',
    'sixMonths',
    'nineMonths',
    'oneYear',
    'secondYear',
  ],
  'Sera & immunoglobulin': ['antiScorpion', 'antiSnake', 'antiViper', 'hbImmunoglobulin'],
  'HCP vaccines & sera': [
    'hcpBcg',
    'hcpDiphtheria',
    'hcpDt',
    'hcpInfluenza',
    'hcpHib',
    'hcpHepatitisA',
    'hcpHepatitisB',
    'hcpHepatitisAB',
    'hcpHpv',
    'hcpMeningococcal',
    'hcpMmr',
    'hcpPneumococcal',
    'hcpPolio',
    'hcpRabies',
    'hcpRota',
    'hcpRsv',
    'hcpShingles',
    'hcpTetanus',
    'hcpVaricella',
    'hcpYellowFever',
    'hcpMeningitis',
  ],
  'Hubs & HCP resources': [
    'vaccinations',
    'childrenVaccines',
    'adultVaccines',
    'hcpVaccinesSera',
    'hcpVaccineUpdates',
    'hcpVaccineRelease',
    'hcpVaccineComposition',
    'hcpVaccineAdministration',
    'hcpVaccinationBasics',
    'hcpTypesOfVaccines',
    'hcpResources',
    'hcpHowVaccinesWork',
    'hcpHerdImmunity',
    'hcpFaq',
    'hcpDocuments',
    'hcpDocumentsPreterm',
    'whatsNew',
    'importantInfo',
    'about',
    'disclaimer',
    'copy',
    'home',
  ],
  FAQ: [
    'faqHub',
    'faqBcg',
    'faqDt',
    'faqDtContaining',
    'faqInfluenza',
    'faqHib',
    'faqHpv',
    'faqMmr',
    'faqRabies',
    'faqRsv',
    'faqRotavirus',
    'faqPneumococcal',
    'faqHepatitisA',
    'faqHepatitisB',
    'faqHepaHepb',
    'faqVaricella',
    'faqZoster',
    'faqMeningococcalB',
    'faqMeningococcalAcwy',
    'faqScheduling',
    'faqAdministeringVaccines',
    'faqContraindications',
  ],
  'Document library': [
    'docPneumococcal',
    'docVaricella',
    'docStorage',
    'docShingles',
    'docRsv',
    'docRotavirus',
    'docRabies',
    'docPretermInfants',
    'docMmr',
    'docMeningococcalB',
    'docMeningococcalAcwy',
    'docInfluenza',
    'docHpv',
    'docHepatitisB',
    'docHepatitisA',
    'docAdministrationScheduling',
  ],
};

const lines = [];
for (const [section, keys] of Object.entries(sections)) {
  lines.push(`  // ${section}`);
  for (const key of keys) {
    const rel = ROUTES[key];
    if (!rel) {
      console.warn('missing route', key);
      continue;
    }
    const manual = MANUAL[key];
    const added = manual?.added ?? gitDate(rel, true);
    const routeUpdated = gitDate(rel, false);
    const articleUpdated = (ARTICLE_SOURCES[key] ?? [])
      .map((p) => gitDate(p, false))
      .filter(Boolean);
    const lastUpdated =
      manual?.lastUpdated ?? latestDate(routeUpdated, ...articleUpdated);
    if (!added || !lastUpdated) {
      console.warn('skip', key, rel);
      continue;
    }
    lines.push(`  ${key}: { added: '${added}', lastUpdated: '${lastUpdated}' },`);
  }
  lines.push('');
}

const body = `/** Site publication dates (git: first commit + latest commit per route). */
export type ArticleMeta = {
  /** First time content was added to this page */
  added: string;
  /** Last time this page file was updated in the repo */
  lastUpdated: string;
};

/** Regenerate: node scripts/sync-article-meta-dates.mjs */
export const ARTICLE_META = {
${lines.join('\n').trim()}
} as const satisfies Record<string, ArticleMeta>;

export type ArticleMetaKey = keyof typeof ARTICLE_META;
`;

fs.writeFileSync(META_PATH, body);
console.log('Wrote', META_PATH);
