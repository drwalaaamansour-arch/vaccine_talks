export type HcpVaccinesSeraHubItem = {
  href: string;
  emoji: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  excerptEn: string;
  excerptAr: string;
  keywords: string;
};

export type HcpVaccinesSeraHubCopy = {
  back: string;
  hero: {
    tag: string;
    title: string;
    subtitle: string;
    lead: string;
  };
  intro: readonly [string, string];
  stats: { products: string; alphabetical: string };
  search: {
    placeholder: string;
    ariaLabel: string;
    clearAriaLabel: string;
    showing: (count: number) => string;
    noMatches: string;
    empty: string;
  };
  sectionTitle: string;
  sectionSubtitle: (count: number) => string;
  openProduct: (title: string) => string;
  gridAriaLabel: string;
  items: HcpVaccinesSeraHubItem[];
};

const HUB_ITEMS: HcpVaccinesSeraHubItem[] = [
  {
    href: '/anti-scorpion',
    titleEn: 'Anti-scorpion',
    titleAr: 'مضاد العقرب',
    subtitleEn: 'Antiserum',
    subtitleAr: 'مصل',
    excerptEn: 'Scorpion envenomation — antiserum use, dosing, and clinical management.',
    excerptAr: 'تسمم العقرب — استخدام المصل والجرعات والإدارة السريرية.',
    emoji: '🦂',
    keywords: 'anti scorpion antiserum envenomation',
  },
  {
    href: '/anti-snake',
    titleEn: 'Anti-snake',
    titleAr: 'مضاد الأفعى',
    subtitleEn: 'Antiserum',
    subtitleAr: 'مصل',
    excerptEn: 'Snake bite antiserum — indications, administration, and monitoring.',
    excerptAr: 'مصل لدغة الأفعى — المؤشرات والإعطاء والمراقبة.',
    emoji: '🐍',
    keywords: 'anti snake antiserum bite',
  },
  {
    href: '/anti-viper',
    titleEn: 'Anti-viper',
    titleAr: 'مضاد الأفعى الأقرع',
    subtitleEn: 'Antiserum',
    subtitleAr: 'مصل',
    excerptEn: 'Viper envenomation antiserum — product information and treatment guidance.',
    excerptAr: 'مصل تسمم الأفعى الأقرع — معلومات المنتج وإرشادات العلاج.',
    emoji: '☠️',
    keywords: 'anti viper antiserum envenomation',
  },
  {
    href: '/hcp/bcg',
    titleEn: 'BCG',
    titleAr: 'لقاح BCG (السل)',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Bacille Calmette-Guérin — neonatal use, contraindications, and local policy.',
    excerptAr: 'لقاح BCG ضد السل — الاستخدام لدى حديثي الولادة وموانع الاستعمال والسياسة المحلية.',
    emoji: '💉',
    keywords: 'bcg tuberculosis tb',
  },
  {
    href: '/hcp/diphtheria',
    titleEn: 'Diphtheria',
    titleAr: 'الخناق',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Diphtheria-containing vaccines — schedules and booster recommendations.',
    excerptAr: 'اللقاحات المحتوية على الخناق — الجداول وتوصيات المعززات.',
    emoji: '🦠',
    keywords: 'diphtheria dtap td',
  },
  {
    href: '/hcp/dt',
    titleEn: 'DT containing vaccine',
    titleAr: 'لقاح الخناق والكزاز',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Diphtheria–tetanus combinations — age-specific products and intervals.',
    excerptAr: 'تركيبات الخناق–الكزاز — المنتجات حسب العمر والفترات.',
    emoji: '📋',
    keywords: 'dt diphtheria tetanus containing',
  },
  {
    href: '/hb-immunoglobulin',
    titleEn: 'HB immunoglobulin',
    titleAr: 'الجلوبيولين المناعي لفيروس (ب)',
    subtitleEn: 'Immunoglobulin',
    subtitleAr: 'جلوبيولين مناعي',
    excerptEn: 'Hepatitis B immunoglobulin — PEP, neonatal prophylaxis, and dosing.',
    excerptAr: 'الجلوبيولين المناعي لفيروس (ب) — الوقاية بعد التعرض ووقاية حديثي الولادة والجرعات.',
    emoji: '🩸',
    keywords: 'hb immunoglobulin hepatitis b ig',
  },
  {
    href: '/hcp/hepatitis-a',
    titleEn: 'Hepatitis A',
    titleAr: 'التهاب الكبد (أ)',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Hepatitis A vaccine — schedules, travel, and outbreak use.',
    excerptAr: 'لقاح التهاب الكبد (أ) — الجداول والسفر والاستخدام أثناء تفشي المرض.',
    emoji: '🟡',
    keywords: 'hepatitis a hep a',
  },
  {
    href: '/hcp/hepatitis-a-b',
    titleEn: 'Hepatitis A&B',
    titleAr: 'التهاب الكبد (أ) و(ب)',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Combined hepatitis A and B vaccine — eligibility and series completion.',
    excerptAr: 'لقاح مشترك للتهاب الكبد (أ) و(ب) — الأهلية وإكمال السلسلة.',
    emoji: '🟠',
    keywords: 'hepatitis a b combined twinrix',
  },
  {
    href: '/hcp/hepatitis-b',
    titleEn: 'Hepatitis B',
    titleAr: 'التهاب الكبد (ب)',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Hepatitis B vaccine — birth dose, catch-up, and high-risk groups.',
    excerptAr: 'لقاح التهاب الكبد (ب) — جرعة الولادة والتدارك والفئات عالية الخطورة.',
    emoji: '🔵',
    keywords: 'hepatitis b hep b',
  },
  {
    href: '/hcp/shingles',
    titleEn: 'Herpes zoster',
    titleAr: 'الحزام الناري',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Herpes zoster (shingles) vaccine — adult schedules and precautions.',
    excerptAr: 'لقاح الحزام الناري — جداول البالغين والاحتياطات.',
    emoji: '⚡',
    keywords: 'herpes zoster shingles hz',
  },
  {
    href: '/hcp/hib',
    titleEn: 'HIB',
    titleAr: 'Haemophilus influenzae من النوع b',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Haemophilus influenzae type b conjugate vaccines — infant series.',
    excerptAr: 'لقاحات Haemophilus influenzae من النوع b المقترنة — سلسلة الرضع.',
    emoji: '👶',
    keywords: 'hib haemophilus influenzae',
  },
  {
    href: '/hcp/hpv',
    titleEn: 'HPV',
    titleAr: 'فيروس الورم الحليمي البشري',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Human papillomavirus vaccine — age groups and counseling in Egypt.',
    excerptAr: 'لقاح فيروس الورم الحليمي البشري — الفئات العمرية والإرشاد في مصر.',
    emoji: '💗',
    keywords: 'hpv papillomavirus cervical',
  },
  {
    href: '/hcp/influenza',
    titleEn: 'Influenza',
    titleAr: 'الإنفلونزا',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Seasonal influenza vaccines — annual vaccination and product choice.',
    excerptAr: 'لقاحات الإنفلونزا الفيروسية — التطعيم السنوي واختيار المنتج.',
    emoji: '🤧',
    keywords: 'influenza flu seasonal',
  },
  {
    href: '/hcp/meningococcal',
    titleEn: 'Meningococcal',
    titleAr: 'المكورات السحائية',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Meningococcal vaccines — conjugate and MenB products in Egypt.',
    excerptAr: 'لقاحات المكورات السحائية — المنتجات المقترنة وMenB في مصر.',
    emoji: '🧫',
    keywords: 'meningococcal men acwy menb',
  },
  {
    href: '/hcp/mmr',
    titleEn: 'MMR',
    titleAr: 'الحصبة والنكاف والحصبة الألمانية',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Measles, mumps, and rubella — routine and catch-up schedules.',
    excerptAr: 'الحصبة والنكاف والحصبة الألمانية — الجداول الروتينية والتدارك.',
    emoji: '📊',
    keywords: 'mmr measles mumps rubella',
  },
  {
    href: '/hcp/pneumococcal',
    titleEn: 'Pneumococcal',
    titleAr: 'المكورات الرئوية',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Pneumococcal conjugate and polysaccharide vaccines by age and risk.',
    excerptAr: 'لقاحات المكورات الرئوية المقترنة والسكرية حسب العمر والخطر.',
    emoji: '🫁',
    keywords: 'pneumococcal pcv ppsv',
  },
  {
    href: '/hcp/polio',
    titleEn: 'Polio',
    titleAr: 'شلل الأطفال',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Poliovirus vaccines — IPV, OPV, and supplementary immunization.',
    excerptAr: 'لقاحات شلل الأطفال — IPV وOPV والتطعيمات التكميلية.',
    emoji: '🦵',
    keywords: 'polio poliovirus ipv opv',
  },
  {
    href: '/hcp/rabirs',
    titleEn: 'Rabies',
    titleAr: 'داء الكلب',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Rabies vaccine and immunoglobulin — pre- and post-exposure regimens.',
    excerptAr: 'لقاح داء الكلب والجلوبيولين المناعي — أنظمة ما قبل وبعد التعرض.',
    emoji: '🐕',
    keywords: 'rabies pep vaccine',
  },
  {
    href: '/hcp/rota',
    titleEn: 'Rota',
    titleAr: 'الروتافيروس',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Rotavirus oral vaccines — series timing and age limits.',
    excerptAr: 'لقاحات الروتافيروس الفموية — توقيت السلسلة وحدود العمر.',
    emoji: '🌀',
    keywords: 'rota rotavirus oral',
  },
  {
    href: '/hcp/rsv',
    titleEn: 'RSV',
    titleAr: 'الفيروس التنفسي المخلوي',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Respiratory syncytial virus prevention — products and eligibility.',
    excerptAr: 'الوقاية من الفيروس التنفسي المخلوي — المنتجات والأهلية.',
    emoji: '🫁',
    keywords: 'rsv respiratory syncytial',
  },
  {
    href: '/hcp/tetanus',
    titleEn: 'Tetanus',
    titleAr: 'الكزاز',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Tetanus toxoid — wound management, boosters, and pregnancy.',
    excerptAr: 'لقاح الكزاز — إدارة الجروح والمعززات والحمل.',
    emoji: '🔧',
    keywords: 'tetanus toxoid td tap',
  },
  {
    href: '/hcp/varicella',
    titleEn: 'Varicella',
    titleAr: 'الجدري المائي',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Varicella vaccine — routine, catch-up, and post-exposure use.',
    excerptAr: 'لقاح الجدري المائي — الروتين والتدارك والاستخدام بعد التعرض.',
    emoji: '🔴',
    keywords: 'varicella chickenpox',
  },
  {
    href: '/hcp/yellow-fever',
    titleEn: 'Yellow fever',
    titleAr: 'الحمى الصفراء',
    subtitleEn: 'Vaccine',
    subtitleAr: 'لقاح',
    excerptEn: 'Yellow fever vaccine — travelers, certificate requirements, and contraindications.',
    excerptAr: 'لقاح الحمى الصفراء — المسافرون ومتطلبات الشهادة وموانع الاستعمال.',
    emoji: '🟨',
    keywords: 'yellow fever travel certificate',
  },
];

