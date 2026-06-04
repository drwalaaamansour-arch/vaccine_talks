import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { YellowFeverPage } from '@/data/hcp-vaccine-pages/yellow-fever';

export default function HcpVaccineYellowFeverRoute() {
  return <HcpVaccineProductPage {...YellowFeverPage} />;
}
