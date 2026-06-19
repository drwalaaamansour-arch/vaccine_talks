import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import { VaccinationOfContactsBody } from '@/components/hcp-guide/articles/VaccinationOfContactsBody';
import {
  VACCINATION_OF_CONTACTS_AR_TOC,
  VACCINATION_OF_CONTACTS_COPY,
  VACCINATION_OF_CONTACTS_EN_TOC,
} from '@/data/vaccination-of-contacts-copy';

export default function VaccinationOfContactsArticle() {
  const copy = VACCINATION_OF_CONTACTS_COPY;

  return (
    <HcpGuidePageLayout
      metaKey="hcpVaccinationOfContacts"
      title={copy.en.heroTitle}
      emoji="🤝"
      lead={copy.en.heroLead}
      backHref="/hcp-special-populations"
      backLabel={copy.en.backLabel}
      toc={[...VACCINATION_OF_CONTACTS_EN_TOC]}
      bilingual={{
        arTitle: copy.ar.arHeroTitle,
        arLead: copy.ar.arHeroLead,
        arToc: [...VACCINATION_OF_CONTACTS_AR_TOC],
        arabicChildren: <VaccinationOfContactsBody copy={copy.ar} arabic />,
      }}
    >
      <VaccinationOfContactsBody copy={copy.en} />
    </HcpGuidePageLayout>
  );
}
