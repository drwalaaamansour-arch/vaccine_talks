import type { HcpGuideHubGroup } from '@/components/hcp-guide/types';

export const HCP_SPECIAL_POPULATIONS_INTRO = [
  'Evidence-based vaccination guidance for healthcare professionals caring for patients whose immune status, treatment, or clinical context requires tailored schedules.',
  'Each topic covers timing, vaccine type, safety, and links to authoritative references and downloadable resources where available.',
] as const;

export const HCP_SPECIAL_POPULATIONS_GROUPS: HcpGuideHubGroup[] = [
  {
    title: 'Altered immunocompetence',
    items: [
      {
        href: '/hcp-special-populations/altered-immunocompetence/general-principles',
        label: 'General principles',
        emoji: '🛡️',
      },
      {
        href: '/hcp-special-populations/altered-immunocompetence/vaccination-of-contacts',
        label: 'Vaccination of contacts with persons with altered immunocompetence',
        emoji: '🤝',
      },
      {
        href: '/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia',
        label: 'Anatomic or functional asplenia',
        emoji: '⚕️',
      },
      {
        href: '/hcp-special-populations/altered-immunocompetence/corticosteroids-and-immunosuppressive-drugs',
        label: 'Corticosteroids & immunosuppressive drugs',
        emoji: '💊',
      },
    ],
  },
  {
    title: 'Oncology & transplant',
    items: [
      {
        href: '/hcp-special-populations/vaccination-in-patients-with-cancer',
        label: 'Vaccination in patients with cancer',
        emoji: '🎗️',
      },
      {
        href: '/hcp-special-populations/haematopoietic-stem-cell-transplant-recipients',
        label: 'Haematopoietic stem cell transplant recipients',
        emoji: '🧬',
      },
      {
        href: '/hcp-special-populations/expert-consensus-pediatric-oncology-re-immunization-egypt',
        label: 'Pediatric oncology expert consensus (Egypt)',
        emoji: '👧',
      },
    ],
  },
  {
    title: 'Pregnancy, infants & breastfeeding',
    items: [
      { href: '/hcp-special-populations/pregnancy-breastfeeding', label: 'Pregnancy', emoji: '🤱' },
      { href: '/hcp-special-populations/breastfeeding', label: 'Women who are breastfeeding', emoji: '🍼' },
      { href: '/hcp-special-populations/preterm-infants', label: 'Preterm infants', emoji: '👶' },
    ],
  },
  {
    title: 'Procedures & blood products',
    items: [
      {
        href: '/hcp-special-populations/anaesthesia-surgery',
        label: 'Before or after anaesthesia or surgery',
        emoji: '🏥',
      },
      {
        href: '/hcp-special-populations/immunoglobulin-blood-products',
        label: 'Immunoglobulin & blood products',
        emoji: '💉',
      },
      { href: '/hcp-special-populations/cochlear-implants', label: 'Cochlear implants', emoji: '🦻' },
    ],
  },
  {
    title: 'More topics',
    items: [
      { href: '/hcp-special-populations/occupational-risk', label: 'Occupational risk', emoji: '👷' },
      {
        href: '/hcp-special-populations/international-travellers',
        label: 'International travellers',
        emoji: '✈️',
      },
      {
        href: '/hcp-special-populations/vaccinations-with-multiple-sclerosis',
        label: 'Vaccinations with Multiple Sclerosis',
        emoji: '🧠',
      },
    ],
  },
];
