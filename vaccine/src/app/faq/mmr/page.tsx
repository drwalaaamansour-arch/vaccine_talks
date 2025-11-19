import Header from '@/components/Header';

export default function FAQMMR() {
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
        <h2 className="about-lang-title" style={{textAlign:'center', fontSize:'2rem', margin:'0'}}>FAQ – MMR</h2>
      </section>

      {/* MMR FAQ content */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>
          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems:'flex-start'}}>
              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How serious are measles, mumps, and rubella?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Measles can lead to serious complications and death, even with modern medical care. The 1989–1991 measles outbreak in the U.S. resulted in more than 55,000 cases and more than 100 deaths. In the United States, from 1987 to 2000, the most commonly reported complications associated with measles infection were pneumonia (6%), otitis media (7%), and diarrhea (8%). For every 1,000 reported measles cases in the United States, approximately one case of encephalitis and two to three deaths resulted. The risk for death from measles or its complications is greater for infants, young children, and adults than for older children and adolescents.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Mumps most commonly causes fever and parotitis. Up to 25% of persons with mumps have few or no symptoms. Complications of mumps include orchitis (inflammation of the testicle) and oophoritis (inflammation of the ovary). Other complications of mumps include pancreatitis, deafness, aseptic meningitis, and encephalitis. Mumps illness is typically milder, with fewer complications, in fully vaccinated case patients.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Rubella is generally a mild illness with low-grade fever, lymphadenopathy, and malaise. Up to 50% of rubella virus infections are subclinical. Complications can include thrombocytopenic purpura and encephalitis. Rubella virus is teratogenic and infection in a pregnant woman, especially during the first trimester can result in miscarriage, stillbirth, and birth defects including cataracts, hearing loss, mental retardation, and congenital heart defects.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What should our clinic do if we suspect a patient has measles?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Measles is highly contagious. A person with measles is infectious up to 4 days before through 4 days after the day of rash onset. Patients with suspected measles should be isolated for 4 days after they develop a rash. Airborne precautions should be followed in healthcare settings by all healthcare personnel. The preferred placement for patients who require airborne precautions is in a single-patient airborne infection isolation room. Providers should immediately isolate and report suspected measles cases to their local health department. CDC recommends that either a nasopharyngeal swab, throat swab, or urine specimen as well as a blood specimen be collected from all patients with clinical features compatible with measles. Nasopharyngeal or throat swabs are preferred over urine specimens.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How long does it take to show signs of measles, mumps, and rubella after being exposed?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>For measles, there is an average of 10 to 12 days from exposure to the appearance of the first symptom, which is usually fever. The measles rash doesn't usually appear until approximately 14 days after exposure (range: 7 to 21 days), and the rash typically begins 2 to 4 days after the fever begins. The incubation period of mumps averages 16 to 18 days (range: 12 to 25 days) from exposure to onset of parotitis. The incubation period of rubella is 14 days (range: 12 to 23 days). However, up to half of rubella virus infections cause no symptoms.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If there is an outbreak in my area, can we vaccinate children younger than 12 months?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>MMR can be given to children as young as 6 months of age who are at high risk of exposure such as during international travel or a community outbreak. However, doses given BEFORE 12 months of age cannot be counted toward the 2-dose series for MMR.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Why is a second dose of MMR necessary?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Approximately 7% of people do not develop measles immunity after the first dose of vaccine. This occurs for a variety of reasons. The second dose is to provide another chance to develop measles immunity for people who did not respond to the first dose. About 97% of people develop immunity to measles after two doses of measles-containing vaccine.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Are there any situations where more than 2 doses of MMR are recommended?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There are two circumstances when a third dose of MMR is recommended. ACIP recommends that women of childbearing age who have received 2 doses of rubella-containing vaccine and have rubella serum IgG levels that are not clearly positive should receive 1 additional dose of MMR vaccine (maximum of 3 doses). Further testing for serologic evidence of rubella immunity is not recommended. MMR should not be administered to a pregnant woman.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>In 2018, ACIP published guidance for MMR vaccination of people at increased risk for acquiring mumps during an outbreak. People previously vaccinated with 2 doses of a mumps virus–containing vaccine who are identified by public health authorities as being part of a group or population at increased risk for acquiring mumps because of an outbreak should receive a third dose of a mumps virus–containing vaccine (MMR or MMRV) to improve protection against mumps disease and related complications.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>When is it appropriate to use MMR vaccine for measles post-exposure prophylaxis?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>MMR vaccine given within 72 hours of initial measles exposure can reduce the risk of getting sick or reduce the severity of symptoms. Another option for exposed, measles-susceptible individuals at high risk of complications who cannot be vaccinated is to give immunoglobulin (IG) within six days of exposure. Do not administer MMR vaccine and IG simultaneously, as the IG invalidates the vaccine.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Do any adults need "booster" doses of MMR vaccine to prevent measles?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Adults with evidence of immunity, as defined in a separate question, do not need any further vaccines. No "booster" doses of MMR vaccine are recommended for either adults or children. They are considered to have life-long immunity once they have received the recommended number of MMR vaccine doses or have other acceptable evidence of immunity.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is there anything that can be done for unvaccinated people who have already been exposed to measles, mumps, or rubella?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Measles vaccine, given as MMR, may be effective if given within the first 3 days (72 hours) after exposure to measles. Immune globulin may be effective for as long as 6 days after exposure. Postexposure prophylaxis with MMR vaccine does not prevent or alter the clinical severity of mumps or rubella. However, if the exposed person does not have evidence of mumps or rubella immunity they should be vaccinated since not all exposures result in infection.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A patient born in 1970 has a history of measles disease and is also immunosuppressed due to multiple myeloma. The patient wants to travel to Africa, but is concerned about the measles exposure risk. Should the patient receive the MMR vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>A history of having had measles is not sufficient evidence of measles immunity. A positive serologic test for measles-specific IgG will confirm that the person is immune and is not at risk of infection regardless of the multiple myeloma. Multiple myeloma is a hematologic cancer and is considered immunosuppressive so MMR vaccine is contraindicated in this person.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We have adult patients in our practice at high risk for measles, including patients going back to college or preparing for international travel, who don't remember ever receiving MMR vaccine or having had measles disease. How should we manage these patients?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>You have two options. You can test for immunity or you can just give 2 doses of MMR at least 4 weeks apart. There is no harm in giving MMR vaccine to a person who may already be immune to one or more of the vaccine viruses. If you or the patient opt for testing, and the tests indicate the patient is not immune to one or more of the vaccine components, give your patient 2 doses of MMR at least 4 weeks apart. If any test results are indeterminate or equivocal, consider your patient nonimmune. ACIP does not recommend serologic testing after vaccination because commercial tests may not be sensitive enough to reliably detect vaccine-induced immunity.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Our clinic has been giving measles, mumps, rubella vaccine (MMR) by the wrong route (intramuscular rather than subcutaneous) for years. Should these doses be repeated?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>All live injected vaccines (MMR, varicella, and yellow fever) are recommended to be given subcutaneously (Subcut). In February 2023, FDA approved the administration of MMRII (Merck) brand of MMR by either Subcut or IM routes. The Priorix (GSK) brand of MMR is approved only for Subcut administration. Intramuscular (IM) administration of any of these live virus vaccines is not likely to decrease immunogenicity, and doses given IM do not need to be repeated. When administering MMRII by the IM route, select an appropriate needle length for the patient's size.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How soon can we give the second dose of MMR vaccine to a child vaccinated at 12 months old?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>For routine vaccination, children without contraindications to MMR vaccine should receive 2 doses of MMR vaccine with the first dose at age 12–15 months old and the second dose at age 4–6 years old. The minimum interval is 28 days for dose 2. If you have an outbreak in your community or a child is traveling internationally, then consider using the minimum interval instead of waiting until age 4–6 years old for dose 2.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Does the 4-day "grace period" apply to the minimum age for administration of the first dose of MMR? What about the 28-day minimum interval between doses of MMR?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>A dose of MMR vaccine administered up to 4 days before the first birthday may be counted as valid. However, school entry requirements in some states may mandate administration on or after the first birthday. The 4-day "grace period" also may be applied to the 28-day minimum interval between two doses of MMR if the interval is inadvertently shorter than 28 days, although you should never plan to administer the second dose earlier than the 28-day minimum interval. This 4-day "grace period" does not apply to the strict 28-day minimum interval between two different live vaccines (e.g., MMR and varicella vaccines), if not administered at the same visit.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can MMR be given on the same day as other live virus vaccines?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. However, if two parenteral or intranasal live vaccines (MMR, varicella, LAIV and/or yellow fever) are not administered on the same day, they should be separated by an interval of at least 28 days.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What is the earliest age at which I can give MMR to an infant who will be traveling internationally? Also, which countries pose a high risk to children for contracting measles?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP recommends that children who travel or live abroad should be vaccinated at an earlier age than that recommended for children who reside in the United States. Before their departure from the United States, children age 6 through 11 months should receive 1 dose of MMR. The risk for measles exposure can be high in high-, middle- and low-income countries. Consequently, CDC encourages all international travelers to be up to date on their immunizations regardless of their travel destination and to keep a copy of their immunization records with them as they travel.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If we give a child a dose of MMR vaccine at 6 months of age because they are in a community with cases of measles, when should we give the next dose?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The next dose should be given at 12 months of age. The child will also need another dose at least 28 days later. For the child to be fully vaccinated, they need to have 2 doses of MMR vaccine given when the child is 12 months of age and older. A dose given earlier than 4 days before the first birthday does not count as part of the MMR vaccine two-dose series.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I have an 8-month-old patient who is traveling internationally. The infant needs to be protected from hepatitis A as well as measles, mumps, and rubella. The family is leaving in 11 days. Can I give hepatitis A immune globulin (IG) and MMR vaccine simultaneously?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. IG may contain antibodies to measles, mumps, and rubella that could reduce the effectiveness of MMR vaccine. For this reason, in February 2018 ACIP voted to recommend that hepatitis A vaccine should be administered to infants age 6 through 11 months traveling outside the United States when protection against hepatitis A is recommended. MMR and hepatitis A vaccines may be safely co-administered to children in this age group. Neither vaccine is counted as part of the child's routine vaccination series.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can I give a tuberculin skin test (TST) on the same day as a dose of MMR vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. A TST can be applied before or on the same day that MMR vaccine is given. However, if MMR vaccine is given on the previous day or earlier, the TST should be delayed for at least 28 days. Live measles vaccine given prior to the application of a TST can reduce the reactivity of the skin test because of mild suppression of the immune system.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>When not given on the same day, is the interval between yellow fever and MMR vaccines 4 weeks (28 days) or 30 days? I have seen the yellow fever and live virus vaccine recommendations published both ways.</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The "General Best Practice Guidelines for Immunization"  makes the generic recommendation that live parenterally or nasally administered vaccines not given on the same day should be separated by at least 28 days. The CDC travel health website recommends that yellow fever vaccine and other parenteral or nasal live vaccines should be separated by at least 30 days if possible. Either interval is acceptable.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If a healthcare worker develops a rash and low-grade fever after MMR vaccine, is the person infectious?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Approximately 5 to 15% of susceptible people who receive MMR vaccine will develop a low-grade fever and/or mild rash 7 to 12 days after vaccination. However, the person is not infectious, and no special precautions ( such as exclusion from work) need to be taken.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A 22-year-old female is going to pharmacy school and the school wants her to have a second dose of MMR vaccine. She had the first dose as a child and developed measles within 24 hours of receiving the vaccine. Recent serologic testing showed she is immune to mumps and measles but not immune to rubella. Can I give her a second dose of the MMR with her having measles after the first dose?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes, as a healthcare professional, this person should get a second dose of MMR to ensure she is immune to rubella. There is no harm in providing MMR to a person who is already immune to one or more of the components. If she developed measles only one day after getting her first MMR, she must have been exposed to the disease prior to vaccination.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What are the contraindications and precautions for MMR vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}><strong>Contraindications:</strong><br />
