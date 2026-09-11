import { joinSearchParts, splitPassages } from '@/lib/site-search/extract-text';
import { normalizeSearchText } from '@/lib/site-search/normalize';
import { type SiteSearchDocument } from '@/lib/site-search/types';

export type RawSearchDocumentInput = {
  href: string;
  title: string;
  category?: string;
  titles?: string[];
  headings?: string[];
  keywords?: string[];
  faqQuestions?: string[];
  faqAnswers?: string[];
  bodyParts?: string[];
  passages?: string[];
};

export function createSearchDocument(input: RawSearchDocumentInput): SiteSearchDocument | null {
  if (!input.href.startsWith('/') || input.href.includes('://')) {
    return null;
  }

  const titles = [input.title, ...(input.titles ?? [])];
  const headings = input.headings ?? [];
  const keywords = input.keywords ?? [];
  const faqQuestions = input.faqQuestions ?? [];
  const faqAnswers = input.faqAnswers ?? [];
  const bodyParts = input.bodyParts ?? [];
  const passages = input.passages ?? splitPassages(joinSearchParts([...bodyParts, ...faqAnswers]));

  const titleText = normalizeSearchText(joinSearchParts(titles));
  const headingsText = normalizeSearchText(joinSearchParts(headings));
  const keywordsText = normalizeSearchText(joinSearchParts(keywords));
  const faqQuestionsText = normalizeSearchText(joinSearchParts(faqQuestions));
  const faqAnswersText = normalizeSearchText(joinSearchParts(faqAnswers));
  const bodyText = normalizeSearchText(joinSearchParts(bodyParts));

  if (
    !titleText &&
    !headingsText &&
    !keywordsText &&
    !faqQuestionsText &&
    !faqAnswersText &&
    !bodyText
  ) {
    return null;
  }

  return {
    href: input.href,
    title: input.title,
    category: input.category,
    titleText,
    headingsText,
    keywordsText,
    faqQuestionsText,
    faqAnswersText,
    bodyText,
    passages,
  };
}

export function mergeSearchDocuments(documents: SiteSearchDocument[]): SiteSearchDocument[] {
  const merged = new Map<string, SiteSearchDocument>();

  for (const document of documents) {
    const existing = merged.get(document.href);
    if (!existing) {
      merged.set(document.href, document);
      continue;
    }

    merged.set(document.href, {
      href: document.href,
      title: existing.title.length >= document.title.length ? existing.title : document.title,
      category: existing.category ?? document.category,
      titleText: normalizeSearchText(`${existing.titleText}\n${document.titleText}`),
      headingsText: normalizeSearchText(`${existing.headingsText}\n${document.headingsText}`),
      keywordsText: normalizeSearchText(`${existing.keywordsText}\n${document.keywordsText}`),
      faqQuestionsText: normalizeSearchText(
        `${existing.faqQuestionsText}\n${document.faqQuestionsText}`
      ),
      faqAnswersText: normalizeSearchText(`${existing.faqAnswersText}\n${document.faqAnswersText}`),
      bodyText: normalizeSearchText(`${existing.bodyText}\n${document.bodyText}`),
      passages: [...new Set([...existing.passages, ...document.passages])],
    });
  }

  return [...merged.values()];
}
