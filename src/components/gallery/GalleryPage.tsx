'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import {
  GALLERY_IMAGE_COUNT,
  GALLERY_MEDIA,
  GALLERY_MEDIA_COUNT,
  GALLERY_VIDEO_COUNT,
  type GalleryMediaItem,
} from '@/data/gallery-media';
import { ARTICLE_META } from '@/lib/article-meta';

const GALLERY_HERO = {
  tag: 'Vaccine Talk · Egypt',
  title: 'Gallery',
  titleAr: 'المعرض',
  subtitle: 'Posts, graphics & videos from Vaccine Talk',
  lead: 'Browse educational visuals and short videos shared on our channels — tap any item to view full size.',
} as const;

type MediaFilter = 'all' | 'image' | 'video';

function mediaSrc(filename: string) {
  return `/posts/${encodeURIComponent(filename)}`;
}

/** Filenames saved with legacy encoding show as mojibake — use a friendly label instead. */
function isGarbledFilename(name: string) {
  const base = name.replace(/\.[^.]+$/, '');
  if (/[╪┘╞╪╬╧╩╦╤╫╢]/.test(base)) return true;
  if (/[\u0080-\u00BF]{3,}/.test(base) && !/[\u0600-\u06FF]/.test(base)) return true;
  return false;
}

function displayLabel(filename: string, index: number, kind: GalleryMediaItem['kind']) {
  if (isGarbledFilename(filename)) {
    return kind === 'video' ? `Video ${index + 1}` : `Post ${index + 1}`;
  }
  const base = filename.replace(/\.[^.]+$/, '');
  if (base.length <= 40) return base;
  return `${base.slice(0, 37)}…`;
}

function matchesQuery(item: GalleryMediaItem, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return item.filename.toLowerCase().includes(q);
}

