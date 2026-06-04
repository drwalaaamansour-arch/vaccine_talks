export type HcpVaccineSeraItem = {
  href: string;
  title: string;
  subtitle: string;
  emoji: string;
  excerpt: string;
  keywords: string;
};

export const HCP_VACCINES_SERA_HERO = {
  tag: 'HCP · Vaccines & sera · Egypt',
  title: 'Vaccines and Sera in Egypt',
  subtitle: 'Product guides available in Egyptian practice',
  lead:
    'Official inserts, schedules, and essential information on vaccines and antisera used in Egypt — for quick reference at the point of care.',
} as const;

export const HCP_VACCINES_SERA_INTRO = [
  'Browse vaccines and antisera registered and used in Egypt. Each link opens the product page with schedules, dosing, and practical notes where available.',
  'All products are listed alphabetically below.',
] as const;

const HCP_VACCINES_SERA_UNSORTED: HcpVaccineSeraItem[] = [
  {
    href: '/anti-scorpion',
    title: 'Anti-scorpion',
    subtitle: 'Antiserum',
    emoji: '🦂',
    excerpt: 'Scorpion envenomation — antiserum use, dosing, and clinical management.',
    keywords: 'anti scorpion antiserum envenomation',
  },
  {
    href: '/anti-snake',
    title: 'Anti-snake',
    subtitle: 'Antiserum',
    emoji: '🐍',
    excerpt: 'Snake bite antiserum — indications, administration, and monitoring.',
    keywords: 'anti snake antiserum bite',
  },
  {
    href: '/anti-viper',
    title: 'Anti-viper',
    subtitle: 'Antiserum',
    emoji: '☠️',
    excerpt: 'Viper envenomation antiserum — product information and treatment guidance.',
    keywords: 'anti viper antiserum envenomation',
  },
  {
    href: '/hcp/bcg',
    title: 'BCG',
    subtitle: 'Vaccine',
    emoji: '💉',
    excerpt: 'Bacille Calmette-Guérin — neonatal use, contraindications, and local policy.',
    keywords: 'bcg tuberculosis tb',
  },
  {
    href: '/hcp/diphtheria',
    title: 'Diphtheria',
    subtitle: 'Vaccine',
    emoji: '🦠',
    excerpt: 'Diphtheria-containing vaccines — schedules and booster recommendations.',
    keywords: 'diphtheria dtap td',
  },
  {
    href: '/hcp/dt',
    title: 'DT containing vaccine',
    subtitle: 'Vaccine',
    emoji: '📋',
    excerpt: 'Diphtheria–tetanus combinations — age-specific products and intervals.',
    keywords: 'dt diphtheria tetanus containing',
  },
  {
    href: '/hb-immunoglobulin',
    title: 'HB immunoglobulin',
    subtitle: 'Immunoglobulin',
    emoji: '🩸',
    excerpt: 'Hepatitis B immunoglobulin — PEP, neonatal prophylaxis, and dosing.',
    keywords: 'hb immunoglobulin hepatitis b ig',
  },
  {
    href: '/hcp/hepatitis-a',
    title: 'Hepatitis A',
    subtitle: 'Vaccine',
    emoji: '🟡',
    excerpt: 'Hepatitis A vaccine — schedules, travel, and outbreak use.',
    keywords: 'hepatitis a hep a',
  },
  {
    href: '/hcp/hepatitis-a-b',
    title: 'Hepatitis A&B',
    subtitle: 'Vaccine',
    emoji: '🟠',
    excerpt: 'Combined hepatitis A and B vaccine — eligibility and series completion.',
    keywords: 'hepatitis a b combined twinrix',
  },
  {
    href: '/hcp/hepatitis-b',
    title: 'Hepatitis B',
    subtitle: 'Vaccine',
    emoji: '🔵',
    excerpt: 'Hepatitis B vaccine — birth dose, catch-up, and high-risk groups.',
    keywords: 'hepatitis b hep b',
  },
  {
    href: '/hcp/shingles',
    title: 'Herpes zoster',
    subtitle: 'Vaccine',
    emoji: '⚡',
    excerpt: 'Herpes zoster (shingles) vaccine — adult schedules and precautions.',
    keywords: 'herpes zoster shingles hz',
  },
  {
    href: '/hcp/hib',
    title: 'HIB',
    subtitle: 'Vaccine',
    emoji: '👶',
    excerpt: 'Haemophilus influenzae type b conjugate vaccines — infant series.',
    keywords: 'hib haemophilus influenzae',
  },
  {
    href: '/hcp/hpv',
    title: 'HPV',
    subtitle: 'Vaccine',
    emoji: '💗',
    excerpt: 'Human papillomavirus vaccine — age groups and counseling in Egypt.',
    keywords: 'hpv papillomavirus cervical',
  },
  {
    href: '/hcp/influenza',
    title: 'Influenza',
    subtitle: 'Vaccine',
    emoji: '🤧',
    excerpt: 'Seasonal influenza vaccines — annual vaccination and product choice.',
    keywords: 'influenza flu seasonal',
  },
  {
    href: '/hcp/meningococcal',
    title: 'Meningococcal',
    subtitle: 'Vaccine',
    emoji: '🧫',
    excerpt: 'Meningococcal vaccines — conjugate and MenB products in Egypt.',
    keywords: 'meningococcal men acwy menb',
  },
  {
    href: '/hcp/mmr',
    title: 'MMR',
    subtitle: 'Vaccine',
    emoji: '📊',
    excerpt: 'Measles, mumps, and rubella — routine and catch-up schedules.',
    keywords: 'mmr measles mumps rubella',
  },
  {
    href: '/hcp/pneumococcal',
    title: 'Pneumococcal',
    subtitle: 'Vaccine',
    emoji: '🫁',
    excerpt: 'Pneumococcal conjugate and polysaccharide vaccines by age and risk.',
    keywords: 'pneumococcal pcv ppsv',
  },
  {
    href: '/hcp/polio',
    title: 'Polio',
    subtitle: 'Vaccine',
    emoji: '🦵',
    excerpt: 'Poliovirus vaccines — IPV, OPV, and supplementary immunization.',
    keywords: 'polio poliovirus ipv opv',
  },
  {
    href: '/hcp/rabirs',
    title: 'Rabies',
    subtitle: 'Vaccine',
    emoji: '🐕',
    excerpt: 'Rabies vaccine and immunoglobulin — pre- and post-exposure regimens.',
    keywords: 'rabies pep vaccine',
  },
  {
    href: '/hcp/rota',
    title: 'Rota',
    subtitle: 'Vaccine',
    emoji: '🌀',
    excerpt: 'Rotavirus oral vaccines — series timing and age limits.',
    keywords: 'rota rotavirus oral',
  },
  {
    href: '/hcp/rsv',
    title: 'RSV',
    subtitle: 'Vaccine',
    emoji: '🫁',
    excerpt: 'Respiratory syncytial virus prevention — products and eligibility.',
    keywords: 'rsv respiratory syncytial',
  },
  {
    href: '/hcp/tetanus',
    title: 'Tetanus',
    subtitle: 'Vaccine',
    emoji: '🔧',
    excerpt: 'Tetanus toxoid — wound management, boosters, and pregnancy.',
    keywords: 'tetanus toxoid td tap',
  },
  {
    href: '/hcp/varicella',
    title: 'Varicella',
    subtitle: 'Vaccine',
    emoji: '🔴',
    excerpt: 'Varicella vaccine — routine, catch-up, and post-exposure use.',
    keywords: 'varicella chickenpox',
  },
  {
    href: '/hcp/yellow-fever',
    title: 'Yellow fever',
    subtitle: 'Vaccine',
    emoji: '🟨',
    excerpt: 'Yellow fever vaccine — travelers, certificate requirements, and contraindications.',
    keywords: 'yellow fever travel certificate',
  },
];

export const HCP_VACCINES_SERA: HcpVaccineSeraItem[] = [...HCP_VACCINES_SERA_UNSORTED].sort((a, b) =>
  a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }),
);

export const HCP_VACCINES_SERA_COUNT = HCP_VACCINES_SERA.length;
