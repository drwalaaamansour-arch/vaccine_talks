'use client';

/** Lazy-safe: false during SSR and in normal browsers until Capacitor loads. */
export async function getNativePlatform(): Promise<'ios' | 'android' | 'web'> {
  if (typeof window === 'undefined') return 'web';
  try {
    const { Capacitor } = await import('@capacitor/core');
    const platform = Capacitor.getPlatform();
    if (platform === 'ios' || platform === 'android') return platform;
    return 'web';
  } catch {
    return 'web';
  }
}

export async function isNativeApp(): Promise<boolean> {
  const platform = await getNativePlatform();
  return platform === 'ios' || platform === 'android';
}
