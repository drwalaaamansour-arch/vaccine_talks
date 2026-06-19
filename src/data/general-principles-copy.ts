export type GeneralPrinciplesParagraphPart = { text: string; bold?: boolean; sup?: boolean };
export type GeneralPrinciplesParagraph = string | { parts: GeneralPrinciplesParagraphPart[] };

export type GeneralPrinciplesBlock =
  | { type: 'p'; content: GeneralPrinciplesParagraph; mb?: string }
  | { type: 'ul'; items: string[] };

export type GeneralPrinciplesChunk = {
  title: string;
  accent: 'sage' | 'slate';
  paragraphs: GeneralPrinciplesParagraph[];
};

export type GeneralPrinciplesReference = { citation: string; href: string };

export type GeneralPrinciplesCopy = {
  heroTitle: string;
  heroLead: string;
  arHeroTitle: string;
  arHeroLead: string;
  backLabel: string;
  classification: { id: string; blocks: GeneralPrinciplesBlock[] };
  vaccineSafety: {
    id: string;
    sectionTitle: string;
    gridChunks: [GeneralPrinciplesChunk, GeneralPrinciplesChunk];
    fullWidthChunks: [GeneralPrinciplesChunk, GeneralPrinciplesChunk];
  };
  referencesTitle: string;
  references: GeneralPrinciplesReference[];
};

export const GENERAL_PRINCIPLES_SECTION_IDS = {
  en: {
    classification: 'classification',
    vaccineSafety: 'vaccine-safety-effectiveness',
    references: 'references',
  },
  ar: {
    classification: 'classification-ar',
    vaccineSafety: 'vaccine-safety-effectiveness-ar',
    references: 'references-ar',
  },
} as const;

export const GENERAL_PRINCIPLES_EN_TOC = [
  { id: GENERAL_PRINCIPLES_SECTION_IDS.en.classification, label: 'Classification' },
  { id: GENERAL_PRINCIPLES_SECTION_IDS.en.vaccineSafety, label: 'Safety & effectiveness' },
];

export const GENERAL_PRINCIPLES_AR_TOC = [
  { id: GENERAL_PRINCIPLES_SECTION_IDS.ar.classification, label: 'التصنيف' },
  { id: GENERAL_PRINCIPLES_SECTION_IDS.ar.vaccineSafety, label: 'السلامة والفعالية' },
];

const CDC_ALTERED =
  'https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html';

const AR_HERO_TITLE = 'المبادئ العامة';
const AR_HERO_LEAD =
  'المناعة المتغيرة — الأسباب الأولية والثانوية، وسلامة وفعالية اللقاحات في المرضى ذوي المناعة الضعيفة.';

const EN_CLASSIFICATION_BLOCKS: GeneralPrinciplesBlock[] = [
  {
    type: 'p',
    content:
      'Altered immunocompetence, a term often used synonymously with immunosuppression, immunodeficiency, and immunocompromise, can be classified as primary or secondary.',
  },
  {
    type: 'p',
    content: {
      parts: [
        { text: 'Primary immunodeficiencies', bold: true },
        {
          text: ' generally are inherited and include conditions defined by an inherent absence or quantitative deficiency of cellular, humoral, or both components that provide immunity. Examples include congenital immunodeficiency diseases such as:',
        },
      ],
    },
    mb: '0.65rem',
  },
  {
    type: 'ul',
    items: [
      'X-linked agammaglobulinemia',
      'SCID',
      'Chronic granulomatous disease',
    ],
  },
  {
    type: 'p',
    content: {
      parts: [
        { text: 'Secondary immunodeficiency', bold: true },
        {
          text: ' is acquired and is defined by loss or qualitative deficiency in cellular or humoral immune components that occurs as a result of a disease process or its therapy. Examples of secondary immunodeficiency include:',
        },
      ],
    },
    mb: '0.65rem',
  },
  {
    type: 'ul',
    items: [
      'HIV infection',
      'Hematopoietic malignancies',
      'Treatment with radiation',
      'Treatment with immunosuppressive drugs',
    ],
  },
  {
    type: 'p',
    content:
      'The degree to which immunosuppressive drugs cause clinically significant immunodeficiency generally is dose related and varies by drug.',
  },
  {
    type: 'p',
    content:
      'Primary and secondary immunodeficiencies might include a combination of deficits in both cellular and humoral immunity.',
  },
  {
    type: 'p',
    content:
      'Certain conditions like asplenia and chronic renal disease also can cause altered immunocompetence.',
  },
  {
    type: 'p',
    content:
      'Determination of altered immunocompetence is important to the vaccine provider because incidence or severity of some vaccine-preventable diseases is higher in persons with altered immunocompetence.',
  },
];

