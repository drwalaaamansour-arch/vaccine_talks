export type CancerVaccinationLocale = 'en' | 'ar';

export type CancerContentBlock =
  | { type: 'p'; text: string }
  | { type: 'sub'; title: string; muted?: boolean }
  | { type: 'ul'; items: string[] }
  | { type: 'chips'; items: string[] }
  | {
      type: 'vaccinePair';
      recommendedLabel: string;
      recommended: string;
      notRecommendedLabel: string;
      notRecommended: string;
    }
  | { type: 'alert'; title: string; paragraphs?: string[]; items?: string[] }
  | { type: 'link'; before: string; href: string; linkText: string; after?: string }
  | { type: 'postGrid'; cards: { title: string; blocks: CancerContentBlock[] }[] }
  | { type: 'takeawayList'; items: string[] };

export type CancerVaccinationSection = {
  id: string;
  title: string;
  icon: string;
  variant?: 'takeaway';
  blocks: CancerContentBlock[];
};

export type CancerVaccinationReference = {
  citation: string;
  href: string;
};

export type CancerVaccinationCopy = {
  arHeroTitle: string;
  arHeroLead: string;
  arHeroSecondaryLead: string;
  referencesId: string;
  referencesTitle: string;
  references: CancerVaccinationReference[];
  sections: CancerVaccinationSection[];
  consensusButtonText?: string;
  pdfSectionHeading?: string;
};

const REFERENCES: CancerVaccinationReference[] = [
  {
    citation:
      'Australian Government Department of Health. Table. Recommendations for vaccination in people who have received chemotherapy | The Australian Immunisation Handbook.',
    href: 'https://immunisationhandbook.health.gov.au/resources/tables/table-recommendations-for-vaccination-in-people-who-have-received-chemotherapy',
  },
  {
    citation:
      'Rubin LG, Levin MJ, Ljungman P, et al. 2013 IDSA clinical practice guideline for vaccination of the immunocompromised host. Clin Infect Dis. (PMC4685676).',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4685676/',
  },
  {
    citation: 'Centers for Disease Control and Prevention. Altered Immunocompetence | Vaccines & Immunizations.',
    href: 'https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html',
  },
  {
    citation: 'ASCO. Vaccination of Adults With Cancer: ASCO Guideline. J Clin Oncol.',
    href: 'https://ascopubs.org/doi/10.1200/JCO.24.00032',
  },
];

const ASPLENIA_HREF = '/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia';

const EN_POST_THERAPY_CARDS: { title: string; blocks: CancerContentBlock[] }[] = [
  {
    title: 'Diphtheria, Tetanus, Pertussis and Polio',
    blocks: [
      { type: 'sub', title: 'Children younger than 10 years', muted: true },
      { type: 'ul', items: ['One dose of DTaP-IPV'] },
      { type: 'sub', title: 'Individuals aged 10 years and older', muted: true },
      { type: 'ul', items: ['One dose of Tdap or Td', 'One dose of IPV'] },
    ],
  },
  {
    title: 'Measles, Mumps and Rubella (MMR)',
    blocks: [
      { type: 'ul', items: ['One dose of MMR vaccine'] },
      {
        type: 'p',
        text: 'Serologic testing for measles and rubella immunity should be performed 6–8 weeks after vaccination. Individuals who fail to seroconvert may require an additional dose.',
      },
    ],
  },
  {
    title: 'Hepatitis B',
    blocks: [{ type: 'ul', items: ['One booster dose of hepatitis B vaccine'] }],
  },
  {
    title: 'Pneumococcal Vaccines',
    blocks: [
      { type: 'p', text: 'From 6 years and onward:' },
      {
        type: 'ul',
        items: [
          'One dose of PCV13, followed by two doses of PPSV23',
          'or PCV15 followed by one dose of PPSV23',
          'or PCV20',
        ],
      },
    ],
  },
  {
    title: 'Haemophilus influenzae Type b (Hib)',
    blocks: [
      {
        type: 'ul',
        items: [
          'One dose for children younger than 5 years',
          'One dose for individuals with anatomic or functional asplenia',
        ],
      },
    ],
  },
  {
    title: 'Meningococcal Vaccines',
    blocks: [
      {
        type: 'ul',
        items: ['Booster doses of MenACWY and MenB if previously fully immunized'],
      },
      {
        type: 'p',
        text: 'Individuals with asplenia should receive booster doses every 3–5 years if the risk remains.',
      },
    ],
  },
  {
    title: 'Human Papillomavirus (HPV)',
    blocks: [
      { type: 'p', text: 'For previously unvaccinated individuals:' },
      {
        type: 'ul',
        items: [
          'Age <26 years and no longer immunocompromised: vaccination according to routine recommendations',
          'Immunocompromised individuals or those initiating vaccination at ≥26 years: 3-dose schedule (0, 2, and 6 months)',
        ],
      },
    ],
  },
  {
    title: 'Varicella Vaccine',
    blocks: [
      { type: 'p', text: 'Seronegative individuals may receive:' },
      { type: 'ul', items: ['Two doses of varicella vaccine'] },
      {
        type: 'p',
        text: 'Vaccination should occur at least 6 months after completion of chemotherapy and only when adequate immune recovery has been achieved.',
      },
    ],
  },
];

