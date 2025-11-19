import Header from '@/components/Header';

export default function FAQVaricella() {
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
        <h2 className="about-lang-title" style={{textAlign:'center', fontSize:'2rem', margin:'0'}}>FAQ – Varicella</h2>
      </section>

      {/* Varicella FAQ content */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>
          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems:'flex-start'}}>
              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How is varicella transmitted and for how long is an infected person contagious?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The varicella zoster virus (VZV) spreads from person to person by direct contact or through the air by coughing or sneezing. It is highly contagious. It can also be spread through direct contact with fluid from a blister of a person infected with varicella, or from direct contact with a skin lesion from a person with zoster (shingles). People with varicella are infectious 1 to 2 days before skin lesions appear until all lesions have crusted over, usually 4 to 7 days after the appearance of skin lesions.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What do you give to a child younger than 1 year of age if they were exposed to the chickenpox or zoster virus?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The minimum age for varicella vaccine is 12 months. Vaccination is not recommended for infants younger than 12 months of age even as post-exposure prophylaxis. CDC recommends that a healthy infant should receive no specific treatment or vaccination after exposure to VZV. The child can be treated with an appropriate antiviral medication if chickenpox occurs.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Does ACIP recommend giving varicella vaccine to infants before age 1 year if they are traveling internationally?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. ACIP recommends giving a dose of MMR to infants age 6 through 11 months before international travel, but not varicella vaccine. Varicella vaccine is neither approved nor recommended for children younger than age 12 months in any situation.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can varicella vaccine be used as postexposure prophylaxis for a 9-month-old who was exposed to herpes zoster?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Varicella vaccine is neither approved nor recommended for children younger than age 12 months. Assuming that the child is not immunocompromised, varicella zoster immune globulin (VariZIG) is also not recommended.<br />
              ACIP does not have a recommendation for acyclovir for varicella postexposure prophylaxis. The American Academy of Pediatrics provide some guidance on this issue in the current edition of the Red Book.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I have a patient who is 52 years old and is immigrating to the U.S. She received a dose of recombinant zoster vaccine (Shingrix) at age 50. The immigration requirements state she should receive 2 doses of varicella vaccine. Does she need additional varicella vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Recombinant zoster vaccine (RZV, Shingrix, GSK) does not count as the first of two doses of varicella vaccine. Shingrix is not licensed and has not been evaluated for the prevention of primary varicella infection (i.e., chickenpox). To meet the immigration requirements, you should give a dose of varicella vaccine now and a second dose at least 4 weeks later. The varicella vaccine doses will not be harmful and will allow your patient to meet the regulatory requirement.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Concerning the recommendation for a second dose of varicella vaccine, does CDC recommend that a teen who received only one varicella vaccine when they were preschool age get a second dose now?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. For everyone whose varicella immunity is based on vaccination, 2 doses of varicella vaccine are recommended.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Originally, ACIP only recommended one dose of varicella vaccine for children. Why did ACIP later revise its recommendations to add a second dose of varicella vaccine for all children?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>In the ten years following vaccine licensure in 1995, there was a significant decline in varicella disease, as well as varicella-related hospitalizations and deaths. Although a 1-dose regimen was estimated to be 80% to 85% effective, breakthrough disease was still occurring in highly vaccinated populations. A 2-dose regimen was adopted in 2006 to further reduce the risk of disease among vaccinated people whose numbers would accumulate over time, which could lead to varicella disease later in life when it can be more severe.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Should a child who has had chickenpox prior to the first birthday get the first dose of varicella vaccine at age 1 year?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If the child had confirmed varicella disease or laboratory evidence of prior disease, it is not necessary to vaccinate regardless of age at infection. If there is any doubt that the illness was actually varicella, the child should be vaccinated.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If an adult or child has not had documented chickenpox but has had shingles, is varicella vaccination recommended?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. Shingles is caused by varicella zoster virus, the same virus that causes chickenpox. A history of shingles based on a healthcare provider diagnosis is evidence of immunity to chickenpox. A person who has had shingles does not need to be vaccinated against varicella. The person should still receive zoster vaccine, however, if it is not contraindicated and the person is age 50 or older or is age 19 or older and immunocompromised.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Should a person who received 2 doses of varicella vaccine be vaccinated for herpes zoster when they turn 50?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. In its 2018 recommendations for the prevention of herpes zoster, ACIP states that Shingrix may be used in adults age 50 years or older irrespective of prior receipt of varicella vaccine or live zoster vaccine (Zostavax, Merck). Shingrix is also recommended for adults age 19 and older who are immunocompromised due to disease or treatment if they have a history of varicella illness or varicella vaccination.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If a child has a very mild case of chickenpox (for example, only 5 to 10 pox), is s/he immune or should s/he be vaccinated?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>A mild case of chickenpox produces immunity to varicella as does a moderate or severe case. A child with a reliable history of chickenpox does not need to receive varicella vaccine. However, if there is any doubt that the mild illness really was chickenpox, it is best to vaccinate the child. There is no harm in vaccinating a child who is already immune.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I understand that varicella vaccine can be used in postexposure settings. How soon after exposure does the vaccine need to be administered?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Varicella vaccine is most effective in preventing chickenpox or reducing the severity of the disease if used within 72 hours (3 days), and may still be helpful up to 5 days after exposure. However, not every exposure to varicella leads to infection, so for future immunity, varicella vaccine should be given to a person age 12 months or older who does not have a contraindication to vaccination, even if more than 5 days have passed since an exposure.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A healthcare worker with no history of chickenpox, and unknown serologic immunity, was exposed to a patient with zoster. She received varicella vaccine two days later. She developed a pruritic maculopapular rash 11 days after vaccination. Is the rash from the vaccine or from her zoster exposure?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The only way to determine whether the rash is caused by wild-type varicella or vaccine virus is to try to isolate virus from the rash and send it to a laboratory that is capable of differentiating wild and vaccine-type virus. This is generally not practical. Given the history, the conservative approach is to assume she has an active case of chickenpox and act according to your infection control guidelines.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Does varicella vaccine affect tuberculosis skin test readings in the same way that MMR does?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There is currently no information on the effect of varicella vaccine on reactivity to a tuberculin skin test (TST). Until information is available, it is prudent to apply the same rules to varicella vaccine as are applied to MMR: a TST (i.e., PPD) may be applied before (preferably) or simultaneously with varicella vaccine. If vaccine has been given, delay the TST for at least 4 weeks.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What are the recommendations for varicella vaccination before and after pregnancy?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Live varicella vaccine should not be given to anyone known to be pregnant. If a person who is planning to become pregnant in the future comes in for a visit or an annual exam, the varicella history should be obtained and if indicated, 2 doses of vaccine should be given, spaced 4 to 8 weeks apart. Vaccine recipients capable of becoming pregnant should be counseled to avoid pregnancy for one month following each dose of varicella vaccine. A person who is inadvertently vaccinated while pregnant or becomes pregnant within a month of vaccination should be counseled about the theoretical risk to the fetus; however, it should not be considered a reason to terminate a pregnancy. Pregnant people should be assessed for evidence of varicella immunity and if non-immune, should receive the first dose of varicella vaccine following completion of the pregnancy and prior to hospital discharge. A second dose should be given 4 to 8 weeks later.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How long should a person who has had varicella vaccination wait before becoming pregnant?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Contrary to the information provided in the vaccine package insert, which states that pregnancy should be avoided for 3 months, the ACIP recommends that a wait of 1 month is sufficient.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If a person receives varicella vaccine and subsequently confirms pregnancy, what should the person be told about the risk to the fetus?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>To date, no adverse outcomes of pregnancy or in a fetus have been reported among people who inadvertently received varicella vaccine shortly before or during pregnancy. The risk of congenital varicella syndrome following varicella disease is small, so the risk of congenital anomalies following vaccination with live attenuated varicella zoster virus (VZV)-containing vaccine is probably very small.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Merck and the Centers for Disease Control and Prevention (CDC) jointly operated a pregnancy registry for women exposed to VZV-containing vaccines for seventeen years after the licensure of varicella vaccine. The registry was discontinued in 2013, having found no signals to indicate a risk of Congenital Varicella Syndrome or pattern of birth defects related to vaccination with VZV-containing vaccines.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What is the recommended schedule for vaccinating a child? What about adults?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>For children, the first dose should be given at age 12 months with a second dose given at age 4 through 6 years. The second dose could be given earlier, if necessary, as long as there is a 3-month (12-week) interval between doses. Although a 3-month minimum interval is recommended in children younger than age 13, the second dose does not need to be repeated if separated from the first dose by a shorter interval of at least 4 weeks.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>All children age 13 years and older as well as adults without evidence of immunity should also have documentation of 2 doses of varicella vaccine, separated by a minimum interval of 4 weeks.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A child received only one dose of varicella vaccine and subsequently tests positive for varicella IgG antibody. Does the child still need a second dose of varicella vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Varicella postvaccination serologic testing is not recommended; however, if a person tests positive for varicella antibody 28 days or more after vaccination, the Advisory Committee on Immunization Practices (ACIP) considers the person to be immune. Studies have shown that a second dose boosts antibody titers and indicators of cell-mediated immunity significantly above the levels produced by a single dose. A second dose may be required to comply with school entry or institutional immunization requirements, regardless of serologic test results.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A nursing student received 2 valid, documented doses of varicella vaccine. For whatever reason, she subsequently had a titer drawn. The titer was negative. Do you recommend revaccination with 2 doses of varicella vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. Documented receipt of 2 doses of varicella vaccine supersedes results of subsequent serologic testing. Most commercially available tests for varicella antibody are not sensitive enough to detect vaccine-induced antibody, which is why CDC does not recommend post-vaccination testing</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What are the contraindications and precautions to varicella vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}><strong>Contraindications:</strong><br />
              History of a serious allergic reaction (e.g., anaphylaxis) after a previous dose of varicella vaccine or to a varicella vaccine component. For information on vaccine components, refer to the manufacturer's package insert (www.immunize.org/fda).<br />
              Pregnancy<br />
              Severe immunodeficiency (e.g., from hematologic and solid tumors, receipt of chemotherapy, congenital immunodeficiency, long-term immunosuppressive therapy [e.g., two weeks or more of daily receipt of 20 mg or more, or 2 mg/kg body weight or more, of prednisone or equivalent] or patients with HIV infection who are severely immunocompromised [a child age 1 through 5 years with CD4+ T-lymphocyte percentage less than 15% or a person age 6 years or older with a CD4+ T-lymphocyte count less than 200 cells per microliter])<br />
              Family history of congenital or hereditary immunodeficiency in first-degree relatives (e.g., parents, siblings) unless the immune competence of the potential vaccine recipient has been clinically substantiated or verified by a laboratory<br />
              <strong>Precautions:</strong><br />
              Recent receipt (within the previous 11 months) of antibody-containing blood product (specific interval depends on product)<br />
              Moderate or severe acute illness with or without fever (defer until recovery)<br />
              Use of aspirin or aspirin-containing products<br />
              Receipt of specific antiviral drugs (acyclovir, famciclovir, or valacyclovir) 24 hours before vaccination (avoid use of these antiviral drugs for 14 days after vaccination)</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What are the recommendations for the use of varicella vaccine in children with HIV or other immunodeficiencies?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The CDC "General Best Practice Guidelines for Immunization" section on altered immunocompetence recommends varicella vaccination of children with humoral (but not cellular) immunodeficiencies. In addition, single-antigen varicella vaccine should be considered for HIV-infected children age 1 through 5 years with CD4+ T-lymphocyte percentages greater than or equal to 15% for at least 6 months or for children age 6 years and older with CD4+ T-lymphocytes count greater than or equal to 200 cells per microliter for at least 6 months. Eligible children should receive 2 doses of varicella vaccine with a 3-month interval between doses.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Recently we had a one-year-old with congenital heart disease and who is on chronic aspirin therapy in for a well-child check and routine vaccination. Are there any recommendations regarding varicella vaccine being given to children who are on chronic aspirin therapy?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The ACIP's varicella vaccine recommendations state that no adverse events associated with the use of salicylates after varicella vaccination have been reported, however, the vaccine manufacturer recommends that vaccine recipients avoid using salicylates for 6 weeks after receiving varicella vaccines because of the association between aspirin use and Reye syndrome after varicella disease (chickenpox). Vaccination with subsequent close monitoring should be considered for children who have rheumatoid arthritis or other conditions requiring therapeutic aspirin. The risk for serious complications associated with aspirin is likely to be greater in children in whom natural varicella develops than it is in children who receive the vaccine containing attenuated varicella zoster virus. In other words, the benefit of varicella vaccine likely outweighs the theoretical risk of Reye syndrome.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>After receiving varicella vaccine, should healthcare personnel avoid contact with immunocompromised patients?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>This is not necessary unless the person who was vaccinated develops a rash.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If a patient is breast-feeding her six-month-old baby, can she receive varicella vaccine without the risk of transmitting the vaccine virus to her baby?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There has been only one published report of mother to child transmission of varicella vaccine virus. If the susceptible woman were to be infected with wild varicella virus, the risk of transmission to the infant would be much higher. Breastfeeding is not a contraindication or a precaution to varicella vaccination of the mother when vaccination is indicated.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A 10-year-old girl came to our immunization clinic, and the nurse noted crusted lesions on her arms and legs. The parent said the child had had chickenpox a week earlier. The girl was not ill, so we vaccinated her. But now I wonder if her recent case of chickenpox might interfere with her immune response to vaccines.</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>A previous history of chickenpox disease, even recent disease, is not known to interfere with the immune response to different vaccines. To review the true contraindications and precautions to vaccination,</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We have a patient who has selective IgA deficiency. We also have patients with selective IgM deficiency. Can MMR or varicella vaccine be administered to these patients?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There is no known risk associated with MMR or varicella vaccination in someone with selective IgA or IgM deficiency. It is possible that the immune response may be weaker, but the vaccines are likely effective.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If a child had 1 varicella vaccination and developed a vesicular (chickenpox-like) rash at the vaccination site 7 to 10 days after vaccination, does the patient still need the second dose? What if the rash covered the entire body?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If you believe the child had varicella disease (that is, breakthrough varicella) after the first dose, the child does not need another dose. If you are uncertain whether the child had varicella or a rash related to varicella vaccination, the second dose should be administered on schedule. If in doubt, give the second dose. If this was a case of breakthrough varicella, a second dose will not be harmful.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If a child breaks out in 5 to 10 maculopapular spots 2 weeks following varicella vaccination, can s/he go to school?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Transmission of varicella vaccine virus is a rare event, and appears to occur only when the vaccinated person develops a vesicular rash. A maculopapular rash 2 weeks after varicella vaccine may not have been caused by the vaccine. If the rash were caused by the vaccine, the risk of transmission is very small; however, the child should avoid close contact with people who do not have evidence of varicella immunity and who are at high risk of complications of varicella, such as immunocompromised people, until the rash has resolved.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If a vaccinated child gets 5 to 10 vesicular lesions 2 weeks after vaccination, can s/he attend school?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>You cannot distinguish a mild case of varicella disease from a rash caused by the vaccine. The child may have been infected with varicella at about the same time s/he was vaccinated. The conservative approach would be to treat the child as if s/he had chickenpox and restrict her/his activities until all the lesions crust.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We have a 40 lb six-year-old patient who has been taking 15 mg of methotrexate weekly for arthritis for 12 months. Can we give the child MMR and varicella vaccine based on this methotrexate dosage?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Based on the weight and dosage provided (40 lbs and 15 mg/week), the child is currently receiving more than 0.4 mg/kg/week of methotrexate. This meets the Infectious Disease Society of America (IDSA) definition of high-level immunosuppression. Administration of both varicella and MMR vaccines are contraindicated until such time as the methotrexate dosage can be reduced. The 2013 IDSA definition of low-level immunosuppression for methotrexate is a dosage of less than 0.4 mg/kg/week.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>As a general rule, whenever feasible, it is recommended that non-live and live vaccines be administered 2 or more weeks before initiating immunosuppressive medications include human immune mediators like interleukins and colony-stimulating factors, immune modulators, and medicines like tumor necrosis factor-alpha inhibitors and anti-B cell agents.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>An 8-month-old was erroneously given varicella vaccine. What might the consequences be? What should we do now?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>An 8-month-old is likely to have residual passive varicella antibody from his or her mother. The vaccine probably will have no effect, and no action is necessary. The dose should not be counted, and the child should be revaccinated on schedule at 12 through 15 months of age.</p>
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


