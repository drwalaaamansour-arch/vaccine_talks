export type PretermListItem = string | { label: string; text: string };

export type PretermBlock =
  | { type: 'p'; text: string }
  | { type: 'h5'; text: string }
  | { type: 'ul'; items: PretermListItem[] };

export type PretermSection = {
  id: string;
  title: string;
  variant?: 'key';
  blocks: PretermBlock[];
};

export type PretermReference = {
  citation: string;
  href: string;
};

export type PretermRelatedLink = {
  href: string;
  label: string;
};

export type PretermCopy = {
  heroTitle: string;
  heroLead: string;
  arHeroTitle: string;
  arHeroLead: string;
  sections: PretermSection[];
  referencesTitle: string;
  references: PretermReference[];
  relatedLinksTitle?: string;
  relatedLinks: PretermRelatedLink[];
};

export const PRETERM_SECTION_IDS = {
  en: {
    overview: 'overview',
    definitions: 'definitions',
    immunology: 'immunology',
    schedules: 'schedules',
    risks: 'risks',
    management: 'management',
    evidence: 'evidence',
    special: 'special',
    family: 'family',
    conclusion: 'conclusion',
    practical: 'practical',
    references: 'references',
    relatedLinks: 'related-links',
  },
  ar: {
    overview: 'overview-ar',
    definitions: 'definitions-ar',
    immunology: 'immunology-ar',
    schedules: 'schedules-ar',
    risks: 'risks-ar',
    management: 'management-ar',
    evidence: 'evidence-ar',
    special: 'special-ar',
    family: 'family-ar',
    conclusion: 'conclusion-ar',
    practical: 'practical-ar',
    references: 'references-ar',
    relatedLinks: 'related-links-ar',
  },
} as const;

export const PRETERM_EN_TOC = [
  { id: PRETERM_SECTION_IDS.en.overview, label: 'Overview' },
  { id: PRETERM_SECTION_IDS.en.definitions, label: 'Definitions' },
  { id: PRETERM_SECTION_IDS.en.immunology, label: 'Immunology' },
  { id: PRETERM_SECTION_IDS.en.schedules, label: 'Schedules' },
  { id: PRETERM_SECTION_IDS.en.risks, label: 'Risks' },
  { id: PRETERM_SECTION_IDS.en.management, label: 'Management' },
  { id: PRETERM_SECTION_IDS.en.evidence, label: 'Evidence' },
  { id: PRETERM_SECTION_IDS.en.special, label: 'Special considerations' },
  { id: PRETERM_SECTION_IDS.en.family, label: 'Family immunization' },
  { id: PRETERM_SECTION_IDS.en.conclusion, label: 'Conclusion' },
  { id: PRETERM_SECTION_IDS.en.practical, label: 'Practical guidance' },
  { id: PRETERM_SECTION_IDS.en.references, label: 'References' },
  { id: PRETERM_SECTION_IDS.en.relatedLinks, label: 'Related links' },
] as const;

export const PRETERM_AR_TOC = [
  { id: PRETERM_SECTION_IDS.ar.overview, label: 'نظرة عامة' },
  { id: PRETERM_SECTION_IDS.ar.definitions, label: 'التعريفات والوبائيات' },
  { id: PRETERM_SECTION_IDS.ar.immunology, label: 'الاعتبارات المناعية' },
  { id: PRETERM_SECTION_IDS.ar.schedules, label: 'الجداول والتوقيت' },
  { id: PRETERM_SECTION_IDS.ar.risks, label: 'المخاطر والآثار الجانبية' },
  { id: PRETERM_SECTION_IDS.ar.management, label: 'استراتيجيات الإدارة' },
  { id: PRETERM_SECTION_IDS.ar.evidence, label: 'الأدلة من الدراسات' },
  { id: PRETERM_SECTION_IDS.ar.special, label: 'اعتبارات خاصة' },
  { id: PRETERM_SECTION_IDS.ar.family, label: 'تطعيم الأسرة ومقدمي الرعاية' },
  { id: PRETERM_SECTION_IDS.ar.conclusion, label: 'الخلاصة' },
  { id: PRETERM_SECTION_IDS.ar.practical, label: 'إرشادات عملية' },
  { id: PRETERM_SECTION_IDS.ar.references, label: 'المراجع' },
  { id: PRETERM_SECTION_IDS.ar.relatedLinks, label: 'روابط ذات صلة' },
] as const;

