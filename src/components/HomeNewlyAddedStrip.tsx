'use client';

import { useCallback, useRef, type ComponentType } from 'react';

/** Newest-first; only the first `HOME_NEWLY_ADDED_LIMIT` appear on the homepage. */
const HOME_NEWLY_ADDED_LIMIT = 10;

type NewlyAddedCardComponent = ComponentType<{ duplicate?: boolean }>;

const NEWLY_VIEWPORT_ID = 'home-newly-marquee-viewport';

function loopWidth(el: HTMLDivElement): number {
  return el.scrollWidth / 2;
}

function normalizeScroll(el: HTMLDivElement) {
  const W = loopWidth(el);
  if (W <= 0) return;
  while (el.scrollLeft >= W) {
    el.scrollLeft -= W;
  }
  while (el.scrollLeft < 0) {
    el.scrollLeft += W;
  }
}

function SpotlightLinkCard({
  href,
  title,
  body,
  showReadMore,
  duplicate,
}: {
  href: string;
  title: string;
  body: string;
  showReadMore?: boolean;
  duplicate?: boolean;
}) {
  return (
    <a
      href={href}
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <h3 className="home-newly-card-title">{title}</h3>
      <p className="home-newly-card-body">{body}</p>
      {showReadMore ? (
        <span className="home-newly-card-more">Read more →</span>
      ) : null}
    </a>
  );
}

function RsvSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <div
      className="newly-added-card home-spotlight-card home-spotlight-card--static home-newly-strip-card home-newly-strip-card--wide"
      aria-hidden={duplicate ? true : undefined}
    >
      <div className="home-newly-rsv-inner">
        <div>
          <a
            href="/rsv"
            className="home-newly-rsv-block-link"
            tabIndex={duplicate ? -1 : undefined}
            aria-hidden={duplicate ? true : undefined}
          >
            <h3 className="home-newly-card-title home-newly-card-title--rtl">
              RSV (الفيروس التنفسي المخلوي)
            </h3>
            <p className="home-newly-card-body home-newly-card-body--rtl">
              معلومات جديدة عن تطعيم RSV لحماية الرضع من الإصابة بالفيروس المخلوي التنفسي.
            </p>
          </a>
        </div>
        <div className="home-newly-rsv-divider">
          <a
            href="/hcp/rsv"
            className="home-newly-rsv-block-link"
            tabIndex={duplicate ? -1 : undefined}
            aria-hidden={duplicate ? true : undefined}
          >
            <h3 className="home-newly-card-title">RSV (Respiratory Syncytial Virus)</h3>
            <p className="home-newly-card-body">
              New information about RSV vaccination to protect infants from respiratory syncytial
              virus infection.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

function PretermNonHcpSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/non-hcp/special-cases-vaccines/preterm-infants"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
      lang="ar"
    >
      <h3 className="home-newly-card-title home-newly-card-title--rtl">
        تطعيم الأطفال المبتسرين — لغير العاملين بالمجال الطبي
      </h3>
      <p className="home-newly-card-body home-newly-card-body--rtl">
        معلومات موجّهة للعائلات عن مواعيد وجرعات التطعيم للأطفال المبتسرين في مصر، بأسلوب بسيط وواضح.
      </p>
      <span className="home-newly-card-more" dir="rtl">
        اقرأ المزيد ←
      </span>
    </a>
  );
}

function PregnancyNonHcpSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/non-hcp/special-cases-vaccines/pregnancy-and-breastfeeding"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
      lang="ar"
    >
      <h3 className="home-newly-card-title home-newly-card-title--rtl">
        التطعيمات أثناء الحمل — لغير العاملين بالمجال الطبي
      </h3>
      <p className="home-newly-card-body home-newly-card-body--rtl">
        حماية ليكي ولطفلك: شرح بسيط عن تطعيمات الإنفلونزا وTdap وRSV أثناء الحمل، والتطعيمات الحية، بالعربي
        والإنجليزي — مع PDF للتحميل.
      </p>
      <span className="home-newly-card-more" dir="rtl">
        اقرأ المزيد ←
      </span>
    </a>
  );
}

function CdcArabicPdfsSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/vaccinations"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
      lang="ar"
    >
      <h3 className="home-newly-card-title home-newly-card-title--rtl">
        ملفات CDC للتطعيمات بالعربي — جديد
      </h3>
      <p className="home-newly-card-body home-newly-card-body--rtl">
        أضفنا أوراق معلومات CDC العربية على صفحات التطعيمات لغير العاملين بالمجال الطبي (إنفلونزا، المكورات الرئوية،
        الحزام الناري، السعار، وغيرها) — للعرض والتحميل في أسفل كل صفحة.
      </p>
      <span className="home-newly-card-more" dir="rtl">
        تصفّح التطعيمات ←
      </span>
    </a>
  );
}

function AspleniaNonHcpSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/non-hcp/special-cases-vaccines/splenectomy"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
      lang="ar"
    >
      <h3 className="home-newly-card-title home-newly-card-title--rtl">
        غياب أو ضعف الطحال — لغير العاملين بالمجال الطبي
      </h3>
      <p className="home-newly-card-body home-newly-card-body--rtl">
        صفحة جديدة بالعربي عن تطعيمات استئصال الطحال وضعف وظيفته: أهم اللقاحات، التوقيت قبل وبعد العملية، وروابط
        للمكورات الرئوية والهيموفيلس والالتهاب السحائي والإنفلونزا — مع PDF.
      </p>
      <span className="home-newly-card-more" dir="rtl">
        اقرأ المزيد ←
      </span>
    </a>
  );
}

function CochlearNonHcpSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/non-hcp/special-cases-vaccines/post-cochlear-implant"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
      lang="ar"
    >
      <h3 className="home-newly-card-title home-newly-card-title--rtl">
        تطعيمات زراعة القوقعة — لغير العاملين بالمجال الطبي
      </h3>
      <p className="home-newly-card-body home-newly-card-body--rtl">
        شرح بسيط بالعامية عن ليه التطعيمات مهمة قبل وبعد زراعة القوقعة، وأهم اللقاحات: المكورات الرئوية والهيموفيلس
        والالتهاب السحائي.
      </p>
      <span className="home-newly-card-more" dir="rtl">
        اقرأ المزيد ←
      </span>
    </a>
  );
}

function ImmunosuppressiveNonHcpSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/non-hcp/special-cases-vaccines/immunosuppressive-medications"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
      lang="ar"
    >
      <h3 className="home-newly-card-title home-newly-card-title--rtl">
        التطعيمات مع الأدوية المثبطة للمناعة — لغير العاملين بالمجال الطبي
      </h3>
      <p className="home-newly-card-body home-newly-card-body--rtl">
        صفحة جديدة بالعربي والإنجليزي: ينفع أتطعم وأنا باخد كورتيزون أو أدوية المناعة؟ توقيت التطعيم، الفرق بين
        التطعيمات الحية وغير الحية، ومتى تسأل الطبيب — بأسلوب بسيط وواضح.
      </p>
      <span className="home-newly-card-more" dir="rtl">
        اقرأ المزيد ←
      </span>
    </a>
  );
}

function SolidOrganTransplantSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/hcp-special-populations/solid-organ-transplant-vaccination"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <h3 className="home-newly-card-title">Solid organ transplant vaccination</h3>
      <p className="home-newly-card-body">
        New HCP guide on vaccination before and after solid organ transplantation: pre- and post-transplant timing,
        inactivated vs live vaccines, universal schedules for influenza, pneumococcal, HBV, COVID-19, shingles, and HPV,
        organ-specific priorities, cocooning strategy, references, and downloadable PDFs.
      </p>
      <span className="home-newly-card-more">Read more →</span>
    </a>
  );
}

function CancerVaccinationSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/hcp-special-populations/vaccination-in-patients-with-cancer"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <h3 className="home-newly-card-title">Vaccination in Patients with Cancer</h3>
      <p className="home-newly-card-body">
        New HCP guidance on vaccinating patients with cancer: timing before and during chemotherapy, influenza,
        pneumococcal, hepatitis B, live vaccines, post-therapy boosters, Australian handbook PDFs, and pediatric
        oncology expert consensus for Egypt.
      </p>
      <span className="home-newly-card-more">Read more →</span>
    </a>
  );
}

function HsctSpecialPopulationsSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/hcp-special-populations/haematopoietic-stem-cell-transplant-recipients"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <h3 className="home-newly-card-title">Haematopoietic stem cell transplant recipients</h3>
      <p className="home-newly-card-body">
        New HCP section on revaccination after HSCT: pneumococcal, Hib, DTaP/Tdap, influenza, live vaccines, serology,
        travel vaccines, references, PDFs, infographic—and expert consensus on re-immunization for pediatric oncology
        patients in Egypt.
      </p>
      <span className="home-newly-card-more">Read more →</span>
    </a>
  );
}

function InternationalTravellersSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/hcp-special-populations/international-travellers"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <h3 className="home-newly-card-title">
        ✈️ Travel vaccinations for Egyptians travelling abroad
      </h3>
      <p className="home-newly-card-body">
        New bilingual HCP guide on travel vaccines for Egyptians going abroad: prepare 4–6 weeks before
        departure, destination-specific vaccines, routine catch-up, and CDC Travelers&apos; Health
        destination lookup by country.
      </p>
      <span className="home-newly-card-more">Read more →</span>
    </a>
  );
}

function InternationalTravellersArSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/hcp-special-populations/international-travellers"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
      lang="ar"
    >
      <h3 className="home-newly-card-title home-newly-card-title--rtl">
        ✈️ تطعيمات السفر للمصريين المسافرين إلى الخارج
      </h3>
      <p className="home-newly-card-body home-newly-card-body--rtl">
        دليل جديد للعاملين بالمجال الطبي بالعربي والإنجليزي: التحضير قبل السفر من مصر، اللقاحات حسب
        الوجهة، وروابط أداة CDC لمتطلبات اللقاحات حسب الدولة.
      </p>
      <span className="home-newly-card-more" dir="rtl">
        اقرأ المزيد ←
      </span>
    </a>
  );
}

function Pcv21CapvaxiveSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/hcp-vaccine-updates#pcv21-mflusiva-jun-2026"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <h3 className="home-newly-card-title">
        FDA expands PCV21 (Capvaxive) to children at increased risk
      </h3>
      <p className="home-newly-card-body">
        June 17, 2026: FDA expanded Capvaxive for children and adolescents age 2–17 with chronic conditions at
        increased IPD risk, after a primary pediatric PCV series. Includes FDA approval letter and package insert
        PDFs on Global Vaccine Updates.
      </p>
      <span className="home-newly-card-more">Read more →</span>
    </a>
  );
}

function AdultRespiratoryEgyptPdfSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/doc/pneumococcal"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <h3 className="home-newly-card-title">
        Adult vaccination against respiratory infections in Egypt: a review of expert opinions
      </h3>
      <p className="home-newly-card-body">
        New PDF on the Pneumococcal documents page — expert opinions on adult vaccination against respiratory
        infections in Egypt.
      </p>
      <span className="home-newly-card-more">Read more →</span>
    </a>
  );
}

function AspleniaVaccinationPdfsSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <h3 className="home-newly-card-title">Asplenia — vaccination checklist &amp; guidelines (PDF)</h3>
      <p className="home-newly-card-body">
        New downloadable vaccination checklist and asplenia vaccination guidelines on the HCP Anatomic and Functional
        Asplenia page — preview in the browser or save the PDFs for clinic use.
      </p>
      <span className="home-newly-card-more">Read more →</span>
    </a>
  );
}

function ChemotherapyVaccinationPdfsSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/hcp-special-populations/vaccination-in-patients-with-cancer"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <h3 className="home-newly-card-title">Chemotherapy — vaccination checklist &amp; guidelines (PDF)</h3>
      <p className="home-newly-card-body">
        New chemotherapy vaccination checklist and guidelines PDFs on Vaccination in Patients with Cancer — at the top of
        the handbook PDF section, with CCLG and Australian Immunisation Handbook tables below.
      </p>
      <span className="home-newly-card-more">Read more →</span>
    </a>
  );
}

function HsctVaccinationPdfsSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/hcp-special-populations/haematopoietic-stem-cell-transplant-recipients"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <h3 className="home-newly-card-title">HSCT — vaccination checklist &amp; guidelines (PDF)</h3>
      <p className="home-newly-card-body">
        New HSCT vaccination checklist and guidelines PDFs for haematopoietic stem cell transplant recipients — preview
        and download in the resources section, with existing CCLG and handbook PDFs.
      </p>
      <span className="home-newly-card-more">Read more →</span>
    </a>
  );
}

function RecombinantShinglesNatureMedSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/hcp-vaccine-updates#shingles-cv-nature-med-2026"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <h3 className="home-newly-card-title">
        Recombinant Shingles Vaccination and the Risk of Cardiovascular Events
      </h3>
      <p className="home-newly-card-body">
        In its August 26 issue, <em>Nature Medicine</em> published this study — summary and full PDF on
        Global Vaccine Updates.
      </p>
      <span className="home-newly-card-more">Read more →</span>
    </a>
  );
}

function RecombinantShinglesDementiaSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/doc/shingles#recombinant-shingles-dementia"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <h3 className="home-newly-card-title">
        The recombinant shingles vaccine is associated with lower risk of dementia
      </h3>
      <p className="home-newly-card-body">
        New PDF on the Shingles (HZ) documents page — evidence on recombinant shingles vaccination and
        dementia risk.
      </p>
      <span className="home-newly-card-more">Read more →</span>
    </a>
  );
}

