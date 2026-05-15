import type { ReactNode } from 'react';
import Header from '@/components/Header';

const prose: React.CSSProperties = {
  direction: 'ltr',
  textAlign: 'left',
  lineHeight: 1.75,
  fontSize: '1rem',
  color: 'rgba(45, 42, 38, 0.92)',
};

const p = (mb = '0.95rem'): React.CSSProperties => ({ marginBottom: mb });

function ContentChunk({
  title,
  accent,
  children,
}: {
  title: string;
  accent: 'sage' | 'slate';
  children: ReactNode;
}) {
  const border =
    accent === 'sage'
      ? '4px solid rgba(64, 96, 109, 0.55)'
      : '4px solid rgba(139, 115, 85, 0.45)';
  const titleColor = accent === 'sage' ? '#40606D' : '#5c4d3d';

  return (
    <div
      style={{
        borderLeft: border,
        background:
          'linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(255,252,248,0.55) 100%)',
        padding: '1.35rem 1.25rem 1.4rem 1.45rem',
        borderRadius: '0 14px 14px 0',
        boxShadow:
          '0 4px 24px rgba(107, 93, 79, 0.07), inset 0 1px 0 rgba(255,255,255,0.65)',
      }}
    >
      <h4
        style={{
          color: titleColor,
          fontSize: '1.12rem',
          fontWeight: 700,
          letterSpacing: '0.02em',
          margin: '0 0 0.9rem',
          paddingBottom: '0.5rem',
          borderBottom: `2px solid ${accent === 'sage' ? 'rgba(64, 96, 109, 0.18)' : 'rgba(139, 115, 85, 0.2)'}`,
          lineHeight: 1.35,
        }}
      >
        {title}
      </h4>
      <div style={prose}>{children}</div>
    </div>
  );
}

export default function VaccinationOfContactsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="hero">
        <h1 className="hero-title animate-fade-in-up">
          Vaccine
          <br />
          Talk
        </h1>
        <p className="hero-subtitle animate-fade-in-up animate-delay-1">
          (Egyptian Edition)
        </p>
        <div className="hero-quote animate-fade-in-up animate-delay-2">
          <p>&quot;Everything you need to know about</p>
          <p>vaccines in Egypt&quot;</p>
        </div>
      </main>

      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang hcp-content-column">
              <h2
                className="about-lang-title"
                style={{
                  textAlign: 'center',
                  fontSize: '2rem',
                  alignSelf: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                Vaccination of Contacts of Persons with Altered Immunocompetence
              </h2>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.35rem',
                  width: '100%',
                }}
              >
                <ContentChunk title="Recommended vaccines for contacts" accent="sage">
                  <p style={p()}>
                    Household contacts and other close contacts of persons with altered immunocompetence
                    should receive all age- and exposure-appropriate vaccines, with the exception of
                    smallpox vaccine. Receipt of vaccines will prevent the vaccine-preventable disease,
                    so there can be no potential transmission to the contact with altered
                    immunocompetence.
                  </p>
                </ContentChunk>

                <ContentChunk title="Live MMR, varicella, and rotavirus vaccines" accent="slate">
                  <p style={p()}>
                    The live MMR, varicella, and rotavirus vaccines should be administered to susceptible
                    household contacts and other close contacts of immunocompromised patients when
                    indicated.
                  </p>
                </ContentChunk>

                <ContentChunk title="Precautions after varicella vaccination" accent="sage">
                  <p style={p('0')}>
                    No specific precautions are needed unless the varicella vaccine recipient has a rash
                    after vaccination, in which case direct contact with susceptible household contacts
                    with altered immunocompetence should be avoided until the rash resolves.
                  </p>
                </ContentChunk>

                <ContentChunk title="Rotavirus vaccine shedding" accent="slate">
                  <p style={p('0')}>
                    All members of the household should wash their hands after changing the diaper of an
                    infant who received rotavirus vaccine. This minimizes rotavirus transmission, as
                    shedding may occur up to one month after the last dose.
                  </p>
                </ContentChunk>

                <ContentChunk title="Influenza vaccination" accent="sage">
                  <p style={p('0')}>
                    Household and other close contacts of persons with altered immunocompetence should
                    receive annual influenza vaccination.
                  </p>
                </ContentChunk>
              </div>

              <aside
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.35rem',
                  borderTop: '1px solid rgba(64, 96, 109, 0.2)',
                  direction: 'ltr',
                  textAlign: 'left',
                  width: '100%',
                }}
              >
                <p
                  style={{
                    margin: '0 0 0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#40606D',
                  }}
                >
                  Reference
                </p>
                <p style={{ margin: 0, lineHeight: 1.65, fontSize: '0.95rem', color: 'rgba(45, 42, 38, 0.88)' }}>
                  <a
                    href="https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#40606D', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    CDC: Altered immunocompetence — Immunization best practices for health care providers
                  </a>
                  <span style={{ color: 'rgba(45, 42, 38, 0.55)' }}> (cdc.gov)</span>
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
