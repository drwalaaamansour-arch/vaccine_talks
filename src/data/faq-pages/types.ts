import type { ArticleMetaKey } from '@/lib/article-meta';
import type { FaqQaItem } from '@/data/faq-types';
import type { FaqTopicMeta } from '@/components/faq/FaqTopicPage';

export type FaqPageConfig = {
  metaKey: ArticleMetaKey;
  topic: FaqTopicMeta;
  note: string;
  items: FaqQaItem[];
};
