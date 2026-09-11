import { VACCINE_ARTICLES } from '@/data/vaccine-articles';
import { IMPORTANT_INFO_TIPS } from '@/data/important-info-tips';
import { NCQ_TOPICS } from '@/data/non-hcp-common-questions-topics';
import {
  FAQ_ADMINISTERING_VACCINES_PAGE,
  FAQ_BCG_PAGE,
  FAQ_CONTRAINDICATIONS_PRECAUTIONS_PAGE,
  FAQ_DT_PAGE,
  FAQ_DT_CONTAINING_PAGE,
  FAQ_HEPA_HEPB_PAGE,
  FAQ_HEPATITIS_A_PAGE,
  FAQ_HEPATITIS_B_PAGE,
  FAQ_HIB_PAGE,
  FAQ_HPV_PAGE,
  FAQ_INFLUENZA_PAGE,
  FAQ_MENINGOCOCCAL_ACWY_PAGE,
  FAQ_MENINGOCOCCAL_B_PAGE,
  FAQ_MMR_PAGE,
  FAQ_PNEUMOCOCCAL_PAGE,
  FAQ_RABIES_PAGE,
  FAQ_ROTAVIRUS_PAGE,
  FAQ_RSV_PAGE,
  FAQ_SCHEDULING_PAGE,
  FAQ_VARICELLA_PAGE,
  FAQ_ZOSTER_PAGE,
} from '@/data/faq-pages';
import {
  BcgPage,
  DiphtheriaPage,
  DtPage,
  HepatitisABPage,
  HepatitisBPage,
  HibPage,
  HpvPage,
  InfluenzaPage,
  MeningitisPage,
  MeningococcalPage,
  MmrPage,
  PneumococcalPage,
  PolioPage,
  RabirsPage,
  RotaPage,
  RsvPage,
  ShinglesPage,
  TetanusPage,
  VaricellaPage,
  YellowFeverPage,
} from '@/data/hcp-vaccine-pages';
import { COCHLEAR_COPY } from '@/data/cochlear-implants-copy';
import { BREASTFEEDING_COPY } from '@/data/breastfeeding-copy';
import { PREGNANCY_COPY } from '@/data/pregnancy-breastfeeding-copy';
import { PRETERM_COPY } from '@/data/preterm-infants-copy';
import { ANAESTHESIA_COPY } from '@/data/anaesthesia-surgery-copy';
import { IG_BLOOD_COPY } from '@/data/immunoglobulin-blood-products-copy';
import { VACCINATION_OF_CONTACTS_COPY } from '@/data/vaccination-of-contacts-copy';
import { CORTICOSTEROIDS_COPY } from '@/data/corticosteroids-immunosuppressive-copy';
import { GENERAL_PRINCIPLES_COPY } from '@/data/general-principles-copy';
import { ASPLENIA_COPY } from '@/data/anatomic-or-functional-asplenia-copy';
import { CANCER_VACCINATION_COPY } from '@/data/cancer-vaccination-copy';
import { HSCT_COPY } from '@/data/hsct-vaccination-copy';
import { SOLID_ORGAN_TRANSPLANT_COPY } from '@/data/solid-organ-transplant-vaccination-copy';
import { INTERNATIONAL_TRAVELLERS_COPY } from '@/data/international-travellers-copy';
import { EXPERT_CONSENSUS_COPY } from '@/data/expert-consensus-pediatric-oncology-copy';
import { MS_COPY } from '@/data/multiple-sclerosis-vaccination-ms-copy';
import {
  B_CELL_AND_SELECTIVE_BIOLOGICS,
  CYTOKINE_AND_JAK_INHIBITORS,
  TRADITIONAL_IMMUNOSUPPRESSIVE_DRUGS,
} from '@/data/hcp-immunosuppressive-drugs';
import { IMMUNOSUPPRESSIVE_VACCINE_TIMING } from '@/data/hcp-immunosuppressive-vaccine-timing';
import { SITE_SEARCH_INDEX } from '@/lib/site-search/search-index-data';
import {
  extractBilingualCopyDocument,
  extractFaqPageDocument,
  extractHcpVaccinePageDocument,
  extractKeywordDocument,
  extractNonHcpQuestionsDocument,
  extractPlainObjectDocument,
  extractVaccineArticleDocument,
  finalizeRawDocument,
} from '@/lib/site-search/content-sources';
import { mergeSearchDocuments } from '@/lib/site-search/document';
import { type SiteSearchDocument } from '@/lib/site-search/types';

