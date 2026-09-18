'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { isNativeApp } from '@/lib/native/platform';
import SaveResourceButton from '@/components/native/SaveResourceButton';

/** Extra header controls visible in native apps (and optional saved resources entry). */
export default function NativeAppChrome() {
  const [native, setNative] = useState(false);

  useEffect(() => {
    void isNativeApp().then(setNative);
  }, []);

  if (!native) return null;

  return (
    <div className="native-app-chrome" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
      <SaveResourceButton />
      <Link href="/saved-resources" className="header-auth-link" style={{ fontSize: '0.85rem' }}>
        Saved
      </Link>
    </div>
  );
}
