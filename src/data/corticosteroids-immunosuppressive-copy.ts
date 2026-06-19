export type CorticosteroidsParagraphPart = { text: string; bold?: boolean; em?: boolean };
export type CorticosteroidsParagraph = string | { parts: CorticosteroidsParagraphPart[] };

export type CorticosteroidsSection = {
  id: string;
  title: string;
  icon: string;
  variant?: 'takeaway';
  titleAlign?: 'center';
  paragraphs?: CorticosteroidsParagraph[];
  listItems?: CorticosteroidsParagraph[];
};

export type CorticosteroidsVaccineCards = {
  liveLabel: string;
  liveText: CorticosteroidsParagraph;
  nonLiveLabel: string;
  nonLiveText: CorticosteroidsParagraph;
};

export type CorticosteroidsReferenceItem = {
  boldLead: string;
  linkText: string;
  href: string;
  trailingEm: string;
};

export type CorticosteroidsDrugColumnLabels = {
  medication: string;
  targetMechanism: string;
  indications: string;
  monitoring: string;
};

export type CorticosteroidsTimingColumnLabels = {
  category: string;
  riskTier: string;
  mechanism: string;
  beforeTreatment: string;
  duringTreatment: string;
  afterTreatment: string;
};

export type CorticosteroidsTableCaptions = {
  traditional: string;
  cytokine: string;
  bCell: string;
  timing: string;
};

export type CorticosteroidsTableEmptyMessages = {
  traditional: string;
  cytokine: string;
  bCell: string;
  timing: string;
};

export type CorticosteroidsSearch = {
  placeholder: string;
  ariaLabel: string;
  clearAriaLabel: string;
  showingLabel: (count: number, total: number) => string;
};

export type CorticosteroidsSearchEmpty = {
  noRowsMessage: string;
  clearSearch: string;
};

export type CorticosteroidsSearchMeta = {
  showing: (count: number, total: number) => string;
  noMatches: string;
};

export type CorticosteroidsCopy = {
  heroTitle: string;
  heroLead: string;
  arHeroTitle: string;
  arHeroLead: string;
  backLabel: string;
  search: CorticosteroidsSearch;
  sections: CorticosteroidsSection[];
  vaccineCards: CorticosteroidsVaccineCards;
  pregnancyAlert: CorticosteroidsParagraph[];
  cocooning: CorticosteroidsParagraph[];
  msLinkLabel: string;
  msLinkHref: string;
  referencesIntro: string;
  references: CorticosteroidsReferenceItem[];
  tables: {
    drugColumnLabels: CorticosteroidsDrugColumnLabels;
    timingColumnLabels: CorticosteroidsTimingColumnLabels;
    captions: CorticosteroidsTableCaptions;
    emptyMessages: CorticosteroidsTableEmptyMessages;
    scrollHint: string;
  };
  searchEmpty: CorticosteroidsSearchEmpty;
  searchMeta: CorticosteroidsSearchMeta;
};

export const CORTICOSTEROIDS_SECTION_IDS = {
  en: {
    overview: 'overview',
    drugReference: 'drug-reference',
    traditionalDrugs: 'traditional-drugs',
    cytokineDrugs: 'cytokine-drugs',
    bCellDrugs: 'b-cell-drugs',
    vaccineConcepts: 'vaccine-concepts',
    timingMatrix: 'timing-matrix',
    pregnancyAlert: 'pregnancy-alert',
    cocooning: 'cocooning',
    msVaccination: 'ms-vaccination',
    references: 'references',
  },
  ar: {
    overview: 'overview-ar',
    drugReference: 'drug-reference-ar',
    traditionalDrugs: 'traditional-drugs-ar',
    cytokineDrugs: 'cytokine-drugs-ar',
    bCellDrugs: 'b-cell-drugs-ar',
    vaccineConcepts: 'vaccine-concepts-ar',
    timingMatrix: 'timing-matrix-ar',
    pregnancyAlert: 'pregnancy-alert-ar',
    cocooning: 'cocooning-ar',
    msVaccination: 'ms-vaccination-ar',
    references: 'references-ar',
  },
} as const;