const AR_CLASSIFICATION_BLOCKS: GeneralPrinciplesBlock[] = [
  {
    type: 'p',
    content:
      'تُستخدم المناعة المتغيرة، وهو مصطلح يُستخدم غالبًا مرادفًا لكبت المناعة، ونقص المناعة، وضعف المناعة، ويمكن تصنيفها إلى أولية أو ثانوية.',
  },
  {
    type: 'p',
    content: {
      parts: [
        { text: 'نقص المناعة الأولي', bold: true },
        {
          text: ' يكون عادةً وراثيًا ويشمل حالات تُعرَّف بغياب كامن أو نقص كمي في المكونات الخلوية أو الخُمْرية أو كليهما التي توفر المناعة. وتشمل الأمثلة أمراض نقص المناعة الخلقي مثل:',
        },
      ],
    },
    mb: '0.65rem',
  },
  {
    type: 'ul',
    items: [
      'نقص غاما-غلوبولين الدم X-linked',
      'SCID',
      'مرض الحبيبات المزمن',
    ],
  },
  {
    type: 'p',
    content: {
      parts: [
        { text: 'نقص المناعة الثانوي', bold: true },
        {
          text: ' يكون مكتسبًا ويُعرَّف بفقد أو نقص نوعي في المكونات المناعية الخلوية أو الخُمْرية يحدث نتيجة لعملية مرضية أو علاجها. وتشمل أمثلة نقص المناعة الثانوي:',
        },
      ],
    },
    mb: '0.65rem',
  },
  {
    type: 'ul',
    items: [
      'الإصابة بـ HIV',
      'الأورام الخبيثة الدموية',
      'العلاج بالإشعاع',
      'العلاج بأدوية كبت المناعة',
    ],
  },
  {
    type: 'p',
    content:
      'يكون مدى تسبّب أدوية كبت المناعة في نقص مناعي سريريّ ذي أهمية مرتبطًا عمومًا بالجرعة ويختلف بحسب الدواء.',
  },
  {
    type: 'p',
    content:
      'قد يشتمل نقص المناعة الأولي والثانوي على مزيج من العجز في المناعة الخلوية والخُمْرية معًا.',
  },
  {
    type: 'p',
    content:
      'يمكن أيضًا لبعض الحالات مثل انعدام الطحال ومرض الكلى المزمن أن تسبّب المناعة المتغيرة.',
  },
  {
    type: 'p',
    content:
      'يُعدّ تحديد المناعة المتغيرة مهمًا لمقدّم اللقاح لأن معدّل الإصابة أو شدة بعض الأمراض القابلة للوقاية بالتطعيم تكون أعلى لدى الأشخاص ذوي المناعة المتغيرة.',
  },
];

const EN_NON_LIVE_SAFETY: GeneralPrinciplesChunk = {
  title: 'Non-live Vaccines: Safety',
  accent: 'sage',
  paragraphs: [
    'All non-live vaccines can be administered safely to persons with altered immunocompetence, whether the vaccine is a killed whole-organism or a recombinant, subunit, split-virus, toxoid, polysaccharide, or polysaccharide protein-conjugate vaccine.',
  ],
};

