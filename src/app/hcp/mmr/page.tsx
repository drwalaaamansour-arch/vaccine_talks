import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { MmrPage } from '@/data/hcp-vaccine-pages/mmr';

export default function HcpVaccineMmrRoute() {
  return <HcpVaccineProductPage {...MmrPage} />;
}
