import Header from '@/components/Header';

export default function FAQScheduling() {
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
      
      {/* Simple centered title */}
      <section style={{padding:'0.5rem 1rem 0'}}>
        <h2 className="about-lang-title" style={{textAlign:'center', fontSize:'2rem', margin:'0'}}>FAQ – Scheduling</h2>
      </section>

      {/* Scheduling FAQ content */}
      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>
          <div className="about-bilingual">
            <div className="about-lang" style={{alignItems:'flex-start'}}>
              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Why are vaccines generally not given to infants younger than 6 weeks of age in the U.S.?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Mainly because little safety or efficacy data exist on doses given before 6 weeks of age, and the vaccines aren't licensed for this use. The data that exist suggest that the response to doses given before 6 weeks is poor and, in the case of Haemophilus influenzae type b (Hib) vaccine, the response could be detrimental to the infant by possibly reducing the immune response to subsequent doses of Hib conjugate vaccine. Hepatitis B vaccine is an exception because infants respond adequately to this vaccine as early as the day of birth and receipt of this vaccine at birth is necessary to protect infants born to HBsAg-positive mothers.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Is it necessary to start a vaccine series over if a patient doesn't come back for a dose at the recommended time, even if there's been a year or more delay?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>For routinely administered vaccines, there is no vaccine series that needs to be restarted because of an interval that is longer than recommended. In certain circumstances, oral typhoid vaccine (which may be given for international travel) needs to be restarted if the vaccine series isn't completed within the recommended time frame.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>What is meant by "minimum intervals" between vaccine doses?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Vaccination schedules are generally determined by clinical trials, usually prior to licensure of the vaccine. The spacing of doses in the clinical trial usually becomes the recommended schedule. A "minimum interval" is shorter than the recommended interval between doses, and is the shortest time between two doses of a vaccine series in which an adequate response to the second dose can be expected. The concern is that a dose given too soon after the previous dose may reduce the response to that dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>How can we quickly determine how to "catch up" children who have fallen behind on their shots?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>As a general rule, infants or children who are more than 1 month or 1 dose behind schedule should be on an accelerated schedule, which means the intervals between doses should be reduced to the minimum allowable.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>When a 3-month-old infant presents having had no prior immunizations, would you start the accelerated schedule?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The accelerated schedule should be used when the child is more than a month behind schedule, until you get them caught up. An accelerated schedule is acceptable as long as minimum ages and minimum intervals are observed for each dose. Once you have the child back on schedule, use the recommended ages and intervals on the childhood schedule. In this case you can give the child the first set of recommended vaccines at age 3 months and then bring him back at age 4 months and give the second set of vaccinations. At this point the child will be caught up and can return to the usual schedule. Be sure to educate the parents and talk to them about the importance of bringing the child back on time.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If a child falls behind on immunizations, is it recommended to use only minimum intervals to get the child caught up? Or should we use a minimum interval for the same vaccine only once?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If a child is behind on immunizations, the Advisory Committee on Immunization Practices (ACIP) recommends using the minimum intervals between each dose until the child is caught up. The minimum interval for a vaccine can be used as many times as necessary, until the child is back on schedule.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If two different live virus vaccines are inadvertently given less than 4 weeks apart, what should be done?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Two or more injectable or nasally administered live vaccines not administered on the same day should be separated by at least 4 weeks to minimize the potential risk for interference. If two such vaccines are separated by less than 4 weeks, the second vaccine administered should not be counted and the dose should be repeated at least 4 weeks later. In cases where the vaccine doses given less than 28 days apart are two doses of the same live vaccine in a series (e.g., 2 doses of MMR vaccine), not different vaccines, you do not need to repeat the second dose if it was inadvertently administered within the 4-day "grace period" before day 28. If given more than 4 days earlier than day 28, the second dose should be repeated after the recommended minimum interval from the invalid dose.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>We gave a dose of vaccine too soon after the previous dose. When can we give another (valid) dose?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If vaccines are given too close together, it can result in a less than optimal immune response. However, in most instances, a difference of a few days is unlikely to have a negative effect on immune response. With the exception of rabies vaccine, ACIP allows a grace period of 4 days (i.e., vaccine doses administered up to 4 days before the recommended minimum interval or age can be counted as valid). However, if a dose was administered 5 or more days earlier than the recommended minimum interval between doses, it is not valid and must be repeated. The repeat dose should be spaced after the invalid dose by the recommended minimum interval. Note that for hepatitis A vaccination, if the second dose is administered too early and must be repeated, the recommended interval between the invalid dose and the repeat dose is 6 months; however, if the repeat dose is administered earlier than 6 months no further doses are recommended as long as the interval between the first and final dose is at least 6 months.</p>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>If the first dose in a series is given 5 days or more before the recommended minimum age, the dose should be repeated on or after the date when the child reaches at least the minimum age. If the vaccine is a live vaccine, ensuring that a minimum interval of 28 days has elapsed from the invalid dose is recommended. Avoid such errors by knowing the minimum intervals and ages for routinely given vaccines.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>Two live virus vaccines can be given on the same day. How do you define "day"?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>The "same day" generally means at the same visit. This interval has not been precisely defined and probably will never be since it would be extremely difficult to study in order to develop an evidence-based recommendation. Immunization programs (and their computer systems) likely define this differently. It seems reasonable that if two vaccines were given on the same date then they would both be valid.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>For the purpose of vaccine spacing, what constitutes a month: 28 days (4 weeks), 30 days, or 31 days?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>For intervals of 3 months or less, you should use 28 days (4 weeks) as a "month." For intervals of 4 months or longer, you should consider a month a "calendar month": the interval from one calendar date to the next a month later.</p>

              <h3 style={{textAlign:'left', fontSize:'1.15rem', fontWeight:700, color:'#40606D', direction: 'ltr'}}>If I give a pneumococcal polysaccharide vaccine to my patient now, how long must I wait before giving the influenza or Td vaccine?</h3>
              <p className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left'}}>Influenza vaccine and Td (or Tdap) may be given at the same time or at any time before or after a dose of pneumococcal polysaccharide vaccine. The only time you have to wait is when two LIVE vaccines are not given at the same visit; then you need to wait at least 4 weeks to give the second live vaccine.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <p className="footer-text">I'm always looking for new and exciting opportunities. Let's connect.</p>
              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=100064747760120" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://www.instagram.com/talkvaccine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                <a href="https://www.youtube.com/@VaccineTalk" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
              </div>
            </div>
            <div className="footer-section"><a href="/disclaimer" className="disclaimer-btn" style={{textDecoration: "none", display: "inline-block"}}>Disclaimer</a></div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright"><p className="copyright-text">© 2025 Vaccine Talk – All rights reserved.</p><p className="copyright-text">Content is original and may not be copied without permission.</p></div>
          <div className="footer-policy"><a href="/copy" className="policy-link">Copyright & Content Policy</a><span className="separator">|</span><a href="/copy" className="policy-link arabic">حقوق النشر والاستخدام</a></div>
        </div>
      </footer>
    </div>
  );
}


