import type { HcpDocPdfItem } from '@/components/hcp-documents/HcpDocPdfPage';
import type { HcpGuideMetaKey } from '@/components/hcp-guide/types';

export type HcpDocPageConfig = {
  metaKey: HcpGuideMetaKey;
  title: string;
  lead: string;
  emoji: string;
  pdfs: HcpDocPdfItem[];
};

export const HCP_DOC_PAGES = {
  administrationScheduling: {
    metaKey: 'docAdministrationScheduling',
    title: 'Administration, scheduling & contraindications',
    lead: 'Timing, contraindications, injection technique, diluents, and management of vaccine reactions.',
    emoji: '🗓️',
    pdfs: [
      {
        id: 'timing-spacing',
        label: 'Timing & spacing',
        title: 'Timing and Spacing of Immunobiologics',
        src: '/admin/Timing%20and%20Spacing%20of%20Immunobiologics.pdf',
      },
      {
        id: 'contraindications-all-ages',
        label: 'Contraindications (all ages)',
        title: 'Guide to Contraindications and Precautions to Commonly Used Vaccines for All Ages',
        src: '/admin/Guide%20to%20Contraindications%20and%20Precautions%20to%20Commonly%20Used%20Vaccines%20for%20All%20Ages.pdf',
      },
      {
        id: 'contraindications-adults',
        label: 'Contraindications (adults)',
        title: 'Guide to Contraindications and Precautions to Commonly Used Vaccines in Adults',
        src: '/admin/Guide%20to%20Contraindications%20and%20Precautions%20to%20Commonly%20Used%20Vaccines%20in%20Adults.pdf',
      },
      {
        id: 'injectable-routes',
        label: 'Injectable routes',
        title: 'Injectable Routes',
        src: '/admin/Injectable%20routes%20.pdf',
      },
      {
        id: 'vaccines-diluents',
        label: 'Vaccines with diluents',
        title: 'Vaccines with Diluents',
        src: '/admin/Vaccines%20with%20Diluents.pdf',
      },
      {
        id: 'reactions-children',
        label: 'Reactions (children & teens)',
        title: 'Medical Management of Vaccine Reactions in Children and Teens',
        src: '/admin/Medical%20Management%20of%20Vaccine%20Reactions%20in%20Children%20and%20Teens.pdf',
      },
      {
        id: 'reactions-adults',
        label: 'Reactions (adults)',
        title: 'Medical Management of Vaccine Reactions in Adults',
        src: '/admin/Medical%20Management%20of%20Vaccine%20Reactions%20in%20Adults.pdf',
      },
      {
        id: 'fainting',
        label: 'Fainting',
        title: 'Fainting Related to Vaccination',
        src: '/admin/Fainting%20Related%20to%20Vaccination.pdf',
      },
      {
        id: 'needlestick',
        label: 'Needlestick injury',
        title: 'Needlestick Injury Management',
        src: '/admin/Needlestick%20Injury%20Management.pdf',
      },
      {
        id: 'latex',
        label: 'Latex packaging',
        title: 'Latex in Vaccine Packaging',
        src: '/admin/Latex%20in%20Vaccine%20Packaging%20.pdf',
      },
    ],
  },
  hepatitisA: {
    metaKey: 'docHepatitisA',
    title: 'Hepatitis A',
    lead: 'Fact sheets and information statements for hepatitis A immunization.',
    emoji: '🟡',
    pdfs: [
      {
        id: 'fact-sheet',
        label: 'Fact sheet',
        title: 'Hepatitis A Fact Sheet',
        src: '/hepatitis%20a/Hepatitis%20A%20Fact%20sheet%20.pdf',
      },
      {
        id: 'info-statement',
        label: 'Information statement',
        title: 'Hepatitis A Information Statement',
        src: '/hepatitis%20a/Hepatitis%20A%20information%20statement.pdf',
      },
    ],
  },
  hepatitisB: {
    metaKey: 'docHepatitisB',
    title: 'Hepatitis B',
    lead: 'Guidance for hepatitis B vaccination of healthcare personnel.',
    emoji: '🟠',
    pdfs: [
      {
        id: 'hcp',
        label: 'Healthcare personnel',
        title: 'Hepatitis B and Healthcare Personnel',
        src: '/hepatitis%20b/Hepatitis%20B%20and%20Healthcare%20Personnel.pdf',
      },
    ],
  },
  hpv: {
    metaKey: 'docHpv',
    title: 'HPV',
    lead: 'Safety, dosing intervals, and parent counseling resources for HPV vaccination.',
    emoji: '💗',
    pdfs: [
      {
        id: 'safety',
        label: 'Safety & effectiveness',
        title: 'HPV Vaccine Safety and Effectiveness',
        src: '/hpv/HPV%20Vaccine%20Safety%20and%20Effectiveness.pdf',
      },
      {
        id: 'alternate-dosing',
        label: 'Alternate dosing intervals',
        title: 'Human Papillomavirus Vaccine — Alternate Dosing Intervals',
        src: '/hpv/Human%20Papillomavirus%20(Types%206,%2011,%2016,%20and%2018)%20Vaccine,%20Recombinant-%20Alternate%20Dosing%20Intervals.pdf',
      },
      {
        id: 'talking-parents',
        label: 'Talking to parents',
        title: 'Talking to Parents about HPV Vaccine',
        src: '/hpv/Talking%20to%20Parents%20about%20HPV%20Vaccine.pdf',
      },
    ],
  },
  influenza: {
    metaKey: 'docInfluenza',
    title: 'Influenza',
    lead: 'Periodic benefit–risk evaluation for GCFLU Quadrivalent pre-filled syringe.',
    emoji: '🤧',
    pdfs: [
      {
        id: 'gcflu-pbrer',
        label: 'GCFLU PBRER',
        title: 'GCFLU Quadrivalent Periodic Benefit Risk Evaluation Report',
        src: '/flu/PERIODIC%20BENEFIT%20RISK%20EVALUATION%20REPORT%20FOR-%20GCFLU%20Quadrivalent%20Pre-filled%20Syringe%20inj..pdf',
      },
    ],
  },
  meningococcalAcwy: {
    metaKey: 'docMeningococcalAcwy',
    title: 'Meningococcal ACWY',
    lead: 'MMWR guidance and age- and risk-based MenACWY recommendations.',
    emoji: '🧫',
    pdfs: [
      {
        id: 'mmwr',
        label: 'MMWR',
        title: 'MMWR Meningococcal Vaccination',
        src: '/acwy/MMWR%20Meningococcal%20Vaccination.pdf',
      },
      {
        id: 'age-risk',
        label: 'Age & risk factor',
        title: 'Meningococcal ACWY Vaccine Recommendations by Age and Risk Factor',
        src: '/acwy/Meningococcal%20ACWY%20Vaccine%20Recommendations%20by%20Age%20and%20Risk%20Factor.pdf',
      },
    ],
  },
  meningococcalB: {
    metaKey: 'docMeningococcalB',
    title: 'Meningococcal B',
    lead: 'MMWR, regional epidemiology, and Bexsero product information.',
    emoji: '🧬',
    pdfs: [
      {
        id: 'mmwr',
        label: 'MMWR',
        title: 'MMWR Meningococcal Vaccination',
        src: '/men%20b/MMWR%20Meningococcal%20Vaccination.pdf',
      },
      {
        id: 'epidemiology',
        label: 'North Africa epidemiology',
        title: 'A Review of the Epidemiology of Invasive Meningococcal Disease and Vaccination Strategies in North Africa',
        src: '/men%20b/menb-epidemiology-north-africa.pdf',
      },
      {
        id: 'bexsero-ema',
        label: 'Bexsero (EMA)',
        title: 'Bexsero (EMA)',
        src: '/men%20b/Bexsero%20(EMA).pdf',
      },
      {
        id: 'bexsero-cmi',
        label: 'Bexsero CMI',
        title: 'Bexsero Consumer Medicine Information',
        src: '/men%20b/Bexsero%20Consumer%20Medicine%20Information.pdf',
      },
    ],
  },
  mmr: {
    metaKey: 'docMmr',
    title: 'MMR',
    lead: 'WHO market and mumps vaccine references for measles-containing vaccines.',
    emoji: '📊',
    pdfs: [
      {
        id: 'who-market',
        label: 'WHO market study',
        title: 'WHO Global Market Study — Measles-Containing Vaccines',
        src: '/mmr/WHO%20GLOBAL%20MARKET%20STUDY%20MEASLES-CONTAINING%20VACCINES.pdf',
      },
      {
        id: 'mumps-who',
        label: 'Mumps vaccines (WHO)',
        title: 'Mumps Vaccines (WHO)',
        src: '/mmr/Mumps%20vaccines%20(WHO).pdf',
      },
    ],
  },
  pneumococcal: {
    metaKey: 'docPneumococcal',
    title: 'Pneumococcal',
    lead: 'Guidance documents for pneumococcal vaccination in children, catch-up schedules, and adults.',
    emoji: '🦠',
    pdfs: [
      {
        id: 'children-teens',
        label: 'Children & teens',
        title: 'Administering Pneumococcal Vaccines to Children and Teens',
        src: '/pneumo/pneumococcal%202026.pdf',
      },
      {
        id: 'catch-up',
        label: 'Catch-up (4 mo–4 yr)',
        title: 'Catch-Up Guidance for Healthy¹ Children — 4 Months through 4 Years of Age',
        src: '/pneumo/pneumococcal%20catch%20up.pdf',
      },
      {
        id: 'timing-adults',
        label: 'Timing for adults',
        title: 'Pneumococcal Vaccine Timing for Adults',
        src: '/pneumo/Pneumococcal%20Vaccine%20Timing%20for%20Adults.pdf',
      },
      {
        id: 'adults',
        label: 'Administering to adults',
        title: 'Administering Pneumococcal Vaccines to Adults',
        src: '/pneumo/Administering%20Pneumococcal%20Vaccines%20to%20Adults.pdf',
      },
      {
        id: 'mmwr-adults',
        label: 'PCV15 / PCV20 (MMWR)',
        title: 'Use of 15-Valent and 20-Valent Pneumococcal Conjugate Vaccines Among Adults (MMWR)',
        src: '/pneumo/Use%20of%2015-Valent%20Pneumococcal%20Conjugate%20Vaccine%20and%2020-Valent%20Pneumococcal%20among%20adults%20(MMWR).pdf',
      },
      {
        id: 'cdc-2025',
        label: 'CDC update 2025',
        title: 'CDC recommendation for Pneumococcal vaccination update 2025',
        src: '/CDC%20recommendation%20for%20Pneumococcal%20vaccination%20update%202025.pdf',
      },
      {
        id: 'adult-respiratory',
        label: 'Adult respiratory vaccines',
        title: 'Adult vaccination against respiratory infections in Egypt: a review of expert opinions',
        src: '/pneumo/Adult_vaccination_against_respiratory_infections_i.pdf',
      },
    ],
  },
  pretermInfants: {
    metaKey: 'docPretermInfants',
    title: 'Preterm infants',
    lead: 'Consensus document and guidance for immunizing preterm and low-birth-weight infants.',
    emoji: '🍼',
    pdfs: [
      {
        id: 'consensus',
        label: 'Final preterm consensus',
        title: 'Final preterm consensus',
        src: '/Final%20preterm%20consensus.pdf',
      },
    ],
  },
  pretermConsensus: {
    metaKey: 'hcpDocumentsPreterm',
    title: 'Egyptian preterm consensus',
    lead: 'Egyptian expert consensus document for vaccination of preterm infants.',
    emoji: '🍼',
    pdfs: [
      {
        id: 'egyptian-consensus',
        label: 'Egyptian preterm consensus',
        title: 'Egyptian preterm consensus',
        src: '/Egyptian-preterm-consensus.pdf',
      },
    ],
  },
  rabies: {
    metaKey: 'docRabies',
    title: 'Rabies',
    lead: 'Egyptian protocol, MMWR guidance, and pre-exposure prophylaxis resources.',
    emoji: '🐕',
    pdfs: [
      {
        id: 'protocol-2025',
        label: 'Protocol Aug 2025',
        title: 'Rabies Protocol (August 2025) / بروتوكول السعار أغسطس ٢٠٢٥',
        src: `/rabies/${encodeURIComponent('بروتوكول السعار أغسطس ٢٠٢٥ .pdf')}`,
      },
      {
        id: 'mmwr-2008',
        label: 'MMWR 2008',
        title: 'MMWR Rabies 2008',
        src: '/rabies/MMWR%20Rabies%202008%20.pdf',
      },
      {
        id: 'pre-exposure',
        label: 'Pre-exposure prophylaxis',
        title: 'Pre-exposure Prophylaxis',
        src: '/rabies/Pre-exposure%20Prophylaxis.pdf',
      },
    ],
  },
  rotavirus: {
    metaKey: 'docRotavirus',
    title: 'Rotavirus',
    lead: 'WHO position, allergy considerations, Egyptian surveillance, and RotaTeq cross-protection.',
    emoji: '🌀',
    pdfs: [
      {
        id: 'who-position',
        label: 'WHO position paper',
        title: 'WHO Position Paper on Rotavirus',
        src: '/rota/WHO%20position%20paper.pdf',
      },
      {
        id: 'food-allergy',
        label: 'Food allergy',
        title: 'Rota Vaccine and Food Allergy',
        src: '/rota/Rota%20vaccine%20and%20food%20allergy.pdf',
      },
      {
        id: 'genotypes-egypt',
        label: 'Genotypes in Egypt',
        title: 'Rotavirus Genotypes Associated with Acute Diarrhea in Egyptian Infants',
        src: '/rota/Rotavirus%20Genotypes%20Associated%20with%20Acute%20Diarrhea%20in%20Egyptian%20Infants.pdf',
      },
      {
        id: 'surveillance-egypt',
        label: 'Surveillance Egypt',
        title:
          'Clinical and Environmental Surveillance of Rotavirus Common Genotypes Showed High Prevalence of Common P Genotypes in Egypt',
        src: '/rota/rota-surveillance-egypt.pdf',
      },
      {
        id: 'rotateq-cross',
        label: 'RotaTeq cross-protection',
        title: 'Cross protection of RotaTeq',
        src: '/cross%20protection%20of%20rotateq.pdf',
      },
    ],
  },
  rsv: {
    metaKey: 'docRsv',
    title: 'RSV',
    lead: 'Abrysvo product information (EMA).',
    emoji: '🫁',
    pdfs: [
      {
        id: 'abrysvo-ema',
        label: 'Abrysvo (EMA)',
        title: 'Abrysvo (EMA)',
        src: '/rsv/Abrysvo%20(EMA).pdf',
      },
    ],
  },
  shingles: {
    metaKey: 'docShingles',
    title: 'Shingles (HZ)',
    lead: 'Shingles overview and Shingrix factsheet for adult immunization.',
    emoji: '⚡',
    pdfs: [
      {
        id: 'shingles',
        label: 'Shingles',
        title: 'Shingles',
        src: '/hz/shingles.pdf',
      },
      {
        id: 'shingrix',
        label: 'Shingrix factsheet',
        title: 'Shingrix Factsheet',
        src: '/hz/Shingrix%20factsheet.pdf',
      },
    ],
  },
  storage: {
    metaKey: 'docStorage',
    title: 'Storage',
    lead: 'Cold-chain factsheets for temperature monitoring, stability, storage, and transport.',
    emoji: '❄️',
    pdfs: [
      {
        id: 'factsheet',
        label: 'Storage factsheet',
        title: 'Storage Factsheet',
        src: '/storage/storage%20factsheet.pdf',
      },
      {
        id: 'temperature',
        label: 'Temperature monitoring',
        title: 'Temperature Monitoring',
        src: '/storage/temperature%20monitoring.pdf',
      },
      {
        id: 'stability',
        label: 'Stability table',
        title: 'Vaccine Stability Table',
        src: '/storage/vaccine%20stability%20table.pdf',
      },
      {
        id: 'storage-temp',
        label: 'Storage temperature',
        title: 'Vaccine Storage Temperature',
        src: '/storage/vaccine%20storage%20temp..pdf',
      },
      {
        id: 'transport',
        label: 'Transportation',
        title: 'Vaccine Transportation',
        src: '/storage/vaccine%20transportation.pdf',
      },
    ],
  },
  varicella: {
    metaKey: 'docVaricella',
    title: 'Varicella',
    lead: 'Varicella factsheet and breakthrough varicella guidance.',
    emoji: '🔴',
    pdfs: [
      {
        id: 'factsheet',
        label: 'Factsheet',
        title: 'Varicella Factsheet',
        src: '/varicella/Varicella%20factsheet.pdf',
      },
      {
        id: 'breakthrough',
        label: 'Breakthrough varicella',
        title: 'Breakthrough Varicella',
        src: '/varicella/Breakthrough%20Varicella.pdf',
      },
    ],
  },
} as const satisfies Record<string, HcpDocPageConfig>;
