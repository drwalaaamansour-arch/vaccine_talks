import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { VaricellaPage } from '@/data/hcp-vaccine-pages/varicella';

export default function HcpVaccineVaricellaRoute() {
  return <HcpVaccineProductPage {...VaricellaPage} />;
}
