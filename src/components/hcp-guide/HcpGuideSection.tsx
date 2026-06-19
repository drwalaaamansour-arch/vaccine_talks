import type { HcpGuideSectionProps } from '@/components/hcp-guide/types';

export default function HcpGuideSection({
  id,
  title,
  icon = '📋',
  variant = 'default',
  titleAlign = 'left',
  dir,
  lang,
  children,
}: HcpGuideSectionProps) {
  const headClass =
    titleAlign === 'center'
      ? ' hcp-cancer-section-head--center'
      : titleAlign === 'right'
        ? ' hcp-cancer-section-head--right'
        : '';

  return (
    <section
      id={id}
      dir={dir}
      lang={lang}
      className={`hcp-cancer-section${variant === 'takeaway' ? ' hcp-cancer-takeaway-section' : ''}`}
    >
      <div className={`hcp-cancer-section-head${headClass}`}>
        <span className="hcp-cancer-section-icon" aria-hidden>
          {icon}
        </span>
        <h2 className="hcp-cancer-section-title" dir={dir} lang={lang}>
          {title}
        </h2>
      </div>
      <div className="hcp-cancer-section-body">{children}</div>
    </section>
  );
}
