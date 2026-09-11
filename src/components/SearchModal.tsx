'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  filterSiteSearchResults,
  getSearchResultTitleDirection,
  navigateToSearchResult,
  type SiteSearchResult,
} from '@/lib/site-search';
import {
  getSearchUiMessages,
  resolveSiteUiLanguage,
  type SiteUiLanguage,
} from '@/lib/site-ui-messages';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SiteSearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [language, setLanguage] = useState<SiteUiLanguage>('ar');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const ui = getSearchUiMessages(language);

  useEffect(() => {
    setLanguage(resolveSiteUiLanguage(document.documentElement.lang));
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setQuery('');
    setResults([]);
    setSelectedIndex(0);

    const frame = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const filtered = filterSiteSearchResults(query);
    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = useCallback(
    (href: string) => {
      navigateToSearchResult(href, router.push, onClose);
    },
    [onClose, router]
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, Math.max(results.length - 1, 0)));
        return;
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
        return;
      }

      if (event.key === 'Enter' && results[selectedIndex]) {
        event.preventDefault();
        handleSelect(results[selectedIndex].href);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSelect, isOpen, onClose, results, selectedIndex]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <>
      <div className="search-backdrop" onClick={onClose} aria-hidden="true" />

      <div
        className="search-modal"
        role="dialog"
        aria-modal="true"
        aria-label={ui.openSearch}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="search-modal-input-wrap">
          <div className="search-modal-input-shell">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="search-modal-input-icon"
              aria-hidden
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={ui.placeholder}
              className="search-modal-input"
              aria-label={ui.openSearch}
              autoComplete="off"
              enterKeyHint="search"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="search-modal-clear"
                aria-label={ui.clear}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="search-modal-results">
          {query.trim() === '' ? (
            <div className="search-modal-empty">
              <p className="search-modal-empty-title">{ui.startTitle}</p>
              <p className="search-modal-empty-hint">{ui.startHint}</p>
            </div>
          ) : results.length === 0 ? (
            <div className="search-modal-empty">
              <p className="search-modal-empty-title">{ui.empty}</p>
              <p className="search-modal-empty-hint">{ui.emptyHint}</p>
            </div>
          ) : (
            <div>
              {results.map((result, index) => {
                const titleDirection = getSearchResultTitleDirection(result.title);

                return (
                  <Link
                    key={result.href}
                    href={result.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleSelect(result.href);
                    }}
                    className={`search-modal-result${index === selectedIndex ? ' search-modal-result--active' : ''}`}
                    aria-selected={index === selectedIndex}
                  >
                    <div className="search-modal-result-body">
                      <div
                        className="search-modal-result-title"
                        dir={titleDirection}
                        lang={titleDirection === 'rtl' ? 'ar' : 'en'}
                      >
                        {result.title}
                      </div>
                      {result.snippet && (
                        <div className="search-modal-result-snippet">{result.snippet}</div>
                      )}
                      {result.category && (
                        <div className="search-modal-result-category">{result.category}</div>
                      )}
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="search-modal-result-arrow"
                      aria-hidden
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <div className="search-modal-footer">
          <span>{ui.keyboardHint}</span>
          <button type="button" className="search-modal-close-text" onClick={onClose}>
            {ui.close}
          </button>
        </div>
      </div>
    </>,
    document.body
  );
}