export const HCP_VACCINES_SERA_SORTED = [...HUB_ITEMS].sort((a, b) =>
  a.titleEn.localeCompare(b.titleEn, 'en', { sensitivity: 'base' }),
);

export const HCP_VACCINES_SERA_HUB_COPY: { en: HcpVaccinesSeraHubCopy; ar: HcpVaccinesSeraHubCopy } = {
  en: {
    back: '← Back to HCP Resources',
    hero: {
      tag: 'HCP · Vaccines & sera · Egypt',
      title: 'Vaccines and Sera in Egypt',
      subtitle: 'Product guides available in Egyptian practice',
      lead: 'Official inserts, schedules, and essential information on vaccines and antisera used in Egypt — for quick reference at the point of care.',
    },
    intro: [
      'Browse vaccines and antisera registered and used in Egypt. Each link opens the product page with schedules, dosing, and practical notes where available.',
      'All products are listed alphabetically below.',
    ],
    stats: { products: 'Products', alphabetical: 'Alphabetical order' },
    search: {
      placeholder: 'Search products… e.g. hepatitis, anti-snake, MMR',
      ariaLabel: 'Search vaccines and sera',
      clearAriaLabel: 'Clear search',
      showing: (count) => `Showing ${count} product${count === 1 ? '' : 's'}`,
      noMatches: 'No matches — try another keyword',
      empty: 'No products match your search.',
    },
    sectionTitle: 'Vaccines & sera (A–Z)',
    sectionSubtitle: (count) =>
      `${count} products listed alphabetically — open any topic with the button below.`,
    openProduct: (title) => `Open ${title}`,
    gridAriaLabel: 'Vaccines and sera A to Z',
    items: HCP_VACCINES_SERA_SORTED,
  },
  ar: {
    back: 'العودة إلى موارد مقدمي الرعاية →',
    hero: {
      tag: 'مقدمو الرعاية · اللقاحات والأمصال · مصر',
      title: 'اللقاحات والأمصال في مصر',
      subtitle: 'أدلة المنتجات المتاحة في الممارسة المصرية',
      lead: 'النشرات الرسمية والجداول والمعلومات الأساسية عن اللقاحات والأمصال المستخدمة في مصر — للمراجعة السريعة عند نقطة الرعاية.',
    },
    intro: [
      'تصفّح اللقاحات والأمصال المسجّلة والمستخدمة في مصر. يفتح كل رابط صفحة المنتج مع الجداول والجرعات والملاحظات العملية عند توفرها.',
      'جميع المنتجات مدرجة أبجديًا أدناه.',
    ],
    stats: { products: 'منتجات', alphabetical: 'ترتيب أبجدي' },
    search: {
      placeholder: 'ابحث في المنتجات… مثل التهاب الكبد، مضاد الأفعى، الحصبة',
      ariaLabel: 'البحث في اللقاحات والأمصال',
      clearAriaLabel: 'مسح البحث',
      showing: (count) => `عرض ${count} منتج`,
      noMatches: 'لا توجد نتائج — جرّب كلمة أخرى',
      empty: 'لا توجد منتجات تطابق بحثك.',
    },
    sectionTitle: 'اللقاحات والأمصال (أ–ي)',
    sectionSubtitle: (count) => `${count} منتجًا مدرجًا أبجديًا — افتح أي موضوع بالزر أدناه.`,
    openProduct: (title) => `فتح ${title}`,
    gridAriaLabel: 'اللقاحات والأمصال من أ إلى ي',
    items: HCP_VACCINES_SERA_SORTED,
  },
};

/** @deprecated Use HCP_VACCINES_SERA_HUB_COPY.en */
export const HCP_VACCINES_SERA_HERO = HCP_VACCINES_SERA_HUB_COPY.en.hero;
/** @deprecated Use HCP_VACCINES_SERA_HUB_COPY.en.intro */
export const HCP_VACCINES_SERA_INTRO = HCP_VACCINES_SERA_HUB_COPY.en.intro;
/** @deprecated Use HCP_VACCINES_SERA_HUB_COPY.en.items */
export const HCP_VACCINES_SERA = HCP_VACCINES_SERA_SORTED.map((item) => ({
  href: item.href,
  title: item.titleEn,
  subtitle: item.subtitleEn,
  emoji: item.emoji,
  excerpt: item.excerptEn,
  keywords: item.keywords,
}));
/** @deprecated */
export const HCP_VACCINES_SERA_COUNT = HCP_VACCINES_SERA_SORTED.length;