const EN_NON_LIVE_EFFECTIVENESS: GeneralPrinciplesChunk = {
  title: 'Non-live Vaccines: Effectiveness',
  accent: 'sage',
  paragraphs: [
    'Except for inactivated influenza vaccine, vaccination during chemotherapy or radiation therapy should be avoided if possible because antibody response might be suboptimal. Patients vaccinated within a 14-day period before starting immunosuppressive therapy or while receiving immunosuppressive therapy should be considered unimmunized and should be revaccinated at least 3 months after therapy is discontinued if immune competence has been restored.',
    'Patients who have quantitative B-cell deficiencies and are receiving immunoglobulin therapy should not receive either non-live or live vaccines while receiving the immunoglobulin therapy because of concerns about effectiveness of the vaccines.',
    'Patients on chemotherapy with anti-B cell antibodies (e.g., rituximab) should wait at least 6 months after therapy before being vaccinated with non-live vaccines. Some experts recommended longer than 6 months for some anti-B cell antibodies.',
    'For other forms of altered immunocompetence, if non-live vaccines are indicated, the usual schedules are recommended. However, the effectiveness of such vaccinations might be suboptimal.',
  ],
};

const EN_LIVE_EFFECTIVENESS: GeneralPrinciplesChunk = {
  title: 'Live, Attenuated Viral and Bacterial Vaccines: Effectiveness',
  accent: 'slate',
  paragraphs: [
    'The same rationale regarding effectiveness that exists with non-live vaccines also exists with live vaccines.',
  ],
};

