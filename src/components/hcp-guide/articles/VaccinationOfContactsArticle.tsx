import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';

const CDC_ALTERED =
  'https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html';

export default function VaccinationOfContactsArticle() {
  return (
    <HcpGuidePageLayout
      metaKey="hcpVaccinationOfContacts"
      title="Vaccination of contacts with persons with altered immunocompetence"
      emoji="🤝"
      lead="Household and close contacts of persons with altered immunocompetence should be fully vaccinated to prevent transmission of vaccine-preventable diseases."
      backHref="/hcp-special-populations/altered-immunocompetence"
      backLabel="← Altered immunocompetence"
    >
      <HcpGuideSection id="recommended" title="Recommended vaccines for contacts" icon="💉">
        <p>
          Household contacts and other close contacts of persons with altered immunocompetence should
          receive all age- and exposure-appropriate vaccines, with the exception of smallpox vaccine.
          Receipt of vaccines will prevent the vaccine-preventable disease, so there can be no potential
          transmission to the contact with altered immunocompetence.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="live-vaccines" title="Live MMR, varicella, and rotavirus vaccines" icon="🦠">
        <p>
          The live MMR, varicella, and rotavirus vaccines should be administered to susceptible household
          contacts and other close contacts of immunocompromised patients when indicated.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="varicella-precautions" title="Precautions after varicella vaccination" icon="⚠️">
        <p>
          No specific precautions are needed unless the varicella vaccine recipient has a rash after
          vaccination, in which case direct contact with susceptible household contacts with altered
          immunocompetence should be avoided until the rash resolves.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="rotavirus" title="Rotavirus vaccine shedding" icon="🧼">
        <p>
          All members of the household should wash their hands after changing the diaper of an infant who
          received rotavirus vaccine. This minimizes rotavirus transmission, as shedding may occur up to one
          month after the last dose.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="influenza" title="Influenza vaccination" icon="🌡️">
        <p>
          Household and other close contacts of persons with altered immunocompetence should receive annual
          influenza vaccination.
        </p>
      </HcpGuideSection>

      <HcpGuideReferences
        references={[
          {
            citation: 'CDC — Altered immunocompetence: immunization best practices for health care providers.',
            href: CDC_ALTERED,
          },
        ]}
      />
    </HcpGuidePageLayout>
  );
}
