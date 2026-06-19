import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import { GeneralPrinciplesBody } from '@/components/hcp-guide/articles/GeneralPrinciplesBody';
import {
  GENERAL_PRINCIPLES_AR_TOC,
  GENERAL_PRINCIPLES_COPY,
  GENERAL_PRINCIPLES_EN_TOC,
} from '@/data/general-principles-copy';

export default function GeneralPrinciplesArticle() {
  const copy = GENERAL_PRINCIPLES_COPY;

  return (
    <HcpGuidePageLayout
      metaKey="hcpAlteredImmunocompetenceGeneral"
      title={copy.en.heroTitle}
      emoji="📖"
      lead={copy.en.heroLead}
      backHref="/hcp-special-populations"
      backLabel={copy.en.backLabel}
      toc={[...GENERAL_PRINCIPLES_EN_TOC]}
      bilingual={{
        arTitle: copy.ar.arHeroTitle,
        arLead: copy.ar.arHeroLead,
        arToc: [...GENERAL_PRINCIPLES_AR_TOC],
        arabicChildren: <GeneralPrinciplesBody copy={copy.ar} arabic />,
      }}
    >
      <GeneralPrinciplesBody copy={copy.en} />
    </HcpGuidePageLayout>
  );
}
