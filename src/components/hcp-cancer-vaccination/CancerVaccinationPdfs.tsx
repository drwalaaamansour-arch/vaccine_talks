const AU_CHEMOTHERAPY_TABLE_PDF = `/${encodeURIComponent(
  'Table. Recommendations for vaccination in people who have received chemotherapy | The Australian Immunisation Handbook.pdf',
)}`;

const AU_IMMUNOCOMPROMISE_LEVELS_PDF = `/${encodeURIComponent(
  'Table. Types of medical conditions and immunosuppressive therapy and associated levels of immunocompromise | The Australian Immunisation Handbook.pdf',
)}`;

const CHEMOTHERAPY_CHECKLIST_PDF = '/chemotherapy-vaccination-checklist.pdf';
const CHEMOTHERAPY_GUIDELINES_PDF = '/chemotherapy-vaccination-guidelines.pdf';
const CCLG_VACCINATIONS_GUIDELINES_PDF = '/cclg-vaccinations-guidelines-2025.pdf';
const CCLG_VACCINATION_GUIDELINE_2026_PDF = '/cclg-vaccination-guideline-2026-branded-may2026.pdf';
const ASCO_ADULTS_WITH_CANCER_PDF = '/asco-vaccination-adults-with-cancer-guideline.pdf';

function PdfEmbed({
  src,
  title,
  downloadName,
}: {
  src: string;
  title: string;
  downloadName?: string;
}) {
  const fileName =
    downloadName ??
    (src.split('/').pop()?.endsWith('.pdf') ? decodeURIComponent(src.split('/').pop()!) : undefined);

  return (
    <article className="hcp-cancer-pdf-block">
      <h3 className="hcp-cancer-pdf-title">{title}</h3>
      <iframe src={src} className="hcp-cancer-pdf-frame" title={title} />
      <div className="hcp-cancer-pdf-actions">
        <a href={src} download={fileName} className="hcp-cancer-pdf-download">
          Download PDF / تحميل PDF
        </a>
      </div>
    </article>
  );
}

export default function CancerVaccinationPdfs({ arabic = false }: { arabic?: boolean }) {
  return (
    <section
      id={arabic ? 'handbook-pdfs-ar' : 'handbook-pdfs'}
      className="hcp-cancer-pdfs"
      dir={arabic ? 'rtl' : undefined}
      lang={arabic ? 'ar' : undefined}
    >
      <h2 className="hcp-cancer-pdfs-heading">
        {arabic ? 'إرشادات وجداول الدليل (PDF)' : 'Guidelines and handbook tables (PDF)'}
      </h2>
      <PdfEmbed
        src={CHEMOTHERAPY_CHECKLIST_PDF}
        title={arabic ? 'قائمة تحقق التطعيم' : 'Vaccination checklist'}
        downloadName="chemotherapy-vaccination-checklist.pdf"
      />
      <PdfEmbed
        src={CHEMOTHERAPY_GUIDELINES_PDF}
        title={arabic ? 'إرشادات تطعيم العلاج الكيميائي' : 'Chemotherapy vaccination guidelines'}
        downloadName="chemotherapy-vaccination-guidelines.pdf"
      />
      <PdfEmbed
        src={CCLG_VACCINATION_GUIDELINE_2026_PDF}
        title="CCLG Vaccination Guideline 2026 (May 2026)"
        downloadName="cclg-vaccination-guideline-2026-branded-may2026.pdf"
      />
      <PdfEmbed
        src={ASCO_ADULTS_WITH_CANCER_PDF}
        title="Vaccination of Adults With Cancer: ASCO Guideline"
        downloadName="asco-vaccination-adults-with-cancer-guideline.pdf"
      />
      <PdfEmbed
        src={CCLG_VACCINATIONS_GUIDELINES_PDF}
        title="CCLG Vaccinations Guidelines 2025"
        downloadName="cclg-vaccinations-guidelines-2025.pdf"
      />
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
