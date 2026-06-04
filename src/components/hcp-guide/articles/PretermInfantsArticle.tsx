import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';
import HcpGuideRelatedLinks from '@/components/hcp-guide/HcpGuideRelatedLinks';

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'definitions', label: 'Definitions' },
  { id: 'immunology', label: 'Immunology' },
  { id: 'schedules', label: 'Schedules' },
  { id: 'risks', label: 'Risks' },
  { id: 'management', label: 'Management' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'special', label: 'Special considerations' },
  { id: 'family', label: 'Family immunization' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'practical', label: 'Practical guidance' },
] as const;

const boxStyle = {
  padding: '1.5rem 2rem',
  borderRadius: '24px',
  background: 'rgba(255, 255, 255, 0.75)',
  border: '2px solid rgba(64, 96, 109, 0.15)',
  boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)',
  width: '100%',
  boxSizing: 'border-box' as const,
};

const h4Style = {
  textAlign: 'left' as const,
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#40606D',
  marginTop: 0,
  marginBottom: '0.75rem',
  direction: 'ltr' as const,
};

export default function PretermInfantsArticle() {
  return (
    <HcpGuidePageLayout
      metaKey="hcpPretermInfants"
      title="Preterm infants"
      emoji="👶"
      lead="Evidence-based vaccination guidance for preterm infants — schedules, risks, and practice in Egypt."
      toc={[...TOC]}
    >
      <div className="hcp-guide-hsct" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
              <div id="overview" style={boxStyle}>
                <h4 style={h4Style}>Overview</h4>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: 0, lineHeight: 1.8}}>
                  Vaccination is a cornerstone of preventive pediatric care, offering protection against infectious diseases that pose significant risks to infants, especially those born preterm. Preterm infants, due to their unique physiological and immunological profiles, face heightened vulnerability to infections and complications. Ensuring optimal immunization in this population requires a nuanced understanding of their needs, risk factors, and best practices. This article presents an evidence-based approach to vaccination in preterm infants, tailored for healthcare professionals and pediatricians in Egypt.
                </p>
              </div>

              <div id="definitions" style={boxStyle}>
                <h4 style={h4Style}>Definitions and Epidemiology</h4>
                <h5 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: 600, color: '#40606D', marginTop: '1rem', marginBottom: '0.5rem', direction: 'ltr'}}>WHO Classification of Preterm Birth</h5>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: '0.75rem'}}>
                  The World Health Organization (WHO) defines preterm birth as any birth occurring before 37 completed weeks of gestation. Preterm births are further classified as:
                </p>
                <ul style={{direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: '0.75rem', lineHeight: 1.8}}>
                  <li><strong>Extremely preterm:</strong> &lt;28 weeks gestation</li>
                  <li><strong>Very preterm:</strong> 28 to &lt;32 weeks gestation</li>
                  <li><strong>Moderate to late preterm:</strong> 32 to &lt;37 weeks gestation</li>
                </ul>
                <h5 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: 600, color: '#40606D', marginTop: '1rem', marginBottom: '0.5rem', direction: 'ltr'}}>Prevalence of Preterm Birth in Egypt</h5>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: 0}}>
                  Preterm birth is a significant public health concern in Egypt, with prevalence rates estimated between 10–13% of live births, aligning with global trends. Contributing factors include maternal health conditions, socioeconomic challenges, and limited access to prenatal care. The high prevalence underscores the importance of tailored immunization strategies for this population.
                </p>
              </div>

              <div id="immunology" style={boxStyle}>
                <h4 style={h4Style}>Immunological Considerations in Preterm Infants</h4>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: 0, lineHeight: 1.8}}>
                  Preterm infants exhibit immature immune systems, characterized by reduced transplacental transfer of maternal antibodies, impaired cellular and humoral responses, and increased susceptibility to infections. This immaturity necessitates timely and appropriate vaccination to mitigate risks of severe disease, hospitalization, and mortality. Evidence shows that while antibody responses may be lower compared to term infants, most preterm infants develop adequate protection following standard immunization schedules.
                </p>
              </div>

              <div id="schedules" style={boxStyle}>
                <h4 style={h4Style}>Vaccination Schedules and Timing</h4>
                <h5 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: 600, color: '#40606D', marginTop: '1rem', marginBottom: '0.5rem', direction: 'ltr'}}>Chronological vs. Corrected Age</h5>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: '0.75rem'}}>
                  Current international guidelines, including those endorsed by WHO and national health authorities, recommend that vaccines be administered according to the infant&apos;s chronological age, not corrected gestational age. This approach maximizes early protection, particularly in environments with high infectious disease burden such as Egypt.
                </p>
                <h5 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: 600, color: '#40606D', marginTop: '1rem', marginBottom: '0.5rem', direction: 'ltr'}}>Exceptions and Special Considerations</h5>
                <ul style={{direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: '0.75rem', lineHeight: 1.8}}>
                  <li><strong>Hepatitis B Vaccine (HBV):</strong> For preterm infants weighing &lt;2,000 grams born to HBsAg-negative mothers, the initial HBV dose is often delayed until one month of age or hospital discharge, due to reduced immunogenicity. If the mother is HBsAg-positive or status unknown, vaccination and immunoglobulin should be administered at birth regardless of birth weight.</li>
                </ul>
                <h5 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: 600, color: '#40606D', marginTop: '1rem', marginBottom: '0.5rem', direction: 'ltr'}}>Birth Weight Considerations</h5>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: 0}}>
                  Low birth weight (&lt;2,000 grams) may affect vaccine immunogenicity for certain antigens (notably HBV), but most other vaccines (DTaP, Hib, IPV, rotavirus, PCV, etc.) are effective and safe when given at chronological age, regardless of birth weight.
                </p>
              </div>

              <div id="risks" style={boxStyle}>
                <h4 style={h4Style}>Risks and Adverse Events</h4>
                <h5 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: 600, color: '#40606D', marginTop: '1rem', marginBottom: '0.5rem', direction: 'ltr'}}>Apnoea and Bradycardia</h5>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: '0.75rem'}}>
                  Preterm infants, particularly those born &lt;32 weeks or with ongoing respiratory instability, are at increased risk for post-vaccination apnoea and bradycardia, especially following the first immunization series. These events are typically transient and resolve spontaneously, but may warrant monitoring for 48–72 hours post-vaccination in high-risk infants.
                </p>
                <h5 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: 600, color: '#40606D', marginTop: '1rem', marginBottom: '0.5rem', direction: 'ltr'}}>SIDS and Pain Response</h5>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: '0.75rem'}}>
                  Concerns about sudden infant death syndrome (SIDS) have not been substantiated by robust evidence; vaccination does not increase SIDS risk. Pain response may be heightened in preterm infants, necessitating appropriate pain management strategies or comfort measures during vaccination.
                </p>
                <h5 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: 600, color: '#40606D', marginTop: '1rem', marginBottom: '0.5rem', direction: 'ltr'}}>Local and Systemic Reactions</h5>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: 0}}>
                  Adverse events following immunization (AEFI) in preterm infants are generally comparable to those seen in term infants. Common reactions include mild fever, irritability, and local redness or swelling at the injection site. Severe reactions are rare. Careful documentation and prompt management of any adverse event are essential.
                </p>
              </div>

              <div id="management" style={boxStyle}>
                <h4 style={h4Style}>Management Strategies for Vaccination in Preterm Infants</h4>
                <h5 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: 600, color: '#40606D', marginTop: '1rem', marginBottom: '0.5rem', direction: 'ltr'}}>Monitoring and Postponement</h5>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: '0.75rem'}}>
                  Infants who are clinically unstable, experiencing significant respiratory or cardiovascular compromise, or receiving intensive care should have immunizations temporarily deferred until stabilization. For stable preterm infants, vaccination should proceed as scheduled, with post-vaccination monitoring for apnoea and bradycardia in those at risk.
                </p>
                <h5 style={{textAlign: 'left', fontSize: '1.1rem', fontWeight: 600, color: '#40606D', marginTop: '1rem', marginBottom: '0.5rem', direction: 'ltr'}}>Injection Site and Needle Length Recommendations</h5>
                <ul style={{direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8}}>
                  <li><strong>Site:</strong> The anterolateral thigh (vastus lateralis muscle) is the preferred site for intramuscular injections in infants.</li>
                  <li><strong>Needle Length:</strong> Use a 16 mm (5/8 inch) to 25 mm (1 inch) needle, depending on infant size and muscle mass. For extremely low birth weight infants, a 16 mm needle is generally adequate.</li>
                  <li><strong>Avoiding Compromised Skin:</strong> Do not administer injections in areas with infection, inflammation, or tissue damage.</li>
                </ul>
              </div>

              <div id="evidence" style={boxStyle}>
                <h4 style={h4Style}>Evidence from Clinical Studies</h4>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: 0, lineHeight: 1.8}}>
                  Randomized controlled trials and observational studies have demonstrated that routine immunizations are safe and effective in preterm infants. Although seroconversion rates may be lower for some vaccines in extremely preterm or low birth weight infants, protective immunity is achieved in the majority. Studies confirm no increased risk of severe adverse events, and transient apnoea/bradycardia episodes do not lead to long-term sequelae. Early vaccination reduces the incidence of vaccine-preventable diseases and associated hospitalizations.
                </p>
              </div>

              <div id="special" style={boxStyle}>
                <h4 style={h4Style}>Special Considerations</h4>
                <ul style={{direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8}}>
                  <li><strong>Bronchopulmonary Dysplasia (BPD):</strong> Infants with chronic lung disease should receive routine vaccinations; post-vaccination monitoring may be extended due to increased risk of respiratory events.</li>
                  <li><strong>Hospitalized Infants:</strong> Vaccination should not be delayed solely due to hospitalization; stable infants can be immunized in the neonatal unit.</li>
                  <li><strong>Chronic Conditions:</strong> Preterm infants with additional comorbidities (e.g., congenital heart disease, immunodeficiency) may require tailored vaccine schedules and closer follow-up.</li>
                </ul>
              </div>

              <div id="family" style={boxStyle}>
                <h4 style={h4Style}>Family and Caregiver Immunization</h4>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: 0, lineHeight: 1.8}}>
                  Immunizing household contacts and caregivers is critical in protecting preterm infants, who are particularly susceptible to severe infections. Family members should be up-to-date on influenza, pertussis, and other recommended vaccines. The &quot;cocooning&quot; strategy reduces transmission risk and enhances community immunity, offering indirect protection to the infant.
                </p>
              </div>

              <div id="conclusion" style={{ ...boxStyle, background: 'rgba(64, 96, 109, 0.08)', border: '2px solid rgba(64, 96, 109, 0.25)' }}>
                <h4 style={h4Style}>Conclusion</h4>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: 0, lineHeight: 1.8}}>
                  Vaccination of preterm infants is both safe and essential. Healthcare providers should adhere to chronological age-based schedules, monitor for transient adverse events, and prioritize early immunization. Individualized care for infants with respiratory instability or chronic conditions, combined with family immunization, optimizes protection and outcomes. Ongoing education and vigilance remain key to improving immunization coverage and safeguarding the health of Egypt&apos;s vulnerable preterm population.
                </p>
              </div>

              <div id="practical" style={boxStyle}>
                <h4 style={h4Style}>Practical Guidance for Healthcare Providers</h4>
                <ul style={{direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8}}>
                  <li>Follow chronological age for vaccine scheduling, except for HBV in select low birth weight cases.</li>
                  <li>Monitor high-risk infants for 48–72 hours post-vaccination for apnoea/bradycardia.</li>
                  <li>Use appropriate injection site and needle length; avoid compromised skin.</li>
                  <li>Educate families on vaccine benefits and the importance of caregiver immunization.</li>
                  <li>Document and manage any adverse events promptly.</li>
                </ul>
              </div>

      </div>

      <HcpGuideReferences
        references={[
          {
            citation: 'Australian Immunisation Handbook — Vaccination for preterm infants.',
            href: 'https://immunisationhandbook.health.gov.au/contents/vaccination-for-special-risk-groups/vaccination-for-preterm-infants',
          },
          {
            citation: 'Springer — Preterm infant vaccination.',
            href: 'https://url.de.m.mimecastprotect.com/s/Ah1HC79EKVt1r3N0yH8f9Fo6Zu7?domain=link.springer.com',
          },
          {
            citation: 'CDC — Special situations: vaccine best practices.',
            href: 'https://www.cdc.gov/vaccines/hcp/imz-best-practices/special-situations.html',
          },
        ]}
      />

      <HcpGuideRelatedLinks
        links={[
          { href: '/hcp-documents/preterm', label: 'Preterm infants documents' },
          {
            href: '/hcp-special-populations/preterm-infants/vaccine-specific-guidelines',
            label: 'Vaccine-specific guidelines',
          },
        ]}
      />
    </HcpGuidePageLayout>
  );
}
