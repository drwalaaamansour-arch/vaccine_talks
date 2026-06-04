import NonHcpCommonQuestionsTopicPage from '@/components/non-hcp-common-questions/NonHcpCommonQuestionsTopicPage';
import type { NonHcpCommonQuestionsTopicConfig } from '@/data/non-hcp-common-questions-topics';
import { ARTICLE_META } from '@/lib/article-meta';

export function createNonHcpCommonQuestionsTopicPage(config: NonHcpCommonQuestionsTopicConfig) {
  const meta = ARTICLE_META[config.metaKey];
  const leadAr =
    config.leadAr ?? `أسئلة وأجوبة عن ${config.titleAr} — إجابات واضحة بالعربي والإنجليزي.`;
  const leadEn =
    config.leadEn ?? `Q&A on ${config.titleEn} — clear answers in Arabic and English.`;

  return function NonHcpCommonQuestionsTopicRoute() {
    return (
      <NonHcpCommonQuestionsTopicPage
        meta={meta}
        emoji={config.emoji}
        titleAr={config.titleAr}
        titleEn={config.titleEn}
        leadAr={leadAr}
        leadEn={leadEn}
        questions={config.questions}
      />
    );
  };
}
