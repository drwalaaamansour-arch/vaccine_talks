import Header from '@/components/Header';

export default function FAQZoster() {
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
        <h2 className="about-lang-title" style={{textAlign:'center', fontSize:'2rem', margin:'0'}}>FAQ – Herpes Zoster</h2>
      </section>

      {/* Zoster FAQ content */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>
          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems:'flex-start'}}>
              <div style={{marginBottom:'1.5rem', padding:'1rem', background:'rgba(64, 96, 109, 0.1)', borderRadius:'8px', border:'2px solid rgba(64, 96, 109, 0.2)'}}>
                <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', marginBottom:'0.5rem'}}>N.B.</h3>
                <p className="about-lang-intro" style={{margin:0}}><strong>Egyptian insert recommended 2 doses of RZV for the prevention of herpes zoster and related complications in adults age 18 years or older who are or will be immunodeficient or immunosuppressed because of disease or therapy.</strong></p>
              </div>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What is the cause of herpes zoster (shingles)?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Herpes zoster is a painful rash that occurs along one or more dermatomes. Zoster is caused by reactivation of latent varicella zoster virus infection from a prior chickenpox infection. People who have had a prior infection with varicella zoster virus (chickenpox) are at risk of shingles.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can you catch zoster from a person with active zoster infection?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Zoster is caused by reactivation of a latent varicella virus infection (from having chickenpox in the past). Zoster is not passed from one person to another through exposure to another person with zoster. However, if a person who is susceptible to chickenpox (i.e., they had never had chickenpox and were not vaccinated against chickenpox) comes in direct contact with a person with a zoster rash, the virus could be transmitted to the susceptible person. The exposed person would develop chickenpox, not zoster. Covering the zoster rash reduces the chances of transmitting varicella zoster virus.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>For our "Mother's Day Out" program, one of the teachers has shingles. The program serves moms of 2-month-olds to 4-year-olds. All children are up to date with their vaccinations, but some are too young to have received varicella vaccine. Is it safe for the teacher to work?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>In a school setting, an immunocompetent person with zoster (staff or students) can remain at school as long as the lesions can be completely covered. People with zoster should be careful about personal hygiene, wash their hands after touching their lesions, and avoid close contact with others. If the lesions cannot be completely covered and close contact avoided, the person should be excluded from the school setting until the zoster lesions have crusted over.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How effective is Shingrix zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Shingrix was studied in immunocompetent adults in 2 pre-licensure clinical trials. Efficacy against shingles was 97% for people 50–59 years of age, 97% for people 60–69 years of age, and 91% for people 70 years and older. Among people 70 years and older vaccine efficacy was 85% four years after vaccination.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Vaccine effectiveness (VE) has been evaluated for a limited number of specific immunocompromising conditions. VE estimates vary depending upon the underlying cause of immunocompromise. Studies have estimated VE of 68.2% for autologous hematopoietic cell transplant recipients, and 87.2% and 90.5% for patients with hematologic malignancies and potential immune-mediated diseases, respectively.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Will administering Shingrix zoster vaccine reduce the risk of postherpetic neuralgia (PHN) if a vaccinated person develops shingles?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. In clinical trials among immunocompetent adults age 50 years or older, Shingrix reduced the risk of PHN by 91%. One study among hematopoietic stem cell transplant recipients reported that vaccination reduced the risk of PHN by 89%.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>To whom should Shingrix zoster vaccine be given?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Shingrix (recombinant zoster vaccine, RZV) is recommended for the prevention of herpes zoster and related complications for immunocompetent adults 50 years of age and older, including those who previously received the live zoster vaccine, Zostavax. On October 20, 2021, ACIP recommended 2 doses of RZV for the prevention of herpes zoster and related complications in adults age 19 years or older who are or will be immunodeficient or immunosuppressed because of disease or therapy.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>My clinic cannot consistently keep Shingrix zoster vaccine in stock due to high demand. How should we handle challenges ensuring patients receive a second dose?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Clinicians and patients should make every effort to ensure that two doses of Shingrix are administered within the recommended interval of 2 to 6 months. If more than 6 months have elapsed since the first dose of Shingrix, administer the second dose when possible. Do not restart the vaccine series.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What is the minimum interval between doses of Shingrix zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The recommended interval between the two Shingrix series doses is 2 to 6 months. The minimum interval between doses of Shingrix is 4 weeks. If the second RZV dose is given more than 4 days sooner than 4 weeks after the first dose, a valid second dose should be repeated at least 4 weeks after the dose given too early.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>For adults who are or will be immunodeficient or immunosuppressed and who would benefit from a shorter vaccination schedule, the second dose can be administered 1–2 months (a minimum of 4 weeks) after the first dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What is the minimum age for administering Shingrix zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The routinely recommended minimum age for Shingrix among immunocompetent adults is 50 years. However, if a dose is inadvertently administered to an immunocompetent adult 18 through 49 years of age CDC does not recommend repeating the dose. The second Shingrix dose should not be administered until the 50th birthday.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If the second dose of Shingrix zoster vaccine is delayed more than 6 months after the first dose do I need to restart the series?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. The Shingrix (GSK) zoster vaccine series does not need to be restarted when more than 6 months have elapsed since the first dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is there an upper age limit for receipt of Shingrix (GSK) zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. The risk of herpes zoster and the complication of post-herpetic neuralgia (PHN) increase with advancing age. Shingrix has been demonstrated to provide a high degree of protection against herpes zoster and PHN among recipients older than age 80 years.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Should a person who received 2 doses of varicella vaccine but never had chickenpox be vaccinated with Shingrix?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Shingrix may be administered to people who have previously received 2 doses of varicella vaccine. Compared to people who have had chickenpox, the risk of zoster among recipients of varicella vaccine (which contains a live-attenuated strain of varicella virus) is much lower, but it is still possible for them to develop zoster.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Before administering Shingrix is it necessary to ask if the person has ever had chickenpox or shingles?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>All immunocompetent people age 50 years or older-whether they have a history of chickenpox or shingles or not-should be given Shingrix unless they have a medical contraindication to vaccination. Among this population it is not necessary to ask about a history of chickenpox or to test for varicella antibody prior to or after giving the vaccine.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Among immunocompromised people age 19 years or older, evidence of a history of varicella illness or varicella vaccination (confirming the need for Shingrix zoster vaccine as a result of a history of exposure to a live varicella virus, whether the wild or live-attenuated vaccine strain) IS recommended. Shingrix may be administered to an immunocompromised person who has had chickenpox or shingles or has previously been vaccinated with varicella vaccine or zoster vaccine live.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Should people who haven't had chickenpox or any doses of varicella-containing vaccine be vaccinated with recombinant zoster vaccine (Shingrix)?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>A person who has never been exposed to varicella virus through infection or vaccination with varicella vaccine or zoster vaccine live is not at risk for shingles. Shingrix has not been evaluated for the prevention of primary infection with varicella virus (i.e., chickenpox). People who have never had chickenpox are recommended to receive 2 doses of varicella vaccine.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can someone who has experienced an episode of shingles be vaccinated with Shingrix zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Adults with a history of herpes zoster should receive Shingrix. If a person is experiencing an episode of zoster, vaccination should be delayed until the acute phase of the illness is over and symptoms abate.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A 33-year-old patient in my practice has already suffered from three episodes of shingles. He would like to receive Shingrix zoster vaccine. Is this a good idea?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP recommends vaccination with Shingrix for adults age 19 years or older who are immunodeficient or immunosuppressed due to disease or therapy. Repeated shingles episodes are often associated with immunocompromise. If your patient's recurrent shingles episodes are evaluated and clinically concluded to be the result of immunodeficiency or immunosuppression, he should be vaccinated with a two-dose series of Shingrix.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If a person was exposed to shingles by a spouse within the last few days, is there a recommended waiting period before the exposed person can receive zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There is no waiting period in such a situation. Shingles is not caused by exposure to another person with shingles. Shingles is caused by the reactivation of varicella zoster virus (VZV) in people who have had a prior VZV infection or varicella vaccination. However, exposure to someone with shingles can possibly cause primary varicella infection (i.e., chickenpox) in a person with no immunity to varicella zoster virus (VZV) from either vaccination or prior chickenpox infection.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We have a healthy 20-year-old patient who had a history of chickenpox disease. They now have shingles even though they have no known immunocompromising condition. Should we administer Shingrix zoster vaccine after they recover?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The Advisory Committee on Immunization Practice (ACIP) does not recommend zoster vaccination for immunocompetent people younger than age 50 years regardless of their history of shingles.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can I give our long-term care residents Shingrix zoster vaccine, injectable influenza, and pneumococcal vaccines on the same day?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. CDC's "General Best Practice Guidelines for Immunization" advise that non-live vaccines, such as Shingrix, can be administered concomitantly, at different anatomic sites, with any other live or non-live vaccine, including the vaccines you listed. They should be given as separate injections, not combined in the same syringe.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Patients who receive multiple vaccines containing non-aluminum adjuvants at one visit may experience more discomfort from side effects.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is documented receipt of Shingrix zoster vaccine, in the absence of other criteria, proof of immunity to varicella?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. Documented receipt of Shingrix cannot be used as proof of immunity to varicella. Shingrix has not been studied or approved for the prevention of primary varicella (i.e., chickenpox). Additionally, a dose of Shingrix cannot be counted as a dose of varicella vaccine.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is Shingrix zoster vaccine effective for immunocompromised adults?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Shingrix has been studied in people with certain types of immunocompromise and has been shown to have moderate to high effectiveness against herpes zoster and postherpetic neuralgia. Because the causes of immunocompromise are so varied, the effectiveness and durability of protection provided by Shingrix also may vary depending upon the precise nature and severity of immunocompromise in a given individual.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is Shingrix zoster vaccine (RZV) safe for immunocompromised adults?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>ACIP and the FDA have determined that Shingrix is acceptably safe in immunocompromised individuals. Immune-mediated diseases were evaluated in six studies in five immunocompromised groups and were not increased among recombinant zoster vaccine (RZV, Shingrix) recipients. One study in patients with hematologic cancers reported on graft-versus-host-disease among hematopoietic cell transplant recipients and did not identify an increased risk among RZV recipients. One study among kidney transplant patients reported on graft rejection and did not identify an increased risk among RZV recipients. Local and systemic grade 3 reactions (reactions that interfere with daily activities) were evaluated in six studies in five immunocompromised groups. Local grade 3 reactions occurred in 10.7% to 14.2% of RZV recipients, and systemic grade 3 reactions occurred in 9.9% to 22.3% of RZV recipients. Systemic grade 3 reactions were also reported by 6.0% to 15.5% of placebo recipients in these studies.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What is the best time to vaccinate a patient who requires immunosuppression with Shingrix zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Timing of Shingrix vaccination should be evaluated on a case-by-case basis. When possible, patients should be vaccinated before becoming immunosuppressed. If vaccination before initiating immunosuppressive treatment is feasible, a shortened interval of 4 weeks between doses 1 and 2 may be considered. If vaccination before immunosuppression is not possible, providers should consider timing vaccination when the immune response is likely to be most robust.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Should an immunocompromised adult who has no history of chickenpox but who received only one dose of live-attenuated varicella vaccine receive Shingrix zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>An adult who has documentation of one dose of varicella vaccine is potentially at risk for chickenpox (from exposure to a person with chickenpox) AND herpes zoster (either from a possible previous unrecognized case of chickenpox or from the vaccine strain of the virus).<br />
              CDC subject matter experts advise that clinical management of a person with no proof of a past primary varicella infection and a history of only one varicella vaccination who is or will be immunocompromised depends upon the degree of immunocompromise of the patient:<br />
              If varicella vaccine is not already contraindicated due to significant immunocompromise, give the second varicella vaccine dose. Depending on the patient's immunocompromising condition or therapy, the clinician may then consider initiating the Shingrix zoster vaccine series at least 8 weeks after the second varicella vaccine dose to reduce the risk of herpes zoster.<br />
              If the patient already has significant immunocompromise and the second varicella vaccine dose is contraindicated, the clinician should: Consider the patient's herpes zoster risk (based on their immunocompromising condition or therapy). On a case-by-case basis and if the clinician determines it is indicated, administer the Shingrix series to reduce the risk of herpes zoster.<br />
              Be prepared to administer varicella immune globulin (VariZIG, Saol Therapeutics) in the event that the patient has a recognized exposure to a person with chickenpox, regardless of whether or not the patient received Shingrix.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>My patient recently underwent a hematopoietic cell transplant (HCT) and his oncology team plans to maintain him on antiviral therapy with valacyclovir for the next 12 months. When should he receive Shingrix zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Valacyclovir, acyclovir, and famciclovir are antiviral medications that are active against herpesviruses, including varicella zoster virus. The risk of shingles risk is reduced during antiviral treatment. Since Shingrix is not a live virus vaccine, Shingrix may be administered while patients are taking antiviral medications if indicated.<br />
              A patient who is taking a prophylactic antiviral for a fixed period of time while their immune system recovers from HCT, should ideally initiate vaccination with Shingrix about 2 months before discontinuing antiviral therapy.<br />
              Regardless of the duration of antiviral therapy after HCT, CDC recommends that autologous HCT recipients wait at least 3 months after transplant before initiating Shingrix vaccination. Allogenic HCT recipients should wait at least 6 months after transplantation.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I have an oncology patient age 35 years who had chickenpox as a child and is going to be initiating chemotherapy soon. What are the guidelines for zoster prevention in such a situation?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The risk for zoster and its severe morbidity and mortality is much greater for immunosuppressed people. A 2-dose series of Shingrix recombinant zoster vaccine should be administered as soon as possible while the person's immune system is intact. In cases such as this, depending upon the timing of chemotherapy initiation, you may wish to consider a shorter interval of at least 4 weeks (1 month) in order to complete the series as soon as possible.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>When can a patient who is immunocompetent now but who was on immunosuppressive chemotherapy in the past receive zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>A person who was on immunosuppressive chemotherapy in the past but is not expected to be immunocompromised again may follow routine recommendations for shingles vaccination at age 50 years or older. If the patient is age 19 or older and expected to require repeated exposure to immunosuppressive chemotherapy in the future, then it is preferable to vaccinate now while the patient's immune system is more robust.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can someone with hepatitis C receive zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Hepatitis C infection is not a contraindication for Shingrix recombinant zoster vaccination. However, if someone with hepatitis C is receiving a medication that can cause immunosuppression, they should consult with their healthcare provider to discuss the clinical considerations for the timing of vaccination.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can a person age 60 years or older with a diagnosis of an autoimmune disease, such as lupus or rheumatoid arthritis, receive Shingrix zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Shingrix can be administered in this situation. Optimally, vaccination should occur when the disease is well-controlled and not during an acute disease flare.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>My patient takes rituximab. When is the best time to vaccinate him with Shingrix recombinant zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>For patients receiving anti-B cell therapies (e.g., rituximab), CDC recommends administering a dose of Shingrix approximately 4 weeks prior to the next scheduled therapy.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>My patient already has advanced HIV disease, is it too late to vaccinate with Shingrix recombinant zoster vaccine (RZV)?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. Antiretroviral treatment for HIV may improve immune response to vaccination; however, zoster vaccination with Shingrix does not have to be delayed in order to achieve viral suppression, especially if this will significantly delay vaccine administration. Patients with advanced HIV should receive Shingrix, because the risk of shingles is further increased in the setting of such immune compromise.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Can the Shingrix zoster vaccine cause shingles?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. Shingrix recombinant zoster vaccine contains only a small part of the varicella zoster virus that causes shingles. Shingrix does not contain any live varicella zoster virus.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What are the contraindications to Shingrix zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The only contraindication is a severe allergic reaction to a vaccine component or following a prior dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What are the precautions to the administration of Shingrix zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The only precaution is the presence of a moderate or severe acute illness, including having an active case of herpes zoster. If the patient has zoster, vaccination should be deferred until lesions have crusted and symptoms have abated.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There is currently no ACIP recommendation for Shingrix use in pregnancy; therefore, providers should consider delaying Shingrix until after pregnancy. There is no recommendation for pregnancy testing before vaccination.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>I have an immunocompromised patient who recently gave birth and is breastfeeding. Do we defer Shingrix zoster vaccine until breastfeeding ends?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Breastfeeding is NOT a precaution to vaccination with Shingrix (recombinant zoster vaccine, RZV). Recombinant vaccines pose no known risk to mothers who are breastfeeding or to their infants. Clinicians should consider vaccination without regard to breastfeeding status if Shingrix is otherwise indicated.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If an adult eligible for Shingrix (recombinant zoster vaccine, RZV) has already had zoster with postherpetic neuralgia or ophthalmic complications, when can they receive zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Once they are no longer acutely ill, they can be vaccinated with Shingrix. There is no evidence that vaccine will have therapeutic effect for a person with existing zoster or postherpetic neuralgia.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How long should we wait before giving Shingrix recombinant zoster vaccine to a patient who has had a blood transfusion?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There is no waiting period for administering Shingrix following transfusion. Shingrix contains no live virus so may be given at any time after receipt of a blood product.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We have a 61-year-old patient who is taking 500 mg of valacyclovir (Valtrex) daily. Can she receive Shingrix zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Acyclovir, famciclovir, and valacyclovir are antiviral drugs that are active against herpesviruses. These drugs will have no effect on Shingrix, which is a recombinant vaccine that does not contain live varicella virus.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If my patient is taking Tamiflu (oseltamivir), can she receive Shingrix zoster vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Although oseltamivir is an antiviral drug, it is only effective against influenza A and B viruses. Shingrix recombinant zoster vaccine does not contain live virus and will not be affected by oseltamivir.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How is recombinant zoster vaccine (RZV, Shingrix) administered?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Shingrix (GSK) is available in two presentations: a lyophilized powder that must be reconstituted using the accompanying adjuvant solution, or a manufacturer-filled syringe (MFS) that does not require reconstitution before administration.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If using the presentation that must be reconstituted, reconstitute Shingrix using only the adjuvant solution provided with the vaccine antigen. After reconstitution, administer Shingrix immediately by the intramuscular route or store the reconstituted vaccine refrigerated between 2° and 8°C (36° and 46°F) and use within 6 hours. Discard reconstituted vaccine if not used within 6 hours or if frozen. If Shingrix is reconstituted with other than the supplied adjuvant solution, it should be repeated. The dose can be repeated immediately. There is no interval that must be met between these doses.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A patient was inadvertently given Shingrix zoster vaccine by the subcutaneous rather than the intramuscular route. Does the dose need to be repeated?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Shingrix zoster vaccine has been shown to be immunogenic when given by the subcutaneous route. A dose erroneously given by this route does not need to be repeated.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>When reconstituted, the volume of Shingrix zoster vaccine is more than 0.5 mL. Should the entire volume of reconstituted vaccine be administered or just 0.5 mL as indicated in the package insert?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>When using the presentation of Shingrix that requires reconstitution, the Shingrix adjuvant solution may contain up to 0.75 mL of liquid. The entire volume of the adjuvant solution should be withdrawn and used to reconstitute the lyophilized vaccine. After mixing, withdraw the recommended dose of 0.5 mL. Discard any reconstituted vaccine left in the vial.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>A 60-year-old patient was inadvertently given varicella vaccine instead of Shingrix zoster vaccine. Should the patient still be given Shingrix? If so, how long an interval should occur between the 2 doses?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>CDC recommends that if a provider mistakenly administers varicella vaccine to a person for whom zoster vaccine is indicated, no specific safety concerns exist, but the dose should not be considered valid. You should administer a dose of Shingrix zoster vaccine to the patient during that same visit (same day). If the error is not detected and corrected on the same day, Shingrix should be administered at least 8 weeks after receipt of the varicella vaccine. However, if Shingrix is administered less than 8 weeks after the varicella vaccine, it does not need to be repeated. A second dose of Shingrix should be given 2–6 months after the first dose of Shingrix.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If Shingrix recombinant zoster vaccine is erroneously given to a child for prevention of varicella, the dose is invalid, but is there a waiting period before a valid dose of varicella vaccine can be given? Is it OK to give a dose of varicella vaccine as soon as the error is discovered?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>There is no waiting period. The varicella vaccine dose can be given at any time after the Shingrix dose. Review your procedures to prevent this from happening again.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>While giving a dose of Shingrix the syringe came loose from the needle and part of the dose was lost. Will the patient be protected with this partial dose or does it need to be repeated?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>A dose less than the full 0.5 mL dose is generally not considered valid and should generally be repeated. If the patient is still in the office the dose can be repeated immediately. If the repeat dose cannot be given on the same day CDC recommends that it should be given 4 weeks after the invalid dose.</p>

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


