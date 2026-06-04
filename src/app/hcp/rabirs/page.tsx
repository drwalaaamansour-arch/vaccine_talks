import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { RabirsPage } from '@/data/hcp-vaccine-pages/rabirs';

export default function HcpVaccineRabirsRoute() {
  return <HcpVaccineProductPage {...RabirsPage} />;
}
