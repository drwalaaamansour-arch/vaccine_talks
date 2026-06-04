import type { FaqPageConfig } from '@/data/faq-pages/types';
import { FAQ_TOPIC_NOTE } from '@/data/faq-pages/shared';

export const FAQ_BCG_PAGE: FaqPageConfig = {
  "metaKey": "faqBcg",
  "topic": {
    "tag": "HCP · Clinical FAQ · Egypt",
    "title": "BCG",
    "subtitle": "FAQ",
    "emoji": "🫁",
    "lead": "BCG vaccine — use in Egypt and clinical FAQs.",
    "backHref": "/hcp-faq",
    "backLabel": "← Back to HCP FAQ"
  },
  "note": FAQ_TOPIC_NOTE,
  "items": []
};