export const CORTICOSTEROIDS_EN_TOC = [
  { id: CORTICOSTEROIDS_SECTION_IDS.en.overview, label: 'Overview' },
  { id: CORTICOSTEROIDS_SECTION_IDS.en.drugReference, label: 'Drug reference guide' },
  { id: CORTICOSTEROIDS_SECTION_IDS.en.traditionalDrugs, label: 'Traditional & oral agents' },
  { id: CORTICOSTEROIDS_SECTION_IDS.en.cytokineDrugs, label: 'Innate immunity targets' },
  { id: CORTICOSTEROIDS_SECTION_IDS.en.bCellDrugs, label: 'B-cell & selective biologics' },
  { id: CORTICOSTEROIDS_SECTION_IDS.en.vaccineConcepts, label: 'Live vs non-live vaccines' },
  { id: CORTICOSTEROIDS_SECTION_IDS.en.timingMatrix, label: 'Vaccine timing matrix' },
  { id: CORTICOSTEROIDS_SECTION_IDS.en.pregnancyAlert, label: 'Pregnancy exposure alert' },
  { id: CORTICOSTEROIDS_SECTION_IDS.en.cocooning, label: 'Household cocooning' },
  { id: CORTICOSTEROIDS_SECTION_IDS.en.msVaccination, label: 'MS vaccination guide' },
  { id: CORTICOSTEROIDS_SECTION_IDS.en.references, label: 'References & guidelines' },
];

export const CORTICOSTEROIDS_AR_TOC = [
  { id: CORTICOSTEROIDS_SECTION_IDS.ar.overview, label: 'نظرة عامة' },
  { id: CORTICOSTEROIDS_SECTION_IDS.ar.drugReference, label: 'مرجع الأدوية' },
  { id: CORTICOSTEROIDS_SECTION_IDS.ar.traditionalDrugs, label: 'العوامل التقليدية والفموية' },
  { id: CORTICOSTEROIDS_SECTION_IDS.ar.cytokineDrugs, label: 'أهداف المناعة الفطرية' },
  { id: CORTICOSTEROIDS_SECTION_IDS.ar.bCellDrugs, label: 'استنفاد B-cell والبيولوجيات الانتقائية' },
  { id: CORTICOSTEROIDS_SECTION_IDS.ar.vaccineConcepts, label: 'اللقاحات الحية مقابل غير الحية' },
  { id: CORTICOSTEROIDS_SECTION_IDS.ar.timingMatrix, label: 'مصفوفة توقيت التطعيم' },
  { id: CORTICOSTEROIDS_SECTION_IDS.ar.pregnancyAlert, label: 'تنبيه التعرض أثناء الحمل' },
  { id: CORTICOSTEROIDS_SECTION_IDS.ar.cocooning, label: 'حماية الأسرة (cocooning)' },
  { id: CORTICOSTEROIDS_SECTION_IDS.ar.msVaccination, label: 'دليل تطعيم MS' },
  { id: CORTICOSTEROIDS_SECTION_IDS.ar.references, label: 'المراجع والإرشادات' },
];

const MS_LINK_HREF = '/hcp-special-populations/vaccinations-with-multiple-sclerosis';

const REFERENCE_HREFS = {
  aaaai: 'https://www.aaaai.org/conditions-treatments/related-conditions/immunosuppressive',
  cdc: 'https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html',
  australianHandbook:
    'https://immunisationhandbook.health.gov.au/contents/vaccination-for-special-risk-groups/vaccination-for-people-who-are-immunocompromised',
} as const;

