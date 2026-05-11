import Header from '@/components/Header';

export default function PretermInfants() {
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
            <div className="about-lang" style={{alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center', color: '#40606D'}}>
                Preterm infants
              </h2>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Overview</h4>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: 0, lineHeight: 1.8}}>
                  Vaccination is a cornerstone of preventive pediatric care, offering protection against infectious diseases that pose significant risks to infants, especially those born preterm. Preterm infants, due to their unique physiological and immunological profiles, face heightened vulnerability to infections and complications. Ensuring optimal immunization in this population requires a nuanced understanding of their needs, risk factors, and best practices. This article presents an evidence-based approach to vaccination in preterm infants, tailored for healthcare professionals and pediatricians in Egypt.
                </p>
              </div>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Definitions and Epidemiology</h4>
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

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Immunological Considerations in Preterm Infants</h4>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: 0, lineHeight: 1.8}}>
                  Preterm infants exhibit immature immune systems, characterized by reduced transplacental transfer of maternal antibodies, impaired cellular and humoral responses, and increased susceptibility to infections. This immaturity necessitates timely and appropriate vaccination to mitigate risks of severe disease, hospitalization, and mortality. Evidence shows that while antibody responses may be lower compared to term infants, most preterm infants develop adequate protection following standard immunization schedules.
                </p>
              </div>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Vaccination Schedules and Timing</h4>
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

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Risks and Adverse Events</h4>
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

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Management Strategies for Vaccination in Preterm Infants</h4>
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

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Evidence from Clinical Studies</h4>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: 0, lineHeight: 1.8}}>
                  Randomized controlled trials and observational studies have demonstrated that routine immunizations are safe and effective in preterm infants. Although seroconversion rates may be lower for some vaccines in extremely preterm or low birth weight infants, protective immunity is achieved in the majority. Studies confirm no increased risk of severe adverse events, and transient apnoea/bradycardia episodes do not lead to long-term sequelae. Early vaccination reduces the incidence of vaccine-preventable diseases and associated hospitalizations.
                </p>
              </div>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Special Considerations</h4>
                <ul style={{direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8}}>
                  <li><strong>Bronchopulmonary Dysplasia (BPD):</strong> Infants with chronic lung disease should receive routine vaccinations; post-vaccination monitoring may be extended due to increased risk of respiratory events.</li>
                  <li><strong>Hospitalized Infants:</strong> Vaccination should not be delayed solely due to hospitalization; stable infants can be immunized in the neonatal unit.</li>
                  <li><strong>Chronic Conditions:</strong> Preterm infants with additional comorbidities (e.g., congenital heart disease, immunodeficiency) may require tailored vaccine schedules and closer follow-up.</li>
                </ul>
              </div>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Family and Caregiver Immunization</h4>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: 0, lineHeight: 1.8}}>
                  Immunizing household contacts and caregivers is critical in protecting preterm infants, who are particularly susceptible to severe infections. Family members should be up-to-date on influenza, pertussis, and other recommended vaccines. The &quot;cocooning&quot; strategy reduces transmission risk and enhances community immunity, offering indirect protection to the infant.
                </p>
              </div>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(64, 96, 109, 0.08)', border: '2px solid rgba(64, 96, 109, 0.25)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.1)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Conclusion</h4>
                <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', marginBottom: 0, lineHeight: 1.8}}>
                  Vaccination of preterm infants is both safe and essential. Healthcare providers should adhere to chronological age-based schedules, monitor for transient adverse events, and prioritize early immunization. Individualized care for infants with respiratory instability or chronic conditions, combined with family immunization, optimizes protection and outcomes. Ongoing education and vigilance remain key to improving immunization coverage and safeguarding the health of Egypt&apos;s vulnerable preterm population.
                </p>
              </div>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>Practical Guidance for Healthcare Providers</h4>
                <ul style={{direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.8}}>
                  <li>Follow chronological age for vaccine scheduling, except for HBV in select low birth weight cases.</li>
                  <li>Monitor high-risk infants for 48–72 hours post-vaccination for apnoea/bradycardia.</li>
                  <li>Use appropriate injection site and needle length; avoid compromised skin.</li>
                  <li>Educate families on vaccine benefits and the importance of caregiver immunization.</li>
                  <li>Document and manage any adverse events promptly.</li>
                </ul>
              </div>

              <div style={{padding: '1.5rem 2rem', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.75)', border: '2px solid rgba(64, 96, 109, 0.15)', boxShadow: '0 4px 20px rgba(64, 96, 109, 0.08)', width: '100%', boxSizing: 'border-box', fontSize: '0.875rem'}}>
                <h4 style={{textAlign: 'left', fontSize: '1.25rem', fontWeight: 600, color: '#40606D', marginTop: 0, marginBottom: '0.75rem', direction: 'ltr'}}>References</h4>
                <ul style={{direction: 'ltr', textAlign: 'left', marginLeft: '1.5rem', marginBottom: 0, lineHeight: 1.9, fontSize: '0.875rem'}}>
                  <li>
                    Australian Government. Vaccination for preterm infants. Immunisation Handbook.{' '}
                    <a href="https://immunisationhandbook.health.gov.au/contents/vaccination-for-special-risk-groups/vaccination-for-preterm-infants" target="_blank" rel="noopener noreferrer" style={{color: '#40606D', fontWeight: 600, textDecoration: 'underline'}}>https://immunisationhandbook.health.gov.au/contents/vaccination-for-special-risk-groups/vaccination-for-preterm-infants</a>
                  </li>
                  <li>
                    Springer. Preterm infant vaccination (via link).{' '}
                    <a href="https://url.de.m.mimecastprotect.com/s/Ah1HC79EKVt1r3N0yH8f9Fo6Zu7?domain=link.springer.com" target="_blank" rel="noopener noreferrer" style={{color: '#40606D', fontWeight: 600, textDecoration: 'underline'}}>link.springer.com</a>
                  </li>
                  <li>
                    CDC. Special situations. Vaccine best practices for healthcare providers.{' '}
                    <a href="https://www.cdc.gov/vaccines/hcp/imz-best-practices/special-situations.html" target="_blank" rel="noopener noreferrer" style={{color: '#40606D', fontWeight: 600, textDecoration: 'underline'}}>https://www.cdc.gov/vaccines/hcp/imz-best-practices/special-situations.html</a>
                  </li>
                </ul>
              </div>

              <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginTop: '1rem', marginBottom: '1.5rem'}}>
                <a
                  href="/hcp-documents/preterm"
                  style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '720px',
                    textAlign: 'center',
                    padding: '1rem 1.5rem',
                    background: '#40606D',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                  }}
                >
                  Preterm infants documents
                </a>
                <a
                  href="/hcp-special-populations/preterm-infants/vaccine-specific-guidelines"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '720px',
                    textAlign: 'center',
                    padding: '1rem 1.5rem',
                    background: '#40606D',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                  }}
                >
                  Vaccine-Specific Guidelines
                </a>
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
              <p className="footer-text">
                I'm always looking for new and exciting opportunities. Let's connect.
              </p>
              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=100064747760120" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/walaa-adel-895009369" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/talkvaccine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.youtube.com/@VaccineTalk" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@vaccine.talk?_r=1&_t=ZS-953xkGgjSh3" className="social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg></a>
              </div>
            </div>
            <div className="footer-section">
              <a href="/disclaimer" className="disclaimer-btn" style={{textDecoration: "none", display: "inline-block"}}>Disclaimer</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="copyright-text">© 2025 Vaccine Talk – All rights reserved.</p>
            <p className="copyright-text">Content is original and may not be copied without permission.</p>
          </div>
          <div className="footer-policy">
            <a href="/copy" className="policy-link">Copyright & Content Policy</a>
            <span className="separator">|</span>
            <a href="/copy" className="policy-link arabic">حقوق النشر والاستخدام</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
