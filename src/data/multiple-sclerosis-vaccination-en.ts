import type { MsSection } from '@/data/multiple-sclerosis-vaccination-copy';
import { MS_SECTION_IDS } from '@/data/multiple-sclerosis-vaccination-copy';

export const MS_EN_SECTIONS: MsSection[] = [
  {
    id: MS_SECTION_IDS.en.introduction,
    title: 'Introduction',
    icon: '📋',
    paragraphs: [
      {
        parts: [
          {
            text: 'Managing multiple sclerosis (MS) means balancing neurological health with the body\'s ability to fight everyday infections. Patients on disease-modifying therapy (DMT) or immunosuppressants often ask: ',
          },
          {
            text: 'Is vaccination safe? Will my medication make the vaccine fail? Do I need to delay treatment?',
            em: true,
          },
        ],
      },
      {
        parts: [
          { text: 'This guide synthesizes recommendations from the ' },
          { text: '2023 ECTRIMS/EAN consensus guidelines', bold: true },
          { text: ', the ' },
          { text: 'National Multiple Sclerosis Society (NMSS)', bold: true },
          { text: ', the ' },
          { text: 'U.S. Department of Veterans Affairs (VA) MS Centers of Excellence', bold: true },
          { text: ', and peer-reviewed clinical data — organized for quick use in clinic.' },
        ],
      },
    ],
  },
  {
    id: MS_SECTION_IDS.en.coreRules,
    title: 'The core safety rules of MS vaccinations',
    icon: '🛡️',
    variant: 'takeaway',
    paragraphs: [
      'Before individual drug timing, four universal rules apply to every patient with MS:',
    ],
    listClassName: 'hcp-cancer-takeaway-list',
    listItems: [
      {
        parts: [
          { text: 'Inactivated vaccines are entirely safe.', bold: true },
          {
            text: ' Non-live vaccines (inactivated, recombinant, subunit, or mRNA) do not trigger MS onset and do not cause disease relapses.',
          },
        ],
      },
      {
        parts: [
          { text: 'Blunted response ≠ zero response.', bold: true },
          {
            text: ' High-potency treatments may reduce antibody levels, but a reduced response still offers meaningful protection. Authorities strongly recommend vaccination anyway.',
          },
        ],
      },
      {
        parts: [
          { text: 'The relapse delay rule.', bold: true },
          {
            text: ' Never vaccinate during an active MS relapse. If a flare occurs, delay all vaccines for ',
          },
          { text: '4–6 weeks', bold: true },
          { text: ' from relapse onset, or until symptoms have stabilized.' },
        ],
      },
      {
        parts: [
          { text: 'The household FluMist warning.', bold: true },
          {
            text: ' Household contacts should avoid live-attenuated nasal influenza vaccines (FluMist). Live virus can be shed for up to 1 week, posing accidental exposure risk if the patient is highly immunocompromised. Contacts should receive standard inactivated influenza vaccines instead.',
          },
        ],
      },
    ],
  },
  {
    id: MS_SECTION_IDS.en.nonDepleting,
    title: '1. Non-depleting therapies',
    icon: '💊',
    drugBlock: {
      title: 'Beta-interferons, teriflunomide, DMF, natalizumab',
      includes:
        'Beta-interferons (Avonex, Rebif, Plegridy), teriflunomide (Aubagio), dimethyl fumarate (DMF / Tecfidera), and natalizumab (Tysabri)',
      nonLive:
        'Safe at any time. No need to pause, skip, or alter dosing. Patients typically mount a robust, normal immune response.',
      live: {
        parts: [
          { text: 'Generally ' },
          { text: 'contraindicated', bold: true },
          { text: ' while on treatment. If mandatory, administer at least ' },
          { text: '4–6 weeks before', bold: true },
          { text: ' the first dose when starting therapy.' },
        ],
      },
    },
  },
  {
    id: MS_SECTION_IDS.en.antiCd20Infusion,
    title: '2. Anti-CD20 & anti-CD19 infusions',
    icon: '💉',
    drugBlock: {
      title: 'Ocrelizumab, ublituximab, rituximab',
      includes: 'Ocrelizumab (Ocrevus), ublituximab (Briumvi), and rituximab',
      nonLive: {
        parts: [
          { text: 'Strictly timed windows.', bold: true },
          { text: ' If already on therapy: vaccinate ' },
          { text: '3–6 months after', bold: true },
          { text: ' the last infusion and at least ' },
          { text: '4–6 weeks before', bold: true },
          { text: ' the next infusion. New patients: complete all non-live vaccines ' },
          { text: '2–4 weeks before', bold: true },
          { text: ' starting the drug.' },
        ],
      },
      live: {
        parts: [
          { text: 'Strictly contraindicated', bold: true },
          { text: ' while on therapy. New patients: complete live vaccines at least ' },
          { text: '6 weeks before', bold: true },
          { text: ' the first infusion. If already treated: wait ' },
          { text: '>18 months', bold: true },
          { text: ' (or until B-cell repopulation is confirmed on blood tests) before live vaccination.' },
        ],
      },
    },
  },
  {
    id: MS_SECTION_IDS.en.antiCd20Sc,
    title: '3. Anti-CD20 subcutaneous injections',
    icon: '💉',
    drugBlock: {
      title: 'Ofatumumab (Kesimpta)',
      includes: 'Ofatumumab (Kesimpta) — monthly self-injection with B-cell depletion',
      nonLive: {
        parts: [
          { text: 'Prefer completing all vaccinations before initiation. If already on therapy: vaccinate ' },
          { text: '4 weeks before', bold: true },
          { text: ' the next scheduled monthly dose. New patients: complete non-live vaccines ' },
          { text: '2–4 weeks before', bold: true },
          { text: ' starting.' },
        ],
      },
      live: {
        parts: [
          { text: 'Strictly contraindicated', bold: true },
          { text: ' while on treatment. If required before therapy, complete live vaccination at least ' },
          { text: '4 weeks', bold: true },
          { text: ' before the first dose.' },
        ],
      },
    },
  },
  {
    id: MS_SECTION_IDS.en.s1pModulators,
    title: '4. S1P modulators',
    icon: '💊',
    drugBlock: {
      title: 'Fingolimod, ponesimod, ozanimod',
      includes: 'Fingolimod (Gilenya), ponesimod (Ponvory), and ozanimod (Zeposia)',
      nonLive: {
        parts: [
          { text: 'Safe during treatment, but expect a ' },
          { text: 'blunted antibody response', bold: true },
          { text: '. VA guidelines and clinical data warn: ' },
          { text: 'do not stop or pause', bold: true },
          { text: ' the S1P modulator to improve vaccine response — this can trigger severe MS rebound relapse. New patients: complete vaccines ' },
          { text: '2–4 weeks before', bold: true },
          { text: ' starting.' },
        ],
      },
      live: {
        parts: [
          { text: 'Strictly contraindicated', bold: true },
          { text: ' while on the drug. New patients: complete live vaccines at least ' },
          { text: '4 weeks before', bold: true },
          { text: ' starting. After stopping, wait ' },
          { text: '1 month', bold: true },
          { text: ' for drug clearance before live vaccination.' },
        ],
      },
    },
  },
  {
    id: MS_SECTION_IDS.en.cladribine,
    title: '5. Cladribine (Mavenclad)',
    icon: '💊',
    drugBlock: {
      title: 'Short periodic oral courses',
      includes:
        'Cladribine (Mavenclad) — oral treatment in short courses that temporarily reduces T and B lymphocytes',
      nonLive: {
        parts: [
          { text: 'May be given any time after ' },
          { text: '4 weeks', bold: true },
          { text: ' from completion of the last treatment course. If vaccination is needed immediately before a new course, delay starting the next Cladribine block by at least ' },
          { text: '2 weeks', bold: true },
          { text: ' after the shot. Treatment-naïve patients: finish non-live vaccines ' },
          { text: '2–4 weeks before', bold: true },
          { text: ' Day 1.' },
        ],
      },
      live: {
        parts: [
          { text: 'Strictly contraindicated', bold: true },
          { text: ' while on therapy. New patients: complete live vaccines at least ' },
          { text: '4 weeks before', bold: true },
          { text: ' beginning Cladribine cycles.' },
        ],
      },
    },
  },
  {
    id: MS_SECTION_IDS.en.alemtuzumab,
    title: '6. Alemtuzumab (Lemtrada)',
    icon: '💉',
    drugBlock: {
      title: 'Intensive infusion therapy',
      includes:
        'Alemtuzumab (Lemtrada) — two annual infusion courses that fundamentally reset the immune system',
      nonLive: {
        parts: [
          { text: 'Strictly timed windows.', bold: true },
          { text: ' Between annual courses: schedule non-live vaccinations approximately ' },
          { text: '3 months before', bold: true },
          { text: ' the second scheduled course. New patients: complete non-live vaccines ' },
          { text: '2–4 weeks before', bold: true },
          { text: ' starting treatment.' },
        ],
      },
      live: {
        parts: [
          { text: 'Strictly contraindicated.', bold: true },
          { text: ' New patients: live vaccines at least ' },
          { text: '6 weeks before', bold: true },
          { text: ' the first infusion. After completing treatment courses: wait ' },
          { text: '>3 months', bold: true },
          { text: ' after stopping before live vaccination can be considered.' },
        ],
      },
    },
  },
  {
    id: MS_SECTION_IDS.en.steroids,
    title: 'Timing vaccines after steroid treatments',
    icon: '⏱️',
    paragraphs: [
      'Systemic high-dose corticosteroids (e.g. IV methylprednisolone / Solu-Medrol, or high-dose oral prednisone) are standard for acute MS relapses. Because steroids temporarily suppress immune response, adjust vaccine timing as follows:',
    ],
    listItems: [
      {
        parts: [
          { text: 'Following a relapse pulse or high-dose course:', bold: true },
          { text: ' If short-term pulse high-dose steroids were used for a relapse, ' },
          { text: 'or', em: true },
          { text: ' prednisone ≥20 mg/day for >14 days, delay all vaccines for ' },
          { text: '1 month', bold: true },
          { text: ' after stopping steroids.' },
        ],
      },
      {
        parts: [
          { text: 'Short-term, low-dose courses:', bold: true },
          {
            text: ' If steroids were <20 mg/day and lasted <14 days, vaccinate immediately after finishing the course.',
          },
        ],
      },
      {
        parts: [
          { text: 'Low-dose maintenance:', bold: true },
          {
            text: ' If maintenance prednisone stays <20 mg/day, live vaccines can be given without pausing therapy.',
          },
        ],
      },
    ],
  },
  {
    id: MS_SECTION_IDS.en.priorityVaccines,
    title: 'High-priority vaccines for people with MS',
    icon: '⭐',
    paragraphs: [
      {
        parts: [
          { text: 'Per NMSS, ECTRIMS, and VA guidance, prioritize these ' },
          { text: 'non-live', bold: true },
          { text: ' immunizations to prevent severe viral complications:' },
        ],
      },
    ],
    listItems: [
      {
        parts: [
          { text: 'Annual influenza & COVID-19 boosters:', bold: true },
          {
            text: ' Strongly recommended for all patients. May be co-administered at the same visit.',
          },
        ],
      },
      {
        parts: [
          { text: 'Pneumococcal (pneumonia):', bold: true },
          {
            text: ' Recommended for all patients starting or on immunosuppressive DMTs. NMSS highlights this especially for compromised respiratory function — including full-time wheelchair users or bed-bound patients.',
          },
        ],
      },
      {
        parts: [
          { text: 'RSV:', bold: true },
          {
            text: ' Recommended for adults ≥75 years, and adults 60–74 who are immunocompromised due to MS therapies.',
          },
        ],
      },
      {
        parts: [
          { text: 'HPV (Gardasil-9):', bold: true },
          {
            text: ' Recommended up to age 45. Ideally complete before starting a DMT, as immunosuppression can impair clearance of chronic HPV infection.',
          },
        ],
      },
    ],
  },
  {
    id: MS_SECTION_IDS.en.vzvShingles,
    title: 'The strict VZV & shingles safety protocol',
    icon: '⚡',
    paragraphs: [
      {
        parts: [
          { text: 'Before starting ' },
          { text: 'S1P modulators', bold: true },
          { text: ' or ' },
          { text: 'Cladribine', bold: true },
          { text: ', run a ' },
          { text: 'VZV IgG antibody test', bold: true },
          { text: ' before prescribing:' },
        ],
      },
      {
        parts: [
          { text: 'Critical note:', bold: true },
          { text: ' Shingrix is non-live and highly effective against shingles, but it ' },
          { text: 'cannot substitute', bold: true },
          { text: ' for primary Varicella vaccination when serology is negative.' },
        ],
      },
    ],
    vzvScenarios: [
      {
        title: 'Scenario A — VZV seronegative (−)',
        items: [
          'No natural chickenpox immunity — high risk of dangerous viral replication on immunosuppressants.',
          {
            parts: [
              { text: 'Administer the ' },
              { text: 'Varicella (chickenpox) live vaccine', bold: true },
              { text: ': 2 doses, 4 weeks apart.' },
            ],
          },
          {
            parts: [
              { text: 'Delay starting MS medication for ' },
              { text: '4 weeks', bold: true },
              { text: ' after the final Varicella dose.' },
            ],
          },
          {
            parts: [
              { text: 'Wait at least ' },
              { text: '8 weeks', bold: true },
              { text: ' after Varicella vaccination before giving Shingrix.' },
            ],
          },
        ],
      },
      {
        title: 'Scenario B — VZV seropositive (+)',
        items: [
          'Existing immunity — cleared to start MS medication.',
          {
            parts: [
              { text: 'If age ≥19 and on immunosuppressive DMT: strongly encourage ' },
              { text: 'Shingrix', bold: true },
              { text: ' (non-live recombinant shingles vaccine; 2 doses 2–6 months apart).' },
            ],
          },
        ],
      },
    ],
  },
];

export const MS_EN_LABELS = {
  includes: 'Includes:',
  nonLive: 'Non-live vaccines:',
  live: 'Live vaccines:',
};
