import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import { CochlearImplantsBody } from '@/components/hcp-guide/articles/CochlearImplantsBody';
import { COCHLEAR_AR_TOC, COCHLEAR_COPY, COCHLEAR_EN_TOC } from '@/data/cochlear-implants-copy';

export default function CochlearImplantsArticle() {
  const copy = COCHLEAR_COPY;

  return (
    <HcpGuidePageLayout
      metaKey="hcpCochlearImplants"
      title={copy.en.heroTitle}
      emoji="🦻"
      lead={copy.en.heroLead}
      toc={[...COCHLEAR_EN_TOC]}
      bilingual={{
        arTitle: copy.ar.arHeroTitle,
        arLead: copy.ar.arHeroLead,
        arToc: [...COCHLEAR_AR_TOC],
        arabicChildren: <CochlearImplantsBody copy={copy.ar} arabic />,
      }}
    >
      <CochlearImplantsBody copy={copy.en} />
    </HcpGuidePageLayout>
  );
}
