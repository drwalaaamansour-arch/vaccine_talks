'use client';

import { useEffect, useState } from 'react';
import { useSerwist } from '@serwist/turbopack/react';

export default function PwaUpdatePrompt() {
  const { serwist } = useSerwist();
  const [updateReady, setUpdateReady] = useState(false);

  useEffect(() => {
    if (!serwist) return;
    const onWaiting = () => setUpdateReady(true);
    serwist.addEventListener('waiting', onWaiting);
    return () => serwist.removeEventListener('waiting', onWaiting);
  }, [serwist]);

  useEffect(() => {
    if (!serwist) return;
    const onControllerChange = () => {
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    };
    navigator.serviceWorker.addEventListener('controllerchange', onControllerChange);
    return () => {
      navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange);
    };
  }, [serwist]);

  if (!updateReady) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="pwa-update-banner"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        padding: '0.75rem 1.25rem',
        background: '#355a63',
        color: '#ffffff',
        fontFamily: 'Cairo, system-ui, sans-serif',
        boxShadow: '0 -4px 16px rgba(0,0,0,0.18)',
      }}
    >
      <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.4 }}>
        نسخة جديدة متاحة — اضغط للتحديث / A new version is available. Tap to reload.
      </p>
      <button
        type="button"
        onClick={() => serwist?.messageSkipWaiting()}
        style={{
          flexShrink: 0,
          padding: '0.5rem 1.1rem',
          border: 'none',
          borderRadius: '999px',
          background: '#0d9488',
          color: '#ffffff',
          fontSize: '0.9rem',
          fontWeight: 700,
          cursor: 'pointer',
        }}
      >
        تحديث الآن / Reload
      </button>
    </div>
  );
}