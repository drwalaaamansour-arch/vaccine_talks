import HcpPdfSerumPage from '@/components/hcp-vaccines-sera/HcpPdfSerumPage';

export default function AntiViper() {
  return (
    <HcpPdfSerumPage
      metaKey="antiViper"
      titleEn="Anti-viper"
      titleAr="مضاد الأفعى الأقرع"
      leadEn="Viper envenomation antiserum — product information and treatment guidance."
      leadAr="مصل تسمم الأفعى الأقرع — معلومات المنتج وإرشادات العلاج."
      emoji="☠️"
      pdfSrc="/viper.pdf"
      pdfFileName="viper.pdf"
      iframeTitleEn="Anti-viper PDF"
      iframeTitleAr="نشرة مصل مضاد للأفعى PDF"
    />
  );
}