const FAQ_PAGES = [
  ['administering-vaccines', FAQ_ADMINISTERING_VACCINES_PAGE],
  ['bcg', FAQ_BCG_PAGE],
  ['contraindications-precautions', FAQ_CONTRAINDICATIONS_PRECAUTIONS_PAGE],
  ['dt', FAQ_DT_PAGE],
  ['dt-containing', FAQ_DT_CONTAINING_PAGE],
  ['hepa-hepb', FAQ_HEPA_HEPB_PAGE],
  ['hepatitis-a', FAQ_HEPATITIS_A_PAGE],
  ['hepatitis-b', FAQ_HEPATITIS_B_PAGE],
  ['hib', FAQ_HIB_PAGE],
  ['hpv', FAQ_HPV_PAGE],
  ['influenza', FAQ_INFLUENZA_PAGE],
  ['meningococcal-acwy', FAQ_MENINGOCOCCAL_ACWY_PAGE],
  ['meningococcal-b', FAQ_MENINGOCOCCAL_B_PAGE],
  ['mmr', FAQ_MMR_PAGE],
  ['pneumococcal', FAQ_PNEUMOCOCCAL_PAGE],
  ['rabies', FAQ_RABIES_PAGE],
  ['rotavirus', FAQ_ROTAVIRUS_PAGE],
  ['rsv', FAQ_RSV_PAGE],
  ['scheduling', FAQ_SCHEDULING_PAGE],
  ['varicella', FAQ_VARICELLA_PAGE],
  ['zoster', FAQ_ZOSTER_PAGE],
] as const;

const NCQ_SLUGS: Record<keyof typeof NCQ_TOPICS, string> = {
  generalQuestions: 'general-questions',
  hepatitisA: 'hepatitis-a',
  hepatitisB: 'hepatitis-b',
  hepatitisAB: 'hepatitis-a-b',
  hib: 'hib',
  hpv: 'hpv',
  influenza: 'influenza',
  mmr: 'mmr',
  menAcwy: 'men-acwy',
  menB: 'men-b',
  pneumococcal: 'pneumococcal',
  rabies: 'rabies',
  rota: 'rota',
  rsv: 'rsv',
  varicella: 'varicella',
  herpesZoster: 'herpes-zoster',
};

const VACCINE_ARTICLE_ROUTES: Record<keyof typeof VACCINE_ARTICLES, string> = {
  polio: '/polio',
  tuberculosis: '/tuberculosis',
  'zero-dose': '/zero-dose',
  mmr: '/mmr',
  'hepatitis-a': '/hepatitis-a',
  'hepatitis-b': '/hepatitis-b',
  rotavirus: '/rotavirus',
  chickenpox: '/chickenpox',
  influenza: '/influenza',
  pertussis: '/pertussis',
  tetanus: '/tetanus',
  diphtheria: '/diphtheria',
  hib: '/hib',
  pcv: '/pcv',
  'hepatitis-a-b': '/hepatitis-a-b',
  'herpes-zoster': '/herpes-zoster',
  meningitis: '/meningitis',
  ppsv: '/ppsv',
  rabies: '/rabies',
  hpv: '/hpv',
  rsv: '/rsv',
};

const HCP_VACCINE_PAGES = [
  ['bcg', BcgPage],
  ['diphtheria', DiphtheriaPage],
  ['dt', DtPage],
  ['hepatitis-a-b', HepatitisABPage],
  ['hepatitis-b', HepatitisBPage],
  ['hib', HibPage],
  ['hpv', HpvPage],
  ['influenza', InfluenzaPage],
  ['meningitis', MeningitisPage],
  ['meningococcal', MeningococcalPage],
  ['mmr', MmrPage],
  ['pneumococcal', PneumococcalPage],
  ['polio', PolioPage],
  ['rabirs', RabirsPage],
  ['rota', RotaPage],
  ['rsv', RsvPage],
  ['shingles', ShinglesPage],
  ['tetanus', TetanusPage],
  ['varicella', VaricellaPage],
  ['yellow-fever', YellowFeverPage],
] as const;

const COPY_PAGES = [
  ['/hcp-special-populations/cochlear-implants', 'Cochlear implants', COCHLEAR_COPY],
  ['/hcp-special-populations/breastfeeding', 'Breastfeeding', BREASTFEEDING_COPY],
  ['/hcp-special-populations/pregnancy-breastfeeding', 'Pregnancy', PREGNANCY_COPY],
  ['/hcp-special-populations/preterm-infants', 'Preterm infants', PRETERM_COPY],
  ['/hcp-special-populations/anaesthesia-surgery', 'Anaesthesia and surgery', ANAESTHESIA_COPY],
  [
    '/hcp-special-populations/immunoglobulin-blood-products',
    'Immunoglobulin and blood products',
    IG_BLOOD_COPY,
  ],
  [
    '/hcp-special-populations/altered-immunocompetence/vaccination-of-contacts',
    'Vaccination of contacts',
    VACCINATION_OF_CONTACTS_COPY,
  ],
  [
    '/hcp-special-populations/altered-immunocompetence/corticosteroids-and-immunosuppressive-drugs',
    'Corticosteroids and immunosuppressive drugs',
    CORTICOSTEROIDS_COPY,
  ],
  [
    '/hcp-special-populations/altered-immunocompetence/general-principles',
    'General principles',
    GENERAL_PRINCIPLES_COPY,
  ],
  [
    '/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia',
    'Anatomic or functional asplenia',
    ASPLENIA_COPY,
  ],
  ['/hcp-special-populations/vaccination-in-patients-with-cancer', 'Cancer vaccination', CANCER_VACCINATION_COPY],
  [
    '/hcp-special-populations/haematopoietic-stem-cell-transplant-recipients',
    'Haematopoietic stem cell transplant',
    HSCT_COPY,
  ],
  [
    '/hcp-special-populations/solid-organ-transplant-vaccination',
    'Solid organ transplant vaccination',
    SOLID_ORGAN_TRANSPLANT_COPY,
  ],
  ['/hcp-special-populations/international-travellers', 'International travellers', INTERNATIONAL_TRAVELLERS_COPY],
  [
    '/hcp-special-populations/expert-consensus-pediatric-oncology-re-immunization-egypt',
    'Pediatric oncology expert consensus',
    EXPERT_CONSENSUS_COPY,
  ],
  [
    '/hcp-special-populations/vaccinations-with-multiple-sclerosis',
    'Multiple sclerosis vaccination',
    MS_COPY,
  ],
] as const;

