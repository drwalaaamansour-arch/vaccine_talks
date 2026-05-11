import Header from '@/components/Header';

export default function VaccineSpecificGuidelines() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="hero">
        <h1 className="hero-title animate-fade-in-up">
          Vaccine
          <br />
          Talk
        </h1>

        <p className="hero-subtitle animate-fade-in-up animate-delay-1">
          (Egyptian Edition)
        </p>

        <div className="hero-quote animate-fade-in-up animate-delay-2">
          <p>"Everything you need to know about</p>
          <p>vaccines in Egypt"</p>
        </div>
      </main>

      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
              <h2 className="about-lang-title" style={{ textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center', color: '#40606D' }}>
                Vaccine-Specific Guidelines
              </h2>

              <div style={{ padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box' }}>
                <h4 style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr' }}>BCG Vaccine</h4>
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

              <div style={{ padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box' }}>
                <h4 style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr' }}>Hepatitis B Vaccine (HBV)</h4>
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

              <div style={{ padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box' }}>
                <h4 style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr' }}>RSV Disease and Prophylaxis</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>Vaccine:</strong> No licensed vaccine for infants as of date.
                  </li>
                  <li>Only Monoclonal Antibody recommended for high-risk infants, based on local epidemiology and guidelines.</li>
                </ul>
              </div>

              <div style={{ padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box' }}>
                <h4 style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr' }}>Pneumococcal Vaccines</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>Schedule:</strong> Start at 2 months chronological age, regardless of gestational age, using PCV13 or PCV15.
                  </li>
                  <li>
                    <strong>Additional Doses:</strong> High-risk infants (e.g., chronic lung disease) may require extra doses or PPSV23 after 2 years old.
                  </li>
                </ul>
              </div>

              <div style={{ padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box' }}>
                <h4 style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr' }}>Rotavirus Vaccine</h4>
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

              <div style={{ padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box' }}>
                <h4 style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr' }}>Seasonal Influenza Vaccine</h4>
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

              <div style={{ padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box' }}>
                <h4 style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr' }}>DTP-containing Vaccines</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>Schedule:</strong> Initiate at 2 months chronological age; follow standard schedule (2, 4, 6 months) with boosters as per guidelines.
                  </li>
                  <li>
                    <strong>Preterm Considerations:</strong> Monitor for apnea or bradycardia, especially in infants &lt;28 weeks gestation.
                  </li>
                </ul>
              </div>

              <div style={{ padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box' }}>
                <h4 style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr' }}>Meningococcal Vaccines</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>Use conjugate vaccines rather than polysaccharide formulations.</li>
                  <li>The Four-Component meningococcal B (4CMenB) vaccine is regularly included in the immunization schedule of various countries. However, when giving the primary immunization series to very preterm infants (≤28 weeks of gestation), especially those with a history of respiratory immaturity, the potential risk of apnea and the need for 48–72 h of respiratory monitoring should be taken into account. As the benefit of vaccination is high in this group of infants, vaccination should not be withheld or delayed.</li>
                  <li>Stable premature infants should receive the conjugate meningococcal vaccine at the same chronological age and schedule as full-term infants.</li>
                </ul>
              </div>

              <div style={{ padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box' }}>
                <h4 style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr' }}>Haemophilus influenzae Type b (Hib)</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>Schedule:</strong> Combined vaccines preferred; start at 2 months chronological age.
                  </li>
                  <li>
                    <strong>Extra Doses:</strong> Consider an additional dose for infants &lt;1,500 g or &lt;28 weeks gestation if local guidelines recommend.
                  </li>
                </ul>
              </div>

              <div style={{ padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box' }}>
                <h4 style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr' }}>Poliovirus Vaccines</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>IPV Schedule:</strong> Follow standard inactivated polio vaccine (IPV) schedule starting at 2 months chronological age.
                  </li>
                  <li>
                    <strong>OPV Avoidance:</strong> Do not administer oral polio vaccine (OPV) in neonatal intensive care units (NICU) due to risk of vaccine-derived transmission.
                  </li>
                </ul>
              </div>

              <div style={{ padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box' }}>
                <h4 style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr' }}>MMR and Varicella Vaccines</h4>
                <ul style={{ direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8 }}>
                  <li>
                    <strong>Schedule:</strong> Administer at 12 months chronological age, regardless of gestational age, provided the infant is clinically stable.
                  </li>
                  <li>
                    <strong>Efficacy:</strong> Evidence supports adequate immune response in preterm infants.
                  </li>
                </ul>
              </div>

              <div style={{ padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box' }}>
                <h4 style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr' }}>Special Considerations</h4>
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

              <div style={{ padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(64, 96, 109, 0.08)', border: '2px solid rgba(64, 96, 109, 0.25)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.1)', width: '100%', boxSizing: 'border-box' }}>
                <h4 style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr' }}>Conclusion</h4>
                <p className="about-lang-intro" style={{ direction: 'ltr', textAlign: 'left', marginBottom: 0, lineHeight: 1.8 }}>
                  Vaccination of preterm and low birth weight infants is both safe and essential, with most schedules closely mirroring those for full-term infants but with specific modifications for timing, safety monitoring, and special risk factors. Individualized assessment is important, particularly for infants with chronic conditions, immunosuppression, or significant maternal exposures. Ongoing research and surveillance are needed to refine recommendations and ensure optimal protection for this vulnerable population.
                </p>
              </div>

              <h2 className="about-lang-title" style={{ textAlign: 'center', fontSize: '2rem', alignSelf: 'center', color: '#40606D', marginTop: '2.5rem', marginBottom: '1rem' }}>
                Final preterm consensus
              </h2>
              <div style={{ width: '100%', marginTop: '1rem' }}>
                <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                  <a
                    href="/vaccine-specific-guidelines.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '0.75rem 2rem',
                      background: '#40606D',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    View PDF in new tab / فتح PDF في نافذة جديدة
                  </a>
                </div>
                <object
                  data="/vaccine-specific-guidelines.pdf#toolbar=1"
                  type="application/pdf"
                  width="100%"
                  height="800px"
                  style={{ border: 'none', borderRadius: '8px', display: 'block' }}
                  aria-label="Final preterm consensus PDF"
                >
                  <iframe
                    src="/vaccine-specific-guidelines.pdf"
                    width="100%"
                    height="800px"
                    style={{ border: 'none', borderRadius: '8px' }}
                    title="Final preterm consensus PDF"
                  />
                  <p style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                    Your browser may not display the PDF here.{' '}
                    <a href="/vaccine-specific-guidelines.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#40606D', fontWeight: 600 }}>
                      Open or download the PDF
                    </a>
                    .
                  </p>
                </object>
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <a
                    href="/vaccine-specific-guidelines.pdf"
                    download="vaccine-specific-guidelines.pdf"
                    style={{
                      display: 'inline-block',
                      padding: '0.75rem 2rem',
                      background: '#40606D',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Download PDF / تحميل PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <p className="footer-text">I'm always looking for new and exciting opportunities. Let's connect.</p>
              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=100064747760120" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/walaa-adel-895009369" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/talkvaccine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@VaccineTalk" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@vaccine.talk?_r=1&_t=ZS-953xkGgjSh3" className="social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-section">
              <a href="/disclaimer" className="disclaimer-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Disclaimer
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="copyright-text">© 2025 Vaccine Talk – All rights reserved.</p>
            <p className="copyright-text">Content is original and may not be copied without permission.</p>
          </div>
          <div className="footer-policy">
            <a href="/copy" className="policy-link">
              Copyright & Content Policy
            </a>
            <span className="separator">|</span>
            <a href="/copy" className="policy-link arabic">
              حقوق النشر والاستخدام
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
