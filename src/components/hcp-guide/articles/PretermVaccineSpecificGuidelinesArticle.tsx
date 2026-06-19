import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';

const TOC = [
  { id: 'bcg', label: 'BCG' },
  { id: 'hepatitis-b', label: 'Hepatitis B' },
  { id: 'rsv', label: 'RSV' },
  { id: 'pneumococcal', label: 'Pneumococcal' },
  { id: 'rotavirus', label: 'Rotavirus' },
  { id: 'influenza', label: 'Influenza' },
  { id: 'dtp', label: 'DTP-containing' },
  { id: 'meningococcal', label: 'Meningococcal' },
  { id: 'hib', label: 'Hib' },
  { id: 'polio', label: 'Poliovirus' },
  { id: 'mmr-varicella', label: 'MMR & varicella' },
  { id: 'special', label: 'Special considerations' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'consensus-pdf', label: 'Consensus PDF' },
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

const PRETERM_CONSENSUS_PDF = '/vaccine-specific-guidelines.pdf';

export default function PretermVaccineSpecificGuidelinesArticle() {
  return (
    <HcpGuidePageLayout
      bilingual
      metaKey="hcpPretermVaccineGuidelines"
      title="Vaccine-specific guidelines"
      emoji="📋"
      lead="Vaccine-by-vaccine guidance for preterm and low birth weight infants."
      backHref="/hcp-special-populations/preterm-infants"
      backLabel="← Preterm infants"
      toc={[...TOC]}
    >
      <div className="hcp-guide-hsct" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
              <div id="bcg" style={boxStyle}>
                <h4 style={h4Style}>BCG Vaccine</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>BCG vaccination should be given at birth to clinically stable preterm infants born at ≥34 weeks and weighing ≥2,000 g.</li>
                  <li>For stable preterm infants ≥2,000 g, BCG can be given before discharge. Delay BCG if &lt;2,000 g until weight reaches 2,000 g, unless there is a high risk of TB exposure.</li>
                  <li>
                    <strong>HIV Exposure:</strong> Avoid in known HIV-infected infants; consider in HIV-exposed but uninfected infants after risk assessment.
                  </li>
                  <li>It is advisable to delay BCG vaccination for at least 7 months for mothers undergoing treatment with immunosuppressive IgG1 antibodies or anti-TNF therapies.</li>
                  <li>
                    <strong>Comparison:</strong> Full-term infants usually receive BCG at birth.
                  </li>
                </ul>
              </div>

              <div style={boxStyle}>
                <h4 style={h4Style}>Hepatitis B Vaccine (HBV)</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>Maternal HBsAg Negative:</strong> Infants ≥2,000 g: first dose at birth; &lt;2,000 g: delay until 1 month or hospital discharge.
                  </li>
                  <li>
                    <strong>Maternal HBsAg Positive/Unknown:</strong> All infants: HBV vaccine and HBIG within 12 hours, regardless of weight; those &lt;2,000 g need 3 additional doses (total 4 doses).
                  </li>
                  <li>
                    <strong>Follow-Up:</strong> Post-vaccination serology at 9–12 months or 1–2 months after last dose to confirm immunity.
                  </li>
                </ul>
              </div>

              <div style={boxStyle}>
                <h4 style={h4Style}>RSV Disease and Prophylaxis</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>Vaccine:</strong> No licensed vaccine for infants as of date.
                  </li>
                  <li>Only Monoclonal Antibody recommended for high-risk infants, based on local epidemiology and guidelines.</li>
                </ul>
              </div>

              <div style={boxStyle}>
                <h4 style={h4Style}>Pneumococcal Vaccines</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>Schedule:</strong> Start at 2 months chronological age, regardless of gestational age, using PCV13 or PCV15.
                  </li>
                  <li>
                    <strong>Additional Doses:</strong> High-risk infants (e.g., chronic lung disease) may require extra doses or PPSV23 after 2 years old.
                  </li>
                </ul>
              </div>

              <div style={boxStyle}>
                <h4 style={h4Style}>Rotavirus Vaccine</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>Contraindications:</strong> Include a history of intussusception, severe immunodeficiency, or other relevant conditions. The oral live attenuated rotavirus vaccine should not be given to preterm infants with suspected immunodeficiency or if their mothers received biologics during pregnancy.
                  </li>
                  <li>
                    <strong>Timing:</strong> First dose before 15 weeks of age (according to chronological age).
                  </li>
                  <li>
                    <strong>Hospitalization:</strong> According to both Canadian and American guidelines, rotavirus vaccination should be administered to infants, including those born preterm, only after they have been discharged from the hospital. Studies indicate that nearly all vaccinated infants experience viral shedding, predominantly within the first week following the initial dose.
                  </li>
                  <li>
                    <strong>Safety:</strong> Data support safety in stable preterm infants.
                  </li>
                </ul>
              </div>

              <div style={boxStyle}>
                <h4 style={h4Style}>Seasonal Influenza Vaccine</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>Risk:</strong> Preterm infants, especially with chronic conditions, are at higher risk for severe influenza.
                  </li>
                  <li>
                    <strong>Schedule:</strong> Start at 6 months of age (chronological); two doses separated by at least 4 weeks for first season.
                  </li>
                  <li>
                    <strong>Maternal Vaccination:</strong> Strongly recommended during pregnancy to protect infants in the first months of life.
                  </li>
                </ul>
              </div>

              <div style={boxStyle}>
                <h4 style={h4Style}>DTP-containing Vaccines</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>Schedule:</strong> Initiate at 2 months chronological age; follow standard schedule (2, 4, 6 months) with boosters as per guidelines.
                  </li>
                  <li>
                    <strong>Preterm Considerations:</strong> Monitor for apnea or bradycardia, especially in infants &lt;28 weeks gestation.
                  </li>
                </ul>
              </div>

              <div style={boxStyle}>
                <h4 style={h4Style}>Meningococcal Vaccines</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>Use conjugate vaccines rather than polysaccharide formulations.</li>
                  <li>The Four-Component meningococcal B (4CMenB) vaccine is regularly included in the immunization schedule of various countries. However, when giving the primary immunization series to very preterm infants (≤28 weeks of gestation), especially those with a history of respiratory immaturity, the potential risk of apnea and the need for 48–72 h of respiratory monitoring should be taken into account. As the benefit of vaccination is high in this group of infants, vaccination should not be withheld or delayed.</li>
                  <li>Stable premature infants should receive the conjugate meningococcal vaccine at the same chronological age and schedule as full-term infants.</li>
                </ul>
              </div>

              <div style={boxStyle}>
                <h4 style={h4Style}>Haemophilus influenzae Type b (Hib)</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>Schedule:</strong> Combined vaccines preferred; start at 2 months chronological age.
                  </li>
                  <li>
                    <strong>Extra Doses:</strong> Consider an additional dose for infants &lt;1,500 g or &lt;28 weeks gestation if local guidelines recommend.
                  </li>
                </ul>
              </div>

              <div style={boxStyle}>
                <h4 style={h4Style}>Poliovirus Vaccines</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>IPV Schedule:</strong> Follow standard inactivated polio vaccine (IPV) schedule starting at 2 months chronological age.
                  </li>
                  <li>
                    <strong>OPV Avoidance:</strong> Do not administer oral polio vaccine (OPV) in neonatal intensive care units (NICU) due to risk of vaccine-derived transmission.
                  </li>
                </ul>
              </div>

              <div style={boxStyle}>
                <h4 style={h4Style}>MMR and Varicella Vaccines</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>Schedule:</strong> Administer at 12 months chronological age, regardless of gestational age, provided the infant is clinically stable.
                  </li>
                  <li>
                    <strong>Efficacy:</strong> Evidence supports adequate immune response in preterm infants.
                  </li>
                </ul>
              </div>

              <div style={boxStyle}>
                <h4 style={h4Style}>Special Considerations</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>Chronic Medical Conditions:</strong> Adjust schedules or provide additional vaccines for infants with chronic lung, heart, or renal disease.
                  </li>
                  <li>
                    <strong>Immunosuppression:</strong> Avoid live vaccines (e.g., BCG, MMR, varicella) in immunocompromised infants; follow specialist guidance.
                  </li>
                  <li>
                    <strong>Maternal Medication Exposures:</strong> Review maternal medications (e.g., biologics, immunosuppressants) that may affect infant eligibility for live vaccines.
                  </li>
                </ul>
              </div>

              <div id="conclusion" style={{ ...boxStyle, background: 'rgba(64, 96, 109, 0.08)', border: '2px solid rgba(64, 96, 109, 0.25)' }}>
                <h4 style={h4Style}>Conclusion</h4>
                <p className="about-lang-intro" style={{ direction: 'ltr', textAlign: 'left', marginBottom: 0, lineHeight: 1.8 }}>
                  Vaccination of preterm and low birth weight infants is both safe and essential, with most schedules closely mirroring those for full-term infants but with specific modifications for timing, safety monitoring, and special risk factors. Individualized assessment is important, particularly for infants with chronic conditions, immunosuppression, or significant maternal exposures. Ongoing research and surveillance are needed to refine recommendations and ensure optimal protection for this vulnerable population.
                </p>
              </div>

        <div id="consensus-pdf">
          <HcpGuidePdfEmbed src={PRETERM_CONSENSUS_PDF} title="Final preterm consensus" />
        </div>
      </div>
    </HcpGuidePageLayout>
  );
}
