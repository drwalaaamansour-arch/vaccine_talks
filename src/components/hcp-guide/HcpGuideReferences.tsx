import type { HcpGuideReference } from '@/components/hcp-guide/types';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';

export default function HcpGuideReferences({
  references,
  id = 'references',
}: {
  references: HcpGuideReference[];
  id?: string;
}) {
  return (
    <HcpGuideSection id={id} title="References" icon="📚">
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
