'use client';

import { useState } from 'react';
import type { NonHcpQuestion } from '@/data/non-hcp-general-questions';

type Locale = 'ar' | 'en';

function getQuestionText(item: NonHcpQuestion, locale: Locale) {
  if (locale === 'en') {
    return item.questionEn ?? item.question;
  }
  return item.question;
}

function getAnswerText(item: NonHcpQuestion, locale: Locale) {
  if (locale === 'en') {
    return item.answerEn ?? item.answer;
  }
  return item.answer;
}

function getSectionText(item: NonHcpQuestion, locale: Locale) {
  if (locale === 'en') {
    return item.sectionEn ?? item.section;
  }
  return item.section;
}

export default function NonHcpQuestionsAccordion({
  questions,
  locale = 'ar',
}: {
  questions: NonHcpQuestion[];
  locale?: Locale;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isArabic = locale === 'ar';

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ width: '100%' }}>
      {questions.map((item, index) => {
        const section = getSectionText(item, locale);
        const question = getQuestionText(item, locale);
        const answer = getAnswerText(item, locale);

        return (
          <div key={`${locale}-${item.section ?? ''}-${item.question}`} style={{ width: '100%' }}>
            {section ? (
              <h3
                style={{
                  textAlign: isArabic ? 'right' : 'left',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#8b7355',
                  margin: index === 0 ? '0 0 1rem' : '2rem 0 1rem',
                  direction: isArabic ? 'rtl' : 'ltr',
                  fontFamily: isArabic ? "'Cairo', 'Noto Sans Arabic', sans-serif" : 'inherit',
                  borderBottom: '2px solid rgba(139, 115, 85, 0.3)',
                  paddingBottom: '0.5rem',
                }}
              >
                {section}
              </h3>
            ) : null}
            <div
              style={{
                marginBottom: '1.5rem',
                borderBottom: index < questions.length - 1 ? '1px solid rgba(139, 115, 85, 0.2)' : 'none',
                paddingBottom: index < questions.length - 1 ? '1.5rem' : '0',
              }}
            >
              <button
                type="button"
                onClick={() => toggleQuestion(index)}
                style={{
                  width: '100%',
                  textAlign: isArabic ? 'right' : 'left',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '1rem 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  flexDirection: isArabic ? 'row' : 'row-reverse',
                }}
              >
                <h3
                  style={{
                    textAlign: isArabic ? 'right' : 'left',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#40606D',
                    margin: 0,
                    flex: 1,
                    fontFamily: isArabic ? "'Cairo', 'Noto Sans Arabic', sans-serif" : 'inherit',
                  }}
                >
                  {question}
                </h3>
                <span
                  style={{
                    fontSize: '1.5rem',
                    color: '#8b7355',
                    transition: 'transform 0.3s ease',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                  }}
                >
                  ▼
                </span>
              </button>
              {openIndex === index ? (
                <div style={{ padding: '0 0 1rem 0', animation: 'fadeIn 0.3s ease' }}>
                  <p
                    className="about-lang-intro"
                    style={{
                      direction: isArabic ? 'rtl' : 'ltr',
                      textAlign: isArabic ? 'right' : 'left',
                      marginTop: '0.5rem',
                      fontFamily: isArabic ? "'Cairo', 'Noto Sans Arabic', sans-serif" : 'inherit',
                      lineHeight: '1.8',
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {answer}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
