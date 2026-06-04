import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { ShinglesPage } from '@/data/hcp-vaccine-pages/shingles';

export default function HcpVaccineShinglesRoute() {
  return <HcpVaccineProductPage {...ShinglesPage} />;
}
