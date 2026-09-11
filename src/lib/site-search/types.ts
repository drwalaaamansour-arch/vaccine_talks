export type SiteSearchDocument = {
  href: string;
  title: string;
  category?: string;
  titleText: string;
  headingsText: string;
  keywordsText: string;
  faqQuestionsText: string;
  faqAnswersText: string;
  bodyText: string;
  passages: string[];
};

export type SiteSearchResult = {
  href: string;
  title: string;
  category?: string;
  snippet: string;
};

export type SiteSearchNavEntry = {
  title: string;
  href: string;
  category?: string;
  description?: string;
};
