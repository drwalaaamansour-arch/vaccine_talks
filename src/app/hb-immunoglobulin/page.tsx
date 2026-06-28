import HcpPdfSerumPage from '@/components/hcp-vaccines-sera/HcpPdfSerumPage';

export default function HBImmunoglobulin() {
  return (
    <HcpPdfSerumPage
      metaKey="hbImmunoglobulin"
      titleEn="HB immunoglobulin"
      titleAr="الغلوبولين المناعي للتهاب الكبد B"
      leadEn="Hepatitis B immunoglobulin — PEP, neonatal prophylaxis, and dosing."
      leadAr="الغلوبولين المناعي للتهاب الكبد B — الوقاية بعد التعرض ووقاية حديثي الولادة والجرعات."
      emoji="🩸"
      pdfSrc="/immunohb.pdf"
      pdfFileName="immunohb.pdf"
      iframeTitleEn="ImmunoHBs PDF"
      iframeTitleAr="نشرة ImmunoHBs PDF"
      rotatePdf
    />
  );
}
