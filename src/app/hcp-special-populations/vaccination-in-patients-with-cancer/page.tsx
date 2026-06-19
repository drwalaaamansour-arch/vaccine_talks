import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import CancerVaccinationArticle, {
  CancerVaccinationArabicArticle,
} from '@/components/hcp-cancer-vaccination/CancerVaccinationArticle';
import {
  CANCER_VACCINATION_AR_TOC_FULL,
  CANCER_VACCINATION_COPY,
  CANCER_VACCINATION_EN_TOC,
} from '@/data/cancer-vaccination-copy';

export default function VaccinationInPatientsWithCancerPage() {
  const copy = CANCER_VACCINATION_COPY.ar;

  return (
    <HcpGuidePageLayout
      metaKey="hcpVaccinationInPatientsWithCancer"
      title="Vaccination in Patients with Cancer"
      emoji="🎗️"
      tag="HCP · Oncology & immunosuppression"
      lead="Patients with cancer are at increased risk of vaccine-preventable infections due to both the underlying malignancy and the immunosuppressive effects of cancer treatment. Chemotherapy, radiotherapy, immunotherapy, biologic agents, and other immunosuppressive therapies can impair immune function, reduce vaccine responses, and increase susceptibility to severe infections."
      bilingual={{
        arTitle: copy.arHeroTitle,
        arLead: copy.arHeroLead,
        arToc: [...CANCER_VACCINATION_AR_TOC_FULL],
        arabicChildren: <CancerVaccinationArabicArticle />,
      }}
      toc={[...CANCER_VACCINATION_EN_TOC]}
      heroBelowTitle={
        <p className="hcp-cancer-hero-lead hcp-cancer-hero-lead--secondary">
          Vaccination is an important component of comprehensive cancer care. Whenever possible, vaccines should be
          administered <strong>before</strong> treatment begins to maximize protection.
        </p>
      }
      arHeroBelowTitle={
        <p className="hcp-cancer-hero-lead hcp-cancer-hero-lead--secondary" dir="rtl">
          التطعيم جزء مهم من الرعاية الشاملة لمرضى السرطان. كلما أمكن، يجب إعطاء اللقاحات{' '}
          <strong>قبل</strong> بدء العلاج لتعظيم مستوى الحماية.
        </p>
      }
    >
      <CancerVaccinationArticle />
    </HcpGuidePageLayout>
  );
}
