import HcpPdfSerumPage from '@/components/hcp-vaccines-sera/HcpPdfSerumPage';

export default function AntiSnake() {
  return (
    <HcpPdfSerumPage
      metaKey="antiSnake"
      titleEn="Anti-snake"
      titleAr="مضاد الأفعى"
      leadEn="Snake bite antiserum — indications, administration, and monitoring."
      leadAr="مصل لدغة الأفعى — المؤشرات والإعطاء والمراقبة."
      emoji="🐍"
      pdfSrc="/snake.pdf"
      pdfFileName="snake.pdf"
      iframeTitleEn="Anti-snake PDF"
      iframeTitleAr="نشرة مصل مضاد للثعبان PDF"
    />
  );
}
