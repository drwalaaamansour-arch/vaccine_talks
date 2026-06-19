import type { HcpGuideTocItem } from '@/components/hcp-guide/types';

export type ExpertConsensusPolicyCard = {
  title: string;
  text: string;
};

export type ExpertConsensusSection = {
  id: string;
  icon: string;
  title: string;
  paragraphs: string[];
};

export type ExpertConsensusCopy = {
  arHeroTitle: string;
  arHeroLead: string;
  sections: ExpertConsensusSection[];
  policy: {
    title: string;
    cards: ExpertConsensusPolicyCard[];
  };
  conclusion: {
    title: string;
    text: string;
  };
  pdfTitle: string;
};

export const EXPERT_CONSENSUS_SECTION_IDS = {
  en: {
    background: 'background',
    egypt: 'egypt',
    consensus: 'consensus',
    policy: 'policy',
    conclusion: 'conclusion',
    eposter: 'eposter',
  },
  ar: {
    background: 'background-ar',
    egypt: 'egypt-ar',
    consensus: 'consensus-ar',
    policy: 'policy-ar',
    conclusion: 'conclusion-ar',
    eposter: 'eposter-ar',
  },
} as const;

export const EXPERT_CONSENSUS_EN_TOC: HcpGuideTocItem[] = [
  { id: EXPERT_CONSENSUS_SECTION_IDS.en.background, label: 'Background' },
  { id: EXPERT_CONSENSUS_SECTION_IDS.en.egypt, label: 'Context in Egypt' },
  { id: EXPERT_CONSENSUS_SECTION_IDS.en.consensus, label: 'Consensus overview' },
  { id: EXPERT_CONSENSUS_SECTION_IDS.en.policy, label: 'Revaccination policy' },
  { id: EXPERT_CONSENSUS_SECTION_IDS.en.conclusion, label: 'Conclusion' },
  { id: EXPERT_CONSENSUS_SECTION_IDS.en.eposter, label: 'ePoster PDF' },
];

export const EXPERT_CONSENSUS_AR_TOC: HcpGuideTocItem[] = [
  { id: EXPERT_CONSENSUS_SECTION_IDS.ar.background, label: 'الخلفية' },
  { id: EXPERT_CONSENSUS_SECTION_IDS.ar.egypt, label: 'السياق في مصر' },
  { id: EXPERT_CONSENSUS_SECTION_IDS.ar.consensus, label: 'نظرة عامة على الإجماع' },
  { id: EXPERT_CONSENSUS_SECTION_IDS.ar.policy, label: 'سياسة إعادة التطعيم' },
  { id: EXPERT_CONSENSUS_SECTION_IDS.ar.conclusion, label: 'الخلاصة' },
  { id: EXPERT_CONSENSUS_SECTION_IDS.ar.eposter, label: 'ملف ePoster (PDF)' },
];

/** @deprecated Use EXPERT_CONSENSUS_EN_TOC */
export const EXPERT_CONSENSUS_PEDIATRIC_ONCOLOGY_TOC = EXPERT_CONSENSUS_EN_TOC;

