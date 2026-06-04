import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { RsvPage } from '@/data/hcp-vaccine-pages/rsv';

export default function HcpVaccineRsvRoute() {
  return <HcpVaccineProductPage {...RsvPage} />;
}
