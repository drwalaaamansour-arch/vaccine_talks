'use client';

import { useCallback, useRef } from 'react';

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

function NewlyAddedTrack({ duplicate }: { duplicate?: boolean }) {
  return (
    <>
      <SpotlightLinkCard
        duplicate={duplicate}
        href="/hcp-special-populations/pregnancy-breastfeeding"
        title="Pregnancy"
        body="Guidance on vaccines before, during, and after pregnancy—including flu, Tdap, and RSV; live-vaccine precautions for contacts; MMR and varicella counseling; references and a downloadable PDF."
        showReadMore
      />
      <PregnancyNonHcpSpotlightCard duplicate={duplicate} />
      <SpotlightLinkCard
        duplicate={duplicate}
        href="/hcp-special-populations/preterm-infants"
        title="Preterm infant vaccination"
        body="Evidence-based guidance on vaccination in preterm infants, including WHO classification, immunological considerations, vaccine-specific guidelines, and Egyptian preterm consensus documents."
        showReadMore
      />
      <PretermNonHcpSpotlightCard duplicate={duplicate} />
      <CochlearNonHcpSpotlightCard duplicate={duplicate} />
      <SpotlightLinkCard
        duplicate={duplicate}
        href="/hcp-special-populations/altered-immunocompetence/anatomic-or-functional-asplenia"
        title="Anatomic and Functional Asplenia"
        body="Dedicated guidance for anatomic and functional asplenia, including pneumococcal, meningococcal, and Hib recommendations with references and linked PDF resources."
        showReadMore
      />
      <SpotlightLinkCard
        duplicate={duplicate}
        href="/hcp-special-populations/immunoglobulin-blood-products"
        title="People who have recently received normal human immunoglobulin and other blood products"
        body="Information about vaccination considerations for people who have recently received normal human immunoglobulin and other blood products, including spacing requirements and recommendations for live and non-live vaccines."
      />
      <SpotlightLinkCard
        duplicate={duplicate}
        href="/hcp-special-populations/anaesthesia-surgery"
        title="Before or after anaesthesia or surgery"
        body="Guidance on vaccination timing in relation to surgery and anaesthesia, including recommendations for elective procedures and considerations for post-operative vaccination."
      />
      <SpotlightLinkCard
        duplicate={duplicate}
        href="/hcp-special-populations/cochlear-implants"
        title="Cochlear Implants and Vaccination Recommendations"
        body="CDC guidance on pneumococcal, Hib, and meningococcal vaccination for people with cochlear implants to prevent bacterial meningitis."
      />
      <RsvSpotlightCard duplicate={duplicate} />
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
