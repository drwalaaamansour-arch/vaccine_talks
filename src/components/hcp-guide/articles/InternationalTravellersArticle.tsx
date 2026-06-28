import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import { InternationalTravellersBody } from '@/components/hcp-guide/articles/InternationalTravellersBody';
import {
  INTERNATIONAL_TRAVELLERS_AR_TOC,
  INTERNATIONAL_TRAVELLERS_COPY,
  INTERNATIONAL_TRAVELLERS_EN_TOC,
} from '@/data/international-travellers-copy';

export default function InternationalTravellersArticle() {
  const copy = INTERNATIONAL_TRAVELLERS_COPY;

  return (
    <HcpGuidePageLayout
      metaKey="hcpInternationalTravellers"
      title={copy.en.heroTitle}
      emoji="✈️"
      lead={copy.en.heroLead}
      toc={[...INTERNATIONAL_TRAVELLERS_EN_TOC]}
      bilingual={{
        arTitle: copy.ar.arHeroTitle,
        arLead: copy.ar.arHeroLead,
        arToc: [...INTERNATIONAL_TRAVELLERS_AR_TOC],
        arabicChildren: <InternationalTravellersBody copy={copy.ar} arabic />,
      }}
    >
      <InternationalTravellersBody copy={copy.en} />
    </HcpGuidePageLayout>
  );
}
