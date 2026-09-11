export type AgeParts = {
  years: number;
  months: number;
  days: number;
};

function englishCountLabel(count: number, singular: string, plural: string): string {
  return `${count} ${count === 1 ? singular : plural}`;
}

export function formatEnglishAge(age: AgeParts): string {
  return `${englishCountLabel(age.years, 'year', 'years')}, ${englishCountLabel(age.months, 'month', 'months')}, ${englishCountLabel(age.days, 'day', 'days')}`;
}