const EN_LIVE_SAFETY: GeneralPrinciplesChunk = {
  title: 'Live, Attenuated Viral and Bacterial Vaccines: Safety',
  accent: 'slate',
  paragraphs: [
    'Severe complications have followed vaccination with certain live, attenuated viral and live, attenuated bacterial vaccines among persons with altered immunocompetence.',
    'Persons with most forms of altered immunocompetence should not receive live vaccines (MMR, varicella, MMRV, LAIV, yellow fever, Ty21a oral typhoid, BCG, smallpox, and rotavirus). However, exceptions exist, and are discussed in this section. Patients with any defect in phagocytic function (e.g., chronic granulomatous disease, leukocyte adhesion deficiency, myeloperoxidase deficiency, Chediak-Higashi syndrome) should NOT receive live bacterial vaccines.',
    'Patients with a specific type of defect in phagocytic function—chronic granulomatous disease—should receive recommended live attenuated viral vaccines in addition to non-live vaccines but should NOT receive live bacterial vaccines.',
    'Patients with defects in phagocytic function that are undefined or known to be accompanied by defects in T-cell and natural killer cell function (e.g., leukocyte adhesion deficiency, myeloperoxidase deficiency, Chediak-Higashi syndrome) should NOT receive live attenuated viral or bacterial vaccines. These conditions include specific deficits in T-cell and natural killer cell function, reducing the response to live viral vaccine antigens to an extent not seen in chronic granulomatous disease.',
    'Children with deficiencies in complement should receive recommended live, attenuated viral and live, attenuated bacterial vaccines.',
    'Children with asplenia should not receive LAIV, but can receive recommended live, attenuated viral and live, attenuated bacterial vaccines.',
    'Persons with severe cell-mediated immunodeficiency should not receive live, attenuated viral or bacterial vaccines.',
    'Patients with defects of the interferon-gamma/interleukin-12 axis should not receive live bacterial vaccines. Patients with deficiencies of interferon-gamma or interferon-alpha should not receive live viral or live bacterial vaccine. These defects involve a deficiency in cytokine production which affects the immune response to a wide scope of antigens, both bacterial and viral.',
    'Two factors support vaccination of HIV-exposed or HIV-infected infants with rotavirus vaccines: 1) the HIV diagnosis might not be established in infants born to HIV-infected mothers before the age of the first rotavirus vaccine dose (only 1.5%-3% of HIV-exposed infants in the United States will be determined to be HIV-infected), and 2) the vaccine strains of rotavirus are considerably attenuated.',
    'Patients taking exogenous interferon as therapy should not receive live bacterial or live viral vaccines.',
    'Children with HIV infection are at increased risk for complications from varicella and herpes zoster infection compared with immunocompetent children. Limited data among HIV-infected children younger than 8 years (specifically, those individuals with CDC class N, A, or B with age-specific CD4+ T-lymphocyte percentages of ≥15%) indicate that single-component varicella vaccine is immunogenic, effective, and safe. Data on use of varicella vaccine in HIV-infected adolescents and adults are lacking. However, on the basis of expert opinion, the safety of varicella vaccine in HIV-infected persons older than 8 years with comparable levels of immune function (CD4+ T-lymphocyte count greater than 200 cells/mm³) is likely to be similar to that of children aged younger than 8 years. Varicella vaccine should be considered for persons who meet these criteria. Eligible HIV-infected persons 12 months of age or older should receive 2 doses of single-component varicella vaccine with a 3-month interval between doses. MMRV vaccine should not be administered to any HIV-infected person.',
    'Persons with HIV infection are at increased risk for severe complications if infected with measles. No severe or unusual adverse events have been reported after measles vaccination among HIV-infected persons who did not have evidence of severe immunosuppression. Two doses of MMR vaccine are recommended for all HIV-infected individuals aged ≥12 months who do not have evidence of current severe immunosuppression (i.e., individuals aged ≤5 years must have CD4+ T lymphocyte [CD4+] percentages ≥15% for ≥6 months, and individuals aged >5 years must have CD4+ percentages ≥15% and CD4+ ≥200 lymphocytes/mm³ for ≥6 months) and do not have current evidence of measles, rubella, and mumps immunity. In cases when only CD4+ cell counts or only CD4+ percentages are available for those >5 years, the assessment of severe immunosuppression can be based on the CD4+ values (count or percentage) that are available. In cases when CD4+ percentages are not available for those aged ≤5 years, the assessment of severe immunosuppression can be based on age-specific CD4+ counts at the time CD4+ counts were measured; i.e., absence of severe immunosuppression is defined as ≥6 months above age-specific CD4+ count criteria: CD4+ count >750 lymphocytes/mm³ while aged ≤12 months and CD4+ count ≥500 lymphocytes/mm³ while aged 1 through 5 years. Similarly, repeat doses of MMR vaccination are recommended for individuals with perinatal HIV infection who were vaccinated prior to establishment of effective combination antiretroviral therapy (cART). They should receive 2 appropriately spaced doses of MMR vaccine once effective cART has been established (individuals aged ≤5 years must have CD4+ percentages ≥15% for ≥6 months; individuals aged >5 years must have CD4+ percentages ≥15% and CD4+ ≥200 lymphocytes/mm³ for ≥6 months) unless they have other acceptable current evidence of measles, rubella, and mumps immunity.',
    'HIV-infected persons who are receiving regular doses of IGIV are unlikely to respond to varicella vaccine or MMR vaccine because of the continued presence of passively acquired antibody. However, because of the potential benefit, MMR and varicella vaccines should be considered approximately 14 days before the next scheduled dose of IGIV (if not otherwise contraindicated), although an optimal immune response might not occur depending on the presence of neutralizing antibodies against the vaccine virus. Vaccination should be repeated (if not otherwise contraindicated) after the recommended interval. In most cases, this is after the therapy has been discontinued.',
    'Patients with leukemia, lymphoma, or other malignancies whose disease is in remission, who have restored immunocompetence, and whose chemotherapy has been discontinued for at least 3 months can receive live-virus vaccines. Persons with impaired humoral immunity (e.g., hypogammaglobulinemia or dysgammaglobulinemia) may be vaccinated with varicella vaccine. However, most persons with these disorders also receive periodic doses of IGIV. Appropriate spacing should be maintained between administration of IGIV and varicella vaccine in an attempt to prevent an inadequate response to vaccination caused by the presence of neutralizing antibodies from the IGIV.',
    'Zoster incidence is higher in persons with altered immunocompetence. Adults with most types of altered immunocompetence are expected to maintain residual immunity to varicella-zoster virus because of chronic latent infection that protects against primary varicella but provides incomplete protection against zoster. Zoster vaccine is not recommended in persons with primary or acquired immunodeficiency (e.g., lymphoma, leukemia, tumors involving bone marrow, and patients receiving chemotherapy) and some HIV infected patients. Zoster vaccine may be administered to certain persons age 50 or older with altered immunocompetence, such as persons receiving low dosages of immunosuppressive medications, those with isolated B-cell deficiencies (i.e., impaired humoral immunity), or those with HIV infection who have CD4+ T-lymphocyte counts >200 cells/mm³.',
  ],
};

