export function buildGroupedNotificationCopy(
  language: 'en' | 'ar',
  doseLabels: string[]
): { title: string; body: string } {
  const unique = [...new Set(doseLabels.filter(Boolean))];
  const joined = unique.join(', ');

  if (language === 'ar') {
    return {
      title: 'موعد تطعيم',
      body: unique.length <= 1 ? `تطعيم مستحق: ${joined}` : `تطعيمات مستحقة: ${joined}`,
    };
  }

  return {
    title: 'Vaccination reminder',
    body: unique.length <= 1 ? `Vaccination due: ${joined}` : `Vaccinations due: ${joined}`,
  };
}
