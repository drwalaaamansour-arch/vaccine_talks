import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { RotaPage } from '@/data/hcp-vaccine-pages/rota';

export default function HcpVaccineRotaRoute() {
  return <HcpVaccineProductPage {...RotaPage} />;
}
