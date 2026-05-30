import type { ArticleMeta } from '@/lib/article-meta';

export type ArticleMetaLocale = 'ar' | 'en';

type ArticleMetaDateProps = ArticleMeta & {
  locale?: ArticleMetaLocale;
  align?: 'center' | 'left';
  compact?: boolean;
};

const LABELS = {
  ar: {
    added: 'تاريخ إضافة المحتوى',
    updated: 'آخر تحديث',
  },
  en: {
    added: 'Content added',
    updated: 'Last updated',
  },
} as const;

const lineStyle = {
  margin: 0,
  fontSize: '0.82rem',
  fontWeight: 600,
  letterSpacing: '0.04em',
  color: 'rgba(64, 96, 109, 0.75)',
};

export default function ArticleMetaDate({
  added,
  lastUpdated,
  locale = 'en',
  align = 'center',
  compact = false,
}: ArticleMetaDateProps) {
  const textAlign = align === 'left' ? 'left' : 'center';
  const labels = LABELS[locale];
  const isRtl = locale === 'ar';

  return (
    <div
      style={{
        textAlign,
        marginBottom: compact ? '0.75rem' : '1.5rem',
        width: '100%',
        direction: isRtl ? 'rtl' : 'ltr',
      }}
    >
      <p style={{ ...lineStyle, textAlign, marginBottom: '0.25rem' }}>
        {labels.added}: {added}
      </p>
      <p style={{ ...lineStyle, textAlign, fontWeight: 500, marginBottom: 0 }}>
        {labels.updated}: {lastUpdated}
      </p>
    </div>
  );
}
