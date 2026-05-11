import Header from '@/components/Header';

export default function SpecialCasesVaccinesPage() {
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
          <p>"Everything you need to know about</p>
          <p>vaccines in Egypt"</p>
        </div>
      </main>

      <section className="about-section">
        <div className="about-elegant-card">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="buttons-container" style={{direction: 'rtl', textAlign: 'right'}}>
            <h2 className="buttons-title" style={{direction: 'rtl'}}>
              تطعيمات الحالات الخاصة
            </h2>
            <h2 className="buttons-title english" style={{direction: 'ltr', textAlign: 'center'}}>
              Special Cases Vaccinations
            </h2>
            <div className="about-lang-intro" style={{direction: 'rtl', textAlign: 'right', maxWidth: '900px', margin: '0 auto 1.5rem auto', lineHeight: 1.9}}>
              <p style={{marginBottom: '0.9rem'}}>
                التطعيمات مش دايمًا بتكون حسب الجداول المعروفة أو الروتينية.
              </p>
              <p style={{marginBottom: '0.9rem'}}>
                في بعض الحالات الخاصة، ممكن يحصل تغيير في مواعيد الجرعات أو عددها، وأحيانًا كمان بيكون فيه توصيات بتطعيمات معيّنة بسبب مرض، عملية، مرض مناعي، أو حتى علاج جديد.
              </p>
              <p style={{marginBottom: '0.6rem'}}>
                علشان كده، من حق كل أسرة تعرف:
              </p>
              <ul style={{margin: '0 0 0.9rem 0', paddingInlineStart: '1.25rem'}}>
                <li>إيه التطعيمات المطلوبة في الحالات دي</li>
                <li>إمتى تتاخد</li>
                <li>وليه مهمة</li>
                <li>وإيه الهدف منها</li>
              </ul>
              <p>
                في القسم ده من Vaccine Talk هنشرح تطعيمات الحالات الخاصة بطريقة بسيطة وواضحة بالعامية المصرية، علشان نساعد كل أب وأم أو أي أسرة تبقى فاهمة، مطمنة، وقادرة تاخد القرار الصح لحماية حبايبها.
              </p>
            </div>
            <div className="about-lang-intro" style={{direction: 'ltr', textAlign: 'left', maxWidth: '900px', margin: '0 auto 1.8rem auto', lineHeight: 1.9}}>
              <p style={{marginBottom: '0.9rem'}}>
                Vaccination is not always based on routine schedules.
              </p>
              <p style={{marginBottom: '0.9rem'}}>
                In some special situations, the timing or number of doses may change. Sometimes, specific vaccines are recommended because of a disease, a surgery, an immune condition, or even a new treatment.
              </p>
              <p style={{marginBottom: '0.6rem'}}>
                That's why every family has the right to know:
              </p>
              <ul style={{margin: '0 0 0.9rem 0', paddingInlineStart: '1.25rem'}}>
                <li>Which vaccines are needed in these situations</li>
                <li>When they should be given</li>
                <li>Why they are important</li>
                <li>What the goal of each vaccine is</li>
              </ul>
              <p>
                In this Vaccine Talk section, we explain special-case vaccinations in a simple and clear way, so every parent and every family can feel informed, reassured, and able to make the right decision to protect their loved ones.
              </p>
            </div>

            <div className="buttons-grid">
              <a href="/non-hcp/special-cases-vaccines/preterm-infants" className="section-button">
                <span className="button-emoji">👶</span>
                <span className="button-text">تطعيمات الأطفال المبتسرين</span>
                <span className="button-text-en">Preterm Infant Vaccinations</span>
              </a>

              <a href="/non-hcp/special-cases-vaccines/pregnancy-and-breastfeeding" className="section-button">
                <span className="button-emoji">🤰</span>
                <span className="button-text">تطعيمات الحوامل والمرضعات</span>
                <span className="button-text-en">Vaccinations for Pregnant and Breastfeeding Women</span>
              </a>

              <a href="/non-hcp/special-cases-vaccines/post-cochlear-implant" className="section-button">
                <span className="button-emoji">🦻</span>
                <span className="button-text">تطعيمات ما بعد عمليات زرع القوقعة</span>
                <span className="button-text-en">Post-Cochlear Implant Vaccinations</span>
              </a>

              <a href="/non-hcp/special-cases-vaccines/splenectomy" className="section-button">
                <span className="button-emoji">🩺</span>
                <span className="button-text">تطعيمات استئصال الطحال</span>
                <span className="button-text-en">Vaccinations After Splenectomy</span>
              </a>

              <a href="/non-hcp/special-cases-vaccines/during-and-after-chemotherapy" className="section-button">
                <span className="button-emoji">💉</span>
                <span className="button-text">تطعيمات اثناء وبعد الكيماوي</span>
                <span className="button-text-en">Vaccinations During and After Chemotherapy</span>
              </a>

              <a href="/non-hcp/special-cases-vaccines/post-bone-marrow-transplant" className="section-button">
                <span className="button-emoji">🧬</span>
                <span className="button-text">تطعيمات بعد عمليات زرع النخاع</span>
                <span className="button-text-en">Vaccinations After Bone Marrow Transplant</span>
              </a>

              <a href="/non-hcp/special-cases-vaccines/immune-disease-patients" className="section-button">
                <span className="button-emoji">🛡️</span>
                <span className="button-text">التطعيمات لمرضى الأمراض المناعية</span>
                <span className="button-text-en">Vaccinations for Immune Disease Patients</span>
              </a>

              <a href="/non-hcp/special-cases-vaccines/immunosuppressive-medications" className="section-button">
                <span className="button-emoji">💊</span>
                <span className="button-text">التطعيمات مع الادوية المثبطة للمناعة</span>
                <span className="button-text-en">Vaccinations with Immunosuppressive Medications</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
