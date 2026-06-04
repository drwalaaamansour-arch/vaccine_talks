import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { HepatitisBPage } from '@/data/hcp-vaccine-pages/hepatitis-b';

export default function HcpVaccineHepatitisBRoute() {
  return <HcpVaccineProductPage {...HepatitisBPage} />;
}