const AR_NON_LIVE_SAFETY: GeneralPrinciplesChunk = {
  title: 'اللقاحات غير الحية: السلامة',
  accent: 'sage',
  paragraphs: [
    'يمكن إعطاء جميع اللقاحات غير الحية بأمان للأشخاص ذوي المناعة المتغيرة، سواء كان اللقاح لكائن حيّ كامل مُقتولًا، أو لقاحًا معاد التركيب (recombinant)، أو subunit، أو split-virus، أو toxoid، أو polysaccharide، أو لقاحًا مقترنًا polysaccharide-protein.',
  ],
};

const AR_NON_LIVE_EFFECTIVENESS: GeneralPrinciplesChunk = {
  title: 'اللقاحات غير الحية: الفعالية',
  accent: 'sage',
  paragraphs: [
    'باستثناء لقاح الإنفلونزا المعطّل، ينبغي تجنّب التطعيم أثناء العلاج الكيميائي أو العلاج الإشعاعي إن أمكن لأن استجابة الأجسام المضادة قد تكون دون المستوى الأمثل. يُعتبر المرضى الذين تلقّوا التطعيم خلال فترة 14 يومًا قبل بدء العلاج المثبّط للمناعة أو أثناء تلقّيه غير مُطعّمين، وينبغي إعادة تطعيمهم بعد 3 أشهر على الأقل من إيقاف العلاج إذا استُعيدت الكفاءة المناعية.',
    'لا ينبغي للمرضى الذين لديهم نقص كمي في خلايا B ويتلقّون غلوبولينات مناعية أن يتلقّوا لقاحات غير حية أو حية أثناء هذا العلاج بسبب المخاوف المتعلقة بفعالية اللقاحات.',
    'ينبغي للمرضى الذين يتلقّون العلاج الكيميائي بأجسام مضادة anti-B cell (مثل rituximab) الانتظار 6 أشهر على الأقل بعد العلاج قبل التطعيم باللقاحات غير الحية. أوصى بعض الخبراء بفترة أطول من 6 أشهر لبعض الأجسام المضادة anti-B cell.',
    'في أشكال المناعة المتغيرة الأخرى، إذا كانت اللقاحات غير الحية مُشارًا إليها، تُوصى بالجداول المعتادة. ومع ذلك، قد تكون فعالية هذه التطعيمات دون المستوى الأمثل.',
  ],
};

const AR_LIVE_EFFECTIVENESS: GeneralPrinciplesChunk = {
  title: 'اللقاحات الحية الموهّنة الفيروسية والجرثومية: الفعالية',
  accent: 'slate',
  paragraphs: [
    'ينطبق نفس المنطق المتعلق بالفعالية الذي ينطبق على اللقاحات غير الحية أيضًا على اللقاحات الحية.',
  ],
};

