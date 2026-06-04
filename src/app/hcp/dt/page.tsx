import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { DtPage } from '@/data/hcp-vaccine-pages/dt';

export default function HcpVaccineDtRoute() {
  return <HcpVaccineProductPage {...DtPage} />;
}
