import type { Metadata } from 'next';
import NonHcpCommonQuestionsTopicPage from '@/components/non-hcp-common-questions/NonHcpCommonQuestionsTopicPage';
import type { NonHcpCommonQuestionsTopicConfig } from '@/data/non-hcp-common-questions-topics';
import { ARTICLE_META } from '@/lib/article-meta';
import { createPageMetadata } from '@/lib/seo';

export function createNonHcpTopicMetadata(
  config: NonHcpCommonQuestionsTopicConfig,
  path: string,
): Metadata {
  const leadAr =
    config.leadAr ?? `أسئلة وأجوبة عن ${config.titleAr} — إجابات واضحة بالعربي والإنجليزي.`;
  const leadEn =
    config.leadEn ?? `Q&A on ${config.titleEn} — clear answers in Arabic and English.`;

  return createPageMetadata({
    title: `${config.titleAr} — أسئلة شائعة عن التطعيمات`,
    description: leadAr,
    descriptionEn: leadEn,
    path,
    keywords: [config.titleAr, config.titleEn, 'أسئلة شائعة', 'التطعيمات في مصر'],
  });
}

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
