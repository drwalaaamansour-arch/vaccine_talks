import ChildAgeVaccinesPage from '@/components/child-age-vaccines/ChildAgeVaccinesPage';
import type { ChildAgeVaccinesPageConfig } from '@/data/child-age-vaccines/types';

export function createChildAgeVaccinesPage(config: ChildAgeVaccinesPageConfig) {
  return function ChildAgeVaccinesPageRoute() {
    return <ChildAgeVaccinesPage config={config} />;
  };
}
