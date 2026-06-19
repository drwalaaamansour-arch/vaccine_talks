export type CochlearParagraphPart = { text: string; bold?: boolean };
export type CochlearParagraph = string | { parts: CochlearParagraphPart[] };

export type CochlearSection = {
  id: string;
  title: string;
  icon: string;
  variant?: 'takeaway';
  paragraphs?: CochlearParagraph[];
  listItems?: CochlearParagraph[];
};

export type CochlearReference = { citation: string; href: string };

export type CochlearCopy = {
  heroTitle: string;
  heroLead: string;
  arHeroTitle: string;
  arHeroLead: string;
  sections: CochlearSection[];
  pdfTitle: string;
  referencesTitle: string;
  references: CochlearReference[];
};

export const COCHLEAR_SECTION_IDS = {
  en: {
    overview: 'overview',
    causes: 'causes',
    hearingLoss: 'hearing-loss',
    pneumococcal: 'pneumococcal',
    hib: 'hib',
    meningococcal: 'meningococcal',
    keyPoints: 'key-points',
  },
  ar: {
    overview: 'overview-ar',
    causes: 'causes-ar',
    hearingLoss: 'hearing-loss-ar',
    pneumococcal: 'pneumococcal-ar',
    hib: 'hib-ar',
    meningococcal: 'meningococcal-ar',
    keyPoints: 'key-points-ar',
  },
} as const;

export const COCHLEAR_EN_TOC = [
  { id: COCHLEAR_SECTION_IDS.en.overview, label: 'Overview' },
  { id: COCHLEAR_SECTION_IDS.en.causes, label: 'Leading causes' },
  { id: COCHLEAR_SECTION_IDS.en.hearingLoss, label: 'Hearing loss (general)' },
  { id: COCHLEAR_SECTION_IDS.en.pneumococcal, label: 'Pneumococcal' },
  { id: COCHLEAR_SECTION_IDS.en.hib, label: 'Hib' },
  { id: COCHLEAR_SECTION_IDS.en.meningococcal, label: 'Meningococcal' },
  { id: COCHLEAR_SECTION_IDS.en.keyPoints, label: 'Key points' },
];

export const COCHLEAR_AR_TOC = [
  { id: COCHLEAR_SECTION_IDS.ar.overview, label: 'نظرة عامة' },
  { id: COCHLEAR_SECTION_IDS.ar.causes, label: 'الأسباب الرئيسية' },
  { id: COCHLEAR_SECTION_IDS.ar.hearingLoss, label: 'فقدان السمع (عام)' },
  { id: COCHLEAR_SECTION_IDS.ar.pneumococcal, label: 'المكورات الرئوية' },
  { id: COCHLEAR_SECTION_IDS.ar.hib, label: 'Hib' },
  { id: COCHLEAR_SECTION_IDS.ar.meningococcal, label: 'المكورات السحائية' },
  { id: COCHLEAR_SECTION_IDS.ar.keyPoints, label: 'نقاط أساسية' },
];

const COCHLEAR_REFERENCES: CochlearReference[] = [
  {
    citation: 'CDC — Cochlear Implants and Vaccine Recommendations (For Everyone).',
    href: 'https://www.cdc.gov/pneumococcal/vaccines/cochlear-implants.html',
  },
  {
    citation: 'CDC — Vaccines for People with Cochlear Implants (Health Care Providers).',
    href: 'https://www.cdc.gov/pneumococcal/hcp/vaccine-recommendations/cochlear-implants.html',
  },
];

const AR_HERO_TITLE = 'زراعة القوقعة والتطعيم';
const AR_HERO_LEAD =
  'إرشادات CDC للوقاية من التهاب السحايا لدى مستخدمي زراعة القوقعة — التوقيت، أنواع اللقاحات، والتوصيات حسب العمر.';

