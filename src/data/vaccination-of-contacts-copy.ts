export type VaccinationOfContactsParagraphPart = { text: string; bold?: boolean };
export type VaccinationOfContactsParagraph = string | { parts: VaccinationOfContactsParagraphPart[] };

export type VaccinationOfContactsSection = {
  id: string;
  title: string;
  icon: string;
  paragraphs: VaccinationOfContactsParagraph[];
};

export type VaccinationOfContactsReference = { citation: string; href: string };

export type VaccinationOfContactsCopy = {
  heroTitle: string;
  heroLead: string;
  arHeroTitle: string;
  arHeroLead: string;
  backLabel: string;
  sections: VaccinationOfContactsSection[];
  referencesTitle: string;
  references: VaccinationOfContactsReference[];
};

export const VACCINATION_OF_CONTACTS_SECTION_IDS = {
  en: {
    recommended: 'recommended',
    liveVaccines: 'live-vaccines',
    varicellaPrecautions: 'varicella-precautions',
    rotavirus: 'rotavirus',
    influenza: 'influenza',
    references: 'references',
  },
  ar: {
    recommended: 'recommended-ar',
    liveVaccines: 'live-vaccines-ar',
    varicellaPrecautions: 'varicella-precautions-ar',
    rotavirus: 'rotavirus-ar',
    influenza: 'influenza-ar',
    references: 'references-ar',
  },
} as const;

export const VACCINATION_OF_CONTACTS_EN_TOC = [
  { id: VACCINATION_OF_CONTACTS_SECTION_IDS.en.recommended, label: 'Recommended vaccines' },
  { id: VACCINATION_OF_CONTACTS_SECTION_IDS.en.liveVaccines, label: 'Live MMR, varicella & rotavirus' },
  { id: VACCINATION_OF_CONTACTS_SECTION_IDS.en.varicellaPrecautions, label: 'Varicella precautions' },
  { id: VACCINATION_OF_CONTACTS_SECTION_IDS.en.rotavirus, label: 'Rotavirus shedding' },
  { id: VACCINATION_OF_CONTACTS_SECTION_IDS.en.influenza, label: 'Influenza vaccination' },
  { id: VACCINATION_OF_CONTACTS_SECTION_IDS.en.references, label: 'References' },
];

export const VACCINATION_OF_CONTACTS_AR_TOC = [
  { id: VACCINATION_OF_CONTACTS_SECTION_IDS.ar.recommended, label: 'اللقاحات الموصى بها' },
  { id: VACCINATION_OF_CONTACTS_SECTION_IDS.ar.liveVaccines, label: 'MMR والجدري المائي والروتافيروس الحية' },
  { id: VACCINATION_OF_CONTACTS_SECTION_IDS.ar.varicellaPrecautions, label: 'احتياطات الجدري المائي' },
  { id: VACCINATION_OF_CONTACTS_SECTION_IDS.ar.rotavirus, label: 'إفراز الروتافيروس' },
  { id: VACCINATION_OF_CONTACTS_SECTION_IDS.ar.influenza, label: 'تطعيم الإنفلونزا' },
  { id: VACCINATION_OF_CONTACTS_SECTION_IDS.ar.references, label: 'المراجع' },
];

const CDC_ALTERED =
  'https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html';

const AR_HERO_TITLE = 'تطعيم مخالطي الأشخاص ذوي المناعة المتغيرة';
const AR_HERO_LEAD =
  'ينبغي أن يكون أفراد الأسرة والمقربون من الأشخاص ذوي المناعة المتغيرة مطعّمين بالكامل للوقاية من انتقال الأمراض القابلة للوقاية بالتطعيم.';