export default function GalleryPage() {
  const meta = ARTICLE_META.gallery;
  const [filter, setFilter] = useState<MediaFilter>('all');
  const [query, setQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleMedia = useMemo(() => {
    return GALLERY_MEDIA.filter((item) => {
      if (filter !== 'all' && item.kind !== filter) return false;
      return matchesQuery(item, query);
    });
  }, [filter, query]);

  const lightboxItem =
    lightboxIndex !== null ? visibleMedia[lightboxIndex] ?? null : null;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null || visibleMedia.length === 0) return i;
      return (i - 1 + visibleMedia.length) % visibleMedia.length;
    });
  }, [visibleMedia.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null || visibleMedia.length === 0) return i;
      return (i + 1) % visibleMedia.length;
    });
  }, [visibleMedia.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  useEffect(() => {
    if (lightboxIndex !== null && lightboxIndex >= visibleMedia.length) {
      setLightboxIndex(visibleMedia.length > 0 ? 0 : null);
    }
  }, [visibleMedia.length, lightboxIndex]);

  return (
    <div className="min-h-screen gallery-page" dir="ltr" lang="en">
      <Header />

      <main className="hero">
        <h1 className="hero-title animate-fade-in-up">
          Vaccine
          <br />
          Talk
        </h1>
        <p className="hero-subtitle animate-fade-in-up animate-delay-1">(Egyptian Edition)</p>
        <div className="hero-quote animate-fade-in-up animate-delay-2">
          <p>&quot;Everything you need to know about</p>
          <p>vaccines in Egypt&quot;</p>
        </div>
      </main>

      <section className="about-section gallery-section">
        <div className="about-elegant-card gallery-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="gallery-inner">
            <Link href="/" className="gallery-back">
              ← Back to home
            </Link>

            <header className="vax-hub-hero gallery-hero">
              <div className="vax-hub-hero-glow" aria-hidden />
              <span className="vax-hub-hero-tag">{GALLERY_HERO.tag}</span>
              <h1 className="vax-hub-hero-title gallery-page-title">
                <span className="gallery-page-title-en">
                  <span aria-hidden>🖼️</span> {GALLERY_HERO.title}
                </span>
                <span className="gallery-title-ar" lang="ar" dir="rtl">
                  {GALLERY_HERO.titleAr}
                </span>
              </h1>
              <p className="vax-hub-hero-subtitle hub-en" lang="en" style={{ fontStyle: 'normal', opacity: 0.95 }}>
                {GALLERY_HERO.subtitle}
              </p>
              <p className="vax-hub-hero-lead">{GALLERY_HERO.lead}</p>
              <div className="hub-hero-meta" style={{ marginTop: '0.85rem' }}>
                <ArticleMetaDate {...meta} locale="en" align="center" compact />
              </div>
            </header>

            <div className="gallery-stats">
              <span className="gallery-stat">
                <strong>{GALLERY_MEDIA_COUNT}</strong> total
              </span>
              <span className="gallery-stat">
                <strong>{GALLERY_IMAGE_COUNT}</strong> images
              </span>
              <span className="gallery-stat">
                <strong>{GALLERY_VIDEO_COUNT}</strong> videos
              </span>
            </div>

            <div className="gallery-toolbar">
              <div className="gallery-filters" role="tablist" aria-label="Media type">
                {(
                  [
                    ['all', 'All', GALLERY_MEDIA_COUNT],
                    ['image', 'Images', GALLERY_IMAGE_COUNT],
                    ['video', 'Videos', GALLERY_VIDEO_COUNT],
                  ] as const
                ).map(([value, label, count]) => (
                  <button
                    key={value}
                    type="button"
                    role="tab"
                    aria-selected={filter === value}
                    className={`gallery-filter-btn${filter === value ? ' gallery-filter-btn--active' : ''}`}
                    onClick={() => setFilter(value)}
                  >
                    {label}
                    <span className="gallery-filter-count">{count}</span>
                  </button>
                ))}
              </div>

              <div className="vax-hub-search-wrap gallery-search" dir="ltr">
                <span className="vax-hub-search-icon" aria-hidden>
                  🔍
                </span>
                <input
                  id="gallery-search"
                  type="search"
                  className="vax-hub-search"
                  placeholder="Search by file name…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search gallery"
                  autoComplete="off"
                  dir="ltr"
                />
                {query ? (
                  <button
                    type="button"
                    className="vax-hub-search-clear"
                    onClick={() => setQuery('')}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                ) : null}
              </div>
              {query ? (
                <p className="vax-hub-search-meta gallery-search-meta">
                  Showing {visibleMedia.length} of {GALLERY_MEDIA_COUNT} items
                </p>
              ) : null}
            </div>

            {visibleMedia.length === 0 ? (
              <p className="gallery-empty">No media matches your filters. Try another search or show all items.</p>
            ) : (
              <ul className="gallery-grid" aria-label="Gallery media">
                {visibleMedia.map((item, index) => (
                  <li key={item.id} className="gallery-card-wrap">
                    <button
                      type="button"
                      className="gallery-card"
                      onClick={() => setLightboxIndex(index)}
                      aria-label={`Open ${item.kind}: ${displayLabel(item.filename, index, item.kind)}`}
                    >
                      {item.kind === 'video' ? (
                        <>
                          <video
                            className="gallery-card-media"
                            src={mediaSrc(item.filename)}
                            muted
                            playsInline
                            preload="metadata"
                            aria-hidden
                          />
                          <span className="gallery-card-play" aria-hidden>
                            ▶
                          </span>
                        </>
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          className="gallery-card-media"
                          src={mediaSrc(item.filename)}
                          alt=""
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.classList.add('gallery-card-media--error');
                          }}
                        />
                      )}
                      <span className="gallery-card-badge">{item.kind === 'video' ? 'Video' : 'Image'}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {lightboxItem && lightboxIndex !== null ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Media viewer"
          onClick={closeLightbox}
        >
          <div className="gallery-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="gallery-lightbox-close" onClick={closeLightbox} aria-label="Close">
              ×
            </button>
            <button type="button" className="gallery-lightbox-nav gallery-lightbox-nav--prev" onClick={goPrev} aria-label="Previous">
              ‹
            </button>
            <button type="button" className="gallery-lightbox-nav gallery-lightbox-nav--next" onClick={goNext} aria-label="Next">
              ›
            </button>
            <p className="gallery-lightbox-caption">
              <span>{displayLabel(lightboxItem.filename, lightboxIndex, lightboxItem.kind)}</span>
              <span className="gallery-lightbox-counter">
                {lightboxIndex + 1} / {visibleMedia.length}
              </span>
            </p>
            {lightboxItem.kind === 'video' ? (
              <video
                key={lightboxItem.filename}
                className="gallery-lightbox-media"
                src={mediaSrc(lightboxItem.filename)}
                controls
                autoPlay
                playsInline
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="gallery-lightbox-media"
                src={mediaSrc(lightboxItem.filename)}
                alt={lightboxItem.filename}
              />
            )}
          </div>
        </div>
      ) : null}

      <SiteFooter />
    </div>
  );
}
