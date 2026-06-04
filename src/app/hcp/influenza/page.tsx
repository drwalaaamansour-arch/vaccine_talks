import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { InfluenzaPage } from '@/data/hcp-vaccine-pages/influenza';

export default function HcpVaccineInfluenzaRoute() {
  return <HcpVaccineProductPage {...InfluenzaPage} />;
}
