import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { HibPage } from '@/data/hcp-vaccine-pages/hib';

export default function HcpVaccineHibRoute() {
  return <HcpVaccineProductPage {...HibPage} />;
}
