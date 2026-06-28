export type HcpVaccineUpdateIndexItem = {
  id: string;
  date: string;
  badge: string;
  title: string;
  summary: string;
  keywords: string;
  emoji: string;
};

export const HCP_VACCINE_UPDATES_HERO = {
  tag: 'HCP · Global vaccine updates · Egypt',
  title: 'Global Vaccine Updates',
  subtitle: 'Latest evidence, regulatory news, and schedule changes',
  lead:
    'Curated immunization updates from trusted sources — FDA approvals, ACIP guidance, published studies, and schedule releases relevant to clinical practice.',
} as const;

export const HCP_VACCINE_UPDATES_INTRO = [
  'Updates are listed newest first. Use search to find a topic, then open the full article below or jump directly from the index cards.',
  'PDFs and embedded documents are included where available for download and reference.',
] as const;

export const HCP_VACCINE_UPDATE_INDEX: HcpVaccineUpdateIndexItem[] = [
  {
    id: 'pcv21-mflusiva-jun-2026',
    date: 'June 17, 2026',
    badge: 'FDA Update',
    title:
      'FDA expands indication for 21-valent pneumococcal conjugate vaccine (PCV21, Capvaxive, Merck) to include children at increased risk.',
    summary:
      'PCV21 (Capvaxive) now licensed for children and adolescents age 2–17 at increased IPD risk after a primary pediatric PCV series.',
    keywords:
      'pcv21 capvaxive pneumococcal merck fda children ppsv23 pcv15 pcv20 ipd',
    emoji: '🇺🇸',
  },
  {
    id: 'acog-maternal-2026',
    date: 'June 10, 2026',
    badge: 'Guidelines',
    title:
      'ACOG releases 2026 Maternal Immunization Schedule, endorsed by 13 medical, nursing, and pharmacy organizations',
    summary:
      'Routine pregnancy vaccines (influenza, COVID-19, Tdap, RSV) plus seven additional vaccines when indicated — aligned with CDC 2025 schedule with noted COVID-19 guidance differences.',
    keywords:
      'acog maternal pregnancy immunization schedule 2026 influenza covid tdap rsv pneumococcal meningococcal hepa hepb hpv mmr varicella lactating postpartum',
    emoji: '🤰',
  },
  {
    id: 'autism-evidence',
    date: 'April 2026',
    badge: 'Evidence Update',
    title:
      'Immunize.org and the Autism Science Foundation updated their Evidence Shows Vaccines Unrelated to Autism resource',
    summary:
      'Extensive research confirms vaccines are unrelated to autism — MMR, thimerosal, and antigen load reviewed with supporting PDFs.',
    keywords: 'autism mmr thimerosal immunize evidence vaccines unrelated',
    emoji: '🧠',
  },
  {
    id: 'pcv13-ibd',
    date: 'March 30, 2026',
    badge: 'Study',
    title:
      'PCV13 and disease activity in children and adolescents with inflammatory bowel disease (2-year prospective study)',
    summary:
      'Expert Review of Vaccines: a single PCV13 dose did not increase IBD activity over 24 months in pediatric patients.',
    keywords: 'pcv13 pneumococcal ibd inflammatory bowel disease pediatric study',
    emoji: '📄',
  },
  {
    id: 'arexvy-fda',
    date: 'March 13, 2026',
    badge: 'FDA Update',
    title: "FDA expands Arexvy license to high-risk adults age 18 to 49 years",
    summary:
      'GSK RSV vaccine indication widened; three RSV vaccines now licensed for adults 60+ and high-risk adults 18–59.',
    keywords: 'arexvy rsv fda gsk abrysvo mresvia respiratory',
    emoji: '🇺🇸',
  },
  {
    id: 'aafp-2026',
    date: 'March 1, 2026',
    badge: 'Guidelines',
    title: 'AAFP releases 2026 recommended immunization schedules for children and adults',
    summary:
      'American Academy of Family Physicians schedules align with AAP childhood guidance and updated adult recommendations.',
    keywords: 'aafp schedule 2026 child adolescent adult immunization',
    emoji: '📅',
  },
  {
    id: 'pentavalent-menacwy',
    date: 'January 8, 2026',
    badge: 'New Recommendation',
    title: 'GSK pentavalent meningococcal vaccine (Penmenvy) endorsed by ACIP',
    summary:
      'MenACWY-CRM/MenB-4C for ages ≥10 when both MenACWY and MenB are indicated — MMWR report and full PDF below.',
    keywords: 'meningococcal pentavalent penmenvy acip gsk menb menacwy mmwr',
    emoji: '💉',
  },
];

export const HCP_VACCINE_UPDATES_COUNT = HCP_VACCINE_UPDATE_INDEX.length;
