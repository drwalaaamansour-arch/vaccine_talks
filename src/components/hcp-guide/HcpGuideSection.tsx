import type { HcpGuideSectionProps } from '@/components/hcp-guide/types';

export default function HcpGuideSection({
  id,
  title,
  icon = '📋',
  variant = 'default',
  titleAlign = 'left',
  children,
}: HcpGuideSectionProps) {
  return (
    <section
      id={id}
      className={`hcp-cancer-section${variant === 'takeaway' ? ' hcp-cancer-takeaway-section' : ''}`}
    >
      <div
        className={`hcp-cancer-section-head${titleAlign === 'center' ? ' hcp-cancer-section-head--center' : ''}`}
      >
        <span className="hcp-cancer-section-icon" aria-hidden>
          {icon}
        </span>
        <h2 className="hcp-cancer-section-title">{title}</h2>
      </div>
      <div className="hcp-cancer-section-body">{children}</div>
    </section>
  );
}