const AR_LIVE_SAFETY: GeneralPrinciplesChunk = {
  title: 'اللقاحات الحية الموهّنة الفيروسية والجرثومية: السلامة',
  accent: 'slate',
  paragraphs: [
    'لقد تبعت التطعيم ببعض اللقاحات الفيروسية الحية الموهّنة واللقاحات الجرثومية الحية الموهّنة مضاعفات شديدة لدى الأشخاص ذوي المناعة المتغيرة.',
    'لا ينبغي للأشخاص ذوي معظم أشكال المناعة المتغيرة أن يتلقّوا اللقاحات الحية (MMR، والجدري المائي، وMMRV، وLAIV، والحمى الصفراء، والتيفوئيد الفموي Ty21a، وBCG، والجدري، والروتافيروس). ومع ذلك، توجد استثناءات، وتُناقَش في هذا القسم. لا ينبغي للمرضى الذين لديهم أي عيب في وظيفة البلعمة (مثل مرض الحبيبات المزمن، ونقص التصاق الكريات البيض، ونقص myeloperoxidase، ومتلازمة Chediak-Higashi) أن يتلقّوا اللقاحات الجرثومية الحية.',
    'ينبغي للمرضى الذين لديهم نوع محدد من عيب وظيفة البلعمة — مرض الحبيبات المزمن — أن يتلقّوا اللقاحات الفيروسية الحية الموهّنة الموصى بها بالإضافة إلى اللقاحات غير الحية، لكن لا ينبغي لهم أن يتلقّوا اللقاحات الجرثومية الحية.',
    'لا ينبغي للمرضى الذين لديهم عيوب في وظيفة البلعمة غير محددة أو معروف أنها مصحوبة بعيوب في وظيفة خلايا T والخلايا القاتلة الطبيعية (مثل نقص التصاق الكريات البيض، ونقص myeloperoxidase، ومتلازمة Chediak-Higashi) أن يتلقّوا اللقاحات الفيروسية أو الجرثومية الحية الموهّنة. تشمل هذه الحالات عجزًا محددًا في وظيفة خلايا T والخلايا القاتلة الطبيعية، مما يقلّل الاستجابة لمستضدات اللقاحات الفيروسية الحية إلى حد لا يُلاحظ في مرض الحبيبات المزمن.',
    'ينبغي للأطفال الذين لديهم نقص في المتمم أن يتلقّوا اللقاحات الفيروسية والجرثومية الحية الموهّنة الموصى بها.',
    'لا ينبغي للأطفال ذوي انعدام الطحال أن يتلقّوا LAIV، لكن يمكنهم تلقي اللقاحات الفيروسية والجرثومية الحية الموهّنة الموصى بها.',
    'لا ينبغي للأشخاص ذوي نقص المناعة الخلوي الشديد أن يتلقّوا اللقاحات الفيروسية أو الجرثومية الحية الموهّنة.',
    'لا ينبغي للمرضى الذين لديهم عيوب في محور interferon-gamma/interleukin-12 أن يتلقّوا اللقاحات الجرثومية الحية. ولا ينبغي للمرضى الذين لديهم نقص في interferon-gamma أو interferon-alpha أن يتلقّوا لقاحات فيروسية أو جرثومية حية. تتضمن هذه العيوب نقصًا في إنتاج cytokines مما يؤثر على الاستجابة المناعية لمجموعة واسعة من المستضدات، الجرثومية والفيروسية.',
    'يدعم عاملان تطعيم الرضّع المعرّضين لـ HIV أو المصابين به بلقاحات الروتافيروس: 1) قد لا يُثبت تشخيص HIV لدى الرضّع المولودين لأمهات مصابات بـ HIV قبل سن جرعة الروتافيروس الأولى (سيُحدَّد أن 1.5%-3% فقط من الرضّع المعرّضين لـ HIV في الولايات المتحدة مصابون بـ HIV)، و2) سلالات الروتافيروس في اللقاح موهّنة بدرجة كبيرة.',
    'لا ينبغي للمرضى الذين يتناولون interferon خارجيًا كعلاج أن يتلقّوا لقاحات جرثومية أو فيروسية حية.',
    'الأطفال المصابون بـ HIV معرّضون لخطر متزايد لمضاعفات الإصابة بالجدري المائي والهربس النطاقي مقارنةً بالأطفال ذوي المناعة السليمة. تشير بيانات محدودة لدى الأطفال المصابين بـ HIV دون سن 8 سنوات (تحديدًا، الأفراد ذوو تصنيف CDC N أو A أو B مع نسب CD4+ T-lymphocyte الخاصة بالعمر ≥15%) إلى أن لقاح الجدري المائي أحادي المكوّن مناعي وفعّال وآمن. البيانات المتعلقة باستخدام لقاح الجدري المائي لدى المراهقين والبالغين المصابين بـ HIV ناقصة. ومع ذلك، بناءً على رأي الخبراء، من المرجّح أن تكون سلامة لقاح الجدري المائي لدى الأشخاص المصابين بـ HIV الأكبر من 8 سنوات ذوي مستويات مناعية مماثلة (عدد CD4+ T-lymphocyte أكبر من 200 cell/mm³) مشابهة لتلك لدى الأطفال دون 8 سنوات. ينبغي النظر في لقاح الجدري المائي للأشخاص الذين يستوفون هذه المعايير. ينبغي للأشخاص المصابين بـ HIV المؤهّلين من عمر 12 شهرًا فأكثر أن يتلقّوا جرعتين من لقاح الجدري المائي أحادي المكوّن بفاصل 3 أشهر بينهما. لا ينبغي إعطاء لقاح MMRV لأي شخص مصاب بـ HIV.',
    'الأشخاص المصابون بـ HIV معرّضون لخطر متزايد لمضاعفات شديدة عند الإصابة بالحصبة. لم تُبلَّغ أحداث ضارة شديدة أو غير اعتيادية بعد تطعيم الحصبة لدى الأشخاص المصابين بـ HIV الذين لا يظهر لديهم دليل على كبت مناعي شديد. تُوصى بجرعتين من لقاح MMR لجميع الأفراد المصابين بـ HIV من عمر ≥12 شهرًا الذين لا يظهر لديهم دليل على كبت مناعي شديد حالي (أي، يجب أن يكون لدى الأفراد ≤5 سنوات نسب CD4+ T lymphocyte [CD4+] ≥15% لمدة ≥6 أشهر، ولدى الأفراد >5 سنوات نسب CD4+ ≥15% وCD4+ ≥200 lymphocyte/mm³ لمدة ≥6 أشهر) ولا يظهر لديهم دليل حالي على مناعة ضد الحصبة والحصبة الألمانية والنكاف. في الحالات التي تتوفر فيها فقط أعداد CD4+ أو نسب CD4+ فقط لمن هم >5 سنوات، يمكن أن يُستند تقييم الكبت المناعي الشديد إلى قيم CD4+ المتاحة (العدد أو النسبة). في الحالات التي لا تتوفر فيها نسب CD4+ لمن هم ≤5 سنوات، يمكن أن يُستند تقييم الكبت المناعي الشديد إلى أعداد CD4+ الخاصة بالعمر وقت قياس أعداد CD4+؛ أي، يُعرَّف غياب الكبت المناعي الشديد بـ ≥6 أشهر فوق معايير عد CD4+ الخاصة بالعمر: عد CD4+ >750 lymphocyte/mm³ حتى سن ≤12 شهرًا وعد CD4+ ≥500 lymphocyte/mm³ من سن 1 إلى 5 سنوات. وبالمثل، تُوصى بجرعات MMR متكررة للأفراد ذوي الإصابة بـ HIV حول الولادة الذين تُطعّموا قبل إرساء العلاج المضاد للفيروسات القهقرية المركّب الفعّال (cART). ينبغي لهم أن يتلقّوا جرعتين من MMR بفاصل مناسب بمجرد إرساء cART الفعّال (يجب أن يكون لدى الأفراد ≤5 سنوات نسب CD4+ ≥15% لمدة ≥6 أشهر؛ ولدى الأفراد >5 سنوات نسب CD4+ ≥15% وCD4+ ≥200 lymphocyte/mm³ لمدة ≥6 أشهر) ما لم يكن لديهم دليل مقبول آخر على مناعة حالية ضد الحصبة والحصبة الألمانية والنكاف.',
    'من غير المرجّح أن يستجيب الأشخاص المصابون بـ HIV الذين يتلقّون جرعات منتظمة من IGIV للقاح الجدري المائي أو MMR بسبب استمرار وجود الأجسام المضادة المكتسبة بشكل سلبي. ومع ذلك، نظرًا للفائدة المحتملة، ينبغي النظر في MMR ولقاح الجدري المائي قبل حوالي 14 يومًا من الجرعة التالية المجدولة من IGIV (إذا لم يكن ممنوعًا لسبب آخر)، على الرغم من أن استجابة مناعية مثلى قد لا تحدث بحسب وجود أجسام مضادة محيِّدة ضد فيروس اللقاح. ينبغي تكرار التطعيم (إذا لم يكن ممنوعًا لسبب آخر) بعد الفاصل الموصى به. في معظم الحالات، يكون ذلك بعد إيقاف العلاج.',
    'يمكن للمرضى ذوي leukemia أو lymphoma أو أورام خبيثة أخرى الذين مرضهم في حالة هدأة، واستُعيدت لديهم الكفاءة المناعية، وأُوقف العلاج الكيميائي لديهم لمدة 3 أشهر على الأقل، أن يتلقّوا لقاحات فيروسية حية. يمكن تطعيم الأشخاص ذوي المناعة الخُمْرية الضعيفة (مثل hypogammaglobulinemia أو dysgammaglobulinemia) بلقاح الجدري المائي. ومع ذلك، يتلقّى معظم الأشخاص ذوي هذه الاضطرابات جرعات دورية من IGIV. ينبغي الحفاظ على فاصل زمني مناسب بين إعطاء IGIV ولقاح الجدري المائي في محاولة لمنع استجابة غير كافية للتطعيم بسبب وجود أجسام مضادة محيِّدة من IGIV.',
    'معدّل الإصابة بالهربس النطاقي أعلى لدى الأشخاص ذوي المناعة المتغيرة. يُتوقَّع أن يحافظ البالغون ذوو معظم أنواع المناعة المتغيرة على مناعة متبقية ضد فيروس varicella-zoster بسبب الإصابة الكامنة المزمنة التي تحمي من الجدري المائي الأولي لكنها توفر حماية غير كاملة ضد الهربس النطاقي. لا يُوصى بلقاح الهربس النطاقي لدى الأشخاص ذوي نقص المناعة الأولي أو المكتسب (مثل lymphoma، وleukemia، وأورام تشمل نخاع العظم، والمرضى الذين يتلقّون العلاج الكيميائي) وبعض المرضى المصابين بـ HIV. يمكن إعطاء لقاح الهربس النطاقي لبعض الأشخاص من عمر 50 سنة فأكثر ذوي المناعة المتغيرة، مثل الأشخاص الذين يتلقّون جرعات منخفضة من الأدوية المثبّطة للمناعة، أو ذوي نقص B-cell المعزول (أي المناعة الخُمْرية الضعيفة)، أو المصابين بـ HIV الذين لديهم أعداد CD4+ T-lymphocyte >200 cell/mm³.',
  ],
};

