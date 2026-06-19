import type { ReactNode } from 'react';
import type { HcpGuideTocItem } from '@/components/hcp-guide/types';
import HcpGuideArabicDisclaimer from '@/components/hcp-guide/HcpGuideArabicDisclaimer';

type HcpGuideArabicPanelBaseProps = {
  id?: string;
  badge?: string;
  subtitleEn?: string;
  toc?: HcpGuideTocItem[];
  children: ReactNode;
  /** Show AI translation disclaimer after Arabic content (default true). */
  showTranslationDisclaimer?: boolean;
};

type HcpGuideArabicPanelFullProps = HcpGuideArabicPanelBaseProps & {
  contentOnly?: false;
  title: string;
  lead: string;
};

type HcpGuideArabicPanelContentOnlyProps = HcpGuideArabicPanelBaseProps & {
  contentOnly: true;
  title?: string;
  lead?: string;
};

type HcpGuideArabicPanelProps = HcpGuideArabicPanelFullProps | HcpGuideArabicPanelContentOnlyProps;

export default function HcpGuideArabicPanel({
  id = 'arabic-section',
  badge = 'النسخة العربية · HCP',
  title,
  subtitleEn,
  lead,
  toc,
  children,
  contentOnly = false,
  showTranslationDisclaimer = true,
}: HcpGuideArabicPanelProps) {
  const disclaimer = showTranslationDisclaimer ? <HcpGuideArabicDisclaimer /> : null;

  if (contentOnly) {
    return (
      <div className="hcp-guide-ar-panel-body hcp-guide-ar-panel-body--standalone" dir="rtl" lang="ar">
        {children}
        {disclaimer}
      </div>
    );
  }

  return (
    <section id={id} className="hcp-guide-ar-panel" dir="rtl" lang="ar" aria-labelledby={`${id}-title`}>
      <div className="hcp-guide-ar-panel-shell">
        <div className="hcp-guide-ar-panel-corner hcp-guide-ar-panel-corner-tl" aria-hidden />
        <div className="hcp-guide-ar-panel-corner hcp-guide-ar-panel-corner-tr" aria-hidden />
        <div className="hcp-guide-ar-panel-corner hcp-guide-ar-panel-corner-bl" aria-hidden />
        <div className="hcp-guide-ar-panel-corner hcp-guide-ar-panel-corner-br" aria-hidden />

        <header className="hcp-guide-ar-panel-hero">
          <div className="hcp-guide-ar-panel-glow" aria-hidden />
          <span className="hcp-guide-ar-panel-badge">{badge}</span>
          <h2 id={`${id}-title`} className="hcp-guide-ar-panel-title" dir="rtl" lang="ar">
            {title}
          </h2>
          {subtitleEn ? (
            <p className="hcp-guide-ar-panel-subtitle" dir="ltr" lang="en">
              {subtitleEn}
            </p>
          ) : null}
          <div className="hcp-guide-ar-panel-lead">
            <span className="hcp-guide-ar-panel-lead-icon" aria-hidden>
              ✦
            </span>
            <p>{lead}</p>
          </div>
        </header>

        {toc && toc.length > 0 ? (
          <nav className="hcp-guide-ar-panel-nav" aria-label="محتويات النسخة العربية">
            <p className="hcp-guide-ar-panel-nav-label">في هذه الصفحة</p>
            <ul className="hcp-guide-ar-panel-nav-list">
              {toc.map((item, index) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} dir="rtl" lang="ar">
                    <span className="hcp-guide-ar-panel-nav-num">{index + 1}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        <div className="hcp-guide-ar-panel-body">
          {children}
          {disclaimer}
        </div>
      </div>
    </section>
  );
}
