import type { ReactNode } from 'react';

type HcpGuideMedicalTableProps = {
  caption: string;
  columns: { key: string; label: string; className?: string }[];
  rows: Record<string, ReactNode>[];
  emptyMessage?: string;
  scrollHint?: string;
};

function formatCell(value: ReactNode) {
  if (typeof value !== 'string') return value;

  return value.split('\n').map((line, index, lines) => (
    <span key={`${line.slice(0, 24)}-${index}`}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </span>
  ));
}

export default function HcpGuideMedicalTable({
  caption,
  columns,
  rows,
  emptyMessage = 'No rows to display.',
  scrollHint = 'Swipe sideways to view all columns',
}: HcpGuideMedicalTableProps) {
  return (
    <div className="hcp-guide-table-shell">
      <p className="hcp-guide-table-caption">{caption}</p>
      {rows.length === 0 ? (
        <p className="hcp-guide-table-empty" role="status">
          {emptyMessage}
        </p>
      ) : (
        <>
          <div
            className="hcp-guide-table-wrap"
            tabIndex={0}
            role="region"
            aria-label={caption}
          >
            <table className="hcp-guide-table">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column.key} scope="col" className={column.className}>
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={`row-${rowIndex}`}>
                    {columns.map((column) => (
                      <td key={column.key} className={column.className} data-label={column.label}>
                        {formatCell(row[column.key])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="hcp-guide-table-scroll-hint" aria-hidden="true">
            {scrollHint}
          </p>
        </>
      )}
    </div>
  );
}

export function RiskTierBadge({ tier }: { tier: string }) {
  const normalized = tier.toLowerCase();
  let variant = 'neutral';

  if (normalized.includes('severe') || normalized.includes('strictly')) {
    variant = 'severe';
  } else if (normalized.includes('moderate')) {
    variant = 'moderate';
  } else if (normalized.includes('mild') || normalized.includes('none')) {
    variant = 'mild';
  } else if (normalized.includes('tiered')) {
    variant = 'tiered';
  }

  return <span className={`hcp-guide-tier hcp-guide-tier--${variant}`}>{tier}</span>;
}
