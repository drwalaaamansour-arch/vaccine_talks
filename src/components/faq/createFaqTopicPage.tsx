import FaqTopicPage from '@/components/faq/FaqTopicPage';
import type { FaqPageConfig } from '@/data/faq-pages/types';
import { ARTICLE_META } from '@/lib/article-meta';

export function createFaqTopicPage(config: FaqPageConfig) {
  const meta = ARTICLE_META[config.metaKey];

  return function FaqTopicPageRoute() {
    return (
      <FaqTopicPage
        meta={meta}
        topic={config.topic}
        note={config.note}
        items={config.items}
      />
    );
  };
}
