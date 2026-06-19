import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import { ImmunoglobulinBloodProductsBody } from '@/components/hcp-guide/articles/ImmunoglobulinBloodProductsBody';
import {
  IG_BLOOD_AR_TOC,
  IG_BLOOD_COPY,
  IG_BLOOD_EN_TOC,
} from '@/data/immunoglobulin-blood-products-copy';

export default function ImmunoglobulinBloodProductsArticle() {
  const copy = IG_BLOOD_COPY;

  return (
    <HcpGuidePageLayout
      metaKey="hcpImmunoglobulinBloodProducts"
      title={copy.en.heroTitle}
      emoji="🩸"
      lead={copy.en.heroLead}
      toc={[...IG_BLOOD_EN_TOC]}
      bilingual={{
        arTitle: copy.ar.arHeroTitle,
        arLead: copy.ar.arHeroLead,
        arToc: [...IG_BLOOD_AR_TOC],
        arabicChildren: <ImmunoglobulinBloodProductsBody copy={copy.ar} arabic />,
      }}
    >
      <ImmunoglobulinBloodProductsBody copy={copy.en} />
    </HcpGuidePageLayout>
  );
}
