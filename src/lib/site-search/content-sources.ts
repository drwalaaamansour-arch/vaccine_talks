import type { FaqPageConfig } from '@/data/faq-pages/types';
import type { NonHcpCommonQuestionsTopicConfig } from '@/data/non-hcp-common-questions-topics';
import type { VaccineArticle } from '@/components/vaccine-article/types';
import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import type { VaccineContentBlock } from '@/components/hcp-vaccine-product/HcpVaccineContentBlocks';
import { collectPlainText, joinSearchParts, stripHtml } from '@/lib/site-search/extract-text';
import { createSearchDocument, type RawSearchDocumentInput } from '@/lib/site-search/document';

function blocksToText(blocks: VaccineContentBlock[]): string[] {
  return blocks.flatMap((block) => {
    switch (block.type) {
      case 'p':
      case 'h3':
        return [block.text];
      case 'ul':
        return block.items;
      case 'html':
        return [stripHtml(block.html)];
      default:
        return [];
    }
  });
}

export function extractFaqPageDocument(
  config: FaqPageConfig,
  href: string,
  category = 'FAQ'
): RawSearchDocumentInput {
  const faqQuestions = config.items.map((item) => item.question);
  const faqAnswers = config.items.flatMap((item) => item.paragraphs);

  return {
    href,
    title: config.topic.title,
    category,
    titles: [config.topic.subtitle, config.topic.lead],
    headings: faqQuestions,
    faqQuestions,
    faqAnswers,
    bodyParts: [config.note, config.topic.lead],
  };
}

export function extractNonHcpQuestionsDocument(
  topic: NonHcpCommonQuestionsTopicConfig,
  href: string
): RawSearchDocumentInput {
  const faqQuestions = topic.questions.flatMap((item) =>
    [item.question, item.questionEn, item.section, item.sectionEn].filter(Boolean) as string[]
  );
  const faqAnswers = topic.questions.flatMap((item) =>
    [item.answer, item.answerEn].filter(Boolean) as string[]
  );

  return {
    href,
    title: topic.titleEn,
    category: 'Public FAQ',
    titles: [topic.titleAr, topic.leadAr, topic.leadEn].filter(Boolean) as string[],
    headings: faqQuestions,
    faqQuestions,
    faqAnswers,
  };
}

export function extractVaccineArticleDocument(
  article: VaccineArticle,
  href: string
): RawSearchDocumentInput {
  const headings = [
    ...(article.schedules?.map((schedule) => [schedule.titleAr, schedule.titleEn]).flat() ?? []),
    article.summary?.titleAr,
    article.summary?.titleEn,
  ].filter(Boolean) as string[];

  const bodyParts = [
    article.heroLeadAr,
    article.heroLeadEn,
    article.introAr,
    article.introEn,
    article.summary?.ar,
    article.summary?.en,
    ...(article.features?.map((feature) => [feature.ar, feature.en]).flat() ?? []),
    ...(article.schedules?.flatMap((schedule) => [
      schedule.noteAr,
      schedule.noteEn,
      ...(schedule.chips?.flatMap((chip) => [chip.ar, chip.en]) ?? []),
    ]) ?? []),
  ].filter(Boolean) as string[];

  return {
    href,
    title: article.titleEn,
    category: 'Vaccines',
    titles: [article.titleAr, article.tagAr, article.tagEn].filter(Boolean) as string[],
    headings,
    keywords: [article.tagAr, article.tagEn].filter(Boolean) as string[],
    bodyParts,
  };
}

export function extractHcpVaccinePageDocument(
  page: HcpVaccineProductPageProps,
  href: string
): RawSearchDocumentInput {
  const headings = page.sections.map((section) => section.title);
  const bodyParts = [
    page.lead,
    ...page.sections.flatMap((section) => blocksToText(section.blocks)),
    ...(page.references?.map((reference) => reference.label) ?? []),
    ...(page.pdfs?.map((pdf) => pdf.productName) ?? []),
  ];

  return {
    href,
    title: page.title,
    category: 'HCP Vaccines',
    headings,
    bodyParts,
  };
}

export function extractBilingualCopyDocument(
  copy: unknown,
  href: string,
  title: string,
  category = 'HCP Special Populations'
): RawSearchDocumentInput {
  const collected = collectPlainText(copy);
  return {
    href,
    title,
    category,
    bodyParts: collected,
    headings: collected.filter((text) => text.length <= 120).slice(0, 40),
  };
}

export function extractKeywordDocument(input: {
  href: string;
  title: string;
  category?: string;
  keywords?: string[];
  bodyParts?: string[];
  headings?: string[];
}): RawSearchDocumentInput {
  return {
    href: input.href,
    title: input.title,
    category: input.category,
    keywords: input.keywords,
    bodyParts: input.bodyParts,
    headings: input.headings,
  };
}

export function finalizeRawDocument(input: RawSearchDocumentInput) {
  return createSearchDocument({
    ...input,
    passages: input.passages ?? undefined,
    bodyParts: input.bodyParts ?? [],
  });
}

export function extractPlainObjectDocument(
  href: string,
  title: string,
  value: unknown,
  category?: string
) {
  return createSearchDocument({
    href,
    title,
    category,
    bodyParts: collectPlainText(value),
  });
}

export function mergeTextParts(...groups: Array<string[] | undefined>): string {
  return joinSearchParts(groups.flatMap((group) => group ?? []));
}
