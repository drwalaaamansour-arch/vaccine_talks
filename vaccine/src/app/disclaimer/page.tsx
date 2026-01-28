import Header from '@/components/Header';

export default function DisclaimerPage() {
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

      {/* Disclaimer Content */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            {/* Arabic Content */}
            <div className="about-lang" style={{alignItems: 'flex-start', direction: 'rtl', textAlign: 'right'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.2rem', alignSelf: 'center'}}>
                إخلاء المسؤولية
              </h2>

              <p className="about-lang-intro"><strong>عن الموقع:</strong><br/>هذا الموقع هو منصة توعوية تهدف إلى تقديم معلومات طبية مبسطة تتعلق بالتطعيمات والوقاية من الأمراض المعدية.</p>

              <p className="about-lang-intro"><strong>لغرض التثقيف فقط:</strong><br/>جميع المعلومات الواردة في هذا الموقع مخصصة لأغراض التثقيف والتوعية فقط، ولا تُعد بأي حال بديلًا عن الاستشارة الطبية المتخصصة أو التشخيص أو العلاج.</p>

              <p className="about-lang-intro"><strong>الاستشارة الطبية:</strong><br/>يُنصح جميع الزائرين بعدم اتخاذ أي قرارات طبية بناءً على محتوى هذا الموقع دون الرجوع إلى طبيب مختص أو مقدم رعاية صحية مؤهل.</p>

              <p className="about-lang-intro"><strong>دقة المعلومات:</strong><br/>على الرغم من الحرص على دقة المعلومات وصحتها، إلا أن الموقع والقائمين عليه لا يتحملون أي مسؤولية عن أي خطأ غير مقصود أو أي نتائج قد تترتب على استخدام هذه المعلومات.</p>

              <p className="about-lang-intro"><strong>الاستقلالية والانتماء:</strong><br/>هذا الموقع لا يتبع أي شركة خاصة أو جهة رسمية أو حكومية، بما في ذلك وزارة الصحة المصرية أو شركة المصل واللقاح (فاكسيرا)، ولا توجد أي علاقة مباشرة أو غير مباشرة بين الموقع وهذه الجهات ما لم يُذكر خلاف ذلك بشكل صريح.</p>

              <p className="about-lang-intro"><strong>الإعلانات والرعاية:</strong><br/>الموقع لا يروج لأي منتج طبي أو لقاح لأغراض تجارية، ولا يتلقى أي مقابل مادي من شركات اللقاحات مقابل النشر، إلا في حال الإعلان عن ذلك بشكل واضح ومكتوب.</p>

              <p className="about-lang-intro"><strong>للاستخدام العلمي فقط:</strong><br/>النشرات والمراجع المنشورة على هذا الموقع مخصصة للاستخدام العلمي والتعليمي فقط، ولا يجوز استخدامها لأي أغراض تجارية.</p>

              <p className="about-lang-intro" style={{fontWeight: 700}}>✅ الإقرار<br/>باستخدامك لهذا الموقع، فإنك تُقر بأنك قد قرأت هذا الإخلاء وتوافق على الالتزام بما ورد فيه.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Content - English */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="about-bilingual">
            {/* English Content */}
            <div className="about-lang" style={{alignItems: 'flex-start'}}>
              <h2 className="about-lang-title" style={{textAlign: 'center', fontSize: '2.2rem', alignSelf: 'center'}}>
                Disclaimer
              </h2>

              <p className="about-lang-intro"><strong>About the Website:</strong><br/>This website is an educational platform that provides simplified medical information related to vaccines and the prevention of infectious diseases.</p>

              <p className="about-lang-intro"><strong>Educational Purpose Only:</strong><br/>All information presented on this website is intended for educational and awareness purposes only. It should not be considered a substitute for professional medical advice, diagnosis, or treatment.</p>

              <p className="about-lang-intro"><strong>Medical Advice:</strong><br/>Visitors are strongly advised not to make any medical decisions based on the content of this website without consulting a qualified healthcare professional.</p>

              <p className="about-lang-intro"><strong>Accuracy of Information:</strong><br/>While every effort has been made to ensure the accuracy and reliability of the information provided, the website and its administrators assume no responsibility for any unintentional errors or any consequences arising from the use of this information.</p>

              <p className="about-lang-intro"><strong>Independence and Affiliation:</strong><br/>This website is not affiliated with any official or governmental entity, including the Egyptian Ministry of Health or VACSERA. There is no direct or indirect relationship with these institutions unless explicitly stated otherwise.</p>

              <p className="about-lang-intro"><strong>Sponsorship and Advertising:</strong><br/>The website does not promote any medical product or vaccine for commercial purposes, and does not receive any financial compensation from vaccine companies for content publication — unless such sponsorship is clearly and explicitly declared.</p>

              <p className="about-lang-intro"><strong>Scientific Use Only:</strong><br/>Vaccine leaflets and related materials published on this website are intended for scientific and educational use only and must not be used for any commercial purposes.</p>

              <p className="about-lang-intro" style={{fontWeight: 700}}>✅ Agreement<br/>By using this website, you acknowledge that you have read this disclaimer and agree to comply with its terms.</p>
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
    </div>
  );
}



