export type AnaesthesiaParagraphPart = { text: string; bold?: boolean };

export type AnaesthesiaParagraph = string | { parts: AnaesthesiaParagraphPart[] };

export type AnaesthesiaSection = {
  id: string;
  title: string;
  icon: string;
  paragraphs: AnaesthesiaParagraph[];
};

export type AnaesthesiaReference = {
  citation: string;
  href: string;
};

export type AnaesthesiaCopy = {
  heroTitle: string;
  heroLead: string;
  arHeroTitle: string;
  arHeroLead: string;
  sections: AnaesthesiaSection[];
  referencesTitle: string;
  references: AnaesthesiaReference[];
};

export const ANAESTHESIA_SECTION_IDS = {
  en: {
    generalPrinciples: 'general-principles',
    postVaccination: 'post-vaccination',
    duringProcedures: 'during-procedures',
    timing: 'timing',
    bloodProducts: 'blood-products',
  },
  ar: {
    generalPrinciples: 'general-principles-ar',
    postVaccination: 'post-vaccination-ar',
    duringProcedures: 'during-procedures-ar',
    timing: 'timing-ar',
    bloodProducts: 'blood-products-ar',
  },
} as const;

export const ANAESTHESIA_EN_TOC = [
  { id: ANAESTHESIA_SECTION_IDS.en.generalPrinciples, label: 'General principles' },
  { id: ANAESTHESIA_SECTION_IDS.en.postVaccination, label: 'Post-vaccination considerations' },
  { id: ANAESTHESIA_SECTION_IDS.en.duringProcedures, label: 'Vaccination during procedures' },
  { id: ANAESTHESIA_SECTION_IDS.en.timing, label: 'Timing recommendations' },
  { id: ANAESTHESIA_SECTION_IDS.en.bloodProducts, label: 'Blood products during surgery' },
];

export const ANAESTHESIA_AR_TOC = [
  { id: ANAESTHESIA_SECTION_IDS.ar.generalPrinciples, label: 'المبادئ العامة' },
  { id: ANAESTHESIA_SECTION_IDS.ar.postVaccination, label: 'اعتبارات ما بعد التطعيم' },
  { id: ANAESTHESIA_SECTION_IDS.ar.duringProcedures, label: 'التطعيم أثناء الإجراءات' },
  { id: ANAESTHESIA_SECTION_IDS.ar.timing, label: 'توصيات التوقيت' },
  { id: ANAESTHESIA_SECTION_IDS.ar.bloodProducts, label: 'منتجات الدم أثناء الجراحة' },
];

const REFERENCE_URL =
  'https://immunisationhandbook.health.gov.au/contents/vaccination-for-special-risk-groups/vaccination-before-or-after-anaesthesia-or-surgery';

const ANAESTHESIA_REFERENCES: AnaesthesiaReference[] = [
  {
    citation: 'Australian Immunisation Handbook — Vaccination before or after anaesthesia or surgery.',
    href: REFERENCE_URL,
  },
];

const AR_HERO_TITLE = 'قبل أو بعد التخدير أو الجراحة';
const AR_HERO_LEAD =
  'الجراحة الحديثة أو المقررة ليست مانعًا للتطعيم — والتطعيم ليس مانعًا للجراحة.';

