import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { MeningococcalPage } from '@/data/hcp-vaccine-pages/meningococcal';

export default function HcpVaccineMeningococcalRoute() {
  return <HcpVaccineProductPage {...MeningococcalPage} />;
}
