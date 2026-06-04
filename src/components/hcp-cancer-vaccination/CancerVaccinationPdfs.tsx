const AU_CHEMOTHERAPY_TABLE_PDF = `/${encodeURIComponent(
  'Table. Recommendations for vaccination in people who have received chemotherapy | The Australian Immunisation Handbook.pdf',
)}`;

const AU_IMMUNOCOMPROMISE_LEVELS_PDF = `/${encodeURIComponent(
  'Table. Types of medical conditions and immunosuppressive therapy and associated levels of immunocompromise | The Australian Immunisation Handbook.pdf',
)}`;

function PdfEmbed({ src, title }: { src: string; title: string }) {
  return (
    <article className="hcp-cancer-pdf-block">
      <h3 className="hcp-cancer-pdf-title">{title}</h3>
      <iframe src={src} className="hcp-cancer-pdf-frame" title={title} />
      <div className="hcp-cancer-pdf-actions">
        <a href={src} download className="hcp-cancer-pdf-download">
          Download PDF / تحميل PDF
        </a>
      </div>
    </article>
  );
}

export default function CancerVaccinationPdfs() {
  return (
    <section id="handbook-pdfs" className="hcp-cancer-pdfs">
      <h2 className="hcp-cancer-pdfs-heading">Australian Immunisation Handbook — tables (PDF)</h2>
      <PdfEmbed
        src={AU_CHEMOTHERAPY_TABLE_PDF}
        title="Table. Recommendations for vaccination in people who have received chemotherapy | The Australian Immunisation Handbook"
      />
      <PdfEmbed
        src={AU_IMMUNOCOMPROMISE_LEVELS_PDF}
        title="Table. Types of medical conditions and immunosuppressive therapy and associated levels of immunocompromise | The Australian Immunisation Handbook"
      />
    </section>
  );
}
