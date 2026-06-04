export type NonHcpCommonQuestionTopic = {
  href: string;
  emoji: string;
  ar: string;
  en: string;
  keywords: string;
};

export const NON_HCP_COMMON_QUESTIONS_HERO = {
  tag: 'للأسرة المصرية · For families in Egypt',
  titleAr: 'الأسئلة الشائعة',
  titleEn: 'Common Questions',
  leadAr: 'عندك سؤال عن التطعيمات؟ اختار الموضوع — إجابات بسيطة وواضحة بالعربي والإنجليزي.',
  leadEn: 'Have a question about vaccines? Pick a topic — clear answers in Arabic and English.',
} as const;

export const NON_HCP_COMMON_QUESTION_TOPICS: NonHcpCommonQuestionTopic[] = [
  {
    href: '/non-hcp/common-questions/general-questions',
    emoji: '💬',
    ar: 'أسئلة عامة',
    en: 'General Questions',
    keywords: 'general عامة',
  },
  {
    href: '/non-hcp/common-questions/hepatitis-a',
    emoji: '🟡',
    ar: 'التهاب الكبد الوبائي A',
    en: 'Hepatitis A (HAV)',
    keywords: 'hepatitis a hav كبد',
  },
  {
    href: '/non-hcp/common-questions/hepatitis-b',
    emoji: '🩸',
    ar: 'التهاب الكبد الوبائي B',
    en: 'Hepatitis B (HBV)',
    keywords: 'hepatitis b hbv كبد',
  },
  {
    href: '/non-hcp/common-questions/hepatitis-a-b',
    emoji: '💉',
    ar: 'التطعيم المشترك لكبد A+B',
    en: 'Hepatitis A+B (Combined)',
    keywords: 'hepatitis combined كبد',
  },
  {
    href: '/non-hcp/common-questions/hib',
    emoji: '👶',
    ar: 'الإنفلونزا البكتيري (HIB)',
    en: 'Haemophilus Influenzae Type B (HIB)',
    keywords: 'hib haemophilus',
  },
  {
    href: '/non-hcp/common-questions/hpv',
    emoji: '🛡️',
    ar: 'فيروس الورم الحليمي البشري (HPV)',
    en: 'Human Papillomavirus (HPV)',
    keywords: 'hpv papillomavirus',
  },
  {
    href: '/non-hcp/common-questions/influenza',
    emoji: '🤧',
    ar: 'الإنفلونزا الفيروسية',
    en: 'Influenza (Flu)',
    keywords: 'influenza flu انفلونزا',
  },
  {
    href: '/non-hcp/common-questions/mmr',
    emoji: '📋',
    ar: 'الثلاثي الفيروسي (MMR)',
    en: 'MMR (Measles, Mumps, Rubella)',
    keywords: 'mmr measles mumps rubella',
  },
  {
    href: '/non-hcp/common-questions/men-acwy',
    emoji: '🧠',
    ar: 'تطعيم MenACWY',
    en: 'MenACWY (Meningococcal ACWY)',
    keywords: 'menacwy meningitis acwy شوكية',
  },
  {
    href: '/non-hcp/common-questions/men-b',
    emoji: '🛡️',
    ar: 'تطعيم MenB',
    en: 'MenB (Meningococcal B)',
    keywords: 'menb meningitis b شوكية',
  },
  {
    href: '/non-hcp/common-questions/pneumococcal',
    emoji: '🫁',
    ar: 'تطعيم المكورات الرئوية',
    en: 'Pneumococcal (PCV / PPSV)',
    keywords: 'pneumococcal pcv ppsv مكورات',
  },
  {
    href: '/non-hcp/common-questions/rabies',
    emoji: '🐕',
    ar: 'تطعيم السعار (داء الكلب)',
    en: 'Rabies',
    keywords: 'rabies سعار كلب',
  },
  {
    href: '/non-hcp/common-questions/rota',
    emoji: '💊',
    ar: 'تطعيم الروتا',
    en: 'Rotavirus (Rota)',
    keywords: 'rotavirus rota روتا',
  },
  {
    href: '/non-hcp/common-questions/rsv',
    emoji: '🫁',
    ar: 'تطعيم RSV',
    en: 'RSV (Respiratory Syncytial Virus)',
    keywords: 'rsv respiratory',
  },
  {
    href: '/non-hcp/common-questions/varicella',
    emoji: '🔴',
    ar: 'تطعيم الجديري المائي',
    en: 'Varicella (Chickenpox)',
    keywords: 'varicella chickenpox جديري',
  },
  {
    href: '/non-hcp/common-questions/herpes-zoster',
    emoji: '🟠',
    ar: 'تطعيم الحزام الناري',
    en: 'Herpes Zoster (Shingles)',
    keywords: 'shingles zoster حزام',
  },
];

export const NON_HCP_COMMON_QUESTION_TOPIC_COUNT = NON_HCP_COMMON_QUESTION_TOPICS.length;
