import Link from 'next/link';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import type { ArticleMetaFields, SpecialCaseLocale } from './types';

type SpecialCaseArticleChromeProps = {
  locale: SpecialCaseLocale;
  back: string;
  tag: string;
  title: string;
  altTitle: string;
  lead: string;
  meta: ArticleMetaFields;
  children: React.ReactNode;
};

export function SpecialCaseArticleChrome({
  locale,
  back,
  tag,
  title,
  altTitle,
  lead,
  meta,
  children,
}: SpecialCaseArticleChromeProps) {
  const isAr = locale === 'ar';

  return (
    <div
      className={`about-lang bmt-inner${isAr ? ' arabic' : ' bmt-inner--en'}`}
      dir={isAr ? 'rtl' : 'ltr'}
      lang={locale}
    >
      <p className={`bmt-back${isAr ? '' : ' bmt-back--en'}`}>
        <Link href="/non-hcp/special-cases-vaccines">{back}</Link>
      </p>

      <header className="bmt-hero">
        <div className="bmt-hero-glow" aria-hidden />
        <span className="bmt-hero-tag">{tag}</span>
        <h2 className="about-lang-title bmt-main-title">{title}</h2>
        <p
          className={isAr ? 'bmt-subtitle-en' : 'bmt-subtitle-ar'}
          dir={isAr ? 'ltr' : 'rtl'}
          lang={isAr ? 'en' : 'ar'}
        >
          {altTitle}
        </p>
        <div className="hub-hero-meta">
          <ArticleMetaDate {...meta} locale={locale} compact />
        </div>
      </header>

      <div className="bmt-lead">
        <span className="bmt-lead-icon" aria-hidden>
          ✦
        </span>
        <p>{lead}</p>
      </div>

      <article className="bmt-body">{children}</article>
    </div>
  );
}
