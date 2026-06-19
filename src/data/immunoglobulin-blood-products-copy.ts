export type IgBloodParagraphPart = { text: string; bold?: boolean };
export type IgBloodParagraph = string | { parts: IgBloodParagraphPart[] };

export type IgBloodSection = {
  type: 'section';
  id: string;
  title: string;
  icon: string;
  paragraphs: IgBloodParagraph[];
};

export type IgBloodPdf = {
  type: 'pdf';
  id: string;
  title: string;
  srcKey: 'intervals' | 'timing';
};

export type IgBloodContentItem = IgBloodSection | IgBloodPdf;

export type IgBloodReference = { citation: string; href: string };

export type IgBloodCopy = {
  heroTitle: string;
  heroLead: string;
  arHeroTitle: string;
  arHeroLead: string;
  content: IgBloodContentItem[];
  referencesTitle: string;
  references: IgBloodReference[];
};

export const IG_BLOOD_SECTION_IDS = {
  en: {
    overview: 'overview',
    bloodProducts: 'blood-products',
    agammaglobulinaemia: 'agammaglobulinaemia',
    intervalsPdf: 'intervals-pdf',
    spacing: 'spacing',
    liveVaccines: 'live-vaccines',
    nonLive: 'non-live',
    timingPdf: 'timing-pdf',
  },
  ar: {
    overview: 'overview-ar',
    bloodProducts: 'blood-products-ar',
    agammaglobulinaemia: 'agammaglobulinaemia-ar',
    intervalsPdf: 'intervals-pdf-ar',
    spacing: 'spacing-ar',
    liveVaccines: 'live-vaccines-ar',
    nonLive: 'non-live-ar',
    timingPdf: 'timing-pdf-ar',
  },
} as const;

export const IG_BLOOD_EN_TOC = [
  { id: IG_BLOOD_SECTION_IDS.en.overview, label: 'Overview' },
  { id: IG_BLOOD_SECTION_IDS.en.bloodProducts, label: 'Blood products' },
  { id: IG_BLOOD_SECTION_IDS.en.agammaglobulinaemia, label: 'Agammaglobulinaemia' },
  { id: IG_BLOOD_SECTION_IDS.en.intervalsPdf, label: 'Recommended intervals' },
  { id: IG_BLOOD_SECTION_IDS.en.spacing, label: 'Spacing vaccines' },
  { id: IG_BLOOD_SECTION_IDS.en.liveVaccines, label: 'Live vaccines' },
  { id: IG_BLOOD_SECTION_IDS.en.nonLive, label: 'Non-live vaccines' },
  { id: IG_BLOOD_SECTION_IDS.en.timingPdf, label: 'Timing & spacing PDF' },
];

export const IG_BLOOD_AR_TOC = [
  { id: IG_BLOOD_SECTION_IDS.ar.overview, label: 'نظرة عامة' },
  { id: IG_BLOOD_SECTION_IDS.ar.bloodProducts, label: 'منتجات الدم' },
  { id: IG_BLOOD_SECTION_IDS.ar.agammaglobulinaemia, label: 'مرضى نقص immunoglobulins' },
  { id: IG_BLOOD_SECTION_IDS.ar.intervalsPdf, label: 'الفترات الموصى بها' },
  { id: IG_BLOOD_SECTION_IDS.ar.spacing, label: 'فترات الفصل' },
  { id: IG_BLOOD_SECTION_IDS.ar.liveVaccines, label: 'اللقاحات الحية' },
  { id: IG_BLOOD_SECTION_IDS.ar.nonLive, label: 'اللقاحات غير الحية' },
  { id: IG_BLOOD_SECTION_IDS.ar.timingPdf, label: 'PDF التوقيت والفصل' },
];

const IG_BLOOD_REFERENCES: IgBloodReference[] = [
  {
    citation:
      'Australian Immunisation Handbook — Vaccination for people who have recently received normal human immunoglobulin and other blood products.',
    href: 'https://immunisationhandbook.health.gov.au/contents/vaccination-for-special-risk-groups/vaccination-for-people-who-have-recently-received-normal-human-immunoglobulin-and-other-blood-products',
  },
  {
    citation: 'CDC — Timing and spacing of immunobiologics.',
    href: 'https://www.cdc.gov/vaccines/hcp/imz-best-practices/timing-spacing-immunobiologics.html',
  },
];

