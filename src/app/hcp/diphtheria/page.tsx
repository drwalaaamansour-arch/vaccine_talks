import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { DiphtheriaPage } from '@/data/hcp-vaccine-pages/diphtheria';

export default function HcpVaccineDiphtheriaRoute() {
  return <HcpVaccineProductPage {...DiphtheriaPage} />;
}
