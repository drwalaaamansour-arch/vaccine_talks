export default function HcpGuidePdfEmbed({
  src,
  title,
  downloadLabel = 'Download PDF / تحميل PDF',
}: {
  src: string;
  title: string;
  downloadLabel?: string;
}) {
  return (
    <section className="hcp-cancer-pdfs hcp-guide-pdfs">
      <h2 className="hcp-cancer-pdfs-heading">{title}</h2>
      <article className="hcp-cancer-pdf-block">
        <iframe src={src} className="hcp-cancer-pdf-frame" title={title} />
        <div className="hcp-cancer-pdf-actions">
          <a href={src} download className="hcp-cancer-pdf-download">
            {downloadLabel}
          </a>
        </div>
      </article>
    </section>
  );
}