export type SearchIndexStats = {
  publicRoutesIndexed: number;
  searchableDocuments: number;
  contentSources: string[];
  excluded: string[];
};

export function buildFullSearchIndex(): SiteSearchDocument[] {
  const documents: SiteSearchDocument[] = [];

  for (const [slug, config] of FAQ_PAGES) {
    const doc = finalizeRawDocument(extractFaqPageDocument(config, `/faq/${slug}`));
    if (doc) documents.push(doc);
  }

  for (const [topicId, topic] of Object.entries(NCQ_TOPICS) as Array<
    [keyof typeof NCQ_TOPICS, (typeof NCQ_TOPICS)[keyof typeof NCQ_TOPICS]]
  >) {
    const doc = finalizeRawDocument(
      extractNonHcpQuestionsDocument(topic, `/non-hcp/common-questions/${NCQ_SLUGS[topicId]}`)
    );
    if (doc) documents.push(doc);
  }

  for (const [key, article] of Object.entries(VACCINE_ARTICLES) as Array<
    [keyof typeof VACCINE_ARTICLES, (typeof VACCINE_ARTICLES)[keyof typeof VACCINE_ARTICLES]]
  >) {
    const doc = finalizeRawDocument(extractVaccineArticleDocument(article, VACCINE_ARTICLE_ROUTES[key]));
    if (doc) documents.push(doc);
  }

  for (const [slug, page] of HCP_VACCINE_PAGES) {
    const doc = finalizeRawDocument(extractHcpVaccinePageDocument(page, `/hcp/${slug}`));
    if (doc) documents.push(doc);
  }

  for (const [href, title, copy] of COPY_PAGES) {
    const doc = finalizeRawDocument(extractBilingualCopyDocument(copy, href, title));
    if (doc) documents.push(doc);
  }

  const importantInfoDoc = finalizeRawDocument(
    extractKeywordDocument({
      href: '/important-info',
      title: 'Important information',
      category: 'For Public',
      keywords: IMPORTANT_INFO_TIPS.map((tip) => tip.keywords),
      bodyParts: IMPORTANT_INFO_TIPS.flatMap((tip) => [tip.ar, tip.en]),
    })
  );
  if (importantInfoDoc) documents.push(importantInfoDoc);

  const immunosuppressiveDoc = extractPlainObjectDocument(
    '/hcp-special-populations/altered-immunocompetence/corticosteroids-and-immunosuppressive-drugs',
    'Immunosuppressive drug tables',
    [
      TRADITIONAL_IMMUNOSUPPRESSIVE_DRUGS,
      CYTOKINE_AND_JAK_INHIBITORS,
      B_CELL_AND_SELECTIVE_BIOLOGICS,
      IMMUNOSUPPRESSIVE_VACCINE_TIMING,
    ],
    'HCP Special Populations'
  );
  if (immunosuppressiveDoc) {
    documents.push(immunosuppressiveDoc);
  }

  for (const entry of SITE_SEARCH_INDEX) {
    const doc = finalizeRawDocument(
      extractKeywordDocument({
        href: entry.href,
        title: entry.title,
        category: entry.category,
        bodyParts: entry.description ? [entry.description] : [],
      })
    );
    if (doc) documents.push(doc);
  }

  return mergeSearchDocuments(documents);
}

export function getSearchIndexStats(documents: SiteSearchDocument[]): SearchIndexStats {
  return {
    publicRoutesIndexed: new Set(documents.map((document) => document.href)).size,
    searchableDocuments: documents.length,
    contentSources: [
      'HCP FAQ pages (src/data/faq-pages/*)',
      'Public common questions (src/data/non-hcp-*-questions.ts)',
      'Public vaccine articles (src/data/vaccine-articles.ts)',
      'HCP vaccine product pages (src/data/hcp-vaccine-pages/*)',
      'HCP special-population guides (src/data/*-copy.ts)',
      'Important info tips (src/data/important-info-tips.ts)',
      'Immunosuppressive tables (src/data/hcp-immunosuppressive-*.ts)',
      'Navigation fallback entries (src/lib/site-search/search-index-data.ts)',
    ],
    excluded: [
      '/api/* routes',
      '/auth/* routes',
      '/serwist/* service worker artifacts',
      'PDF-only document pages (title/lead only where applicable)',
      'Inline-only pages without centralized data modules',
      'localhost and external absolute URLs',
    ],
  };
}
