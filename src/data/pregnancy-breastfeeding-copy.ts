export type PregnancyBlock =
  | { type: 'p'; text: string; mb?: string | number }
  | { type: 'ul'; items: string[] };

export type PregnancySection = {
  id: string;
  title: string;
  accent: 'sage' | 'slate';
  blocks: PregnancyBlock[];
};

export type PregnancyReference = {
  citation: string;
  href: string;
};

export type PregnancyCopy = {
  heroTitle: string;
  heroLead: string;
  arHeroTitle: string;
  arHeroLead: string;
  sections: PregnancySection[];
  referencesTitle: string;
  references: PregnancyReference[];
  pdfTitles: {
    maternalSchedule: string;
    pregnancy: string;
    abrysvo: string;
    tdap: string;
  };
};

export const PREGNANCY_SECTION_IDS = {
  en: {
    overview: 'overview',
    flu: 'flu',
    tdap: 'tdap',
    rsv: 'rsv',
    liveContraindicated: 'live-contraindicated',
    mmr: 'mmr',
    varicella: 'varicella',
    conclusion: 'conclusion',
  },
  ar: {
    overview: 'overview-ar',
    flu: 'flu-ar',
    tdap: 'tdap-ar',
    rsv: 'rsv-ar',
    liveContraindicated: 'live-contraindicated-ar',
    mmr: 'mmr-ar',
    varicella: 'varicella-ar',
    conclusion: 'conclusion-ar',
  },
} as const;

export const PREGNANCY_EN_TOC = [
  { id: PREGNANCY_SECTION_IDS.en.overview, label: 'Overview' },
  { id: PREGNANCY_SECTION_IDS.en.flu, label: 'Flu vaccine' },
  { id: PREGNANCY_SECTION_IDS.en.tdap, label: 'Tdap vaccine' },
  { id: PREGNANCY_SECTION_IDS.en.rsv, label: 'RSV vaccine' },
  { id: PREGNANCY_SECTION_IDS.en.liveContraindicated, label: 'Live vaccines' },
  { id: PREGNANCY_SECTION_IDS.en.mmr, label: 'MMR vaccine' },
  { id: PREGNANCY_SECTION_IDS.en.varicella, label: 'Varicella vaccine' },
  { id: PREGNANCY_SECTION_IDS.en.conclusion, label: 'Conclusion' },
];

export const PREGNANCY_AR_TOC = [
  { id: PREGNANCY_SECTION_IDS.ar.overview, label: 'نظرة عامة' },
  { id: PREGNANCY_SECTION_IDS.ar.flu, label: 'لقاح الإنفلونزا' },
  { id: PREGNANCY_SECTION_IDS.ar.tdap, label: 'لقاح Tdap' },
  { id: PREGNANCY_SECTION_IDS.ar.rsv, label: 'لقاح RSV' },
  { id: PREGNANCY_SECTION_IDS.ar.liveContraindicated, label: 'اللقاحات الحية' },
  { id: PREGNANCY_SECTION_IDS.ar.mmr, label: 'لقاح MMR' },
  { id: PREGNANCY_SECTION_IDS.ar.varicella, label: 'لقاح الجدري المائي' },
  { id: PREGNANCY_SECTION_IDS.ar.conclusion, label: 'الخلاصة' },
];

const PREGNANCY_REFERENCES: PregnancyReference[] = [
  {
    citation: 'NHS — Vaccinations in pregnancy.',
    href: 'https://www.nhs.uk/pregnancy/keeping-well/vaccinations/',
  },
  {
    citation: 'CDC — Vaccine safety: Vaccines during and after pregnancy.',
    href: 'https://www.cdc.gov/vaccine-safety/about/pregnancy.html',
  },
  {
    citation: 'PMC3093587 — Vaccination during pregnancy (PubMed Central).',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3093587/',
  },
];

const AR_HERO_TITLE = 'الحمل';
const AR_HERO_LEAD =
  'تطعيمات قبل الحمل وأثناءه وبعده لحماية الأم وطفلها من الأمراض الخطيرة التي يمكن الوقاية منها باللقاح.';

