export type HcpSpecialPopulationsHubItem = {
  href: string;
  emoji?: string;
  labelEn: string;
  labelAr: string;
};

export type HcpSpecialPopulationsHubCopy = {
  tag: string;
  title: string;
  intro: readonly [string, string];
  openGuide: string;
  items: HcpSpecialPopulationsHubItem[];
};

const HUB_ITEMS: HcpSpecialPopulationsHubItem[] = [
  {
    href: '/hcp-special-populations/altered-immunocompetence/general-principles',
    labelEn: 'General principles',
    labelAr: 'المبادئ العامة',
    emoji: '🛡️',
  },
  {
    href: '/hcp-special-populations/altered-immunocompetence/vaccination-of-contacts',
    labelEn: 'Vaccination of contacts with persons with altered immunocompetence',
    labelAr: 'تطعيم مخالطي الأشخاص ذوي المناعة المتغيرة',
    emoji: '🤝',
  },
  {
    href: '/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia',
    labelEn: 'Anatomic or functional asplenia',
    labelAr: 'نقص الطحال التشريحي أو الوظيفي',
    emoji: '⚕️',
  },
  {
    href: '/hcp-special-populations/altered-immunocompetence/corticosteroids-and-immunosuppressive-drugs',
    labelEn: 'Corticosteroids & immunosuppressive drugs',
    labelAr: 'الكورتيكوستيرويدات والأدوية المثبطة للمناعة',
    emoji: '💊',
  },
  {
    href: '/hcp-special-populations/vaccination-in-patients-with-cancer',
    labelEn: 'Vaccination in patients with cancer',
    labelAr: 'التطعيم لمرضى السرطان',
    emoji: '🎗️',
  },
  {
    href: '/hcp-special-populations/haematopoietic-stem-cell-transplant-recipients',
    labelEn: 'Haematopoietic stem cell transplant recipients',
    labelAr: 'متلقي زراعة الخلايا الجذعية الدموية',
    emoji: '🧬',
  },
  {
    href: '/hcp-special-populations/solid-organ-transplant-vaccination',
    labelEn: 'Solid organ transplant vaccination',
    labelAr: 'التطعيم لمرضى زراعة الأعضاء الصلبة',
    emoji: '🫀',
  },
  {
    href: '/hcp-special-populations/expert-consensus-pediatric-oncology-re-immunization-egypt',
    labelEn: 'Pediatric oncology expert consensus (Egypt)',
    labelAr: 'إجماع الخبراء: إعادة التطعيم لمرضى الأورام لدى الأطفال (مصر)',
    emoji: '👧',
  },
  {
    href: '/hcp-special-populations/pregnancy-breastfeeding',
    labelEn: 'Pregnancy',
    labelAr: 'الحمل',
    emoji: '🤱',
  },
  {
    href: '/hcp-special-populations/breastfeeding',
    labelEn: 'Women who are breastfeeding',
    labelAr: 'النساء المرضعات',
    emoji: '🍼',
  },
  {
    href: '/hcp-special-populations/preterm-infants',
    labelEn: 'Preterm infants',
    labelAr: 'الرضع الخدج',
    emoji: '👶',
  },
  {
    href: '/hcp-special-populations/anaesthesia-surgery',
    labelEn: 'Before or after anaesthesia or surgery',
    labelAr: 'قبل أو بعد التخدير أو الجراحة',
    emoji: '🏥',
  },
  {
    href: '/hcp-special-populations/immunoglobulin-blood-products',
    labelEn: 'Immunoglobulin & blood products',
    labelAr: 'الغلوبولينات المناعية البشرية ومنتجات الدم',
    emoji: '💉',
  },
  {
    href: '/hcp-special-populations/cochlear-implants',
    labelEn: 'Cochlear implants',
    labelAr: 'زراعة القوقعة والتطعيم',
    emoji: '🦻',
  },
  {
    href: '/hcp-special-populations/occupational-risk',
    labelEn: 'Occupational risk',
    labelAr: 'المخاطر المهنية',
    emoji: '👷',
  },
  {
    href: '/hcp-special-populations/international-travellers',
    labelEn: 'International travellers',
    labelAr: 'المسافرون دوليًا',
    emoji: '✈️',
  },
  {
    href: '/hcp-special-populations/vaccinations-with-multiple-sclerosis',
    labelEn: 'Vaccinations with Multiple Sclerosis',
    labelAr: 'التطعيم مع التصلب المتعدد',
    emoji: '🧠',
  },
];

export const HCP_SPECIAL_POPULATIONS_HUB_COPY: {
  en: HcpSpecialPopulationsHubCopy;
  ar: HcpSpecialPopulationsHubCopy;
} = {
  en: {
    tag: 'HCP · Special populations',
    title: 'Special Populations',
    intro: [
      'Evidence-based vaccination guidance for healthcare professionals caring for patients whose immune status, treatment, or clinical context requires tailored schedules.',
      'Each topic covers timing, vaccine type, safety, and links to authoritative references and downloadable resources where available.',
    ],
    openGuide: 'Open guide →',
    items: HUB_ITEMS,
  },
  ar: {
    tag: 'HCP · الفئات الخاصة',
    title: 'الفئات الخاصة',
    intro: [
      'إرشادات تطعيم مبنية على الأدلة لمقدمي الرعاية الصحية الذين يعالجون مرضى تتطلب حالتهم المناعية أو علاجهم أو سياقهم السريري جداول تطعيم مخصصة.',
      'يغطي كل موضوع التوقيت ونوع اللقاح والسلامة وروابط إلى مراجع موثوقة وموارد قابلة للتنزيل عند توفرها.',
    ],
    openGuide: '← فتح الدليل',
    items: HUB_ITEMS,
  },
};

/** @deprecated Use HCP_SPECIAL_POPULATIONS_HUB_COPY.en.items */
export const HCP_SPECIAL_POPULATIONS_ITEMS = HUB_ITEMS.map((item) => ({
  href: item.href,
  label: item.labelEn,
  emoji: item.emoji,
}));

/** @deprecated Use HCP_SPECIAL_POPULATIONS_HUB_COPY.en.intro */
export const HCP_SPECIAL_POPULATIONS_INTRO = HCP_SPECIAL_POPULATIONS_HUB_COPY.en.intro;