const AR_HERO_TITLE = 'من تلقوا مؤخرًا immunoglobulin بشريًا طبيعيًا ومنتجات دم أخرى';
const AR_HERO_LEAD =
  'قد تُثبّط immunoglobulins الاستجابة المناعية لبعض اللقاحات. يجب تأجيل بعض اللقاحات لفترة معينة بعد تلقي منتجات الدم.';

const IG_BLOOD_EN_CONTENT: IgBloodContentItem[] = [
  {
    type: 'section',
    id: IG_BLOOD_SECTION_IDS.en.overview,
    title: 'Overview',
    icon: '📋',
    paragraphs: [
      'Immunoglobulins may inhibit the immune response to some vaccines. Delay giving some vaccines for a certain time after receiving blood products.',
    ],
  },
  {
    type: 'section',
    id: IG_BLOOD_SECTION_IDS.en.bloodProducts,
    title: 'Normal human immunoglobulin and blood products',
    icon: '💉',
    paragraphs: [
      {
        parts: [
          {
            text: 'Normal human immunoglobulin may inhibit the immune response to some live parenteral viral vaccines. This is because low levels of antibodies may be present in the blood product that may impair the immune response to the live vaccine. ',
          },
          { text: 'Exceptions are yellow fever, BCG and zoster vaccines.', bold: true },
          { text: ' People who have received any blood product, including plasma or platelets, should wait ' },
          { text: '3–11 months', bold: true },
          {
            text: ' before they receive an MMR (measles-mumps-rubella), MMRV (measles-mumps-rubella-varicella) or varicella vaccine. The length of time depends on the blood product they received. Live Japanese encephalitis vaccine (Imojev) should not be given within ',
          },
          { text: '6 weeks', bold: true },
          { text: ' of receiving immunoglobulins or immunoglobulin-containing blood products. It is preferable to wait ' },
          { text: '3 months', bold: true },
          {
            text: '. People who have received a blood transfusion do not need to repeat any of their vaccinations.',
          },
        ],
      },
    ],
  },
  {
    type: 'section',
    id: IG_BLOOD_SECTION_IDS.en.agammaglobulinaemia,
    title: 'People with agammaglobulinaemia',
    icon: '🛡️',
    paragraphs: [
      {
        parts: [
          { text: 'Live vaccines are ' },
          { text: 'not recommended', bold: true },
          {
            text: ' for people with agammaglobulinaemia who are receiving monthly normal human immunoglobulin. This is because their immune response may be inhibited. Also, these people will have sufficient circulating antibodies (for example, against measles and varicella) from the normal human immunoglobulin to protect them if they are exposed.',
          },
        ],
      },
      'Inactivated vaccines are recommended as per the routine schedule. The response may be suboptimal, but these vaccines are safe to receive.',
    ],
  },
  {
    type: 'pdf',
    id: IG_BLOOD_SECTION_IDS.en.intervalsPdf,
    title: 'Recommended intervals between immunoglobulins or blood products, and measles-mumps-rubella',
    srcKey: 'intervals',
  },
  {
    type: 'section',
    id: IG_BLOOD_SECTION_IDS.en.spacing,
    title: 'Spacing of vaccines and antibody-containing products',
    icon: '📅',
    paragraphs: [
      'Ty21a typhoid, yellow fever, LAIV, and rotavirus vaccines may be administered at any time before, concurrent with, or after administration of any antibody-containing preparation such as immune globulin, hyperimmune globulin, or intravenous immune globulin (IGIV).',
    ],
  },
  {
    type: 'section',
    id: IG_BLOOD_SECTION_IDS.en.liveVaccines,
    title: 'Live vaccines',
    icon: '🦠',
    paragraphs: [
      'Blood (e.g., whole blood, packed red blood cells, and plasma) and other antibody-containing blood products (e.g., immune globulin, hyperimmune globulin, and IGIV) can inhibit the immune response to measles and rubella vaccines for ≥3 months. The effect of blood and immune globulin preparations on the response to mumps and varicella vaccines is unknown; however, commercial immune globulin preparations contain antibodies to these viruses. Blood products available in the United States are unlikely to contain a substantial amount of antibody to yellow fever virus. The length of time that interference with injectable live-virus vaccine (other than yellow fever) can persist after the antibody-containing product is a function of the amount of antigen-specific antibody contained in the product. Therefore, after an antibody-containing product is received, live vaccines (other than Ty21a typhoid, yellow fever, LAIV, and rotavirus vaccines) should be delayed until the passive antibody has degraded. In circumstances where there is high-risk of vaccine-preventable disease it is acceptable to administer a dose of vaccine prior to completion of this interval. If a dose of injectable live-virus vaccine (other than yellow fever) is administered after an antibody-containing product but at an interval shorter than recommended in this report, the vaccine dose should be repeated. The repeat dose should be administered at the interval indicated for the antibody-containing product, after the invalid dose of vaccine.',
      'Although passively acquired antibodies can interfere with the response to rubella vaccine, the low dose of anti-Rho(D) globulin or any other blood product administered to postpartum women have not been demonstrated to reduce the response to the RA27/3 strain rubella vaccine. Congenital rubella syndrome and congenital varicella are conditions with considerable morbidity and represent a true risk in future pregnancies. Because of the importance of rubella and varicella immunity among women of child-bearing age, the postpartum vaccination of women without evidence of immunity to rubella or varicella with MMR, varicella, or MMRV vaccines should not be delayed because of receipt of anti-Rho(D) globulin or any other blood product during the last trimester of pregnancy or at delivery. Any reduction in immunity caused by anti-Rho(D) globulin or other blood products is outweighed by the opportunity to generate immunity. These women should be vaccinated immediately after giving birth and, if possible, tested ≥3 months later to ensure immunity to rubella and, if appropriate, to measles. Measles and rubella serologies have a low false-positive rate and are therefore acceptable for use in this limited postpartum context.',
      'Interference might occur if administration of an antibody-containing product becomes necessary after administration of MMR or varicella vaccines. Usually, vaccine virus replication and stimulation of immunity occurs 1–2 weeks after vaccination. If the interval between administration of any of these vaccines and subsequent administration of an antibody-containing product is less than 14 days, vaccination should be repeated after the recommended interval unless serologic testing indicates a protective antibody response.',
      'A humanized mouse monoclonal antibody product (palivizumab) is available as prophylaxis for serious lower respiratory tract disease from respiratory syncytial virus among infants and young children. This product contains only antibody to respiratory syncytial virus and does not interfere with the immune response to licensed live or non-live vaccines.',
    ],
  },
  {
    type: 'section',
    id: IG_BLOOD_SECTION_IDS.en.nonLive,
    title: 'Non-live vaccines',
    icon: '💉',
    paragraphs: [
      'Antibody-containing products interact less with non-live vaccines compared with live vaccines. Therefore, administering non-live vaccines either simultaneously with or at any interval before or after receipt of an antibody-containing product should not substantially impair development of a protective antibody response. The vaccine or toxoid and antibody preparation should be administered at different sites using the standard recommended dose.',
    ],
  },
  {
    type: 'pdf',
    id: IG_BLOOD_SECTION_IDS.en.timingPdf,
    title: 'Timing and Spacing',
    srcKey: 'timing',
  },
];

