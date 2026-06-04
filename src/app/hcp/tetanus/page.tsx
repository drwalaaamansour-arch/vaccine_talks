import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { TetanusPage } from '@/data/hcp-vaccine-pages/tetanus';

export default function HcpVaccineTetanusRoute() {
  return <HcpVaccineProductPage {...TetanusPage} />;
}
