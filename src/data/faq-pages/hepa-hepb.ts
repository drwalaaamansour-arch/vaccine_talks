import type { FaqPageConfig } from '@/data/faq-pages/types';
import { FAQ_TOPIC_NOTE } from '@/data/faq-pages/shared';

export const FAQ_HEPA_HEPB_PAGE: FaqPageConfig = {
  "metaKey": "faqHepaHepb",
  "topic": {
    "tag": "HCP · Clinical FAQ · Egypt",
    "title": "Hepatitis A & B (HepA+HepB)",
    "subtitle": "FAQ",
    "emoji": "🔵",
    "lead": "Combined hepatitis A and B vaccine — eligibility and intervals.",
    "backHref": "/hcp-faq",
    "backLabel": "← Back to HCP FAQ"
  },
  "note": FAQ_TOPIC_NOTE,
  "items": [
    {
      "id": "q-1",
      "question": "I would like more information about Twinrix, the combination hepatitis A and B vaccine.",
      "paragraphs": [
        "Twinrix is an inactivated combination vaccine containing both hepatitis A virus (HAV) and HBV antigens. The vaccine contains 720 EL.U. of hepatitis A antigen (half of the Havrix adult dose) and 20µg of hepatitis B antigen (the full Engerix-B adult dose). In the U.S., Twinrix is licensed for use in people who are age 16 years or older. It can be administered to people who are at risk for both hepatitis A and hepatitis B, such as certain international travelers, people with chronic liver disease, men who have sex with men, illegal drug users, or to people who simply want to be immune to both diseases. A Twinrix series consists of 3 doses given intramuscularly on a 0, 1-, and 6-month routine schedule. For travelers who need protection quickly, four doses of Twinrix may be used to complete hepatitis A and hepatitis B vaccination, with the first three doses administered at 0, 7 days, and 21-30 days, and a booster dose at 12 months."
      ]
    },
    {
      "id": "q-2",
      "question": "What are the minimum intervals for the 3-dose series of Twinrix (HepA-HepB)?",
      "paragraphs": [
        "Minimum intervals for Twinrix are 4 weeks between dose #1 and dose #2, and 5 months between dose #2 and dose #3."
      ]
    },
    {
      "id": "q-3",
      "question": "A 17-year-old received two doses of Twinrix (HepA-HepB), separated by one month. The second dose was six months ago and she is now 18 years old. Can she receive the third dose of Twinrix to complete the series?",
      "paragraphs": [
        "Yes. This was a vaccine administration error since Twinrix, a combination hepatitis A/hepatitis B vaccine, is not licensed for people younger than 16. However, the hepatitis A and hepatitis B components can be counted as valid doses. The third dose of the Twinrix series should be given at least five months after the second dose."
      ]
    },
    {
      "id": "q-4",
      "question": "We heard that there is an alternative schedule for the Twinrix (HepA-HepB) that gives the patient protection sooner than the standard schedule does. Can you tell us more?",
      "paragraphs": [
        "Twinrix is normally given as a 3-dose series on a schedule of 0, 1, and 6 months. However, if someone needs protection sooner (e.g., imminent foreign travel), you can give it as a 4-dose series at intervals of 0, 7, and 21–30 days, followed by a fourth (booster) dose at least 12 months after the first dose."
      ]
    },
    {
      "id": "q-5",
      "question": "Can Twinrix Be Mixed with Single-Antigen Hepatitis B Vaccine?",
      "paragraphs": [
        "Twinrix should not be used for only doses #1 and #3 with a single-antigen hepatitis B vaccine as dose #2. This is because Twinrix contains only half the hepatitis A antigen found in the standard adult dose of Havrix (720 EL.U. vs. 1,440 EL.U.). As a result, the patient would not receive the recommended amount of hepatitis A antigen if Twinrix is used in this manner."
      ]
    },
    {
      "id": "q-6",
      "question": "I have seen adults who have had 1 or 2 doses of Twinrix (HepA-HepB), but we only carry single-antigen vaccine in our practice. How should we complete their vaccination series with single-antigen vaccines?",
      "paragraphs": [
        "Twinrix is licensed as a 3-dose series for people age 18 years and older (minimum interval between dose 1 and dose 2 is 4 weeks; minimum interval between dose 2 and dose 3 is 5 months). It is also approved for use in an accelerated 4-dose schedule in adults, with doses given at 0, 7, and 21-30 days, followed by a booster dose at 12 months. There is no accelerated schedule for single antigen HepA or HepB vaccines, so the recommendations below presume the use of the Twinrix 3-dose routine schedule, with a minimum interval between dose 1 and dose 2 of 4 weeks.",
        "If Twinrix is not available or if you choose not to use Twinrix to complete the hepatitis A (HepA) and hepatitis B (HepB) series, you should do the following:",
        "If 1 dose of Twinrix was given, complete the series with 2 adult doses of HepA and 2 adult doses of HepB.",
        "If 2 doses of Twinrix were given, complete the schedule with 1 adult dose of HepA and 1 adult dose of HepB.",
        "Another way to consider this is as follows:",
        "A dose of Twinrix contains a standard adult dose of HepB and a pediatric dose of HepA. So, a dose of Twinrix can be substituted for any dose of the HepB series but not for any dose of the HepA series.",
        "Any combination of 3 doses of adult HepB or 3 doses of Twinrix is a complete series of HepB vaccine",
        "One dose of Twinrix and 2 doses of adult HepA is a complete series of HepA",
        "Two doses of Twinrix and 1 dose of adult HepA is a complete series of HepA"
      ]
    },
    {
      "id": "q-7",
      "question": "We're thinking of using Twinrix (HepA-HepB) and we're wondering whether we can use it for doses #1 and #3 only and use single antigen hepatitis B vaccine for dose #2?",
      "paragraphs": [
        "No. Twinrix contains 50% less hepatitis A antigen component than Havrix, GSK's monovalent HepA vaccine [720 vs. 1440 EL.U.], so the patient would not receive the recommended dose of HepA vaccine antigen."
      ]
    }
  ]
};