export const GENERAL_PRINCIPLES_COPY: { en: GeneralPrinciplesCopy; ar: GeneralPrinciplesCopy } = {
  en: {
    heroTitle: 'General principles',
    heroLead:
      'Altered immunocompetence — primary and secondary causes, and vaccine safety and effectiveness in immunocompromised patients.',
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    backLabel: '← Special Populations',
    classification: {
      id: GENERAL_PRINCIPLES_SECTION_IDS.en.classification,
      blocks: EN_CLASSIFICATION_BLOCKS,
    },
    vaccineSafety: {
      id: GENERAL_PRINCIPLES_SECTION_IDS.en.vaccineSafety,
      sectionTitle: 'Vaccine safety and effectiveness in altered immunocompetence patients.',
      gridChunks: [EN_NON_LIVE_SAFETY, EN_NON_LIVE_EFFECTIVENESS],
      fullWidthChunks: [EN_LIVE_EFFECTIVENESS, EN_LIVE_SAFETY],
    },
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
    classification: {
      id: GENERAL_PRINCIPLES_SECTION_IDS.ar.classification,
      blocks: AR_CLASSIFICATION_BLOCKS,
    },
    vaccineSafety: {
      id: GENERAL_PRINCIPLES_SECTION_IDS.ar.vaccineSafety,
      sectionTitle: 'سلامة وفعالية اللقاحات في المرضى ذوي المناعة المتغيرة.',
      gridChunks: [AR_NON_LIVE_SAFETY, AR_NON_LIVE_EFFECTIVENESS],
      fullWidthChunks: [AR_LIVE_EFFECTIVENESS, AR_LIVE_SAFETY],
    },
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
