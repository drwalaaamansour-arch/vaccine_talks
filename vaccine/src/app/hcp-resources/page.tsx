import Header from '@/components/Header';

export default function HCPResources() {
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

      {/* Welcome Healthcare Workers Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          {/* Decorative Corner Elements */}
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          {/* Content */}
          <div className="about-bilingual">
            {/* English Content */}
            <div className="about-lang">
              <h2 className="about-lang-title">
                Welcome Healthcare Heroes!
              </h2>
              
              <div className="image-wrapper" style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent' }}>
                <img 
                  src="/male%20Healthcare%20workers.jpg" 
                  alt="Healthcare Workers" 
                  className="section-image"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '16px', boxShadow: 'none', background: 'transparent', mixBlendMode: 'multiply' }}
                />
              </div>
              
              <p className="about-lang-intro">
                Thank you for your unwavering dedication to keeping our communities healthy. As frontline warriors, your commitment to patient care is truly commendable. The Power of Vaccines: A Shield Against Disease. In the ever-evolving landscape of healthcare, vaccines stand as powerful guardians, protecting both healthcare workers and the individuals under their care. As champions of public health, you play a crucial role in advocating and administering vaccines. This section includes up-to-date, evidence-based information about: Vaccination basics, Routine immunizations in Egypt, Vaccines and sera in Egypt, Special population vaccination guidelines, Downloadable inserts and schedules, Updates from MOHP and international references, Frequently asked questions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            <div className="about-lang">
              <div className="hcp-categories-grid">
                {/* Category 1 */}
                <div>
                  <img src="/back-basics-simplifying-business-procedures-600nw-2363218041.jpg.webp" alt="Vaccination Basics" />
                  <h3>Vaccination Basics</h3>
                  <p>Vaccines are one of the most effective tools in modern medicine. They have helped preventing millions of deaths and protect communities from dangerous infectious diseases. Understanding how vaccines work and why they are important can empower individuals, parents, and healthcare professionals to make informed decisions. Vaccination is not just about personal protection — it plays a key role in public health, contributing to the safety of entire populations. This section offers an easy-to-understand introduction to vaccines and answers key questions about their function, development, and use.</p>
                  <a href="/hcp-vaccination-basics">Read More</a>
                </div>

                {/* Category 2 */}
                <div>
                  <img src="/doc.jpg" alt="Documents" />
                  <h3>Documents</h3>
                  <p>This section is dedicated to essential documents, guidelines, and scientific papers that serve as trusted references for healthcare professionals working in the field of vaccination. Here, you'll find national and international guidelines, official recommendations, position papers, and practical tools that support evidence-based decision-making in daily practice. Our aim is to make reliable and updated resources easily accessible — helping you stay aligned with best practices and global standards in immunization. All documents and references in this section will be regularly reviewed and updated to reflect any new recommendations, policy changes, or global health alerts.</p>
                  <a href="/hcp-documents">Read More</a>
                </div>

                {/* Category 3 */}
                <div>
                  <img src="/vaccines.jpg" alt="Vaccines and Sera" />
                  <h3>Vaccines and Sera in Egypt</h3>
                  <p>Here is your trusted reference for all vaccines and sera available in Egypt. Here, you'll find official product inserts, essential guidelines, and key information that every healthcare professional needs to know about vaccines and the current disease situation in the country. Our goal is to make reliable, updated, and practical information easily accessible to support your daily medical practice and public health efforts.</p>
                  <a href="/hcp-vaccines-sera">Read More</a>
                </div>

                {/* Category 4 */}
                <div>
                  <img src="/special.jpg" alt="Special Populations" />
                  <h3>Special Population Guidelines</h3>
                  <p>Vaccination strategies can differ significantly for individuals with special health conditions compared to the general population. This section provides clear, evidence-based guidance on immunization for groups who require special considerations — including patients post-chemotherapy or bone marrow transplantation, pregnant women, travelers, and individuals receiving immunosuppressive therapy. All information is adapted from trusted international references, including the Centers for Disease Control and Prevention(CDC) and the Australian Immunisation Handbook, and aligned with the vaccination context in Egypt. The goal is to support healthcare professionals in making safe and effective vaccination decisions for vulnerable and high-risk groups.</p>
                  <a href="/hcp-special-populations">Read More</a>
                </div>

                {/* Category 5 */}
                <div>
                  <img src="/updates.jpg" alt="New Global Vaccine Updates" />
                  <h3>New Global Vaccine Updates</h3>
                  <p>This section will provide the latest updates on vaccination recommendations and disease situations in Egypt and worldwide. All information will be regularly reviewed and updated to reflect any new guidelines, emerging diseases, or changes in immunization schedules. Our aim is to keep healthcare professionals informed and prepared to respond effectively to evolving public health needs. We encourage you to visit this page frequently to stay up to date with the most recent developments and official recommendations.</p>
                  <a href="/hcp-vaccine-updates">Read More</a>
                </div>

                {/* Category 6 */}
                <div>
                  <img src="/question-mark.jpg" alt="FAQ" />
                  <h3>Frequently Asked Questions</h3>
                  <p>This section provides clear and practical answers to the most common questions about vaccines and vaccine-preventable diseases in Egypt. The content is adapted from the Advisory Committee on Immunization Practices (ACIP) guidelines, focusing only on information relevant to the vaccines currently available and recommended in Egypt. The FAQs are organized by disease to make it easier for healthcare professionals and the public to access accurate information quickly. We aim to support confident, evidence-based vaccination decisions and strengthen awareness of disease prevention.</p>
                  <a href="/hcp-faq">Read More</a>
                </div>
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
          <div className="footer-copyright">
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
    </div>
  );
}