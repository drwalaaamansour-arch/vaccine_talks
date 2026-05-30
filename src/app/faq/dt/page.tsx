import Header from '@/components/Header';
import ArticlePageTitle from '@/components/ArticlePageTitle';
import { ARTICLE_META } from '@/lib/article-meta';

export default function FAQDT() {
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
      <section style={{padding: '0.5rem 1rem 0'}}>
        <ArticlePageTitle {...ARTICLE_META.faqDt} titleStyle={{textAlign: 'center', fontSize: '2rem', margin: 0}} locale="en">
          FAQ - DT Containing Vaccines
        </ArticlePageTitle>
      </section>

      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>
          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'flex-start'}}>
              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>Can a child or an adult who has had pertussis get the disease again?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Reinfection appears to be uncommon but does occur. Reinfection may present as a persistent cough rather than typical pertussis.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>If an adolescent or adult who has never received a dose of Tdap is either infected with or exposed to pertussis, is vaccination with Tdap still necessary, and if so when?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Adolescents or adults who have a history of pertussis disease generally should receive Tdap according to the routine recommendation. This practice is recommended because the duration of protection induced by pertussis disease is unknown (waning might begin as early as 7 years after infection) and because diagnosis of pertussis can be difficult to confirm.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>If a healthcare worker (HCW) receives tetanus-diphtheria-acellular pertussis (Tdap) vaccine and is then exposed to someone with pertussis, do you treat the vaccinated HCW with prophylactic antibiotics or consider them immune to pertussis?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Tdap vaccination status does not change the approach to evaluating postexposure prophylaxis when HCWs are exposed to pertussis. Tdap vaccines have an uncertain role in the prevention of transmission of pertussis and herd protection. Antipertussis antibody levels begin to decline precipitously after the first year following a single Tdap vaccination. Healthcare facilities should follow the post-exposure prophylaxis protocol for pertussis exposure. HCW can either receive postexposure prophylaxis or be carefully monitored for 21 days after pertussis exposure.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>What are the recommendations for vaccination of infants and young children with DTaP?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>All children should receive a series of DTaP at ages 2, 4, and 6 months, with boosters at ages 15-18 months and at 4-6 years. The fourth dose may be given as early as age 12 months if at least 6 months have elapsed since the third dose.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>What are the recommendations for use of Tdap in children and adults age 7 and older?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>A listing of the recommendations follows:</p>
              <ul className="about-lang-intro" style={{paddingLeft: '1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li>Tdap can be given regardless of the interval since the last Td was given. There is NO need to wait 2-5 years to administer Tdap following a dose of Td.</li>
                <li>Adolescents should receive a single dose of Tdap (instead of Td) at the 11-12-year-old visit.</li>
                <li>Adolescents and adults who have not received a dose of Tdap, or for whom vaccine status is unknown, should receive a single dose of Tdap as soon as feasible.</li>
                <li>Children age 7-10 years who are not fully immunized against pertussis should receive a single dose of Tdap; complete series with Td or Tdap as needed.</li>
                <li>All healthcare personnel should receive a single dose of Tdap as soon as feasible if they have not previously received Tdap.</li>
                <li>Pregnant teens and adults should receive Tdap during each pregnancy, preferably between 27 and 36 weeks&apos; gestation.</li>
                <li>Tdap may be administered in any situations where Td only was previously recommended.</li>
                <li>After an initial Tdap dose, either Tdap or Td can be used for decennial boosters.</li>
              </ul>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>How many doses of DTaP are needed before an infant is protected from pertussis?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Vaccine efficacy is 80%-85% following 3 doses of DTaP vaccine. Efficacy data after 1 or 2 doses are likely lower. The most effective way to prevent pertussis in early infancy is maternal Tdap vaccination during each pregnancy, preferably between 27 and 36 weeks. CDC evaluation found maternal vaccination in the third trimester prevents 78% of pertussis cases in infants younger than 2 months and reduces infant hospitalization risk by 90%.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>My 11-year-old received Tdap at age 7 years. Can I give another Tdap now?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. ACIP states that a child who receives Tdap at age 7-9 years as part of catch-up should receive another dose of Tdap at age 11 or 12 years.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>A 16-year-old received 2 Td doses then Tdap only 4 months later. Is he up to date?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. The minimum interval between second and third tetanus-containing doses is 6 calendar months. The pertussis component of Tdap counts, but the Td component is invalid. Give Td or Tdap 6 months after the invalid Tdap dose.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>Why does a child with first tetanus dose before age 1 need 4 total doses?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If the first tetanus-toxoid dose is administered before the first birthday, 4 doses are needed before starting the 10-year booster cycle. If first dose is after the first birthday, 3 doses are needed. Final dose should be spaced 6 months from the previous dose.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>When should adolescents who received Tdap at age 11-12 get the next Td/Tdap?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Give the booster dose 10 years later, unless needed sooner for wound prophylaxis or pregnancy.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>Patient had tetanus disease as a child. Is Tdap still needed?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Tetanus disease does not produce reliable immunity. Give Tdap now if no contraindications. If prior vaccination is undocumented, complete a 3-dose primary series (Tdap, then Td/Tdap 4-8 weeks later, then Td/Tdap 6-12 months after dose 2).</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>11-year-old got Td instead of Tdap. Must I wait before giving Tdap?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. Tdap should be administered as soon as possible.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>If Tdap was given at 26 weeks in pregnancy, should another dose be given at 27-36 weeks?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. If Tdap is administered earlier in pregnancy, do not repeat it. Only one dose is recommended during each pregnancy.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>Can you summarize DTaP, DT, Tdap, and Td products?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Children younger than 7 years use DTaP or DT; older children/adults use Tdap or Td. Pediatric formulations use uppercase D (DTaP, DT) because they contain more diphtheria component. Adult formulations use lowercase d (Tdap, Td). Tetanus component remains uppercase T in all products.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>If DTaP brand history is unknown, what should we do?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Use whatever DTaP vaccine is available for subsequent doses.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>What if Tdap was given to an infant instead of DTaP?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If given under age 7 as dose 1, 2, or 3, it is not valid and must be repeated with DTaP. If given as dose 4 or 5, it can count as valid.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>If a 6-year-old got Tdap instead of 5th DTaP, should they still get Tdap at 11-12?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. A second Tdap should be given at age 11 or 12 years.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>How do we rectify DTaP/Tdap given to wrong age groups?</h3>
              <ul className="about-lang-intro" style={{paddingLeft: '1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li>Tdap to child under 7 years as dose 1-3: invalid, repeat with DTaP.</li>
                <li>Tdap to child under 7 years as dose 4-5: may count as valid.</li>
                <li>Tdap/DTaP to fully vaccinated age 7-9: still give routine adolescent Tdap at 11-12 years.</li>
                <li>Tdap/DTaP to fully vaccinated age 10: count as adolescent Tdap dose.</li>
                <li>DTaP to undervaccinated age 7-9: count as catch-up Tdap; still give routine booster at 11-12 years.</li>
                <li>DTaP to undervaccinated age 10: count as routine adolescent Tdap.</li>
                <li>DTaP to age 11 years or older: count as routine Tdap dose.</li>
              </ul>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>Can influenza vaccine be given with DTaP and PCV?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. A CDC study showed a small increased febrile seizure risk in 24 hours after concomitant administration with PCV13 or DTaP, but overall risk is small and ACIP recommends same-visit administration when indicated.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>Is there an upper age limit for Tdap?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. There is no upper age limit for Tdap vaccination.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>A 50-year-old got DTaP instead of Tdap. What should be done?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Count the dose as Tdap. No repeat dose is needed, but implement steps to prevent administration errors.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>At what gestational age should Tdap be given in pregnancy?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Optimally between 27 and 36 weeks&apos; gestation, preferably in the early part of that window; however, it can be given at any time during pregnancy.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>If Td was given during pregnancy, how soon can Tdap be given?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Tdap can be given at any interval after Td and preferably between 27 and 36 weeks&apos; gestation.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>If interval between DTaP #3 and #4 was less than 6 months, should dose #4 be repeated?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If dose #4 was at least 4 months after dose #3 and at age 12 months or older, it does not need repeating, though a 6-month interval is preferred.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>What are contraindications for DTaP, DT, Tdap, and Td?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Contraindications include severe allergic reaction to a vaccine component or prior dose. Encephalopathy within 7 days of a previous pertussis-containing vaccine not due to another cause is a contraindication to DTaP and Tdap.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>What precautions should be observed?</h3>
              <ul className="about-lang-intro" style={{paddingLeft: '1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li>History of Guillain-Barre syndrome within 6 weeks after tetanus-toxoid vaccine</li>
                <li>History of Arthus-type hypersensitivity after tetanus/diphtheria toxoid vaccine (defer at least 10 years)</li>
                <li>Moderate or severe acute illness with or without fever</li>
                <li>For DTaP/Tdap: unstable neurologic disorder, uncontrolled seizures, or progressive encephalopathy until stabilized</li>
              </ul>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>Can an adult receive Tdap if they had a contraindication or precaution to DTaP as a child?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>It depends. If prior severe allergic reaction or encephalopathy after DTaP/DTP occurred, give Td instead of Tdap. For precautions, delay or weigh risk-benefit as clinically appropriate.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>Can an adult with controlled epilepsy receive Tdap?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Yes. Controlled epilepsy is not a contraindication to Tdap.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>Can further DTaP doses be given after an afebrile seizure within 3 hours of a previous dose?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Further evaluation is needed. Delay DTaP/DT until neurologic condition is evaluated and stabilized. Other indicated vaccines may continue. Decision on DTaP vs DT should be made no later than the first birthday.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>Does tetanus toxoid contain horse serum?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>No. Tetanus toxoid has never contained horse serum or protein.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>After puncture wound/laceration, can tetanus management wait until Monday?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Wounds, especially punctures or contaminated wounds, should be managed as soon as possible. Urgency depends on wound type and susceptibility to tetanus. Unvaccinated people with tetanus-prone wounds need Td/Tdap plus TIG promptly.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>When should tetanus immune globulin (TIG) be administered?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>TIG is recommended for any wound other than clean minor wounds when vaccination history is unknown or incomplete (fewer than 3 doses). People with HIV or severe immunodeficiency and contaminated wounds should also receive TIG regardless of vaccine history. Give as soon as possible.</p>

              <h3 style={{textAlign: 'left', fontSize: '1.15rem', fontWeight: 700, color: '#40606D', direction: 'ltr'}}>How long after injury is TIG still useful?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Tetanus incubation is typically 3-21 days. Expert opinion suggests little benefit in giving TIG more than about 1 week after injury in previously vaccinated people not up to date. For people believed completely unvaccinated, TIG may still be considered up to 3 weeks after injury. Td or Tdap should be given concurrently with TIG.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