history of a severe (anaphylactic) reaction to any vaccine component or following a previous dose of MMR (see specific package insert for details: www.fda.gov/vaccines-blood-biologics/vaccines/vaccines-licensed-use-united-states)<br />
pregnancy<br />
severe immunosuppression from either disease or therapy<br />
family history of altered immunocompetence, unless verified clinically or by laboratory testing as immunocompetent<br />
<strong>Precautions:</strong><br />
receipt of an antibody-containing blood product in the previous 11 months, depending on the type of blood product received. Specific intervals vary by product type. See www.cdc.gov/vaccines/hcp/imz-best-practices/timing-spacing-immunobiologics.html, Table 3-6, for more information on this issue.<br />
history of thrombocytopenia or thrombocytopenic purpura<br />
moderate or severe acute illness with or without fever<br />
need for tuberculin skin testing or interferon gamma release assay (IGRA) testing</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We have many patients who are immunocompromised and cannot get the MMR vaccine. How should we advise our patients?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>People with medical conditions that contraindicate measles immunization depend on high MMR vaccination coverage among those around them. To help prevent the spread of measles virus, make sure all your staff and patients who can be vaccinated are fully vaccinated according to the U.S. immunization schedule. Also, encourage patients to remind their family members and other close contacts to get vaccinated if they are not immune.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We have a patient who has selective IgA deficiency. We also have patients with selective IgM deficiency. Can MMR or varicella vaccine be administered to these patients?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There is no known risk associated with MMR or varicella vaccination in someone with selective IgA or IgM deficiency. It is possible that the immune response may be weaker, but the vaccines are likely effective.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I have a patient who is traveling internationally and needs MMR vaccine. He recently received an injectable steroid. How long should he wait before receiving MMR vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There is no need to wait a specific interval before giving MMR. An injectable steroid dose is not considered immunosuppressive for the purpose of vaccination decisions, and so there is no concern about safety or efficacy of MMR.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can I give MMR to a child whose sibling is receiving chemotherapy for leukemia?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. MMR and varicella vaccines should be given to the healthy household contacts of immunosuppressed children.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We have a 40 lb six-year-old patient who has been taking 15 mg of methotrexate weekly for arthritis for 12 months. Can we give the child MMR and varicella vaccine based on this methotrexate dosage?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Based on the weight and dosage provided (40 lbs and 15 mg/week), the child is currently receiving more than 0.4 mg/kg/week of methotrexate. This meets the Infectious Disease Society of America (IDSA) definition of high-level immunosuppression. Administration of both varicella and MMR vaccines are contraindicated until such time as the methotrexate dosage can be reduced. The 2013 IDSA definition of low-level immunosuppression for methotrexate is a dosage of less than 0.4 mg/kg/week.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>As a general rule, whenever feasible, it is recommended that non-live and live vaccines be administered 2 or more weeks before initiating immunosuppressive medications include human immune mediators like interleukins and colony-stimulating factors, immune modulators, and medicines like tumor necrosis factor-alpha inhibitors and anti-B cell agents.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is it true that egg allergy is not considered a contraindication to MMR vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Several studies have documented the safety of measles and mumps vaccine (which are grown in chick embryo tissue culture) in children with severe egg allergy. Neither the American Academy of Pediatrics nor ACIP consider egg allergy as a contraindication to MMR vaccine. ACIP recommends routine vaccination of egg-allergic children without the use of special protocols or desensitization procedures.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can I give MMR to a breastfeeding mother or to a breastfed infant?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Breastfeeding does not interfere with the response to MMR vaccine. Vaccination of a woman who is breastfeeding poses no risk to the infant being breastfed. Although it is believed that rubella vaccine virus, in rare instances, may be transmitted via breast milk, the infection in the infant is asymptomatic.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If a patient recently received a blood product, can he or she receive MMR vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes, but there should be sufficient time between the blood product and the MMR to reduce the chance of interference. The interval depends on the blood product received.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is it acceptable practice to administer MMR, Tdap, and influenza vaccines to a postpartum mom at the same time as administering RhoGam?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Receipt of RhoGam is not a reason to delay vaccination.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Please describe the current ACIP recommendations for the use of MMR vaccine in people who are infected with HIV.</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>People with HIV infection are at increased risk for severe complications if infected with measles. It is safe to vaccinate people with HIV infection who are not severely immunosuppressed. The current criteria for safe MMR vaccination of people with HIV infection are shown below, from the CDC General Best Practices Guidelines (see the section on altered immunocompetence, www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html):</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Two doses of MMR vaccine are recommended for all HIV-infected people age 12 months or older who do not have evidence of current severe immunosuppression (individuals age 5 years or younger must have CD4+T lymphocyte [CD4+] percentages at least 15% for at least 6 months, and individuals older than age 5 years must have CD4+ percentages at least 15% and CD4+ cell counts of at least 200 lymphocytes/mm3 for at least 6 months) and do not have current evidence of measles, rubella, and mumps immunity.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>In cases when only CD4+ cell counts or only CD4+ percentages are available for those older than age 5 years, the assessment of severe immunosuppression can be based on the CD4+ values (count or percentage) that are available. In cases when CD4+ percentages are not available for those age younger than 5 years, the assessment of severe immunosuppression can be based on age-specific CD4+ counts at the time CD4+ counts were measured; i.e., absence of severe immunosuppression is defined as at least 6 months above age-specific CD4+ count criteria: CD4+count greater than 750 lymphocytes/mm3 while age 12 months or younger, and CD4+count at least 500 lymphocytes/mm3 while age 1 through 5 years. Similarly, repeat doses of MMR vaccination are recommended for individuals with perinatal HIV infection who were vaccinated before establishing effective combination antiretroviral therapy (cART). They should receive 2 appropriately spaced doses of MMR vaccine once effective cART has been established (individuals age 5 years or younger must have CD4+ percentages of at least 15% for at least 6 months; individuals older than 5 years of age must have CD4+ percentages at least 15% and CD4+ counts of at least 200 lymphocytes/mm3 for at least 6 months) unless they have other acceptable current evidence of measles, rubella, and mumps immunity.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>HIV-infected people who are receiving regular doses of IGIV are unlikely to respond to varicella vaccine or MMR vaccine because of the presence of passively acquired antibody. However, because of the potential benefit, MMR and varicella vaccines should be considered approximately 14 days before the next scheduled dose of IGIV (if not otherwise contraindicated), although an optimal immune response might not occur depending on the presence of neutralizing antibodies against the vaccine virus. Vaccination should be repeated (if not otherwise contraindicated) after the recommended interval (see Table 3-6 in the Timing and Spacing of Immunobiologics of this document). In most cases, this is after the therapy has been discontinued.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Administer the first dose at 12 through 15 months and the second dose to children age 4 through 6 years, or as early as 28 days after the first dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What is the recommended length of time a person who wishes to become pregnant should wait after receiving rubella (MMR) vaccine before becoming pregnant?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Although the MMR vaccine package insert recommends a 3-month deferral of pregnancy after MMR vaccination, CDC and ACIP recommend deferral of pregnancy for 4 weeks.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How should all people capable of child-bearing be screened for pregnancy before MMR vaccination?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP recommends that people capable of bearing children be asked if they are currently pregnant or attempting to become pregnant. Vaccination should be deferred for those who answer "yes." Those who answer "no" should be advised to avoid pregnancy for 4 weeks following vaccination. Pregnancy testing is not necessary.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If a pregnant person inadvertently receives MMR vaccine, how should the patient be advised?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No specific action needs to be taken other than to reassure the pregnant person that no adverse outcomes are expected as a result of this vaccination. MMR vaccination during pregnancy is not a reason to terminate the pregnancy.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can we give an MMR to a 15-month-old whose mother is 2 months pregnant?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Measles, mumps, and rubella vaccine viruses are not transmitted from the vaccinated person, so MMR vaccination of a household contact does not pose a risk to a pregnant household member.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I have a female patient who has a non-immune rubella titer two months after her second MMR vaccination. Should she be revaccinated? If so, should the titer again be checked to determine seroconversion?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP recommends that vaccinated people of childbearing age who have received one or two doses of rubella-containing vaccine and have a rubella serum IgG levels that is not clearly positive should be administered one additional dose of MMR vaccine (maximum of three doses).</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How soon after delivery can MMR be given to the mother?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>MMR can be administered any time after delivery. The vaccine should be administered to a post-partum mother who is susceptible to either measles, mumps, or rubella before hospital discharge, even if the mother has received RhoGam during the hospital stay, leaves in less than 24 hours, or is breastfeeding.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is there any evidence that MMR or thimerosal causes autism?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. This issue has been studied extensively, including a thorough review by the independent Institute of Medicine (IOM). The IOM issued a report in 2004 that concluded there is no evidence supporting an association between MMR vaccine or thimerosal-containing vaccines and the development of autism.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A few parents are asking that their children receive separate components of the MMR vaccine because they fear MMR may be linked to autism. What should I do?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Merck no longer produces single antigen measles, mumps, and/or rubella vaccines for the U.S. market. Only combined MMR is available. You should educate parents about the lack of association between MMR and autism.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How likely is it for a person to develop arthritis from rubella vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Arthralgia (joint pain) and transient arthritis (joint redness or swelling) following rubella vaccination occurs only in people who were susceptible to rubella at the time of vaccination. Joint symptoms are uncommon in children and in adult biological males. About 25% of non-immune post-pubertal biological females report joint pain after receiving rubella vaccine, and about 10% to 30% report arthritis-like signs and symptoms.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>When joint symptoms occur, they generally begin 1 to 3 weeks after vaccination, usually are mild and not incapacitating, last about 2 days, and rarely recur.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is there any harm in giving an extra dose of MMR to a child of age seven years whose record is lost and the mother is not sure about the last dose of MMR?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>In general, although it is not ideal, receiving extra doses of vaccine poses no medical problem. However, receiving excessive doses of tetanus toxoid (e.g., DTaP, DT, Tdap, or Td) can increase the risk of a local adverse reaction.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How long can reconstituted MMR vaccine be stored in a refrigerator before it must be discarded?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The amount of time in which a dose of vaccine must be used after reconstitution varies by vaccine and is usually outlined in the vaccine's package insert. MMR must be used within 8 hours of reconstitution. MMRV must be used within 30 minutes; other vaccines must be used immediately. Immunize.org has a staff education piece that outlines the time allowed between reconstitution and use, as stated in the package inserts for a number of vaccines.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Once MMR vaccine has been reconstituted with diluent, how soon must it be used?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The guidance for handling after reconstitution is the same for both brands of MMR vaccine (MMRII and Priorix). It is preferable to administer MMR immediately after reconstitution. If not used immediately, the reconstituted vaccine should be store refrigerated (2°C to 8°C [36°F to 46°F]) until use. If reconstituted MMR is not used within 8 hours, it must be discarded.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I misplaced the diluent for the MMR dose so I used normal saline instead. Is there any problem with doing this?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Only the diluent supplied with the MMR vaccine should be used to reconstitute any vaccine. A vaccine reconstituted with the incorrect diluent should be repeated.</p>
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
