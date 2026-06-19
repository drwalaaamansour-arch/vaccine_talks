import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import { AnaesthesiaSurgeryBody } from '@/components/hcp-guide/articles/AnaesthesiaSurgeryBody';
import {
  ANAESTHESIA_AR_TOC,
  ANAESTHESIA_COPY,
  ANAESTHESIA_EN_TOC,
} from '@/data/anaesthesia-surgery-copy';

export default function AnaesthesiaSurgeryArticle() {
  const copy = ANAESTHESIA_COPY;

  return (
    <HcpGuidePageLayout
      metaKey="hcpAnaesthesiaSurgery"
      title={copy.en.heroTitle}
      emoji="🏥"
      lead={copy.en.heroLead}
      toc={[...ANAESTHESIA_EN_TOC]}
      bilingual={{
        arTitle: copy.ar.arHeroTitle,
        arLead: copy.ar.arHeroLead,
        arToc: [...ANAESTHESIA_AR_TOC],
        arabicChildren: <AnaesthesiaSurgeryBody copy={copy.ar} arabic />,
      }}
    >
      <AnaesthesiaSurgeryBody copy={copy.en} />
    </HcpGuidePageLayout>
  );
}
