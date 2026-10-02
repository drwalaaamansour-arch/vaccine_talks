'use client';

import { useEffect } from 'react';
import { isTrustedInAppUrl } from '@/lib/native/trusted-origins';

/**
 * Native shell integration: back button, external links, service worker hygiene.
 * No-op in normal browsers and during SSR.
 */
export default function NativeAppBridge() {
  useEffect(() => {
    let cancelled = false;
    let removeBackListener: (() => void) | undefined;
    let removeClickListener: (() => void) | undefined;

    void (async () => {
      try {
        const { Capacitor } = await import('@capacitor/core');
        if (!Capacitor.isNativePlatform() || cancelled) return;

        if ('serviceWorker' in navigator) {
          const registrations = await navigator.serviceWorker.getRegistrations();
          await Promise.all(registrations.map((reg) => reg.unregister()));
        }

        const { App } = await import('@capacitor/app');
        const { Browser } = await import('@capacitor/browser');
        const { StatusBar, Style } = await import('@capacitor/status-bar');
        const { SplashScreen } = await import('@capacitor/splash-screen');

        try {
          await StatusBar.setStyle({ style: Style.Light });
        } catch {
          /* iOS-only nuances */
        }
        void SplashScreen.hide();

        const backSub = await App.addListener('backButton', ({ canGoBack }) => {
          if (canGoBack) {
            window.history.back();
            return;
          }
          void App.exitApp();
        });
        removeBackListener = () => {
          void backSub.remove();
        };

        const onClick = (event: MouseEvent) => {
          const target = event.target as HTMLElement | null;
          const anchor = target?.closest('a[href]') as HTMLAnchorElement | null;
          if (!anchor) return;
          const href = anchor.getAttribute('href');
          if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
            return;
          }
          let absolute: string;
          try {
            absolute = new URL(href, window.location.href).href;
          } catch {
            return;
          }
          if (isTrustedInAppUrl(absolute)) return;

          event.preventDefault();
          void Browser.open({ url: absolute, presentationStyle: 'popover' });
        };

        document.addEventListener('click', onClick, true);
        removeClickListener = () => document.removeEventListener('click', onClick, true);
      } catch {
        /* not in Capacitor */
      }
    })();

    return () => {
      cancelled = true;
      removeBackListener?.();
      removeClickListener?.();
    };
  }, []);

  return null;
}