export const COCHLEAR_COPY: { en: CochlearCopy; ar: CochlearCopy } = {
  en: {
    heroTitle: 'Cochlear implants and vaccination',
    heroLead:
      'CDC guidance on preventing meningitis in cochlear implant users — timing, vaccine types, and age-specific recommendations.',
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    sections: [
      {
        id: COCHLEAR_SECTION_IDS.en.overview,
        title: 'Overview',
        icon: '📋',
        paragraphs: [
          'Meningitis is an inflammation of the lining of the brain and spinal cord. People with cochlear implants are at increased risk for certain types of bacterial meningitis. Vaccines can help prevent this serious infection. The CDC provides specific recommendations for people with cochlear implants to ensure optimal protection.',
        ],
      },
      {
        id: COCHLEAR_SECTION_IDS.en.causes,
        title: 'Leading causes of bacterial meningitis',
        icon: '🦠',
        listItems: [
          'Haemophilus influenzae',
          'Neisseria meningitidis (meningococcal meningitis)',
          'Streptococcus pneumoniae (pneumococcal meningitis)',
        ],
      },
      {
        id: COCHLEAR_SECTION_IDS.en.hearingLoss,
        title: 'General vaccination for hearing loss',
        icon: '👂',
        paragraphs: [
          'The CDC does not have special vaccination recommendations for people with hearing loss. Schedules are the same as for those without hearing loss, based on age and health conditions.',
        ],
      },
      {
        id: COCHLEAR_SECTION_IDS.en.pneumococcal,
        title: 'Pneumococcal vaccination',
        icon: '💉',
        listItems: [
          {
            parts: [
              { text: 'Children younger than 2 years with cochlear implants:', bold: true },
              { text: ' Should receive PCV13 or PCV15 as per the Childhood Immunization Schedule.' },
            ],
          },
          {
            parts: [
              { text: 'Older children who missed infant vaccinations:', bold: true },
              { text: ' May need PCV13 or PCV15.' },
            ],
          },
          {
            parts: [
              { text: 'Children 2 years or older:', bold: true },
              { text: ' Should also receive PPSV23.' },
            ],
          },
          {
            parts: [
              { text: 'Timing:', bold: true },
              {
                text: ' All recommended pneumococcal shots should be given at least 2 weeks before cochlear implant surgery. No extra shots if already up to date.',
              },
            ],
          },
          {
            parts: [
              { text: 'Adults with cochlear implants:', bold: true },
              {
                text: ' If never vaccinated, receive one shot of PCV15 or PCV20; if PCV15 is used, follow with PPSV23. Give shots at least 2 weeks before surgery.',
              },
            ],
          },
          {
            parts: [
              { text: 'History of pneumococcal meningitis:', bold: true },
              { text: ' Follow CDC pneumococcal vaccination guidance.' },
            ],
          },
        ],
      },
      {
        id: COCHLEAR_SECTION_IDS.en.hib,
        title: 'Haemophilus influenzae type b (Hib)',
        icon: '🛡️',
        listItems: [
          {
            parts: [
              { text: 'Children younger than 5 years:', bold: true },
              { text: ' Receive Hib vaccines per the Childhood Immunization Schedule.' },
            ],
          },
          {
            parts: [
              { text: 'Timing:', bold: true },
              { text: ' Hib vaccinations should be up to date at least 2 weeks before surgery.' },
            ],
          },
          {
            parts: [
              { text: 'Children with past Hib meningitis:', bold: true },
              {
                text: ' May need additional shots depending on current age if meningitis occurred before age 2; not needed if at age 2 or older.',
              },
            ],
          },
          {
            parts: [
              { text: 'Older children and adults:', bold: true },
              {
                text: ' CDC does not recommend Hib vaccination specifically for cochlear implants in these groups — data do not support increased risk.',
              },
            ],
          },
        ],
      },
      {
        id: COCHLEAR_SECTION_IDS.en.meningococcal,
        title: 'Meningococcal vaccination',
        icon: '💉',
        listItems: [
          {
            parts: [
              { text: 'Preteens and teens:', bold: true },
              {
                text: ' Should receive MenACWY per the Preteen/Teen Immunization Schedule; teens may also receive MenB.',
              },
            ],
          },
          {
            parts: [
              { text: 'Younger children and adults:', bold: true },
              {
                text: ' CDC does not recommend meningococcal vaccination specifically for cochlear implants in these groups.',
              },
            ],
          },
        ],
      },
      {
        id: COCHLEAR_SECTION_IDS.en.keyPoints,
        title: 'Key points',
        icon: '⭐',
        variant: 'takeaway',
        listItems: [
          'Vaccination is crucial for people with cochlear implants to prevent meningitis.',
          'Recommended vaccines include pneumococcal, Hib (young children), and meningococcal (preteens/teens).',
          'Administer vaccines at least two weeks before cochlear implant surgery when possible.',
          'No additional vaccines are needed for hearing loss alone unless indicated by age or health status.',
        ],
      },
    ],
    pdfTitle: 'Cochlear implants — reference PDF',
    referencesTitle: 'References',
    references: COCHLEAR_REFERENCES,
  },
  ar: {
    heroTitle: AR_HERO_TITLE,
    heroLead: AR_HERO_LEAD,
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    sections: [
      {
        id: COCHLEAR_SECTION_IDS.ar.overview,
        title: 'نظرة عامة',
        icon: '📋',
        paragraphs: [
          'التهاب السحايا هو التهاب في بطانة الدماغ والحبل النخاعي. الأشخاص الذين لديهم زراعة للقوقعة أكثر عرضة لبعض أنواع التهاب السحايا البكتيري. يمكن للقاحات المساعدة في الوقاية من هذا العدوى الخطير. تقدم CDC توصيات محددة لمن لديهم زراعة للقوقعة لضمان أفضل حماية.',
        ],
      },
      {
        id: COCHLEAR_SECTION_IDS.ar.causes,
        title: 'الأسباب الرئيسية لالتهاب السحايا البكتيري',
        icon: '🦠',
        listItems: [
          'Haemophilus influenzae',
          'Neisseria meningitidis (التهاب السحايا السحائي)',
          'Streptococcus pneumoniae (التهاب السحايا الرئوي)',
        ],
      },
      {
        id: COCHLEAR_SECTION_IDS.ar.hearingLoss,
        title: 'التطعيم العام لفقدان السمع',
        icon: '👂',
        paragraphs: [
          'لا تقدم CDC توصيات تطعيم خاصة للأشخاص الذين يعانون من فقدان السمع. الجداول هي نفسها لمن لا يعانون من فقدان السمع، بناءً على العمر والحالة الصحية.',
        ],
      },
      {
        id: COCHLEAR_SECTION_IDS.ar.pneumococcal,
        title: 'تطعيم المكورات الرئوية',
        icon: '💉',
        listItems: [
          {
            parts: [
              { text: 'الأطفال دون سن 2 سنة ولديهم زراعة للقوقعة:', bold: true },
              { text: ' يجب أن يتلقوا PCV13 أو PCV15 وفق جدول تطعيم الطفولة.' },
            ],
          },
          {
            parts: [
              { text: 'الأطفال الأكبر سنًا الذين فاتتهم تطعيمات الرضاعة:', bold: true },
              { text: ' قد يحتاجون PCV13 أو PCV15.' },
            ],
          },
          {
            parts: [
              { text: 'الأطفال بعمر سنتين أو أكبر:', bold: true },
              { text: ' يجب أن يتلقوا أيضًا PPSV23.' },
            ],
          },
          {
            parts: [
              { text: 'التوقيت:', bold: true },
              {
                text: ' يجب إعطاء جميع جرعات المكورات الرئوية الموصى بها قبل جراحة زراعة القوقعة بأسبوعين على الأقل. لا حاجة لجرعات إضافية إذا كانت التطعيمات محدثة.',
              },
            ],
          },
          {
            parts: [
              { text: 'البالغون مع زراعة للقوقعة:', bold: true },
              {
                text: ' إذا لم يُطعَّموا من قبل، يتلقون جرعة واحدة من PCV15 أو PCV20؛ وإذا استُخدم PCV15، يُتابع بـ PPSV23. تُعطى الجرعات قبل الجراحة بأسبوعين على الأقل.',
              },
            ],
          },
          {
            parts: [
              { text: 'تاريخ التهاب السحايا الرئوي:', bold: true },
              { text: ' اتبع إرشادات CDC لتطعيم المكورات الرئوية.' },
            ],
          },
        ],
      },
      {
        id: COCHLEAR_SECTION_IDS.ar.hib,
        title: 'Haemophilus influenzae type b (Hib)',
        icon: '🛡️',
        listItems: [
          {
            parts: [
              { text: 'الأطفال دون سن 5 سنوات:', bold: true },
              { text: ' يتلقون لقاحات Hib وفق جدول تطعيم الطفولة.' },
            ],
          },
          {
            parts: [
              { text: 'التوقيت:', bold: true },
              { text: ' يجب أن تكون تطعيمات Hib محدثة قبل الجراحة بأسبوعين على الأقل.' },
            ],
          },
          {
            parts: [
              { text: 'الأطفال الذين أصيبوا سابقًا بالتهاب سحايا Hib:', bold: true },
              {
                text: ' قد يحتاجون جرعات إضافية حسب العمر الحالي إذا حدث التهاب السحايا قبل سن 2؛ ولا يلزم ذلك إذا كان العمر 2 سنة أو أكبر.',
              },
            ],
          },
          {
            parts: [
              { text: 'الأطفال الأكبر سنًا والبالغون:', bold: true },
              {
                text: ' لا توصي CDC بتطعيم Hib خصيصًا لزراعة القوقعة في هذه الفئات — البيانات لا تدعم زيادة الخطر.',
              },
            ],
          },
        ],
      },
      {
        id: COCHLEAR_SECTION_IDS.ar.meningococcal,
        title: 'تطعيم المكورات السحائية',
        icon: '💉',
        listItems: [
          {
            parts: [
              { text: 'مراهقو ما قبل البلوغ والمراهقون:', bold: true },
              {
                text: ' يجب أن يتلقوا MenACWY وفق جدول تطعيم ما قبل/المراهقة؛ وقد يتلقى المراهقون MenB أيضًا.',
              },
            ],
          },
          {
            parts: [
              { text: 'الأطفال الأصغر سنًا والبالغون:', bold: true },
              {
                text: ' لا توصي CDC بتطعيم المكورات السحائية خصيصًا لزراعة القوقعة في هذه الفئات.',
              },
            ],
          },
        ],
      },
      {
        id: COCHLEAR_SECTION_IDS.ar.keyPoints,
        title: 'نقاط أساسية',
        icon: '⭐',
        variant: 'takeaway',
        listItems: [
          'التطعيم ضروري لمن لديهم زراعة للقوقعة للوقاية من التهاب السحايا.',
          'تشمل اللقاحات الموصى بها المكورات الرئوية وHib (للأطفال الصغار) والمكورات السحائية (لمراهقي ما قبل البلوغ/المراهقين).',
          'يُفضَّل إعطاء اللقاحات قبل جراحة زراعة القوقعة بأسبوعين على الأقل عند الإمكان.',
          'لا حاجة للقاحات إضافية لفقدان السمع وحده ما لم يُشِر العمر أو الحالة الصحية إلى ذلك.',
        ],
      },
    ],
    pdfTitle: 'زراعة القوقعة — PDF مرجعي',
    referencesTitle: 'المراجع',
    references: COCHLEAR_REFERENCES,
  },
};
