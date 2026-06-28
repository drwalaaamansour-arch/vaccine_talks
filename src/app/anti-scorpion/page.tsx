import HcpPdfSerumPage from '@/components/hcp-vaccines-sera/HcpPdfSerumPage';

export default function AntiScorpion() {
  return (
    <HcpPdfSerumPage
      metaKey="antiScorpion"
      titleEn="Anti-scorpion"
      titleAr="مضاد العقرب"
      leadEn="Scorpion envenomation — antiserum use, dosing, and clinical management."
      leadAr="تسمم العقرب — استخدام المصل والجرعات والإدارة السريرية."
      emoji="🦂"
      pdfSrc="/scorpion%20.pdf"
      pdfFileName="scorpion .pdf"
      iframeTitleEn="Anti-scorpion PDF"
      iframeTitleAr="نشرة مصل مضاد للعقرب PDF"
    />
  );
}
