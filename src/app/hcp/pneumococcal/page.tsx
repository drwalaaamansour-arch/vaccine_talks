import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { PneumococcalPage } from '@/data/hcp-vaccine-pages/pneumococcal';

export default function HcpVaccinePneumococcalRoute() {
  return <HcpVaccineProductPage {...PneumococcalPage} />;
}
