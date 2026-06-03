type VaccineRichTextProps = {
  text: string;
  className?: string;
};

export default function VaccineRichText({ text, className }: VaccineRichTextProps) {
  const html = text.replace(/\n/g, '<br />');

  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
