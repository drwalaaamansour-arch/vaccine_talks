import HcpDocPdfPage from '@/components/hcp-documents/HcpDocPdfPage';
import { HCP_DOC_PAGES } from '@/data/hcp-doc-pages';

export default function MeningococcalAcwyDocPage() {
  return <HcpDocPdfPage {...HCP_DOC_PAGES.meningococcalAcwy} />;
}
