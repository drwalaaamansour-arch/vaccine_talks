import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import {
  EXPERT_CONSENSUS_COPY,
  EXPERT_CONSENSUS_SECTION_IDS,
  type ExpertConsensusCopy,
} from '@/data/expert-consensus-pediatric-oncology-copy';

export {
  EXPERT_CONSENSUS_EN_TOC,
  EXPERT_CONSENSUS_AR_TOC,
  EXPERT_CONSENSUS_PEDIATRIC_ONCOLOGY_TOC,
} from '@/data/expert-consensus-pediatric-oncology-copy';

const PDF_SRC = '/ePoster_V8.pdf';

function ExpertConsensusBody({ copy, arabic }: { copy: ExpertConsensusCopy; arabic?: boolean }) {
  const headClass = arabic ? ' hcp-cancer-section-head--right' : '';
  const sectionDir = arabic ? 'rtl' : undefined;
  const sectionLang = arabic ? 'ar' : undefined;

  const content = (
    <div className="hcp-consensus-main">
      {copy.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="hcp-cancer-section"
          dir={sectionDir}
          lang={sectionLang}
        >
          <div className={`hcp-cancer-section-head${headClass}`}>
            <span className="hcp-cancer-section-icon" aria-hidden>
              {section.icon}
            </span>
            <h2 className="hcp-cancer-section-title" dir={sectionDir}>
              {section.title}
            </h2>
          </div>
          <div className="hcp-cancer-section-body">
            {section.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </section>
      ))}

      <section
        id={arabic ? EXPERT_CONSENSUS_SECTION_IDS.ar.policy : EXPERT_CONSENSUS_SECTION_IDS.en.policy}
        className="hcp-cancer-section hcp-consensus-policy-section"
        dir={sectionDir}
        lang={sectionLang}
      >
        <div className={`hcp-cancer-section-head${headClass}`}>
          <span className="hcp-cancer-section-icon" aria-hidden>
            💉
          </span>
          <h2 className="hcp-cancer-section-title" dir={sectionDir}>
            {copy.policy.title}
          </h2>
        </div>
        <div className="hcp-cancer-section-body">
          <div className="hcp-consensus-policy-grid">
            {copy.policy.cards.map((card) => (
              <article key={card.title} className="hcp-consensus-policy-card" dir={sectionDir}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id={arabic ? EXPERT_CONSENSUS_SECTION_IDS.ar.conclusion : EXPERT_CONSENSUS_SECTION_IDS.en.conclusion}
        className="hcp-cancer-section hcp-cancer-takeaway-section"
        dir={sectionDir}
        lang={sectionLang}
      >
        <div className={`hcp-cancer-section-head${headClass}`}>
          <span className="hcp-cancer-section-icon" aria-hidden>
            📌
          </span>
          <h2 className="hcp-cancer-section-title" dir={sectionDir}>
            {copy.conclusion.title}
          </h2>
        </div>
        <div className="hcp-cancer-section-body">
          <p className="hcp-consensus-conclusion">{copy.conclusion.text}</p>
        </div>
      </section>

      <section
        id={arabic ? EXPERT_CONSENSUS_SECTION_IDS.ar.eposter : EXPERT_CONSENSUS_SECTION_IDS.en.eposter}
        className="hcp-cancer-section"
        dir={sectionDir}
        lang={sectionLang}
      >
        <HcpGuidePdfEmbed src={PDF_SRC} title={copy.pdfTitle} />
      </section>
    </div>
  );

  if (arabic) {
    return <HcpGuideArabicPanel contentOnly>{content}</HcpGuideArabicPanel>;
  }

  return content;
}

export default function ExpertConsensusPediatricOncologyArticle() {
  return <ExpertConsensusBody copy={EXPERT_CONSENSUS_COPY.en} />;
}

export function ExpertConsensusPediatricOncologyArabicArticle() {
  return <ExpertConsensusBody copy={EXPERT_CONSENSUS_COPY.ar} arabic />;
}
