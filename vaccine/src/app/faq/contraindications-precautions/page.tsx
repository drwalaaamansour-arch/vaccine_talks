import Header from '@/components/Header';

export default function FAQContraindicationsPrecautions() {
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
        <h2 className="about-lang-title" style={{textAlign:'center', fontSize:'2rem', margin:'0'}}>FAQ – Contraindications & Precautions</h2>
      </section>

      {/* Contraindications & Precautions FAQ content */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>
          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems:'flex-start'}}>
              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What is the difference between a contraindication and a precaution?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>A contraindication is a condition in a recipient that increases the risk for a serious adverse reaction to vaccination and is a condition under which vaccines should not be administered. In addition to contraindications found in prescribing information, ACIP may recommend against the use of a vaccine under certain conditions (e.g., a lack of data).</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>A precaution is a condition in a recipient that might increase the risk for a serious adverse reaction, might cause diagnostic confusion, or might compromise the ability of the vaccine to produce immunity. For example, not vaccinating a person who is moderately or severely acutely ill avoids diagnostic confusion between the underlying illness and side effects of vaccination. Vaccination may be deferred if a precaution is present, although a vaccination might be indicated in the presence of a precaution if the benefit of protection from the vaccine outweighs the risk for an adverse reaction.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is hospitalization or surgery a contraindication to vaccination?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. Hospitalization should be used as an opportunity to provide recommended vaccinations. Hospitalized patients who are not moderately or severely acutely ill may be vaccinated during hospitalization or at discharge. Current, recent or upcoming anesthesia, surgery or hospitalization are not contraindications to vaccination, although certain factors may lead a healthcare provider to consider these situations a precaution to vaccination for a specific patient.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I am a pharmacist who administers vaccines. I was recently told by a colleague that pregnant healthcare personnel were not to administer live vaccines to others. I had never heard that in school or practice. Is that true?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>This is not true. Pregnant healthcare personnel may administer any vaccine except the live, replication-competent smallpox vaccine (ACAM2000, Emergent Biosolutions).</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Do we need to check vital signs before giving vaccines?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. ACIP does not recommend routinely checking a patient's temperature or other vital signs before vaccination. Requiring these extra steps can be a barrier to immunization.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We frequently see patients who are febrile or have an acute illness and are due for vaccinations. We are uncertain if we should withhold the vaccines or not. What do you advise?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>A "moderate or severe acute illness" is a precaution for administering any vaccine. A mild acute illness (e.g., diarrhea or mild upper-respiratory tract infection) with or without fever is not a precaution, and vaccines may be given. The concern in vaccinating someone with moderate or severe illness is that a fever following the vaccine could complicate management of the concurrent illness – it could be difficult to determine if the fever was from the vaccine or due to the concurrent illness. In deciding whether to vaccinate a patient with moderate or severe illness, the clinician needs to determine if deferring vaccination will increase the patient's risk of vaccine-preventable diseases, as is the case if the patient is unlikely to return for vaccination or to seek vaccination elsewhere.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Should you administer vaccine to a child who is taking antibiotics?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Treatment with antibiotics is not a valid reason to defer vaccination. If the child or adult is otherwise well, or has only a minor illness, vaccines should be administered. But if the person has a moderate or severe acute illness (regardless of antibiotic use) vaccination may be deferred until the person's condition has improved.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Should I vaccinate a child who has recently been exposed to an infectious disease? What about a child who is convalescing from illness? What about COVID-19?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>In general, neither exposure to or recovery from an infectious disease is a contraindication or precaution to vaccination. In particular, recovery from varicella (chickenpox) is not a reason to withhold a live vaccine, such as MMR.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>COVID-19 is the exception to this general rule. CDC recommends that routine vaccination should be deferred for persons with suspected or confirmed COVID-19, regardless of symptoms, until criteria have been met for them to discontinue isolation. The reason for this exception is that vaccination visits for these individuals should be postponed to avoid exposing healthcare personnel and other patients to the virus that causes COVID-19.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is it necessary to routinely obtain a pregnancy test before administering any vaccines to young women?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. Pregnancy tests prior to vaccination are not routinely recommended. However, patients of childbearing age should be asked about the possibility of their being pregnant prior to being given any vaccine for which pregnancy is a contraindication or precaution. The patient's answer should be documented in the medical record. If the patient responds that they believe they may be pregnant, a test should be performed before administering vaccines not recommended or contraindicated in pregnancy.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is it acceptable practice to administer MMR, Tdap, and influenza vaccines to a postpartum mom who received RhoGam after delivery?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Receipt of RhoGam is not a reason to delay vaccination.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>For how long should a person of child-bearing age avoid pregnancy after receiving a live attenuated vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Due to theoretical risk to the developing fetus, ACIP recommends that pregnancy be avoided for four weeks after receiving a live attenuated vaccine (MMR, varicella, live attenuated influenza, yellow fever). This interval may be shorter than that recommended by the manufacturer.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Which vaccines are contraindicated if a child's mother or other household member is pregnant?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Having a pregnant person in a household, including the child's mother, is not a contraindication to administration of any routinely recommended vaccine. Pregnant people should not have close contact with anyone who has recently (within the last 28 days) received the live, replication-competent smallpox vaccine (ACAM2000, Emergent Biosolutions).</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Which vaccines can be given to people who are breastfeeding?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                All vaccines except the live, replication-competent smallpox vaccine (ACAM2000, Emergent Biosolutions) and yellow fever vaccine may be given to people who are breastfeeding.<br />
                ACAM2000 is contraindicated due to the theoretical risk of contact transmission of the vaccine virus from mother to child.<br />
                The only yellow fever (YF) vaccine licensed in the United States (YF-Vax, Sanofi) is contraindicated in people who are breastfeeding infants younger than 9 months of age. There have been three case reports of YF vaccine-associated encephalitis in infants under one month of age who were being exclusively breastfed at the time the mother received YF vaccine. ACIP currently recommends that people who are breastfeeding should be advised to postpone travel to YF endemic or epidemic regions; however, if travel cannot be avoided or postponed, the breastfeeding parent should receive YF vaccine. Although there are no data, some experts recommend that breastfeeding people who receive YF vaccine should temporarily suspend breastfeeding, pump, and discard pumped milk for at least 2 weeks after vaccination before resuming breastfeeding.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>The Vaccine Information Statement for inactivated influenza vaccine states that you should not get the vaccine if you are severely allergic to antibiotics. Which antibiotics are they referring to?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The antibiotics, of which there are trace amounts in some influenza vaccines, are neomycin, gentamicin, and polymyxin B. You should check each product's package insert information to see which, if any, antibiotics are listed.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>For which vaccines is an egg allergy a contraindication?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yellow fever is contraindicated for people who have a history of a severe (anaphylactic) allergy to eggs.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP and CDC no longer consider egg allergy of any severity to be a contraindication or precaution to egg-based influenza vaccines. A person with egg allergy of any severity may receive any influenza vaccine that is appropriate for the person's age and health status. When administering an egg-based influenza vaccine to a person with egg allergy of any severity, no additional safety precautions are needed, beyond those recommended when administering any vaccine to any recipient.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is egg allergy a contraindication for MMR?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Allergy to egg is not a contraindication for MMR vaccine. Although measles and mumps vaccines are grown in chick embryo tissue culture, several studies have documented the safety of these vaccines in children with severe egg allergy.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What is a latex allergy and why should we be concerned?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Latex is a product of the rubber tree. It is processed and used in various products, including some that come in contact with vaccines. Latex may be present in syringe plungers, vial stoppers, or in the tip caps on prefilled syringes. Some people develop sensitivity to latex, particularly if they have had significant cumulative latex exposure, such as from repeated surgeries early in life or employment in the healthcare industry.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The most common type of latex sensitivity is contact-type allergy; however, on rare occasions, severe (anaphylactic) allergy occurs. People with a history of anaphylactic reactions to latex should generally not be given vaccines that have been in contact with natural rubber or latex, either in the vial or in the syringe, unless the benefit of vaccination outweighs the risk of a potential allergic reaction. People with latex allergies that are not anaphylactic in nature may be vaccinated as usual.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Do any or all vial stoppers still contain latex?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Not all stoppers in vaccine vials contain latex. Some manufacturers have switched to synthetic rubber-like materials that do not contain rubber latex or dry natural rubber. The best approach is to check the package insert, which will indicate if the packaging contains latex. Also, remember that prefilled syringes could contain natural rubber in the plunger, in the needle cover, or in the tip cap. This information is also supplied in the package insert.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is there any reason to delay or adjust the immunization schedule for children with Down syndrome?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. Children with Down syndrome should receive all indicated vaccines on the recommended schedule. These children are often at greater risk for complications from vaccine-preventable diseases than are children without Down syndrome.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Should vaccines be withheld for patients on steroids?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Steroid treatment, and possible immunosuppression, is primarily a concern with live virus vaccines. Steroid therapy that is short term (less than 2 weeks); alternate-day; physiologic replacement; topical (skin or eyes); aerosol; or given by intra-articular, bursal, or tendon injection are not considered contraindications to the use of live virus vaccines. The immunosuppressive effects of corticosteroid treatment vary, but many clinicians consider a dose equivalent to either 2 mg/kg of body weight or a total of 20 mg per day of prednisone (or equivalent) for 2 or more weeks as sufficiently immunosuppressive to raise concern about the safety of vaccination with live virus vaccines (e.g., MMR, varicella, live attenuated influenza, yellow fever). Providers should wait at least 1 month after discontinuation of therapy or reduction of dose before administering a live virus vaccine to patients who have received high systemically absorbed doses of corticosteroids for 2 weeks or more. Inactivated vaccines and toxoids can be administered to all immunocompromised patients in usual doses and schedules, although the response to these vaccines may be suboptimal.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Do people who received chemotherapy need their vaccines repeated?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Vaccines received before starting chemotherapy generally do not need to be repeated after chemotherapy is completed. Chemotherapy does not negate vaccine-induced immunity. However, revaccination is recommended for people who are recipients of a hematopoietic cell transplant (HCT), such as a bone marrow transplant, because immunity present before the transplant is lost and may not be replaced by donor cells.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I have a healthy 5-year-old patient whose close household contact (her mother) is immunocompromised due to cancer chemotherapy. Can I administer live vaccines to the healthy child?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Household contacts and other close contacts of people who are immunocompromised (due to a disease, or treatment for a disease) should receive all routinely recommended vaccines, with the exception of smallpox vaccine. The live MMR, varicella, and rotavirus vaccines should be administered to susceptible household contacts and other close contacts of immunocompromised patients when indicated. MMR vaccine viruses are not transmitted to contacts, and transmission of vaccine strain varicella-zoster virus is rare. No specific precautions are needed unless the varicella vaccine recipient has a rash after vaccination, in which case direct contact with susceptible immunocompromised household contacts should be avoided until the rash resolves. All members of the household should wash their hands after changing the diaper of an infant who received rotavirus vaccine. This minimizes rotavirus transmission, as shedding may occur up to one month after the last dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Which vaccinations should be given to a patient who is a recipient of hematopoietic cell transplantation (HCT)?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Antibody titers to vaccine-preventable diseases decline during the 1-4 years after HCT, if the recipient is not revaccinated. HCT recipients are at increased risk for certain vaccine-preventable diseases, including those caused by encapsulated bacteria. In short, all HCT recipients should begin revaccination with inactivated vaccines 6 months after HCT. Three doses of pneumococcal conjugate vaccine (PCV) should be given 6 months following transplant followed by a dose of pneumococcal polysaccharide vaccine (PPSV) at least 8 weeks later. HCT recipients should receive 3 doses of Hib vaccine starting 6 to 12 months after successful transplant, regardless of vaccination history; doses should be administered at least 4 weeks apart. Immunocompetent people should receive MMR vaccine 24 months after transplant.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What vaccines can a child with severe combined immunodeficiency disease (SCID) receive?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Children with SCID may be given inactivated vaccines (e.g., DTaP, Hib, hepatitis B, pneumococcal conjugate, hepatitis A, IPV, and injectable influenza). They should not be given live virus vaccines (e.g., live attenuated influenza, MMR, rotavirus, and varicella).</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I know that immunosuppressed patients can receive inactivated vaccines, but not live vaccines. Will these patients who receive inactivated vaccines develop a sufficient immune response to make vaccinating them worthwhile?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Inactivated vaccines can be administered to people who take immunosuppressive drugs or who have a condition that causes them to be immunocompromised. The vaccines might not be as effective as they would be when given to a person with an intact immune system. If possible, the immunosuppressive drug should be discontinued for a month prior to vaccination, then allow the vaccine 2–3 weeks to generate an immune response before restarting the immunosuppressive treatment, but obviously, this is not always possible.<br />
                Determination of altered immunocompetence is important because incidence or severity of some vaccine-preventable diseases is greater in people with altered immunocompetence. As a result, certain vaccines (e.g., inactivated influenza vaccine and pneumococcal vaccines) are recommended specifically for people with altered immunocompetence.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I had an 18-year-old in the clinic today for varicella vaccination. He reports having antiphospholipid syndrome being treated with rituximab (a drug that affects the function of lymphocytes). The next dose of rituximab will be in 2 weeks. He has also had 12 immune globulin (IG) injections in the last year. Should he get the varicella vaccine at all with this condition, and if so, what time frame do we need to be concerned with in relation to the rituximab treatment and/or IG?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The IDSA guidelines indicate that persons receiving rituximab should be considered to have high-level immunosuppression. Both inactivated and live vaccines should be withheld at least 6 months following treatment with lymphocyte depleting medications such as rituximab. As for the IG, the interval to live vaccination depends on the dose. This interval could be as long as 11 months, depending on the dose he receives.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We have a 40 lb six-year-old patient who has been taking 15 mg of methotrexate weekly for arthritis for 12 months. Can we give the child MMR and varicella vaccine based on this methotrexate dosage?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Based on the weight and dosage provided (40 lbs and 15 mg/week), the child is currently receiving more than 0.4 mg/kg/week of methotrexate. This meets the Infectious Disease Society of America (IDSA) definition of high-level immunosuppression. Administration of both varicella and MMR vaccines are contraindicated until such time as the methotrexate dosage can be reduced. The 2013 IDSA definition of low-level immunosuppression for methotrexate is a dosage of less than 0.4 mg/kg/week.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We usually instruct our patients that they should separate vaccinations and allergy shots by at least 24 hours because if there were a reaction to one or the other, it wouldn't be possible to determine which was the cause. This becomes problematic during influenza vaccination season. What should we do?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The probability of a serious allergic reaction following any vaccine is extremely low if the person is properly screened. ACIP has not issued a recommendation that desensitization injections and vaccines be separated by any specific time period; consequently, we feel that you should take the opportunity to vaccinate.</p>
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


