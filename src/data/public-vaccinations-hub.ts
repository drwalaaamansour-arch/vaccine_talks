export type PublicVaccinationItem = {
  href: string;
  emoji: string;
  ar: string;
  en: string;
  keywords: string;
};

export const PUBLIC_VACCINATIONS: PublicVaccinationItem[] = [
  { href: '/polio', emoji: '💧', ar: 'شلل الأطفال', en: 'Polio', keywords: 'polio ipv opv' },
  { href: '/tuberculosis', emoji: '💉', ar: 'الدرن', en: 'Tuberculosis', keywords: 'bcg tb' },
  { href: '/zero-dose', emoji: '💉', ar: 'الجرعة الصفرية', en: 'Zero Dose', keywords: 'zero newborn' },
  { href: '/mmr', emoji: '💉', ar: 'الثلاثي الفيروسي', en: 'MMR', keywords: 'measles mumps rubella' },
  { href: '/hepatitis-a', emoji: '💉', ar: 'الالتهاب الكبدي أ', en: 'Hepatitis A', keywords: 'hep a liver' },
  { href: '/hepatitis-b', emoji: '💉', ar: 'الالتهاب الكبدي ب', en: 'Hepatitis B', keywords: 'hep b liver' },
  { href: '/rotavirus', emoji: '💧', ar: 'الروتا', en: 'Rotavirus', keywords: 'rota diarrhea' },
  { href: '/chickenpox', emoji: '💉', ar: 'الجديري المائي', en: 'Chickenpox', keywords: 'varicella chickenpox' },
  { href: '/influenza', emoji: '💉', ar: 'الانفلونزا الفيروسية', en: 'Influenza', keywords: 'flu seasonal' },
  { href: '/pertussis', emoji: '💉', ar: 'السعال الديكي', en: 'Pertussis', keywords: 'whooping cough' },
  { href: '/tetanus', emoji: '💉', ar: 'الكزاز', en: 'Tetanus', keywords: 'tetanus lockjaw' },
  { href: '/diphtheria', emoji: '💉', ar: 'الدفتيريا', en: 'Diphtheria', keywords: 'diphtheria' },
  { href: '/hib', emoji: '💉', ar: 'الإنفلونزا البكتيري', en: 'HIB', keywords: 'hib haemophilus' },
  { href: '/pcv', emoji: '💉', ar: 'المكورات الرئوية', en: 'PCV', keywords: 'pneumococcal pcv' },
  { href: '/hepatitis-a-b', emoji: '💉', ar: 'كبدي أ+ب', en: 'Hepatitis A+B', keywords: 'combined hep' },
  { href: '/herpes-zoster', emoji: '💉', ar: 'الحزام الناري', en: 'Herpes Zoster', keywords: 'shingles zoster' },
  { href: '/meningitis', emoji: '💉', ar: 'الالتهاب السحائي', en: 'Meningitis', keywords: 'meningococcal meningitis' },
  { href: '/ppsv', emoji: '💉', ar: 'التهاب رئوي متعدد السكريات', en: 'PPSV', keywords: 'pneumococcal ppsv23' },
  { href: '/rabies', emoji: '💉', ar: 'السعار', en: 'Rabies', keywords: 'rabies dog bite' },
  { href: '/hpv', emoji: '💉', ar: 'فيروس الورم الحليمي', en: 'HPV', keywords: 'papillomavirus cervical' },
  { href: '/rsv', emoji: '💉', ar: 'RSV الفيروس التنفسي المخلوي', en: 'RSV', keywords: 'rsv respiratory syncytial' },
];

export const PUBLIC_VACCINATION_TOPICS_COUNT = PUBLIC_VACCINATIONS.length;

export const PUBLIC_VACCINATIONS_HUB_COPY = {
  en: {
    tag: 'Your vaccine guide · Egypt',
    title: 'Available Vaccinations',
    lead: 'Choose a vaccine to learn more — clear information for every vaccine in Egypt.',
    searchPlaceholder: 'Search a vaccine…',
    searchAriaLabel: 'Search vaccinations',
    searchClearAriaLabel: 'Clear search',
    searchShowing: (count: number) =>
      `Showing ${count} result${count === 1 ? '' : 's'}`,
    searchNoMatches: 'No matches — try another term',
  },
  ar: {
    tag: 'دليل التطعيمات في مصر',
    title: 'التطعيمات المتاحة',
    lead: 'اختاروا التطعيم اللي عاوزين تعرفوا عنه — معلومات واضحة لكل لقاح في مصر.',
    searchPlaceholder: 'دور على لقاح…',
    searchAriaLabel: 'البحث في التطعيمات',
    searchClearAriaLabel: 'مسح البحث',
    searchShowing: (count: number) => `عرض ${count} نتيجة`,
    searchNoMatches: 'مفيش نتائج — جرّب كلمة تانية',
  },
} as const;
