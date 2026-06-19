import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import { PregnancyBreastfeedingBody } from '@/components/hcp-guide/articles/PregnancyBreastfeedingBody';
import { PREGNANCY_AR_TOC, PREGNANCY_COPY, PREGNANCY_EN_TOC } from '@/data/pregnancy-breastfeeding-copy';

export default function PregnancyArticle() {
  const copy = PREGNANCY_COPY;

  return (
    <HcpGuidePageLayout
      metaKey="hcpPregnancy"
      title={copy.en.heroTitle}
      emoji="🤰"
      lead={copy.en.heroLead}
      toc={[...PREGNANCY_EN_TOC]}
      bilingual={{
        arTitle: copy.ar.arHeroTitle,
        arLead: copy.ar.arHeroLead,
        arToc: [...PREGNANCY_AR_TOC],
        arabicChildren: <PregnancyBreastfeedingBody copy={copy.ar} arabic />,
      }}
    >
      <PregnancyBreastfeedingBody copy={copy.en} />
    </HcpGuidePageLayout>
  );
}