const AR_POST_THERAPY_CARDS: { title: string; blocks: CancerContentBlock[] }[] = [
  {
    title: 'ديفثيريا والكزاز والسعال الديكي والشلل',
    blocks: [
      { type: 'sub', title: 'الأطفال دون 10 سنوات', muted: true },
      { type: 'ul', items: ['جرعة واحدة من DTaP-IPV'] },
      { type: 'sub', title: 'الأفراد بعمر 10 سنوات فأكثر', muted: true },
      { type: 'ul', items: ['جرعة واحدة من Tdap أو Td', 'جرعة واحدة من IPV'] },
    ],
  },
  {
    title: 'الحصبة والنكاف والحصبة الألمانية (MMR)',
    blocks: [
      { type: 'ul', items: ['جرعة واحدة من لقاح MMR'] },
      {
        type: 'p',
        text: 'يُجرى فحص مصلي لمناعة الحصبة والحصبة الألمانية بعد 6–8 أسابيع من التطعيم. قد يحتاج الأفراد الذين لا يُظهرون تحوّلًا مصليًا إلى جرعة إضافية.',
      },
    ],
  },
  {
    title: 'التهاب الكبد B',
    blocks: [{ type: 'ul', items: ['جرعة منشطة واحدة من لقاح التهاب الكبد B'] }],
  },
  {
    title: 'لقاحات المكورات الرئوية',
    blocks: [
      { type: 'p', text: 'من عمر 6 سنوات فأكثر:' },
      {
        type: 'ul',
        items: [
          'جرعة واحدة من PCV13 يليها جرعتان من PPSV23',
          'أو PCV15 يليها جرعة واحدة من PPSV23',
          'أو PCV20',
        ],
      },
    ],
  },
  {
    title: 'المستدمية النزلية من النوع b (Hib)',
    blocks: [
      {
        type: 'ul',
        items: [
          'جرعة واحدة للأطفال دون 5 سنوات',
          'جرعة واحدة للأفراد ذوي نقص الطحال التشريحي أو الوظيفي',
        ],
      },
    ],
  },
  {
    title: 'لقاحات المكورات السحائية',
    blocks: [
      {
        type: 'ul',
        items: ['جرعات منشطة من MenACWY وMenB إذا كان قد اكتمل التطعيم سابقًا'],
      },
      {
        type: 'p',
        text: 'يجب أن يتلقى الأفراد ذوو نقص الطحال جرعات منشطة كل 3–5 سنوات إذا استمر الخطر.',
      },
    ],
  },
  {
    title: 'فيروس الورم الحليمي البشري (HPV)',
    blocks: [
      { type: 'p', text: 'للأفراد غير المُطعَّمين سابقًا:' },
      {
        type: 'ul',
        items: [
          'العمر <26 سنة ولم يعودوا منقصي المناعة: التطعيم وفق التوصيات الروتينية',
          'الأفراد منقصو المناعة أو من يبدأون التطعيم عند ≥26 سنة: جدول 3 جرعات (0، 2، و6 أشهر)',
        ],
      },
    ],
  },
  {
    title: 'لقاح الجدري المائي',
    blocks: [
      { type: 'p', text: 'قد يتلقى الأفراد السالبون مصليًا:' },
      { type: 'ul', items: ['جرعتان من لقاح الجدري المائي'] },
      {
        type: 'p',
        text: 'يجب أن يُجرى التطعيم بعد 6 أشهر على الأقل من انتهاء العلاج الكيميائي وعندما يتحقق تعافٍ مناعي كافٍ.',
      },
    ],
  },
];

