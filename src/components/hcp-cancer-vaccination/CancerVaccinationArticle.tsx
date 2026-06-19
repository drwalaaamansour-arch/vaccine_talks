import { CancerVaccinationBody } from '@/components/hcp-cancer-vaccination/CancerVaccinationBody';
import {
  CANCER_VACCINATION_COPY,
  CANCER_VACCINATION_TOC,
} from '@/data/cancer-vaccination-copy';

export { CANCER_VACCINATION_TOC };

export default function CancerVaccinationArticle() {
  return <CancerVaccinationBody copy={CANCER_VACCINATION_COPY.en} locale="en" />;
}

export function CancerVaccinationArabicArticle() {
  return <CancerVaccinationBody copy={CANCER_VACCINATION_COPY.ar} locale="ar" />;
}
