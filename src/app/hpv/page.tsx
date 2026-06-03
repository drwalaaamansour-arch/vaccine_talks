import VaccineArticlePage from '@/components/vaccine-article/VaccineArticlePage';
import { VACCINE_ARTICLES } from '@/data/vaccine-articles';

export default function HPV() {
  return <VaccineArticlePage article={VACCINE_ARTICLES['hpv']} />;
}