function RecombinantShinglesCardiovascularSpotlightCard({ duplicate }: { duplicate?: boolean }) {
  return (
    <a
      href="/doc/shingles#recombinant-shingles-cardiovascular"
      className="newly-added-card home-spotlight-card home-newly-strip-card"
      aria-hidden={duplicate ? true : undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <h3 className="home-newly-card-title">
        Recombinant shingles vaccination and the risk of cardiovascular events
      </h3>
      <p className="home-newly-card-body">
        New PDF on the Shingles (HZ) documents page — evidence on recombinant shingles vaccination and
        cardiovascular outcomes.
      </p>
      <span className="home-newly-card-more">Read more →</span>
    </a>
  );
}

const NEWLY_ADDED_SPOTLIGHT_ORDER: NewlyAddedCardComponent[] = [
  AspleniaVaccinationPdfsSpotlightCard,
  ChemotherapyVaccinationPdfsSpotlightCard,
  HsctVaccinationPdfsSpotlightCard,
  RecombinantShinglesNatureMedSpotlightCard,
  RecombinantShinglesDementiaSpotlightCard,
  RecombinantShinglesCardiovascularSpotlightCard,
  AdultRespiratoryEgyptPdfSpotlightCard,
  InternationalTravellersSpotlightCard,
  InternationalTravellersArSpotlightCard,
  Pcv21CapvaxiveSpotlightCard,
  SolidOrganTransplantSpotlightCard,
  ImmunosuppressiveNonHcpSpotlightCard,
  CancerVaccinationSpotlightCard,
  HsctSpecialPopulationsSpotlightCard,
  AspleniaNonHcpSpotlightCard,
  CdcArabicPdfsSpotlightCard,
  function PregnancyHcpCard({ duplicate }) {
    return (
      <SpotlightLinkCard
        duplicate={duplicate}
        href="/hcp-special-populations/pregnancy-breastfeeding"
        title="Pregnancy"
        body="Guidance on vaccines before, during, and after pregnancy—including flu, Tdap, and RSV; live-vaccine precautions for contacts; MMR and varicella counseling; references and a downloadable PDF."
        showReadMore
      />
    );
  },
  PregnancyNonHcpSpotlightCard,
  function PretermHcpCard({ duplicate }) {
    return (
      <SpotlightLinkCard
        duplicate={duplicate}
        href="/hcp-special-populations/preterm-infants"
        title="Preterm infant vaccination"
        body="Evidence-based guidance on vaccination in preterm infants, including WHO classification, immunological considerations, vaccine-specific guidelines, and Egyptian preterm consensus documents."
        showReadMore
      />
    );
  },
  PretermNonHcpSpotlightCard,
  CochlearNonHcpSpotlightCard,
  function AspleniaHcpCard({ duplicate }) {
    return (
      <SpotlightLinkCard
        duplicate={duplicate}
        href="/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia"
        title="Anatomic and Functional Asplenia"
        body="Dedicated guidance for anatomic and functional asplenia, including pneumococcal, meningococcal, and Hib recommendations with references and linked PDF resources."
        showReadMore
      />
    );
  },
  function ImmunoglobulinCard({ duplicate }) {
    return (
      <SpotlightLinkCard
        duplicate={duplicate}
        href="/hcp-special-populations/immunoglobulin-blood-products"
        title="People who have recently received normal human immunoglobulin and other blood products"
        body="Information about vaccination considerations for people who have recently received normal human immunoglobulin and other blood products, including spacing requirements and recommendations for live and non-live vaccines."
      />
    );
  },
  function AnaesthesiaSurgeryCard({ duplicate }) {
    return (
      <SpotlightLinkCard
        duplicate={duplicate}
        href="/hcp-special-populations/anaesthesia-surgery"
        title="Before or after anaesthesia or surgery"
        body="Guidance on vaccination timing in relation to surgery and anaesthesia, including recommendations for elective procedures and considerations for post-operative vaccination."
      />
    );
  },
  function CochlearHcpCard({ duplicate }) {
    return (
      <SpotlightLinkCard
        duplicate={duplicate}
        href="/hcp-special-populations/cochlear-implants"
        title="Cochlear Implants and Vaccination Recommendations"
        body="CDC guidance on pneumococcal, Hib, and meningococcal vaccination for people with cochlear implants to prevent bacterial meningitis."
      />
    );
  },
  RsvSpotlightCard,
];

const VISIBLE_NEWLY_ADDED = NEWLY_ADDED_SPOTLIGHT_ORDER.slice(0, HOME_NEWLY_ADDED_LIMIT);

function NewlyAddedTrack({ duplicate }: { duplicate?: boolean }) {
  return (
    <>
      {VISIBLE_NEWLY_ADDED.map((Card, index) => (
        <Card key={Card.displayName ?? Card.name ?? index} duplicate={duplicate} />
      ))}
    </>
  );
}

export default function HomeNewlyAddedStrip() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollStep = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return Math.min(380, 400);
    return Math.min(380, Math.max(280, el.clientWidth * 0.82));
  }, []);

  const scrollPrev = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const W = loopWidth(el);
    const step = scrollStep();
    if (W <= 0) return;
    if (el.scrollLeft < step + 2) {
      el.scrollLeft += W;
    }
    el.scrollLeft -= step;
    normalizeScroll(el);
  }, [scrollStep]);

  const scrollNext = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const W = loopWidth(el);
    const step = scrollStep();
    if (W <= 0) return;
    el.scrollLeft += step;
    normalizeScroll(el);
  }, [scrollStep]);

  return (
    <div className="home-newly-marquee-shell" dir="ltr">
      <button
        type="button"
        className="home-news-marquee-nav home-news-marquee-nav--prev"
        aria-controls={NEWLY_VIEWPORT_ID}
        aria-label="Scroll newly added items backward"
        onClick={scrollPrev}
      >
        <span aria-hidden className="home-news-marquee-nav-icon">
          ‹
        </span>
      </button>

      <div
        ref={viewportRef}
        id={NEWLY_VIEWPORT_ID}
        className="home-newly-marquee-viewport"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            scrollPrev();
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            scrollNext();
          }
        }}
      >
        <div className="home-newly-marquee-track">
          <NewlyAddedTrack />
          <NewlyAddedTrack duplicate />
        </div>
      </div>

      <button
        type="button"
        className="home-news-marquee-nav home-news-marquee-nav--next"
        aria-controls={NEWLY_VIEWPORT_ID}
        aria-label="Scroll newly added items forward"
        onClick={scrollNext}
      >
        <span aria-hidden className="home-news-marquee-nav-icon">
          ›
        </span>
      </button>
    </div>
  );
}
