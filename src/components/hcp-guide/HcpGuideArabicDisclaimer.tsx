export const HCP_GUIDE_ARABIC_TRANSLATION_DISCLAIMER =
  'تم توفير هذه الترجمة العربية باستخدام تقنيات الذكاء الاصطناعي بهدف تسهيل الوصول إلى المحتوى العلمي. وعلى الرغم من بذل الجهد لضمان دقة الترجمة، فقد تظل هناك بعض الاختلافات اللغوية أو الاصطلاحية. وفي حال وجود أي تعارض أو لبس، تُعتبر النسخة الإنجليزية الأصلية المرجع المعتمد للمحتوى.';

export default function HcpGuideArabicDisclaimer({ className = '' }: { className?: string }) {
  return (
    <aside
      className={`hcp-guide-ar-disclaimer${className ? ` ${className}` : ''}`}
      dir="rtl"
      lang="ar"
      aria-label="تنويه الترجمة"
    >
      <p>
        <strong>تنويه:</strong> {HCP_GUIDE_ARABIC_TRANSLATION_DISCLAIMER}
      </p>
    </aside>
  );
}
