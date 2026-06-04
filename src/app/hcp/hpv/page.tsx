import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { HpvPage } from '@/data/hcp-vaccine-pages/hpv';

export default function HcpVaccineHpvRoute() {
  return <HcpVaccineProductPage {...HpvPage} />;
}
