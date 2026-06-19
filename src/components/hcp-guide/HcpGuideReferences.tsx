import type { HcpGuideReference } from '@/components/hcp-guide/types';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';

export default function HcpGuideReferences({
  references,
  id = 'references',
  title = 'References',
  dir,
  lang,
  titleAlign = 'left',
}: {
  references: HcpGuideReference[];
  id?: string;
  title?: string;
  dir?: 'rtl' | 'ltr';
  lang?: string;
  titleAlign?: 'left' | 'center' | 'right';
}) {
  return (
    <HcpGuideSection id={id} title={title} icon="📚" dir={dir} lang={lang} titleAlign={titleAlign}>
      <ul className="hcp-cancer-ref-list hcp-guide-ref-list">
        {references.map((ref) => (
          <li key={ref.href}>
            {ref.citation}{' '}
            <a
              href={ref.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hcp-cancer-inline-link"
            >
              {ref.href}
            </a>
          </li>
        ))}
      </ul>
    </HcpGuideSection>
  );
}
