/** CDC Arabic vaccine PDF embed — for public (non-HCP) vaccine pages only. */
type CdcArabicPdfSectionProps = {
  fileName: string;
  titleAr: string;
  titleEn: string;
  introAr?: string;
};

const CDC_ARABIC_BASE = '/cdc%20arabic';

export default function CdcArabicPdfSection({ fileName, titleAr, titleEn, introAr }: CdcArabicPdfSectionProps) {
  const pdfUrl = `${CDC_ARABIC_BASE}/${fileName}`;
  const embedUrl = `${pdfUrl}#view=FitH&toolbar=1`;

  return (
    <section className="about-section">
      <div className="about-elegant-card">
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>

        <div className="about-bilingual">
          <div
            className="about-lang"
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <h2
              className="about-lang-title"
              style={{ textAlign: 'center', fontSize: '2rem', alignSelf: 'center' }}
            >
              {titleAr}
            </h2>
            {introAr ? (
              <p
                className="about-lang-intro"
                dir="rtl"
                style={{
                  textAlign: 'center',
                  margin: '0 0 1rem',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  lineHeight: 1.75,
                  maxWidth: '52rem',
                  width: '100%',
                }}
              >
                {introAr}
              </p>
            ) : null}
            <p
              style={{
                textAlign: 'center',
                margin: '0 0 1.25rem',
                color: '#40606d',
                fontWeight: 600,
              }}
              dir="ltr"
            >
              {titleEn}
            </p>
            <div style={{ width: '100%', marginTop: '0.5rem' }}>
              <iframe
                src={embedUrl}
                width="100%"
                height="800px"
                style={{ border: 'none', borderRadius: '8px' }}
                title={`${fileName} PDF`}
              />
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <a
                  href={pdfUrl}
                  download
                  style={{
                    display: 'inline-block',
                    padding: '0.75rem 2rem',
                    background: '#40606D',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: '600',
                  }}
                >
                  Download PDF / تحميل PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
