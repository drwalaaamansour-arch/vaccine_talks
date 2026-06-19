import { MS_AR_LABELS, MS_AR_SECTIONS } from '@/data/multiple-sclerosis-vaccination-ar';
import {
  AR_HERO_LEAD,
  AR_HERO_TITLE,
  MS_REFERENCES,
  type MsVaccinationCopy,
} from '@/data/multiple-sclerosis-vaccination-copy';
import { MS_EN_LABELS, MS_EN_SECTIONS } from '@/data/multiple-sclerosis-vaccination-en';

export const MS_COPY: { en: MsVaccinationCopy; ar: MsVaccinationCopy } = {
  en: {
    heroTitle: 'Vaccinations with Multiple Sclerosis',
    heroLead:
      'Evidence-based timing of non-live and live vaccines with MS disease-modifying therapies — synthesized from ECTRIMS/EAN 2023, NMSS, VA MS Centers of Excellence, and peer-reviewed clinical guidance.',
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    sections: MS_EN_SECTIONS,
    referencesTitle: 'References',
    references: MS_REFERENCES,
    labels: MS_EN_LABELS,
  },
  ar: {
    heroTitle: AR_HERO_TITLE,
    heroLead: AR_HERO_LEAD,
    arHeroTitle: AR_HERO_TITLE,
    arHeroLead: AR_HERO_LEAD,
    sections: MS_AR_SECTIONS,
    referencesTitle: 'المراجع',
    references: MS_REFERENCES,
    labels: MS_AR_LABELS,
  },
};
