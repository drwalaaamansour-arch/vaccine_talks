import type { CSSProperties, ReactNode } from 'react';
import type { ArticleMeta } from '@/lib/article-meta';
import ArticleMetaDate, { type ArticleMetaLocale } from '@/components/ArticleMetaDate';

type VaccineLangTitleProps = ArticleMeta & {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  locale?: ArticleMetaLocale;
};

export default function VaccineLangTitle({
  children,
  added,
  lastUpdated,
  className = 'about-lang-title',
  style,
  locale = 'en',
}: VaccineLangTitleProps) {
  return (
    <>
      <h2 className={className} style={style}>
        {children}
      </h2>
      <ArticleMetaDate added={added} lastUpdated={lastUpdated} locale={locale} compact />
    </>
  );
}