const EN_SECTIONS: CancerVaccinationSection[] = [
  {
    id: 'overview',
    title: 'Overview — key factors',
    icon: '📋',
    blocks: [
      { type: 'p', text: 'The optimal vaccination strategy depends on several factors, including:' },
      {
        type: 'chips',
        items: [
          'Type and stage of malignancy',
          'Age of the patient',
          'Vaccination history',
          'Treatment modality',
          'Degree of immunosuppression',
          'Asplenia or stem cell transplantation',
        ],
      },
    ],
  },
  {
    id: 'impact',
    title: 'Impact of Cancer and Cancer Therapy on Immunity',
    icon: '🛡️',
    blocks: [
      {
        type: 'p',
        text: 'People with cancer, particularly those with hematological malignancies or advanced disease, often experience significant immune dysfunction as a result of both their disease and treatment.',
      },
      { type: 'sub', title: 'Immunosuppression may result from:', muted: true },
      {
        type: 'ul',
        items: [
          'Chemotherapy',
          'Radiotherapy',
          'Corticosteroids',
          'Biologic therapies',
          'Anti-B-cell therapies (e.g., rituximab)',
          'Immune-modulating agents',
          'Cancer immunotherapy',
          'Functional or anatomical asplenia',
        ],
      },
      {
        type: 'p',
        text: 'Patients receiving chemotherapy or radiation therapy for leukemia, lymphoma, multiple myeloma, or solid tumors should generally be considered immunocompromised.',
      },
    ],
  },
  {
    id: 'general-principles',
    title: 'General Principles of Vaccination',
    icon: '⏱️',
    blocks: [
      { type: 'sub', title: 'Vaccination Before Cancer Treatment' },
      { type: 'p', text: 'Whenever feasible, all indicated vaccines should be administered before:' },
      {
        type: 'ul',
        items: ['Chemotherapy', 'Radiotherapy', 'Immunosuppressive therapy', 'Elective splenectomy'],
      },
      { type: 'sub', title: 'Timing of Vaccination' },
      { type: 'sub', title: 'Inactivated Vaccines', muted: true },
      {
        type: 'ul',
        items: [
          'Ideally administered at least 2 weeks before immunosuppressive therapy.',
          'May be administered during chemotherapy if necessary.',
          'Vaccination during treatment is safe but may result in reduced immune responses.',
        ],
      },
      { type: 'sub', title: 'Live Attenuated Vaccines', muted: true },
      {
        type: 'ul',
        items: [
          'Should be administered at least 4 weeks before immunosuppressive therapy.',
          'Are generally contraindicated during active treatment and significant immunosuppression.',
          'May be considered at least 3–12 months after completion of chemotherapy if immune recovery has occurred.',
        ],
      },
    ],
  },
  {
    id: 'during-chemotherapy',
    title: 'Vaccination During Chemotherapy',
    icon: '💊',
    blocks: [
      {
        type: 'p',
        text: 'Vaccination during chemotherapy may be necessary in some situations, particularly when delaying vaccination would leave the patient vulnerable to infection.',
      },
      {
        type: 'p',
        text: 'Although vaccine responses may be suboptimal, inactivated vaccines remain safe and may provide meaningful protection.',
      },
      { type: 'sub', title: 'Severe Neutropenia' },
      {
        type: 'p',
        text: 'Patients with severe neutropenia (absolute neutrophil count <0.5 × 10⁹/L) should generally defer vaccination until recovery to avoid confusion with treatment-related febrile episodes.',
      },
    ],
  },
  {
    id: 'influenza',
    title: 'Influenza Vaccination',
    icon: '🤧',
    blocks: [
      { type: 'sub', title: 'Why Influenza Vaccination Is Important' },
      { type: 'p', text: 'Influenza can cause significant morbidity and mortality in cancer patients, including:' },
      {
        type: 'ul',
        items: ['Secondary bacterial pneumonia', 'Respiratory failure', 'Hospitalization', 'Death'],
      },
      { type: 'p', text: 'Annual influenza vaccination is recommended for all cancer patients aged 6 months and older.' },
      { type: 'sub', title: 'Vaccine Type' },
      {
        type: 'vaccinePair',
        recommendedLabel: 'Recommended',
        recommended: 'Inactivated influenza vaccine (IIV)',
        notRecommendedLabel: 'Not recommended',
        notRecommended: 'Live attenuated influenza vaccine (LAIV)',
      },
      { type: 'sub', title: 'Timing' },
      { type: 'p', text: 'Optimal timing includes:' },
      {
        type: 'ul',
        items: [
          'At least 2 weeks before chemotherapy',
          'Between chemotherapy cycles',
          'Approximately 2 weeks after chemotherapy',
          'Avoiding periods of expected nadir white blood cell counts',
        ],
      },
      {
        type: 'p',
        text: 'Because influenza is seasonal, vaccination should not be unnecessarily delayed when protection is needed.',
      },
      { type: 'sub', title: 'Household Contacts' },
      {
        type: 'p',
        text: 'Family members and close contacts should also receive annual influenza vaccination to reduce the risk of transmission.',
      },
      {
        type: 'alert',
        title: 'IMPORTANT — Cancer Immunotherapy',
        paragraphs: ['Patients receiving immune checkpoint inhibitors such as:'],
        items: [
          'Ipilimumab (CTLA-4 inhibitor)',
          'Nivolumab (PD-1 inhibitor)',
          'Pembrolizumab (PD-1 inhibitor)',
        ],
      },
      {
        type: 'p',
        text: 'may have an increased risk of immune-related adverse events following influenza vaccination. The timing of vaccination should be discussed with the treating oncologist.',
      },
    ],
  },
  {
    id: 'pneumococcal',
    title: 'Pneumococcal Vaccination',
    icon: '🫁',
    blocks: [
      { type: 'p', text: 'Patients with:' },
      {
        type: 'ul',
        items: [
          'Multiple myeloma',
          'Chronic lymphocytic leukemia',
          'Lymphoma',
          'Lung cancer',
          'Generalized malignancies',
        ],
      },
      {
        type: 'p',
        text: 'are at increased risk of invasive pneumococcal disease. Vaccination should ideally be administered before treatment begins.',
      },
      { type: 'sub', title: 'Recommended Strategy' },
      {
        type: 'p',
        text: 'Current recommendations favor the use of pneumococcal conjugate vaccines because they induce superior immune responses compared with polysaccharide vaccines.',
      },
      { type: 'p', text: 'Depending on age and local recommendations, vaccination may include:' },
      { type: 'ul', items: ['PCV13, PCV15 or PCV20', 'Followed by PPSV23 if indicated'] },
      {
        type: 'p',
        text: 'Patients with hematological malignancies, functional asplenia, or other high-risk conditions may require individualized schedules.',
      },
    ],
  },
  {
    id: 'hepatitis-b',
    title: 'Hepatitis B Vaccination',
    icon: '🩺',
    blocks: [
      {
        type: 'p',
        text: 'Hepatitis B virus (HBV) reactivation is a recognized complication of chemotherapy and immunosuppressive therapy, particularly among patients receiving anti-CD20 therapies such as rituximab.',
      },
      { type: 'sub', title: 'Recommendations' },
      {
        type: 'ul',
        items: [
          'Assess HBV status at the time of cancer diagnosis.',
          'Vaccinate susceptible individuals whenever possible.',
          'Monitor patients at risk for HBV reactivation.',
          'Consider post-vaccination serologic testing in selected high-risk individuals.',
        ],
      },
    ],
  },
  {
    id: 'dtap',
    title: 'Diphtheria, Tetanus, and Pertussis Vaccination',
    icon: '💉',
    blocks: [
      {
        type: 'p',
        text: 'Immunity to tetanus, diphtheria, and pertussis may decline following cancer treatment. A booster dose of Tdap should be considered following completion of therapy according to age-appropriate recommendations.',
      },
    ],
  },
  {
    id: 'hpv',
    title: 'Human Papillomavirus (HPV) Vaccination',
    icon: '🦠',
    blocks: [
      { type: 'p', text: 'HPV vaccination is recommended according to routine age-based schedules.' },
      { type: 'sub', title: 'Recommendations' },
      { type: 'ul', items: ['Immunocompromised individuals should receive a 3-dose schedule'] },
      {
        type: 'p',
        text: 'Immunosuppression is not a contraindication to HPV vaccination, although vaccine responses may be reduced.',
      },
    ],
  },
  {
    id: 'meningococcal',
    title: 'Meningococcal Vaccination',
    icon: '🧠',
    blocks: [
      { type: 'p', text: 'Meningococcal vaccination is recommended for:' },
      {
        type: 'ul',
        items: [
          'Adolescents',
          'Individuals with complement deficiencies',
          'Patients with anatomic or functional asplenia',
          'Other high-risk groups',
        ],
      },
      {
        type: 'p',
        text: 'Patients with splenic dysfunction due to malignancy or splenic irradiation should follow recommendations for individuals with asplenia.',
      },
    ],
  },
  {
    id: 'hepatitis-a',
    title: 'Hepatitis A Vaccination',
    icon: '🌍',
    blocks: [
      { type: 'p', text: 'Hepatitis A vaccination is recommended for cancer patients with:' },
      {
        type: 'ul',
        items: [
          'Travel to endemic regions',
          'Occupational exposure',
          'Household exposure',
          'Other recognized risk factors',
        ],
      },
    ],
  },
  {
    id: 'rzv',
    title: 'Recombinant Zoster Vaccine (RZV)',
    icon: '⚡',
    blocks: [
      {
        type: 'p',
        text: 'All immunocompromised adults with cancer aged 18 years and older are recommended to receive:',
      },
      { type: 'ul', items: ['Two doses of recombinant zoster vaccine (Shingrix)'] },
      { type: 'p', text: 'The vaccine is non-live and can be safely administered to immunocompromised patients.' },
    ],
  },
  {
    id: 'biologic',
    title: 'Vaccination in Patients Receiving Biologic and Targeted Therapies',
    icon: '🧬',
    blocks: [
      { type: 'p', text: 'Patients receiving:' },
      {
        type: 'ul',
        items: [
          'Anti-B-cell therapies (e.g., rituximab)',
          'TNF inhibitors',
          'Immune modulators',
          'Cytokine inhibitors',
        ],
      },
      { type: 'p', text: 'may have impaired vaccine responses.' },
      { type: 'sub', title: 'Recommendations' },
      {
        type: 'ul',
        items: [
          'Administer vaccines at least 2 weeks before therapy whenever possible.',
          'Delay live vaccines for at least 3–12 months after treatment.',
          'Delay both live and non-live vaccines for at least 6 months after anti-B-cell therapies, recognizing that longer intervals may sometimes be necessary.',
        ],
      },
    ],
  },
  {
    id: 'live-vaccines',
    title: 'Live Vaccines in Cancer Patients',
    icon: '⚠️',
    blocks: [
      { type: 'p', text: 'Live vaccines are generally contraindicated in patients with:' },
      {
        type: 'ul',
        items: [
          'Active malignancy',
          'Ongoing chemotherapy',
          'Significant immunosuppression',
          'Poorly controlled disease',
        ],
      },
      { type: 'sub', title: 'Examples include:', muted: true },
      {
        type: 'ul',
        items: ['MMR vaccine', 'Varicella vaccine', 'Live attenuated influenza vaccine', 'Oral typhoid vaccine'],
      },
      { type: 'sub', title: 'After Completion of Therapy' },
      { type: 'p', text: 'Live vaccines may be considered when:' },
      {
        type: 'ul',
        items: [
          'At least 3–12 months have elapsed since chemotherapy',
          'The underlying malignancy is in remission',
          'Immune recovery has occurred',
          'The patient is no longer significantly immunocompromised',
        ],
      },
    ],
  },
  {
    id: 'asplenia',
    title: 'Special Considerations in Patients with Asplenia',
    icon: '⚕️',
    blocks: [
      {
        type: 'p',
        text: 'Patients with anatomical or functional asplenia are at increased risk of overwhelming infection caused by encapsulated bacteria.',
      },
      { type: 'sub', title: 'Recommended Vaccines' },
      {
        type: 'ul',
        items: ['Pneumococcal vaccines', 'Meningococcal vaccines (MenACWY and MenB)', 'Hib vaccine'],
      },
      {
        type: 'p',
        text: 'Whenever possible, vaccination should occur at least 2 weeks before elective splenectomy. Patients with persistent asplenia may require booster doses according to risk-based recommendations.',
      },
      {
        type: 'link',
        before: 'For more, please visit:',
        href: ASPLENIA_HREF,
        linkText: 'Anatomic or Functional Asplenia',
      },
    ],
  },
  {
    id: 'after-therapy',
    title: 'Vaccination After Completion of Cancer Therapy',
    icon: '✅',
    blocks: [
      {
        type: 'p',
        text: 'Patients who completed their primary vaccination schedule before cancer diagnosis generally retain some immune memory and can receive most recommended vaccines after recovery without routine pre-vaccination antibody testing.',
      },
      {
        type: 'p',
        text: 'For patients who are clinically well and in remission for at least 3–6 months after completion of therapy, the following booster vaccinations may be considered.',
      },
      { type: 'postGrid', cards: EN_POST_THERAPY_CARDS },
    ],
  },
  {
    id: 'take-home',
    title: 'Key Take-Home Messages for Healthcare Professionals',
    icon: '📌',
    variant: 'takeaway',
    blocks: [
      {
        type: 'takeawayList',
        items: [
          'Vaccination should be planned as early as possible, preferably before cancer treatment begins.',
          'Inactivated vaccines are safe during chemotherapy but may be less immunogenic.',
          'Annual influenza vaccination is recommended for virtually all patients with cancer.',
          'Pneumococcal vaccination is strongly recommended because of the increased risk of invasive disease.',
          'Recombinant zoster vaccine should be considered in immunocompromised adults with cancer.',
          'Live vaccines are generally contraindicated during active treatment and significant immunosuppression.',
          'Anti-B-cell therapies can impair vaccine responses for prolonged periods.',
          'Household contacts should be appropriately vaccinated to help protect immunocompromised patients.',
          "Vaccination recommendations should be individualized according to the patient's malignancy, treatment regimen, immune status, and risk factors.",
        ],
      },
    ],
  },
];

