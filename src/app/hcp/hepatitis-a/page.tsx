import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { HepatitisAPage } from '@/data/hcp-vaccine-pages/hepatitis-a';

export default function HCPHepatitisAPage() {
  return <HcpVaccineProductPage {...HepatitisAPage} />;
}
