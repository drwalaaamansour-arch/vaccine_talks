import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { PolioPage } from '@/data/hcp-vaccine-pages/polio';

export default function HcpVaccinePolioRoute() {
  return <HcpVaccineProductPage {...PolioPage} />;
}