const AR_SECTIONS: CancerVaccinationSection[] = [
  {
    id: 'overview-ar',
    title: 'نظرة عامة — العوامل الرئيسية',
    icon: '📋',
    blocks: [
      { type: 'p', text: 'تعتمد استراتيجية التطعيم المثلى على عدة عوامل، منها:' },
      {
        type: 'chips',
        items: [
          'نوع الورم ومرحلته',
          'عمر المريض',
          'سجل التطعيم',
          'أسلوب العلاج',
          'درجة التثبيط المناعي',
          'نقص الطحال أو زراعة الخلايا الجذعية',
        ],
      },
    ],
  },
  {
    id: 'impact-ar',
    title: 'تأثير السرطان وعلاجه على المناعة',
    icon: '🛡️',
    blocks: [
      {
        type: 'p',
        text: 'غالبًا ما يعاني مرضى السرطان، ولا سيما ذوو الأورام الدموية أو المرض المتقدم، من خلل مناعي ملحوظ نتيجة المرض نفسه والعلاج.',
      },
      { type: 'sub', title: 'قد ينجم التثبيط المناعي عن:', muted: true },
      {
        type: 'ul',
        items: [
          'العلاج الكيميائي',
          'العلاج الإشعاعي',
          'الكورتيكوستيرويدات',
          'العلاجات البيولوجية',
          'علاجات مضادات خلايا B (مثل ريتوكسيماب)',
          'العوامل المعدِّلة للمناعة',
          'العلاج المناعي للسرطان',
          'نقص الطحال الوظيفي أو التشريحي',
        ],
      },
      {
        type: 'p',
        text: 'يجب اعتبار المرضى الذين يتلقون العلاج الكيميائي أو الإشعاعي للابيضاء أو الليمفوما أو الورم النخاعي المتعدد أو الأورام الصلبة منقصي المناعة عمومًا.',
      },
    ],
  },
  {
    id: 'general-principles-ar',
    title: 'المبادئ العامة للتطعيم',
    icon: '⏱️',
    blocks: [
      { type: 'sub', title: 'التطعيم قبل علاج السرطان' },
      { type: 'p', text: 'كلما أمكن، يجب إعطاء جميع اللقاحات المُشار إليها قبل:' },
      {
        type: 'ul',
        items: ['العلاج الكيميائي', 'العلاج الإشعاعي', 'العلاج المثبط للمناعة', 'استئصال الطحال الاختياري'],
      },
      { type: 'sub', title: 'توقيت التطعيم' },
      { type: 'sub', title: 'اللقاحات غير الحية', muted: true },
      {
        type: 'ul',
        items: [
          'يُفضَّل إعطاؤها قبل العلاج المثبط للمناعة بمدة لا تقل عن أسبوعين.',
          'قد تُعطى أثناء العلاج الكيميائي عند الضرورة.',
          'التطعيم أثناء العلاج آمن لكنه قد يُفضي إلى استجابات مناعية أضعف.',
        ],
      },
      { type: 'sub', title: 'اللقاحات الحية المعطّاة', muted: true },
      {
        type: 'ul',
        items: [
          'يجب إعطاؤها قبل العلاج المثبط للمناعة بمدة لا تقل عن 4 أسابيع.',
          'ممنوعة عمومًا أثناء العلاج النشط والتثبيط المناعي الشديد.',
          'قد تُؤخذ في الاعتبار بعد 3–12 شهرًا على الأقل من انتهاء العلاج الكيميائي إذا تحقق التعافي المناعي.',
        ],
      },
    ],
  },
  {
    id: 'during-chemotherapy-ar',
    title: 'التطعيم أثناء العلاج الكيميائي',
    icon: '💊',
    blocks: [
      {
        type: 'p',
        text: 'قد يكون التطعيم أثناء العلاج الكيميائي ضروريًا في بعض الحالات، خاصة عندما يُعرِّض تأجيل التطعيم المريض لخطر العدوى.',
      },
      {
        type: 'p',
        text: 'رغم أن الاستجابة للقاح قد تكون دون المثلى، تبقى اللقاحات غير الحية آمنة وقد توفر حماية ذات معنى.',
      },
      { type: 'sub', title: 'نقص العدلات الشديد' },
      {
        type: 'p',
        text: 'يجب عمومًا تأجيل التطعيم لدى المرضى ذوي نقص العدلات الشديد (العدد المطلق للعدلات <0.5 × 10⁹/L) حتى التعافي لتجنب الخلط مع نوبات الحمى المرتبطة بالعلاج.',
      },
    ],
  },
  {
    id: 'influenza-ar',
    title: 'تطعيم الإنفلونزا',
    icon: '🤧',
    blocks: [
      { type: 'sub', title: 'لماذا يُعد تطعيم الإنفلونزا مهمًا' },
      { type: 'p', text: 'قد تُسبب الإنفلونزا مرضًا ووفيات ملحوظين لدى مرضى السرطان، بما في ذلك:' },
      {
        type: 'ul',
        items: ['الالتهاب الرئوي البكتيري الثانوي', 'الفشل التنفسي', 'الدخول للمستشفى', 'الوفاة'],
      },
      { type: 'p', text: 'يُوصى بالتطعيم السنوي ضد الإنفلونزا لجميع مرضى السرطان من عمر 6 أشهر فأكثر.' },
      { type: 'sub', title: 'نوع اللقاح' },
      {
        type: 'vaccinePair',
        recommendedLabel: 'موصى به',
        recommended: 'لقاح الإنفلونزا غير الحي (IIV)',
        notRecommendedLabel: 'غير موصى به',
        notRecommended: 'لقاح الإنفلونزا الحي المعطّى (LAIV)',
      },
      { type: 'sub', title: 'التوقيت' },
      { type: 'p', text: 'يشمل التوقيت الأمثل:' },
      {
        type: 'ul',
        items: [
          'قبل العلاج الكيميائي بمدة لا تقل عن أسبوعين',
          'بين دورات العلاج الكيميائي',
          'بعد العلاج الكيميائي بحوالي أسبوعين',
          'تجنب فترات الانخفاض المتوقع لخلايا الدم البيضاء',
        ],
      },
      {
        type: 'p',
        text: 'لأن الإنفلونزا موسمية، لا ينبغي تأجيل التطعيم دون داعٍ عند الحاجة إلى الحماية.',
      },
      { type: 'sub', title: 'مخالطو المنزل' },
      {
        type: 'p',
        text: 'يجب أن يتلقى أفراد الأسرة والمخالطون الوثيقون التطعيم السنوي ضد الإنفلونزا أيضًا لتقليل خطر الانتقال.',
      },
      {
        type: 'alert',
        title: 'هام — العلاج المناعي للسرطان',
        paragraphs: ['المرضى الذين يتلقون مثبطات نقاط التفتيش المناعية مثل:'],
        items: [
          'إيبيليموماب (مثبط CTLA-4)',
          'نيفولوماب (مثبط PD-1)',
          'بيمبروليزوماب (مثبط PD-1)',
        ],
      },
      {
        type: 'p',
        text: 'قد يكون لديهم خطر متزايد لأحداث سمية مناعية بعد تطعيم الإنفلونزا. يجب مناقشة توقيت التطعيم مع طبيب الأورام المعالج.',
      },
    ],
  },
  {
    id: 'pneumococcal-ar',
    title: 'تطعيم المكورات الرئوية',
    icon: '🫁',
    blocks: [
      { type: 'p', text: 'المرضى الذين لديهم:' },
      {
        type: 'ul',
        items: [
          'الورم النخاعي المتعدد',
          'ابيضاض الدم الليمفاوي المزمن',
          'الليمفوما',
          'سرطان الرئة',
          'أورام منتشرة',
        ],
      },
      {
        type: 'p',
        text: 'معرّضون لخطر متزايد للمرض الغازي بالمكورات الرئوية. يُفضَّل إعطاء اللقاح قبل بدء العلاج.',
      },
      { type: 'sub', title: 'الاستراتيجية الموصى بها' },
      {
        type: 'p',
        text: 'تفضّل التوصيات الحالية استخدام لقاحات المكورات الرئوية المقترنة لأنها تحفّز استجابات مناعية أفضل مقارنة باللقاحات متعددة السكريات.',
      },
      { type: 'p', text: 'حسب العمر والتوصيات المحلية، قد يشمل التطعيم:' },
      { type: 'ul', items: ['PCV13 أو PCV15 أو PCV20', 'يليه PPSV23 عند الإشارة'] },
      {
        type: 'p',
        text: 'قد يحتاج المرضى ذوو الأورام الدموية أو نقص الطحال الوظيفي أو غيرها من حالات الخطر العالي إلى جداول فردية.',
      },
    ],
  },
  {
    id: 'hepatitis-b-ar',
    title: 'تطعيم التهاب الكبد B',
    icon: '🩺',
    blocks: [
      {
        type: 'p',
        text: 'إعادة تنشيط فيروس التهاب الكبد B (HBV) مضاعفة معروفة للعلاج الكيميائي والعلاج المثبط للمناعة، خاصة لدى المرضى الذين يتلقون علاجات مضادات CD20 مثل ريتوكسيماب.',
      },
      { type: 'sub', title: 'التوصيات' },
      {
        type: 'ul',
        items: [
          'تقييم حالة HBV عند تشخيص السرطان.',
          'تطعيم الأفراد المعرّضين للإصابة كلما أمكن.',
          'متابعة المرضى المعرّضين لخطر إعادة تنشيط HBV.',
          'النظر في الفحص المصلي بعد التطعيم لدى فئات عالية الخطر مختارة.',
        ],
      },
    ],
  },
  {
    id: 'dtap-ar',
    title: 'تطعيم ديفثيريا والكزاز والسعال الديكي',
    icon: '💉',
    blocks: [
      {
        type: 'p',
        text: 'قد تتراجع المناعة ضد الكزاز وديفثيريا والسعال الديكي بعد علاج السرطان. يُنظر في جرعة منشطة من Tdap بعد انتهاء العلاج وفق التوصيات المناسبة للعمر.',
      },
    ],
  },
  {
    id: 'hpv-ar',
    title: 'تطعيم فيروس الورم الحليمي البشري (HPV)',
    icon: '🦠',
    blocks: [
      { type: 'p', text: 'يُوصى بتطعيم HPV وفق الجداول الروتينية حسب العمر.' },
      { type: 'sub', title: 'التوصيات' },
      { type: 'ul', items: ['يجب أن يتلقى الأفراد منقصو المناعة جدول 3 جرعات'] },
      {
        type: 'p',
        text: 'التثبيط المناعي ليس موانعًا لتطعيم HPV، رغم أن الاستجابة للقاح قد تكون أضعف.',
      },
    ],
  },
  {
    id: 'meningococcal-ar',
    title: 'تطعيم المكورات السحائية',
    icon: '🧠',
    blocks: [
      { type: 'p', text: 'يُوصى بتطعيم المكورات السحائية لـ:' },
      {
        type: 'ul',
        items: [
          'المراهقين',
          'الأفراد ذوي نقص المتمم',
          'المرضى ذوي نقص الطحال التشريحي أو الوظيفي',
          'فئات أخرى عالية الخطر',
        ],
      },
      {
        type: 'p',
        text: 'يجب أن يتبع المرضى ذوو خلل وظيفة الطحال بسبب الورم أو الإشعاع على الطحال توصيات الأفراد ذوي نقص الطحال.',
      },
    ],
  },
  {
    id: 'hepatitis-a-ar',
    title: 'تطعيم التهاب الكبد A',
    icon: '🌍',
    blocks: [
      { type: 'p', text: 'يُوصى بتطعيم التهاب الكبد A لمرضى السرطان الذين لديهم:' },
      {
        type: 'ul',
        items: [
          'سفر إلى مناطق مستوطنة',
          'تعرّض مهني',
          'تعرّض منزلي',
          'عوامل خطر معترف بها أخرى',
        ],
      },
    ],
  },
  {
    id: 'rzv-ar',
    title: 'لقاح الحزام النطاقي المعاد التركيب (RZV)',
    icon: '⚡',
    blocks: [
      {
        type: 'p',
        text: 'يُوصى لجميع البالغين منقصي المناعة المصابين بالسرطان بعمر 18 سنة فأكثر بتلقي:',
      },
      { type: 'ul', items: ['جرعتين من لقاح الحزام النطاقي المعاد التركيب (Shingrix)'] },
      { type: 'p', text: 'اللقاح غير حي ويمكن إعطاؤه بأمان للمرضى منقصي المناعة.' },
    ],
  },
  {
    id: 'biologic-ar',
    title: 'التطعيم للمرضى الذين يتلقون العلاجات البيولوجية والموجهة',
    icon: '🧬',
    blocks: [
      { type: 'p', text: 'المرضى الذين يتلقون:' },
      {
        type: 'ul',
        items: [
          'علاجات مضادات خلايا B (مثل ريتوكسيماب)',
          'مثبطات TNF',
          'معدّلات المناعة',
          'مثبطات السيتوكينات',
        ],
      },
      { type: 'p', text: 'قد تكون لديهم استجابات منقوصة للقاحات.' },
      { type: 'sub', title: 'التوصيات' },
      {
        type: 'ul',
        items: [
          'إعطاء اللقاحات قبل العلاج بمدة لا تقل عن أسبوعين كلما أمكن.',
          'تأجيل اللقاحات الحية لمدة 3–12 شهرًا على الأقل بعد العلاج.',
          'تأجيل اللقاحات الحية وغير الحية لمدة 6 أشهر على الأقل بعد علاجات مضادات خلايا B، مع الاعتراف بأن فترات أطول قد تكون ضرورية أحيانًا.',
        ],
      },
    ],
  },
  {
    id: 'live-vaccines-ar',
    title: 'اللقاحات الحية لمرضى السرطان',
    icon: '⚠️',
    blocks: [
      { type: 'p', text: 'اللقاحات الحية ممنوعة عمومًا لدى المرضى الذين لديهم:' },
      {
        type: 'ul',
        items: [
          'ورم نشط',
          'علاج كيميائي جارٍ',
          'تثبيط مناعي شديد',
          'مرض غير مضبوط جيدًا',
        ],
      },
      { type: 'sub', title: 'تشمل الأمثلة:', muted: true },
      {
        type: 'ul',
        items: ['لقاح MMR', 'لقاح الجدري المائي', 'لقاح الإنفلونزا الحي المعطّى', 'لقاح التيفoid الفموي'],
      },
      { type: 'sub', title: 'بعد انتهاء العلاج' },
      { type: 'p', text: 'قد تُؤخذ اللقاحات الحية في الاعتبار عندما:' },
      {
        type: 'ul',
        items: [
          'مرت 3–12 شهرًا على الأقل منذ العلاج الكيميائي',
          'الورم الأساسي في حالة هدوء',
          'تحقق التعافي المناعي',
          'لم يعد المريض منقص المناعة بشكل ملحوظ',
        ],
      },
    ],
  },
  {
    id: 'asplenia-ar',
    title: 'اعتبارات خاصة للمرضى ذوي نقص الطحال',
    icon: '⚕️',
    blocks: [
      {
        type: 'p',
        text: 'المرضى ذوو نقص الطحال التشريحي أو الوظيفي معرّضون لخطر متزايد للعدوى الساحقة الناجمة عن البكتيريا مغلفة الغشاء.',
      },
      { type: 'sub', title: 'اللقاحات الموصى بها' },
      {
        type: 'ul',
        items: ['لقاحات المكورات الرئوية', 'لقاحات المكورات السحائية (MenACWY وMenB)', 'لقاح Hib'],
      },
      {
        type: 'p',
        text: 'كلما أمكن، يجب أن يُجرى التطعيم قبل استئصال الطحال الاختياري بمدة لا تقل عن أسبوعين. قد يحتاج المرضى ذوو نقص الطحال المستمر إلى جرعات منشطة وفق توصيات قائمة على الخطر.',
      },
      {
        type: 'link',
        before: 'لمزيد من المعلومات، يُرجى زيارة:',
        href: ASPLENIA_HREF,
        linkText: 'نقص الطحال التشريحي أو الوظيفي',
      },
    ],
  },
  {
    id: 'after-therapy-ar',
    title: 'التطعيم بعد انتهاء علاج السرطان',
    icon: '✅',
    blocks: [
      {
        type: 'p',
        text: 'المرضى الذين أكملوا جدول التطعيم الأساسي قبل تشخيص السرطان يحتفظون عمومًا ببعض الذاكرة المناعية ويمكنهم تلقي معظم اللقاحات الموصى بها بعد التعافي دون فحص روتيني للأجسام المضادة قبل التطعيم.',
      },
      {
        type: 'p',
        text: 'للمرضى الذين هم بصحة سريرية جيدة وفي حالة هدوء لمدة 3–6 أشهر على الأقل بعد انتهاء العلاج، قد تُؤخذ جرعات المنشطات التالية في الاعتبار.',
      },
      { type: 'postGrid', cards: AR_POST_THERAPY_CARDS },
    ],
  },
  {
    id: 'take-home-ar',
    title: 'رسائل رئيسية للممارسين الصحيين',
    icon: '📌',
    variant: 'takeaway',
    blocks: [
      {
        type: 'takeawayList',
        items: [
          'يجب التخطيط للتطعيم في أقرب وقت ممكن، ويفضَّل قبل بدء علاج السرطان.',
          'اللقاحات غير الحية آمنة أثناء العلاج الكيميائي لكنها قد تكون أقل تحفيزًا للمناعة.',
          'يُوصى بالتطعيم السنوي ضد الإنفلونزا لجميع مرضى السرطان تقريبًا.',
          'يُوصى بشدة بتطعيم المكورات الرئوية بسبب زيادة خطر المرض الغازي.',
          'يجب النظر في لقاح الحزام النطاقي المعاد التركيب لدى البالغين منقصي المناعة المصابين بالسرطان.',
          'اللقاحات الحية ممنوعة عمومًا أثناء العلاج النشط والتثبيط المناعي الشديد.',
          'قد تُضعف علاجات مضادات خلايا B استجابة اللقاحات لفترات طويلة.',
          'يجب تطعيم مخالطي المنزل بشكل مناسب للمساعدة في حماية المرضى منقصي المناعة.',
          'يجب تفصيل توصيات التطعيم وفق نوع الورم، ونظام العلاج، والحالة المناعية، وعوامل الخطر لدى المريض.',
        ],
      },
    ],
  },
];

