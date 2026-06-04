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
    >
      <div className="hcp-guide-coming-soon">
        <p>Content coming soon.</p>
      </div>
    </HcpGuidePageLayout>
  );
}
