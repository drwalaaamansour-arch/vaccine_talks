export function shouldDeleteInvalidPushSubscription(error: unknown): boolean {
  const statusCode = readStatusCode(error);
  return statusCode === 404 || statusCode === 410;
}

function readStatusCode(error: unknown): number | undefined {
  if (!error || typeof error !== 'object') return undefined;
  const candidate = error as { statusCode?: unknown; status?: unknown };
  if (typeof candidate.statusCode === 'number') return candidate.statusCode;
  if (typeof candidate.status === 'number') return candidate.status;
  return undefined;
}
