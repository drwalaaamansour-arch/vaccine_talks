'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type HomeNewsMarqueeItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  body: string;
  href: string;
  linkText: string;
  dir?: 'rtl' | 'ltr';
};

const HOME_NEWS_MARQUEE_ITEMS: HomeNewsMarqueeItem[] = [
  {
    id: 'pcv21-mflusiva-jun-2026',
    date: 'June 17, 2026',
    category: 'FDA Update',
    title:
      'FDA expands indication for 21-valent pneumococcal conjugate vaccine (PCV21, Capvaxive, Merck) to include children at increased risk.',
    body:
      'On June 17, FDA expanded Capvaxive (PCV21, Merck) to children and adolescents age 2–17 at increased IPD risk after a primary pediatric PCV series—the same population currently eligible for PPSV23. PCV21 remains recommended for adults age 50+ and high-risk adults 18–49, but not for primary infant series (PCV15 or PCV20). FDA approval letter and package insert PDFs on HCP Vaccine Updates.',
    href: '/hcp-vaccine-updates#pcv21-mflusiva-jun-2026',
    linkText: 'Read more on Vaccine Updates →',
  },
  {
    id: 'acog-maternal-2026',
    date: 'June 10, 2026',
    category: 'Guidelines',
    title:
      'ACOG releases 2026 Maternal Immunization Schedule, endorsed by 13 medical, nursing, and pharmacy organizations',
    body:
      'ACOG released its 2026 Maternal Immunization Schedule with routine pregnancy vaccines (influenza, COVID-19, Tdap, RSV) and seven additional vaccines when indicated. RSV vaccination is recommended for one pregnancy only; subsequent pregnancies should use infant RSV preventive antibody. The schedule aligns with the 2025 CDC schedule, with ACOG routinely recommending COVID-19 vaccination during pregnancy. Endorsed by AAFP, AAP, SMFM, and nine other organizations. Full summary and PDF on HCP Vaccine Updates.',
    href: '/hcp-vaccine-updates#acog-maternal-2026',
    linkText: 'Read more on Vaccine Updates →',
  },
  {
    id: 'autism-evidence',
    date: 'April 2026',
    category: 'Evidence Update',
    title: 'Immunize.org and Autism Science Foundation: vaccines are not linked to autism',
    body:
      'Immunize.org and the Autism Science Foundation updated their evidence resource confirming no causal link between autism and vaccines, including MMR and thimerosal-containing vaccines. The update also covers immune system capacity, known genetic/environmental risk factors, and includes supporting PDFs now available on HCP Vaccine Updates.',
    href: '/hcp-vaccine-updates',
    linkText: 'Read more on Vaccine Updates →',
  },
  {
    id: 'polio-campaign',
    date: 'April 19–22, 2026',
    category: 'Campaign',
    title: 'حملة تطعيم ضد شلل الأطفال',
    body:
      'حملة تطعيم ضد شلل الأطفال من يوم ١٩ أبريل ولمدة ٤ أيام. الحملة مجانية وتستهدف الأطفال من عمر يوم حتى ٥ سنوات. الحملة محدودة وفي السادس من أكتوبر والشيخ زايد بمحافظة الجيزة.',
    href: '/polio',
    linkText: 'لمعرفة معلومات أكثر عن التطعيم اضغط هنا ←',
    dir: 'rtl',
  },
  {
    id: 'pcv13-ibd',
    date: 'March 30, 2026',
    category: 'Study',
    title: 'PCV13 study in pediatric IBD: 2-year prospective findings',
    body:
      'A new Expert Review of Vaccines study reports that a single PCV13 dose was not associated with increased inflammatory bowel disease activity in children and adolescents over 24 months, with similar exacerbation rates versus controls. The full study PDF is now available on the HCP Vaccine Updates page.',
    href: '/hcp-vaccine-updates',
    linkText: 'Read more on Vaccine Updates →',
  },
  {
    id: 'arexvy-fda',
    date: 'March 13, 2026',
    category: 'FDA Update',
    title: "FDA expands GSK's Arexvy license to include high-risk adults 18 to 49 years",
    body:
      'FDA expanded the indicated age range for Arexvy to include adults age 18 through 49 years at increased risk for RSV lower respiratory tract disease. The update notes Arexvy should not be used during pregnancy, and that RSV vaccine recommendations are pending due to the stay of ACIP activities.',
    href: '/hcp-vaccine-updates',
    linkText: 'Read more on Vaccine Updates →',
  },
  {
    id: 'aafp-2026',
    date: 'March 1, 2026',
    category: 'Guidelines',
    title: 'American Academy of Family Physicians: 2026 immunization schedules',
    body:
      'The AAFP has published its 2026 recommended immunization schedules for birth through 18 years and for adults—aligned with the AAP childhood schedule and with targeted updates to the adult schedule. On our HCP Vaccine Updates page you can read the summary and open or download the official AAFP schedule PDFs.',
    href: '/hcp-vaccine-updates',
    linkText: 'Read more on Vaccine Updates →',
  },
  {
    id: 'penmenvy-acip',
    date: 'January 8, 2026',
    category: 'Updates',
    title: 'New GSK Pentavalent Meningococcal Vaccine Endorsed by ACIP',
    body:
      "CDC's Advisory Committee on Immunization Practices (ACIP) endorsed a new GSK pentavalent meningococcal vaccine (MenACWY-CRM/MenB-4C, Penmenvy) for use in people aged ≥10 years when both MenACWY and MenB are indicated. The recommendation highlights implementation efficiency, equity, and real-world feasibility. Serious adverse events were rare and occurred at similar frequencies in pentavalent and control groups. Using pentavalent vaccine as an alternative to concomitant administration was the most cost-saving option.",
    href: '/hcp-vaccine-updates',
    linkText: 'Read More →',
  },
  {
    id: 'pfizer-rsv-eg',
    date: 'December 2025',
    category: 'Updates',
    title: 'أعلنت شركة فايزر مصر عن طرح لقاح للوقاية من الإصابة بالفيروس المخلوي التنفسي (RSV)',
    body:
      'أعلنت شركة فايزر مصر عن طرح لقاح للوقاية من الإصابة بالفيروس المخلوي التنفسي (RSV). هذا اللقاح يمثل تطورًا مهمًا في مجال الوقاية من الأمراض التنفسية في مصر.',
    href: '/rsv',
    linkText: 'اقرأ المزيد ←',
    dir: 'rtl',
  },
];

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

