import Link from 'next/link';
import { ShareCheckerButton } from '@/components/wizard/ShareCheckerButton';

export default function HomeVaccineCheckerCta() {
  return (
    <div className="home-vaccine-checker-spotlight">
      <article className="home-vaccine-checker-card" aria-labelledby="home-vaccine-checker-title">
        <span className="home-vaccine-checker-corner home-vaccine-checker-corner--tl" aria-hidden />
        <span className="home-vaccine-checker-corner home-vaccine-checker-corner--tr" aria-hidden />
        <span className="home-vaccine-checker-corner home-vaccine-checker-corner--bl" aria-hidden />
        <span className="home-vaccine-checker-corner home-vaccine-checker-corner--br" aria-hidden />

        <header className="home-vaccine-checker-header">
          <h2 id="home-vaccine-checker-title" className="home-vaccine-checker-title-ar" lang="ar" dir="rtl">
            اعرف تطعيمات طفلك
          </h2>
          <p className="home-vaccine-checker-title-en" lang="en">
            Vaccine Checker
          </p>
        </header>

        <div className="home-vaccine-checker-copy">
          <p className="home-vaccine-checker-copy-ar" lang="ar" dir="rtl">
            مش عارف طفلك محتاج تطعيمات إيه؟
            <br />
            دخل عمره والتطعيمات اللي أخدها واعرف إيه المستحق وإمتى.
          </p>
          <p className="home-vaccine-checker-copy-en" lang="en">
            Check which vaccines your child may need based on age and previous vaccination history.
          </p>
        </div>

        <div className="home-vaccine-checker-actions">
          <Link href="/vaccine-checker" className="home-vaccine-checker-primary">
            <span className="home-vaccine-checker-primary-ar" lang="ar" dir="rtl">
              ابدأ دلوقتي
            </span>
            <span className="home-vaccine-checker-primary-en" lang="en">
              Start Vaccine Checker
            </span>
          </Link>

          <ShareCheckerButton appearance="link" className="home-vaccine-checker-share" />
        </div>
      </article>
    </div>
  );
}
