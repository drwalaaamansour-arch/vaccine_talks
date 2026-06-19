export type HsctVaccinationLocale = 'en' | 'ar';

export type HsctTocItem = {
  id: string;
  label: string;
};

export type HsctSimpleSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type HsctScheduleCard = {
  label: string;
  vaccine: string;
  timingBadge?: string;
  intro?: string;
  seriesTitle?: string;
  steps?: string[];
  followedByTitle?: string;
  followedBySteps?: string[];
  includesTitle?: string;
  includesItems?: string[];
};

export type HsctClinicalNote = {
  title: string;
  text: string;
};

export type HsctInactivatedVaccinesSection = {
  title: string;
  pneumococcal: {
    title: string;
    intro: string[];
    cards: HsctScheduleCard[];
    note: HsctClinicalNote;
  };
  hib: {
    title: string;
    bullets: string[];
  };
  dtap: {
    title: string;
    cards: HsctScheduleCard[];
    note: HsctClinicalNote;
  };
  influenza: {
    title: string;
    bullets: string[];
  };
  hepatitisB: {
    title: string;
    text: string;
  };
  hepatitisA: {
    title: string;
    text: string;
  };
  ipv: {
    title: string;
    text: string;
  };
  meningococcal: {
    title: string;
    introTitle: string;
    introBullets: string[];
    cards: HsctScheduleCard[];
  };
  hpv: {
    title: string;
    intro: string;
    bullets: string[];
  };
  rzv: {
    title: string;
    intro: string;
    bullets: string[];
    text: string;
  };
};

export type HsctLiveVaccinesSection = {
  title: string;
  paragraphs: string[];
  eligibilityCriteria: string[];
  mmr: {
    title: string;
    text: string;
  };
  varicella: {
    title: string;
    text: string;
  };
};

export type HsctTravelSection = {
  title: string;
  intro: string;
  includesTitle: string;
  vaccines: string[];
  yellowFeverNote: HsctClinicalNote;
  specialistNote: HsctClinicalNote;
};

export type HsctSerologySection = {
  title: string;
  recommended: {
    title: string;
    introTitle: string;
    bullets: string[];
    note: HsctClinicalNote;
  };
  notRecommended: {
    title: string;
    introTitle: string;
    bullets: string[];
  };
};

export type HsctPediatricConsensusCta = {
  badge: string;
  emoji: string;
  title: string;
  lead: string;
  kicker: string;
  action: string;
};

export type HsctReference = {
  citation: string;
  href: string;
};

export type HsctVaccinationCopy = {
  heroTitle: string;
  heroLead: string;
  arHeroTitle: string;
  arHeroLead: string;
  overview: HsctSimpleSection;
  immunocompromised: HsctSimpleSection;
  gvhd: HsctSimpleSection;
  generalPrinciples: HsctSimpleSection;
  inactivated: HsctInactivatedVaccinesSection;
  live: HsctLiveVaccinesSection;
  notRecommended: HsctSimpleSection;
  travel: HsctTravelSection;
  serology: HsctSerologySection;
  donor: HsctSimpleSection;
  keyPoints: {
    title: string;
    bullets: string[];
  };
  pediatricConsensusCta: HsctPediatricConsensusCta;
  referencesTitle: string;
  references: HsctReference[];
  infographicAlt: string;
  pdfTitles: {
    hsctVaccination: string;
    australianTable: string;
  };
};

export const HSCT_SECTION_IDS = {
  en: {
    overview: 'overview',
    immunocompromised: 'immunocompromised',
    gvhd: 'gvhd',
    generalPrinciples: 'general-principles',
    inactivated: 'inactivated',
    live: 'live',
    notRecommended: 'not-recommended',
    travel: 'travel',
    serology: 'serology',
    donor: 'donor',
    keyPoints: 'key-points',
    references: 'references',
    resources: 'resources',
  },
  ar: {
    overview: 'overview-ar',
    immunocompromised: 'immunocompromised-ar',
    gvhd: 'gvhd-ar',
    generalPrinciples: 'general-principles-ar',
    inactivated: 'inactivated-ar',
    live: 'live-ar',
    notRecommended: 'not-recommended-ar',
    travel: 'travel-ar',
    serology: 'serology-ar',
    donor: 'donor-ar',
    keyPoints: 'key-points-ar',
    references: 'references-ar',
    resources: 'resources-ar',
  },
} as const;

