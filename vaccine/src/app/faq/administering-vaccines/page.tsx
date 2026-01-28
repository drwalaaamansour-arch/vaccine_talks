import Header from '@/components/Header';

export default function FAQAdministeringVaccines() {
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
        <h2 className="about-lang-title" style={{textAlign:'center', fontSize:'2rem', margin:'0'}}>FAQ – Administering Vaccines</h2>
      </section>

      {/* Administering Vaccines FAQ content */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>
          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems:'flex-start'}}>
              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I was recently told by a colleague that pregnant healthcare personnel were not to administer live vaccines to others. I had never heard that in school or practice. Is that true?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>This is not true. Pregnant healthcare personnel may administer any vaccine except the ACAM2000 smallpox vaccine.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Why are some vaccinations given subcutaneously (subcut) while others must be given intramuscularly (IM)?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>In general, vaccines containing adjuvants (a component that enhances the antigenic response) are administered IM to avoid the risk of irritation, swelling, skin discoloration, inflammation, or granuloma formation if injected into subcutaneous tissue. This includes most of the inactivated vaccines, with a few exceptions (such as inactivated polio vaccine and pneumococcal polysaccharide vaccine, which may be given either subcut or IM). Vaccine efficacy may also be reduced if not given by the recommended route.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A 5-year-old came in today for her preschool vaccines. She needed MMR and varicella. She has a broken arm which is in a cast. Can the anterolateral thigh be used to administer a subcutaneous vaccine in a 5-year-old?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. There is no age limit for use of the anterolateral thigh for either subcutaneous or intramuscular vaccines.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I have a 2-month-old child with a cast for hip dysplasia that completely covers the entire anterolateral thigh on both legs. She is not due to have it removed for 10 weeks. What options do we have for her injectable vaccines?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Ideally, you can arrange to have the cast cut to administer vaccines in the anterolateral thighs. If that option is not available, the gluteal region can be used if not covered by the cast. There are no other sites recommended for vaccination; however, the inactivated polio vaccine could be given subcutaneously in either arm, if the child is large enough. Rotavirus vaccine is given orally and should be administered.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I need information about the administration of vaccines to 3-month-old conjoined twins (joined at the buttocks). For their routine immunization, do we provide one set of vaccinations or two, given that they are conjoined at the buttock but share no major organs?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP does not address this issue. However, CDC experts have previously recommended that these children should each be vaccinated, notwithstanding they are conjoined. We believe even in conjoined twins who share organs and/or blood supply, vaccination of each child would also be indicated. The rationale is one cannot be sure, even in the latter case, that the common organs/blood supply would eliminate vaccine antigens less quickly, or the immune system(s) would respond adequately, to one dose of each vaccine for the two children. Therefore, administering a dose to each child, as if they were not conjoined, seems appropriate.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If I need to give more than 1 injection in a muscle, are certain vaccines best given at different anatomic sites?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Since DTaP and pneumococcal conjugate (PCV) are the vaccines most likely to cause a local reaction, it is prudent to give DTaP and PCV in separate limbs (if possible), so there is no confusion about which vaccine caused the reaction.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How many vaccines can be given during an office visit?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>With rare exceptions*, all vaccines can be administered at the same visit. There is no upper limit for the number of vaccines that can be administered during one visit. ACIP and AAP consistently recommend that all needed vaccines be administered during an office visit. Vaccination should not be deferred because multiple vaccines are needed. All live vaccines (MMR, varicella, live attenuated influenza, yellow fever, and oral typhoid) can be given at the same visit if indicated. If injectable or intranasal live vaccines are not administered during the same visit, they should be separated by 4 weeks or more.<br />
              When giving several injections at a single visit, separate IM vaccines by at least 1 inch in the body of the muscle, if possible, to reduce the likelihood of local reactions overlapping.<br />
              There are exceptions to this general rule:<br />
              1) if both pneumococcal conjugate vaccine (PCV13, Prevnar 13, Pfizer) and pneumococcal polysaccharide vaccine (PPSV23, Pneumovax 23, Merck) are indicated for a high-risk patient, these vaccines should not be given at the same visit. The PCV13 should be given first followed by PPSV23 at least 8 weeks later. If PPSV23 has already been given, wait 8 weeks (for a child) or 1 year (for an adult age 19 years or older) before giving PCV13 to avoid interference between the two vaccines.<br />
              2) A person with anatomic or functional asplenia or HIV should receive both PCV13 and meningococcal ACWY (MenACWY) vaccines. If Menactra brand (Sanofi) MenACWY is used, the person should first receive all recommended doses of PCV13 followed by Menactra at least 4 weeks later. Menveo (GSK) or MenQuadfi (Sanofi) MenACWY brands can be given at the same time or at any time before or after PCV13.<br />
              3) If the 15-valent pneumococcal conjugate vaccine (PCV15, Vaxneuvance, Merck) and pneumococcal polysaccharide vaccine (PPSV23, Pneumovax, Merck) are to be given to a high-risk patient, these vaccines should not be given at the same visit. The PCV15 should be given first followed by PPSV23 at least 8 weeks later. If PPSV23 has already been given, wait 8 weeks (for a child) or 1 year (for an adult age 19 years or older) before giving PCV15 to avoid interference between the two vaccines.<br />
              4) Oral cholera vaccine should be administered before oral Ty21a vaccine (Vivotif, Bavarian Nordic): ACIP recommends at least 8 hours should separate oral cholera vaccine and the first dose of oral Ty21a to avoid any interference by the oral cholera vaccine buffer solution with the enteric-coated Ty21a vaccine dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A 5-year-old is in the office for vaccines and is due for MMR, polio, varicella, and DTaP. Is there a specific order I should be giving these vaccines?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The Advisory Committee on Immunization Practices (ACIP) does not address this issue. There is no recommended order in which the vaccines should be given. A best practice strategy to decrease injection or procedural pain is to administer the vaccine that causes the most pain (stinging, for example) last.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Do we need to wait for the vaccine to reach room temperature before we administer it to a patient?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The live smallpox (vaccinia) vaccine, ACAM2000 (Emergent BioSolutions) and the non-replicating, live smallpox and mpox vaccine, Jynneos (Bavarian Nordic) should be brought to room temperature before use, according to the package inserts for these two products.<br />
              With the exception of these two vaccines, there is no recommendation to wait until a vaccine reaches room temperature before administration. The vaccine should be administered as soon as it is prepared.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What is the acceptable volume for a single dose of immune globulin (IG) to inject into the deltoid muscle or the vastus lateralis (thigh) of a normal-weight adult?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There are no precise volume limits published by CDC or professional organizations. Professional judgment is required. Here are CDC's suggested volumes:<br />
              <strong>Deltoid:</strong><br />
              Average 0.5 mL<br />
              Range 0.5–2 mL<br />
              <strong>Vastus Lateralis:</strong><br />
              Average 1–4 mL<br />
              Range 1–5 mL<br />
              Infants and toddlers would fall at the lower end of the range, whereas adolescents and adults would generally fall on the higher end of the range.<br />
              The same injection volume ranges above also apply when considering administration of multiple vaccinations or a combination of an antibody product and vaccination (e.g., nirsevimab and vaccine) in the same muscle.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If all needed vaccines aren't administered during the same visit, does one need to wait a certain period of time before administering the other needed vaccines?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>All inactivated vaccines, including COVID-19 vaccines, can be given on the same day, or on any day before or after giving other inactivated or live vaccines, with one exception. The exception is when the pneumococcal conjugate vaccine (PCV15, Vaxneuvance, Merck) or (PCV13, Prevnar 13, Pfizer) with 23-valent pneumococcal polysaccharide vaccine (PPSV23, Pneumovax, Merck) are indicated for a high-risk patient. These vaccines should not be given at the same visit. PCV15 or13 should be given first, followed by PPSV23 at least 8 weeks later. If PPSV23 has already been given, wait 8 weeks (for a child) or 1 year (for an adult age 19 years or older) before giving PCV15 or13 to avoid interference between the 2 vaccines.<br />
              If two or more injectable or nasally administered live vaccines are not given on the same day, they need to be spaced at least 4 weeks apart. If two such vaccines are administered less than 4 weeks apart, the second vaccine administered should not be counted and the dose should be repeated at least 4 weeks later. The 4-day grace period, which may be used to shorten the minimum interval between two doses of the same vaccine in a series, should not be applied to the 4-week minimum interval between two different live vaccines.<br />
              Oral typhoid vaccine (Vivotif, Bavarian Nordic) and oral rotavirus vaccine can be administered simultaneously with or at any interval before or after other live vaccines (injectable or intranasal) if indicated. If administering oral cholera and oral typhoid vaccines on the same day, ACIP recommends that the recipient should ingest the oral cholera vaccine first and wait at least 8 hours before ingesting the first dose of oral Ty21a typhoid vaccine (Vivotif, Bavarian Nordic) because the oral cholera vaccine buffer solution could interfere with the enteric-coated Ty21a vaccine.<br />
              A person with anatomic or functional asplenia or HIV should receive both PCV13 and meningococcal ACWY (MenACWY) vaccines. If Menactra brand (Sanofi) MenACWY is used, the person should first receive all recommended doses of PCV13 followed by Menactra at least 4 weeks later. Menveo (GSK) or MenQuadfi (Sanofi) MenACWY brands can be given at the same time or at any time before or after PCV13</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What does "simultaneous administration" of vaccines mean? Does it mean the same day, hour, or what?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Simultaneous means the same day—the same clinic day. If someone receives a vaccine in the morning and then another that same afternoon, it would be considered simultaneous administration.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Some manufacturers' package inserts state that a vaccine should be used immediately after reconstitution. In the context of reconstitution and administration of vaccines, how does CDC define "immediately"?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There are various requirements for the use of vaccines after reconstitution. Some manufacturers' package inserts require that the vaccine be used or discarded in varying time frames ranging from 24 hours after reconstitution to "immediately" after reconstitution. While the specific timeframes are simple to interpret, it may be unclear what the requirement of "immediately" actually means.<br />
              CDC experts have considered "immediately" to be the reasonable time it takes to prepare and transport the vaccine to the patient to be administered. This would include any limited documentation that may be related to this process. It is up to the judgment of a provider to determine if a vaccine has not been used in the appropriate time. Some manufacturers have indicated to providers that "immediately" may be up to 30 minutes. The definition of "immediately" varies from manufacturer to manufacturer. Some do not have the data to put forth a general time frame as to what "immediately" means. Contact the manufacturer any time there is any question about whether or not the vaccine has been used within an appropriate time frame.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We have a nurse in one of our clinics who gave separate doses of hepatitis A and hepatitis B vaccine in the gluteus of our adult patients. Are the doses considered invalid? If so, when can a valid dose be administered?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Although the gluteus muscle is not a recommended site for vaccination, in general, a dose given there can be considered valid. The exceptions to this general rule are hepatitis B and rabies vaccines. Hepatitis B vaccine is not considered valid if administered by any route other than intramuscular, or, if given to an adult, if given in any site except the deltoid or anterolateral thigh. So, the hepatitis A vaccine may be counted as valid, but the hepatitis B vaccine should not be counted in this situation. The hepatitis B vaccine can be repeated immediately.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We received a report of an infant who received rotavirus vaccine intramuscularly rather than orally. Is this dose valid? If not, when should it be repeated?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The rotavirus vaccine dose given by the intramuscular route is not valid and should be repeated by the oral route as soon as possible.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is it safe to give a vaccine directly into an area where there is a tattoo?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Both intramuscular and subcutaneous vaccines may be given through a tattoo.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Do you need to aspirate before giving a vaccination?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. CDC does not recommend aspiration when administering vaccines because no data exist to justify the need for this practice. There are data that show that aspiration is more painful for the vaccine recipient. Intramuscular injections are not given in areas where large blood vessels are present. Given the size of the needle and the angle at which you inject the vaccine, it is difficult to cannulate a vessel without rupturing it and even more difficult to actually deliver the vaccine intravenously. We are aware of no reports of a vaccine being administered intravenously and causing harm in the absence of aspiration.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>While giving an injection, a nurse had blood return in the syringe upon aspirating. What should she have done with the vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Although aspiration is not recommended, if you do aspirate and get a flash of blood, then the procedure is to withdraw the needle and start over. The syringe, needle, and contaminated dose of vaccine should be discarded in a sharps container, and a new syringe and needle should be used to draw up and administer another dose of vaccine. This is a waste of expensive vaccine that could be avoided by simply not aspirating.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is it necessary to wear gloves when we administer vaccinations?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>In general, no. Occupational Safety and Health Administration (OSHA) regulations do not require the wearing of gloves when administering vaccinations, unless the person administering the vaccine is likely to come into contact with potentially infectious body fluids or has an open lesion on their hand. If a healthcare worker chooses to wear gloves, he or she must change them between each patient encounter.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is protective eyewear needed for those who administer vaccines so they can avoid blood spatter?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP does not specifically recommend eye protection when administering vaccines to prevent exposure to blood spatter.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Some single-dose manufacturer-filled vaccines come with an air pocket in the syringe chamber. Do we need to expel the air pocket before vaccinating?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. You do not need to expel the air pocket. The air will be absorbed. This is not true for syringes that you fill yourself; you should expel air bubbles from these syringes prior to vaccination to the extent that you can do so.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I've seen the recommendation stating air bubbles in manufacturer-filled syringes do not need to be expelled. Can you explain why those air bubbles can be injected but air bubbles in user-filled syringes must be expelled?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>It is not wrong to expel the air from syringes filled by manufacturers, but typically it is such a small amount of air (0.2cc–0.3cc) that it is CDC's opinion that it would not cause a problem. When the syringe is inverted during an injection, that small amount of air would typically just clear the medication from the needle. This is based on the recommendation that when the Z-track method is used for intramuscular injection of irritating medication (e.g., iron preparations), the guidance is to leave 0.2cc–0.3cc in the syringe to be sure that all of the medication leaves the needle and is not tracked back through subcutaneous tissue as the needle is withdrawn. While the Z-track injection technique is not recommended for vaccine administration, the Z-track method demonstrates the acceptability of leaving a very small amount of air in the syringe for intramuscular injections.<br />
              CDC does, however, recommend that when drawing vaccine from a vial into a regular syringe, the air be expelled because the amount of air drawn into the syringe may be larger than the amount in a manufacturer-filled syringe. Expelling the air is part of general medication guidelines for drawing medication into a syringe.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If a patient is not able to receive rotavirus vaccine orally, can we give it through a G-tube?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>You can give rotavirus vaccine through a G-tube as long as the child is otherwise eligible.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If the lymph nodes under a patient's arm were surgically removed, should we avoid giving vaccines in that arm?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>We are aware that some surgeons advise against vaccination in an arm where lymph nodes were dissected. ACIP does not address this, so feel free to use your professional judgment in determining whether to use the arm that was operated on, the other arm (if not affected), or the anterolateral aspect of the thigh, which is an acceptable secondary route for adult immunization.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What are the special recommendations for administering intramuscular injections in people with clotting disorders?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Intramuscular (IM) injections should be scheduled shortly after antihemophilia therapy or prior to a dose of anticoagulant, if the patient receives this treatment. For both IM and subcutaneous (subcut) injections, a fine needle (23 gauge or smaller) should be used and firm pressure applied to the site, without rubbing, for at least 2 minutes. Provide information to the recipient or caregiver about the risk for hematoma from the injection. Providers should not administer a vaccine by a route that is not approved by the FDA for that particular vaccine (e.g., administration of IM vaccines by the subcut route).</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is it okay to draw up vaccines at the beginning of the shift? If it isn't, how much in advance can this be done?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>CDC discourages the practice of prefilling vaccine into syringes, primarily because of the increased possibility of administration and dosing errors.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If you place a needle on a manufacturer-filled syringe (MFS) and then don't administer the vaccine, how long can you store the syringe with the needle attached?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>In general, a vaccine should not be prepared until the provider is ready to administer it to a patient. This is because once the syringe cap is removed or a needle is attached, the sterile seal is broken. Once a sterile seal has been broken, staff should be sure to maintain the syringe at the appropriate temperature and either use it or discard it by the end of the clinic day.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>My nurse removed the protective cap from a preservative-free single dose vial (SDV), but the vial was not used. How long can we keep the SDV after we remove the protective cap?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Removing the protective cap increases the likelihood the septum or stopper of the SDV could be punctured. The puncture may not be visible. It is important to ensure that the rubber seal on an SDV is not punctured before use because SDVs do not contain a preservative. Discard any unused SDVs without a protective cap at the end of the workday.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is it necessary to allow alcohol to dry completely on a patient's skin prior to injection?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>It is prudent to allow the alcohol to evaporate, but it is unlikely that the small amount residual alcohol on the skin will affect the vaccine or increase the risk of an adverse reaction.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I know that it is advisable to clean the vaccine vial stopper with an alcohol wipe after removing the protective cap from a vaccine or diluent vial. Do you have to wait for the alcohol to dry before you insert the needle into the stopper?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The stopper of a single-dose vial (SDV) is often assumed to be sterile. However, not all vaccine manufacturers guarantee the tops of unused vials are sterile, and the manner in which the cover over the stopper is removed can potentially contaminate the stopper. Therefore, using friction and a sterile alcohol pad to swab the stopper may help to assure aseptic technique in preparing the SDV prior to inserting a sterile syringe. Alcohol evaporates quickly and will dry while the needle is being prepared for insertion into the vial.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Some single dose vials (SDV) contain more than the recommended dosage of the vaccine. Should we administer the recommended dose of the vaccine, or the entire contents of the vial even if it contains more than the recommended dose?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>In general, the entire volume should be used even if it is a little more than 0.5 mL. Discarding the excess vaccine is not required or recommended.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>An exception to this general rule is the presentation of recombinant zoster vaccine (Shingrix, GSK) that requires reconstitution. The Shingrix adjuvant solution vial may contain up to 0.75 mL of liquid. The entire volume of the adjuvant solution should be withdrawn and used to reconstitute the lyophilized vaccine. After mixing, withdraw the recommended dose of 0.5 mL. Any reconstituted Shingrix vaccine left in the vial should be discarded.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A 2009 article in The Lancet reported that infants who received 3 doses of paracetamol following immunization had reduced immune responses to certain vaccines. Based on these findings, should we stop recommending acetaminophen for fever or discomfort after infant immunizations?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Findings of this study discourages the prophylactic use of paracetamol (which is similar to acetaminophen) before or immediately following vaccination. Acetaminophen may be used to treat pain or fever if either symptom should occur following vaccination. CDC's "General Best Practices for Immunization" states: "Evidence does not support use of antipyretics before or at the time of vaccination; however, they can be used for the treatment of fever and local discomfort that might occur following vaccination. Studies of children with previous febrile seizures have not demonstrated antipyretics to be effective in the prevention of febrile seizures."</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>An expired dose of ProQuad (MMRV, Merck) was given to a patient. We assume that the repeat dose should be given in three months because the spacing between doses of a combination vaccine depends on the longest minimum interval of a component (in this case the varicella vaccine component). Is this correct?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>In the case of an expired live vaccine, the issue is not necessarily the routine minimum interval (three months in the case of varicella and ProQuad vaccines), but the interval that would prevent viral interference if the expired vaccine happened to be still viable. This interval is considered to be four weeks (28 days). The repeat dose should be administered four weeks after the expired dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Are vaccine diluents interchangeable?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Diluents are not interchangeable, except for the sterile water used in Merck's measles-mumps-rubella (MMR), measles-mumps-rubella-varicella (MMRV), and varicella vaccines. No other diluent can be used for these vaccines, and these diluents must not be used to reconstitute any other lyophilized vaccine.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If the wrong diluent is used, the vaccination should always be repeated. If an inactivated vaccine is reconstituted with the wrong diluent and is administered, the dose is invalid and should be repeated as soon as possible. If a live vaccine is reconstituted with the wrong diluent and is administered, the dose is invalid. If the dose can't be repeated on the same clinic day, it needs to be repeated no earlier than four weeks after the invalid dose. This spacing is due to the effects of generating a partial immune response that could suppress the live replication of subsequent doses, even of the same live vaccine.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is it recommended to change needles after a vaccine dose has been drawn into a syringe?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. It is also unnecessary to change the needle if it has passed through two stoppers, which is done when a lyophilized vaccine is reconstituted. Changing needles is a waste of resources and increases the risk of needle stick injury.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>When patients need multiple vaccines (such as influenza and pneumococcal), can we just combine them in the same syringe?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Absolutely not. No vaccines should ever be mixed in the same syringe unless the combination has been specifically approved by the FDA.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>The needle came loose while I was injecting a dose of vaccine, and approximately half the dose was lost. Should we revaccinate the patient? If so, when?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>When injectable vaccine volume is lost (patient moves, syringe leaks), it may be difficult to judge how much vaccine the patient actually received. Use your discretion to determine whether an adequate dose was given. In general, you should treat this as a nonstandard injectable dose and should not count it. If it was an inactivated vaccine, you should re-immunize the person as soon as possible. In the case of Shingrix (RZV; GSK), if the person is still in the office the dose can be repeated immediately; however, if the repeat Shingrix dose cannot be given on the same day, then CDC recommends that it should be given 4 weeks after the invalid dose.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If it was a live vaccine, you can give another dose if you detect the error on the same clinic day; otherwise, you should wait 28 days to give the next dose. However, if part of a dose of an oral vaccine (rotavirus) was spit out by an infant, count the dose and do not administer a second dose. If a person sneezes after live-attenuated influenza vaccine (Flumist; AstraZeneca), the dose can be counted as valid</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If a patient pulls away during administration of a vaccine and the needle comes out, is it okay to reintroduce the same needle and finish the injection?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. The needle should be considered to be contaminated. The needle and syringe should be discarded. A new syringe, needle, and dose of vaccine should be used. Generally, a full repeat dose should be given, but you may use your clinical judgment to decide whether an adequate dose was administered before the patient pulled away.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What should we do if a dose of expired vaccine is given to a patient?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The dose should be repeated. If the expired dose is a live virus vaccine, you should wait at least 4 weeks after the previous (expired) dose was given before repeating it. If the expired dose is not a live vaccine, the dose should be repeated as soon as possible. Although simply repeating the dose is preferred, serologic testing to check for immunity at least 4 weeks after certain vaccinations (e.g., measles, rubella, varicella, hepatitis A) may be accepted.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What should we do if we give an injection by the wrong route (subcutaneous [subcut], instead of intramuscular [IM])?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Your practice should put procedures in place to ensure that you always give vaccines by the recommended route because data regarding safety and efficacy of alternate routes are limited.<br />
              CDC and/or ACIP guidance about vaccination by the wrong route vary depending upon the vaccine and route:<br />
              It is not necessary to repeat doses of vaccines that are recommended to be given subcut if they are inadvertently administered IM.<br />
              If hepatitis B, rabies, HPV, or inactivated influenza vaccine is administered subcut, the dose should not be counted as valid and should be repeated and administered IM.<br />
              CDC's guidance on what to do following inadvertent subcut administration of RSV vaccine depends upon the recipient: if given to an older adult by the subcutaneous route, the RSV dose should not count and should be repeated IM; if the recipient is pregnant, the RSV dose should count and should not be repeated.<br />
              ACIP states that if PCV, Hib, or DTaP is administered subcut, a provider has the discretion to repeat the dose(s) IM because there is no evidence related to immunogenicity of these vaccine administered subcut. There is no minimum interval between the invalid dose and the repeat dose.<br />
              If HepA, MenACWY, IPV, PPSV23, COVID-19, or RZV (Shingrix) vaccines are administered subcutaneously, the doses can count and do not need to be repeated.<br />
              ACIP and CDC have no recommendation for Tdap, Td, MenB, Typhim VI (injectable typhoid), or Japanese Encephalitis-VC.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>One of our staff gave a dose of pediatric hepatitis A vaccine to an adult patient by mistake. How do we remedy this error?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>In general, if the error is discovered on the same clinic day, you can administer the other "half" of the dose on that same day. If the error cannot be corrected on the same day, the dose should not be counted, and then the person should be recalled to the office and given a full age-appropriate repeat dose.<br />
              There are, however, two exceptions to the general rule: (1) If a patient sneezes after receiving nasal-spray live attenuated influenza vaccine, count the dose as valid. (2) If an infant regurgitates, spits, or vomits during or after receiving oral rotavirus vaccine, count the dose as valid.<br />
              If you give more than an age-appropriate dose (e.g., an adult HepA vaccine to a child), count the dose as valid and notify the patient/parent about the error. Using larger-than-recommended dosages can be more likely to result in side effects because of excessive local or systemic concentrations of antigens or other vaccine constituents. Avoid such errors by checking the vaccine vial label 3 times.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A dose of pneumococcal conjugate vaccine was administered into my patient's dialysis port. Does this dose count?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There are no data on the effectiveness of pneumococcal conjugate vaccine given by the intravenous route. The patient has renal disease, so it is important to ensure that the dose they receive is effective. CDC recommends repeating the dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A 2-month-old patient was mistakenly given PPSV23. What should be done?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Pneumococcal polysaccharide vaccine (PPSV23, Pneumovax, Merck) is not licensed or assumed to be effective in children younger than 24 months of age. PPSV23 given at this age should not be counted as part of the pneumococcal vaccination series. Pneumococcal conjugate vaccine should be administered as soon as the error is discovered. Any time the wrong vaccine is given, the parent/patient should be notified.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We inadvertently gave both pneumococcal conjugate (PCV) and pneumococcal polysaccharide (PPSV) vaccines to a high-risk adult patient at the same visit. We are looking for guidance.</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Although PCV15 and PPSV23 should not be administered at the same visit, CDC does not recommend repeating either vaccine dose should this occur. You should inform the patient of the error and let them know that they will not need to repeat either dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A 60-year-old patient was inadvertently given varicella vaccine instead of Shingrix zoster vaccine. Should the patient still be given Shingrix? If so, how long an interval should occur between the 2 doses?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>CDC recommends that if a provider mistakenly administers varicella vaccine to a person for whom zoster vaccine is indicated, no specific safety concerns exist, but the dose should not be considered valid. You should administer a dose of Shingrix zoster vaccine to the patient during that same visit (same day). If the error is not detected and corrected on the same day, Shingrix should be administered at least 8 weeks after receipt of the varicella vaccine. However, if Shingrix is administered less than 8 weeks after the varicella vaccine, it does not need to be repeated. A second dose of Shingrix should be given 2–6 months after the first dose of Shingrix.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If Shingrix recombinant zoster vaccine is erroneously given to a child for prevention of varicella, the dose is invalid, but is there a waiting period before a valid dose of varicella vaccine can be given? Is it OK to give a dose of varicella vaccine as soon as the error is discovered?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There is no waiting period. The varicella vaccine dose can be given at any time after the Shingrix dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>While giving a dose of Shingrix the syringe came loose from the needle and part of the dose was lost. Will the patient be protected with this partial dose or does it need to be repeated?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>A dose less than the full 0.5 mL dose is generally not considered valid and should generally be repeated. If the patient is still in the office the dose can be repeated immediately. If the repeat dose cannot be given on the same day CDC recommends that it should be given 4 weeks after the invalid dose. The provider does have discretion as to whether the amount of vaccine lost is negligible, to make a decision not to repeat the dose of vaccine.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>My medical assistant inadvertently administered a 0.5 mL dose of the Shingrix recombinant zoster vaccine diluent only. The dose did not contain any antigen. When can we administer a properly reconstituted dose?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The diluent for Shingrix contains the ASO1 adjuvant that stimulates the immune system. CDC zoster subject matter experts recommend that in this situation you should wait 4 weeks before giving a repeat dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Several doses (antigen and diluent) of Shingrix recombinant zoster vaccine were mistakenly stored in our office freezer. One of these doses was administered to a patient. Is this dose valid and if not, when can it be repeated?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Any Shingrix component, either antigen or diluent, that is exposed to freezing temperature should not be used. If a dose exposed to freezing temperature is given to a patient, the dose should be considered invalid and should be repeated 4 weeks after the invalid dose.</p>
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


