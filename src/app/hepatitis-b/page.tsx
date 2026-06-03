import VaccineArticlePage from '@/components/vaccine-article/VaccineArticlePage';
import { VACCINE_ARTICLES } from '@/data/vaccine-articles';

export default function HepatitisB() {
  return <VaccineArticlePage article={VACCINE_ARTICLES['hepatitis-b']} />;
}