export const PREGNANCY_COPY: { en: PregnancyCopy; ar: PregnancyCopy } = {
  en: {
    heroTitle: 'Pregnancy',
    heroLead:
      'Vaccines before, during, and after pregnancy to protect mothers and their babies from serious vaccine-preventable diseases.',
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    sections: [
      {
        id: PREGNANCY_SECTION_IDS.en.overview,
        title: 'Overview',
        accent: 'sage',
        blocks: [
          {
            type: 'p',
            text: 'Certain vaccines are safe and recommended for women before, during, and after pregnancy to help keep them and their babies healthy. The antibodies mothers develop in response to these vaccines not only protect them, but also cross the placenta and help protect their babies from serious diseases early in life. Vaccinating during pregnancy also helps protect a mother from getting a serious disease and then giving it to her newborn.',
          },
        ],
      },
      {
        id: PREGNANCY_SECTION_IDS.en.flu,
        title: 'Flu vaccine',
        accent: 'slate',
        blocks: [
          {
            type: 'p',
            text: "During pregnancy, your immune system (the body's natural defence) is weakened to protect the pregnancy. This can mean you're less able to fight off infections such as flu.",
          },
          {
            type: 'p',
            text: 'Pregnant women are more likely to get flu complications (such as pneumonia) than women who are not pregnant, and are more likely to be admitted to hospital. CDC recommends getting vaccinated during flu season, ideally by the end of October. Getting the flu vaccine during pregnancy is one of the best ways to protect yourself and your baby for several months after birth from flu-related complications.',
          },
        ],
      },
      {
        id: PREGNANCY_SECTION_IDS.en.tdap,
        title: 'Tdap vaccine',
        accent: 'sage',
        blocks: [
          {
            type: 'p',
            text: 'Pregnant women are also encouraged to get the Tdap vaccine at any time during pregnancy, but optimally between 27 and 36 weeks of each pregnancy, to protect yourself and your baby from pertussis, also known as whooping cough. This vaccine is recommended during every pregnancy, regardless of how long it has been since you previously received the Tdap vaccine.',
          },
          {
            type: 'p',
            text: 'If you did not get a Tdap vaccine during your pregnancy and have never gotten it, CDC recommends that you get the vaccine immediately after giving birth.',
            mb: 0,
          },
        ],
      },
      {
        id: PREGNANCY_SECTION_IDS.en.rsv,
        title: 'Respiratory syncytial virus (RSV) vaccine',
        accent: 'slate',
        blocks: [
          {
            type: 'p',
            text: 'Respiratory syncytial virus (RSV) is a common virus that causes coughs and colds. RSV usually gets better by itself, but it can be serious for babies.',
          },
          {
            type: 'p',
            text: 'RSV can cause serious lung infections (including pneumonia and bronchiolitis), which can make it difficult for babies to breathe and feed. These illnesses may need to be treated in hospital.',
          },
          {
            type: 'p',
            text: "When you have the RSV vaccine in pregnancy, the protection from the vaccine is passed to your baby. This means your baby is less likely to get severe RSV for the first 6 months after they're born.",
          },
          {
            type: 'p',
            text: 'You should be offered the RSV vaccine around the time of your 28-week antenatal appointment. Getting vaccinated as soon as possible from 28 weeks will provide the best protection for your baby. But it can be given later if needed, including up until you go into labour.',
            mb: 0,
          },
        ],
      },
      {
        id: PREGNANCY_SECTION_IDS.en.liveContraindicated,
        title: 'Vaccines not usually advised in pregnancy (live vaccines)',
        accent: 'sage',
        blocks: [
          {
            type: 'p',
            text: "If a vaccine uses a live version of the virus, such as the MMR vaccine, you'll usually be advised to wait until after your baby is born before you get vaccinated. Live vaccines include:",
          },
          {
            type: 'ul',
            items: [
              'BCG (vaccination against tuberculosis)',
              'MMR (measles, mumps and rubella)',
              'oral typhoid',
              'yellow fever',
            ],
          },
        ],
      },
      {
        id: PREGNANCY_SECTION_IDS.en.mmr,
        title: 'Measles-mumps-rubella (MMR) vaccine',
        accent: 'slate',
        blocks: [
          {
            type: 'p',
            text: 'Wild-type rubella infection might result in spontaneous abortion, stillbirth, and, of most concern, congenital rubella syndrome (CRS), with its hallmark characteristics of sensorineural deafness, congenital heart defects, microcephaly, learning difficulties, and eye and bone defects. Measles infection in pregnancy might result in substantial maternal morbidity, an increased abortion rate, prematurity, stillbirth, and possibly congenital malformations. The data for mumps infection are not consistent, with some studies showing a possible increased rate of spontaneous abortion.',
          },
          {
            type: 'p',
            text: 'There have been no reports of congenital malformations attributable to the MMR vaccine virus. The Centers for Disease Control and Prevention (CDC) estimated the theoretical risk to the fetus of CRS following vaccination with the rubella vaccine to be 0% to 1.6%.',
          },
          {
            type: 'p',
            text: 'In 1971, the CDC established the Vaccine in Pregnancy registry of women who had received rubella vaccines within 3 months before or after conception. By 1989 there were data on 1221 inadvertently vaccinated pregnant women. There was no evidence of an increase in fetal abnormalities or cases of CRS in the enrolled women or the 321 rubella-susceptible women; therefore, enrolment in the registry ended.',
            mb: 0,
          },
        ],
      },
      {
        id: PREGNANCY_SECTION_IDS.en.varicella,
        title: 'Varicella vaccine',
        accent: 'sage',
        blocks: [
          {
            type: 'p',
            text: 'Varicella virus infection during pregnancy is associated with a risk of congenital varicella syndrome, characterized by low birth weight, skin scarring, ophthalmologic defects, limb hypoplasia of bone and muscle, neuropathic bladder, and gastrointestinal and neurologic abnormalities.',
          },
          {
            type: 'p',
            text: 'There are no reports of congenital varicella syndrome after exposure to varicella vaccine during pregnancy. A registry was established by the manufacturer in collaboration with the CDC to monitor maternal and fetal outcomes of women who were inadvertently immunized with varicella vaccine in the 3 months before conception or at any time during pregnancy. Among the 737 women with pregnancy outcomes available, there were no patterns of defects and no infants were born with features consistent with congenital varicella syndrome among any of the women enrolled or among the seronegative women.',
            mb: 0,
          },
        ],
      },
      {
        id: PREGNANCY_SECTION_IDS.en.conclusion,
        title: 'Conclusion',
        accent: 'slate',
        blocks: [
          {
            type: 'p',
            text: 'Exposure to either live or inactive vaccines during pregnancy has not been associated with an increased risk of adverse pregnancy outcomes, and no child to date has been born with CRS or varicella syndrome following rubella or varicella vaccination of the mother anytime during pregnancy. However, despite this evidence-based information, these vaccines remain contraindicated during pregnancy, and the Public Health Agency of Canada and the ACIP continue to recommend that women avoid becoming pregnant for approximately 1 month following vaccination. They do state that if pregnant women are exposed to these vaccines or if pregnancy occurs soon after vaccination, the women should be counseled regarding the theoretical risks to the fetus and vaccination should not be a reason to consider termination of pregnancy.',
            mb: 0,
          },
        ],
      },
    ],
    referencesTitle: 'References',
    references: PREGNANCY_REFERENCES,
    pdfTitles: {
      maternalSchedule: 'Maternal immunization schedule — PDF',
      pregnancy: 'Pregnancy — PDF',
      abrysvo: 'Abrysvo during pregnancy — PDF',
      tdap: 'Tdap during pregnancy — PDF',
    },
  },
  ar: {
    heroTitle: AR_HERO_TITLE,
    heroLead: AR_HERO_LEAD,
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    sections: [
      {
        id: PREGNANCY_SECTION_IDS.ar.overview,
        title: 'نظرة عامة',
        accent: 'sage',
        blocks: [
          {
            type: 'p',
            text: 'تُعد بعض اللقاحات آمنة وموصى بها للنساء قبل الحمل وأثناءه وبعده للمساعدة في الحفاظ على صحة الأم وطفلها. الأجسام المضادة التي تطورها الأم استجابة لهذه اللقاحات لا تحميها فحسب، بل تعبر المشيمة أيضًا وتساعد في حماية طفلها من الأمراض الخطيرة في مراحل الحياة المبكرة. التطعيم أثناء الحمل يساعد أيضًا في حماية الأم من الإصابة بمرض خطير ثم نقله إلى مولودها.',
          },
        ],
      },
      {
        id: PREGNANCY_SECTION_IDS.ar.flu,
        title: 'لقاح الإنفلونزا',
        accent: 'slate',
        blocks: [
          {
            type: 'p',
            text: 'أثناء الحمل، يُضعف الجهاز المناعي (الدفاع الطبيعي للجسم) لحماية الحمل. قد يعني ذلك قدرة أقل على مقاومة العدوى مثل الإنفلونزا.',
          },
          {
            type: 'p',
            text: 'النساء الحوامل أكثر عرضة لمضاعفات الإنفلونزا (مثل الالتهاب الرئوي) مقارنةً بغير الحوامل، وأكثر عرضة للدخول إلى المستشفى. توصي CDC بالتطعيم خلال موسم الإنفلونزا، ويفضل ذلك بحلول نهاية أكتوبر. الحصول على لقاح الإنفلونزا أثناء الحمل من أفضل الطرق لحماية الأم وطفلها لعدة أشهر بعد الولادة من مضاعفات الإنفلونزا.',
          },
        ],
      },
      {
        id: PREGNANCY_SECTION_IDS.ar.tdap,
        title: 'لقاح Tdap',
        accent: 'sage',
        blocks: [
          {
            type: 'p',
            text: 'يُشجَّع أيضًا على تلقي لقاح Tdap في أي وقت أثناء الحمل، لكن الأمثل بين الأسبوع 27 و36 من كل حمل، لحماية الأم وطفلها من السعال الديكي (الشاهوق). يُوصى بهذا اللقاح في كل حمل، بغض النظر عن المدة منذ آخر جرعة Tdap.',
          },
          {
            type: 'p',
            text: 'إذا لم تحصلي على لقاح Tdap أثناء الحمل ولم تتلقَّيه من قبل، توصي CDC بتلقي اللقاح مباشرة بعد الولادة.',
            mb: 0,
          },
        ],
      },
      {
        id: PREGNANCY_SECTION_IDS.ar.rsv,
        title: 'لقاح فيروس RSV التنفسي',
        accent: 'slate',
        blocks: [
          {
            type: 'p',
            text: 'فيروس RSV فيروس شائع يسبب السعال ونزلات البرد. غالبًا ما يتحسّن من تلقاء نفسه، لكنه قد يكون خطيرًا على الرضع.',
          },
          {
            type: 'p',
            text: 'قد يسبب RSV التهابات رئوية خطيرة (بما في ذلك الالتهاب الرئوي والتهاب القصيبات)، مما يصعّب على الرضع التنفس والرضاعة. قد تتطلب هذه الحالات العلاج في المستشفى.',
          },
          {
            type: 'p',
            text: 'عند تلقي لقاح RSV أثناء الحمل، تنتقل الحماية من اللقاح إلى الطفل. يعني ذلك أن الطفل أقل عرضة للإصابة بـ RSV شديد خلال الأشهر الستة الأولى بعد الولادة.',
          },
          {
            type: 'p',
            text: 'يُفترض أن يُعرَض عليكِ لقاح RSV حوالي موعد متابعة الحمل في الأسبوع 28. التطعيم في أقرب وقت ممكن من الأسبوع 28 يوفر أفضل حماية للطفل، لكن يمكن إعطاؤه لاحقًا عند الحاجة، بما في ذلك حتى بدء المخاض.',
            mb: 0,
          },
        ],
      },
      {
        id: PREGNANCY_SECTION_IDS.ar.liveContraindicated,
        title: 'اللقاحات غير الموصى بها عادةً في الحمل (اللقاحات الحية)',
        accent: 'sage',
        blocks: [
          {
            type: 'p',
            text: 'إذا كان اللقاح يستخدم نسخة حية من الفيروس، مثل لقاح MMR، يُنصح عادةً بالانتظار حتى بعد الولادة قبل التطعيم. اللقاحات الحية تشمل:',
          },
          {
            type: 'ul',
            items: [
              'BCG (التطعيم ضد السل)',
              'MMR (الحصبة والنكاف والحصبة الألمانية)',
              'التيفود الفموي',
              'الحمى الصفراء',
            ],
          },
        ],
      },
      {
        id: PREGNANCY_SECTION_IDS.ar.mmr,
        title: 'لقاح الحصبة والنكاف والحصبة الألمانية (MMR)',
        accent: 'slate',
        blocks: [
          {
            type: 'p',
            text: 'قد تؤدي الإصابة بالحصبة الألمانية البرية إلى الإجهاض التلقائي أو الولادة الميتة، والأهم متلازمة الحصبة الألمانية الخلقية (CRS)، التي تتميز بصمم حسي عصبي، وعيوب قلبية خلقية، وتقارُّ الرأس، وصعوبات تعلُّم، وعيوب في العين والعظام. قد تؤدي إصابة الحصبة أثناء الحمل إلى مرض شديد لدى الأم، وزيادة معدلات الإجهاض، وولادة مبكرة، وولادة ميتة، وربما تشوهات خلقية. بيانات النكاف غير متسقة، مع بعض الدراسات التي تشير إلى احتمال زيادة معدل الإجهاض التلقائي.',
          },
          {
            type: 'p',
            text: 'لم تُسجَّل تقارير عن تشوهات خلقية نسبت إلى فيروس لقاح MMR. قدّرت CDC الخطر النظري على الجنين لمتلازمة CRS بعد التطعيم بلقاح الحصبة الألمانية بنسبة 0% إلى 1.6%.',
          },
          {
            type: 'p',
            text: 'في 1971، أنشأت CDC سجلًا للقاحات أثناء الحمل للنساء اللواتي تلقين لقاحات الحصبة الألمانية خلال 3 أشهر قبل أو بعد الحمل. بحلول 1989 كانت هناك بيانات عن 1221 امرأة حامل تلقّين اللقاح عن غير قصد. لم يُظهر السجل زيادة في التشوهات الجنينية أو حالات CRS لدى المشاركات أو بين 321 امرأة غير محصنة ضد الحصبة الألمانية؛ لذا توقف التسجيل.',
            mb: 0,
          },
        ],
      },
      {
        id: PREGNANCY_SECTION_IDS.ar.varicella,
        title: 'لقاح الجدري المائي',
        accent: 'sage',
        blocks: [
          {
            type: 'p',
            text: 'يرتبط الإصابة بفيروس الجدري المائي أثناء الحمل بخطر متلازمة الجدري المائي الخلقية، التي تتميز بوزن ولادة منخفض، وتندب جلدي، وعيوب في العين، ونقص نمو الأطراف في العظام والعضلات، ومثانة عصبية، واضطرابات في الجهاز الهضمي والجهاز العصبي.',
          },
          {
            type: 'p',
            text: 'لا توجد تقارير عن متلازمة الجدري المائي الخلقية بعد التعرض للقاح الجدري المائي أثناء الحمل. أنشأ المصنّع بالتعاون مع CDC سجلًا لمراقبة نتائج الأم والجنين للنساء اللواتي تلقين لقاح الجدري المائي عن غير قصد خلال 3 أشهر قبل الحمل أو في أي وقت أثناء الحمل. من بين 737 امرأة مع نتائج حمل متاحة، لم تظهر أنماط تشوهات ولم يُولَد أي رضيع بسمات متسقة مع متلازمة الجدري المائي الخلقية بين المشاركات أو بين النساء السلبيات من الناحية المصلية.',
            mb: 0,
          },
        ],
      },
      {
        id: PREGNANCY_SECTION_IDS.ar.conclusion,
        title: 'الخلاصة',
        accent: 'slate',
        blocks: [
          {
            type: 'p',
            text: 'لم يرتبط التعرض للقاحات الحية أو غير الحية أثناء الحمل بزيادة خطر نتائج حمل سلبية، ولم يُولَد إلى اليوم أي طفل بمتلازمة CRS أو متلازمة الجدري المائي بعد تطعيم الأم بلقاح الحصبة الألمانية أو الجدري المائي في أي وقت أثناء الحمل. ومع ذلك، رغم هذه المعلومات المبنية على الأدلة، تظل هذه اللقاحات ممنوعة أثناء الحمل، وتواصل Public Health Agency of Canada وACIP التوصية بتجنب الحمل لمدة شهر تقريبًا بعد التطعيم. وتؤكد أنه إذا تعرضت حامل لهذه اللقاحات أو حدث الحمل قريبًا بعد التطعيم، فيجب إرشادها بشأن المخاطر النظرية على الجنين، ولا ينبغي أن يكون التطعيم سببًا للنظر في إنهاء الحمل.',
            mb: 0,
          },
        ],
      },
    ],
    referencesTitle: 'المراجع',
    references: PREGNANCY_REFERENCES,
    pdfTitles: {
      maternalSchedule: 'جدول التطعيم للأمهات — PDF',
      pregnancy: 'الحمل — PDF',
      abrysvo: 'Abrysvo أثناء الحمل — PDF',
      tdap: 'Tdap أثناء الحمل — PDF',
    },
  },
};
