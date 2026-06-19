import type { HcpGuideNavLink, HcpGuideReference, HcpGuideTocItem } from '@/components/hcp-guide/types';

export type AspleniaSection = {
  id: string;
  title: string;
  icon: string;
  variant?: 'takeaway';
  paragraphs: string[];
};

export type AspleniaCopy = {
  arHeroTitle: string;
  arHeroLead: string;
  sections: AspleniaSection[];
  subnavTitle: string;
  subnavLinks: HcpGuideNavLink[];
  pdfTitle: string;
  referencesTitle: string;
  references: HcpGuideReference[];
};

export const ASPLENIA_SECTION_IDS = {
  en: {
    overview: 'overview',
    recommendedVaccines: 'recommended-vaccines',
    influenzaNote: 'influenza-note',
    pdf: 'pdf',
    references: 'references',
  },
  ar: {
    overview: 'overview-ar',
    recommendedVaccines: 'recommended-vaccines-ar',
    influenzaNote: 'influenza-note-ar',
    pdf: 'pdf-ar',
    references: 'references-ar',
  },
} as const;

export const ASPLENIA_EN_TOC: HcpGuideTocItem[] = [
  { id: ASPLENIA_SECTION_IDS.en.overview, label: 'Overview' },
  { id: ASPLENIA_SECTION_IDS.en.recommendedVaccines, label: 'Recommended vaccines' },
  { id: ASPLENIA_SECTION_IDS.en.influenzaNote, label: 'Influenza' },
  { id: ASPLENIA_SECTION_IDS.en.pdf, label: 'Reference PDF' },
];

export const ASPLENIA_AR_TOC: HcpGuideTocItem[] = [
  { id: ASPLENIA_SECTION_IDS.ar.overview, label: 'نظرة عامة' },
  { id: ASPLENIA_SECTION_IDS.ar.recommendedVaccines, label: 'اللقاحات الموصى بها' },
  { id: ASPLENIA_SECTION_IDS.ar.influenzaNote, label: 'الإنفلونزا' },
  { id: ASPLENIA_SECTION_IDS.ar.pdf, label: 'ملف PDF مرجعي' },
];

const REFERENCES: HcpGuideReference[] = [
  {
    citation: 'Australian Immunisation Handbook — People with asplenia and hyposplenia.',
    href: 'https://immunisationhandbook.health.gov.au/contents/vaccination-for-special-risk-groups/vaccination-for-people-who-are-immunocompromised/people-with-asplenia-and-hyposplenia',
  },
  {
    citation: 'CDC — Altered immunocompetence: immunization best practices.',
    href: 'https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html',
  },
];

const VACCINE_LINKS_EN: HcpGuideNavLink[] = [
  {
    href: '/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia/pneumococcal',
    label: 'Pneumococcal',
    emoji: '💉',
  },
  {
    href: '/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia/meningococcal',
    label: 'Meningococcal',
    emoji: '💉',
  },
  {
    href: '/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia/hib',
    label: 'Hib',
    emoji: '💉',
  },
];

const VACCINE_LINKS_AR: HcpGuideNavLink[] = [
  {
    href: '/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia/pneumococcal',
    label: 'المكورات الرئوية',
    emoji: '💉',
  },
  {
    href: '/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia/meningococcal',
    label: 'المكورات السحائية',
    emoji: '💉',
  },
  {
    href: '/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia/hib',
    label: 'Haemophilus influenzae نوع b',
    emoji: '💉',
  },
];