const AR_HERO_TITLE = 'الكورتيكوستيرويدات والأدوية المثبطة للمناعة';
const AR_HERO_LEAD =
  'ملفات تعريف الأدوية المثبطة للمناعة (AAAAI) ونوافذ توقيت التطعيم الموحدة (CDC وIDSA ودليل التطعيم الأسترالي) — منظمة للمرجعية السريرية.';

function showingTableRowsEn(count: number, total: number): string {
  return `Showing ${count} of ${total} table row${total === 1 ? '' : 's'}`;
}

function showingTableRowsAr(count: number, total: number): string {
  return `عرض ${count} من ${total} صف${total === 1 ? '' : 'وف'} في الجدول`;
}

const EN_REFERENCES: CorticosteroidsReferenceItem[] = [
  {
    boldLead: 'Drug profiles & biological mechanisms:',
    linkText: 'American Academy of Allergy, Asthma & Immunology (AAAAI)',
    href: REFERENCE_HREFS.aaaai,
    trailingEm: 'Immunosuppressive Medication for the Treatment of Autoimmune Disease Guide.',
  },
  {
    boldLead: 'Universal vaccine scheduling guidelines:',
    linkText: 'Centers for Disease Control and Prevention (CDC)',
    href: REFERENCE_HREFS.cdc,
    trailingEm: 'General Best Practice Guidelines for Immunization: Altered Immunocompetence.',
  },
  {
    boldLead: 'Immunocompromise levels & drug potentials:',
    linkText: 'The Australian Immunisation Handbook',
    href: REFERENCE_HREFS.australianHandbook,
    trailingEm:
      'Guidance on Secondary Immunodeficiencies Due to Medical Conditions and Therapies (Tables for Corticosteroids, Conventional, Biological, and Small Molecule Therapies).',
  },
];

const AR_REFERENCES: CorticosteroidsReferenceItem[] = [
  {
    boldLead: 'ملفات الأدوية والآليات البيولوجية:',
    linkText: 'American Academy of Allergy, Asthma & Immunology (AAAAI)',
    href: REFERENCE_HREFS.aaaai,
    trailingEm: 'Immunosuppressive Medication for the Treatment of Autoimmune Disease Guide.',
  },
  {
    boldLead: 'إرشادات جدولة التطعيم الموحدة:',
    linkText: 'Centers for Disease Control and Prevention (CDC)',
    href: REFERENCE_HREFS.cdc,
    trailingEm: 'General Best Practice Guidelines for Immunization: Altered Immunocompetence.',
  },
  {
    boldLead: 'مستويات ضعف المناعة وإمكانات الأدوية:',
    linkText: 'The Australian Immunisation Handbook',
    href: REFERENCE_HREFS.australianHandbook,
    trailingEm:
      'Guidance on Secondary Immunodeficiencies Due to Medical Conditions and Therapies (Tables for Corticosteroids, Conventional, Biological, and Small Molecule Therapies).',
  },
];

