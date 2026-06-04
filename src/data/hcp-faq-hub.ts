export type HcpFaqItem = {
  href: string;
  title: string;
  subtitle: string;
  emoji: string;
  excerpt: string;
  keywords: string;
};

export const HCP_FAQ_HERO = {
  tag: 'HCP · Clinical FAQ · Egypt',
  title: 'Frequently Asked Questions',
  subtitle: 'ACIP-aligned answers tailored for Egyptian practice',
  lead:
    'Practical immunization FAQs by disease and topic — adapted from ACIP and CDC guidance and aligned with vaccination schedules and practices in Egypt.',
} as const;

export const HCP_FAQ_NOTE =
  'The following Frequently Asked Questions (FAQs) are adapted from the recommendations of the Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC), and have been tailored to align with the vaccination schedule and practices in Egypt.';

export const HCP_FAQ_INTRO = [
  'Select a topic below to open the full FAQ page for that vaccine or clinical subject.',
  'All topics are listed alphabetically (A–Z).',
] as const;

const HCP_FAQ_UNSORTED: HcpFaqItem[] = [
  {
    href: '/faq/administering-vaccines',
    title: 'Administering Vaccines',
    subtitle: 'Technique & workflow',
    emoji: '✋',
    excerpt: 'Routes, sites, needle selection, and safe vaccine administration.',
    keywords: 'administering administration technique injection site',
  },
  {
    href: '/faq/contraindications-precautions',
    title: 'Contraindications & Precautions',
    subtitle: 'Safety screening',
    emoji: '⚠️',
    excerpt: 'Valid contraindications, precautions, and when to defer vaccination.',
    keywords: 'contraindications precautions allergy defer',
  },
  {
    href: '/faq/hepatitis-a',
    title: 'Hepatitis A',
    subtitle: 'FAQ',
    emoji: '🟡',
    excerpt: 'Hepatitis A vaccine schedules, catch-up, and travel-related use.',
    keywords: 'hepatitis a hep a',
  },
  {
    href: '/faq/hepatitis-b',
    title: 'Hepatitis B',
    subtitle: 'FAQ',
    emoji: '🟠',
    excerpt: 'Birth dose, series completion, and high-risk hepatitis B vaccination.',
    keywords: 'hepatitis b hep b',
  },
  {
    href: '/faq/hepa-hepb',
    title: 'Hepatitis A & B (HepA+HepB)',
    subtitle: 'FAQ',
    emoji: '🔵',
    excerpt: 'Combined hepatitis A and B vaccine — eligibility and intervals.',
    keywords: 'hepa hepb combined hepatitis a b twinrix',
  },
  {
    href: '/faq/zoster',
    title: 'Herpes zoster',
    subtitle: 'FAQ',
    emoji: '⚡',
    excerpt: 'Shingles vaccine recommendations for adults and immunocompromised patients.',
    keywords: 'herpes zoster shingles hz',
  },
  {
    href: '/faq/hib',
    title: 'Hib',
    subtitle: 'FAQ',
    emoji: '👶',
    excerpt: 'Haemophilus influenzae type b — infant series and catch-up.',
    keywords: 'hib haemophilus influenzae',
  },
  {
    href: '/faq/hpv',
    title: 'HPV',
    subtitle: 'FAQ',
    emoji: '💗',
    excerpt: 'Human papillomavirus vaccine age groups and counseling.',
    keywords: 'hpv papillomavirus cervical',
  },
  {
    href: '/faq/influenza',
    title: 'Influenza',
    subtitle: 'FAQ',
    emoji: '🤧',
    excerpt: 'Seasonal influenza vaccination timing and annual revaccination.',
    keywords: 'influenza flu seasonal',
  },
  {
    href: '/faq/meningococcal-acwy',
    title: 'Meningococcal (ACWY)',
    subtitle: 'FAQ',
    emoji: '🧫',
    excerpt: 'MenACWY schedules for adolescents, travelers, and risk groups.',
    keywords: 'meningococcal acwy mena',
  },
  {
    href: '/faq/meningococcal-b',
    title: 'Meningococcal (B)',
    subtitle: 'FAQ',
    emoji: '🧬',
    excerpt: 'MenB vaccination for infants, adolescents, and increased-risk groups.',
    keywords: 'meningococcal b menb',
  },
  {
    href: '/faq/mmr',
    title: 'MMR',
    subtitle: 'FAQ',
    emoji: '📊',
    excerpt: 'Measles, mumps, and rubella — routine and outbreak-related questions.',
    keywords: 'mmr measles mumps rubella',
  },
  {
    href: '/faq/pneumococcal',
    title: 'Pneumococcal',
    subtitle: 'FAQ',
    emoji: '🦠',
    excerpt: 'Pneumococcal conjugate and polysaccharide vaccines by age and risk.',
    keywords: 'pneumococcal pcv ppsv',
  },
  {
    href: '/faq/rabies',
    title: 'Rabies',
    subtitle: 'FAQ',
    emoji: '🐕',
    excerpt: 'Pre- and post-exposure rabies prophylaxis and product choice.',
    keywords: 'rabies pep pre post exposure',
  },
  {
    href: '/faq/rotavirus',
    title: 'Rotavirus',
    subtitle: 'FAQ',
    emoji: '🌀',
    excerpt: 'Oral rotavirus vaccine age windows and series completion.',
    keywords: 'rotavirus oral infant',
  },
  {
    href: '/faq/rsv',
    title: 'RSV',
    subtitle: 'FAQ',
    emoji: '🫁',
    excerpt: 'Respiratory syncytial virus prevention — products and eligibility.',
    keywords: 'rsv respiratory syncytial',
  },
  {
    href: '/faq/scheduling',
    title: 'Scheduling',
    subtitle: 'FAQ',
    emoji: '🗓️',
    excerpt: 'Intervals, catch-up schedules, and minimum ages between doses.',
    keywords: 'scheduling intervals catch up minimum age',
  },
  {
    href: '/faq/varicella',
    title: 'Varicella',
    subtitle: 'FAQ',
    emoji: '🔴',
    excerpt: 'Varicella vaccine schedules and post-exposure use.',
    keywords: 'varicella chickenpox',
  },
];

export const HCP_FAQ_TOPICS: HcpFaqItem[] = [...HCP_FAQ_UNSORTED].sort((a, b) =>
  a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }),
);

export const HCP_FAQ_COUNT = HCP_FAQ_TOPICS.length;
