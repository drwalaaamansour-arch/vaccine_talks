export type SiteUiLanguage = 'ar' | 'en';

export function resolveSiteUiLanguage(lang?: string | null): SiteUiLanguage {
  return lang?.toLowerCase().startsWith('en') ? 'en' : 'ar';
}

export function getSearchUiMessages(language: SiteUiLanguage) {
  if (language === 'ar') {
    return {
      placeholder: 'ابحث عن تطعيمات، أمراض، أو صفحات...',
      startTitle: 'ابدأ الكتابة للبحث',
      startHint: 'ابحث عن تطعيمات، أسئلة شائعة، أو أي محتوى في الموقع',
      empty: 'مفيش نتائج مطابقة.',
      emptyHint: 'جرّب كلمة بحث مختلفة',
      searching: 'جاري البحث...',
      clear: 'مسح البحث',
      close: 'إغلاق البحث',
      keyboardHint: 'استخدم ↑↓ للتنقل، Enter للاختيار، Esc للإغلاق',
      openSearch: 'بحث',
    };
  }

  return {
    placeholder: 'Search for vaccines, diseases, or pages...',
    startTitle: 'Start typing to search',
    startHint: 'Search for vaccines, FAQ pages, or any content on the site',
    empty: 'No matching results.',
    emptyHint: 'Try a different search term',
    searching: 'Searching...',
    clear: 'Clear search',
    close: 'Close search',
    keyboardHint: 'Use ↑↓ to navigate, Enter to select, Esc to close',
    openSearch: 'Search',
  };
}

export function getChatUiMessages(language: SiteUiLanguage) {
  if (language === 'ar') {
    return {
      openChat: 'فتح المساعد',
      closeChat: 'إغلاق المحادثة',
      inputLabel: 'اكتب سؤالك عن التطعيمات',
      inputPlaceholder: 'اسأل عن التطعيمات...',
      send: 'إرسال',
      thinking: 'جاري الرد...',
      error: 'حصلت مشكلة في الاتصال. جرّب تاني.',
      welcome:
        'أهلاً! أنا مساعد معلومات التطعيمات. أقدر أساعدك في أسئلة عن اللقاحات، مواعيد التطعيم، السلامة، والأمراض التي يمكن الوقاية منها بالتطعيم. إزاي أقدر أساعدك؟',
      title: 'مساعد معلومات التطعيمات',
      subtitle: 'اسأل عن اللقاحات والتطعيمات',
      disclaimerAr:
        'تنبيه: هذا المساعد يستخدم الذكاء الاصطناعي (AI) لتقديم معلومات عامة عن التطعيمات فقط. لا يُعد بديلاً عن الاستشارة الطبية أو التشخيص أو العلاج. يُرجى مراجعة مقدم رعاية صحية مؤهل لأي قرارات طبية شخصية.',
      disclaimerEn:
        'Disclaimer: This assistant uses artificial intelligence (AI) to provide general vaccine information only. It is not medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for personal medical decisions.',
    };
  }

  return {
    openChat: 'Open chat',
    closeChat: 'Close chat',
    inputLabel: 'Type your vaccine question',
    inputPlaceholder: 'Ask about vaccines...',
    send: 'Send',
    thinking: 'Thinking...',
    error: 'Something went wrong. Please try again.',
    welcome:
      "Hello! I'm your vaccine information assistant. I can help with questions about vaccines, immunization schedules, vaccine safety, and vaccine-preventable diseases. How can I assist you today?",
    title: 'Vaccine Information Assistant',
    subtitle: 'Ask me about vaccines & immunization',
    disclaimerAr:
      'تنبيه: هذا المساعد يستخدم الذكاء الاصطناعي (AI) لتقديم معلومات عامة عن التطعيمات فقط. لا يُعد بديلاً عن الاستشارة الطبية أو التشخيص أو العلاج. يُرجى مراجعة مقدم رعاية صحية مؤهل لأي قرارات طبية شخصية.',
    disclaimerEn:
      'Disclaimer: This assistant uses artificial intelligence (AI) to provide general vaccine information only. It is not medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for personal medical decisions.',
  };
}