export const CANCER_VACCINATION_EN_TOC: { id: string; label: string }[] = [
  { id: 'overview', label: 'Key factors' },
  { id: 'impact', label: 'Impact on immunity' },
  { id: 'general-principles', label: 'General principles' },
  { id: 'during-chemotherapy', label: 'During chemotherapy' },
  { id: 'influenza', label: 'Influenza' },
  { id: 'pneumococcal', label: 'Pneumococcal' },
  { id: 'hepatitis-b', label: 'Hepatitis B' },
  { id: 'dtap', label: 'DTP' },
  { id: 'hpv', label: 'HPV' },
  { id: 'meningococcal', label: 'Meningococcal' },
  { id: 'hepatitis-a', label: 'Hepatitis A' },
  { id: 'rzv', label: 'Shingles (RZV)' },
  { id: 'biologic', label: 'Biologic therapies' },
  { id: 'live-vaccines', label: 'Live vaccines' },
  { id: 'asplenia', label: 'Asplenia' },
  { id: 'after-therapy', label: 'After therapy' },
  { id: 'take-home', label: 'Take-home messages' },
  { id: 'related-resources', label: 'Expert consensus' },
  { id: 'handbook-pdfs', label: 'Guidelines & PDFs' },
  { id: 'references', label: 'References' },
];

