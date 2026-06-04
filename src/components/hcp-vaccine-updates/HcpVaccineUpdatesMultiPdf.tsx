import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';

export type VaccineUpdatePdf = {
  label: string;
  src: string;
  title: string;
};

export default function HcpVaccineUpdatesMultiPdf({
  heading = 'Supporting documents (PDF)',
  pdfs,
}: {
  heading?: string;
  pdfs: VaccineUpdatePdf[];
}) {
  return (
    <div className="hcp-vu-pdfs">
      <h3 className="hcp-vu-pdfs-heading">{heading}</h3>
      {pdfs.map((pdf) => (
        <div key={pdf.src} className="hcp-vu-pdf-group">
          <p className="hcp-vu-pdf-label">{pdf.label}</p>
          <HcpGuidePdfEmbed src={pdf.src} title={pdf.title} />
        </div>
      ))}
    </div>
  );
}
