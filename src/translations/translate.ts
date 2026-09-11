import { AR_TRANSLATIONS, TRANSLATIONS } from '@/translations';
import type { Language } from '@/types/wizard-types';

export type TranslationDictionary = typeof TRANSLATIONS;

export function getTranslationDictionary(language: Language): TranslationDictionary {
  return language === 'ar' ? AR_TRANSLATIONS : TRANSLATIONS;
}

export function interpolateTranslation(
  template: string,
  params: Record<string, string>
): string {
  let result = template;

  for (const [key, value] of Object.entries(params)) {
    result = result.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
    result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
  }

  return result;
}

export function translateKey(
  language: Language,
  key: string,
  params?: Record<string, string>
): string {
  const dict = getTranslationDictionary(language);
  const value = dict[key as keyof TranslationDictionary];

  if (typeof value !== 'string' || value.length === 0) {
    return '';
  }

  return params ? interpolateTranslation(value, params) : value;
}

export function createTranslator(language: Language) {
  return (key: string, params?: Record<string, string>) =>
    translateKey(language, key, params);
}

export function translationTemplateIncludesDate(template: string): boolean {
  return template.includes('{date}') || template.includes('{{date}}');
}