export const CANCER_VACCINATION_AR_TOC_FULL: { id: string; label: string }[] = [
  { id: 'overview-ar', label: 'العوامل الرئيسية' },
  { id: 'impact-ar', label: 'التأثير على المناعة' },
  { id: 'general-principles-ar', label: 'المبادئ العامة' },
  { id: 'during-chemotherapy-ar', label: 'أثناء العلاج الكيميائي' },
  { id: 'influenza-ar', label: 'الإنفلونزا' },
  { id: 'pneumococcal-ar', label: 'المكورات الرئوية' },
  { id: 'hepatitis-b-ar', label: 'التهاب الكبد B' },
  { id: 'dtap-ar', label: 'ديفثيريا والكزاز والسعال الديكي' },
  { id: 'hpv-ar', label: 'فيروس الورم الحليمي البشري' },
  { id: 'meningococcal-ar', label: 'المكورات السحائية' },
  { id: 'hepatitis-a-ar', label: 'التهاب الكبد A' },
  { id: 'rzv-ar', label: 'الهربس النطاقي (RZV)' },
  { id: 'biologic-ar', label: 'العلاجات البيولوجية' },
  { id: 'live-vaccines-ar', label: 'اللقاحات الحية' },
  { id: 'asplenia-ar', label: 'نقص الطحال' },
  { id: 'after-therapy-ar', label: 'بعد انتهاء العلاج' },
  { id: 'take-home-ar', label: 'رسائل للتذكير' },
  { id: 'related-resources-ar', label: 'توافق الخبراء' },
  { id: 'handbook-pdfs-ar', label: 'الإرشادات وملفات PDF' },
  { id: 'references-ar', label: 'المراجع' },
];