const PRETERM_REFERENCES: PretermReference[] = [
  {
    citation: 'Australian Immunisation Handbook — Vaccination for preterm infants.',
    href: 'https://immunisationhandbook.health.gov.au/contents/vaccination-for-special-risk-groups/vaccination-for-preterm-infants',
  },
  {
    citation: 'Springer — Preterm infant vaccination.',
    href: 'https://url.de.m.mimecastprotect.com/s/Ah1HC79EKVt1r3N0yH8f9Fo6Zu7?domain=link.springer.com',
  },
  {
    citation: 'CDC — Special situations: vaccine best practices.',
    href: 'https://www.cdc.gov/vaccines/hcp/imz-best-practices/special-situations.html',
  },
];

const PRETERM_RELATED_LINKS_EN: PretermRelatedLink[] = [
  { href: '/hcp-documents/preterm', label: 'Preterm infants documents' },
  {
    href: '/hcp-special-populations/preterm-infants/vaccine-specific-guidelines',
    label: 'Vaccine-specific guidelines',
  },
];

const PRETERM_RELATED_LINKS_AR: PretermRelatedLink[] = [
  { href: '/hcp-documents/preterm', label: 'مستندات الرضع الخدج' },
  {
    href: '/hcp-special-populations/preterm-infants/vaccine-specific-guidelines',
    label: 'إرشادات خاصة بكل لقاح',
  },
];

const AR_HERO_TITLE = 'الرضع الخدج';
const AR_HERO_LEAD =
  'إرشادات تطعيم مبنية على الأدلة للرضع الخدج — الجداول، المخاطر، والتطبيق العملي في مصر.';