export const VACCINATION_OF_CONTACTS_COPY: {
  en: VaccinationOfContactsCopy;
  ar: VaccinationOfContactsCopy;
} = {
  en: {
    heroTitle: 'Vaccination of contacts with persons with altered immunocompetence',
    heroLead:
      'Household and close contacts of persons with altered immunocompetence should be fully vaccinated to prevent transmission of vaccine-preventable diseases.',
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    backLabel: '← Special Populations',
    sections: [
      {
        id: VACCINATION_OF_CONTACTS_SECTION_IDS.en.recommended,
        title: 'Recommended vaccines for contacts',
        icon: '💉',
        paragraphs: [
          'Household contacts and other close contacts of persons with altered immunocompetence should receive all age- and exposure-appropriate vaccines, with the exception of smallpox vaccine. Receipt of vaccines will prevent the vaccine-preventable disease, so there can be no potential transmission to the contact with altered immunocompetence.',
        ],
      },
      {
        id: VACCINATION_OF_CONTACTS_SECTION_IDS.en.liveVaccines,
        title: 'Live MMR, varicella, and rotavirus vaccines',
        icon: '🦠',
        paragraphs: [
          'The live MMR, varicella, and rotavirus vaccines should be administered to susceptible household contacts and other close contacts of immunocompromised patients when indicated.',
        ],
      },
      {
        id: VACCINATION_OF_CONTACTS_SECTION_IDS.en.varicellaPrecautions,
        title: 'Precautions after varicella vaccination',
        icon: '⚠️',
        paragraphs: [
          'No specific precautions are needed unless the varicella vaccine recipient has a rash after vaccination, in which case direct contact with susceptible household contacts with altered immunocompetence should be avoided until the rash resolves.',
        ],
      },
      {
        id: VACCINATION_OF_CONTACTS_SECTION_IDS.en.rotavirus,
        title: 'Rotavirus vaccine shedding',
        icon: '🧼',
        paragraphs: [
          'All members of the household should wash their hands after changing the diaper of an infant who received rotavirus vaccine. This minimizes rotavirus transmission, as shedding may occur up to one month after the last dose.',
        ],
      },
      {
        id: VACCINATION_OF_CONTACTS_SECTION_IDS.en.influenza,
        title: 'Influenza vaccination',
        icon: '🌡️',
        paragraphs: [
          'Household and other close contacts of persons with altered immunocompetence should receive annual influenza vaccination.',
        ],
      },
    ],
    referencesTitle: 'References',
    references: [
      {
        citation:
          'CDC — Altered immunocompetence: immunization best practices for health care providers.',
        href: CDC_ALTERED,
      },
    ],
  },
  ar: {
    heroTitle: AR_HERO_TITLE,
    heroLead: AR_HERO_LEAD,
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    backLabel: '← الفئات الخاصة',
    sections: [
      {
        id: VACCINATION_OF_CONTACTS_SECTION_IDS.ar.recommended,
        title: 'اللقاحات الموصى بها للمخالطين',
        icon: '💉',
        paragraphs: [
          'ينبغي أن يتلقى أفراد الأسرة والمقربون الآخرون من الأشخاص ذوي المناعة المتغيرة جميع اللقاحات المناسبة للعمر والتعرض، باستثناء لقاح الجدري. يمنع تلقي اللقاحات الإصابة بالأمراض القابلة للوقاية بالتطعيم، فلا يمكن إذن أن يحدث انتقال محتمل إلى الشخص ذي المناعة المتغيرة.',
        ],
      },
      {
        id: VACCINATION_OF_CONTACTS_SECTION_IDS.ar.liveVaccines,
        title: 'لقاحات MMR والجدري المائي والروتافيروس الحية',
        icon: '🦠',
        paragraphs: [
          'ينبغي إعطاء لقاحات MMR والجدري المائي والروتافيروس الحية لأفراد الأسرة غير المُحصّنين وغيرهم من المقربين من المرضى ذوي المناعة الضعيفة عندما يكون ذلك مُشارًا إليه.',
        ],
      },
      {
        id: VACCINATION_OF_CONTACTS_SECTION_IDS.ar.varicellaPrecautions,
        title: 'احتياطات بعد تطعيم الجدري المائي',
        icon: '⚠️',
        paragraphs: [
          'لا حاجة لاحتياطات محددة ما لم يُصب مُتلقّي لقاح الجدري المائي بطفح بعد التطعيم، وفي هذه الحالة ينبغي تجنّب الاتصال المباشر مع أفراد الأسرة غير المُحصّنين ذوي المناعة المتغيرة حتى يزول الطفح.',
        ],
      },
      {
        id: VACCINATION_OF_CONTACTS_SECTION_IDS.ar.rotavirus,
        title: 'إفراز لقاح الروتافيروس',
        icon: '🧼',
        paragraphs: [
          'ينبغي على جميع أفراد الأسرة غسل أيديهم بعد تغيير حفاضة رضيع تلقّى لقاح الروتافيروس. يقلّل ذلك من انتقال الروتافيروس، إذ قد يحدث الإفراز حتى شهر واحد بعد آخر جرعة.',
        ],
      },
      {
        id: VACCINATION_OF_CONTACTS_SECTION_IDS.ar.influenza,
        title: 'تطعيم الإنفلونزا',
        icon: '🌡️',
        paragraphs: [
          'ينبغي أن يتلقى أفراد الأسرة والمقربون الآخرون من الأشخاص ذوي المناعة المتغيرة تطعيم الإنفلونزا سنويًا.',
        ],
      },
    ],
    referencesTitle: 'المراجع',
    references: [
      {
        citation:
          'CDC — Altered immunocompetence: immunization best practices for health care providers.',
        href: CDC_ALTERED,
      },
    ],
  },
};
