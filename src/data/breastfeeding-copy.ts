export type BreastfeedingSection = {
  id: string;
  title: string;
  icon: string;
  paragraphs: string[];
};

export type BreastfeedingReference = {
  citation: string;
  href: string;
};

export type BreastfeedingCopy = {
  heroTitle: string;
  heroLead: string;
  arHeroTitle: string;
  arHeroLead: string;
  sections: BreastfeedingSection[];
  referencesTitle: string;
  references: BreastfeedingReference[];
};

export const BREASTFEEDING_SECTION_IDS = {
  en: {
    generalPrinciples: 'general-principles',
    smallpox: 'smallpox',
    yellowFever: 'yellow-fever',
    infantVaccination: 'infant-vaccination',
  },
  ar: {
    generalPrinciples: 'general-principles-ar',
    smallpox: 'smallpox-ar',
    yellowFever: 'yellow-fever-ar',
    infantVaccination: 'infant-vaccination-ar',
  },
} as const;

export const BREASTFEEDING_EN_TOC = [
  { id: BREASTFEEDING_SECTION_IDS.en.generalPrinciples, label: 'General principles' },
  { id: BREASTFEEDING_SECTION_IDS.en.smallpox, label: 'Smallpox vaccination' },
  { id: BREASTFEEDING_SECTION_IDS.en.yellowFever, label: 'Yellow fever vaccine' },
  { id: BREASTFEEDING_SECTION_IDS.en.infantVaccination, label: 'Infant vaccination' },
];

export const BREASTFEEDING_AR_TOC = [
  { id: BREASTFEEDING_SECTION_IDS.ar.generalPrinciples, label: 'المبادئ العامة' },
  { id: BREASTFEEDING_SECTION_IDS.ar.smallpox, label: 'تطعيم الجدري' },
  { id: BREASTFEEDING_SECTION_IDS.ar.yellowFever, label: 'لقاح الحمى الصفراء' },
  { id: BREASTFEEDING_SECTION_IDS.ar.infantVaccination, label: 'تطعيم الرضع' },
];

const CDC_BREASTFEEDING =
  'https://www.cdc.gov/vaccines/hcp/imz-best-practices/special-situations.html#cdc_report_pub_study_section_5-breastfeeding-and-vaccination';

const BREASTFEEDING_REFERENCES: BreastfeedingReference[] = [
  {
    citation: 'CDC — Best practices: Breastfeeding and vaccination.',
    href: CDC_BREASTFEEDING,
  },
];

const AR_HERO_TITLE = 'النساء المرضعات';
const AR_HERO_LEAD =
  'باستثناء حالتين، لا تؤثر اللقاحات غير الحية ولا لقاحات الفيروسات الحية المعطاة للمرأة المرضعة على سلامة الرضاعة الطبيعية.';