export const HSCT_EN_TOC: HsctTocItem[] = [
  { id: HSCT_SECTION_IDS.en.overview, label: 'Overview' },
  { id: HSCT_SECTION_IDS.en.immunocompromised, label: 'Why immunocompromised' },
  { id: HSCT_SECTION_IDS.en.gvhd, label: 'GVHD considerations' },
  { id: HSCT_SECTION_IDS.en.generalPrinciples, label: 'General principles' },
  { id: HSCT_SECTION_IDS.en.inactivated, label: 'Inactivated vaccines' },
  { id: HSCT_SECTION_IDS.en.live, label: 'Live vaccines' },
  { id: HSCT_SECTION_IDS.en.notRecommended, label: 'Not recommended' },
  { id: HSCT_SECTION_IDS.en.travel, label: 'Travel vaccines' },
  { id: HSCT_SECTION_IDS.en.serology, label: 'Serological testing' },
  { id: HSCT_SECTION_IDS.en.donor, label: 'Donor vaccination' },
  { id: HSCT_SECTION_IDS.en.keyPoints, label: 'Key clinical points' },
  { id: HSCT_SECTION_IDS.en.references, label: 'References' },
  { id: HSCT_SECTION_IDS.en.resources, label: 'PDFs & resources' },
];

export const HSCT_AR_TOC: HsctTocItem[] = [
  { id: HSCT_SECTION_IDS.ar.overview, label: 'نظرة عامة' },
  { id: HSCT_SECTION_IDS.ar.immunocompromised, label: 'ليه المناعة ضعيفة' },
  { id: HSCT_SECTION_IDS.ar.gvhd, label: 'اعتبارات GVHD' },
  { id: HSCT_SECTION_IDS.ar.generalPrinciples, label: 'المبادئ العامة' },
  { id: HSCT_SECTION_IDS.ar.inactivated, label: 'اللقاحات غير الحية' },
  { id: HSCT_SECTION_IDS.ar.live, label: 'اللقاحات الحية' },
  { id: HSCT_SECTION_IDS.ar.notRecommended, label: 'غير موصى بها' },
  { id: HSCT_SECTION_IDS.ar.travel, label: 'لقاحات السفر' },
  { id: HSCT_SECTION_IDS.ar.serology, label: 'الاختبارات المصلية' },
  { id: HSCT_SECTION_IDS.ar.donor, label: 'تطعيم المتبرع' },
  { id: HSCT_SECTION_IDS.ar.keyPoints, label: 'نقاط إكلينيكية أساسية' },
  { id: HSCT_SECTION_IDS.ar.references, label: 'المراجع' },
  { id: HSCT_SECTION_IDS.ar.resources, label: 'ملفات PDF والموارد' },
];

const HSCT_REFERENCES: HsctReference[] = [
  {
    citation: 'CDC — Best Practices Guidance: Vaccination of persons who have altered immunocompetence.',
    href: 'https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html',
  },
  {
    citation:
      'Australian Immunisation Handbook — Table: Recommendations for vaccination after haematopoietic stem cell transplant in children and adults.',
    href: 'https://immunisationhandbook.health.gov.au/resources/tables/table-recommendations-for-vaccination-after-haematopoietic-stem-cell-transplant-in-children-and-adults',
  },
];

