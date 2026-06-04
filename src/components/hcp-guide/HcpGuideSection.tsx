import type { HcpGuideSectionProps } from '@/components/hcp-guide/types';

export default function HcpGuideSection({
  id,
  title,
  icon = '📋',
  variant = 'default',
  children,
}: HcpGuideSectionProps) {
  return (
    <section
      id={id}
      className={`hcp-cancer-section${variant === 'takeaway' ? ' hcp-cancer-takeaway-section' : ''}`}
    >
      <div className="hcp-cancer-section-head">
        <span className="hcp-cancer-section-icon" aria-hidden>
          {icon}
        </span>
        <h2 className="hcp-cancer-section-title">{title}</h2>
      </div>
      <div className="hcp-cancer-section-body">{children}</div>
    </section>
  );
}
