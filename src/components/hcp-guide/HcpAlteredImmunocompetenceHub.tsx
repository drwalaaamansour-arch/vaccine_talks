import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideSubNav from '@/components/hcp-guide/HcpGuideSubNav';
import { ALTERED_IMMUNOCOMPETENCE_LINKS } from '@/data/hcp-altered-immunocompetence-hub';

export default function HcpAlteredImmunocompetenceHub() {
  return (
    <HcpGuidePageLayout
      metaKey="hcpAlteredImmunocompetenceHub"
      title="Altered immunocompetence"
      emoji="🛡️"
      lead="Vaccination guidance for people with primary or secondary immunodeficiency, immunosuppressive therapy, or other causes of altered immune response."
    >
      <HcpGuideSubNav title="Topics in this section" links={ALTERED_IMMUNOCOMPETENCE_LINKS} />
    </HcpGuidePageLayout>
  );
}
