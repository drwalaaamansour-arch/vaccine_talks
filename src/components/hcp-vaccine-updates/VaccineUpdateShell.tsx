import type { ReactNode } from 'react';

export default function VaccineUpdateShell({
  id,
  date,
  badge,
  title,
  children,
}: {
  id: string;
  date: string;
  badge: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article id={id} className="hcp-vu-update">
      <header className="hcp-vu-update-head">
        <div className="hcp-vu-update-meta">
          <time className="hcp-vu-update-date" dateTime={date}>
            {date}
          </time>
          <span className="hcp-vu-update-badge">{badge}</span>
        </div>
        <h2 className="hcp-vu-update-title">{title}</h2>
      </header>
      <div className="hcp-vu-update-body">{children}</div>
    </article>
  );
}
