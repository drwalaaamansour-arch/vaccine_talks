export type HcpDocumentItem = {
  href: string;
  title: string;
  subtitle: string;
  emoji: string;
  excerpt: string;
  keywords: string;
};

export const HCP_DOCUMENTS_HERO = {
  tag: 'HCP · Clinical documents · Egypt',
  title: 'Documents',
  subtitle: 'Guidelines, schedules, and vaccine-specific references',
  lead:
    'Downloadable and on-site clinical documents for storage, administration, contraindications, and disease-specific immunization — aligned with Egyptian practice and trusted references.',
} as const;

export const HCP_DOCUMENTS_INTRO = [
  'This library brings together practical documents used in day-to-day immunization: cold chain, scheduling, and vaccine- or population-specific guidance.',
  'All documents are listed alphabetically below. Select a topic to open the full document page.',
] as const;

const HCP_DOCUMENTS_UNSORTED: HcpDocumentItem[] = [
  {
    href: '/doc/administration-scheduling-contraindications',
    title: 'Administration, scheduling & contraindications',
    subtitle: 'Visit workflow',
    emoji: '🗓️',
    excerpt:
      'Scheduling intervals, valid contraindications and precautions, and safe administration practices.',
    keywords: 'administration scheduling contraindications precautions intervals',
  },
  {
    href: '/doc/hepatitis-a',
    title: 'Hepatitis A',
    subtitle: 'Document',
    emoji: '🟡',
    excerpt: 'Hepatitis A immunization guidance, schedules, and key clinical notes.',
    keywords: 'hepatitis a hep a',
  },
  {
    href: '/doc/hepatitis-b',
    title: 'Hepatitis B',
    subtitle: 'Document',
    emoji: '🟠',
    excerpt: 'Birth dose, catch-up, and high-risk hepatitis B vaccination guidance.',
    keywords: 'hepatitis b hep b birth dose',
  },
  {
    href: '/doc/hpv',
    title: 'HPV',
    subtitle: 'Document',
    emoji: '💗',
    excerpt: 'Human papillomavirus vaccine schedules, age groups, and counseling points.',
    keywords: 'hpv papillomavirus cervical',
  },
  {
    href: '/doc/influenza',
    title: 'Influenza',
    subtitle: 'Document',
    emoji: '🤧',
    excerpt: 'Seasonal influenza vaccine timing, groups, and annual revaccination.',
    keywords: 'influenza flu seasonal',
  },
  {
    href: '/doc/meningococcal-acwy',
    title: 'Meningococcal ACWY',
    subtitle: 'Document',
    emoji: '🧫',
    excerpt: 'MenACWY schedules for adolescents, travelers, and outbreak settings.',
    keywords: 'meningococcal acwy mena quad',
  },
  {
    href: '/doc/meningococcal-b',
    title: 'Meningococcal B',
    subtitle: 'Document',
    emoji: '🧬',
    excerpt: 'MenB vaccination for infants, adolescents, and increased-risk groups.',
    keywords: 'meningococcal b menb',
  },
  {
    href: '/doc/mmr',
    title: 'MMR',
    subtitle: 'Document',
    emoji: '📊',
    excerpt: 'Measles, mumps, and rubella schedules, intervals, and outbreak considerations.',
    keywords: 'mmr measles mumps rubella',
  },
  {
    href: '/doc/pneumococcal',
    title: 'Pneumococcal',
    subtitle: 'Document',
    emoji: '🦠',
    excerpt: 'Pneumococcal conjugate and polysaccharide vaccines — schedules by age and risk.',
    keywords: 'pneumococcal pcv ppsv strep',
  },
  {
    href: '/hcp-documents/preterm',
    title: 'Preterm infants',
    subtitle: 'Document hub',
    emoji: '🍼',
    excerpt:
      'Dedicated documents and references for immunizing preterm and low-birth-weight infants.',
    keywords: 'preterm premature infant neonatal',
  },
  {
    href: '/doc/rabies',
    title: 'Rabies',
    subtitle: 'Document',
    emoji: '🐕',
    excerpt: 'Pre- and post-exposure rabies prophylaxis, wound care, and product choice.',
    keywords: 'rabies pep pre exposure post exposure',
  },
  {
    href: '/doc/rotavirus',
    title: 'Rotavirus',
    subtitle: 'Document',
    emoji: '🌀',
    excerpt: 'Oral rotavirus vaccine age windows, series completion, and precautions.',
    keywords: 'rotavirus oral infant',
  },
  {
    href: '/doc/rsv',
    title: 'RSV',
    subtitle: 'Document',
    emoji: '🫁',
    excerpt: 'Respiratory syncytial virus prevention — products, eligibility, and timing.',
    keywords: 'rsv respiratory syncytial',
  },
  {
    href: '/doc/shingles',
    title: 'Shingles (HZ)',
    subtitle: 'Document',
    emoji: '⚡',
    excerpt: 'Herpes zoster (shingles) vaccine recommendations for adults and immunocompromised patients.',
    keywords: 'shingles herpes zoster hz',
  },
  {
    href: '/doc/storage',
    title: 'Storage',
    subtitle: 'Cold chain',
    emoji: '❄️',
    excerpt: 'Temperature monitoring, fridge organization, and handling vaccines from delivery to administration.',
    keywords: 'storage cold chain fridge temperature',
  },
  {
    href: '/doc/varicella',
    title: 'Varicella',
    subtitle: 'Document',
    emoji: '🔴',
    excerpt: 'Varicella vaccination schedules, post-exposure use, and clinical notes.',
    keywords: 'varicella chickenpox',
  },
];

export const HCP_DOCUMENTS: HcpDocumentItem[] = [...HCP_DOCUMENTS_UNSORTED].sort((a, b) =>
  a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }),
);

export const HCP_DOCUMENTS_COUNT = HCP_DOCUMENTS.length;
