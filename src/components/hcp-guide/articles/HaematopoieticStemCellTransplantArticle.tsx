import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import { HaematopoieticStemCellTransplantBody } from '@/components/hcp-guide/articles/HaematopoieticStemCellTransplantBody';
import { HSCT_AR_TOC, HSCT_COPY, HSCT_EN_TOC } from '@/data/hsct-vaccination-copy';

export default function HaematopoieticStemCellTransplantArticle() {
  const copy = HSCT_COPY;

  return (
    <HcpGuidePageLayout
      metaKey="hcpHematopoieticTransplants"
      title={copy.en.heroTitle}
      emoji="🩺"
      lead={copy.en.heroLead}
      toc={[...HSCT_EN_TOC]}
      bilingual={{
        arTitle: copy.ar.arHeroTitle,
        arLead: copy.ar.arHeroLead,
        arToc: [...HSCT_AR_TOC],
        arabicChildren: <HaematopoieticStemCellTransplantBody copy={copy.ar} locale="ar" />,
      }}
    >
      <HaematopoieticStemCellTransplantBody copy={copy.en} locale="en" />
    </HcpGuidePageLayout>
  );
}
