import { type DateOfBirth, parseDateParts } from '@/types/wizard-types';

export function fromDateParts(parts: DateOfBirth): Date {
  return parseDateParts(parts);
}

export function toIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return startOfDay(result);
}

export function addWeeks(date: Date, weeks: number): Date {
  return addDays(date, weeks * 7);
}

export function addMonths(date: Date, months: number): Date {
  const result = new Date(date);
  const day = result.getDate();
  result.setMonth(result.getMonth() + months);
  if (result.getDate() < day) {
    result.setDate(0);
  }
  return startOfDay(result);
}

export function addYears(date: Date, years: number): Date {
  return addMonths(date, years * 12);
}

export function daysBetween(from: Date, to: Date): number {
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((startOfDay(to).getTime() - startOfDay(from).getTime()) / msPerDay);
}

export function isBefore(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() < startOfDay(b).getTime();
}

export function isAfter(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() > startOfDay(b).getTime();
}

export function isSameDay(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() === startOfDay(b).getTime();
}

export function isOnOrBefore(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() <= startOfDay(b).getTime();
}

export function isOnOrAfter(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() >= startOfDay(b).getTime();
}

export function laterOf(a: Date, b: Date): Date {
  return isOnOrAfter(a, b) ? a : b;
}

export function earlierOf(a: Date, b: Date): Date {
  return isOnOrBefore(a, b) ? a : b;
}

export type AgeAtDate = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
};

export function ageAtDate(dob: Date, at: Date): AgeAtDate {
  if (isBefore(at, dob)) {
    return { years: 0, months: 0, days: 0, totalDays: 0, totalWeeks: 0 };
  }

  let years = at.getFullYear() - dob.getFullYear();
  let months = at.getMonth() - dob.getMonth();
  let days = at.getDate() - dob.getDate();

  if (days < 0) {
    const prevMonth = new Date(at.getFullYear(), at.getMonth(), 0);
    days += prevMonth.getDate();
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = daysBetween(dob, at);

  return {
    years,
    months,
    days,
    totalDays,
    totalWeeks: Math.floor(totalDays / 7),
  };
}

export function ageInWholeMonths(dob: Date, at: Date): number {
  const age = ageAtDate(dob, at);
  return age.years * 12 + age.months;
}

export function ageInYears(dob: Date, at: Date): number {
  const age = ageAtDate(dob, at);
  return age.years + age.months / 12 + age.days / 365;
}

export function weeksAndDaysFromDob(dob: Date, weeks: number, extraDays = 0): Date {
  return addDays(addWeeks(dob, weeks), extraDays);
}
