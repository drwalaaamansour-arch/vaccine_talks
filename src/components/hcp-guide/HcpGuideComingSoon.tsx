import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import type { HcpGuideMetaKey } from '@/components/hcp-guide/types';

export default function HcpGuideComingSoon({
  metaKey,
  title,
  lead = 'This section is being prepared. Check back soon for evidence-based guidance.',
  emoji = '📋',
  tag,
  backHref,
  backLabel,
}: {
  metaKey: HcpGuideMetaKey;
  title: string;
  lead?: string;
  emoji?: string;
  tag?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <HcpGuidePageLayout
      metaKey={metaKey}
      title={title}
      lead={lead}
      emoji={emoji}
      tag={tag}
      backHref={backHref}
      backLabel={backLabel}
      bilingual={{
        arLead: 'يتم إعداد هذا القسم. عد قريبًا للحصول على إرشادات قائمة على الأدلة.',
        arabicChildren: (
          <div className="hcp-guide-coming-soon" dir="rtl" lang="ar">
            <p>المحتوى قريبًا.</p>
          </div>
        ),
      }}
    >
      <div className="hcp-guide-coming-soon">
        <p>Content coming soon.</p>
      </div>
    </HcpGuidePageLayout>
  );
}
