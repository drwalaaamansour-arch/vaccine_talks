export function SectionHead({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="bmt-section-head">
      <span className="bmt-section-icon" aria-hidden>
        {icon}
      </span>
      <h3 className="bmt-section-title">{title}</h3>
    </div>
  );
}