export const HSCT_COPY: Record<HsctVaccinationLocale, HsctVaccinationCopy> = {
  en: {
    heroTitle: 'Haematopoietic stem cell transplant recipients',
    heroLead:
      'Revaccination guidance for autologous and allogeneic HSCT recipients — inactivated schedules, live vaccine timing, serology, and travel vaccines.',
    arHeroTitle: '',
    arHeroLead: '',
    overview: {
      title: 'Overview',
      paragraphs: [
        'Recipients of haematopoietic stem cell transplants (HSCT) are at increased risk of vaccine-preventable diseases due to prolonged immunosuppression and the loss of pre-existing immunity. Both autologous and allogeneic HSCT recipients may lose protective immunity acquired through previous vaccination or natural infection, making revaccination an essential component of post-transplant care.',
        'HSCT involves the administration of hematopoietic-ablative therapy followed by the infusion of stem cells obtained either from the recipient (autologous transplant) or from a donor (allogeneic transplant). Stem cells may be collected from:',
        'Although autologous HSCT recipients generally recover immune function more rapidly than allogeneic recipients, both groups require systematic revaccination after transplantation.',
      ],
      bullets: ['Peripheral blood', 'Bone marrow', 'Umbilical cord blood'],
    },
    immunocompromised: {
      title: 'Why Are HSCT Recipients Immunocompromised?',
      paragraphs: [
        'Immunosuppression following HSCT results from several factors:',
        'As immune reconstitution occurs, immunologic memory from previous vaccinations gradually declines. Antibody levels against vaccine-preventable diseases such as tetanus, poliovirus, measles, mumps, rubella, and infections caused by encapsulated bacteria may decrease significantly within 1–4 years after transplantation if revaccination is not performed.',
      ],
      bullets: [
        'Conditioning chemotherapy and/or radiotherapy administered before transplantation',
        'Graft-versus-host disease (GVHD) in allogeneic HSCT recipients',
        'Immunosuppressive therapies used to prevent or treat GVHD',
        'The underlying disease that necessitated transplantation',
      ],
    },
    gvhd: {
      title: 'Special Considerations: Graft-versus-Host Disease (GVHD)',
      paragraphs: [
        'Chronic GVHD is associated with persistent immune dysfunction and functional hyposplenism, resulting in increased susceptibility to infections caused by encapsulated organisms, particularly Streptococcus pneumoniae.',
        'Patients with chronic GVHD who remain on immunosuppressive therapy may also require antibiotic prophylaxis in addition to vaccination.',
        "Because immune recovery varies substantially between individuals, recommendations regarding live vaccines depend on the patient's degree of immune reconstitution and immunosuppressive status.",
      ],
    },
    generalPrinciples: {
      title: 'General Principles of Vaccination After HSCT',
      paragraphs: [
        'Current guidelines generally recommend the same revaccination schedule for both autologous and allogeneic HSCT recipients regardless of:',
        'Even patients who completed routine vaccinations before transplantation should be considered for revaccination because protective immunity may be lost after HSCT.',
        'Most inactivated vaccines are restarted approximately 6 months after transplantation, although certain vaccines may be initiated earlier in selected circumstances.',
      ],
      bullets: ['Stem cell source', 'Conditioning regimen', 'Donor type'],
    },
    inactivated: {
      title: 'Inactivated Vaccines After HSCT',
      pneumococcal: {
        title: 'Pneumococcal Vaccines',
        intro: [
          'HSCT recipients are at particularly high risk for invasive pneumococcal disease.',
          'Revaccination is recommended regardless of prior pneumococcal vaccination history.',
        ],
        cards: [
          {
            label: 'Preferred Schedule',
            vaccine: 'PCV20',
            timingBadge: 'Start 3–6 months after HSCT',
            seriesTitle: 'Four-dose series',
            steps: [
              'First three doses administered 4 weeks apart',
              'Fourth dose administered 6 months after the third dose or 1 year after HSCT, whichever occurs later',
            ],
          },
          {
            label: 'Alternative Schedule',
            vaccine: 'PCV15',
            intro: 'Three doses given 4 weeks apart',
            followedByTitle: 'Followed by PPSV23',
            followedBySteps: [
              '1 year after the final PCV15 dose',
              'At least 4 weeks after the third PCV15 dose',
            ],
          },
        ],
        note: {
          title: 'GVHD note',
          text: 'For patients with GVHD, a fourth dose of PCV15 is recommended instead of PPSV23.',
        },
      },
      hib: {
        title: 'Haemophilus influenzae Type b (Hib) Vaccine',
        bullets: [
          'A three-dose Hib series is recommended beginning 6 months after transplantation.',
          'Doses should be separated by at least 1 month.',
          'This recommendation applies regardless of whether Hib vaccine was received before HSCT.',
        ],
      },
      dtap: {
        title: 'Diphtheria, Tetanus, and Pertussis Vaccines',
        cards: [
          {
            label: 'Children <7 Years',
            vaccine: 'DTaP',
            intro: 'Three-dose DTaP series',
          },
          {
            label: 'Individuals ≥7 Years',
            vaccine: 'DTaP / Tdap / Td',
            includesTitle: 'Acceptable schedules include:',
            includesItems: [
              'Three doses of DTaP',
              'One dose of Tdap followed by two doses of DT',
              'One dose of Tdap followed by two doses of Td',
            ],
          },
        ],
        note: {
          title: 'Preferred schedule',
          text: 'For previously unvaccinated patients older than 6 years, a schedule consisting of one dose of Tdap followed by two doses of Td is generally preferred.',
        },
      },
      influenza: {
        title: 'Influenza Vaccine',
        bullets: [
          'Annual influenza vaccination is recommended lifelong.',
          'Routine administration should begin at least 6 months after HSCT.',
          'Vaccination may be considered as early as 4 months after HSCT during influenza circulation.',
          'If influenza vaccine is administered at 4 months post-transplant, a second dose should be considered.',
          'Children younger than 9 years receiving influenza vaccine for the first time should receive two doses according to standard recommendations.',
          'Only inactivated influenza vaccines should be used.',
        ],
      },
      hepatitisB: {
        title: 'Hepatitis B Vaccine',
        text: 'Revaccination against hepatitis B is recommended after HSCT. Because vaccine response may be impaired, post-vaccination serologic testing should be performed approximately 4–6 weeks after completion of the vaccine series to assess protection and determine whether additional doses are needed.',
      },
      hepatitisA: {
        title: 'Hepatitis A Vaccine',
        text: 'Hepatitis A vaccine should be re-administered according to post-transplant vaccination recommendations and may be particularly important for individuals at increased risk or those planning international travel.',
      },
      ipv: {
        title: 'Inactivated Polio Vaccine (IPV)',
        text: 'Revaccination with IPV is recommended because immunity to poliovirus may decline following transplantation.',
      },
      meningococcal: {
        title: 'Meningococcal Vaccines',
        introTitle: 'Revaccination is recommended for:',
        introBullets: [
          'Adolescents according to routine schedules',
          'Individuals with specific high-risk conditions',
        ],
        cards: [
          {
            label: 'Vaccine types',
            vaccine: 'MenACWY & MenB',
            includesTitle: 'This includes both:',
            includesItems: [
              'Meningococcal conjugate vaccines (MenACWY)',
              'Serogroup B meningococcal vaccines (MenB) when indicated.',
            ],
          },
        ],
      },
      hpv: {
        title: 'Human Papillomavirus (HPV) Vaccine',
        intro: 'HPV vaccination should be administered according to age-based recommendations:',
        bullets: [
          'Routine vaccination for individuals aged 9–26 years',
          'Adults aged 27–45 years based on shared clinical decision-making',
        ],
      },
      rzv: {
        title: 'Recombinant Zoster Vaccine (RZV)',
        intro: 'RZV may be administered after immune recovery:',
        bullets: ['6–12 months after allogeneic HSCT', '3–12 months after autologous HSCT'],
        text: 'Ideally, vaccination should be completed approximately 2 months before discontinuation of antiviral prophylaxis when such therapy is being used.',
      },
    },
    live: {
      title: 'Live Vaccines After HSCT',
      paragraphs: [
        'Live vaccines should not be administered routinely during the first 24 months after HSCT.',
        'Live vaccines may be considered only if all of the following conditions are met:',
      ],
      eligibilityCriteria: [
        'At least 24 months have elapsed since transplantation',
        'No active GVHD is present',
        'The patient is no longer receiving immunosuppressive therapy',
        'Adequate immune reconstitution has occurred',
      ],
      mmr: {
        title: 'Measles, Mumps, and Rubella (MMR)',
        text: 'MMR vaccine may be administered under the above conditions. Serologic testing is recommended approximately 4–6 weeks after the second dose because antibody levels may guide the need for additional vaccination.',
      },
      varicella: {
        title: 'Varicella Vaccine',
        text: 'Varicella vaccine may be considered when the same eligibility criteria for live vaccines are met. Post-vaccination varicella serology is not recommended because currently available commercial assays are insufficiently sensitive to detect vaccine-induced immunity.',
      },
    },
    notRecommended: {
      title: 'Vaccines Not Recommended After HSCT',
      paragraphs: [
        'The following live vaccines are generally contraindicated after HSCT:',
        'These vaccines should not be administered to HSCT recipients.',
      ],
      bullets: [
        'Bacillus Calmette–Guérin (BCG)',
        'Live attenuated influenza vaccine (LAIV)',
        'Oral typhoid vaccine',
        'Rotavirus vaccine',
      ],
    },
    travel: {
      title: 'Travel and Exposure-Based Vaccines',
      intro:
        'Some vaccines are not routinely indicated but may be required depending on travel plans, occupational exposure, or individual risk factors.',
      includesTitle: 'These include:',
      vaccines: [
        'Yellow fever vaccine',
        'Rabies vaccine',
        'Japanese encephalitis vaccine',
        'Tick-borne encephalitis vaccine',
        'Hepatitis A vaccine',
        'Typhoid vaccine',
      ],
      yellowFeverNote: {
        title: 'Yellow fever revaccination',
        text: 'For individuals who received yellow fever vaccine before HSCT, revaccination may be required after transplantation when travel-related risk exists and immune competence has been restored.',
      },
      specialistNote: {
        title: 'Specialist consultation',
        text: 'Specialist consultation is recommended before administering any travel-related vaccine to HSCT recipients.',
      },
    },
    serology: {
      title: 'Serological Testing After Vaccination',
      recommended: {
        title: 'Serological Testing Recommended',
        introTitle: 'Assessment of vaccine response is recommended:',
        bullets: [
          'Hepatitis B: 4–6 weeks after completion of the vaccine series',
          'MMR: 4–6 weeks after the second dose',
        ],
        note: {
          title: 'Clinical use of results',
          text: 'Results may guide the need for additional vaccine doses.',
        },
      },
      notRecommended: {
        title: 'Serological Testing Not Routinely Recommended',
        introTitle: 'Routine serological testing is not recommended for:',
        bullets: [
          'Diphtheria',
          'Tetanus',
          'Pertussis',
          'Hib',
          'Influenza',
          'Pneumococcal vaccines',
          'Poliomyelitis',
          'Varicella (post-vaccination)',
          'COVID-19 vaccines',
        ],
      },
    },
    donor: {
      title: 'Donor Vaccination',
      paragraphs: [
        'Vaccination of stem cell donors before stem cell collection has been shown to improve early antibody responses in recipients for certain vaccines, including:',
        'However, practical, logistical, and ethical considerations often limit routine implementation of donor immunization strategies.',
      ],
      bullets: ['Hepatitis B', 'Tetanus', 'Hib', 'Pneumococcal conjugate vaccines'],
    },
    keyPoints: {
      title: 'Key Clinical Points',
      bullets: [
        'Protective immunity is frequently lost after both autologous and allogeneic HSCT.',
        'Revaccination is recommended regardless of vaccination history before transplantation.',
        'Most inactivated vaccines are restarted approximately 6 months after HSCT.',
        'Pneumococcal vaccination is a high priority because of the increased risk of invasive disease.',
        'Live vaccines should not be administered until at least 24 months after HSCT and only in immunocompetent patients without GVHD or ongoing immunosuppression.',
        'Serologic testing is particularly useful following hepatitis B and MMR vaccination.',
        'Lifelong annual influenza vaccination is recommended.',
        'Travel-related vaccination should be individualized according to destination and immune status.',
      ],
    },
    pediatricConsensusCta: {
      badge: 'Notable · Made for Egypt',
      emoji: '🎗️',
      title: 'Pediatric oncology after HSCT?',
      lead: 'Read the expert consensus on re-immunization strategies built for pediatric oncology patients in Egypt.',
      kicker: 'Expert consensus on re-immunization strategies for pediatric oncology patients in Egypt',
      action: 'Open the consensus guide →',
    },
    referencesTitle: 'References',
    references: HSCT_REFERENCES,
    infographicAlt: 'HSCT vaccination infographic',
    pdfTitles: {
      hsctVaccination: 'HSCT vaccination',
      australianTable:
        'Table. Recommendations for vaccination after haematopoietic stem cell transplant in children and adults | The Australian Immunisation Handbook',
    },
  },
  ar: {
    heroTitle: 'متلقي زراعة الخلايا الجذعية الدموية',
    heroLead:
      'إرشادات إعادة التطعيم لمتلقي زراعة الخلايا الجذعية الدموية الذاتية ومن متبرع — جداول اللقاحات غير الحية، توقيت اللقاحات الحية، الاختبارات المصلية، ولقاحات السفر.',
    arHeroTitle: 'متلقي زراعة الخلايا الجذعية الدموية',
    arHeroLead:
      'إرشادات إعادة التطعيم لمتلقي زراعة الخلايا الجذعية الدموية الذاتية ومن متبرع — جداول اللقاحات غير الحية، توقيت اللقاحات الحية، الاختبارات المصلية، ولقاحات السفر.',
    overview: {
      title: 'نظرة عامة',
      paragraphs: [
        'متلقو زراعة الخلايا الجذعية الدموية (HSCT) معرضون بدرجة أعلى للإصابة بالأمراض التي يمكن الوقاية منها باللقاحات بسبب التثبيط المناعي الممتد وفقدان المناعة المكتسبة سابقًا. كل من متلقي الزراعة الذاتية والزراعة من متبرع قد يفقدون المناعة الوقائية المكتسبة من التطعيمات السابقة أو العدوى الطبيعية، لذلك تُعد إعادة التطعيم جزءًا أساسيًا من رعاية ما بعد الزراعة.',
        'تتضمن زراعة الخلايا الجذعية الدموية إعطاء علاج مستأصل للنخاع/مُثبِّط لتكوين الدم يتبعه حقن خلايا جذعية يتم الحصول عليها إما من المريض نفسه (زراعة ذاتية) أو من متبرع (زراعة خيفية). ويمكن جمع الخلايا الجذعية من:',
        'رغم أن متلقي الزراعة الذاتية غالبًا ما يستعيدون الوظيفة المناعية أسرع من متلقي الزراعة الخيفية، فإن المجموعتين تحتاجان إعادة تطعيم منهجية بعد الزراعة.',
      ],
      bullets: ['الدم الطرفي', 'نخاع العظم', 'دم الحبل السري'],
    },
    immunocompromised: {
      title: 'ليه متلقي HSCT مناعتهم ضعيفة؟',
      paragraphs: [
        'التثبيط المناعي بعد HSCT ينتج عن عدة عوامل:',
        'مع إعادة تكوين المناعة تدريجيًا، تقل الذاكرة المناعية الناتجة عن التطعيمات السابقة. مستويات الأجسام المضادة ضد أمراض يمكن الوقاية منها باللقاح مثل التيتانوس، شلل الأطفال، الحصبة، النكاف، الحصبة الألمانية، والعدوى الناتجة عن البكتيريا المُغلفة قد تنخفض بشكل ملحوظ خلال 1–4 سنوات بعد الزراعة إذا لم تُنفذ إعادة التطعيم.',
      ],
      bullets: [
        'العلاج الكيماوي التحضيري و/أو العلاج الإشعاعي قبل الزراعة',
        'مرض الطعم ضد المضيف (GVHD) في متلقي الزراعة الخيفية',
        'العلاجات المثبطة للمناعة المستخدمة للوقاية من GVHD أو علاجه',
        'المرض الأساسي الذي استدعى الزراعة',
      ],
    },
    gvhd: {
      title: 'اعتبارات خاصة: مرض الطعم ضد المضيف (GVHD)',
      paragraphs: [
        'يرتبط GVHD المزمن بخلل مناعي مستمر وقصور وظيفي بالطحال، ما يزيد القابلية للعدوى الناتجة عن الكائنات المُغلفة، خصوصًا Streptococcus pneumoniae.',
        'المرضى المصابون بـ GVHD مزمن ويستمرون على علاج مثبط للمناعة قد يحتاجون أيضًا إلى وقاية بالمضادات الحيوية بالإضافة إلى التطعيم.',
        'وبسبب اختلاف سرعة التعافي المناعي بشكل كبير بين المرضى، فإن التوصيات الخاصة باللقاحات الحية تعتمد على درجة إعادة تكوين المناعة لدى المريض وحالته من ناحية التثبيط المناعي.',
      ],
    },
    generalPrinciples: {
      title: 'المبادئ العامة للتطعيم بعد HSCT',
      paragraphs: [
        'الإرشادات الحالية توصي غالبًا بنفس جدول إعادة التطعيم لكل من متلقي الزراعة الذاتية والخيفية بغض النظر عن:',
        'حتى المرضى الذين أكملوا التطعيمات الروتينية قبل الزراعة يجب اعتبارهم مرشحين لإعادة التطعيم لأن المناعة الوقائية قد تُفقد بعد HSCT.',
        'معظم اللقاحات غير الحية يُعاد البدء بها بعد حوالي 6 أشهر من الزراعة، رغم أن بعض اللقاحات قد يبدأ مبكرًا في ظروف مختارة.',
      ],
      bullets: ['مصدر الخلايا الجذعية', 'نظام التهيئة قبل الزراعة', 'نوع المتبرع'],
    },
    inactivated: {
      title: 'اللقاحات غير الحية بعد HSCT',
      pneumococcal: {
        title: 'لقاحات المكورات الرئوية',
        intro: [
          'متلقو HSCT معرضون بشكل خاص لخطر مرتفع لمرض المكورات الرئوية الغازي.',
          'إعادة التطعيم موصى بها بغض النظر عن تاريخ التطعيم السابق ضد المكورات الرئوية.',
        ],
        cards: [
          {
            label: 'الجدول المفضل',
            vaccine: 'PCV20',
            timingBadge: 'ابدأ بعد 3–6 أشهر من HSCT',
            seriesTitle: 'سلسلة من 4 جرعات',
            steps: [
              'أول 3 جرعات تُعطى بفاصل 4 أسابيع',
              'الجرعة الرابعة تُعطى بعد 6 أشهر من الجرعة الثالثة أو بعد سنة من HSCT، أيهما يأتي لاحقًا',
            ],
          },
          {
            label: 'جدول بديل',
            vaccine: 'PCV15',
            intro: '3 جرعات بفاصل 4 أسابيع',
            followedByTitle: 'يتبعها PPSV23',
            followedBySteps: [
              'بعد سنة من آخر جرعة PCV15',
              'وبحد أدنى 4 أسابيع بعد الجرعة الثالثة من PCV15',
            ],
          },
        ],
        note: {
          title: 'ملاحظة GVHD',
          text: 'للمرضى المصابين بـ GVHD، تُوصى جرعة رابعة من PCV15 بدلًا من PPSV23.',
        },
      },
      hib: {
        title: 'لقاح Haemophilus influenzae النوع b (Hib)',
        bullets: [
          'يوصى بسلسلة Hib من 3 جرعات تبدأ بعد 6 أشهر من الزراعة.',
          'يجب الفصل بين الجرعات بما لا يقل عن شهر.',
          'هذه التوصية تنطبق سواء حصل المريض على Hib قبل HSCT أم لا.',
        ],
      },
      dtap: {
        title: 'لقاحات الدفتيريا والتيتانوس والسعال الديكي',
        cards: [
          {
            label: 'الأطفال أقل من 7 سنوات',
            vaccine: 'DTaP',
            intro: 'سلسلة DTaP من 3 جرعات',
          },
          {
            label: 'الأشخاص بعمر 7 سنوات أو أكثر',
            vaccine: 'DTaP / Tdap / Td',
            includesTitle: 'الجداول المقبولة تشمل:',
            includesItems: [
              '3 جرعات من DTaP',
              'جرعة واحدة Tdap تليها جرعتان DT',
              'جرعة واحدة Tdap تليها جرعتان Td',
            ],
          },
        ],
        note: {
          title: 'الجدول المفضل',
          text: 'بالنسبة للمرضى غير المطعمين سابقًا وأكبر من 6 سنوات، يُفضَّل غالبًا جدول يتكون من جرعة واحدة Tdap ثم جرعتين Td.',
        },
      },
      influenza: {
        title: 'لقاح الإنفلونزا',
        bullets: [
          'يوصى بلقاح الإنفلونزا سنويًا مدى الحياة.',
          'البدء الروتيني يكون بعد 6 أشهر على الأقل من HSCT.',
          'يمكن النظر في التطعيم مبكرًا عند 4 أشهر بعد HSCT أثناء انتشار الإنفلونزا.',
          'إذا أُعطي لقاح الإنفلونزا عند 4 أشهر بعد الزراعة، ينبغي التفكير في جرعة ثانية.',
          'الأطفال أقل من 9 سنوات الذين يتلقون لقاح الإنفلونزا لأول مرة يجب أن يحصلوا على جرعتين حسب التوصيات القياسية.',
          'يجب استخدام لقاحات الإنفلونزا غير الحية فقط.',
        ],
      },
      hepatitisB: {
        title: 'لقاح التهاب الكبد B',
        text: 'توصى إعادة التطعيم ضد التهاب الكبد B بعد HSCT. ونظرًا لاحتمال ضعف الاستجابة للقاح، يجب إجراء اختبار مصلي بعد التطعيم بحوالي 4–6 أسابيع من إتمام السلسلة لتقييم الحماية وتحديد الحاجة لجرعات إضافية.',
      },
      hepatitisA: {
        title: 'لقاح التهاب الكبد A',
        text: 'يجب إعادة إعطاء لقاح التهاب الكبد A وفق توصيات التطعيم بعد الزراعة، وقد يكون مهمًا بشكل خاص للأشخاص الأعلى خطورة أو من يخططون للسفر الدولي.',
      },
      ipv: {
        title: 'لقاح شلل الأطفال المعطل (IPV)',
        text: 'توصى إعادة التطعيم بـ IPV لأن المناعة ضد فيروس شلل الأطفال قد تنخفض بعد الزراعة.',
      },
      meningococcal: {
        title: 'لقاحات المكورات السحائية',
        introTitle: 'توصى إعادة التطعيم لـ:',
        introBullets: [
          'المراهقين وفق الجداول الروتينية',
          'الأشخاص ذوي الحالات عالية الخطورة المحددة',
        ],
        cards: [
          {
            label: 'أنواع اللقاحات',
            vaccine: 'MenACWY & MenB',
            includesTitle: 'يشمل ذلك الاثنين:',
            includesItems: [
              'لقاحات المكورات السحائية المقترنة (MenACWY)',
              'لقاحات المكورات السحائية للمجموعة المصلية B (MenB) عند وجود داعٍ.',
            ],
          },
        ],
      },
      hpv: {
        title: 'لقاح فيروس الورم الحليمي البشري (HPV)',
        intro: 'يُعطى لقاح HPV وفق توصيات العمر:',
        bullets: [
          'تطعيم روتيني للأشخاص من 9–26 سنة',
          'البالغون 27–45 سنة بناءً على قرار سريري مشترك',
        ],
      },
      rzv: {
        title: 'لقاح الهربس النطاقي المؤتلف (RZV)',
        intro: 'يمكن إعطاء RZV بعد التعافي المناعي:',
        bullets: ['بعد 6–12 شهرًا من الزراعة الخيفية', 'بعد 3–12 شهرًا من الزراعة الذاتية'],
        text: 'من الأفضل إكمال التطعيم قبل حوالي شهرين من إيقاف الوقاية بمضادات الفيروسات عندما تكون هذه الوقاية مستخدمة.',
      },
    },
    live: {
      title: 'اللقاحات الحية بعد HSCT',
      paragraphs: [
        'لا ينبغي إعطاء اللقاحات الحية بشكل روتيني خلال أول 24 شهرًا بعد HSCT.',
        'يمكن النظر في اللقاحات الحية فقط إذا تحققت كل الشروط التالية:',
      ],
      eligibilityCriteria: [
        'مرور 24 شهرًا على الأقل منذ الزراعة',
        'عدم وجود GVHD نشط',
        'أن يكون المريض قد توقف عن العلاج المثبط للمناعة',
        'حدوث إعادة تكوين مناعي كافية',
      ],
      mmr: {
        title: 'لقاح الحصبة والنكاف والحصبة الألمانية (MMR)',
        text: 'يمكن إعطاء لقاح MMR عند تحقق الشروط السابقة. يوصى بإجراء اختبار مصلي بعد حوالي 4–6 أسابيع من الجرعة الثانية لأن مستويات الأجسام المضادة قد توجه الحاجة إلى جرعات إضافية.',
      },
      varicella: {
        title: 'لقاح الجدري المائي',
        text: 'يمكن النظر في لقاح الجدري المائي عند استيفاء نفس معايير الأهلية للقاحات الحية. ولا يوصى بقياس مصل الجدري المائي بعد التطعيم لأن الاختبارات التجارية المتاحة حاليًا ليست حساسة بما يكفي لاكتشاف المناعة الناتجة عن اللقاح.',
      },
    },
    notRecommended: {
      title: 'لقاحات غير موصى بها بعد HSCT',
      paragraphs: [
        'اللقاحات الحية التالية غالبًا ما تكون مضاد استطباب بعد HSCT:',
        'لا ينبغي إعطاء هذه اللقاحات لمتلقي HSCT.',
      ],
      bullets: [
        'Bacillus Calmette–Guérin (BCG)',
        'لقاح الإنفلونزا الحي المُوهن (LAIV)',
        'لقاح التيفوئيد الفموي',
        'لقاح الروتا',
      ],
    },
    travel: {
      title: 'لقاحات السفر والتعرضات الخاصة',
      intro:
        'بعض اللقاحات ليست مطلوبة روتينيًا لكنها قد تكون ضرورية حسب خطط السفر، أو التعرض المهني، أو عوامل الخطورة الفردية.',
      includesTitle: 'وتشمل:',
      vaccines: [
        'لقاح الحمى الصفراء',
        'لقاح السعار',
        'لقاح التهاب الدماغ الياباني',
        'لقاح التهاب الدماغ المنقول بالقراد',
        'لقاح التهاب الكبد A',
        'لقاح التيفوئيد',
      ],
      yellowFeverNote: {
        title: 'إعادة تطعيم الحمى الصفراء',
        text: 'للأشخاص الذين تلقوا لقاح الحمى الصفراء قبل HSCT، قد تكون إعادة التطعيم مطلوبة بعد الزراعة عند وجود خطر مرتبط بالسفر وبعد استعادة الكفاءة المناعية.',
      },
      specialistNote: {
        title: 'استشارة اختصاصي',
        text: 'يوصى باستشارة اختصاصي قبل إعطاء أي لقاح مرتبط بالسفر لمتلقي HSCT.',
      },
    },
    serology: {
      title: 'الاختبارات المصلية بعد التطعيم',
      recommended: {
        title: 'اختبارات مصلية موصى بها',
        introTitle: 'يوصى بتقييم الاستجابة للقاح في الحالات التالية:',
        bullets: [
          'التهاب الكبد B: بعد 4–6 أسابيع من إكمال سلسلة اللقاح',
          'MMR: بعد 4–6 أسابيع من الجرعة الثانية',
        ],
        note: {
          title: 'الاستخدام الإكلينيكي للنتائج',
          text: 'قد تساعد النتائج في توجيه الحاجة إلى جرعات لقاح إضافية.',
        },
      },
      notRecommended: {
        title: 'اختبارات مصلية غير موصى بها روتينيًا',
        introTitle: 'لا يوصى بالاختبارات المصلية الروتينية لـ:',
        bullets: [
          'الدفتيريا',
          'التيتانوس',
          'السعال الديكي',
          'Hib',
          'الإنفلونزا',
          'لقاحات المكورات الرئوية',
          'شلل الأطفال',
          'الجدري المائي (بعد التطعيم)',
          'لقاحات COVID-19',
        ],
      },
    },
    donor: {
      title: 'تطعيم المتبرع',
      paragraphs: [
        'ثبت أن تطعيم متبرعي الخلايا الجذعية قبل جمع الخلايا يحسن الاستجابات المبكرة للأجسام المضادة لدى المتلقين لبعض اللقاحات، ومنها:',
        'لكن الاعتبارات العملية واللوجستية والأخلاقية غالبًا ما تحد من التطبيق الروتيني لاستراتيجيات تطعيم المتبرعين.',
      ],
      bullets: ['التهاب الكبد B', 'التيتانوس', 'Hib', 'لقاحات المكورات الرئوية المقترنة'],
    },
    keyPoints: {
      title: 'نقاط إكلينيكية أساسية',
      bullets: [
        'المناعة الوقائية تُفقد كثيرًا بعد كلٍ من الزراعة الذاتية والخيفية.',
        'إعادة التطعيم موصى بها بغض النظر عن تاريخ التطعيم قبل الزراعة.',
        'معظم اللقاحات غير الحية يُعاد البدء بها بعد حوالي 6 أشهر من HSCT.',
        'تطعيم المكورات الرئوية أولوية عالية بسبب زيادة خطر المرض الغازي.',
        'لا ينبغي إعطاء اللقاحات الحية قبل 24 شهرًا على الأقل من HSCT، وفقط للمرضى ذوي المناعة الكافية دون GVHD أو تثبيط مناعي مستمر.',
        'الاختبارات المصلية مفيدة بشكل خاص بعد لقاح التهاب الكبد B ولقاح MMR.',
        'يوصى بلقاح الإنفلونزا سنويًا مدى الحياة.',
        'لقاحات السفر يجب تفصيلها حسب الوجهة والحالة المناعية.',
      ],
    },
    pediatricConsensusCta: {
      badge: 'محتوى مهم · مُعد لمصر',
      emoji: '🎗️',
      title: 'أورام الأطفال بعد HSCT؟',
      lead: 'اقرأ إجماع الخبراء حول استراتيجيات إعادة التطعيم المصممة لمرضى أورام الأطفال في مصر.',
      kicker: 'إجماع خبراء حول استراتيجيات إعادة التطعيم لمرضى أورام الأطفال في مصر',
      action: 'افتح دليل الإجماع ←',
    },
    referencesTitle: 'المراجع',
    references: HSCT_REFERENCES,
    infographicAlt: 'إنفوجراف تطعيم HSCT',
    pdfTitles: {
      hsctVaccination: 'تطعيم HSCT',
      australianTable:
        'Table. Recommendations for vaccination after haematopoietic stem cell transplant in children and adults | The Australian Immunisation Handbook',
    },
  },
};
