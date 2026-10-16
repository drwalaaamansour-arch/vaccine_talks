'use client';

import { useLayoutEffect } from 'react';

/** Offset for sticky site header when scrolling to `#` anchors. */
const HASH_SCROLL_OFFSET_PX = 100;

export function scrollToCurrentHash(behavior: ScrollBehavior = 'auto') {
  const raw = window.location.hash;
  if (!raw || raw.length < 2) return false;

  const id = decodeURIComponent(raw.slice(1));
  const target = document.getElementById(id);
  if (!target) return false;

  const top =
    target.getBoundingClientRect().top + window.scrollY - HASH_SCROLL_OFFSET_PX;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

/** Scroll to `location.hash` after mount (and on hash changes). */
export default function ScrollToHashOnMount() {
  useLayoutEffect(() => {
    scrollToCurrentHash('auto');

    const retry = window.setTimeout(() => {
      scrollToCurrentHash('auto');
    }, 200);

    const onHashChange = () => {
      scrollToCurrentHash('smooth');
    };

    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.clearTimeout(retry);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return null;
}
