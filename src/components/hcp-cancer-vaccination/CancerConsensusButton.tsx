import Link from 'next/link';

export default function CancerConsensusButton() {
  return (
    <section id="related-resources" className="hcp-cancer-related hcp-cancer-related--before-pdfs">
      <Link
        href="/hcp-special-populations/expert-consensus-pediatric-oncology-re-immunization-egypt"
        className="vaccination-button hcp-cancer-consensus-btn"
      >
        <span className="button-text-en">
          Expert consensus on re-immunization strategies for pediatric oncology patients in Egypt
        </span>
      </Link>
    </section>
  );
}
