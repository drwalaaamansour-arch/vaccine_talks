import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { HepatitisABPage } from '@/data/hcp-vaccine-pages/hepatitis-a-b';

export default function HcpVaccineHepatitisABRoute() {
  return <HcpVaccineProductPage {...HepatitisABPage} />;
}
