export type HcpVaccinationBasicsTopic = {
  href: string;
  title: string;
  subtitle: string;
  emoji: string;
  excerpt: string;
};

export type HcpVaccinationBasicsGroup = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  accent: 'teal' | 'mint' | 'gold';
  items: HcpVaccinationBasicsTopic[];
};

export const HCP_VACCINATION_BASICS_HERO = {
  tag: 'HCP · Vaccination basics · Egypt',
  title: 'Vaccination Basics',
  subtitle: 'Foundational immunization knowledge for clinical practice',
  lead:
    'Vaccines are among the most effective tools in modern medicine. This hub introduces how they work, why they matter for public health, and the science behind products and safe use.',
} as const;

export const HCP_VACCINATION_BASICS_INTRO = [
  'Vaccines have helped prevent millions of deaths and protect communities from dangerous infectious diseases. Understanding how they work empowers healthcare professionals to counsel patients and make informed decisions.',
  'Vaccination is not only personal protection — it is central to public health and population safety. Explore the topics below for clear, practice-oriented introductions.',
] as const;

export const HCP_VACCINATION_BASICS_TOPICS = [
  'How vaccines work',
  'Herd immunity',
  'Types of vaccines',
  'Composition',
  'Administration',
  'Release & licensing',
] as const;

export const HCP_VACCINATION_BASICS_GROUPS: HcpVaccinationBasicsGroup[] = [
  {
    id: 'immunity',
    title: 'Understanding immunity',
    subtitle: 'Mechanisms and population-level protection',
    icon: '🛡️',
    accent: 'teal',
    items: [
      {
        href: '/hcp-how-vaccines-work',
        title: 'How do vaccines work?',
        subtitle: 'Immune response',
        emoji: '💉',
        excerpt:
          'Antigens, memory cells, and how active and passive immunization prime the body to fight infection.',
      },
      {
        href: '/hcp-herd-immunity',
        title: 'Herd immunity',
        subtitle: 'Community protection',
        emoji: '👥',
        excerpt:
          'When enough people are immunized, disease spread slows — protecting those who cannot be vaccinated.',
      },
    ],
  },
  {
    id: 'products',
    title: 'Vaccine products',
    subtitle: 'Platforms, ingredients, and classification',
    icon: '🧬',
    accent: 'mint',
    items: [
      {
        href: '/hcp-types-of-vaccines',
        title: 'Types of vaccines',
        subtitle: 'Live, inactivated & more',
        emoji: '📋',
        excerpt:
          'Live attenuated, inactivated, subunit, conjugate, mRNA, and other platforms — when each is used.',
      },
      {
        href: '/hcp-vaccine-composition',
        title: 'Vaccine composition',
        subtitle: 'What is in the vial',
        emoji: '🔬',
        excerpt:
          'Antigens, adjuvants, stabilizers, and preservatives — what they do and why they are included.',
      },
    ],
  },
  {
    id: 'practice',
    title: 'Clinical practice',
    subtitle: 'Giving vaccines safely and knowing the pipeline',
    icon: '⚕️',
    accent: 'gold',
    items: [
      {
        href: '/hcp-vaccine-administration',
        title: 'Vaccine administration',
        subtitle: 'Routes & technique',
        emoji: '✋',
        excerpt:
          'Routes, sites, needle sizes, storage handling, and documentation for safe immunization visits.',
      },
      {
        href: '/hcp-vaccine-release',
        title: 'Vaccine release',
        subtitle: 'Regulation & approval',
        emoji: '✅',
        excerpt:
          'How vaccines are evaluated, licensed, and monitored before and after they reach the clinic.',
      },
    ],
  },
];
