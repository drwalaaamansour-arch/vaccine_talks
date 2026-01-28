import Header from '@/components/Header';

export default function FAQDTContaining() {
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
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems:'flex-start'}}>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Content coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