export const ANAESTHESIA_COPY: { en: AnaesthesiaCopy; ar: AnaesthesiaCopy } = {
  en: {
    heroTitle: 'Before or after anaesthesia or surgery',
    heroLead:
      'Recent or upcoming surgery is not a contraindication to vaccination — and vaccination is not a contraindication to surgery.',
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    sections: [
      {
        id: ANAESTHESIA_SECTION_IDS.en.generalPrinciples,
        title: 'General principles',
        icon: '✓',
        paragraphs: [
          'Recent or upcoming surgery is not a contraindication to vaccination. Vaccination is also not a contraindication to surgery.',
        ],
      },
      {
        id: ANAESTHESIA_SECTION_IDS.en.postVaccination,
        title: 'Post-vaccination considerations',
        icon: '🌡️',
        paragraphs: [
          'There is no evidence of adverse outcomes related to anaesthesia and surgery in recently vaccinated children. However, the systemic effects of recent vaccination, such as fever and malaise, may be confused with similar symptoms that may arise in the post-operative period.',
        ],
      },
      {
        id: ANAESTHESIA_SECTION_IDS.en.duringProcedures,
        title: 'Vaccination during procedures',
        icon: '💉',
        paragraphs: [
          'A person in a special risk group can receive vaccines as per the routine schedule, or electively during a procedure, if the appropriate vaccine delivery safety mechanisms are in place.',
        ],
      },
      {
        id: ANAESTHESIA_SECTION_IDS.en.timing,
        title: 'Timing recommendations',
        icon: '📅',
        paragraphs: [
          {
            parts: [
              {
                text: 'If elective surgery and anaesthesia are to be postponed after vaccination, some guidelines recommend waiting for ',
              },
              { text: '1 week', bold: true },
              { text: ' after receiving an inactive vaccine and for ' },
              { text: '3 weeks', bold: true },
              { text: ' after receiving a live attenuated viral vaccine in children. Defer routine vaccines for ' },
              { text: '1 week', bold: true },
              { text: ' after surgery.' },
            ],
          },
        ],
      },
      {
        id: ANAESTHESIA_SECTION_IDS.en.bloodProducts,
        title: 'Blood products during surgery',
        icon: '🩸',
        paragraphs: [
          'A person who receives any blood products during surgery will need to delay some vaccinations.',
        ],
      },
    ],
    referencesTitle: 'References',
    references: ANAESTHESIA_REFERENCES,
  },
  ar: {
    heroTitle: AR_HERO_TITLE,
    heroLead: AR_HERO_LEAD,
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    sections: [
      {
        id: ANAESTHESIA_SECTION_IDS.ar.generalPrinciples,
        title: 'المبادئ العامة',
        icon: '✓',
        paragraphs: [
          'الجراحة الحديثة أو المقررة ليست مانعًا للتطعيم. كما أن التطعيم ليس مانعًا للجراحة.',
        ],
      },
      {
        id: ANAESTHESIA_SECTION_IDS.ar.postVaccination,
        title: 'اعتبارات ما بعد التطعيم',
        icon: '🌡️',
        paragraphs: [
          'لا توجد أدلة على نتائج سلبية مرتبطة بالتخدير والجراحة لدى الأطفال الذين تلقوا التطعيم مؤخرًا. ومع ذلك، قد تُختلَط التأثيرات الجهازية للتطعيم الحديث، مثل الحمى والتوعك، بأعراض مشابهة قد تظهر في فترة ما بعد الجراحة.',
        ],
      },
      {
        id: ANAESTHESIA_SECTION_IDS.ar.duringProcedures,
        title: 'التطعيم أثناء الإجراءات',
        icon: '💉',
        paragraphs: [
          'يمكن لشخص ينتمي إلى فئة عالية الخطورة أن يتلقى اللقاحات وفق الجدول الروتيني، أو أثناء إجراء طبي عند الحاجة، إذا كانت آليات سلامة إعطاء اللقاح المناسبة متوفرة.',
        ],
      },
      {
        id: ANAESTHESIA_SECTION_IDS.ar.timing,
        title: 'توصيات التوقيت',
        icon: '📅',
        paragraphs: [
          {
            parts: [
              {
                text: 'إذا كان من المقرر تأجيل الجراحة الاختيارية والتخدير بعد التطعيم، توصي بعض الإرشادات بالانتظار ',
              },
              { text: 'أسبوعًا واحدًا', bold: true },
              { text: ' بعد تلقي لقاح غير حي، و' },
              { text: '3 أسابيع', bold: true },
              { text: ' بعد تلقي لقاح فيروسي حي موهَّن لدى الأطفال. يُؤجَّل التطعيم الروتيني ' },
              { text: 'أسبوعًا واحدًا', bold: true },
              { text: ' بعد الجراحة.' },
            ],
          },
        ],
      },
      {
        id: ANAESTHESIA_SECTION_IDS.ar.bloodProducts,
        title: 'منتجات الدم أثناء الجراحة',
        icon: '🩸',
        paragraphs: [
          'من يتلقى أي منتجات دموية أثناء الجراحة سيحتاج إلى تأجيل بعض التطعيمات.',
        ],
      },
    ],
    referencesTitle: 'المراجع',
    references: ANAESTHESIA_REFERENCES,
  },
};