export const CANCER_VACCINATION_SECTION_IDS = {
  en: {
    overview: 'overview',
    impact: 'impact',
    generalPrinciples: 'general-principles',
    duringChemotherapy: 'during-chemotherapy',
    influenza: 'influenza',
    pneumococcal: 'pneumococcal',
    hepatitisB: 'hepatitis-b',
    dtap: 'dtap',
    hpv: 'hpv',
    meningococcal: 'meningococcal',
    hepatitisA: 'hepatitis-a',
    rzv: 'rzv',
    biologic: 'biologic',
    liveVaccines: 'live-vaccines',
    asplenia: 'asplenia',
    afterTherapy: 'after-therapy',
    takeHome: 'take-home',
    relatedResources: 'related-resources',
    handbookPdfs: 'handbook-pdfs',
    references: 'references',
  },
  ar: {
    overview: 'overview-ar',
    impact: 'impact-ar',
    generalPrinciples: 'general-principles-ar',
    duringChemotherapy: 'during-chemotherapy-ar',
    influenza: 'influenza-ar',
    pneumococcal: 'pneumococcal-ar',
    hepatitisB: 'hepatitis-b-ar',
    dtap: 'dtap-ar',
    hpv: 'hpv-ar',
    meningococcal: 'meningococcal-ar',
    hepatitisA: 'hepatitis-a-ar',
    rzv: 'rzv-ar',
    biologic: 'biologic-ar',
    liveVaccines: 'live-vaccines-ar',
    asplenia: 'asplenia-ar',
    afterTherapy: 'after-therapy-ar',
    takeHome: 'take-home-ar',
    relatedResources: 'related-resources-ar',
    handbookPdfs: 'handbook-pdfs-ar',
    references: 'references-ar',
  },
} as const;

