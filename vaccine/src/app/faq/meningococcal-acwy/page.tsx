import Header from '@/components/Header';

export default function FAQMeningACWY() {
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
        <h2 className="about-lang-title" style={{textAlign:'center', fontSize:'2rem', margin:'0'}}>FAQ – Meningococcal ACWY</h2>
      </section>

      {/* Note Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>
          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems:'flex-start'}}>
              <p className="about-lang-intro" style={{fontWeight:'600', color:'#40606D'}}>N.B. In Egypt Menactra (MenACWY-D) is still available and is given from the age of 9 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meningococcal ACWY FAQ content */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>
          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems:'flex-start'}}>
              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Please tell us about meningococcal disease.</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Meningococcal disease is a bacterial infection caused by Neisseria meningitidis. Meningococcal disease usually presents clinically as meningitis (about 50% of cases), bacteremia (30% of cases), or bacteremic pneumonia (15% of cases). N. meningitidis colonizes mucosal surfaces of the nasopharynx and is transmitted through direct contact with large-droplet respiratory tract secretions from patients or asymptomatic carriers. Meningococcal disease can be severe. The overall case-fatality ratio in the U.S. is 15%, and 10%–20% of survivors have long-term sequelae such as neurologic disability, limb or digit loss, and hearing loss.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>N. meningitidis is classified into 12 serogroups based on characteristics of the polysaccharide capsule. Most invasive disease (such as meningitis and sepsis) is caused by serogroups A, B, C, W, X and Y. The relative importance of serogroups depends on geographic location and other factors such as age.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What groups are at increased risk for meningococcal disease?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>In addition to risk based on age, non-specific risk factors for serogroups A, C, W and Y include having a previous viral infection, living in a crowded household, having an underlying chronic illness, and being exposed to cigarette smoke (either directly or second-hand).<br />
              The following groups are at increased risk for all meningococcal serogroups:<br />
              People with persistent (genetic) complement component deficiencies (a type of immune system disorder)<br />
              People who use complement inhibitors such as eculizumab (Soliris, Alexion Pharmaceuticals), ravulizumab (Ultomiris, Alexion Pharmaceuticals), or sutimlimab (Enjaymo, Sanofi) for treatment of atypical hemolytic uremic syndrome or paroxysmal nocturnal hemoglobinuria<br />
              People with anatomic or functional asplenia<br />
              Microbiologists routinely exposed to meningococcal isolates in a laboratory<br />
              People at increased risk during an outbreak of meningococcal disease<br />
              Military recruits<br />
              College students<br />
              Certain groups are at increased risk of serogroups A, C, W and Y, but not serogroup B:<br />
              People living with HIV<br />
              Men who have sex with men (MSM)<br />
              Travelers to countries where meningococcal disease is endemic or hyperendemic, such as the meningitis belt of sub-Saharan Africa</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Who is recommended to be vaccinated against meningococcal ACWY disease?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>MenACWY is recommended for these groups:<br />
              Routine vaccination of all children and teens, age 11 through 18 years: a single dose at age 11 or 12 years with a booster dose at age 16 years<br />
              Routine vaccination of people age 2 months or older at increased risk for meningococcal disease (the primary dosing schedule and booster dose interval varies by age and indication):<br />
              People with functional or anatomic asplenia<br />
              People who have persistent complement component deficiency (an immune system disorder) or who take a complement inhibitor (examples include eculizumab [Soliris] and ravulizumab [Ultomiris])<br />
              People who have HIV infection<br />
              People who are at risk during an outbreak caused by a vaccine serogroup<br />
              People age 2 months and older who reside in or travel to certain countries in sub-Saharan Africa as well as to other countries for which meningococcal vaccine is recommended (e.g., travel to Mecca, Saudi Arabia, for the annual Hajj)<br />
              Microbiologists who work with meningococcus bacterial isolates in a laboratory<br />
              First-year college students living in residence halls who are unvaccinated or undervaccinated; these students should receive a dose if they have not had a dose since turning 16 or if it has been more than 5 years since their previous dose</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>My 36-year-old patient was diagnosed with idiopathic thrombocytopenic purpura and had a splenectomy three weeks ago. Prior to the splenectomy, he had one dose each of Hib, MenB, PCV20, and MenACWY (Menveo). What vaccines are recommended now?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Since the patient is asplenic, the second dose of the primary series of MenACWY should be given at least 8 weeks after the first dose. He will need a dose of MenACWY every 5 years for the rest of his life. The 3-dose series of MenB (whether Trumenba [Pfizer] or Bexsero [GSK]) should be completed. The first booster dose of MenB will be due one year after completion of the primary series and subsequent booster doses are recommended every 2–3 years for the rest of his life. The same MenB vaccine should be used for all doses in the series, including booster doses. People who receive Trumenba brand MenB vaccine have an option to receive MenABCWY (Penbraya, Pfizer) when both MenACWY and MenB vaccines are due at the same visit, as long as doses of Penbraya are spread out by at least 6 months. The patient has already received one dose of PCV20, in accordance with pneumococcal vaccination recommendations for immunocompromised adults younger than age 50, so no further doses are needed. Based on the patient's age, only one dose of Hib vaccine is recommended, so no further doses are needed. The patient should receive influenza vaccine annually.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Which people age 2 years and older are recommended to receive a 2-dose primary series of MenACWY?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>For people who are age 2 years or older, a 2-dose series of MenACWY, spaced 8–12 weeks apart, is recommended if they have functional or anatomic asplenia, HIV infection, persistent complement component deficiency (an immune disorder including C3, C5–C9, properdin, factor H, and factor D deficiency), or if they take a complement inhibitor (for example, eculizumab [Soliris], ravulizumab [Ultomiris], or sutimlimab [Enjaymo]). People with these high-risk medical conditions also need booster doses of MenACWY.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I have a pediatric patient who has functional asplenia. I gave her a dose of MenACWY when she was 3 years old. Do I need to give her a booster at some time?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Because she has functional asplenia, she is due for the second dose of the primary series (assuming 8 weeks have passed since the first primary series dose). Because she has a high-risk medical condition she will need periodic booster doses. If she is younger than age 7 years when she receives the second dose of her primary series, she should receive her first booster dose 3 years after completing the primary series. She should then receive a booster dose every five years thereafter. If she is age 7 years or older when she receives the second primary dose she should receive her first booster dose 5 years after the completing the primary series and every five years thereafter.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We have a 68-year-old who has been asplenic since 2009. She had one dose of meningococcal polysaccharide vaccine (MPSV4) in 2009, but no subsequent dose. She is now due for a booster. Should she receive 2 doses of MenACWY, 2 months apart, to catch up, or just one dose?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>This situation is not addressed in the ACIP guidelines for meningococcal conjugate vaccine. It is the CDC meningococcal subject matter expert's opinion that this patient should receive 2 doses of MenACWY separated by at least 8 weeks, followed by a booster dose of MenACWY every 5 years thereafter. The concern is that having had only MPSV4 (Menomune, Sanofi, unavailable since 2017) previously, she may not have an adequate booster response to a single dose of MenACWY.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We have a 10-year-old getting renal dialysis. The nephrologist will be starting her on ravulizumab (Ultomiris), which interferes with C5 complement. If we administer meningococcal MenACWY vaccine and pneumococcal conjugate vaccine (PCV) now, will the MenACWY interfere with the PCV?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Recommendations to separate MenACWY and PCV only apply to one of the three MenACWY vaccines, MenACWY-D (Menactra), and also only apply to individuals with functional or anatomic asplenia or HIV infection. So, you do may administer the recommended vaccines at the same time. A 10-year-old with persistent complement component deficiency also should receive a 2- or 3 dose series (depending on brand) of MenB vaccine.<br />
              As long as the child remains at high risk of meningococcal disease due to complement inhibitor use, booster doses of both MenACWY and MenB are recommended. A MenACWY booster dose should be given every 5 years and a MenB booster dose should be given one year after the completion of the primary series, followed by a booster dose every 2–3 years thereafter.<br />
              Because patients treated with complement inhibitors can develop invasive meningococcal disease despite vaccination, clinicians using Soliris or Ultomiris also may consider antimicrobial prophylaxis for the duration of complement inhibitor therapy.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Are people who are HIV-positive at increased risk for meningococcal disease?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Studies from the United States, South Africa, and the United Kingdom have shown that people with HIV infection have a risk of invasive meningococcal disease that is 11–24 times higher than the general population. In the United States, this excess risk is specifically for serogroups C, W, and Y. ACIP recommends routine MenACWY vaccination of all HIV-infected people 2 months of age and older. Children younger than age 2 years should be vaccinated using a multidose schedule based upon age. People age 2 years and older with HIV infection who have not been previously vaccinated should receive a 2-dose primary series of MenACWY (doses separated by at least 8 weeks). People with HIV infection who have previously received one dose of MenACWY should receive a second dose at the earliest opportunity (at least 8 weeks after the previous dose) and then receive booster doses at the appropriate intervals. ACIP does not recommend routine meningococcal serogroup B vaccination of people with HIV infection: MenB vaccine may be given based upon shared clinical decision-making to people with HIV who are age 16 through 23 years old, preferably between ages 16 and 18 years.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A 32-year-old patient with ulcerative colitis is taking high-dose immunosuppressive medications (6-mercaptopurine). Should he receive meningococcal vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There is no specific indication for meningococcal vaccine in this patient. Risk–based recommendations are restricted to specific forms of altered immunocompetence (persistent complement component deficiency, functional or anatomic asplenia, use of complement inhibitors such as eculizumab [Soliris], ravulizumab [Ultomiris] or sutimlimab [Enjaymo], and HIV infection) and do not include other forms of altered immunocompetence.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Which people with risk factors should receive booster doses beyond the routinely recommended adolescent doses of MenACWY?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP recommends routine booster doses of MenACWY for people two months old or older at ongoing high risk for meningococcal infection. This group includes people (1) with persistent complement component deficiency (an immune system disorder) or who take a complement inhibitor (examples include eculizumab [Soliris], ravulizumab [Ultomiris], and sutimlimab [Enjaymo]), (2) with anatomic or functional asplenia, (3) with HIV infection, (4) who have higher risk of exposure (including microbiologists who handle Neisseria meningitidis isolates and travelers to or residents of areas with epidemic or hyperendemic meningococcal disease [such as the meningitis belt of sub-Saharan Africa]).</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Children at continued high risk who received the last dose of the primary series of MenACWY before age 7 years should receive the next dose 3 years after the most recent dose, then every 5 years as long as risk remains. People at continued high risk who received the last dose of the primary series at age 7 years or older should receive the next dose 5 years after the most recent dose then every 5 years as long as risk remains. Menveo (MenACWY-CRM) is licensed through age 55 years; however, if MenQuadfi (MenACWY-TT, licensed for use at age 2 years and older) is unavailable for an adult age 56 years or older, you may use Menveo.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What are the contraindications and precautions for MenACWY?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>As with all vaccines, a severe allergic reaction (for example, anaphylaxis) to a vaccine component or to a prior dose is a contraindication to further doses of that vaccine. A moderate or severe acute illness is a precaution; vaccination should be deferred until the person's condition has improved. Because MenACWY is an inactivated vaccine, it can be administered to people who are immunosuppressed as a result of disease or medications; however, response to the vaccine might be less than optimal.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can a pregnant person receive MenACWY vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. No safety concerns associated with vaccination have been identified in people vaccinated during pregnancy or their infants.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I have an otherwise healthy 26-year-old patient with HIV infection who received one dose of MenACWY three years ago. Should he receive one or two doses now? Will he need booster doses later?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>It is not necessary to restart the MenACWY series. Give the person one dose of MenACWY vaccine now. This dose represents a delayed second dose in the primary series (a 2-dose primary series recommended for people with HIV infection). The patient will subsequently need booster doses every 5 years.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If a healthy child received MenACWY or meningococcal polysaccharide (MPSV4) Vaccination prior to international travel at age 9 years, will two additional doses of MenACWY be needed?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Doses of any quadrivalent meningococcal vaccine given before 10 years of age should not be counted as part of the adolescent MenACWY series.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Should people with continued high risk of meningococcal disease receive additional doses of meningococcal vaccine beyond the 3- or 5-year booster?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes, people should receive additional booster doses (every 5 years) if they continue to be at highest risk for meningococcal infection.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Why delay meningococcal vaccination with Menactra (MenACWY-D) for infants with HIV or functional or anatomic asplenia until the pneumococcal conjugate vaccine series is completed?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>In addition to being at increased risk for meningococcal disease, children with HIV infection or functional or anatomic asplenia are at high risk for invasive disease caused by Streptococcus pneumoniae, which is more common than meningococcal disease. Data show that the Menactra may interfere with the immunologic response to PCV13 if these two vaccines are given too close together.<br />
              So ACIP recommends that Menactra not be administered to children with these conditions before age 2 years to avoid interference with the response to PCV13. If Menactra is used in people of any age with these conditions, do not administer it until at least 4 weeks after completion of the PCV13 series.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Menveo (MenACWY-CRM) and MenQuadfi (MenACWY-TT) do not affect the immune response to pneumococcal vaccine and can be given at any time before or after PCV13, although MenQuadfi is not licensed for use in children younger than age 2 years.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can we vaccinate a 2-year-old boy with sickle cell disease against meningococcal disease if he has not completed a series of PCV13?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Possibly. If you are going to give him Menactra (MenACWY-D), you need to wait at least 4 weeks after he completes the PCV13 series before giving him the Menactra. There is no similar spacing consideration if Menveo (MenACWY-CRM) or MenQuadfi (MenACWY-TT) is used; these brands may be given simultaneously with PCV13 or at any interval before or after receipt of PCV13.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Adults who are asplenic need PCV13 and MenACWY. Does the recommendation to separate PCV13 and Menactra (MenACWY-D) apply to adults as well as children?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. If Menactra (MenACWY-D) is being used, you should space it 4 weeks after PCV13. With both asplenic children and asplenic adults, if less than four weeks separate Menactra and PCV13 (in either order), the dose of PCV13 should be repeated four weeks after whichever vaccine was administered second. Menveo (MenACWY-CRM) and MenQuadfi (MenACWY-TT) can be administered at any time before, simultaneous with, or after PCV13.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Do any of the bacterial vaccines that are recommended for people with functional or anatomic asplenia need to be given before splenectomy? Do the doses count if they are given during the 2 weeks prior to surgery?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>PCV13, Haemophilus influenzae type b vaccine, MenACWY, and meningococcal B vaccine should be given 14 days before splenectomy, if possible. Doses given during the 14 days before surgery can be counted as valid. If the doses cannot be given prior to the splenectomy, they should be given as soon as the patient's condition has stabilized after surgery. Pneumococcal polysaccharide vaccine should be administered 8 weeks after the dose of PCV13 for people 2 years of age and older.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I have a 24-month-old patient with a complement component deficiency who received a dose of DTaP at 23 months of age and then received a dose of Menactra (MenACWY-D) two weeks later. Do I need to repeat the dose of Menactra?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. Even though ACIP recommends that Menactra (MenACWY-D) should be given either before, at the same visit, or at least 6 months after DTaP, there is no evidence to support repeating the dose of Menactra. A child with a complement component deficiency should still receive a second dose of MenACWY vaccine at least 8 weeks after the first dose. In this case, if the 2nd dose also will be Menactra, it should wait until the child is 29 months old (6 months after the dose of DTaP).</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Does the recommendation for separation of DTaP and Menactra (MenACWY-D) also apply to children with functional or anatomic asplenia?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. The recommendation about spacing of DTaP and Menactra (MenACWY-D) applies to all children younger than 7 years with a high-risk condition for meningococcal disease, including travelers. Menactra may be used earlier than 6 months after DTaP if it is the only available option and vaccination is necessary due to travel to an area with epidemic or hyperendemic meningococcal disease. Menveo (MenACWY-CRM) and MenQuadfi (MenACWY-TT) may be given at any time before or after DTaP.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I understand that a prior history of Guillain-Barré syndrome (GBS) is no longer a precaution for giving meningococcal conjugate vaccine. Please tell me more about this.</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>A history of GBS had previously been a precaution for Menactra (MenACWY-D). Findings from two studies that examined more than 2 million doses of Menactra given since 2005 showed no evidence of an increased risk of GBS. Consequently, ACIP recommended in 2010 to remove the precaution for use of Menactra in people with a history of GBS. This precaution did not apply to other meningococcal vaccines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-content">
            {/* Contact Section */}
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <p className="footer-text">
                I'm always looking for new and exciting opportunities. Let's connect.
              </p>
              
              {/* Social Links */}
              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=100064747760120" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/talkvaccine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@VaccineTalk" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Disclaimer Button */}
            <div className="footer-section">
              <a href="/disclaimer" className="disclaimer-btn" style={{textDecoration: "none", display: "inline-block"}}>Disclaimer</a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="copyright-text">
              © 2025 Vaccine Talk – All rights reserved.
            </p>
            <p className="copyright-text">
              Content is original and may not be copied without permission.
            </p>
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
