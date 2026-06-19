import type { HcpGuideNavLink } from '@/components/hcp-guide/types';

export default function HcpGuideSubNav({
  title = 'Related topics',
  links,
  dir,
  lang,
}: {
  title?: string;
  links: HcpGuideNavLink[];
  dir?: 'rtl' | 'ltr';
  lang?: string;
}) {
  return (
    <nav className="hcp-guide-subnav" aria-label={title} dir={dir} lang={lang}>
      <p className="hcp-guide-subnav-title">{title}</p>
      <div className="hcp-guide-subnav-grid">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hcp-guide-subnav-link">
            {link.emoji ? (
              <span className="hcp-guide-subnav-emoji" aria-hidden>
                {link.emoji}
              </span>
            ) : null}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
