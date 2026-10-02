'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { SerwistProvider } from '@serwist/turbopack/react';

/**
 * Serwist stays enabled for browser/PWA installs.
 * Native Capacitor WebViews skip service worker registration to avoid double caching.
 */
export default function SerwistOrNativeGate({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'loading' | 'native' | 'web'>('loading');

  useEffect(() => {
    void (async () => {
      try {
        const { Capacitor } = await import('@capacitor/core');
        if (Capacitor.isNativePlatform()) {
          setMode('native');
          return;
        }
      } catch {
        /* browser */
      }
      setMode('web');
    })();
  }, []);

  if (mode === 'loading' || mode === 'native') {
    return <>{children}</>;
  }

  return <SerwistProvider swUrl="/serwist/sw.js">{children}</SerwistProvider>;
}
