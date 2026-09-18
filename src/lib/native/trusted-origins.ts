/** Hostnames allowed to stay inside the Capacitor WebView (in-app navigation). */
export const TRUSTED_VACCINE_TALKS_HOSTS = new Set([
  'www.vaccinetalks.com',
  'vaccinetalks.com',
  'localhost',
  '127.0.0.1',
]);

export function isTrustedInAppHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  if (TRUSTED_VACCINE_TALKS_HOSTS.has(host)) return true;
  // Local dev (LAN IP, e.g. 192.168.x.x)
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) return true;
  return false;
}

export function isTrustedInAppUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return false;
    return isTrustedInAppHost(parsed.hostname);
  } catch {
    return false;
  }
}
