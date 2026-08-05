export default function HcpGuidePdfEmbed({
  src,
  title,
  downloadLabel = 'Download PDF / تحميل PDF',
  downloadName,
}: {
  src: string;
  title: string;
  downloadLabel?: string;
  downloadName?: string;
}) {
  const fileName =
    downloadName ??
    (src.split('/').pop()?.endsWith('.pdf') ? src.split('/').pop()! : `${title.replace(/\s+/g, '-')}.pdf`);

  return (
    <section className="hcp-cancer-pdfs hcp-guide-pdfs">
      <h2 className="hcp-cancer-pdfs-heading">{title}</h2>
      <article className="hcp-cancer-pdf-block">
        <iframe src={src} className="hcp-cancer-pdf-frame" title={title} />
        <div className="hcp-cancer-pdf-actions">
          <a href={src} download={fileName} className="hcp-cancer-pdf-download">
            {downloadLabel}
          </a>
        </div>
      </article>
    </section>
  );
}
