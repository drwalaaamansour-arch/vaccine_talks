import type { FaqPageConfig } from '@/data/faq-pages/types';
import { FAQ_TOPIC_NOTE } from '@/data/faq-pages/shared';

export const FAQ_RABIES_PAGE: FaqPageConfig = {
  "metaKey": "faqRabies",
  "topic": {
    "tag": "HCP · Clinical FAQ · Egypt",
    "title": "Rabies",
    "subtitle": "FAQ",
    "emoji": "🐕",
    "lead": "Pre- and post-exposure rabies prophylaxis and product choice.",
    "backHref": "/hcp-faq",
    "backLabel": "← Back to HCP FAQ"
  },
  "note": FAQ_TOPIC_NOTE,
  "items": [
    {
      "id": "q-1",
      "question": "What is the pre-exposure prophylaxis (PrEP) schedule for rabies vaccine?",
      "paragraphs": [
        "In May 2022, CDC published new ACIP recommendations reducing the primary PrEP rabies vaccination series from 3 doses to 2 doses (administered intramuscularly on days 0 and 7) for all people at elevated risk for exposure to rabies. This was done based on strong evidence that the 2-dose schedule would provide the same protection as the previously recommended 3-dose primary series for up to three years. The less costly 2-dose schedule conserves rabies vaccine supplies, which have been subject to national shortages at times, and may increase adherence with PrEP recommendations."
      ]
    },
    {
      "id": "q-2",
      "question": "A patient recently exposed to a bat received the rabies vaccine series. One of the doses was given in the gluteus. Does this dose count?",
      "paragraphs": [
        "No. Doses of rabies vaccine given in the gluteus should not be counted as valid and should be repeated. If repeating the invalid dose results in an interval between doses more than 3 days longer than the recommended interval, then you should perform a rabies serology 7–14 days after administration of the final dose in the series to ensure an adequate immune response to the series."
      ]
    },
    {
      "id": "q-3",
      "question": "How does rabies post-exposure prophylaxis (PEP) differ from getting vaccinated before an exposure (PrEP)?",
      "paragraphs": [
        "Treatment after an exposure (PEP) in a previously unvaccinated person requires receiving a dose of human rabies immune globulin (HRIG) and four (or five if the person's immune system is suppressed) doses of vaccine. Pre-exposure prophylaxis (PrEP) requires only two doses of vaccine and no immune globulin. If a person who is up to date with the recommended PrEP schedule is exposed to rabies, the person's PEP treatment is completed with two doses of vaccine (on day 0 and day 3)."
      ]
    },
    {
      "id": "q-4",
      "question": "My patient did not return for his postexposure rabies vaccine dose on day 7. How should I manage his series now?",
      "paragraphs": [
        "Every attempt should be made to adhere to the recommended vaccination schedules. Once vaccination is initiated, delays of a few days for individual doses are unimportant, but the effect of longer lapses of weeks or more is unknown. Most interruptions in the vaccine schedule do not require reinitiation of the entire series. For most minor deviations from the schedule, vaccination can be resumed as though the patient were on schedule. For example, if a patient misses the dose scheduled for day 7 and presents for vaccination on day 10, the day 7 dose should be administered that day and the schedule resumed, maintaining the same interval between doses. In this scenario, the remaining doses would be administered on days 17 and 31."
      ]
    },
    {
      "id": "q-5",
      "question": "Can a pregnant person receive rabies vaccine if exposed to rabies?",
      "paragraphs": [
        "Yes. A pregnant person should receive rabies vaccine if indicated. No fetal abnormalities have been reported with the rabies vaccine. A pregnant person can receive routine pre-exposure vaccination against rabies if the risk of exposure is high."
      ]
    },
    {
      "id": "q-6",
      "question": "Who should not receive the rabies vaccine?",
      "paragraphs": [
        "The rabies vaccine is not recommended for routine use in the general population. Anyone for whom the pre-exposure vaccine is recommended should not receive a dose when they are moderately or severely ill."
      ]
    }
  ]
};
