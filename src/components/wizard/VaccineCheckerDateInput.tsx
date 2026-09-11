'use client';

import {
  sanitizeNumericDateField,
  type DateInputParts,
  type Language,
} from '@/types/wizard-types';

type VaccineCheckerDateInputProps = {
  idPrefix: string;
  language: Language;
  labels: { day: string; month: string; year: string };
  value: DateInputParts;
  onChange: (field: keyof DateInputParts, value: string) => void;
  groupLabel?: string;
};

export function VaccineCheckerDateInput({
  idPrefix,
  language,
  labels,
  value,
  onChange,
  groupLabel,
}: VaccineCheckerDateInputProps) {
  const isArabic = language === 'ar';
  const direction = isArabic ? 'rtl' : 'ltr';
  const lang = isArabic ? 'ar' : 'en';

  const updateField = (field: keyof DateInputParts, rawValue: string) => {
    onChange(field, sanitizeNumericDateField(rawValue, field === 'year' ? 4 : 2));
  };

  const fields = [
    { key: 'day' as const, id: `${idPrefix}-day`, label: labels.day, maxLength: 2, enterKeyHint: 'next' as const },
    { key: 'month' as const, id: `${idPrefix}-month`, label: labels.month, maxLength: 2, enterKeyHint: 'next' as const },
    { key: 'year' as const, id: `${idPrefix}-year`, label: labels.year, maxLength: 4, enterKeyHint: 'done' as const },
  ];

  return (
    <>
      {groupLabel && <p className="vaccine-checker-field-label">{groupLabel}</p>}
      <div
        className={`vaccine-checker-date-grid vaccine-checker-date-grid--fields vaccine-checker-date-grid--${direction}`}
        dir={direction}
        lang={lang}
      >
        {fields.map((field) => (
          <div key={field.key} className="vaccine-checker-field vaccine-checker-date-field">
            <label className="vaccine-checker-field-label" htmlFor={field.id}>
              {field.label}
            </label>
            <input
              id={field.id}
              type="text"
              dir={direction}
              lang={lang}
              inputMode="numeric"
              autoComplete="off"
              enterKeyHint={field.enterKeyHint}
              maxLength={field.maxLength}
              value={value[field.key]}
              onChange={(event) => updateField(field.key, event.target.value)}
              className="vaccine-checker-input vaccine-checker-date-input"
            />
          </div>
        ))}
      </div>
    </>
  );
}
