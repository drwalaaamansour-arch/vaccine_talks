import type { NonHcpQuestion } from '@/data/non-hcp-general-questions';
import { generalQuestions } from '@/data/non-hcp-general-questions';
import { hepatitisAQuestions } from '@/data/non-hcp-hepatitis-a-questions';
import { hepatitisBQuestions } from '@/data/non-hcp-hepatitis-b-questions';
import { hepatitisABQuestions } from '@/data/non-hcp-hepatitis-ab-questions';
import { hibQuestions } from '@/data/non-hcp-hib-questions';
import { hpvQuestions } from '@/data/non-hcp-hpv-questions';
import { influenzaQuestions } from '@/data/non-hcp-influenza-questions';
import { mmrQuestions } from '@/data/non-hcp-mmr-questions';
import { menAcwyQuestions } from '@/data/non-hcp-men-acwy-questions';
import { menBQuestions } from '@/data/non-hcp-men-b-questions';
import { pneumococcalQuestions } from '@/data/non-hcp-pneumococcal-questions';
import { rabiesQuestions } from '@/data/non-hcp-rabies-questions';
import { rotaQuestions } from '@/data/non-hcp-rota-questions';
import { rsvQuestions } from '@/data/non-hcp-rsv-questions';
import { varicellaQuestions } from '@/data/non-hcp-varicella-questions';
import { herpesZosterQuestions } from '@/data/non-hcp-herpes-zoster-questions';
import type { ArticleMetaKey } from '@/lib/article-meta';

export type NonHcpCommonQuestionsTopicConfig = {
  metaKey: ArticleMetaKey;
  emoji: string;
  titleAr: string;
  titleEn: string;
  leadAr?: string;
  leadEn?: string;
  questions: NonHcpQuestion[];
};

export const NCQ_TOPICS = {
  generalQuestions: {
    metaKey: 'nonHcpCqGeneral',
    emoji: '💬',
    titleAr: 'أسئلة عامة',
    titleEn: 'General Questions',
    questions: generalQuestions,
  },
  hepatitisA: {
    metaKey: 'nonHcpCqHepA',
    emoji: '🟡',
    titleAr: 'التهاب الكبد الوبائي A (فيروس الكبد A)',
    titleEn: 'Hepatitis A (HAV)',
    questions: hepatitisAQuestions,
  },
  hepatitisB: {
    metaKey: 'nonHcpCqHepB',
    emoji: '🩸',
    titleAr: 'التهاب الكبد الوبائي B (فيروس الكبد B)',
    titleEn: 'Hepatitis B (HBV)',
    questions: hepatitisBQuestions,
  },
  hepatitisAB: {
    metaKey: 'nonHcpCqHepAb',
    emoji: '💉',
    titleAr: 'التطعيم المشترك لكبد A+B',
    titleEn: 'Hepatitis A+B (Combined)',
    questions: hepatitisABQuestions,
  },
  hib: {
    metaKey: 'nonHcpCqHib',
    emoji: '👶',
    titleAr: 'الإنفلونزا البكتيري (HIB)',
    titleEn: 'Haemophilus Influenzae Type B (HIB)',
    questions: hibQuestions,
  },
  hpv: {
    metaKey: 'nonHcpCqHpv',
    emoji: '🛡️',
    titleAr: 'فيروس الورم الحليمي البشري (HPV)',
    titleEn: 'Human Papillomavirus (HPV)',
    leadAr: 'أسئلة وأجوبة عن فيروس HPV والتطعيم في مصر — بالعامية المصرية.',
    leadEn: 'Q&A on HPV and vaccination in Egypt — in clear everyday language.',
    questions: hpvQuestions,
  },
  influenza: {
    metaKey: 'nonHcpCqInfluenza',
    emoji: '🤧',
    titleAr: 'الإنفلونزا الفيروسية',
    titleEn: 'Influenza (Flu)',
    questions: influenzaQuestions,
  },
  mmr: {
    metaKey: 'nonHcpCqMmr',
    emoji: '📋',
    titleAr: 'الثلاثي الفيروسي (MMR)',
    titleEn: 'MMR (Measles, Mumps, Rubella)',
    questions: mmrQuestions,
  },
  menAcwy: {
    metaKey: 'nonHcpCqMenAcwy',
    emoji: '🧠',
    titleAr: 'تطعيم MenACWY (الحمى الشوكية ACWY)',
    titleEn: 'MenACWY (Meningococcal ACWY)',
    questions: menAcwyQuestions,
  },
  menB: {
    metaKey: 'nonHcpCqMenB',
    emoji: '🛡️',
    titleAr: 'تطعيم MenB (الحمى الشوكية النمط B)',
    titleEn: 'MenB (Meningococcal B)',
    questions: menBQuestions,
  },
  pneumococcal: {
    metaKey: 'nonHcpCqPneumococcal',
    emoji: '🫁',
    titleAr: 'تطعيم المكورات الرئوية',
    titleEn: 'Pneumococcal (PCV / PPSV)',
    questions: pneumococcalQuestions,
  },
  rabies: {
    metaKey: 'nonHcpCqRabies',
    emoji: '🐕',
    titleAr: 'تطعيم السعار (داء الكلب)',
    titleEn: 'Rabies',
    questions: rabiesQuestions,
  },
  rota: {
    metaKey: 'nonHcpCqRota',
    emoji: '💊',
    titleAr: 'تطعيم الروتا (Rotavirus)',
    titleEn: 'Rotavirus (Rota)',
    questions: rotaQuestions,
  },
  rsv: {
    metaKey: 'nonHcpCqRsv',
    emoji: '🫁',
    titleAr: 'تطعيم RSV (الفيروس التنفسي المخلوي)',
    titleEn: 'RSV (Respiratory Syncytial Virus)',
    questions: rsvQuestions,
  },
  varicella: {
    metaKey: 'nonHcpCqVaricella',
    emoji: '🔴',
    titleAr: 'تطعيم الجديري المائي (Varicella)',
    titleEn: 'Varicella (Chickenpox)',
    questions: varicellaQuestions,
  },
  herpesZoster: {
    metaKey: 'nonHcpCqHerpesZoster',
    emoji: '🟠',
    titleAr: 'تطعيم الحزام الناري (Herpes Zoster)',
    titleEn: 'Herpes Zoster (Shingles)',
    questions: herpesZosterQuestions,
  },
} as const satisfies Record<string, NonHcpCommonQuestionsTopicConfig>;

export type NcqTopicId = keyof typeof NCQ_TOPICS;