function MarqueeNewsCard({
  item,
  duplicate,
}: {
  item: HomeNewsMarqueeItem;
  duplicate?: boolean;
}) {
  const rtl = item.dir === 'rtl';
  return (
    <article
      className={`home-news-marquee-card${rtl ? ' home-news-marquee-card--rtl' : ''}`}
      dir={item.dir ?? 'ltr'}
      aria-hidden={duplicate ? true : undefined}
    >
      <div className="home-news-marquee-card-header">
        <span className="home-news-marquee-date">{item.date}</span>
        <span className="home-news-marquee-category">{item.category}</span>
      </div>
      <h3 className="home-news-marquee-title">{item.title}</h3>
      <p className="home-news-marquee-body">{item.body}</p>
      <a
        href={item.href}
        className="home-news-marquee-link"
        tabIndex={duplicate ? -1 : undefined}
        aria-hidden={duplicate ? true : undefined}
      >
        {item.linkText}
      </a>
    </article>
  );
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const fn = () => setReduced(mq.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);
  return reduced;
}

const VIEWPORT_ID = 'home-news-marquee-viewport';

export default function HomeNewsMarquee() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const hoverPauseRef = useRef(false);
  const reducedMotion = usePrefersReducedMotion();

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

  useEffect(() => {
    if (reducedMotion) return;

    const el = viewportRef.current;
    if (!el) return;

    const speed = 0.38;

    const tick = () => {
      if (!hoverPauseRef.current && document.visibilityState === 'visible') {
        const W = loopWidth(el);
        if (W > 0) {
          el.scrollLeft += speed;
          if (el.scrollLeft >= W - 0.5) {
            el.scrollLeft -= W;
          }
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reducedMotion]);

  const items = HOME_NEWS_MARQUEE_ITEMS;

  return (
    <section
      className="about-section home-section home-news-marquee-section"
      aria-labelledby="home-news-marquee-heading"
    >
      <div className="about-elegant-card">
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>

        <div className="about-bilingual">
          <div className="about-lang home-full-width-lang">
            <h2 id="home-news-marquee-heading" className="about-lang-title home-section-heading">
              Latest News / آخر الأخبار
            </h2>
            <div className="home-news-marquee">
              <div className="home-news-marquee-shell" dir="ltr">
                <button
                  type="button"
                  className="home-news-marquee-nav home-news-marquee-nav--prev"
                  aria-controls={VIEWPORT_ID}
                  aria-label="Scroll news strip backward"
                  onClick={scrollPrev}
                >
                  <span aria-hidden className="home-news-marquee-nav-icon">
                    ‹
                  </span>
                </button>

                <div
                  id={VIEWPORT_ID}
                  ref={viewportRef}
                  className="home-news-marquee-viewport"
                  tabIndex={0}
                  onMouseEnter={() => {
                    hoverPauseRef.current = true;
                  }}
                  onMouseLeave={() => {
                    hoverPauseRef.current = false;
                  }}
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
                  <div className="home-news-marquee-track">
                    {items.map((item) => (
                      <MarqueeNewsCard key={item.id} item={item} />
                    ))}
                    {items.map((item) => (
                      <MarqueeNewsCard key={`${item.id}-dup`} item={item} duplicate />
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="home-news-marquee-nav home-news-marquee-nav--next"
                  aria-controls={VIEWPORT_ID}
                  aria-label="Scroll news strip forward"
                  onClick={scrollNext}
                >
                  <span aria-hidden className="home-news-marquee-nav-icon">
                    ›
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
