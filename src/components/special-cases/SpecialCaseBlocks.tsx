import type { ReactNode } from 'react';
import { SectionHead } from './SectionHead';
import type { SpecialCaseCardVariant, SpecialCaseLocale } from './types';

export function ScCard({
  variant,
  icon,
  title,
  children,
}: {
  variant: SpecialCaseCardVariant;
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={`bmt-card bmt-card--${variant}`}>
      <SectionHead icon={icon} title={title} />
      {children}
    </section>
  );
}

export function ScProse({ children }: { children: ReactNode }) {
  return <div className="bmt-prose">{children}</div>;
}

export function ScProseFoot({ children }: { children: ReactNode }) {
  return <p className="bmt-prose-foot">{children}</p>;
}

export function ScCallout({ children }: { children: ReactNode }) {
  return (
    <div className="bmt-callout">
      <p>{children}</p>
    </div>
  );
}

export function ScSpotlight({
  icon,
  title,
  children,
  variant = 'flu',
}: {
  icon: string;
  title: string;
  children: ReactNode;
  variant?: 'flu';
}) {
  return (
    <section className={`bmt-spotlight bmt-spotlight--${variant}`}>
      <div className="bmt-spotlight-icon" aria-hidden>
        {icon}
      </div>
      <div>
        <h4>{title}</h4>
        {children}
      </div>
    </section>
  );
}

export function ScSummary({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="bmt-summary">
      <h4>{title}</h4>
      <p>{children}</p>
    </section>
  );
}

export function ScVaxCloud({ items }: { items: string[] }) {
  return (
    <ul className="bmt-vax-cloud">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ScChipList({ items }: { items: string[] }) {
  return (
    <ul className="bmt-chip-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ScCheckList({ items }: { items: string[] }) {
  return (
    <ul className="bmt-check-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ScTravelList({ items }: { items: string[] }) {
  return (
    <ul className="bmt-travel-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ScYesBox({ label, text }: { label: string; text: string }) {
  return (
    <div className="bmt-yes-box">
      <span className="bmt-yes-label">{label}</span>
      <p>{text}</p>
    </div>
  );
}

export function ScTypeGrid({ types }: { types: { badge: string; text: string; donor?: boolean }[] }) {
  return (
    <div className="bmt-type-grid">
      {types.map((type) => (
        <div key={type.badge} className={`bmt-type-tile${type.donor ? ' bmt-type-tile--donor' : ''}`}>
          <span className="bmt-type-badge">{type.badge}</span>
          <p>{type.text}</p>
        </div>
      ))}
    </div>
  );
}

export function ScReasonsGrid({
  reasons,
  locale,
  wideLast = true,
}: {
  reasons: string[];
  locale: SpecialCaseLocale;
  wideLast?: boolean;
}) {
  const nums = locale === 'ar' ? ['١', '٢', '٣', '٤', '٥'] : ['1', '2', '3', '4', '5'];

  return (
    <div className="bmt-reasons-grid">
      {reasons.map((reason, i) => (
        <div
          key={reason}
          className={`bmt-reason-card${wideLast && i === reasons.length - 1 && reasons.length % 2 === 1 ? ' bmt-reason-card--wide' : ''}`}
        >
          <span className="bmt-reason-num">{nums[i]}</span>
          <p>{reason}</p>
        </div>
      ))}
    </div>
  );
}

export function ScTimeline({
  intro,
  steps,
  locale,
}: {
  intro: string;
  steps: { badge: string; text: string }[];
  locale: SpecialCaseLocale;
}) {
  const timelinePrefix = locale === 'ar' ? 'بعد' : 'After';

  return (
    <>
      <p className="bmt-timeline-intro">{intro}</p>
      <div className="bmt-timeline">
        {steps.map((step, i) => (
          <div key={step.badge} className={`bmt-step bmt-step--${i + 1}`}>
            <div className="bmt-step-marker">
              <span>{i + 1}</span>
            </div>
            <div className="bmt-step-body">
              <span className="bmt-step-badge">
                {timelinePrefix} {step.badge}
              </span>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function ScTipsGrid({ tips }: { tips: string[] }) {
  return (
    <ul className="bmt-tips-grid">
      {tips.map((tip, i) => (
        <li key={tip}>
          <span className="bmt-tip-num">{i + 1}</span>
          <span>{tip}</span>
        </li>
      ))}
    </ul>
  );
}

export function ScNestedVaxBlock({
  title,
  paragraphs,
  bullets,
}: {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}) {
  return (
    <div className="bmt-type-tile" style={{ marginBottom: '0.65rem' }}>
      <h4 style={{ margin: '0 0 0.5rem', fontWeight: 800, color: '#355a63', fontSize: '1rem' }}>{title}</h4>
      {paragraphs?.map((p) => (
        <p key={p} className="bmt-prose-foot">
          {p}
        </p>
      ))}
      {bullets && bullets.length > 0 && (
        <ul className="bmt-check-list" style={{ marginTop: '0.5rem' }}>
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
