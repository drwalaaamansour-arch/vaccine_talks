'use client';

import { useEffect } from 'react';

interface SearchButtonProps {
  onClick?: () => void;
}

export default function SearchButton({ onClick }: SearchButtonProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        onClick?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClick]);

  return (
    <button
      className="modern-icon-button group"
      onClick={onClick}
      aria-label="Search"
      title="Search (⌘K)"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      
      {/* Keyboard shortcut hint for desktop */}
      <span className="hidden xl:flex items-center gap-1 text-xs font-medium ml-2" style={{ color: '#40606D' }}>
        <kbd className="modern-kbd">⌘</kbd>
        <kbd className="modern-kbd">K</kbd>
      </span>
    </button>
  );
}