export const CORTICOSTEROIDS_COPY: { en: CorticosteroidsCopy; ar: CorticosteroidsCopy } = {
  en: {
    heroTitle: 'Corticosteroids and immunosuppressive drugs',
    heroLead:
      'Immunosuppressive medication profiles (AAAAI) and universal vaccine timing windows (CDC, IDSA, Australian Immunisation Handbook) — organized for clinical reference.',
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    backLabel: '← Special Populations',
    search: {
      placeholder: 'Search e.g. rituximab, TNF, methotrexate, live vaccine, prednisone…',
      ariaLabel: 'Search immunosuppressive drug and vaccine timing tables',
      clearAriaLabel: 'Clear search',
      showingLabel: showingTableRowsEn,
    },
    sections: [
      {
        id: CORTICOSTEROIDS_SECTION_IDS.en.overview,
        title: 'Immunosuppressive medications & vaccination guidelines',
        icon: '📋',
        paragraphs: [
          'Managing vaccines during immunosuppressive therapy requires balancing infection prevention with medical safety. This guide is organized in two core parts:',
          'Use these tables alongside individual patient factors — including diagnosis, dose, duration, concurrent therapies, and laboratory immune markers — when planning immunization.',
        ],
        listItems: [
          {
            parts: [
              { text: 'Part 1 — Immunosuppressive drug reference:', bold: true },
              {
                text: ' mechanisms, indications, and monitoring warnings based on AAAAI data.',
              },
            ],
          },
          {
            parts: [
              { text: 'Part 2 — Universal vaccine timing matrix:', bold: true },
              {
                text: ' safe vaccination windows before, during, and after therapy based on CDC, IDSA, and Australian Immunisation Handbook consensus.',
              },
            ],
          },
        ],
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.en.drugReference,
        title: 'Part 1: Comprehensive immunosuppressive drug database',
        icon: '💊',
        paragraphs: [
          'Reference tables below outline targets, therapeutic uses, and key monitoring warnings for medications commonly prescribed across autoimmune, autoinflammatory, transplant, and oncologic conditions.',
        ],
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.en.traditionalDrugs,
        title: 'Traditional & oral immunosuppressives',
        icon: '🧪',
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.en.cytokineDrugs,
        title: 'Innate Immunity Targets (Biologics & Small Molecules)',
        icon: '🎯',
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.en.bCellDrugs,
        title: 'B-cell depletion & selective biologics',
        icon: '🔬',
        titleAlign: 'center',
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.en.vaccineConcepts,
        title: 'Core concepts: live vs non-live vaccines',
        icon: '🛡️',
        variant: 'takeaway',
        paragraphs: ['Before using the timing matrix, distinguish the two vaccine categories:'],
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.en.timingMatrix,
        title: 'Part 2: Unified vaccine timing matrix',
        icon: '📊',
        paragraphs: [
          'Master reference merging AAAAI drug-risk profiles with CDC and Australian Immunisation Handbook vaccine scheduling guidance. Columns define pre-treatment windows, status during active therapy, and post-therapy recovery intervals before live vaccines may resume.',
        ],
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.en.pregnancyAlert,
        title: 'Clinical alert: in-utero biologic exposure',
        icon: '⚠️',
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.en.cocooning,
        title: 'Protecting the household: cocooning strategy',
        icon: '👥',
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.en.references,
        title: 'References & clinical guidelines',
        icon: '📚',
      },
    ],
    vaccineCards: {
      liveLabel: 'Live-attenuated vaccines',
      liveText: {
        parts: [
          {
            text: 'Examples: MMR, varicella, yellow fever, oral rotavirus. Contain weakened but replicating organisms. During significant immunosuppression the host may fail to control the vaccine strain, risking severe vaccine-derived infection. ',
          },
          { text: 'Generally contraindicated during active immunosuppression.', bold: true },
        ],
      },
      nonLiveLabel: 'Non-live / inactivated vaccines',
      nonLiveText: {
        parts: [
          {
            text: 'Examples: inactivated influenza, COVID-19, Shingrix, pneumococcal, Tdap. Cannot replicate or cause infection — ',
          },
          { text: 'physically safe at any time', bold: true },
          {
            text: '. Immunosuppression may still blunt antibody responses, so timing optimization remains clinically important.',
          },
        ],
      },
    },
    pregnancyAlert: [
      {
        parts: [
          { text: 'Pregnancy exposure:', bold: true },
          {
            text: ' Highly immunosuppressive biologics — especially anti-TNF agents (e.g., adalimumab/Humira) and anti-CD20 agents (e.g., rituximab) — readily cross the placenta in the second and third trimesters.',
          },
        ],
      },
      {
        parts: [
          { text: 'Infant live-vaccine safety:', bold: true },
          {
            text: ' Exposed infants must not receive live-attenuated vaccines (notably BCG and oral rotavirus) until at least ',
          },
          { text: '6 months of age', bold: true },
          {
            text: ', allowing clearance of maternal drug. Standard non-live childhood vaccines should follow routine pediatric schedules.',
          },
        ],
      },
    ],
    cocooning: [
      'When live vaccines are unsafe for the immunocompromised patient, household members, partners, and close contacts should remain fully vaccinated against measles, varicella, influenza, and other preventable diseases.',
      {
        parts: [
          { text: 'This ' },
          { text: 'cocooning', bold: true },
          {
            text: ' approach creates a protective barrier around the patient and substantially reduces the probability of household introduction of vaccine-preventable viruses.',
          },
        ],
      },
    ],
    msLinkLabel: 'To know more about vaccination for people with MS, press here',
    msLinkHref: MS_LINK_HREF,
    referencesIntro:
      'To ensure maximum safety and data transparency for our users, all medical timelines, drug risk tiers, and vaccine windows on this page are compiled from global medical authorities:',
    references: EN_REFERENCES,
    tables: {
      drugColumnLabels: {
        medication: 'Medication & examples',
        targetMechanism: 'Target & mechanism',
        indications: 'Indications for use',
        monitoring: 'Monitoring & cautions',
      },
      timingColumnLabels: {
        category: 'Therapeutic category / condition',
        riskTier: 'Risk tier',
        mechanism: 'Target / mechanism',
        beforeTreatment: 'Before treatment',
        duringTreatment: 'During active therapy',
        afterTreatment: 'After treatment / recovery',
      },
      captions: {
        traditional: 'Table 1. Corticosteroids, antimetabolites, and conventional DMARDs',
        cytokine: 'Table 2. Anti-cytokine biologics and oral JAK inhibitors',
        bCell: 'Table 3. B-cell depletion & selective biologics',
        timing: 'Table 4. Immunosuppressive risk tiers and vaccine timing windows',
      },
      emptyMessages: {
        traditional: 'No traditional or oral agents match your search.',
        cytokine: 'No innate immunity targets match your search.',
        bCell: 'No B-cell or selective biologics match your search.',
        timing: 'No timing guidance rows match your search.',
      },
      scrollHint: 'Swipe sideways to view all columns',
    },
    searchEmpty: {
      noRowsMessage: 'No table rows match "{query}".',
      clearSearch: 'Clear search',
    },
    searchMeta: {
      showing: showingTableRowsEn,
      noMatches: 'No matches — try a drug name, brand, cytokine, or condition',
    },
  },
  ar: {
    heroTitle: AR_HERO_TITLE,
    heroLead: AR_HERO_LEAD,
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    backLabel: '← الفئات الخاصة',
    search: {
      placeholder: 'ابحث مثل rituximab أو TNF أو methotrexate أو live vaccine أو prednisone…',
      ariaLabel: 'البحث في جداول الأدوية المثبطة للمناعة وتوقيت التطعيم',
      clearAriaLabel: 'مسح البحث',
      showingLabel: showingTableRowsAr,
    },
    sections: [
      {
        id: CORTICOSTEROIDS_SECTION_IDS.ar.overview,
        title: 'الأدوية المثبطة للمناعة وإرشادات التطعيم',
        icon: '📋',
        paragraphs: [
          'إدارة اللقاحات أثناء العلاج المثبّط للمناعة تتطلب موازنة الوقاية من العدوى مع السلامة الطبية. يُنظَّم هذا الدليل في جزئين أساسيين:',
          'استخدم هذه الجداول إلى جانب عوامل المريض الفردية — بما في ذلك التشخيص والجرعة والمدة والعلاجات المتزامنة وعلامات المناعة المخبرية — عند التخطيط للتطعيم.',
        ],
        listItems: [
          {
            parts: [
              { text: 'الجزء 1 — مرجع الأدوية المثبطة للمناعة:', bold: true },
              { text: ' الآليات والمؤشرات وتحذيرات المراقبة استنادًا إلى بيانات AAAAI.' },
            ],
          },
          {
            parts: [
              { text: 'الجزء 2 — مصفوفة توقيت التطعيم الموحدة:', bold: true },
              {
                text: ' نوافذ التطعيم الآمنة قبل العلاج وأثناءه وبعده استنادًا إلى إجماع CDC وIDSA ودليل التطعيم الأسترالي.',
              },
            ],
          },
        ],
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.ar.drugReference,
        title: 'الجزء 1: قاعدة بيانات شاملة للأدوية المثبطة للمناعة',
        icon: '💊',
        paragraphs: [
          'توضّح جداول المرجع أدناه الأهداف والاستخدامات العلاجية وتحذيرات المراقبة الرئيسية للأدوية التي تُوصف شائعًا في حالات المناعة الذاتية والالتهاب الذاتي وزراعة الأعضاء والأورام.',
        ],
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.ar.traditionalDrugs,
        title: 'المثبّطات المناعية التقليدية والفموية',
        icon: '🧪',
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.ar.cytokineDrugs,
        title: 'أهداف المناعة الفطرية (البيولوجيات والجزيئات الصغيرة)',
        icon: '🎯',
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.ar.bCellDrugs,
        title: 'استنفاد B-cell والبيولوجيات الانتقائية',
        icon: '🔬',
        titleAlign: 'center',
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.ar.vaccineConcepts,
        title: 'المفاهيم الأساسية: اللقاحات الحية مقابل غير الحية',
        icon: '🛡️',
        variant: 'takeaway',
        paragraphs: ['قبل استخدام مصفوفة التوقيت، ميّز بين فئتي اللقاحات:'],
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.ar.timingMatrix,
        title: 'الجزء 2: مصفوفة توقيت التطعيم الموحدة',
        icon: '📊',
        paragraphs: [
          'مرجع رئيسي يدمج ملفات مخاطر الأدوية من AAAAI مع إرشادات جدولة التطعيم من CDC ودليل التطعيم الأسترالي. تحدّد الأعمدة نوافذ ما قبل العلاج والحالة أثناء العلاج النشط وفترات التعافي بعد العلاج قبل استئناف اللقاحات الحية.',
        ],
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.ar.pregnancyAlert,
        title: 'تنبيه سريري: التعرض للبيولوجيات داخل الرحم',
        icon: '⚠️',
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.ar.cocooning,
        title: 'حماية الأسرة: استراتيجية cocooning',
        icon: '👥',
      },
      {
        id: CORTICOSTEROIDS_SECTION_IDS.ar.references,
        title: 'المراجع والإرشادات السريرية',
        icon: '📚',
      },
    ],
    vaccineCards: {
      liveLabel: 'اللقاحات الحية الموهنة',
      liveText: {
        parts: [
          {
            text: 'أمثلة: MMR والجدري المائي والحمى الصفراء والروتافيروس الفموي. تحتوي على عدوى ضعيفة لكنها قادرة على التكاثر. أثناء كبت المناعة الشديد قد يفشل المضيف في السيطرة على سلالة اللقاح، مما يعرّضه لخطر إصابة شديدة ناتجة عن اللقاح. ',
          },
          { text: 'مُمنوعة عمومًا أثناء كبت المناعة النشط.', bold: true },
        ],
      },
      nonLiveLabel: 'اللقاحات غير الحية / المعطّلة',
      nonLiveText: {
        parts: [
          {
            text: 'أمثلة: influenza المعطّلة وCOVID-19 وShingrix والمكورات الرئوية وTdap. لا يمكنها التكاثر أو أن تسبب العدوى — ',
          },
          { text: 'آمنة جسديًا في أي وقت', bold: true },
          {
            text: '. قد يُضعف كبت المناعة استجابات الأجسام المضادة، لذا يبقى تحسين التوقيت مهمًا سريريًا.',
          },
        ],
      },
    },
    pregnancyAlert: [
      {
        parts: [
          { text: 'التعرض أثناء الحمل:', bold: true },
          {
            text: ' البيولوجيات شديدة كبت المناعة — ولا سيما anti-TNF (مثل adalimumab/Humira) وanti-CD20 (مثل rituximab) — تعبر المشيمة بسهولة في الثلث الثاني والثالث.',
          },
        ],
      },
      {
        parts: [
          { text: 'سلامة اللقاحات الحية للرضّع:', bold: true },
          {
            text: ' يجب ألا يتلقى الرضّع المعرّضون لقاحات حية مُوهنة (ولا سيما BCG والروتافيروس الفموي) قبل ',
          },
          { text: '6 أشهر على الأقل', bold: true },
          {
            text: '، للسماح بإزالة الدواء الأمومي. يجب أن تتبع لقاحات الطفولة غير الحية الروتينية جداول الأطفال المعتادة.',
          },
        ],
      },
    ],
    cocooning: [
      'عندما تكون اللقاحات الحية غير آمنة للمريض ذي المناعة الضعيفة، ينبغي أن يبقى أفراد الأسرة والشركاء والمقربون مطعّمين بالكامل ضد الحصبة والجدري المائي و influenza والأمراض الأخرى القابلة للوقاية.',
      {
        parts: [
          { text: 'تُنشئ استراتيجية ' },
          { text: 'cocooning', bold: true },
          {
            text: ' هذه حاجزًا وقائيًا حول المريض وتقلّل بشكل كبير احتمال دخول فيروسات قابلة للوقاية بالتطعيم إلى الأسرة.',
          },
        ],
      },
    ],
    msLinkLabel: 'لمعرفة المزيد عن التطعيم لمرضى MS، اضغط هنا',
    msLinkHref: MS_LINK_HREF,
    referencesIntro:
      'لضمان أقصى درجات السلامة وشفافية البيانات لمستخدمينا، تُجمَع جميع الجداول الزمنية الطبية ومستويات مخاطر الأدوية ونوافذ التطعيم في هذه الصفحة من سلطات طبية عالمية:',
    references: AR_REFERENCES,
    tables: {
      drugColumnLabels: {
        medication: 'الدواء والأمثلة',
        targetMechanism: 'الهدف والآلية',
        indications: 'مؤشرات الاستخدام',
        monitoring: 'المراقبة والاحتياطات',
      },
      timingColumnLabels: {
        category: 'الفئة العلاجية / الحالة',
        riskTier: 'مستوى الخطر',
        mechanism: 'الهدف / الآلية',
        beforeTreatment: 'قبل العلاج',
        duringTreatment: 'أثناء العلاج النشط',
        afterTreatment: 'بعد العلاج / التعافي',
      },
      captions: {
        traditional: 'الجدول 1. الكورتيكوستيرويدات ومضادات الأيض وDMARDs التقليدية',
        cytokine: 'الجدول 2. البيولوجيات anti-cytokine ومثبطات JAK الفموية',
        bCell: 'الجدول 3. استنفاد B-cell والبيولوجيات الانتقائية',
        timing: 'الجدول 4. مستويات مخاطر كبت المناعة ونوافذ توقيت التطعيم',
      },
      emptyMessages: {
        traditional: 'لا توجد عوامل تقليدية أو فموية تطابق بحثك.',
        cytokine: 'لا توجد أهداف للمناعة الفطرية تطابق بحثك.',
        bCell: 'لا توجد biologics لـ B-cell أو biologics انتقائية تطابق بحثك.',
        timing: 'لا توجد صفوف إرشادات توقيت تطابق بحثك.',
      },
      scrollHint: 'اسحب أفقيًا لعرض جميع الأعمدة',
    },
    searchEmpty: {
      noRowsMessage: 'لا توجد صفوف جدول تطابق "{query}".',
      clearSearch: 'مسح البحث',
    },
    searchMeta: {
      showing: showingTableRowsAr,
      noMatches: 'لا توجد نتائج — جرّب اسم دواء أو علامة تجارية أو cytokine أو حالة',
    },
  },
};