export const BREASTFEEDING_COPY: { en: BreastfeedingCopy; ar: BreastfeedingCopy } = {
  en: {
    heroTitle: 'Women who are breastfeeding',
    heroLead:
      'With two exceptions, neither non-live nor live-virus vaccines administered to a lactating woman affect the safety of breastfeeding.',
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    sections: [
      {
        id: BREASTFEEDING_SECTION_IDS.en.generalPrinciples,
        title: 'General principles',
        icon: '✓',
        paragraphs: [
          'With 2 exceptions, neither non-live nor live-virus vaccines administered to a lactating woman affect the safety of breastfeeding for women or their infants. Although live viruses in vaccines can replicate in the mother, the majority of live viruses in vaccines have been demonstrated not to be excreted in human milk.',
          'Varicella vaccine virus has not been found in human milk. Although rubella vaccine virus has been excreted in human milk, the virus usually does not infect the infant. If infection does occur, it is well tolerated because the virus is attenuated.',
          'Non-live vaccines pose no risk for mothers who are breastfeeding or for their infants.',
        ],
      },
      {
        id: BREASTFEEDING_SECTION_IDS.en.smallpox,
        title: 'Smallpox vaccination',
        icon: '⚠️',
        paragraphs: [
          'Breastfeeding is a contraindication for smallpox vaccination of the mother because of the theoretical risk for contact transmission from mother to infant.',
        ],
      },
      {
        id: BREASTFEEDING_SECTION_IDS.en.yellowFever,
        title: 'Yellow fever vaccine',
        icon: '🌡️',
        paragraphs: [
          'Yellow fever vaccine should be avoided in breastfeeding women, because 2 cases (one confirmed, one probable) of yellow-fever vaccine associated acute neurotropic disease (YEL-AND) have been detected in infants whose mothers were vaccinated but were not vaccinated themselves. In both infants, vaccine virus was recovered from the cerebrospinal fluid of the infant, but the exact mode of transmission was not precisely determined because vaccine virus was not recovered from breast milk.',
          'However, when nursing mothers cannot avoid or postpone travel to areas endemic for yellow fever in which risk for acquisition is high, these women should be vaccinated.',
        ],
      },
      {
        id: BREASTFEEDING_SECTION_IDS.en.infantVaccination,
        title: 'Infant vaccination',
        icon: '👶',
        paragraphs: [
          'Limited data indicate that breastfeeding can enhance the response to certain vaccine antigens. There are no data to suggest that passive transfer of antibodies in human milk can affect the efficacy of live-virus vaccines.',
          'Breastfed infants should be vaccinated according to the recommended schedule.',
        ],
      },
    ],
    referencesTitle: 'References',
    references: BREASTFEEDING_REFERENCES,
  },
  ar: {
    heroTitle: AR_HERO_TITLE,
    heroLead: AR_HERO_LEAD,
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    sections: [
      {
        id: BREASTFEEDING_SECTION_IDS.ar.generalPrinciples,
        title: 'المبادئ العامة',
        icon: '✓',
        paragraphs: [
          'باستثناء حالتين، لا تؤثر اللقاحات غير الحية ولا لقاحات الفيروسات الحية المعطاة للمرأة المرضعة على سلامة الرضاعة الطبيعية بالنسبة للأم أو لطفلها. وعلى الرغم من أن الفيروسات الحية في اللقاحات قد تتكاثر لدى الأم، ثبت أن معظم الفيروسات الحية في اللقاحات لا تُفرَز في حليب الأم.',
          'لم يُعثر على فيروس لقاح الجدري المائي في حليب الأم. وعلى الرغم من أن فيروس لقاح الحصبة الألمانية قد يُفرَز في حليب الأم، فإنه عادةً لا يُصيب الرضيع. وإذا حدثت إصابة، فإنها تُتحمَّل جيدًا لأن الفيروس مُوهَن.',
          'اللقاحات غير الحية لا تشكل خطرًا على الأمهات المرضعات أو على أطفالهن.',
        ],
      },
      {
        id: BREASTFEEDING_SECTION_IDS.ar.smallpox,
        title: 'تطعيم الجدري',
        icon: '⚠️',
        paragraphs: [
          'تُعد الرضاعة الطبيعية من موانع تطعيم الأم ضد الجدري بسبب الخطر النظري لانتقال العدوى بالملامسة من الأم إلى الرضيع.',
        ],
      },
      {
        id: BREASTFEEDING_SECTION_IDS.ar.yellowFever,
        title: 'لقاح الحمى الصفراء',
        icon: '🌡️',
        paragraphs: [
          'يُفضَّل تجنب لقاح الحمى الصفراء لدى النساء المرضعات، لأنه سُجِّلت حالتان (واحدة مؤكدة وأخرى محتملة) من مرض YEL-AND المرتبط بلقاح الحمى الصفراء لدى رضع لم يُطعَّموا أنفسهم بينما كانت أمهاتهم قد تلقين اللقاح. في كلا الرضيعين، عُزل فيروس اللقاح من السائل النخاعي، لكن لم يُحدَّد بدقة أسلوب الانتقال لأن فيروس اللقاح لم يُعزل من حليب الأم.',
          'ومع ذلك، عندما لا تستطيع الأمهات المرضعات تجنب السفر أو تأجيله إلى مناطق ينشط فيها انتشار الحمى الصفراء ويكون خطر الإصابة مرتفعًا، فيجب تطعيمهن.',
        ],
      },
      {
        id: BREASTFEEDING_SECTION_IDS.ar.infantVaccination,
        title: 'تطعيم الرضع',
        icon: '👶',
        paragraphs: [
          'تشير بيانات محدودة إلى أن الرضاعة الطبيعية قد تعزّز الاستجابة لمولّدات المناعة في بعض اللقاحات. لا توجد بيانات تشير إلى أن انتقال الأجسام المضادة سلبيًا عبر حليب الأم قد يؤثر على فعالية لقاحات الفيروسات الحية.',
          'يجب تطعيم الرضع المرضعين وفق الجدول الموصى به.',
        ],
      },
    ],
    referencesTitle: 'المراجع',
    references: BREASTFEEDING_REFERENCES,
  },
};
