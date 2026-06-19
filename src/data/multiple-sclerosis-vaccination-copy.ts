export type MsParagraphPart = { text: string; bold?: boolean; em?: boolean };
export type MsParagraph = string | { parts: MsParagraphPart[] };

export type MsDrugBlock = {
  title: string;
  includes: string;
  nonLive: MsParagraph;
  live: MsParagraph;
};

export type MsVzvScenario = {
  title: string;
  items: MsParagraph[];
};

export type MsSection = {
  id: string;
  title: string;
  icon: string;
  variant?: 'takeaway';
  paragraphs?: MsParagraph[];
  listItems?: MsParagraph[];
  listClassName?: string;
  drugBlock?: MsDrugBlock;
  vzvScenarios?: MsVzvScenario[];
};

export type MsReference = { citation: string; href: string };

export type MsVaccinationCopy = {
  heroTitle: string;
  heroLead: string;
  arHeroTitle: string;
  arHeroLead: string;
  sections: MsSection[];
  referencesTitle: string;
  references: MsReference[];
  labels: {
    includes: string;
    nonLive: string;
    live: string;
  };
};

export const MS_SECTION_IDS = {
  en: {
    introduction: 'introduction',
    coreRules: 'core-rules',
    nonDepleting: 'non-depleting',
    antiCd20Infusion: 'anti-cd20-infusion',
    antiCd20Sc: 'anti-cd20-sc',
    s1pModulators: 's1p-modulators',
    cladribine: 'cladribine',
    alemtuzumab: 'alemtuzumab',
    steroids: 'steroids',
    priorityVaccines: 'priority-vaccines',
    vzvShingles: 'vzv-shingles',
    references: 'references',
  },
  ar: {
    introduction: 'introduction-ar',
    coreRules: 'core-rules-ar',
    nonDepleting: 'non-depleting-ar',
    antiCd20Infusion: 'anti-cd20-infusion-ar',
    antiCd20Sc: 'anti-cd20-sc-ar',
    s1pModulators: 's1p-modulators-ar',
    cladribine: 'cladribine-ar',
    alemtuzumab: 'alemtuzumab-ar',
    steroids: 'steroids-ar',
    priorityVaccines: 'priority-vaccines-ar',
    vzvShingles: 'vzv-shingles-ar',
    references: 'references-ar',
  },
} as const;

export const MS_EN_TOC = [
  { id: MS_SECTION_IDS.en.introduction, label: 'Introduction' },
  { id: MS_SECTION_IDS.en.coreRules, label: 'Core safety rules' },
  { id: MS_SECTION_IDS.en.nonDepleting, label: 'Non-depleting therapies' },
  { id: MS_SECTION_IDS.en.antiCd20Infusion, label: 'Anti-CD20 / CD19 infusions' },
  { id: MS_SECTION_IDS.en.antiCd20Sc, label: 'Anti-CD20 subcutaneous' },
  { id: MS_SECTION_IDS.en.s1pModulators, label: 'S1P modulators' },
  { id: MS_SECTION_IDS.en.cladribine, label: 'Cladribine' },
  { id: MS_SECTION_IDS.en.alemtuzumab, label: 'Alemtuzumab' },
  { id: MS_SECTION_IDS.en.steroids, label: 'After steroid treatment' },
  { id: MS_SECTION_IDS.en.priorityVaccines, label: 'High-priority vaccines' },
  { id: MS_SECTION_IDS.en.vzvShingles, label: 'VZV & shingles protocol' },
  { id: MS_SECTION_IDS.en.references, label: 'References' },
];

export const MS_AR_TOC = [
  { id: MS_SECTION_IDS.ar.introduction, label: 'مقدمة' },
  { id: MS_SECTION_IDS.ar.coreRules, label: 'قواعد السلامة الأساسية' },
  { id: MS_SECTION_IDS.ar.nonDepleting, label: 'علاجات غير مستنفدة' },
  { id: MS_SECTION_IDS.ar.antiCd20Infusion, label: 'CD20/CD19 بالتسريب' },
  { id: MS_SECTION_IDS.ar.antiCd20Sc, label: 'CD20 تحت الجلد' },
  { id: MS_SECTION_IDS.ar.s1pModulators, label: 'معدّلات S1P' },
  { id: MS_SECTION_IDS.ar.cladribine, label: 'Cladribine' },
  { id: MS_SECTION_IDS.ar.alemtuzumab, label: 'Alemtuzumab' },
  { id: MS_SECTION_IDS.ar.steroids, label: 'بعد المنشطات' },
  { id: MS_SECTION_IDS.ar.priorityVaccines, label: 'لقاحات ذات أولوية' },
  { id: MS_SECTION_IDS.ar.vzvShingles, label: 'VZV والهربس النطاقي' },
  { id: MS_SECTION_IDS.ar.references, label: 'المراجع' },
];

export const MS_REFERENCES: MsReference[] = [
  {
    citation:
      'Freedman MS et al. Vaccination and multiple sclerosis: 2023 ECTRIMS/EAN consensus recommendations. Mult Scler. 2023.',
    href: 'https://pubmed.ncbi.nlm.nih.gov/37668725/',
  },
  {
    citation: 'National Multiple Sclerosis Society. Vaccines and MS.',
    href: 'https://www.nationalmssociety.org/national-mssociety/media/ms-national-files/brochures/brochure-vaccines-and-ms.pdf',
  },
  {
    citation: 'U.S. Department of Veterans Affairs MS Centers of Excellence. Vaccination guidance.',
    href: 'https://www.va.gov/ms/',
  },
  {
    citation:
      'Centers for Disease Control and Prevention. Altered immunocompetence — general immunization practices.',
    href: 'https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html',
  },
];

export const AR_HERO_TITLE = 'التطعيم مع التصلب المتعدد';
export const AR_HERO_LEAD =
  'توقيت اللقاحات غير الحية والحية مع علاجات تعديل مسار MS — مستند إلى ECTRIMS/EAN 2023 وNMSS وVA MS Centers of Excellence والإرشادات السريرية.';
