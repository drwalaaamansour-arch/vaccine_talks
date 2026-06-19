import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import { BreastfeedingBody } from '@/components/hcp-guide/articles/BreastfeedingBody';
import { BREASTFEEDING_AR_TOC, BREASTFEEDING_COPY, BREASTFEEDING_EN_TOC } from '@/data/breastfeeding-copy';

export default function BreastfeedingArticle() {
  const copy = BREASTFEEDING_COPY;

  return (
    <HcpGuidePageLayout
      metaKey="hcpBreastfeeding"
      title={copy.en.heroTitle}
      emoji="🍼"
      lead={copy.en.heroLead}
      toc={[...BREASTFEEDING_EN_TOC]}
      bilingual={{
        arTitle: copy.ar.arHeroTitle,
        arLead: copy.ar.arHeroLead,
        arToc: [...BREASTFEEDING_AR_TOC],
        arabicChildren: <BreastfeedingBody copy={copy.ar} arabic />,
      }}
    >
      <BreastfeedingBody copy={copy.en} />
    </HcpGuidePageLayout>
  );
}
