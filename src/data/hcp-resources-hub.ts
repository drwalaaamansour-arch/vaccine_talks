export type HcpResourceCategory = {
  href: string;
  title: string;
  subtitle: string;
  emoji: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  keywords: string;
};

export type HcpResourceGroup = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  accent: 'teal' | 'mint' | 'gold' | 'rose';
  items: HcpResourceCategory[];
};

export const HCP_RESOURCES_HERO = {
  tag: 'HCP · Professional resources · Egypt',
  title: 'Welcome, Healthcare Heroes',
  subtitle: 'Evidence-based immunization tools for frontline care',
  lead:
    'Thank you for protecting our communities. This hub brings together vaccination basics, Egyptian product guidance, special-population schedules, documents, updates, and FAQs — aligned with MOHP and trusted international references.',
} as const;

export const HCP_RESOURCES_TOPICS = [
  'Vaccination basics',
  'Routine immunizations in Egypt',
  'Vaccines and sera in Egypt',
  'Special population guidelines',
  'Downloadable inserts and schedules',
  'MOHP & international updates',
  'Frequently asked questions',
] as const;

export const HCP_RESOURCE_GROUPS: HcpResourceGroup[] = [
  {
    id: 'foundations',
    title: 'Foundations & documents',
    subtitle: 'Core knowledge and official references',
    icon: '📚',
    accent: 'teal',
    items: [
      {
        href: '/hcp-vaccination-basics',
        title: 'Vaccination Basics',
        subtitle: 'How vaccines work',
        emoji: '📚',
        image: '/back-basics-simplifying-business-procedures-600nw-2363218041.jpg.webp',
        imageAlt: 'Vaccination basics',
        excerpt:
          'How vaccines work, why they matter for public health, and clear answers on development, safety, and use in practice.',
        keywords: 'basics principles how work safety public health',
      },
      {
        href: '/hcp-documents',
        title: 'Documents',
        subtitle: 'Guidelines & position papers',
        emoji: '📄',
        image: '/doc.jpg',
        imageAlt: 'Clinical documents',
        excerpt:
          'National and international guidelines, position papers, and tools for evidence-based immunization — reviewed regularly.',
        keywords: 'documents guidelines papers references MOHP',
      },
    ],
  },
  {
    id: 'products',
    title: 'Products & special care',
    subtitle: 'Egyptian vaccines and high-risk groups',
    icon: '💉',
    accent: 'mint',
    items: [
      {
        href: '/hcp-vaccines-sera',
        title: 'Vaccines and Sera in Egypt',
        subtitle: 'Inserts & product guidance',
        emoji: '💉',
        image: '/vaccines.jpg',
        imageAlt: 'Vaccines and sera',
        excerpt:
          'Official inserts, schedules, and essential information on vaccines and sera available in Egypt.',
        keywords: 'vaccines sera egypt products inserts schedules',
      },
      {
        href: '/hcp-special-populations',
        title: 'Special Population Guidelines',
        subtitle: 'Tailored immunization',
        emoji: '🏥',
        image: '/special.jpg',
        imageAlt: 'Special populations',
        excerpt:
          'Guidance for immunocompromised patients, pregnancy, transplant, chemotherapy, and other groups needing tailored plans.',
        keywords: 'special populations immunocompromised pregnancy transplant chemotherapy',
      },
    ],
  },
  {
    id: 'updates',
    title: 'Updates & clinical Q&A',
    subtitle: 'Stay current and answer common questions',
    icon: '🌍',
    accent: 'gold',
    items: [
      {
        href: '/hcp-vaccine-updates',
        title: 'New Global Vaccine Updates',
        subtitle: 'Latest recommendations',
        emoji: '🌍',
        image: '/updates.jpg',
        imageAlt: 'Vaccine updates',
        excerpt:
          'Latest recommendations and disease updates in Egypt and worldwide — schedules, alerts, and policy changes.',
        keywords: 'updates global news schedules MOHP alerts',
      },
      {
        href: '/hcp-faq',
        title: 'Frequently Asked Questions',
        subtitle: 'By disease · ACIP-aligned',
        emoji: '❓',
        image: '/question-mark.jpg',
        imageAlt: 'FAQ',
        excerpt:
          'Practical answers organized by disease, adapted from ACIP guidance for vaccines used in Egypt.',
        keywords: 'faq questions answers ACIP disease',
      },
    ],
  },
];

export const HCP_RESOURCE_CATEGORIES: HcpResourceCategory[] = HCP_RESOURCE_GROUPS.flatMap(
  (g) => g.items,
);
