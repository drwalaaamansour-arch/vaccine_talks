import type { CSSProperties, ReactNode } from 'react';
import type { ArticleMeta } from '@/lib/article-meta';
import ArticleMetaDate, { type ArticleMetaLocale } from '@/components/ArticleMetaDate';

type ArticlePageTitleProps = ArticleMeta & {
  children: ReactNode;
  className?: string;
  titleStyle?: CSSProperties;
  locale?: ArticleMetaLocale;
};

export default function ArticlePageTitle({
  children,
  added,
  lastUpdated,
  className = 'about-lang-title',
  titleStyle,
  locale = 'en',
}: ArticlePageTitleProps) {
  return (
    <>
      <h2
        className={className}
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          alignSelf: 'center',
          marginBottom: '0.35rem',
          color: '#40606D',
          ...titleStyle,
        }}
      >
        {children}
      </h2>
      <ArticleMetaDate added={added} lastUpdated={lastUpdated} locale={locale} />
    </>
  );
}
