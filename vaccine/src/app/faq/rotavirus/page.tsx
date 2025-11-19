import Header from '@/components/Header';

export default function FAQRotavirus() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
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
      
      {/* Simple centered title */}
      <section style={{padding:'0.5rem 1rem 0'}}>
        <h2 className="about-lang-title" style={{textAlign:'center', fontSize:'2rem', margin:'0'}}>FAQ – Rotavirus</h2>
      </section>

      {/* Rotavirus FAQ content */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>
          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems:'flex-start'}}>
              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Why is it important to vaccinate against rotavirus? Isn't the disease benign?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Before rotavirus vaccines were available, rotavirus was the most common cause of severe gastroenteritis in infants and young children in the United States and worldwide. Almost all children were infected by age 5 years.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How is rotavirus spread?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Rotavirus is contagious and the infection is usually spread from person to person, through the fecal-oral route. Fecal-oral transmission occurs when bacteria or viruses found in the stool of one person are swallowed by another person. This can occur when small amounts of fecal matter may be found on surfaces such as toys, books, clothing, etc. and on the hands of parents or child-care providers; but are usually invisible. Rotavirus may also be transmitted through intake of fecally-contaminated water or food or by respiratory droplets that people sneeze, cough, drip, or exhale. Rates of the illness among children in developed and less developed countries are similar.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is it possible for adults to contract rotavirus? What are the symptoms in adults?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Rotavirus infection of adults is usually asymptomatic but may cause diarrheal illness. Outbreaks of diarrheal illness caused by rotavirus have been reported, especially among elderly persons living in retirement communities.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What are the recommendations for use of rotavirus vaccines?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Two rotavirus vaccines are available in the United States. RotaTeq (RV5; Merck) is recommended for routine oral administration for all infants as a 3-dose series. The usual schedule is at ages 2, 4, and 6 months. Rotarix (RV1; GlaxoSmithKline) is recommended as a 2-dose series at ages 2 and 4 months.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The minimum interval between doses of rotavirus vaccine is 4 weeks. The minimum age for the first dose is 6 weeks and the maximum age for dose #1 is 14 weeks 6 days. Vaccination should not be initiated for infants age 15 weeks 0 days or older because there are insufficient data on the safety of dose #1 in older infants. The maximum age for the last dose of rotavirus vaccine is 8 months and 0 days.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How do the two rotavirus vaccines differ?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The two rotavirus vaccine products differ in composition and schedule of administration. RotaTeq was approved by the Food and Drug Administration (FDA) in 2006. It contains five reassortant rotaviruses developed from human and bovine parent rotavirus strains; 3 doses are given in the series. Rotarix was approved by the FDA in 2008 and contains an attenuated human rotavirus strain; 2 doses are given in the series.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>According to the package inserts the maximum age for a dose of RotaTeq is 32 weeks and the maximum age for Rotarix is 24 weeks. According to ACIP recommendations the maximum age for a dose of rotavirus vaccine is 8 months 0 days. Eight months 0 days is older than age 24 weeks and may be older than age 32 weeks. Should I follow the package labels or the ACIP recommendation?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP recommendations and package inserts do not always match. Occasionally, ACIP may use different data to formulate its recommendations, or try to add flexibility to its recommendations (as was the case in this situation), which results in a recommendation different than the package insert. Published recommendations of national advisory groups (such as ACIP or AAP's Committee on Infectious Diseases) should be considered equally as authoritative as those on the package insert. You should consider 8 months 0 days as the maximum age for a dose of rotavirus vaccine.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can RotaTeq and Rotarix vaccines be used interchangeably? If so, what schedule should we follow?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP recommends that the rotavirus vaccine series be completed with the same product whenever possible. However, vaccination should not be deferred because the product used for a previous dose is not available or is unknown. In these situations, the provider should continue or complete the series with the product available. If any dose in the series was RotaTeq, or the vaccine product is unknown for any dose in the series, a total of 3 doses of rotavirus vaccine should be administered. The minimum interval between doses of rotavirus vaccine is 4 weeks. All doses should be administered by age 8 months and 0 days.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A child received the first rotavirus vaccine and later got laboratory-confirmed rotavirus diarrhea. Should we continue the vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP recommends that infants who have had rotavirus gastroenteritis before receiving the full series of rotavirus vaccination should still start or complete the schedule according to the age and interval recommendations because the initial rotavirus infection might provide only partial protection against subsequent rotavirus disease.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can preterm infants receive rotavirus vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP supports vaccination of preterm infants according to the same schedule and precautions as full-term infants and under the following conditions: if the infant's chronological age meets the age requirements for rotavirus vaccine (for example, age 6 weeks to 14 weeks 6 days for dose #1), the infant is clinically stable, and the vaccine is administered at the time of discharge from the hospital or after discharge from the hospital.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We have a 20-week-old infant who was born prematurely. The infant has never received rotavirus vaccine and is technically past the maximum age for first dose. Should we give rotavirus vaccine to this infant?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP recommends vaccination of preterm infants according to the same schedule and precautions as full-term infants. In preterm infants (as in full-term infants), the maximum chronological age for the first dose is 14 weeks 6 days. Vaccination should not be initiated for infants aged 15 weeks 0 days or older because of insufficient data on safety of dose 1 of rotavirus vaccine in older infants.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If we don't know which rotavirus vaccine an infant previously received, how should we complete the schedule?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If the product used for a previous dose is unknown, and the infant is at an age when the vaccine can still be given, give a total of 3 doses of rotavirus vaccine. All doses should be administered by age 8 months and 0 days.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If the first dose of rotavirus vaccine is inadvertently given to a child age 15 weeks 0 days or older, should the series be continued?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Infants for whom the first dose of rotavirus vaccine was inadvertently administered at age 15 weeks or older should receive the remaining doses of the series at the routinely recommended intervals. Timing of the first dose should not affect the safety and efficacy of the remaining doses. Rotavirus vaccine should not be given after age 8 months 0 days even if the series is incomplete.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Our experience has been that many babies who receive the oral rotavirus vaccine spit a lot of it out. We know not to give them more. But how can we be sure that the little they ingest is enough?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Try to follow general guidelines for oral administration of liquid vaccines. First, give this vaccine at the beginning of the office visit, while the baby is still happy, and before you administer injections or perform other procedures. Second, make every effort to aim the dropper containing the vaccine down one side and toward the back of the child's mouth. Don't put the dropper so far back that you gag the child.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can rotavirus vaccine be given via G-Tube? If so, is it okay to flush with normal saline or sterile water?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The manufacturer has not addressed this issue but CDC considers administration of rotavirus vaccine via gastrostomy tube to be acceptable practice. There should be no problem flushing the tube after vaccine has been administered.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is it okay to administer rotavirus vaccine and immune globulin at the same time?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. The effectiveness concerns with antibody-containing blood products (ACBP) do not apply to rotavirus vaccine, since it is administered orally and replication of the vaccine virus occurs in the GI tract, "separate" from the site of the ACBP. Note that the child should be carefully screened for other potential contraindications or precautions to vaccination since administration of immune globulin could indicate immunosuppression.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We received a report of an infant who received rotavirus vaccine intramuscularly rather than orally. Is this dose valid? If not, when should it be repeated?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The rotavirus vaccine dose given by the intramuscular route is not valid and should be repeated by the oral route as soon as possible. In a review of this type of rotavirus vaccine administration error, there usually were not adverse reactions, and those documented were limited to local reactions and general, brief irritability.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Should we warn parents/guardians to wash their hands after diaper changes, which they should be doing anyway, after the baby has received rotavirus vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Rotavirus vaccine virus is shed during the first weeks after administration of rotavirus vaccine. Handwashing after diaper changing is always recommended.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Which infants should not receive rotavirus vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Do not give rotavirus vaccine to an infant who has a history of a severe allergic reaction (for example, anaphylaxis) after a previous dose of rotavirus vaccine or to a vaccine component. The oral applicator for Rotarix contains natural latex rubber so infants with a severe (anaphylactic) allergy to latex should not be given Rotarix; the RotaTeq (Merck) dosing tube is latex-free. Rotavirus vaccine is contraindicated in infants with the rare disorder severe combined immunodeficiency (SCID) and in infants with a history of intussusception.<br />
              Practitioners should consider the potential risks and benefits of administering rotavirus vaccine to infants with known or suspected altered immunocompetence, including those whose mothers received immunosuppressive biologics (such as infliximab) during pregnancy. Consultation with an immunologist or infectious diseases specialist is advised.<br />
              Children and adults who are immunocompromised because of congenital immunodeficiency, hematopoietic stem cell transplantation, or solid organ transplantation sometimes experience severe or prolonged rotavirus gastroenteritis. However, few safety or efficacy data are available for the administration of rotavirus vaccine to infants who are immunocompromised or potentially immunocompromised, including 1) infants with primary and acquired immunodeficiency, cellular immunodeficiency, and hypogammaglobulinemia and dysgammaglobulinemia; 2) infants with blood dyscrasias, leukemia, lymphomas, or other malignant neoplasms affecting the bone marrow or lymphatic system; 3) infants on immunosuppressive therapy (including high-dose systemic corticosteroids); and 4) infants who are HIV-exposed or infected.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A woman in our practice received infliximab (Remicade, Janssen Pharmaceuticals) for treatment of Crohn's Disease while she was pregnant. Should we modify her infant's vaccination schedule because of this treatment?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Infliximab is an IgG monoclonal antibody that neutralizes the biological activity of tumor necrosis factor-alpha. Like other IgG antibodies infliximab crosses the placenta. Infliximab has been detected in the blood of infants up to 6 months following birth. Consequently, these infants may be at increased risk of serious infection.<br />
              Neither ACIP nor CDC provides specific guidance on this issue because there are few data on safety or efficacy in children exposed to potentially immunosuppressive biologics during pregnancy. As noted above, practitioners should consider the potential risks and benefits of administering rotavirus vaccine to infants with known or suspected altered immunocompetence. Consultation with an immunologist or infectious diseases specialist is advised.<br />
              The manufacturer recommends that live vaccines (rotavirus and BCG) be deferred for at least six months after birth for infants whose mothers received infliximab during pregnancy. Hence, if a practitioner follows the manufacturer's recommendation the child would not be eligible to receive rotavirus vaccine because according to ACIP guidelines the rotavirus vaccine series should not to be started after age 15 weeks 0 days.<br />
              Inactivated vaccines should be given on schedule.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can rotavirus vaccine be given to an infant who has an immunosuppressed household contact?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Having an immunocompromised household contact is not usually a reason for delaying routine vaccination for others in the household. Rotavirus vaccine should be administered to susceptible household contacts and other close contacts of immunocompromised patients when indicated. All members of the household should wash their hands after changing the diaper of an infant. This minimizes rotavirus transmission from an infant who received rotavirus vaccine.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Have the current rotavirus vaccines been associated with intussusception?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Large pre-licensure clinical trials of both RotaTeq and Rotarix did not find an increased risk for intussusception among vaccine recipients. A large post-licensure study of more than 1.2 million rotavirus vaccine recipients found a very small increased risk of intussusception (1 to 1.5 additional cases of intussusception per 100,000 vaccinated infants) in the 7 to 21 days following the first dose. No increased risk of intussusception was found after the second or third doses. CDC and the Food and Drug Administration (FDA) continue to believe that the benefits of rotavirus vaccination outweigh the risks associated with vaccination and that routine vaccination of infants should continue.<br />
              A study conducted by the CDC Vaccine Safety Datalink (VSD) between May 2006 to February 2010 found no increased risk of intussusception following vaccination with RotaTeq. However, the study indicated an increased risk of intussusception following dose 1 and dose 2 of Rotarix. CDC estimates that there is a small increased risk of intussusception, usually within the first week after dose 1 or dose 2 of rotavirus vaccine, resulting in one additional case for every 20,000 to 100,000 U.S. infants who receive the vaccine.</p>
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
                <a href="https://www.facebook.com/profile.php?id=100064747760120" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://www.instagram.com/talkvaccine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                <a href="https://www.youtube.com/@VaccineTalk" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
              </div>
            </div>
            <div className="footer-section"><a href="/disclaimer" className="disclaimer-btn" style={{textDecoration: "none", display: "inline-block"}}>Disclaimer</a></div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright"><p className="copyright-text">© 2025 Vaccine Talk – All rights reserved.</p><p className="copyright-text">Content is original and may not be copied without permission.</p></div>
          <div className="footer-policy"><a href="/copy" className="policy-link">Copyright & Content Policy</a><span className="separator">|</span><a href="/copy" className="policy-link arabic">حقوق النشر والاستخدام</a></div>
        </div>
      </footer>
    </div>
  );
}
