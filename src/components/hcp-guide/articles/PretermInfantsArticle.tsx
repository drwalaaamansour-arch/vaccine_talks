import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import { PretermInfantsBody } from '@/components/hcp-guide/articles/PretermInfantsBody';
import { PRETERM_AR_TOC, PRETERM_COPY, PRETERM_EN_TOC } from '@/data/preterm-infants-copy';

export default function PretermInfantsArticle() {
  const copy = PRETERM_COPY;

  return (
    <HcpGuidePageLayout
      metaKey="hcpPretermInfants"
      title={copy.en.heroTitle}
      emoji="👶"
      lead={copy.en.heroLead}
      toc={[...PRETERM_EN_TOC]}
      bilingual={{
        arTitle: copy.ar.arHeroTitle,
        arLead: copy.ar.arHeroLead,
        arToc: [...PRETERM_AR_TOC],
        arabicChildren: <PretermInfantsBody copy={copy.ar} arabic />,
      }}
    >
      <PretermInfantsBody copy={copy.en} />
    </HcpGuidePageLayout>
  );
}
