import Link from 'next/link';

export default function HcpGuideRelatedLinks({
  links,
}: {
  links: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div className="hcp-guide-related-links">
      {links.map((link) =>
        link.external ? (
          <a
            key={link.href}
            href={link.href}
            className="hcp-guide-related-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ) : (
          <Link key={link.href} href={link.href} className="hcp-guide-related-link">
            {link.label}
          </Link>
        ),
      )}
    </div>
  );
}
