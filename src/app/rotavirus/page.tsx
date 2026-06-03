import VaccineArticlePage from '@/components/vaccine-article/VaccineArticlePage';
import { VACCINE_ARTICLES } from '@/data/vaccine-articles';

export default function Rotavirus() {
  return <VaccineArticlePage article={VACCINE_ARTICLES['rotavirus']} />;
}
