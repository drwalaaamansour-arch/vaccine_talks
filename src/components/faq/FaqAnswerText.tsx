function renderInline(text: string, keyPrefix: string) {
  const tokens = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return tokens.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${keyPrefix}-b-${i}`}>{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={`${keyPrefix}-a-${i}`}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="faq-topic-inline-link"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}

export default function FaqAnswerText({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="faq-topic-answer">
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{renderInline(paragraph, `p-${i}`)}</p>
      ))}
    </div>
  );
}
