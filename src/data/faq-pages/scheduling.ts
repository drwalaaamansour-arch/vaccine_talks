import type { FaqPageConfig } from '@/data/faq-pages/types';
import { FAQ_TOPIC_NOTE } from '@/data/faq-pages/shared';

export const FAQ_SCHEDULING_PAGE: FaqPageConfig = {
  "metaKey": "faqScheduling",
  "topic": {
    "tag": "HCP · Clinical FAQ · Egypt",
    "title": "Scheduling",
    "subtitle": "FAQ",
    "emoji": "🗓️",
    "lead": "Intervals, catch-up schedules, and minimum ages between doses.",
    "backHref": "/hcp-faq",
    "backLabel": "← Back to HCP FAQ"
  },
  "note": FAQ_TOPIC_NOTE,
  "items": [
    {
      "id": "q-1",
      "question": "Why are vaccines generally not given to infants younger than 6 weeks of age in the U.S.?",
      "paragraphs": [
        "Mainly because little safety or efficacy data exist on doses given before 6 weeks of age, and the vaccines aren't licensed for this use. The data that exist suggest that the response to doses given before 6 weeks is poor and, in the case of Haemophilus influenzae type b (Hib) vaccine, the response could be detrimental to the infant by possibly reducing the immune response to subsequent doses of Hib conjugate vaccine. Hepatitis B vaccine is an exception because infants respond adequately to this vaccine as early as the day of birth and receipt of this vaccine at birth is necessary to protect infants born to HBsAg-positive mothers."
      ]
    },
    {
      "id": "q-2",
      "question": "Is it necessary to start a vaccine series over if a patient doesn't come back for a dose at the recommended time, even if there's been a year or more delay?",
      "paragraphs": [
        "For routinely administered vaccines, there is no vaccine series that needs to be restarted because of an interval that is longer than recommended. In certain circumstances, oral typhoid vaccine (which may be given for international travel) needs to be restarted if the vaccine series isn't completed within the recommended time frame."
      ]
    },
    {
      "id": "q-3",
      "question": "What is meant by \"minimum intervals\" between vaccine doses?",
      "paragraphs": [
        "Vaccination schedules are generally determined by clinical trials, usually prior to licensure of the vaccine. The spacing of doses in the clinical trial usually becomes the recommended schedule. A \"minimum interval\" is shorter than the recommended interval between doses, and is the shortest time between two doses of a vaccine series in which an adequate response to the second dose can be expected. The concern is that a dose given too soon after the previous dose may reduce the response to that dose."
      ]
    },
    {
      "id": "q-4",
      "question": "How can we quickly determine how to \"catch up\" children who have fallen behind on their shots?",
      "paragraphs": [
        "As a general rule, infants or children who are more than 1 month or 1 dose behind schedule should be on an accelerated schedule, which means the intervals between doses should be reduced to the minimum allowable."
      ]
    },
    {
      "id": "q-5",
      "question": "When a 3-month-old infant presents having had no prior immunizations, would you start the accelerated schedule?",
      "paragraphs": [
        "The accelerated schedule should be used when the child is more than a month behind schedule, until you get them caught up. An accelerated schedule is acceptable as long as minimum ages and minimum intervals are observed for each dose. Once you have the child back on schedule, use the recommended ages and intervals on the childhood schedule. In this case you can give the child the first set of recommended vaccines at age 3 months and then bring him back at age 4 months and give the second set of vaccinations. At this point the child will be caught up and can return to the usual schedule. Be sure to educate the parents and talk to them about the importance of bringing the child back on time."
      ]
    },
    {
      "id": "q-6",
      "question": "If a child falls behind on immunizations, is it recommended to use only minimum intervals to get the child caught up? Or should we use a minimum interval for the same vaccine only once?",
      "paragraphs": [
        "If a child is behind on immunizations, the Advisory Committee on Immunization Practices (ACIP) recommends using the minimum intervals between each dose until the child is caught up. The minimum interval for a vaccine can be used as many times as necessary, until the child is back on schedule."
      ]
    },
    {
      "id": "q-7",
      "question": "If two different live virus vaccines are inadvertently given less than 4 weeks apart, what should be done?",
      "paragraphs": [
        "Two or more injectable or nasally administered live vaccines not administered on the same day should be separated by at least 4 weeks to minimize the potential risk for interference. If two such vaccines are separated by less than 4 weeks, the second vaccine administered should not be counted and the dose should be repeated at least 4 weeks later. In cases where the vaccine doses given less than 28 days apart are two doses of the same live vaccine in a series (e.g., 2 doses of MMR vaccine), not different vaccines, you do not need to repeat the second dose if it was inadvertently administered within the 4-day \"grace period\" before day 28. If given more than 4 days earlier than day 28, the second dose should be repeated after the recommended minimum interval from the invalid dose."
      ]
    },
    {
      "id": "q-8",
      "question": "We gave a dose of vaccine too soon after the previous dose. When can we give another (valid) dose?",
      "paragraphs": [
        "If vaccines are given too close together, it can result in a less than optimal immune response. However, in most instances, a difference of a few days is unlikely to have a negative effect on immune response. With the exception of rabies vaccine, ACIP allows a grace period of 4 days (i.e., vaccine doses administered up to 4 days before the recommended minimum interval or age can be counted as valid). However, if a dose was administered 5 or more days earlier than the recommended minimum interval between doses, it is not valid and must be repeated. The repeat dose should be spaced after the invalid dose by the recommended minimum interval. Note that for hepatitis A vaccination, if the second dose is administered too early and must be repeated, the recommended interval between the invalid dose and the repeat dose is 6 months; however, if the repeat dose is administered earlier than 6 months no further doses are recommended as long as the interval between the first and final dose is at least 6 months.",
        "If the first dose in a series is given 5 days or more before the recommended minimum age, the dose should be repeated on or after the date when the child reaches at least the minimum age. If the vaccine is a live vaccine, ensuring that a minimum interval of 28 days has elapsed from the invalid dose is recommended. Avoid such errors by knowing the minimum intervals and ages for routinely given vaccines."
      ]
    },
    {
      "id": "q-9",
      "question": "Two live virus vaccines can be given on the same day. How do you define \"day\"?",
      "paragraphs": [
        "The \"same day\" generally means at the same visit. This interval has not been precisely defined and probably will never be since it would be extremely difficult to study in order to develop an evidence-based recommendation. Immunization programs (and their computer systems) likely define this differently. It seems reasonable that if two vaccines were given on the same date then they would both be valid."
      ]
    },
    {
      "id": "q-10",
      "question": "For the purpose of vaccine spacing, what constitutes a month: 28 days (4 weeks), 30 days, or 31 days?",
      "paragraphs": [
        "For intervals of 3 months or less, you should use 28 days (4 weeks) as a \"month.\" For intervals of 4 months or longer, you should consider a month a \"calendar month\": the interval from one calendar date to the next a month later."
      ]
    },
    {
      "id": "q-11",
      "question": "If I give a pneumococcal polysaccharide vaccine to my patient now, how long must I wait before giving the influenza or Td vaccine?",
      "paragraphs": [
        "Influenza vaccine and Td (or Tdap) may be given at the same time or at any time before or after a dose of pneumococcal polysaccharide vaccine. The only time you have to wait is when two LIVE vaccines are not given at the same visit; then you need to wait at least 4 weeks to give the second live vaccine."
      ]
    }
  ]
};