const IG_BLOOD_AR_CONTENT: IgBloodContentItem[] = [
  {
    type: 'section',
    id: IG_BLOOD_SECTION_IDS.ar.overview,
    title: 'نظرة عامة',
    icon: '📋',
    paragraphs: [
      'قد تُثبّط immunoglobulins الاستجابة المناعية لبعض اللقاحات. يجب تأجيل بعض اللقاحات لفترة معينة بعد تلقي منتجات الدم.',
    ],
  },
  {
    type: 'section',
    id: IG_BLOOD_SECTION_IDS.ar.bloodProducts,
    title: 'immunoglobulin البشري الطبيعي ومنتجات الدم',
    icon: '💉',
    paragraphs: [
      {
        parts: [
          {
            text: 'قد يُثبّط globulin البشري الطبيعي الاستجابة المناعية لبعض اللقاحات الفيروسية الحية المعطاة بالحقن. ذلك لأن مستويات منخفضة من الأجسام المضادة قد تكون موجودة في منتج الدم، مما قد يضعف الاستجابة للقاح الحي. ',
          },
          { text: 'الاستثناءات هي الحمى الصفراء وBCG ولقاح الهربس النطاقي.', bold: true },
          { text: ' من تلقوا أي منتج دم، بما في ذلك البlasma أو الصفائح الدموية، ينبغي أن ينتظروا ' },
          { text: '3–11 شهرًا', bold: true },
          {
            text: ' قبل تلقي لقاح MMR أو MMRV أو الجدري المائي. تعتمد المدة على نوع منتج الدم. لا ينبغي إعطاء لقاح التهاب الدماغ الياباني الحي (Imojev) خلال ',
          },
          { text: '6 أسابيع', bold: true },
          { text: ' من تلقي immunoglobulins أو منتجات دم تحتوي عليها. ويُفضَّل الانتظار ' },
          { text: '3 أشهر', bold: true },
          { text: '. من تلقوا نقل دم لا يحتاجون إلى إعادة أي من تطعيماتهم.' },
        ],
      },
    ],
  },
  {
    type: 'section',
    id: IG_BLOOD_SECTION_IDS.ar.agammaglobulinaemia,
    title: 'مرضى agammaglobulinaemia',
    icon: '🛡️',
    paragraphs: [
      {
        parts: [
          { text: 'اللقاحات الحية ' },
          { text: 'غير موصى بها', bold: true },
          {
            text: ' لمرضى agammaglobulinaemia الذين يتلقون globulin بشريًا طبيعيًا شهريًا، لأن استجابتهم المناعية قد تُثبَّط. كما أن هؤلاء المرضى سيكون لديهم أجسام مضادة كافية في الدورة الدموية (مثلًا ضد الحصبة والجدري المائي) من globulin البشري الطبيعي لحمايتهم عند التعرض.',
          },
        ],
      },
      'يُوصى باللقاحات غير الحية وفق الجدول الروتيني. قد تكون الاستجابة دون المثلى، لكن هذه اللقاحات آمنة.',
    ],
  },
  {
    type: 'pdf',
    id: IG_BLOOD_SECTION_IDS.ar.intervalsPdf,
    title: 'الفترات الموصى بها بين immunoglobulins أو منتجات الدم ولقاح MMR',
    srcKey: 'intervals',
  },
  {
    type: 'section',
    id: IG_BLOOD_SECTION_IDS.ar.spacing,
    title: 'فترات الفصل بين اللقاحات والمستحضرات المحتوية على أجسام مضادة',
    icon: '📅',
    paragraphs: [
      'يمكن إعطاء لقاحات Ty21a للتيفoid والحمى الصفراء وLAIV والروtaفirus في أي وقت قبل أو مع أو بعد إعطاء أي مستحضر يحتوي على أجسام مضادة مثل immune globulin أو hyperimmune globulin أو IGIV.',
    ],
  },
  {
    type: 'section',
    id: IG_BLOOD_SECTION_IDS.ar.liveVaccines,
    title: 'اللقاحات الحية',
    icon: '🦠',
    paragraphs: [
      'يمكن أن تُثبّط منتجات الدم (مثل الدم الكامل وكريات الدم الحمراء المركزة والبلازma) ومنتجات الدم الأخرى المحتوية على أجسام مضادة (مثل immune globulin وhyperimmune globulin وIGIV) الاستجابة المناعية للقاحات الحصبة والحصبة الألمانية لمدة ≥3 أشهر. تأثير الدم ومستحضرات immune globulin على الاستجابة للقاحات النكاف والجدري المائي غير معروف؛ لكن مستحضرات immune globulin التجارية تحتوي على أجسام مضادة لهذه الفيروسات. من غير المرجح أن تحتوي منتجات الدم المتاحة في الولايات المتحدة على كمية كبيرة من الأجسام المضادة لفيروس الحمى الصفراء. مدة استمرار التداخل مع اللقاحات الفيروسية الحية القابلة للحقن (عدا الحمى الصفراء) بعد المستحضر المحتوي على أجسام مضادة تعتمد على كمية الأجسام المضادة الخاصة بالم antigen في المنتج. لذلك، بعد تلقي مستحضر يحتوي على أجسام مضادة، يُؤجَّل إعطاء اللقاحات الحية (عدا Ty21a والحمى الصفراء وLAIV والروtaفirus) حتى تتحلل الأجسام المضادة السلبية. في حالات الخطر المرتفع للإصابة بمرض يمكن الوقاية منه باللقاح، يمكن إعطاء جرعة قبل انتهاء هذه الفترة. إذا أُعطيت جرعة من لقاح فيروسي حي قابل للحقن (عدا الحمى الصفراء) بعد مستحضر يحتوي على أجسام مضادة بفترة أقصر من الموصى بها، يجب تكرار الجرعة. تُعطى الجرعة المكررة بعد الفترة المحددة للمستحضر المحتوي على أجسام مضادة، وذلك بعد الجرعة غير الصالحة.',
      'على الرغم من أن الأجسام المضادة المكتسبة سلبيًا قد تتداخل مع الاستجابة للقاح الحصبة الألمانية، لم يُثبت أن الجرعة المنخفضة من anti-Rho(D) globulin أو أي منتج دم آخر يُعطى للنساء بعد الولادة يقلل الاستجابة للقاح الحصبة الألمانية سلالة RA27/3. متلازمة الحصبة الألمانية الخلقية والجدري المائي الخلقي حالتان ذاتا مorbidity كبيرة ويمثلان خطرًا حقيقيًا في حالات الحمل المستقبلية. نظرًا لأهمية المناعة ضد الحصبة الألمانية والجدري المائي لدى النساء في سن الإنجاب، لا ينبغي تأجيل تطعيم ما بعد الولادة للنساء دون دليل على المناعة ضد الحصبة الألمانية أو الجدري المائي بلقاح MMR أو الجدري المائي أو MMRV بسبب تلقي anti-Rho(D) globulin أو أي منتج دم آخر في الثلث الأخير من الحمل أو عند الولادة. أي تقليل في المناعة بسبب anti-Rho(D) globulin أو منتجات دم أخرى يُ outweighed بفرصة بناء المناعة. يجب تطعيم هؤلاء النساء مباشرة بعد الولادة، وإذا أمكن، إجراء فحص ≥3 أشهر لاحقًا للتأكد من المناعة ضد الحصبة الألمانية، وضد الحصبة عند الحاجة. serologies الحصبة والحصبة الألمانية لها معدل إيجابي كاذب منخفض، لذا يمكن استخدامها في هذا السياق المحدود بعد الولادة.',
      'قد يحدث تداخل إذا أصبح إعطاء مستحضر يحتوي على أجسام مضادة ضروريًا بعد إعطاء MMR أو لقاح الجدري المائي. عادةً، يحدث تكاثر فيروس اللقاح وتحفيز المناعة خلال 1–2 أسبوع بعد التطعيم. إذا كانت الفترة بين إعطاء أي من هذه اللقاحات وإعطاء مستحضر يحتوي على أجسام مضادة أقل من 14 يومًا، يجب تكرار التطعيم بعد الفترة الموصى بها ما لم تُظهر serology استجابة أجسام مضادة واقية.',
      'يتوفر palivizumab، وهو منتج monoclonal antibody مُhumanized من الفئران، للوقاية من مرض الجهاز التنفسي السفلي الخطير الناجم عن RSV لدى الرضع والأطفال الصغار. يحتوي هذا المنتج فقط على أجسام مضادة لـ RSV ولا يتداخل مع الاستجابة المناعية للقاحات الحية أو غير الحية المرخصة.',
    ],
  },
  {
    type: 'section',
    id: IG_BLOOD_SECTION_IDS.ar.nonLive,
    title: 'اللقاحات غير الحية',
    icon: '💉',
    paragraphs: [
      'تتفاعل المستحضرات المحتوية على أجسام مضادة بدرجة أقل مع اللقاحات غير الحية مقارنة باللقاحات الحية. لذلك، إعطاء اللقاحات غير الحية في وقت واحد أو قبل أو بعد تلقي مستحضر يحتوي على أجسام مضادة بأي فترة لا ينبغي أن يضعف بشكل كبير تطور استجابة أجسام مضادة واقية. يجب إعطاء اللقاح أو toxoid والمستحضر المحتوي على أجسام مضادة في مواقع مختلفة بالجرعة الموصى بها.',
    ],
  },
  {
    type: 'pdf',
    id: IG_BLOOD_SECTION_IDS.ar.timingPdf,
    title: 'التوقيت والفصل',
    srcKey: 'timing',
  },
];

export const IG_BLOOD_COPY: { en: IgBloodCopy; ar: IgBloodCopy } = {
  en: {
    heroTitle: 'People who have recently received normal human immunoglobulin and other blood products',
    heroLead:
      'Immunoglobulins may inhibit the immune response to some vaccines. Delay giving some vaccines for a certain time after receiving blood products.',
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    content: IG_BLOOD_EN_CONTENT,
    referencesTitle: 'References',
    references: IG_BLOOD_REFERENCES,
  },
  ar: {
    heroTitle: AR_HERO_TITLE,
    heroLead: AR_HERO_LEAD,
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    content: IG_BLOOD_AR_CONTENT,
    referencesTitle: 'المراجع',
    references: IG_BLOOD_REFERENCES,
  },
};
