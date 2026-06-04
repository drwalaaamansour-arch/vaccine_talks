import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { MeningitisPage } from '@/data/hcp-vaccine-pages/meningitis';

export default function HcpVaccineMeningitisRoute() {
  return <HcpVaccineProductPage {...MeningitisPage} />;
}
