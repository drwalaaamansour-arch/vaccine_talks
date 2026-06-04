import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';

const TOC = [
  { id: 'general-principles', label: 'General principles' },
  { id: 'smallpox', label: 'Smallpox vaccination' },
  { id: 'yellow-fever', label: 'Yellow fever vaccine' },
  { id: 'infant-vaccination', label: 'Infant vaccination' },
] as const;

const CDC_BREASTFEEDING =
  'https://www.cdc.gov/vaccines/hcp/imz-best-practices/special-situations.html#cdc_report_pub_study_section_5-breastfeeding-and-vaccination';

export default function BreastfeedingArticle() {
  return (
    <HcpGuidePageLayout
      metaKey="hcpBreastfeeding"
      title="Women who are breastfeeding"
      emoji="🤱"
      lead="With two exceptions, neither non-live nor live-virus vaccines administered to a lactating woman affect the safety of breastfeeding."
      toc={[...TOC]}
    >
      <HcpGuideSection id="general-principles" title="General principles" icon="✓">
        <p>
          With 2 exceptions, neither non-live nor live-virus vaccines administered to a lactating woman affect the
          safety of breastfeeding for women or their infants. Although live viruses in vaccines can replicate in the
          mother, the majority of live viruses in vaccines have been demonstrated not to be excreted in human milk.
        </p>
        <p>
          Varicella vaccine virus has not been found in human milk. Although rubella vaccine virus has been excreted in
          human milk, the virus usually does not infect the infant. If infection does occur, it is well tolerated because
          the virus is attenuated.
        </p>
        <p>Non-live vaccines pose no risk for mothers who are breastfeeding or for their infants.</p>
      </HcpGuideSection>

      <HcpGuideSection id="smallpox" title="Smallpox vaccination" icon="⚠️">
        <p>
          Breastfeeding is a contraindication for smallpox vaccination of the mother because of the theoretical risk for
          contact transmission from mother to infant.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="yellow-fever" title="Yellow fever vaccine" icon="🌡️">
        <p>
          Yellow fever vaccine should be avoided in breastfeeding women, because 2 cases (one confirmed, one probable) of
          yellow-fever vaccine associated acute neurotropic disease (YEL-AND) have been detected in infants whose mothers
          were vaccinated but were not vaccinated themselves. In both infants, vaccine virus was recovered from the
          cerebrospinal fluid of the infant, but the exact mode of transmission was not precisely determined because
          vaccine virus was not recovered from breast milk.
        </p>
        <p>
          However, when nursing mothers cannot avoid or postpone travel to areas endemic for yellow fever in which risk
          for acquisition is high, these women should be vaccinated.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="infant-vaccination" title="Infant vaccination" icon="👶">
        <p>
          Limited data indicate that breastfeeding can enhance the response to certain vaccine antigens. There are no
          data to suggest that passive transfer of antibodies in human milk can affect the efficacy of live-virus
          vaccines.
        </p>
        <p>Breastfed infants should be vaccinated according to the recommended schedule.</p>
      </HcpGuideSection>

      <HcpGuideReferences
        references={[
          {
            citation: 'CDC — Best practices: Breastfeeding and vaccination.',
            href: CDC_BREASTFEEDING,
          },
        ]}
      />
    </HcpGuidePageLayout>
  );
}
