import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import { MultipleSclerosisVaccinationBody } from '@/components/hcp-guide/articles/MultipleSclerosisVaccinationBody';
import { MS_AR_TOC, MS_EN_TOC } from '@/data/multiple-sclerosis-vaccination-copy';
import { MS_COPY } from '@/data/multiple-sclerosis-vaccination-ms-copy';

export default function MultipleSclerosisVaccinationArticle() {
  const copy = MS_COPY;

  return (
    <HcpGuidePageLayout
      metaKey="hcpMultipleSclerosis"
      title={copy.en.heroTitle}
      emoji="🧠"
      lead={copy.en.heroLead}
      toc={[...MS_EN_TOC]}
      bilingual={{
        arTitle: copy.ar.arHeroTitle,
        arLead: copy.ar.arHeroLead,
        arToc: [...MS_AR_TOC],
        arabicChildren: <MultipleSclerosisVaccinationBody copy={copy.ar} arabic />,
      }}
    >
      <MultipleSclerosisVaccinationBody copy={copy.en} />
    </HcpGuidePageLayout>
  );
}
