import type { FaqPageConfig } from '@/data/faq-pages/types';
import { FAQ_TOPIC_NOTE } from '@/data/faq-pages/shared';

export const FAQ_PNEUMOCOCCAL_PAGE: FaqPageConfig = {
  "metaKey": "faqPneumococcal",
  "topic": {
    "tag": "HCP · Clinical FAQ · Egypt",
    "title": "Pneumococcal",
    "subtitle": "FAQ",
    "emoji": "🦠",
    "lead": "Pneumococcal conjugate and polysaccharide vaccines by age and risk.",
    "backHref": "/hcp-faq",
    "backLabel": "← Back to HCP FAQ"
  },
  "note": FAQ_TOPIC_NOTE,
  "items": [
    {
      "id": "q-1",
      "question": "What causes pneumococcal disease?",
      "paragraphs": [
        "Pneumococcal disease is caused by Streptococcus pneumoniae, a bacterium that has more than 100 serotypes. Most serotypes can cause disease, but only a few produce the majority of cases of invasive pneumococcal disease."
      ]
    },
    {
      "id": "q-2",
      "question": "How does pneumococcal disease spread?",
      "paragraphs": [
        "The pneumococci bacteria are spread from person to person by droplets in the air. The pneumococci bacteria are common inhabitants of the human respiratory tract. They may be isolated from the nasopharynx of 5%–90% of healthy people."
      ]
    },
    {
      "id": "q-3",
      "question": "What are the types of invasive pneumococcal disease?",
      "paragraphs": [
        "Pneumococcal disease can be invasive, meaning a normally sterile part of the body is infected, or non-invasive. There are two major clinical syndromes of invasive pneumococcal disease (IPD): bacteremia (blood stream infection), and meningitis (infection of the meninges that surround the brain). They are both caused by infection with the same bacteria but produce different signs and symptoms.",
        "Pneumococcal pneumonia is a common disease caused by pneumococcal infection. Symptoms include abrupt onset of fever, shaking chills or rigors, chest pain, cough, shortness of breath, rapid breathing and heart rate, and weakness. The case-fatality rate is 5%–7% and is higher in adults 65 years and older and people with certain underlying medical conditions.",
        "Pneumococcal pneumonia can occur in combination with bacteremia and/or meningitis (invasive pneumococcal pneumonia), or it can occur alone (non-invasive pneumococcal pneumonia)."
      ]
    },
    {
      "id": "q-4",
      "question": "What is pneumococcal serotype 4 and when might it be considered when selecting a pneumococcal vaccine product for adults?",
      "paragraphs": [
        "S. pneumoniae bacteria are serotyped based on the polysaccharides in the outer capsule of the bacteria. The more than 100 known serotypes vary in how common they are and in what percentage of pneumococcal disease they cause. Pneumococcal vaccines are designed to target specific serotypes.",
        "Our understanding of which serotypes are currently causing invasive pneumococcal disease (IPD) in the United States comes primarily from CDC's Active Bacterial Core surveillance (ABCs) program, which routinely collects serotype data on IPDs leading to hospitalization in 10 states. From ABCs and similar systems in Alaska and the Navajo Nation, CDC has determined that certain adult populations in the western United States have a high percentage (30% or higher) of IPD caused by serotype 4. These areas include Alaska, Colorado, the Navajo Nation, New Mexico, and Oregon. Serotype 4 is not commonly detected in other regions of the United States.",
        "Typically, people in these geographic areas who develop serotype 4 IPD are adults younger than age 65 years who have specific underlying conditions or risk factors, such as alcoholism, chronic lung disease, cigarette smoking, homelessness, and injection drug use. Affected adults typically have not received a pneumococcal vaccination targeting serotype 4.",
        "Serotype 4 is included in all but one of the current pneumococcal vaccines offered to children and adults (PCV13, PCV15, PCV20, and PPSV23). Serotype 4 is not included in the adult PCV21 (Capvaxive, Merck). While ACIP has not expressed a preference for a specific pneumococcal vaccine schedule for adults, ACIP notes that vaccine schedules that include serotype 4 (PCV20 alone or PCV15 followed by PPSV23) are expected to provide broader serotype coverage for adults in these western states with underlying conditions or risk factors for serotype 4 IPD. ACIP and CDC have indicated they will continue to monitor the prevalence of serotype 4 and provide additional guidance if necessary."
      ]
    },
    {
      "id": "q-5",
      "question": "What are the differences between polysaccharide and conjugate vaccines?",
      "paragraphs": [
        "A polysaccharide vaccine is a type of vaccine that is composed of long chains of sugar molecules, called polysaccharides, that resemble the surface of certain serotypes of pneumococcal bacteria in order to help the immune system mount a response.",
        "A conjugate vaccine is a type of vaccine that joins a protein to an antigen (in the case of pneumococcal vaccines, the protein is connected to unique polysaccharides from the surface of each of the pneumococcal serotypes). The protein helps improve the quality of the immune system response to the vaccine compared to the response to an unconjugated polysaccharide."
      ]
    },
    {
      "id": "q-6",
      "question": "What are the main differences between pneumococcal polysaccharide vaccine (PPSV23) and the pneumococcal conjugate vaccines (PCVs)?",
      "paragraphs": [
        "The polysaccharide vaccine includes the different polysaccharides (chains of complex sugars) from different serotypes as the antigen. The conjugate vaccines have the polysaccharides for different serotypes attached (or conjugated) to a carrier protein. The immune response to the PPSV23 vaccine is a T-cell independent immune response, while the immune response to PCV vaccination is a T-cell dependent response that produces memory B-cells and reduces carriage of the bacteria in the respiratory track. The PPSV23 does not reduce bacterial carriage."
      ]
    },
    {
      "id": "q-7",
      "question": "How effective are pneumococcal conjugate vaccines at preventing pneumococcal carriage or disease?",
      "paragraphs": [
        "FDA licensed the first pneumococcal conjugate vaccine against seven serotypes (PCV7, Prevnar7, Pfizer) in 2000. A large clinical trial showed PCV7 reduced invasive disease caused by vaccine serotypes by 97%. Compared to unvaccinated children, children who received PCV7:",
        "Had 20% fewer episodes of chest X-ray confirmed pneumonia",
        "Had 7% fewer episodes of acute otitis media",
        "Underwent 20% fewer tympanostomy tube placements",
        "FDA licensed PCV13 based on studies comparing the serologic response of children who received PCV13 to those who received PCV7. Substantial evidence demonstrates that routine infant PCV7 and PCV13 vaccination reduces the carriage and transmission of vaccine serotypes.",
        "Researchers conducted a randomized placebo-controlled trial (CAPiTA trial) in the Netherlands among approximately 85,000 adults 65 years or older from 2008 through 2013. This trial evaluated the clinical benefit of PCV13 in the prevention of pneumococcal pneumonia. The results of the CAPiTA trial demonstrated:",
        "46% efficacy against vaccine-type pneumococcal pneumonia",
        "45% efficacy against vaccine-type non-bacteremic pneumococcal pneumonia",
        "75% efficacy against vaccine-type invasive pneumococcal disease (IPD, i.e., bacteremia or meningitis)",
        "FDA licensed PCV15 and PCV20 in 2021 based on studies comparing the serologic response of adults who received either PCV15 or PCV20 to those who received PCV13. These studies showed PCV15 and PCV20 induced antibody levels comparable to those induced by PCV13 and shown to be protective against invasive disease. FDA subsequently expanded the indication for use of PCV15 and PCV20 to include children starting at age 6 weeks in 2022 and 2023, respectively, based on serologic studies. PCV21 was licensed in 2024 based on a similar evaluation of serologic response to vaccination."
      ]
    },
    {
      "id": "q-8",
      "question": "How effective is pneumococcal polysaccharide vaccine at preventing pneumococcal carriage or disease?",
      "paragraphs": [
        "According to CDC, more than 80% of healthy adults who receive PPSV23 develop antibodies against the serotypes contained in the vaccine that persist for at least 5 years. Older adults and people with some chronic illnesses or immunodeficiency may not respond as well and their antibody levels may decline more quickly.",
        "Overall, the vaccine is 60% to 70% effective in preventing invasive pneumococcal disease caused by serotypes in the vaccine. PPSV23 shows less effectiveness among immunocompromised people; however, because of their increased risk of invasive pneumococcal disease, CDC recommends PPSV23 for people in these groups who receive PCV15. There has not been consensus regarding the ability of PPSV23 to prevent non-bacteremic pneumococcal pneumonia; however, recent observational studies reported 21%–46% effectiveness against PPSV23-type pneumococcal pneumonia when PPSV23 was given less than 5 years before illness onset.",
        "Unlike conjugate vaccines, PPSV23 vaccination has not been shown to decrease nasal carriage of pneumococcal bacteria among those vaccinated."
      ]
    },
    {
      "id": "q-9",
      "question": "What are the different serotypes of S. pneumoniae targeted by different pneumococcal vaccines?",
      "paragraphs": [
        "S. pneumoniae bacteria are serotyped based on the polysaccharides in the outer capsule of the bacteria. Serotypes vary in how common they are and in what percentage of pneumococcal disease they cause.",
        "Among the PCV vaccines, PCV13 includes serotypes: 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F and 23F. PCV15 includes all PCV13 serotypes plus 22F and 33F. PCV20 includes all PCV15 serotypes plus 8, 10A, 11A, 12F, and 15B. PPSV23 vaccine does not contain serotype 6A, but contains 19 other serotypes present in PCV20, plus serotypes 2, 9N, 17F, and 20.",
        "PCV21 is designed to target additional serotypes causing a significant proportion of disease in adults that are not prevented by the vaccines approved for children. It does not contain 10 serotypes found in other pneumococcal vaccines approved for children (1, 4, 5, 6B, 9V, 14, 18C, 19F, 23F, 15B, or 2). Instead, it contains an additional 11 serotypes not found in PCV20: 9N, 17F, 20, 15A, 15C, 16F, 23A, 23B, 24F, 31, and 35B. Because of these differences, CDC estimates that PCV20 targets serotypes that cause between 54% and 65% of invasive pneumococcal disease (IPD) in adults, and PCV21 targets serotypes that cause between 77% and 85% of IPD in adults."
      ]
    },
    {
      "id": "q-10",
      "question": "When were the first conjugate vaccines licensed for children?",
      "paragraphs": [
        "In 2000, the first pneumococcal conjugate vaccine (PCV) was licensed in the U.S. This vaccine contained seven serotypes (4, 6B, 9V, 14, 18C, 19F, and 23F) of Streptococcus pneumoniae and became known as PCV7 (Prevnar by Wyeth, now Pfizer). Ten years later in February 2010, a new 13-valent product was licensed — PCV13 (Prevnar 13, Pfizer) — which added 6 new serotypes (1, 3, 5, 6A, 7F, and 19A). Together, these 13 serotypes accounted for the majority of invasive pneumococcal disease (IPD) in the U.S. at the time, including serotype 19A, which is the most common IPD-causing serotype in young children. In February 2010 ACIP recommended that healthcare providers transition from use of PCV7 to use of PCV13 for routine vaccination of children.",
        "PCV7 was initially recommended for routine use in infants and children ages 2 through 59 months. The recommendations were expanded with the licensure of PCV13 to include vaccination of children age 60 through 71 months with underlying medical conditions, and also vaccination of older children, ages 6 through 18 years, with medical conditions placing them at increased risk of invasive pneumococcal disease.",
        "PCVs were further updated with licensure for use in children of PCV15 in 2022 and PCV20 in 2023."
      ]
    },
    {
      "id": "q-11",
      "question": "Why are PCV vaccines recommended to be given first when a patient is getting both a PCV and PPSV23 vaccines? Wouldn't PPSV23 protect them against additional strains of the pneumococcal bacteria?",
      "paragraphs": [
        "PCV vaccines are recommended to be given first because this sequence provides the best immune response to both PCV and PPSV23 vaccines. An evaluation of immune response after a second pneumococcal vaccination administered 1 year after an initial dose showed that subjects who received PPSV23 as the initial dose had lower antibody responses after subsequent administration of PCV13 than those who had received PCV13 as the initial dose followed by a dose of PPSV23. Lower antibody responses were also seen in people 65 years and older who received PCV20 1 to 5 years after a dose of PPSV23 compared to those who received PCV20 at least 6 months after a dose of PCV13 or those who received PCV13 followed by PPSV23."
      ]
    },
    {
      "id": "q-12",
      "question": "Which underlying medical conditions indicate that a child age 6 through 18 years should receive additional doses of pneumococcal vaccine beyond the routine schedule?",
      "paragraphs": [
        "The conditions that increase the risk of pneumococcal disease and are indications for additional pneumococcal vaccine doses beyond the routine schedule are broken down into two categories: non-immunocompromising (non-IC) and immunocompromising (IC). Recommendations differ slightly under certain circumstances by IC or non-IC category.",
        "**Non-IC conditions include:**",
        "Cerebrospinal fluid (CSF) leak",
        "Chronic heart disease (especially cyanotic congenital heart disease and heart failure)",
        "Chronic kidney disease (except as specified in the IC list below)",
        "Chronic liver disease",
        "Chronic lung disease (including moderate persistent or severe persistent asthma)",
        "Diabetes mellitus",
        "Cochlear implant",
        "**Immunocompromising (IC) conditions include:**",
        "Kidney disease and on maintenance dialysis",
        "Kidney disease with nephrotic syndrome",
        "Asplenia or splenic dysfunction",
        "Congenital or acquired immunodeficiency, including B-(humoral) or T-lymphocyte deficiency; complement deficiencies, particularly C1, C2, C3, and C4 deficiency; and phagocytic disorders (excluding chronic granulomatous disease)",
        "Treatment with immunosuppressive drugs or radiation therapy (including treatment for Hodgkin disease, leukemias, lymphomas, malignant neoplasm, and solid organ transplant)",
        "HIV infection",
        "Sickle cell disease or other hemoglobinopathies",
        "An older child through age 18 years with any high-risk condition who completed a pneumococcal conjugate series before age 6 years that included any dose of PCV20, is not recommended to receive any additional PCV doses.",
        "Children with IC or non-IC conditions who completed a PCV series before age 6 years with PCV13 or PCV15 (but who have not received PCV20 or pneumococcal polysaccharide vaccine [PPSV23]) should receive additional pneumococcal vaccination with a single dose of PCV20 at least 8 weeks after the most recent PCV dose. If PCV20 is not available, a non-IC or IC child in this circumstance may, alternatively, receive a single dose of PPSV23 at least 8 weeks after the most recent PCV dose. An IC child given PPSV23 in this circumstance would also be due for a dose of either PCV20 or a second dose of PPSV23 at least 5 years after the first PPSV23.",
        "Doses of the 7-valent PCV (the original Prevnar, PCV7) do not count toward PCV vaccination when determining the current pneumococcal vaccination needs of a child or teen with a qualifying non-IC or IC condition.",
        "When feasible, administer any needed pneumococcal vaccination at least two weeks before initiating planned interventions that place a child at high risk (such as a cochlear implant or spleen removal)."
      ]
    },
    {
      "id": "q-13",
      "question": "What are the major changes in the ACIP recommendations for pneumococcal vaccination of children published by CDC on September 29, 2023?",
      "paragraphs": [
        "Both PCV15 and PCV20 are now recommended as pneumococcal vaccination options for children age 6 weeks and older as well as for children age 6 through 18 with certain medical conditions or other risk factors for pneumococcal disease. ACIP no longer recommends PCV13 for children or adults, however, PCV13 may be given as previously recommended if it is the only PCV available and the recipient would otherwise go without vaccination. Pneumococcal polysaccharide vaccine (PPSV23) is recommended as an option for some children age 2 years and older who have certain underlying medical conditions and who have not had (or do not have the option of receiving) PCV20."
      ]
    },
    {
      "id": "q-14",
      "question": "How do we account for the history of PCV7 vaccination when determining the pneumococcal vaccination needs of an older teen or young adult with a high-risk condition?",
      "paragraphs": [
        "Because of the limited number of serogroups covered by PCV7 (which was used in the United States between 2000 and 2010), CDC recommends that doses of PCV7 should be ignored for the purposes of calculating the current pneumococcal vaccination needs of an older teen or adult patient at increased risk for pneumococcal disease. For example, a person at high risk of pneumococcal disease who received a complete series of PCV7 vaccination in early childhood should follow the vaccination recommendations for someone with their condition who has not received any doses of pneumococcal conjugate vaccine."
      ]
    },
    {
      "id": "q-15",
      "question": "When is pneumococcal polysaccharide vaccine (PPSV23) recommended as an option for children?",
      "paragraphs": [
        "PPSV23 has only limited indications in children age 2 through 18 years who have not had PCV20 and are at high risk for serious pneumococcal infection due to the presence of a specific non-immunocompromising (non-IC) or immunocompromising (IC) medical condition.",
        "If PCV20 is not offered, PPSV23 is recommended as an option to be administered to a child age 2 years or older at least 8 weeks following completion of PCV vaccination with PCV13 or PCV15. If a child has an immunocompromising condition and PPSV23 is used, a dose of PCV20, or a second dose of PPSV23, should be given 5 years later."
      ]
    },
    {
      "id": "q-16",
      "question": "ACIP recommends pneumococcal vaccination for adult cigarette smokers age 19 through 49 years. Should we also vaccinate 16-year-olds who smoke?",
      "paragraphs": [
        "No. No data exist at this time to indicate that people younger than 19 who smoke are at increased risk of pneumococcal disease."
      ]
    },
    {
      "id": "q-17",
      "question": "A 2-month-old was mistakenly given PPSV23 instead of PCV. What should be done?",
      "paragraphs": [
        "PPSV23 is not effective in children less than 24 months of age. PPSV23 given to children younger than 2 years old should not be considered part of the pneumococcal vaccination series. PCV15 or PCV20 should be administered as soon as the error is discovered. Any time the wrong vaccine is given, the parent/patient should be notified. The facility staff should review their vaccination training and clinical procedures to prevent future vaccine administration errors."
      ]
    },
    {
      "id": "q-18",
      "question": "A 6-year-old child who was fully vaccinated on-time with PCV13 has a diagnosis of selective IgA deficiency and was sent by her physician to the health department to receive additional pneumococcal vaccination. Does the child need additional pneumococcal vaccination? If so, what options do we have?",
      "paragraphs": [
        "Selective IgA deficiency is a B-cell immunodeficiency, so additional pneumococcal vaccination beyond the routine age-based schedule is indicated for this 6-year-old with an immunocompromising condition. Because the child received a complete PCV13 series, the current recommendation is to administer a single dose of PCV20 or PPSV23 at least 8 weeks following the most recent PCV dose. If PCV20 is given, no further doses of pneumococcal vaccine are recommended. If PPSV23 is given now, then at least 5 years later give a dose of PCV20 or a second dose of PPSV23."
      ]
    },
    {
      "id": "q-19",
      "question": "A healthy 4-year-old child in my practice was fully vaccinated on-time with PCV13. Do they need a dose of PCV15 or PCV20?",
      "paragraphs": [
        "No. No additional doses of pneumococcal vaccine are recommended."
      ]
    },
    {
      "id": "q-20",
      "question": "Some children in my practice started the pneumococcal vaccine series with PCV13. Now that PCV15 or PCV20 are recommended, do I need to restart the vaccination series or give additional vaccine doses to all of them?",
      "paragraphs": [
        "Do not restart the series or give additional doses. The previously administered doses of PCV13 are valid. Complete the pneumococcal conjugate vaccination series with either PCV15 or PCV20 in accordance with the routine schedule."
      ]
    },
    {
      "id": "q-21",
      "question": "Please describe the recent changes to ACIP recommendations for pneumococcal vaccination of adults?",
      "paragraphs": [
        "ACIP has made a series of changes in its recommendations for pneumococcal vaccination of adults since 2022 in response to the licensure of new pneumococcal conjugate vaccines (PCVs). In January 2022, CDC published recommendations for PCV15 (Vaxneuvance, Merck) and PCV20 (Prevnar 20, Pfizer) as pneumococcal vaccination options for all adults age 65 and older and for adults age 19 through 64 with certain medical conditions or other risk factors for pneumococcal disease. ACIP stopped recommending PCV13 (Prevnar 13, Pfizer) for adults; however, CDC clinical guidance allows for its use in rare circumstances if only PCV13 is accessible and the patient would otherwise be unvaccinated. When PCV15 is used routinely, it should be used in series with 23-valent pneumococcal polysaccharide vaccine (PPSV23, Pneumovax, Merck) given one year later.",
        "In June 2024, ACIP recommended PCV21 (Capvaxive, Merck) as an option in all situations where PCV is recommended for adults. As with PCV20, PPSV23 is not recommended following PCV21.",
        "In October 2024, ACIP recommended that routine immunization of all adults with a PCV begin at age 50 years, rather than age 65 years. This change was made to address the substantial amount of preventable invasive pneumococcal disease (IPD) among adults age 50 through 64.",
        "Adults 19 through 49 years eligible for pneumococcal vaccination as a result of a high-risk condition who have no or unknown history of PCV should receive one dose of PCV20 or PCV21 alone, or a dose of PCV15 followed by a dose of PPSV23 one year later (with a minimum interval option of 8 weeks for people with an immunocompromising condition, cochlear implant, or cerebrospinal fluid leak)."
      ]
    },
    {
      "id": "q-22",
      "question": "Why did ACIP shift the age for routine pneumococcal conjugate vaccination of all adults from 65 years down to 50 years in October 2024?",
      "paragraphs": [
        "Lowering the age for routine PCV use in adults from 65 to 50 years was intended to address the substantial burden of preventable invasive pneumococcal disease (IPD) and pneumococcal pneumonia in people age 50 through 64 years. Despite long-standing risk-based recommendations for pneumococcal vaccination of adults age 19 through 64 at increased risk of IPD, by 2022, just 23% of this target group had received at least one adult pneumococcal vaccination, according to CDC's National Health Interview Survey. In addition, according to CDC surveillance data, by age 50, the rate of IPD among Black adults is higher than the rate in the general population of the United States byage 65. Finally, the newer PCV products protect against a substantially larger proportion of pneumococcal serotypes responsible for IPD in adults, compared to PCV13. ACIP members expressed their hope that expanding the simple age-based recommendation to give PCV at age 50 would increase access to and administration of PCV, especially among unvaccinated people at increased risk of IPD."
      ]
    },
    {
      "id": "q-23",
      "question": "Will people vaccinated at age 50 need additional doses of pneumococcal conjugate vaccine in the future?",
      "paragraphs": [
        "It is likely. Effectiveness of pneumococcal polysaccharide vaccine (PPSV23) begins waning significantly after about 5 years. While current pneumococcal conjugate vaccines (PCVs) are expected to remain effective longer than that, for at least several years, a future PCV dose may be needed by those vaccinated at younger ages to boost protection later in life. When ACIP voted to lower the routine PCV vaccination age to 50, the committee took into consideration that an additional dose, perhaps 10 or 15 (or more) years later, may be needed. In coming years, ACIP will periodically review any evidence of waning protection, evaluate future pneumococcal vaccine products, and make recommendations for revaccination of older adults when needed."
      ]
    },
    {
      "id": "q-24",
      "question": "What are the categories of medical conditions and other risk factors among adults for which pneumococcal vaccination is recommended? And what is the recommendation?",
      "paragraphs": [
        "All people age 19 through 49 with the following medical conditions who have no history of pneumococcal vaccination or an unknown pneumococcal vaccination history should receive either a single dose of PCV20 or PCV21 alone or a dose of PCV15 followed by a dose of PPSV23 at least 1 year later. If using the PCV15 + PPSV23 series, clinicians can consider giving the dose of PPSV23 a minimum of 8 weeks later for more rapid protection against the serotypes unique to PPSV23 to people with immunocompromising condition, cochlear implant, or cerebrospinal fluid (CSF) leak. The conditions are:",
        "Alcoholism or cigarette smoking",
        "CSF leak",
        "Chronic heart disease, including congestive heart failure and cardiomyopathies, excluding hypertension",
        "Chronic liver disease",
        "Chronic lung disease, including chronic obstructive pulmonary disease, emphysema, and asthma",
        "Cochlear implant (including those preparing for cochlear implant)",
        "Diabetes mellitus",
        "Decreased immune function from disease or drugs (immunocompromising conditions), including:",
        "Chronic renal failure or nephrotic syndrome",
        "Congenital or acquired asplenia, or splenic dysfunction",
        "Congenital or acquired immunodeficiency, including B-(humoral) or T-lymphocyte deficiency; complement deficiencies, particularly C1, C2, C3, and C4 deficiency; and phagocytic disorders (excluding chronic granulomatous disease)",
        "Diseases or conditions treated with immunosuppressive drugs or radiation therapy, including Hodgkin disease, leukemias, lymphomas, malignant neoplasms, and solid organ transplant",
        "HIV infection"
      ]
    },
    {
      "id": "q-25",
      "question": "My patient just turned 50 and has never had a pneumococcal vaccine. What are my options now?",
      "paragraphs": [
        "For adults 50 years and older with no prior pneumococcal vaccination or whose previous vaccination history is unknown, you have two options:",
        "One dose of PCV20 or PCV21 alone, or",
        "One dose of PCV15 followed by a dose of PPSV23 one year later (if the patient has an immunocompromising medical condition, cochlear implant or cerebrospinal fluid leak consider giving PPSV23 as soon as 8 weeks later)."
      ]
    },
    {
      "id": "q-26",
      "question": "My patient just turned 50 and had a dose of PPSV23 at age 47 due to alcoholism. What is due now?",
      "paragraphs": [
        "CDC recommends that adults who have ever had at least one dose of PPSV23 do not need another dose of PPSV23. They should receive one dose of any of the 3 recommended vaccine options: PCV15, PCV20, or PCV21, at least one year after their PPSV23 dose."
      ]
    },
    {
      "id": "q-27",
      "question": "My patient is 35 and is scheduled for a splenectomy. He has never had a pneumococcal vaccine. What do I do?",
      "paragraphs": [
        "The patient should be vaccinated at least 2 weeks before the splenectomy, if feasible. If not, vaccinate as soon as possible. Depending upon products available, he has three options:",
        "One dose of PCV20 or PCV21 alone, or",
        "One dose of PCV15 followed by a dose of PPSV23",
        "CDC recommends that if using the PCV15 and PPSV23 series, a minimum interval of 8 weeks can be considered for adults with an immunocompromising condition (including splenectomy), cochlear implant, or cerebrospinal fluid leak."
      ]
    },
    {
      "id": "q-28",
      "question": "My patient is currently age 57 and has a history of splenectomy 8 years ago. He has received PCV13 and one dose of PPSV23 in the past. What does he need now?",
      "paragraphs": [
        "CDC currently recommends that people age 50 years or older who have ever received PCV13 and who have also had 1 dose of PPSV23 before turning age 65 should receive either PCV20 or PCV21 at least 5 years after their most recent pneumococcal vaccination."
      ]
    },
    {
      "id": "q-29",
      "question": "My patient received PCV13 over a year ago and is due for PPSV23, but my clinic only has PCV20. What do I do?",
      "paragraphs": [
        "Administer the PCV20. CDC recommendations were updated in October 2024 to state that recipients of PCV13 should receive PCV20 or PCV21 at least one year after the dose of PCV13. CDC no longer recommends PPSV23 as an option following PCV13. PPSV23 is only recommended for adults who receive a dose of PCV15 and have never had a dose of PPSV23 before.",
        "No future doses of any pneumococcal vaccine are currently recommended following a dose of PCV20 or PCV21."
      ]
    },
    {
      "id": "q-30",
      "question": "My patient is now 70 years old and had PCV13 followed by PPSV23 after he turned 65. What pneumococcal vaccine is due now?",
      "paragraphs": [
        "People who have had PCV13 and PPSV23 after the 65th birthday are not routinely recommended to receive additional doses of pneumococcal vaccine; however, they may receive a dose of PCV20 or PCV21 at least 5 years after their most recent pneumococcal vaccination based on shared clinical decision-making. The benefit of PPSV23 wanes after about 5 or more years. Considerations for PCV20 or PCV21 in this situation include the patient's overall health and risk of pneumococcal disease, their desire to be protected, and time since last pneumococcal vaccination."
      ]
    },
    {
      "id": "q-31",
      "question": "My patient is 80 and had a dose of PPSV23 at age 65. He has never had a pneumococcal conjugate vaccine. What is due now?",
      "paragraphs": [
        "The patient may be given one dose of PCV20 or PCV21. CDC estimates that PCV20 targets serotypes that cause approximately 54% of invasive pneumococcal disease (IPD) in people age 65 years and older in the United States and that PCV21 targets serotypes that cause approximately 85% of IPD cases in that U.S. age group. In some parts of the Western United States, pneumococcal serotype 4 is known to be responsible for more than 30% of IPD cases and state or local public health officials may advise healthcare providers that a product that covers serotype 4 (PCV20) may provide broader coverage than national estimates suggest. CDC does not recommend additional doses of PPSV23."
      ]
    },
    {
      "id": "q-32",
      "question": "Is PPSV23 alone currently routinely recommended for any adults?",
      "paragraphs": [
        "No. All adults for whom pneumococcal vaccination is recommended due to age (50 or older) or an underlying condition (age 19 through 49) are now recommended to receive a pneumococcal conjugate vaccine. When PCV20 or PCV21 is given, no further pneumococcal vaccination is recommended. If PCV15 is given to an adult, PPSV23 is recommended one year later (minimum interval of 8 weeks). Prior recipients of PPSV23 alone may now receive PCV15, PCV20, or PCV21 at least 1 year after the dose of PPSV23."
      ]
    },
    {
      "id": "q-33",
      "question": "I have a patient who takes adalimumab (Humira) for rheumatoid arthritis. Does a person who takes adalimumab meet the definition of immunosuppression for the purposes of pneumococcal vaccination of adults 19-49 years?",
      "paragraphs": [
        "Yes. Adalimumab is a potent anti-inflammatory drug that blocks the activity of tumor necrosis factor (TNF). Adalimumab is considered immunosuppressive because serious infections have been reported in people taking the drug, including tuberculosis and infections caused by viruses, fungi, or bacteria. A person taking adalimumab or other drugs that affect TNF activity (such as infliximab [Remicade], certolizumab pegol [Cimzia], golimumab [Simponi], or etanercept [Enbrel]) should be considered to have immunosuppression and receive PCV20 or PCV21 alone or PCV15 followed by PPSV23. Clinicians can consider giving PPSV23 as soon as 8 weeks after PCV15 in this case, in order to accelerate protection against strains of pneumococcus unique to PPSV23."
      ]
    },
    {
      "id": "q-34",
      "question": "If a patient has a history of cerebrospinal fluid (CSF) leak but no current leak, is this a risk factor and a reason to administer PCV to an adult?",
      "paragraphs": [
        "No. If there is no longer a CSF leak, pneumococcal conjugate vaccine is not recommended, unless there is another risk factor for invasive pneumococcal disease or an age-based indication."
      ]
    },
    {
      "id": "q-35",
      "question": "Does an adult younger than age 50 years with beta thalassemia minor meet the criteria for a recommendation for vaccination with a pneumococcal conjugate vaccine?",
      "paragraphs": [
        "No. Beta thalassemia minor is a hemoglobinopathy, but compared to sickle cell disease, these patients have less risk for functional asplenia, and therefore do not have a significantly increased risk of invasive pneumococcal disease."
      ]
    },
    {
      "id": "q-36",
      "question": "Should adults younger than age 50 with high-risk conditions who have already received PCV13, but not PPSV23, now get one of the newer pneumococcal vaccines?",
      "paragraphs": [
        "Adults that received PCV13 should complete the pneumococcal series with PCV20 or PCV21 vaccination at least 1 year after PCV13. PCV15 and PPSV23 are not recommended in this situation."
      ]
    },
    {
      "id": "q-37",
      "question": "For adults who have a PPSV23 vaccination recommended 1 year after PCV15, what is the definition of a year? Does it need to be exactly one year? We previously provided PCV15 to some individuals during flu season and told them to get the PPSV23 next year when they get their flu shot. What if they received their flu shot in November last year, but return for their flu shot in October this year?",
      "paragraphs": [
        "What you describe is a good strategy for administration of the 2-dose pneumococcal vaccine series of PCV15 and PPSV23 to people age 50 years and older if you prefer not to complete their PCV vaccination with a single dose of either PCV20 or PCV21. ACIP does not define \"one year\" but this is assumed to be one calendar year. Receiving PPSV23 a few days or weeks earlier than one calendar year after PCV15 is not a medical problem."
      ]
    },
    {
      "id": "q-38",
      "question": "If a vaccination provider stocks only PPSV23, what should that provider do for adults now recommended to receive PCV20 or PCV21 alone or PCV15 followed by PPSV23?",
      "paragraphs": [
        "Studies have shown that administering the pneumococcal conjugate vaccine (PCV) first leads to a better immune response to serotypes common to both vaccines when the polysaccharide vaccine (PPSV23) is given at a later date. For this reason, CDC recommends that pneumococcal vaccine-naive adults receive PCVs either alone (PCV20, PCV21) or first in a sequence (PCV15 first, followed by PPSV23). A provider who stocks only PPSV23 should consider purchasing a recommended PCV or referring patients elsewhere to receive a PCV, if feasible. A patient due for PCV who inadvertently receives PPSV23 first should receive PCV15, PCV20, or PCV21 vaccine at least one year later."
      ]
    },
    {
      "id": "q-39",
      "question": "There is a debate within my pediatric clinical department about not allowing influenza vaccine to be given with DTaP and pneumococcal conjugate vaccine (PCV). Are there data that state these should not be given concomitantly?",
      "paragraphs": [
        "A CDC study showed a small increased risk for febrile seizures during the 24 hours after a child receives the inactivated influenza vaccine at the same time as the PCV13 vaccine or DTaP vaccine. However, the risk of febrile seizure with any combination of these vaccines is small and ACIP recommends giving these vaccines at the same visit if indicated. The risk for febrile seizures in children who received the currently-recommended PCV15 or PCV20 vaccines at the same time as an influenza vaccine has not been studied."
      ]
    },
    {
      "id": "q-40",
      "question": "We have a 19-year-old patient with a history of vasculitis, nephritis, and asthma. She is on azathioprine (Imuran) and is immunosuppressed. Her rheumatologist recommends she receive pneumococcal conjugate vaccine (PCV) and meningococcal B vaccine (MenB). How often should these vaccines be given?",
      "paragraphs": [
        "For people with immunosuppression, ACIP recommends 1 dose of PCV20 or PCV21 alone or one dose of PCV15 followed by a dose of PPSV23 one year later (immunocompromised adults may receive PPSV23 with a minimum 8-week interval after PCV15). MenB is not specifically recommended for immunosuppressed people. However, a patient who is age 16 through 23 years and immunosuppressed may receive routine MenB vaccination with a 3-dose series of either Bexsero (GSK) or Trumenba (Pfizer)."
      ]
    },
    {
      "id": "q-41",
      "question": "We have a 45-year-old patient taking Mesalamine for ulcerative colitis. Should pneumococcal vaccination be recommended for this patient?",
      "paragraphs": [
        "No. Mesalamine (mesalazine) is a non-steroidal anti-inflammatory drug. It is not immunosuppressive, so its use would not place a person at increased risk of invasive pneumococcal disease."
      ]
    },
    {
      "id": "q-42",
      "question": "Can we administer any of the pneumococcal vaccines to patients with multiple sclerosis?",
      "paragraphs": [
        "Multiple sclerosis is not a contraindication to any vaccine, including pneumococcal vaccines. People with multiple sclerosis may be on immunosuppressive medication. If so, immunosuppressed people should receive PCV20 or PCV21 alone or PCV15 followed by PPSV23 a minimum of 8 weeks later."
      ]
    },
    {
      "id": "q-43",
      "question": "Adults who have no spleen need a pneumococcal conjugate vaccination (PCV) and a MenACWY meningococcal vaccine. Do adults need to space out PCV and MenACWY vaccines or can they be given together?",
      "paragraphs": [
        "Studies done in children showed possible interference with the response to PCV7 when PCV7 and the Menactra brand of MenACWY-D (by Sanofi) were given simultaneously. For this reason, Menactra was recommended not to be given at the same time as PCV. However, Menactra is no longer available, so this is no longer a consideration.",
        "Available brands of MenACWY, including MenACWY-CRM (Menveo, GSK), MenACWY-TT (MenQuadfi, Sanofi), as well as the pentavalent MenABCWY (Penbraya, Pfizer), may be administered at the same time or any time before or after any pneumococcal vaccine."
      ]
    },
    {
      "id": "q-44",
      "question": "Is a patient age 45 years who recently had a prostatectomy with lymph node dissection for prostate cancer a candidate for pneumococcal vaccination? The patient is believed to be cancer-free and is on no chemotherapy.",
      "paragraphs": [
        "In the absence of immunosuppressive treatment, a recent history of prostate cancer surgery alone is not an indication for pneumococcal vaccination among people younger than 50 years."
      ]
    },
    {
      "id": "q-45",
      "question": "I have patients who are in their 70s and 80s and remember getting a pneumococcal vaccine a few years ago. Should we assume that this was PPSV23? Should I assume that it was given before the 65th birthday?",
      "paragraphs": [
        "Because pneumococcal recommendations have changed over the years, providers should generally avoid assuming which pneumococcal vaccines a patient has received. Ideally, providers and patients should try to verify which vaccines were received, including by checking medical records and the jurisdiction's immunization information system (immunization registry) where the patient was likely vaccinated.",
        "Per the CDC \"General Best Practices Guidelines for Immunization\", self-reported doses of influenza and PPSV23 are acceptable. All other vaccines must be documented with a written, dated record. This means that if a patient reasonably recalls receiving a PPSV23 after turning 65, you may accept that as a history of PPSV23 and administer a recommended pneumococcal conjugate vaccine option (PCV20, or PCV21).",
        "Alternatively, if vaccination records cannot be obtained, and the patient is uncertain whether they received PCV13 or PPSV23, you may choose to classify the patient as having an unknown vaccination history and administer either PCV20 or PCV21 alone or PCV15 followed by PPSV23 one year later. When giving the PCV15 and PPSV23 series to a patient with an immunocompromising condition, cochlear implant, or cerebrospinal fluid leak, an 8-week minimum interval between PCV15 and PPSV23 may be considered."
      ]
    },
    {
      "id": "q-46",
      "question": "Please explain why people with asthma and people who smoke cigarettes are recommended to be vaccinated against pneumococcal disease?",
      "paragraphs": [
        "In 2008, ACIP reviewed evidence indicating that asthma is an independent risk factor for pneumococcal disease among adults. ACIP also reviewed evidence demonstrating an increased risk of invasive pneumococcal disease among smokers. Consequently, ACIP includes both asthma and cigarette smoking as indications for pneumococcal vaccination among adults age 19 through 49 years. People with these conditions should receive either a single dose of PCV20 or PCV21 alone, or a dose of PCV15 followed one year later by PPSV23. If they have already received PPSV23, but have not had a conjugate vaccine, they should receive a single dose of a recommended pneumococcal conjugate vaccine (PCV15, PCV20, or PCV21) at least one year following their dose of PPSV23."
      ]
    },
    {
      "id": "q-47",
      "question": "Since pneumococcal vaccination is recommended for all adults who smoke cigarettes, should adults who use smokeless tobacco products (e.g., chewing tobacco) or who vape nicotine be vaccinated too?",
      "paragraphs": [
        "No. ACIP does not identify people who use smokeless tobacco products or vaping as being at increased risk for invasive pneumococcal disease or as being in a risk group recommended for vaccination."
      ]
    },
    {
      "id": "q-48",
      "question": "Is pneumococcal vaccination indicated for former smokers younger than age 50?",
      "paragraphs": [
        "No, unless chronic lung disease is present, which puts them at increased risk of pneumococcal disease. PCV20 or PCV21 alone or PCV15 followed one year later by PPSV23 is recommended for current smokers of cigarettes age 19 through 49 years"
      ]
    },
    {
      "id": "q-49",
      "question": "Does a patient younger than age 50 years who smokes marijuana regularly, but doesn't smoke cigarettes, need to receive pneumococcal vaccination?",
      "paragraphs": [
        "No. ACIP does not designate people who smoke marijuana, but not cigarettes, as being in a risk group for vaccination. ACIP has not been presented evidence of an increased risk of pneumococcal disease among regular marijuana smokers."
      ]
    },
    {
      "id": "q-50",
      "question": "How did the ACIP recommendation for vaccination of adult smokers too young for routine, age-based pneumococcal vaccination change in 2022?",
      "paragraphs": [
        "In the pneumococcal vaccine recommendations for adults that were updated January 28, 2022, the many risk groups for pneumococcal disease were combined into one group with respect to vaccine recommendations. All are now recommended to receive PCV20 or PCV21 alone or PCV15 followed by PPSV23 one year later. ACIP no longer recommends the use of PPSV23 alone for any adult. Cigarette smokers too young for routine age-based vaccination recommendations who received PPSV23 alone in the past may now receive a dose of any recommended pneumococcal conjugate vaccine option (PCV15, PCV20, or PCV21) at least one year after their dose of PPSV23."
      ]
    },
    {
      "id": "q-51",
      "question": "ACIP now recommends PCV20 or PCV21 alone or PCV15 followed by PPSV23 one year later for adults age 19 through 49 with asthma. Should I vaccinate people with mild, intermittent asthma or exercise-induced asthma?",
      "paragraphs": [
        "Yes. Pneumococcal vaccination is recommended for adults age 19 through 49 years with all types of asthma.",
        "Among children age 2 through 18 years, only those with moderate persistent or severe persistent asthma (regardless of high-dose oral corticosteroids use) should be evaluated for additional pneumococcal vaccine doses beyond the routine age-based schedule. Specific recommendations depend on age and the recipient's specific pneumococcal vaccination history, including prior doses of any pneumococcal vaccine except PCV7. Prior doses of PCV7 may be ignored for the purposes of determining doses due now."
      ]
    },
    {
      "id": "q-52",
      "question": "Would you include obstructive sleep apnea as chronic pulmonary disease which would require pneumococcal vaccination for adults younger than 50?",
      "paragraphs": [
        "No. Obstructive sleep apnea alone is not an indication for pneumococcal vaccination. However, people with obstructive sleep apnea may have other pulmonary conditions (such as chronic obstructive pulmonary disease) that would put them at increased risk for invasive pneumococcal disease, for which they should be vaccinated."
      ]
    },
    {
      "id": "q-53",
      "question": "Should people who are HIV positive receive pneumococcal vaccines?",
      "paragraphs": [
        "Yes. People with HIV infection are at high risk of pneumococcal disease. The pneumococcal vaccination recommended depends on the patient's age and prior pneumococcal vaccines received."
      ]
    },
    {
      "id": "q-54",
      "question": "Is systemic lupus erythematosus (SLE, lupus) a risk-based indication for pneumococcal vaccines in adults younger than age 50?",
      "paragraphs": [
        "Lupus alone is not an indication for pneumococcal vaccination. However, immunosuppressive medication that may be used to treat lupus could create an indication for administering pneumococcal vaccines. Also, certain complications of lupus (such as nephrotic syndrome) make a person a candidate for pneumococcal vaccination. If pneumococcal vaccination is indicated, administer either PCV20 or PCV21 alone or PCV15 followed by PPSV23 one year later. If the patient is immunosuppressed and is receiving a combination of PCV15 followed by PPSV23, consider using a minimum interval of at least 8 weeks between doses if more rapid protection from serotypes unique to PPSV23 is desired."
      ]
    },
    {
      "id": "q-55",
      "question": "How often should adult diabetic patients receive pneumococcal vaccination?",
      "paragraphs": [
        "Recommendations vary among adults depending upon age, pneumococcal conjugate (PCV) or polysaccharide (PPSV) vaccination history (including PCV13, PCV15, PCV20, PCV21, and PPSV23), and pneumococcal vaccine products available:",
        "Adults age 19 or older with diabetes and no history of receiving any pneumococcal vaccination as an adult should receive either PCV20 or PCV21 alone or a series of PCV15 followed in one year by PPSV23. No further doses are recommended.",
        "People with diabetes who are age 19 through 49 and have already received one dose of PPSV23 may receive one dose of any of the currently recommended PCV options (PCV15, PCV20, or PCV21) one year after the dose of PPSV23; no further doses of PPSV23 are recommended.",
        "People with diabetes and age 50 or older who received PCV13 and PPSV23 before age 50, should receive one dose of PCV20 or PCV21. PCV20 or PCV21 should be given at least 5 years after the last pneumococcal vaccination.",
        "People with diabetes who received PCV13 at any point and have received a PPSV23 vaccination since turning 65 are not routinely recommended to receive any additional doses of pneumococcal vaccine. However, they have the option to receive a dose of PCV20 or PCV21 at least 5 years after their most recent pneumococcal vaccination on the basis of shared clinical decision-making, based upon their risk of pneumococcal disease and desire for additional protection.",
        "Pneumococcal vaccination is recommended for people with diabetes. Does this include gestational diabetes?",
        "No."
      ]
    },
    {
      "id": "q-56",
      "question": "How often should adult dialysis patients receive pneumococcal vaccines?",
      "paragraphs": [
        "Recommendations for adult dialysis patients vary by age and pneumococcal conjugate (PCV) or polysaccharide (PPSV23) vaccination history:",
        "Adult dialysis patients who have not previously received pneumococcal vaccination should receive either PCV20 or PCV21 alone or a series of PCV15 followed by PPSV23 at least 8 weeks later. No further pneumococcal vaccines are recommended.",
        "Adult dialysis patients who are age 19 through 49 and have already received one dose of PPSV23 may receive one dose of any currently recommended PCV (PCV15, PCV20, or PCV21) one year after the dose of PPSV23; no further doses of PPSV23 are recommended.",
        "Adult dialysis patients who are 50 or older and who have received PCV13 and PPSV23 in the past should receive one dose of PCV20 or PCV21 at least 5 years after the last pneumococcal vaccination.",
        "Adult dialysis patients who received PCV13 at any point and also received a PPSV23 vaccination after turning 65 are not routinely recommended to receive any additional doses of pneumococcal vaccine. They have the option to receive a dose of PCV20 or PCV21 at least 5 years after their most recent pneumococcal vaccination on the basis of shared clinical decision-making, based upon their risk of pneumococcal disease and desire for additional protection."
      ]
    },
    {
      "id": "q-57",
      "question": "My adult patient now has a high-risk condition for which pneumococcal vaccination is recommended. He received the 7-valent pneumococcal conjugate vaccine (PCV7) in childhood but has not had any pneumococcal vaccination as an adult. What do I do?",
      "paragraphs": [
        "CDC's guidance is to ignore the remote history of PCV7 and evaluate the patient as if he has never had pneumococcal vaccination. The patient should receive PCV20 or PCV21 alone or PCV15 in series with PPSV23 given at least one year later. If using PCV15, and if the high-risk condition is immunocompromising or if the patient has a cochlear implant or cerebrospinal fluid leak, you may consider administering the PPSV23 as soon as 8 weeks after PCV15."
      ]
    },
    {
      "id": "q-58",
      "question": "Now that we have PCV15, PCV20, and PCV21, is any adult still recommended to receive multiple doses of PPSV23?",
      "paragraphs": [
        "No. As of October 2024, CDC recommends that adults with immunocompromising conditions who received a dose of PPSV23 in the past and were previously recommended to receive a second PPSV23 dose at least 5 years after that initial PPSV23 dose should now complete their pneumococcal immunization schedule with PCV20 or PCV21 at least 5 years after the PPSV23 dose."
      ]
    },
    {
      "id": "q-59",
      "question": "We have a patient who has had PCV13 as an adult and is due for PPSV23. Our pharmacy does not have PPSV23 in stock but does have PCV20. Should we send the patient elsewhere?",
      "paragraphs": [
        "In October 2024, CDC updated its guidance to state that an adult who received PCV13 should receive PCV20 or PCV21 at least 1 year later. PPSV23 is no longer recommended as an option following PCV13."
      ]
    },
    {
      "id": "q-60",
      "question": "My 43-year-old patient who is about to undergo a splenectomy received PCV15 followed by PPSV23 eight weeks later in preparation for the procedure. When should she get her next dose of PPSV23?",
      "paragraphs": [
        "ACIP and CDC do not recommend revaccination with a second dose of PPSV23 for adults 19 through 49 with asplenia who receive PCV15 (Vaxneuvance, Merck) followed by PPSV23.",
        "If the adult patient with asplenia had received PCV13 (Prevnar 13, Pfizer) followed by PPSV23 (instead of Vaxneuvance), then CDC recommends administration of a dose of PCV20 or PCV21 at least 5 years after the dose of PPSV23."
      ]
    },
    {
      "id": "q-61",
      "question": "Is there any situation when an adult at high risk of invasive pneumococcal disease should receive more than one dose of PPSV23?",
      "paragraphs": [
        "Based on changes to the ACIP recommendations made in October 2024, a second dose of PPSV23 is no longer recommended for any adult. Adults age 19 through 49 years with immunocompromising conditions who received a dose of PCV15 followed by a dose of PPSV23 have received a complete pneumococcal vaccine schedule, and no further doses are recommended. If they received PCV13 and PPSV23, instead of PCV15, CDC recommends a dose of PCV20 or PCV21 should be given 5 years after the first dose of PPSV23, if the patient has have one of the following immunocompromising conditions:",
        "Kidney disease and on maintenance dialysis",
        "Kidney disease with nephrotic syndrome",
        "Asplenia or splenic dysfunction",
        "Congenital or acquired immunodeficiency, including B-(humoral) or T-lymphocyte deficiency; complement deficiencies, particularly C1, C2, C3, and C4 deficiency; and phagocytic disorders (excluding chronic granulomatous disease)",
        "Treatment with immunosuppressive drugs or radiation therapy (including treatment for Hodgkin disease, leukemias, lymphomas, malignant neoplasm, and solid organ transplant)",
        "HIV infection",
        "Sickle cell disease or other hemoglobinopathies"
      ]
    },
    {
      "id": "q-62",
      "question": "Does a patient who was vaccinated with PCV13 and one or two doses of PPSV23 before age 65 still need an additional dose of PPSV23 at age 65 or later?",
      "paragraphs": [
        "They need a dose of PCV20 or PCV21, but not another dose of PPSV23. CDC recommends that people age 50 or older who received PCV13 and either one or two doses of PPSV23 before age 65 should receive a dose of PCV20 or PCV21 at least 5 years after the last pneumococcal vaccine dose. If they received PCV15 followed by PPSV23, they are not recommended to receive any additional pneumococcal vaccine doses at this time.",
        "A patient age 50 or older who received one or two doses of PPSV23 earlier in life but has not received any PCV product, or their history of PCV vaccination is only PCV7 or unknown, is recommended to receive a single dose of a currently recommended pneumococcal conjugate vaccine (PCV15, PCV20, or PCV21) at least one year after the last dose of PPSV23."
      ]
    },
    {
      "id": "q-63",
      "question": "Should an 80-year-old patient who was given PPSV23 at age 65 years but has not received any other pneumococcal vaccination be revaccinated with PPSV23?",
      "paragraphs": [
        "No. This patient should receive a dose of PCV15, PCV20, or PCV21 now. As of October 2024, CDC does notrecommend revaccination with PPSV23 for any adult who has received a dose of PPSV23."
      ]
    },
    {
      "id": "q-64",
      "question": "My patient has had laboratory-confirmed pneumococcal pneumonia. Does this patient still need to be vaccinated against pneumococcal disease?",
      "paragraphs": [
        "Yes. There are more than 100 known serotypes of pneumococcus. Infection with one serotype does not necessarily produce immunity to other serotypes. As a result, if the person is a candidate for vaccination, they should receive it even after one or more episodes of pneumococcal disease."
      ]
    },
    {
      "id": "q-65",
      "question": "If influenza vaccine is recommended for healthcare workers to protect high-risk patients from getting influenza, why aren't the pneumococcal vaccines also recommended?",
      "paragraphs": [
        "Influenza virus is easily spread from healthcare workers to their patients, and infection usually leads to clinical illness. Pneumococcus is probably not spread from healthcare workers to their patients as easily as is influenza, and infection with pneumococcus does not necessarily lead to clinical illness. Host factors (such as age, underlying illness) are more important in the development of invasive pneumococcal disease than nasopharyngeal colonization with the organism."
      ]
    },
    {
      "id": "q-66",
      "question": "Why should we not give PCV vaccines to someone who has had a serious reaction to a diphtheria-containing vaccine in the past?",
      "paragraphs": [
        "PCV vaccines are conjugated to a type of diphtheria toxoid. If someone has a history of anaphylaxis following diphtheria-containing vaccine, it might be due to the diphtheria toxoid, and the cause of the anaphylactic allergy should be identified before the administration of a PCV vaccine. This could be difficult since no single-antigen diphtheria toxoid is available in the U.S. Fortunately, true anaphylactic allergy to diphtheria-containing vaccine is rare."
      ]
    },
    {
      "id": "q-67",
      "question": "Why is it always recommended to give PCV15 before giving PPSV23?",
      "paragraphs": [
        "If you stock PCV15 and plan to use the PCV15 and PPSV23 combined series to vaccinate patients for whom this is an option, you should always give the PCV15 first. PCV is always recommended to be given before PPSV23, based on studies demonstrating a better immune response to serotypes contained in both vaccines when the conjugate vaccine is given first. These vaccines should not be given at the same visit.",
        "The routine interval between PCV15 and PPSV23 is one year; however, PPSV23 may be administered a minimum of 8 weeks after PCV15 when the recipient has an immunocompromising condition, cochlear implant, or cerebrospinal fluid leak. If PPSV23 is inadvertently administered first, wait a minimum of one year to administer PCV15, PCV20, or PCV21, because there is evidence that the immune response to serotypes contained in the PCV is diminished when PCV is administered soon after PPSV23."
      ]
    },
    {
      "id": "q-68",
      "question": "Can we administer PCV15 and PPSV23 vaccines to a person 50 years of age or older at the same visit? If not, what is the recommended interval between doses?",
      "paragraphs": [
        "PCV15 and PPSV23 vaccines should not be given at the same visit. When administering PCV15 followed by PPSV23, give PCV15 first followed by PPSV23 one year later. Providers can consider waiting a minimum interval of 8 weeks to give PPSV23 to people with immunocompromising conditions, cochlear implant, or cerebrospinal fluid (CSF) leak.",
        "If a patient inadvertently received PPSV23 before PCV15, a minimum interval of at least 1 year between doses is recommended and a shorter interval is not recommended."
      ]
    },
    {
      "id": "q-69",
      "question": "What dosing intervals should be observed when giving PCV15 and PPSV23 to high-risk children who are recommended to receive either PCV20 alone or PCV15 followed by PPSV23?",
      "paragraphs": [
        "Give PCV15 first, at least 8 weeks after the most recent dose of PCV, followed by PPSV23 at least 8 weeks later. PCV15 and PPSV23 should not be given at the same visit. If a child has already received PPSV23, wait at least 8 weeks before giving PCV15 or PCV20 to the child."
      ]
    },
    {
      "id": "q-70",
      "question": "One of our team administered PCV15 and PPSV23 at the same visit to a 5-year-old child who is immunocompromised. We know the PPSV23 was supposed to be administered at least 8 weeks later. We are looking for guidance for what to do now.",
      "paragraphs": [
        "PCV vaccines and PPSV23 should not be administered at the same visit or at an interval less than 8 weeks.",
        "In children through age 18 years, if PCV and PPSV23 are administered at the same visit, the PCV dose should be repeated, and should be administered no earlier than 8 weeks after doses that were administered on the same day. However, in adults age 19 years or older, if a PCV and PPSV23 are administered at the same visit or at an interval less than 8 weeks, CDC recommends that neither dose be repeated."
      ]
    },
    {
      "id": "q-71",
      "question": "Our patient is a 78-year-old female who received PCV15, then received PPSV23 approximately 10 weeks later. She had not received PPSV23 previously. Is the PPSV23 dose valid, or does it need to be repeated?",
      "paragraphs": [
        "Even though the interval was shorter than the recommended one year, the dose of PPSV23 should be counted and does not need to be repeated. ACIP recommends that the routinely recommended interval between PCV15 and PPSV23 is 1 year, and the minimum interval is 8 weeks."
      ]
    },
    {
      "id": "q-72",
      "question": "We have a 68-year-old patient who received PCV15, then received PPSV23 approximately 5 weeks later. She had not received PPSV23 previously. Is the PPSV23 dose valid, or does it need to be repeated?",
      "paragraphs": [
        "What to do when doses of PCV15 and PPSV23 are given earlier than the recommended minimum interval of 8 weeks is not described in the ACIP pneumococcal recommendations. The CDC subject matter experts have provided the following guidance: in such a case, the dose given second does NOT need to be repeated."
      ]
    },
    {
      "id": "q-73",
      "question": "We have a healthy 66-year-old patient who received a dose of PPSV23 in January then received a dose of PCV15 five months later at a different facility. Should the PCV15 dose be repeated since it was given earlier than the 1-year interval recommended by ACIP?",
      "paragraphs": [
        "When PCV15 is given to a healthy adult 65 years or older, PCV15 should be given first followed by PPSV23 one year later.",
        "What to do when doses of PPSV23 and PCV15 are given before the recommended interval is not addressed in the ACIP recommendations. The CDC subject matter experts have advised that in such a case, the dose given second does NOT need to be repeated."
      ]
    },
    {
      "id": "q-74",
      "question": "Our 56-year-old patient needs a pneumococcal conjugate vaccine (PCV) today, but we only stock PPSV23. Should we give him PPSV23 today and tell him to return in a year for PCV?",
      "paragraphs": [
        "In this case, it is preferable to refer to a vaccination provider who can administer either PCV20 or PCV21 alone or PCV15 with plans to receive PPSV23 one year later. ACIP recommends that PCV15 be administered before PPSV23 for optimal immune response to vaccination. If there is a challenge in finding another location where the patient can receive a recommended PCV option, it is better to give PPSV23 than nothing at all."
      ]
    },
    {
      "id": "q-75",
      "question": "If patients 19 through 49 years who are in a recommended risk group for pneumococcal vaccination aren't sure if they have previously been vaccinated with a pneumococcal vaccine, should healthcare providers vaccinate them?",
      "paragraphs": [
        "Yes. If patients have an uncertain vaccination history and their records are not readily obtainable, you should administer the recommended doses: PCV20 or PCV21 alone or PCV15 followed by PPSV23 one year later. Extra doses will not cause harm to the patient. Therefore, if a patient remembers receiving PPSV23, it is acceptable to provide only one dose of PCV20, PCV21, or PCV15."
      ]
    },
    {
      "id": "q-76",
      "question": "We gave PPSV23 to a 66-year-old patient who is newly diagnosed with a medical condition that places him at increased risk for pneumococcal disease and its complications. Should we give him a second dose in 5 years because of his underlying medical condition?",
      "paragraphs": [
        "No. However, this person should receive PCV15, PCV20, or PCV21 one year after PPSV23 if he has no history or an unknown history of receiving a pneumococcal conjugate vaccine in the past."
      ]
    },
    {
      "id": "q-77",
      "question": "When should I vaccinate children or adults who are planning to have either a cochlear implant or elective splenectomy?",
      "paragraphs": [
        "It is preferable that the person planning to have the procedure be protected from pneumococcus at the time of the surgery; if possible, administer the appropriate vaccine at least two weeks in advance of the splenectomy or cochlear implant. If the procedure is done on an emergency basis, vaccinate as soon as possible after surgery. Adults who have not previously received any pneumococcal vaccine should receive either PCV20 or PCV21 alone or PCV15 followed by PPSV23 at least 8 weeks later.",
        "Recommendations for vaccination of a child in this situation depends on the child's age and pneumococcal vaccination history (number of doses and types of vaccine(s) received)."
      ]
    },
    {
      "id": "q-78",
      "question": "How should we determine what pneumococcal vaccine(s) are needed for our high-risk pediatric patients?",
      "paragraphs": [
        "All children with risk factors for pneumococcal disease or its complications should be vaccinated on time with either PCV15 or PCV20. High-risk children who complete the pneumococcal vaccination schedule without a dose of PCV20 will require additional pneumococcal vaccination. The vaccination needed after completion of the routine series (with PCV13, PCV15, or PCV20) depends on the pneumococcal vaccine product available, the child's age, specific type of risk factor, and past pneumococcal vaccination history."
      ]
    },
    {
      "id": "q-79",
      "question": "Some physicians in our area order PPSV23 every 5 years for their patients. Is this correct?",
      "paragraphs": [
        "No. PPSV23 was never recommended to be given every 5 years. If you see a patient age 65 years or older who, as a result of this practice of repeating doses of PPSV23, has had multiple doses of PPSV23, evaluate their history of pneumococcal conjugate vaccination. If they have no or unknown history of any doses of PCV, administer a single dose of PCV15, PCV20, or PCV21 at least 1 year after their most recent dose of PPSV23.",
        "If they have also received a dose of PCV13 in the past, they may receive a dose of PCV20 or PCV21 at least 5 years after their most recent pneumococcal vaccination based on shared clinical decision-making."
      ]
    },
    {
      "id": "q-80",
      "question": "Can we vaccinate a 2-year-old child with functional or anatomic asplenia against meningococcal disease if he has not completed a series of PCV13?",
      "paragraphs": [
        "Yes. The two available quadrivalent meningococcal conjugate vaccines, Menveo (MenACWY-CRM, GSK) and MenQuadfi (MenACWY-TT, Sanofi), may be administered at the same time as PCV13 or at any interval before or after receipt of PCV13. If you are going to give him Menactra (MenACWY-D, Sanofi Pasteur), you need to wait at least 4 weeks after he completes the PCV13 series before giving him the Menactra to avoid the possibility of interference with the immune response to PCV13."
      ]
    },
    {
      "id": "q-81",
      "question": "We have a 10-year-old getting renal dialysis. There is no history of previous PCV13 administration. The nephrologist will be starting her on a monoclonal antibody that interferes with C5 complement. If we administer meningococcal conjugate (MenACWY) and a PPSV23 now, and then give her a PCV15 in 8 weeks, will the PCV15 interfere with the efficacy of the PPSV23 or the MenACWY?",
      "paragraphs": [
        "No, but the PPSV23 will render the PCV15 dose less immunogenic. In this scenario, the best schedule is to give a MenACWY vaccination (any brand) simultaneously with either PCV15 or PCV20 except (MenACWY-D, Sanofi Pasteur) wth 4 weeks interval . If PCV20 is given, no additional pneumococcal vaccine doses are recommended. If PCV15 is given, then PPSV23 should be given at least eight weeks later. ACIP recommends giving PCV before PPSV23 in order to maximize the immune response to PCV. PPSV23 may blunt the immune response to the serotypes contained in PCV if PCV is given after PPSV23, although in children there is a smaller effect than in adults. PCV21 (Capvaxive, Merck) is not an option because it is not licensed or recommended for use in children. Note that a 10-year-old child with persistent complement component deficiency should also be vaccinated against meningococcal B disease."
      ]
    },
    {
      "id": "q-82",
      "question": "The pneumococcal conjugate vaccine (PCV20) package insert says that in adults, antibody responses to Prevnar 13 (Pfizer) were diminished when given with inactivated influenza vaccine. Does this mean we should not give PCV20 and influenza vaccine at the same visit?",
      "paragraphs": [
        "No. The available data have been interpreted that any changes in antibody response to either vaccine's components were clinically insignificant. If PCV20 and influenza vaccine are both indicated and recommended, they may be administered at the same visit."
      ]
    },
    {
      "id": "q-83",
      "question": "A dose of pneumococcal conjugate vaccine was administered into my patient's dialysis port. Does this dose count?",
      "paragraphs": [
        "No. There are no data on the effectiveness of pneumococcal conjugate vaccine given by the intravenous route. The patient has renal disease, so it is important to ensure that the dose they receive is effective. CDC recommends repeating the dose using the correct route of administration (intramuscular)."
      ]
    },
    {
      "id": "q-84",
      "question": "What route and needle length are recommended for administration of PPSV23 or PCV vaccines?",
      "paragraphs": [
        "PPSV23 may be administered by intramuscular (IM) or subcutaneous (Subcut) routes. Pneumococcal conjugate vaccines are administered IM."
      ]
    }
  ]
};
