'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';

export default function HCPShingles() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
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
          <p>"Everything you need to know about</p>
          <p>vaccines in Egypt"</p>
        </div>
      </main>

      {/* Content Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'flex-start'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Shingles (HCP)
              </h2>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem', width: '100%'}}>
                <div className="image-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'transparent' }}>
                  <img
                    src="/hzv.jpeg"
                    alt="HZV"
                    className="section-image"
                    onClick={() => setSelectedImage("/hzv.jpeg")}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.cursor = 'pointer';
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.transition = 'transform 0.2s ease';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent', cursor: 'pointer' }}
                  />
                </div>
                <div className="image-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'transparent' }}>
                  <img
                    src="/hzv1.jpeg"
                    alt="HZV1"
                    className="section-image"
                    onClick={() => setSelectedImage("/hzv1.jpeg")}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.cursor = 'pointer';
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.transition = 'transform 0.2s ease';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent', cursor: 'pointer' }}
                  />
                </div>
              </div>
              
              <p className="about-lang-intro">
                Herpes zoster (shingles) is caused by reactivation of <strong>varicella‑zoster virus (VZV)</strong>, the virus that causes chickenpox.<br />
                After primary infection, VZV remains latent in dorsal root/cranial nerve ganglia and can later reactivate—more likely with immune senescence or immunosuppression—producing a painful dermatomal rash.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                The rash is typically a unilateral stripe of vesicles in one or more dermatomes; facial/ophthalmic involvement requires urgent evaluation.<br />
                Shingles itself is not transmitted person‑to‑person; however, fluid from shingles vesicles can transmit VZV to a susceptible person (causing chickenpox, not shingles). Vaccination is highly effective at preventing shingles and its complications. Early antivirals reduce severity and duration.
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Risk Factors</h3>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li>History of chickenpox (anyone previously infected is at risk)</li>
                <li>Age &gt;50 years</li>
                <li>Immunocompromise (HIV/AIDS, cancer, transplant, steroids/chemotherapy)</li>
                <li>Stress and chronic conditions (e.g., diabetes, CKD, chronic lung disease)</li>
              </ul>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Symptoms</h3>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li>Pain, itching, tingling or numbness days–weeks before rash</li>
                <li>Painful unilateral vesicular rash in a dermatomal band; vesicles crust in a few days</li>
                <li>Burning/throbbing/stabbing pain; ± fever, headache, chills, fatigue</li>
                <li>Urgent care if rash near the eye due to vision risk</li>
              </ul>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Transmission</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                Shingles cannot be directly "caught." VZV from vesicle fluid can infect a non‑immune person and cause chickenpox. Risk falls once lesions crust.<br />
                Keep rash covered; avoid touching; frequent handwashing<br />
                Avoid contact with susceptible pregnant women, newborns, and immunocompromised persons
              </p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Diagnosis</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Clinical—unilateral dermatomal vesicular eruption. If uncertain/complicated, test vesicle material for VZV (PCR).</p>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Treatment</h3>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li><strong>Antivirals</strong> (acyclovir, valacyclovir, famciclovir) ideally within 72 hours of rash onset</li>
                <li>Pain control: NSAIDs/acetaminophen; consider neuropathic agents or stronger analgesics as needed</li>
                <li>Skin care: calamine, cool compresses; keep lesions clean/dry to prevent bacterial superinfection</li>
              </ul>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Complications</h3>
              <ul className="about-lang-intro" style={{paddingLeft:'1.2rem', direction: 'ltr', textAlign: 'left'}}>
                <li><strong>Postherpetic neuralgia (PHN)</strong>: persistent neuropathic pain months–years</li>
                <li>Bacterial superinfection, scarring; ophthalmic zoster → vision loss</li>
                <li>Rare: pneumonia, encephalitis, stroke—especially in immunocompromised</li>
              </ul>

              <h3 style={{textAlign:'left', fontSize:'1.3rem', fontWeight:600, color:'#40606D', marginTop:'1.5rem', marginBottom:'0.5rem', direction: 'ltr'}}>Prevention</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                WHO recommends recombinant zoster vaccine in a two‑dose schedule (≥2‑month interval) for adults <strong>≥50 years</strong> and those with chronic conditions in settings where herpes zoster is a significant public‑health issue. The vaccine reduces risk of shingles and PHN and is indicated even after a prior episode.
              </p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>
                In Egypt, the Egyptian Drug Authority approved <strong>Shingrix</strong> on <strong>11 Sep 2023</strong>; public launch occurred <strong>26 Apr 2024</strong> (GSK event). Varicella vaccination in childhood lowers lifetime shingles risk versus natural infection.
              </p>

              <p className="about-lang-intro" style={{fontSize:'0.9rem', fontStyle:'italic', marginTop:'1rem'}}>
                References: 
                <a href="https://www.cdc.gov/shingles/index.html" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>CDC – Shingles</a> | 
                <a href="https://www.who.int/news-room/fact-sheets/detail/shingles-(herpes-zoster)" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>WHO – Herpes Zoster</a> | 
                <a href="https://edaegypt.gov.eg/media/by4lmx15/par-bio-shingrix.pdf" target="_blank" rel="noopener noreferrer" style={{color:'#40606D', textDecoration:'underline'}}>EDA – Shingrix PI (2023)</a>
              </p>
              <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '1.5rem'}}>
                <a
                  href="/faq/zoster"
                  style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '720px',
                    textAlign: 'center',
                    padding: '1rem 1.5rem',
                    background: '#40606D',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                  }}
                >
                  For FAQs press here
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* PDF: Shingrix */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.5rem', alignSelf: 'center'}}>
                Shingrix
              </h2>
              <div style={{width: '100%', marginTop: '2rem'}}>
                <iframe
                  src="/shingrix.pdf"
                  width="100%"
                  height="800px"
                  style={{border: 'none', borderRadius: '8px'}}
                  title="Shingrix PDF"
                />
                <div style={{marginTop: '1rem', textAlign: 'center'}}>
                  <a href="/shingrix.pdf" download style={{display: 'inline-block', padding: '0.75rem 2rem', background: '#40606D', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', transition: 'all 0.3s ease'}}>Download PDF / تحميل PDF</a>
                </div>
                <p style={{marginTop: '1rem', textAlign: 'center', direction: 'rtl', color: '#40606D', lineHeight: 1.6}}>
                  المصدر: الهيئة المصرية للدواء / وزارة الصحة<br />
                  لا توجد علاقة مباشرة بين الموقع وهذه الشركات، والمحتوى لأغراض التوعية فقط. ولا يجوز استخدامها في أي أغراض تجارية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <p className="footer-text">
                I'm always looking for new and exciting opportunities. Let's connect.
              </p>
              
              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=100064747760120" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/talkvaccine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@VaccineTalk" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <a href="/disclaimer" className="disclaimer-btn" style={{textDecoration: "none", display: "inline-block"}}>Disclaimer</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footeropyright">
            <p className="copyright-text">
              © 2025 Vaccine Talk – All rights reserved.
            </p>
            <p className="copyright-text">
              Content is original and may not be copied without permission.
            </p>
          </div>
          <div className="footer-policy">
            <a href="/copy" className="policy-link">Copyright & Content Policy</a>
            <span className="separator">|</span>
            <a href="/copy" className="policy-link arabic">حقوق النشر والاستخدام</a>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: 'pointer'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10000,
              fontWeight: 'bold',
              color: '#333'
            }}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Enlarged"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}



