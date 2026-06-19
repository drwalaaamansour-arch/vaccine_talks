import Link from 'next/link';

export default function CancerConsensusButton({ arabic = false }: { arabic?: boolean }) {
  return (
    <section
      id={arabic ? 'related-resources-ar' : 'related-resources'}
      className="hcp-cancer-related hcp-cancer-related--before-pdfs"
      dir={arabic ? 'rtl' : undefined}
      lang={arabic ? 'ar' : undefined}
    >
      <Link
        href="/hcp-special-populations/expert-consensus-pediatric-oncology-re-immunization-egypt"
        className="vaccination-button hcp-cancer-consensus-btn"
      >
        <span className="button-text-en">
          {arabic
            ? 'إجماع الخبراء حول استراتيجيات إعادة التطعيم لمرضى الأورام لدى الأطفال في مصر'
            : 'Expert consensus on re-immunization strategies for pediatric oncology patients in Egypt'}
        </span>
      </Link>
    </section>
  );
}
