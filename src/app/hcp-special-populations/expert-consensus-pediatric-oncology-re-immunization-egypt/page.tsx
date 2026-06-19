import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import ExpertConsensusPediatricOncologyArticle, {
  ExpertConsensusPediatricOncologyArabicArticle,
} from '@/components/hcp-guide/articles/ExpertConsensusPediatricOncologyArticle';
import {
  EXPERT_CONSENSUS_AR_TOC,
  EXPERT_CONSENSUS_COPY,
  EXPERT_CONSENSUS_EN_TOC,
} from '@/data/expert-consensus-pediatric-oncology-copy';

export default function ExpertConsensusPediatricOncologyReimmunizationEgyptPage() {
  const copy = EXPERT_CONSENSUS_COPY.ar;

  return (
    <HcpGuidePageLayout
      metaKey="hcpPediatricOncologyReimmunizationEgypt"
      title="Re-immunization strategies for pediatric oncology patients in Egypt"
      emoji="👧"
      tag="Expert consensus · Pediatric oncology · Egypt"
      lead="Standardized revaccination guidance for childhood cancer survivors, developed by specialists in pediatric oncology, infectious diseases, and immunization — with practical policy points for clinical use."
      backHref="/hcp-special-populations/vaccination-in-patients-with-cancer"
      backLabel="← Vaccination in Patients with Cancer"
      heroClassName="hcp-consensus-hero"
      pageClassName="hcp-consensus-page"
      toc={[...EXPERT_CONSENSUS_EN_TOC]}
      bilingual={{
        arTitle: copy.arHeroTitle,
        arLead: copy.arHeroLead,
        arToc: [...EXPERT_CONSENSUS_AR_TOC],
        arabicChildren: <ExpertConsensusPediatricOncologyArabicArticle />,
      }}
    >
      <ExpertConsensusPediatricOncologyArticle />
    </HcpGuidePageLayout>
  );
}
