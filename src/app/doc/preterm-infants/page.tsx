import Link from 'next/link';
import HcpDocPdfPage from '@/components/hcp-documents/HcpDocPdfPage';
import { HCP_DOC_PAGES } from '@/data/hcp-doc-pages';

export default function PretermInfantsDocPage() {
  return (
    <HcpDocPdfPage
      {...HCP_DOC_PAGES.pretermInfants}
      intro={
        <div className="hcp-doc-preterm-intro">
          <p>
            Vaccination of preterm and low birth weight infants follows the same recommended schedules as for full-term
            infants, using chronological age. Special considerations apply for hepatitis B and rotavirus. For full guidance
            and references, see the Special Populations section.
          </p>
          <Link href="/hcp-special-populations/preterm-infants" className="hcp-cancer-pdf-download">
            Preterm infants – full guidance (Special Populations)
          </Link>
        </div>
      }
    />
  );
}