export const EXPERT_CONSENSUS_COPY: { en: ExpertConsensusCopy; ar: ExpertConsensusCopy } = {
  en: {
    arHeroTitle: '',
    arHeroLead: '',
    sections: [
      {
        id: EXPERT_CONSENSUS_SECTION_IDS.en.background,
        icon: '📖',
        title: 'Background',
        paragraphs: [
          'The increasing population of immunocompromised individuals, particularly pediatric cancer patients and bone marrow transplant (BMT) recipients, face an increased risk of vaccine-preventable diseases. Evolving dynamics in immunosuppression, propelled by cancer therapy advancements, underscore the necessity for tailored revaccination strategies.',
          'Revaccinating pediatric oncology patients presents challenges owing to compromised immune systems from cancer and treatments. Although revaccination is a vital intervention to address this immunity gap, its execution is complex, considering factors such as optimal timing, vaccine selection, compliance, and the patients\' overall health status.',
        ],
      },
      {
        id: EXPERT_CONSENSUS_SECTION_IDS.en.egypt,
        icon: '🇪🇬',
        title: 'Context in Egypt',
        paragraphs: [
          'In Egypt, despite significant advancements in the survival of childhood cancer patients, their revaccination is frequently overlooked. This neglect stems from a substantial caseload, insufficient awareness among oncologists and parents, and the absence of a unified global or national vaccination schedule for this subgroup.',
        ],
      },
      {
        id: EXPERT_CONSENSUS_SECTION_IDS.en.consensus,
        icon: '🤝',
        title: 'Consensus overview',
        paragraphs: [
          'The consensus outlines standardized revaccination guidelines for childhood cancer survivors, developed by collaborating specialists in pediatric oncology, infectious diseases, and immunization.',
        ],
      },
    ],
    policy: {
      title: 'Revaccination policy — at a glance',
      cards: [
        {
          title: 'Standard timing',
          text: 'Administer vaccines six months post-treatment; begin at 12 months for BMT patients without antibody level assessment.',
        },
        {
          title: 'After full primary series',
          text: 'Children diagnosed after completing general vaccination need a booster shot.',
        },
        {
          title: 'Before series complete',
          text: 'Those diagnosed before completion require a full re-vaccination schedule.',
        },
        {
          title: 'Bone marrow transplant',
          text: 'BMT patients need a complete revaccination schedule.',
        },
      ],
    },
    conclusion: {
      title: 'Conclusion',
      text: 'Revaccination is not only safe but also imperative. These guidelines serve as a crucial resource for healthcare professionals, offering a nuanced approach to revaccination within pediatric oncology.',
    },
    pdfTitle: 'Expert consensus on re-immunization strategies for pediatric oncology patients in Egypt (ePoster)',
  },
  ar: {
    arHeroTitle: 'استراتيجيات إعادة التطعيم لمرضى الأورام لدى الأطفال في مصر',
    arHeroLead:
      'إرشادات معيارية لإعادة التطعيم لناجين سرطان الأطفال، وضعها مختصون في الأورام لدى الأطفال والأمراض المعدية والتطعيم — مع نقاط سياسة عملية للاستخدام السريري.',
    sections: [
      {
        id: EXPERT_CONSENSUS_SECTION_IDS.ar.background,
        icon: '📖',
        title: 'الخلفية',
        paragraphs: [
          'يتزايد عدد الأفراد منقوصي المناعة، ولا سيما مرضى السرطان لدى الأطفال ومتلقي زراعة نخاع العظم، ما يزيد من خطر الإصابة بالأمراض التي يمكن الوقاية منها باللقاحات. وتؤكد التطورات المستمرة في تثبيط المناعة الناتج عن تقدم علاجات السرطان على الحاجة إلى استراتيجيات إعادة تطعيم مُفصّلة.',
          'تُعد إعادة تطعيم مرضى الأورام لدى الأطفال تحديًا بسبب ضعف المناعة الناتج عن المرض والعلاج. ورغم أن إعادة التطعيم تدخل حيوي لسد فجوة المناعة، إلا أن تنفيذها معقد ويتطلب مراعاة التوقيت الأمثل، واختيار اللقاح، والالتزام، والحالة الصحية العامة للمريض.',
        ],
      },
      {
        id: EXPERT_CONSENSUS_SECTION_IDS.ar.egypt,
        icon: '🇪🇬',
        title: 'السياق في مصر',
        paragraphs: [
          'في مصر، رغم التقدم الكبير في بقاء مرضى سرطان الأطفال على قيد الحياة، غالبًا ما يُغفَل إعادة تطعيمهم. ويرجع ذلك إلى حجم الحالات الكبير، وقلة الوعي بين أطباء الأورام والأسر، وغياب جدول تطعيم وطني أو عالمي موحد لهذه الفئة.',
        ],
      },
      {
        id: EXPERT_CONSENSUS_SECTION_IDS.ar.consensus,
        icon: '🤝',
        title: 'نظرة عامة على الإجماع',
        paragraphs: [
          'يقدّم هذا الإجماع إرشادات معيارية لإعادة التطعيم لناجين سرطان الأطفال، وضعها مختصون متعاونون في الأورام لدى الأطفال والأمراض المعدية والتطعيم.',
        ],
      },
    ],
    policy: {
      title: 'سياسة إعادة التطعيم — نظرة سريعة',
      cards: [
        {
          title: 'التوقيت المعياري',
          text: 'إعطاء اللقاحات بعد ستة أشهر من انتهاء العلاج؛ وبدء التطعيم عند 12 شهرًا لمرضى زراعة نخاع العظم دون تقييم مستويات الأجسام المضادة.',
        },
        {
          title: 'بعد إكمال السلسلة الأساسية',
          text: 'الأطفال الذين يُشخَّصون بعد إكمال التطعيمات العامة يحتاجون إلى جرعة منشطة.',
        },
        {
          title: 'قبل إكمال السلسلة',
          text: 'من يُشخَّصون قبل إكمال السلسلة يحتاجون إلى جدول إعادة تطعيم كامل.',
        },
        {
          title: 'زراعة نخاع العظم',
          text: 'مرضى زراعة نخاع العظم يحتاجون إلى جدول إعادة تطعيم كامل.',
        },
      ],
    },
    conclusion: {
      title: 'الخلاصة',
      text: 'إعادة التطعيم ليست آمنة فحسب، بل ضرورية أيضًا. وتُعد هذه الإرشادات موردًا مهمًا للممارسين الصحيين، وتقدّم نهجًا متدرجًا لإعادة التطعيم في الأورام لدى الأطفال.',
    },
    pdfTitle: 'إجماع الخبراء حول استراتيجيات إعادة التطعيم لمرضى الأورام لدى الأطفال في مصر (ePoster)',
  },
};
