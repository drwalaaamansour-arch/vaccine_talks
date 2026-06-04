export type AdultVaccineItem = {
  href: string;
  emoji: string;
  ar: string;
  en: string;
  keywords: string;
};

export const ADULT_VACCINES_HERO = {
  tag: 'للأسرة المصرية · For families in Egypt',
  titleAr: 'تطعيمات الكبار المتاحة',
  titleEn: 'Available Adult Vaccines',
  leadAr: 'اختاروا اللقاح اللي عاوزين تعرفوا عنه — معلومات واضحة بالعربي والإنجليزي للكبار في مصر.',
  leadEn: 'Pick a vaccine to learn what adults need in Egypt — clear guidance in Arabic and English.',
} as const;

export const ADULT_VACCINES: AdultVaccineItem[] = [
  {
    href: '/hepatitis-a',
    emoji: '💉',
    ar: 'كبدي (أ)',
    en: 'Hepatitis A',
    keywords: 'hepatitis a hep a كبدي',
  },
  {
    href: '/hepatitis-b',
    emoji: '💉',
    ar: 'كبدي (ب)',
    en: 'Hepatitis B',
    keywords: 'hepatitis b hep b كبدي',
  },
  {
    href: '/influenza',
    emoji: '💉',
    ar: 'الإنفلونزا الفيروسية',
    en: 'Viral Influenza',
    keywords: 'influenza flu انفلونزا',
  },
  {
    href: '/hepatitis-a-b',
    emoji: '💉',
    ar: 'كبدي (أ+ب)',
    en: 'Hepatitis A+B',
    keywords: 'hepatitis combined كبدي',
  },
  {
    href: '/chickenpox',
    emoji: '💉',
    ar: 'الجديري المائي',
    en: 'Chickenpox',
    keywords: 'chickenpox varicella جديري',
  },
  {
    href: '/pcv',
    emoji: '💉',
    ar: 'المكورات الرئوية',
    en: 'PCV',
    keywords: 'pcv pneumococcal مكورات',
  },
  {
    href: '/herpes-zoster',
    emoji: '💉',
    ar: 'الحزام الناري',
    en: 'Herpes Zoster',
    keywords: 'shingles zoster حزام ناري',
  },
  {
    href: '/meningitis',
    emoji: '💉',
    ar: 'التهاب سحائي (حمى شوكية)',
    en: 'Meningitis',
    keywords: 'meningitis meningococcal شوكية سحائي',
  },
  {
    href: '/hpv',
    emoji: '💉',
    ar: 'فيروس الورم الحليمي',
    en: 'HPV',
    keywords: 'hpv papillomavirus ورم حليمي',
  },
  {
    href: '/tetanus',
    emoji: '💉',
    ar: 'التيتانوس',
    en: 'Tetanus',
    keywords: 'tetanus تيتانوس كزاز',
  },
  {
    href: '/ppsv',
    emoji: '💉',
    ar: 'التهاب رئوي متعدد السكريات',
    en: 'PPSV',
    keywords: 'ppsv pneumococcal polysaccharide رئوي',
  },
  {
    href: '/rsv',
    emoji: '💉',
    ar: 'RSV الفيروس التنفسي المخلوي',
    en: 'RSV',
    keywords: 'rsv respiratory syncytial تنفسي',
  },
];

export const ADULT_VACCINE_COUNT = ADULT_VACCINES.length;
