import Link from 'next/link';
import type { VaccineLink } from './types';

export function SpecialCaseLangDivider() {
  return <div className="bmt-lang-divider" aria-hidden />;
}

export function SpecialCaseVaccineBridge({ links }: { links: VaccineLink[] }) {
  return (
    <div className="bmt-vaccine-bridge">
      <p className="bmt-bridge-intro-ar" dir="rtl">
        لو عاوزين تعرفوا أكتر عن التطعيمات دي، دوسوا على اللينكات:
      </p>
      <p className="bmt-bridge-intro-en" dir="ltr">
        To read more about these vaccines, use the links below.
      </p>
      <div className="bmt-more-links-grid">
        {links.map((item) => (
          <Link key={item.href} href={item.href} className="start-button bmt-more-link-btn bmt-bridge-btn">
            <span className="bmt-bridge-btn-ar" dir="rtl">
              {item.ar}
            </span>
            <span className="bmt-bridge-btn-en" dir="ltr">
              {item.en}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