export const PRETERM_COPY: { en: PretermCopy; ar: PretermCopy } = {
  en: {
    heroTitle: 'Preterm infants',
    heroLead:
      'Evidence-based vaccination guidance for preterm infants — schedules, risks, and practice in Egypt.',
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    sections: [
      {
        id: PRETERM_SECTION_IDS.en.overview,
        title: 'Overview',
        blocks: [
          {
            type: 'p',
            text: 'Vaccination is a cornerstone of preventive pediatric care, offering protection against infectious diseases that pose significant risks to infants, especially those born preterm. Preterm infants, due to their unique physiological and immunological profiles, face heightened vulnerability to infections and complications. Ensuring optimal immunization in this population requires a nuanced understanding of their needs, risk factors, and best practices. This article presents an evidence-based approach to vaccination in preterm infants, tailored for healthcare professionals and pediatricians in Egypt.',
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.en.definitions,
        title: 'Definitions and Epidemiology',
        blocks: [
          { type: 'h5', text: 'WHO Classification of Preterm Birth' },
          {
            type: 'p',
            text: 'The World Health Organization (WHO) defines preterm birth as any birth occurring before 37 completed weeks of gestation. Preterm births are further classified as:',
          },
          {
            type: 'ul',
            items: [
              { label: 'Extremely preterm', text: '<28 weeks gestation' },
              { label: 'Very preterm', text: '28 to <32 weeks gestation' },
              { label: 'Moderate to late preterm', text: '32 to <37 weeks gestation' },
            ],
          },
          { type: 'h5', text: 'Prevalence of Preterm Birth in Egypt' },
          {
            type: 'p',
            text: 'Preterm birth is a significant public health concern in Egypt, with prevalence rates estimated between 10–13% of live births, aligning with global trends. Contributing factors include maternal health conditions, socioeconomic challenges, and limited access to prenatal care. The high prevalence underscores the importance of tailored immunization strategies for this population.',
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.en.immunology,
        title: 'Immunological Considerations in Preterm Infants',
        blocks: [
          {
            type: 'p',
            text: 'Preterm infants exhibit immature immune systems, characterized by reduced transplacental transfer of maternal antibodies, impaired cellular and humoral responses, and increased susceptibility to infections. This immaturity necessitates timely and appropriate vaccination to mitigate risks of severe disease, hospitalization, and mortality. Evidence shows that while antibody responses may be lower compared to term infants, most preterm infants develop adequate protection following standard immunization schedules.',
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.en.schedules,
        title: 'Vaccination Schedules and Timing',
        blocks: [
          { type: 'h5', text: 'Chronological vs. Corrected Age' },
          {
            type: 'p',
            text: "Current international guidelines, including those endorsed by WHO and national health authorities, recommend that vaccines be administered according to the infant's chronological age, not corrected gestational age. This approach maximizes early protection, particularly in environments with high infectious disease burden such as Egypt.",
          },
          { type: 'h5', text: 'Exceptions and Special Considerations' },
          {
            type: 'ul',
            items: [
              {
                label: 'Hepatitis B Vaccine (HBV)',
                text: 'For preterm infants weighing <2,000 grams born to HBsAg-negative mothers, the initial HBV dose is often delayed until one month of age or hospital discharge, due to reduced immunogenicity. If the mother is HBsAg-positive or status unknown, vaccination and immunoglobulin should be administered at birth regardless of birth weight.',
              },
            ],
          },
          { type: 'h5', text: 'Birth Weight Considerations' },
          {
            type: 'p',
            text: 'Low birth weight (<2,000 grams) may affect vaccine immunogenicity for certain antigens (notably HBV), but most other vaccines (DTaP, Hib, IPV, rotavirus, PCV, etc.) are effective and safe when given at chronological age, regardless of birth weight.',
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.en.risks,
        title: 'Risks and Adverse Events',
        blocks: [
          { type: 'h5', text: 'Apnoea and Bradycardia' },
          {
            type: 'p',
            text: 'Preterm infants, particularly those born <32 weeks or with ongoing respiratory instability, are at increased risk for post-vaccination apnoea and bradycardia, especially following the first immunization series. These events are typically transient and resolve spontaneously, but may warrant monitoring for 48–72 hours post-vaccination in high-risk infants.',
          },
          { type: 'h5', text: 'SIDS and Pain Response' },
          {
            type: 'p',
            text: 'Concerns about sudden infant death syndrome (SIDS) have not been substantiated by robust evidence; vaccination does not increase SIDS risk. Pain response may be heightened in preterm infants, necessitating appropriate pain management strategies or comfort measures during vaccination.',
          },
          { type: 'h5', text: 'Local and Systemic Reactions' },
          {
            type: 'p',
            text: 'Adverse events following immunization (AEFI) in preterm infants are generally comparable to those seen in term infants. Common reactions include mild fever, irritability, and local redness or swelling at the injection site. Severe reactions are rare. Careful documentation and prompt management of any adverse event are essential.',
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.en.management,
        title: 'Management Strategies for Vaccination in Preterm Infants',
        blocks: [
          { type: 'h5', text: 'Monitoring and Postponement' },
          {
            type: 'p',
            text: 'Infants who are clinically unstable, experiencing significant respiratory or cardiovascular compromise, or receiving intensive care should have immunizations temporarily deferred until stabilization. For stable preterm infants, vaccination should proceed as scheduled, with post-vaccination monitoring for apnoea and bradycardia in those at risk.',
          },
          { type: 'h5', text: 'Injection Site and Needle Length Recommendations' },
          {
            type: 'ul',
            items: [
              {
                label: 'Site',
                text: 'The anterolateral thigh (vastus lateralis muscle) is the preferred site for intramuscular injections in infants.',
              },
              {
                label: 'Needle Length',
                text: 'Use a 16 mm (5/8 inch) to 25 mm (1 inch) needle, depending on infant size and muscle mass. For extremely low birth weight infants, a 16 mm needle is generally adequate.',
              },
              {
                label: 'Avoiding Compromised Skin',
                text: 'Do not administer injections in areas with infection, inflammation, or tissue damage.',
              },
            ],
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.en.evidence,
        title: 'Evidence from Clinical Studies',
        blocks: [
          {
            type: 'p',
            text: 'Randomized controlled trials and observational studies have demonstrated that routine immunizations are safe and effective in preterm infants. Although seroconversion rates may be lower for some vaccines in extremely preterm or low birth weight infants, protective immunity is achieved in the majority. Studies confirm no increased risk of severe adverse events, and transient apnoea/bradycardia episodes do not lead to long-term sequelae. Early vaccination reduces the incidence of vaccine-preventable diseases and associated hospitalizations.',
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.en.special,
        title: 'Special Considerations',
        blocks: [
          {
            type: 'ul',
            items: [
              {
                label: 'Bronchopulmonary Dysplasia (BPD)',
                text: 'Infants with chronic lung disease should receive routine vaccinations; post-vaccination monitoring may be extended due to increased risk of respiratory events.',
              },
              {
                label: 'Hospitalized Infants',
                text: 'Vaccination should not be delayed solely due to hospitalization; stable infants can be immunized in the neonatal unit.',
              },
              {
                label: 'Chronic Conditions',
                text: 'Preterm infants with additional comorbidities (e.g., congenital heart disease, immunodeficiency) may require tailored vaccine schedules and closer follow-up.',
              },
            ],
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.en.family,
        title: 'Family and Caregiver Immunization',
        blocks: [
          {
            type: 'p',
            text: 'Immunizing household contacts and caregivers is critical in protecting preterm infants, who are particularly susceptible to severe infections. Family members should be up-to-date on influenza, pertussis, and other recommended vaccines. The "cocooning" strategy reduces transmission risk and enhances community immunity, offering indirect protection to the infant.',
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.en.conclusion,
        title: 'Conclusion',
        blocks: [
          {
            type: 'p',
            text: "Vaccination of preterm infants is both safe and essential. Healthcare providers should adhere to chronological age-based schedules, monitor for transient adverse events, and prioritize early immunization. Individualized care for infants with respiratory instability or chronic conditions, combined with family immunization, optimizes protection and outcomes. Ongoing education and vigilance remain key to improving immunization coverage and safeguarding the health of Egypt's vulnerable preterm population.",
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.en.practical,
        title: 'Practical Guidance for Healthcare Providers',
        variant: 'key',
        blocks: [
          {
            type: 'ul',
            items: [
              'Follow chronological age for vaccine scheduling, except for HBV in select low birth weight cases.',
              'Monitor high-risk infants for 48–72 hours post-vaccination for apnoea/bradycardia.',
              'Use appropriate injection site and needle length; avoid compromised skin.',
              'Educate families on vaccine benefits and the importance of caregiver immunization.',
              'Document and manage any adverse events promptly.',
            ],
          },
        ],
      },
    ],
    referencesTitle: 'References',
    references: PRETERM_REFERENCES,
    relatedLinksTitle: 'Related links',
    relatedLinks: PRETERM_RELATED_LINKS_EN,
  },
  ar: {
    heroTitle: 'الرضع الخدج',
    heroLead: 'إرشادات تطعيم مبنية على الأدلة للرضع الخدج — الجداول، المخاطر، والتطبيق العملي في مصر.',
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    sections: [
      {
        id: PRETERM_SECTION_IDS.ar.overview,
        title: 'نظرة عامة',
        blocks: [
          {
            type: 'p',
            text: 'التطعيم ركيزة أساسية في طب الأطفال الوقائي، لأنه يوفر حماية من الأمراض المعدية التي تمثل مخاطر كبيرة على الرضع، خصوصًا المولودين قبل الأوان. الرضع الخدج، بسبب خصائصهم الفسيولوجية والمناعية المميزة، أكثر عرضة للعدوى والمضاعفات. وضمان أفضل تغطية تطعيمية لهذه الفئة يحتاج فهمًا دقيقًا لاحتياجاتهم وعوامل الخطورة وأفضل الممارسات. يقدم هذا المقال نهجًا قائمًا على الدليل لتطعيم الرضع الخدج، ومصممًا ليلائم الأطباء ومقدمي الرعاية الصحية في مصر.',
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.ar.definitions,
        title: 'التعريفات والوبائيات',
        blocks: [
          { type: 'h5', text: 'تصنيف منظمة الصحة العالمية للولادة المبتسرة' },
          {
            type: 'p',
            text: 'تعرف منظمة الصحة العالمية (WHO) الولادة المبتسرة بأنها أي ولادة تحدث قبل إتمام 37 أسبوعًا من الحمل. وتُصنف الولادات المبتسرة إلى:',
          },
          {
            type: 'ul',
            items: [
              { label: 'خداج شديد جدًا', text: 'أقل من 28 أسبوع حمل' },
              { label: 'خداج شديد', text: 'من 28 إلى أقل من 32 أسبوع حمل' },
              { label: 'خداج متوسط إلى متأخر', text: 'من 32 إلى أقل من 37 أسبوع حمل' },
            ],
          },
          { type: 'h5', text: 'انتشار الولادة المبتسرة في مصر' },
          {
            type: 'p',
            text: 'تُعد الولادة المبتسرة تحديًا مهمًا للصحة العامة في مصر، حيث تُقدَّر معدلات الانتشار بين 10–13% من المواليد الأحياء، بما يتماشى مع الاتجاهات العالمية. وتشمل العوامل المساهمة حالات صحة الأم، والتحديات الاجتماعية والاقتصادية، ومحدودية الوصول إلى رعاية ما قبل الولادة. هذا الانتشار المرتفع يؤكد أهمية وضع استراتيجيات تطعيم مخصصة لهذه الفئة.',
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.ar.immunology,
        title: 'الاعتبارات المناعية لدى الرضع الخدج',
        blocks: [
          {
            type: 'p',
            text: 'يُظهر الرضع الخدج عدم نضج في الجهاز المناعي، يتمثل في انخفاض انتقال الأجسام المضادة من الأم عبر المشيمة، وضعف الاستجابات الخلوية والخلطية، وزيادة القابلية للعدوى. هذا عدم النضج يفرض إعطاء التطعيمات في الوقت المناسب وبالشكل الملائم لتقليل خطر المرض الشديد، ودخول المستشفى، والوفاة. وتوضح الأدلة أنه رغم أن الاستجابات المناعية قد تكون أقل مقارنة بالرضع مكتملي النمو، فإن معظم الرضع الخدج يحققون حماية كافية بعد الجداول القياسية للتطعيم.',
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.ar.schedules,
        title: 'جداول التطعيم والتوقيت',
        blocks: [
          { type: 'h5', text: 'العمر الزمني مقابل العمر المصحح' },
          {
            type: 'p',
            text: 'توصي الإرشادات الدولية الحالية، بما في ذلك المعتمدة من منظمة الصحة العالمية والسلطات الصحية الوطنية، بأن تُعطى اللقاحات وفق العمر الزمني للرضيع وليس العمر الحملي المصحح. هذا النهج يحقق حماية مبكرة قصوى، خاصة في البيئات ذات العبء العالي من الأمراض المعدية مثل مصر.',
          },
          { type: 'h5', text: 'الاستثناءات والاعتبارات الخاصة' },
          {
            type: 'ul',
            items: [
              {
                label: 'لقاح التهاب الكبد B (HBV)',
                text: 'بالنسبة للرضع الخدج بوزن أقل من 2,000 جرام والمولودين لأمهات سلبيات مستضد HBsAg، غالبًا ما تؤجل الجرعة الأولى من HBV إلى عمر شهر أو حتى الخروج من المستشفى بسبب انخفاض المناعية. أما إذا كانت الأم إيجابية HBsAg أو حالتها غير معروفة، فيجب إعطاء اللقاح والغلوبولين المناعي عند الولادة بغض النظر عن وزن الميلاد.',
              },
            ],
          },
          { type: 'h5', text: 'اعتبارات وزن الميلاد' },
          {
            type: 'p',
            text: 'انخفاض وزن الميلاد (أقل من 2,000 جرام) قد يؤثر على المناعية لبعض المستضدات (خصوصًا HBV)، لكن معظم اللقاحات الأخرى (DTaP وHib وIPV والروتا وPCV وغيرها) فعالة وآمنة عند إعطائها حسب العمر الزمني، بغض النظر عن وزن الميلاد.',
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.ar.risks,
        title: 'المخاطر والآثار الجانبية',
        blocks: [
          { type: 'h5', text: 'انقطاع النفس وبطء القلب' },
          {
            type: 'p',
            text: 'الرضع الخدج، خصوصًا المولودين قبل 32 أسبوعًا أو الذين لديهم عدم استقرار تنفسي مستمر، لديهم خطر أعلى لحدوث انقطاع النفس وبطء القلب بعد التطعيم، خاصة بعد سلسلة التطعيم الأولى. هذه الأحداث غالبًا عابرة وتتحسن تلقائيًا، لكنها قد تستدعي الملاحظة لمدة 48–72 ساعة بعد التطعيم في الرضع الأعلى خطورة.',
          },
          { type: 'h5', text: 'متلازمة الموت المفاجئ للرضع والاستجابة للألم' },
          {
            type: 'p',
            text: 'المخاوف المتعلقة بمتلازمة موت الرضع المفاجئ (SIDS) لم تؤكدها أدلة قوية؛ فالتطعيم لا يزيد خطر SIDS. وقد تكون استجابة الألم أعلى لدى الرضع الخدج، مما يستلزم تطبيق استراتيجيات مناسبة لتسكين الألم أو وسائل تهدئة أثناء التطعيم.',
          },
          { type: 'h5', text: 'التفاعلات الموضعية والجهازية' },
          {
            type: 'p',
            text: 'الآثار العكسية التالية للتطعيم (AEFI) لدى الرضع الخدج عمومًا مماثلة لما يُرى لدى الرضع مكتملي النمو. وتشمل التفاعلات الشائعة ارتفاعًا بسيطًا في الحرارة، والتهيج، واحمرارًا أو تورمًا موضعيًا في مكان الحقن. أما التفاعلات الشديدة فهي نادرة. ويظل التوثيق الدقيق والتعامل السريع مع أي أثر جانبي أمرًا أساسيًا.',
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.ar.management,
        title: 'استراتيجيات إدارة التطعيم لدى الرضع الخدج',
        blocks: [
          { type: 'h5', text: 'المراقبة والتأجيل' },
          {
            type: 'p',
            text: 'الرضع غير المستقرين إكلينيكيًا، أو الذين يعانون تدهورًا تنفسيًا أو قلبيًا وعائيًا ملحوظًا، أو يتلقون رعاية مركزة، ينبغي تأجيل تطعيمهم مؤقتًا حتى استقرار الحالة. أما الرضع الخدج المستقرون، فيجب تطعيمهم حسب الجدول، مع متابعة ما بعد التطعيم لاحتمال انقطاع النفس أو بطء القلب لدى المعرضين للخطر.',
          },
          { type: 'h5', text: 'توصيات موضع الحقن وطول الإبرة' },
          {
            type: 'ul',
            items: [
              {
                label: 'الموضع',
                text: 'الجانب الأمامي الوحشي من الفخذ (عضلة vastus lateralis) هو الموضع المفضل للحقن العضلي عند الرضع.',
              },
              {
                label: 'طول الإبرة',
                text: 'تُستخدم إبرة بطول 16 مم (5/8 بوصة) إلى 25 مم (1 بوصة) حسب حجم الرضيع وكتلة العضلات. وفي الرضع شديدي انخفاض الوزن عند الميلاد، تكون إبرة 16 مم غالبًا كافية.',
              },
              {
                label: 'تجنب الجلد المتضرر',
                text: 'لا تُعطى الحقن في مناطق بها عدوى أو التهاب أو تلف بالأنسجة.',
              },
            ],
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.ar.evidence,
        title: 'الأدلة من الدراسات السريرية',
        blocks: [
          {
            type: 'p',
            text: 'أظهرت التجارب العشوائية المحكمة والدراسات الرصدية أن التطعيمات الروتينية آمنة وفعالة لدى الرضع الخدج. ورغم أن معدلات التحول المصلي قد تكون أقل لبعض اللقاحات لدى الخدج جدًا أو منخفضي وزن الميلاد، فإن المناعة الوقائية تتحقق لدى الأغلبية. كما تؤكد الدراسات عدم زيادة خطر الآثار الجانبية الشديدة، وأن نوبات انقطاع النفس/بطء القلب العابرة لا تؤدي إلى مضاعفات طويلة المدى. والتطعيم المبكر يقلل حدوث الأمراض التي يمكن الوقاية منها باللقاحات وما يرتبط بها من دخول المستشفى.',
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.ar.special,
        title: 'اعتبارات خاصة',
        blocks: [
          {
            type: 'ul',
            items: [
              {
                label: 'خلل التنسج القصبي الرئوي (BPD)',
                text: 'الرضع المصابون بمرض رئوي مزمن ينبغي أن يتلقوا التطعيمات الروتينية؛ وقد تمتد فترة المراقبة بعد التطعيم بسبب زيادة خطر الأحداث التنفسية.',
              },
              {
                label: 'الرضع المنومون بالمستشفى',
                text: 'لا ينبغي تأخير التطعيم بسبب التنويم فقط؛ فالرضع المستقرون يمكن تطعيمهم داخل وحدة حديثي الولادة.',
              },
              {
                label: 'الحالات المزمنة',
                text: 'الرضع الخدج الذين لديهم أمراض مصاحبة إضافية (مثل أمراض القلب الخلقية أو نقص المناعة) قد يحتاجون جداول تطعيم مخصصة ومتابعة أوثق.',
              },
            ],
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.ar.family,
        title: 'تطعيم الأسرة ومقدمي الرعاية',
        blocks: [
          {
            type: 'p',
            text: 'تطعيم المخالطين المنزليين ومقدمي الرعاية أمر حاسم لحماية الرضع الخدج، لأنهم أكثر عرضة للعدوى الشديدة. ينبغي أن تكون تطعيمات أفراد الأسرة محدثة ضد الإنفلونزا والسعال الديكي وغيرها من اللقاحات الموصى بها. وتُقلل استراتيجية "الحلقة الواقية" (cocooning) خطر انتقال العدوى وتعزز المناعة المجتمعية، ما يوفر حماية غير مباشرة للرضيع.',
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.ar.conclusion,
        title: 'الخلاصة',
        blocks: [
          {
            type: 'p',
            text: 'تطعيم الرضع الخدج آمن وضروري في الوقت نفسه. ينبغي لمقدمي الرعاية الصحية الالتزام بالجداول المعتمدة على العمر الزمني، ومراقبة الآثار الجانبية العابرة، وإعطاء أولوية للتطعيم المبكر. كما أن الرعاية الفردية للرضع الذين لديهم عدم استقرار تنفسي أو حالات مزمنة، مع تطعيم الأسرة، تحسن الحماية والنتائج. ويظل التثقيف المستمر واليقظة عنصرين أساسيين لتحسين تغطية التطعيم وحماية صحة الفئة الهشة من الرضع الخدج في مصر.',
          },
        ],
      },
      {
        id: PRETERM_SECTION_IDS.ar.practical,
        title: 'إرشادات عملية لمقدمي الرعاية الصحية',
        variant: 'key',
        blocks: [
          {
            type: 'ul',
            items: [
              'اعتمد العمر الزمني في جدول التطعيم، مع استثناء HBV في بعض حالات انخفاض وزن الميلاد المختارة.',
              'راقب الرضع الأعلى خطورة لمدة 48–72 ساعة بعد التطعيم لاحتمال انقطاع النفس/بطء القلب.',
              'استخدم موضع الحقن المناسب وطول الإبرة الملائم، وتجنب الجلد المتضرر.',
              'ثقف الأسر حول فوائد اللقاحات وأهمية تطعيم مقدمي الرعاية.',
              'وثّق أي أثر جانبي وتعامل معه بسرعة.',
            ],
          },
        ],
      },
    ],
    referencesTitle: 'المراجع',
    references: PRETERM_REFERENCES,
    relatedLinksTitle: 'روابط ذات صلة',
    relatedLinks: PRETERM_RELATED_LINKS_AR,
  },
};
