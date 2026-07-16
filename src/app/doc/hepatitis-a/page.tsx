import HcpDocPdfPage from '@/components/hcp-documents/HcpDocPdfPage';
import { HCP_DOC_PAGES } from '@/data/hcp-doc-pages';

export default function HepatitisADocPage() {
  return <HcpDocPdfPage {...HCP_DOC_PAGES.hepatitisA} />;
}
