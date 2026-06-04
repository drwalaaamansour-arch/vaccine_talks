import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { BcgPage } from '@/data/hcp-vaccine-pages/bcg';

export default function HcpVaccineBcgRoute() {
  return <HcpVaccineProductPage {...BcgPage} />;
}