export const CANCER_VACCINATION_COPY: Record<CancerVaccinationLocale, CancerVaccinationCopy> = {
  en: {
    arHeroTitle: '',
    arHeroLead: '',
    arHeroSecondaryLead: '',
    referencesId: 'references',
    referencesTitle: 'References',
    references: REFERENCES,
    consensusButtonText:
      'Expert consensus on re-immunization strategies for pediatric oncology patients in Egypt',
    pdfSectionHeading: 'Guidelines and handbook tables (PDF)',
    sections: EN_SECTIONS,
  },
  ar: {
    arHeroTitle: 'التطعيم لمرضى السرطان',
    arHeroLead:
      'يُعرَّض مرضى السرطان لخطر متزايد للإصابة بالعدوى التي يمكن الوقاية منها بالتطعيم، بسبب الورم الأساسي والتأثيرات المثبطة للمناعة لعلاج السرطان. يمكن أن يُضعف العلاج الكيميائي، والإشعاعي، والعلاج المناعي، والعوامل البيولوجية، وغيرها من العلاجات المثبطة للمناعة وظيفة المناعة، ويقلل الاستجابة للقاحات، ويزيد من القابلية للإصابة بعدوى شديدة.',
    arHeroSecondaryLead:
      'التطعيم عنصر مهم في الرعاية الشاملة لمرضى السرطان. كلما أمكن، يجب إعطاء اللقاحات قبل بدء العلاج لتعظيم الحماية.',
    referencesId: 'references-ar',
    referencesTitle: 'المراجع',
    references: REFERENCES,
    consensusButtonText:
      'توافق الخبراء حول استراتيجيات إعادة التطعيم لمرضى الأورام عند الأطفال في مصر',
    pdfSectionHeading: 'إرشادات وجداول الدليل (PDF)',
    sections: AR_SECTIONS,
  },
};

export const CANCER_VACCINATION_TOC = CANCER_VACCINATION_EN_TOC;