export const ASPLENIA_COPY: { en: AspleniaCopy; ar: AspleniaCopy } = {
  en: {
    arHeroTitle: '',
    arHeroLead: '',
    sections: [
      {
        id: ASPLENIA_SECTION_IDS.en.overview,
        title: 'Overview',
        icon: '📋',
        paragraphs: [
          'Asplenia, whether anatomical or functional, significantly increases susceptibility to infections from encapsulated bacteria. Without proper splenic function, the body struggles to clear these pathogens, making prompt vaccination and preventive measures essential.',
          'Persons with anatomic asplenia (e.g., surgical removal or congenital absence of the spleen) or functional asplenia (as occurs in persons with sickle cell disease) are at increased risk for infection by encapsulated bacteria, especially S. pneumoniae (pneumococcus), N. meningitidis (meningococcus), and Hib. Pneumococcal, meningococcal, and Hib vaccinations should be administered at least 14 days before elective splenectomy, if possible. If the vaccinations are not administered before surgery, they should be administered after the procedure as soon as the patient\'s condition is stable.',
          'The risk of infection after splenectomy is lifelong. However, the immediate post-splenectomy years pose the greatest risk, with nearly 30% of infections occurring within the first year, and 50% within the first 2 years after splenectomy.',
          'Patients with non-surgical asplenia or hyposplenia should receive the recommended vaccinations as soon as the impaired splenic function is recognised, according to the age-appropriate schedule.',
        ],
      },
      {
        id: ASPLENIA_SECTION_IDS.en.recommendedVaccines,
        title: 'The recommended vaccines',
        icon: '💉',
        paragraphs: [],
      },
      {
        id: ASPLENIA_SECTION_IDS.en.influenzaNote,
        title: 'Influenza',
        icon: '🌡️',
        variant: 'takeaway',
        paragraphs: ['N.B.: flu vaccine is recommended annually'],
      },
    ],
    subnavTitle: 'Vaccine-specific guidance',
    subnavLinks: VACCINE_LINKS_EN,
    pdfTitle: 'Anatomic or functional asplenia — PDF',
    referencesTitle: 'References',
    references: REFERENCES,
  },
  ar: {
    arHeroTitle: 'نقص الطحال التشريحي أو الوظيفي',
    arHeroLead:
      'إرشادات التطعيم للأشخاص الذين يعانون من نقص الطحال التشريحي أو الوظيفي — البكتيريا المغلفة، التوقيت قبل استئصال الطحال، وخطر العدوى مدى الحياة.',
    sections: [
      {
        id: ASPLENIA_SECTION_IDS.ar.overview,
        title: 'نظرة عامة',
        icon: '📋',
        paragraphs: [
          'يزيد نقص الطحال، سواء كان تشريحيًا أو وظيفيًا، بشكل كبير من قابلية الإصابة بعدوى البكتيريا المغلفة. عند ضعف وظيفة الطحال، يصبح الجسم أقل قدرة على التخلص من هذه المسببات، ما يجعل التطعيم في الوقت المناسب والإجراءات الوقائية أمرًا ضروريًا.',
          'الأشخاص الذين يعانون من نقص الطحال التشريحي (مثل الاستئصال الجراحي أو الغياب الخلقي للطحال) أو نقص الطحال الوظيفي (كما يحدث في مرضى فقر الدم المنجلي) أكثر عرضة للإصابة بعدوى البكتيريا المغلفة، ولا سيما المكورات الرئوية (Streptococcus pneumoniae)، والمكورات السحائية (Neisseria meningitidis)، وHaemophilus influenzae نوع b. يُفضّل إعطاء لقاحات المكورات الرئوية والمكورات السحائية وHib قبل استئصال الطحال الاختياري بـ 14 يومًا على الأقل إن أمكن. وإذا لم تُعطَ قبل الجراحة، فيجب إعطاؤها بعد العملية فور استقرار حالة المريض.',
          'خطر العدوى بعد استئصال الطحال يستمر مدى الحياة. غير أن السنوات الأولى بعد الاستئصال تحمل أعلى خطر، إذ تحدث نحو 30% من العدوى خلال السنة الأولى، و50% خلال أول عامين.',
          'يجب على المرضى الذين يعانون من نقص الطحال غير الجراحي أو نقص الطحال الجزئي (hyposplenia) الحصول على اللقاحات الموصى بها فور التعرف على ضعف وظيفة الطحال، وفق الجدول المناسب للعمر.',
        ],
      },
      {
        id: ASPLENIA_SECTION_IDS.ar.recommendedVaccines,
        title: 'اللقاحات الموصى بها',
        icon: '💉',
        paragraphs: [],
      },
      {
        id: ASPLENIA_SECTION_IDS.ar.influenzaNote,
        title: 'الإنفلونزا',
        icon: '🌡️',
        variant: 'takeaway',
        paragraphs: ['ملاحظة: يُوصى بلقاح الإنفلونزا سنويًا'],
      },
    ],
    subnavTitle: 'إرشادات خاصة بكل لقاح',
    subnavLinks: VACCINE_LINKS_AR,
    pdfTitle: 'نقص الطحال التشريحي أو الوظيفي — PDF',
    referencesTitle: 'المراجع',
    references: REFERENCES,
  },
};
