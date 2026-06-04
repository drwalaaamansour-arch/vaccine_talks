import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';

const EGYPT_PDF_DISCLAIMER =
  'المصدر: الهيئة المصرية للدواء / وزارة الصحة — لا توجد علاقة مباشرة بين الموقع وهذه الشركات، والمحتوى لأغراض التوعية فقط. ولا يجوز استخدامها في أي أغراض تجارية';

export default function HcpProductPdfEmbed({
  productName,
  src,
}: {
  productName: string;
  src: string;
}) {
  return (
    <div className="hcp-vax-product-pdf">
      <HcpGuidePdfEmbed src={src} title={`${productName} — product insert`} />
      <p className="hcp-vax-product-pdf-disclaimer" dir="rtl" lang="ar">
        {EGYPT_PDF_DISCLAIMER}
      </p>
    </div>
  );
}
