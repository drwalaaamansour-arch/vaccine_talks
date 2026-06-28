'use client';

type HcpPdfSerumViewerProps = {
  pdfSrc: string;
  pdfFileName: string;
  iframeTitle: string;
  downloadLabel: string;
  rotatePdf?: boolean;
};

export default function HcpPdfSerumViewer({
  pdfSrc,
  pdfFileName,
  iframeTitle,
  downloadLabel,
  rotatePdf = false,
}: HcpPdfSerumViewerProps) {
  const iframe = (
    <iframe src={pdfSrc} className="hcp-pdf-serum-iframe" title={iframeTitle} />
  );

  return (
    <>
      <div className="hcp-pdf-serum-viewer">
        {rotatePdf ? <div className="hcp-pdf-serum-rotate-wrap">{iframe}</div> : iframe}
      </div>
      <div className="hcp-pdf-serum-actions">
        <a href={pdfSrc} download={pdfFileName} className="hcp-pdf-serum-download">
          {downloadLabel}
        </a>
      </div>
    </>
  );
}
