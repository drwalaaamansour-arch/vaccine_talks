'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import ArticleMetaDate from '@/components/ArticleMetaDate';
import type {
  ChildAgeVaccineGroup,
  ChildAgeVaccineItem,
  ChildAgeVaccinesPageConfig,
} from '@/data/child-age-vaccines/types';
import { ARTICLE_META } from '@/lib/article-meta';

function normalizeSearch(value: string) {
  return value.trim().toLowerCase();
}

function matchesVaccine(item: ChildAgeVaccineItem, query: string) {
  const q = normalizeSearch(query);
  if (!q) return true;
  return (
    item.ar.includes(query.trim()) ||
    item.en.toLowerCase().includes(q) ||
    item.keywords.includes(q)
  );
}

function filterGroup(group: ChildAgeVaccineGroup, query: string): ChildAgeVaccineGroup {
  return {
    ...group,
    items: group.items.filter((item) => matchesVaccine(item, query)),
  };
}

type CategoryFilter = 'all' | 'mandatory' | 'additional';

const CATEGORY_FILTERS: { id: CategoryFilter; labelAr: string; labelEn: string }[] = [
  { id: 'all', labelAr: 'الكل', labelEn: 'All' },
  { id: 'mandatory', labelAr: 'إجبارية', labelEn: 'Mandatory' },
  { id: 'additional', labelAr: 'إضافية', labelEn: 'Additional' },
];

type ChildAgeVaccinesPageProps = {
  config: ChildAgeVaccinesPageConfig;
};

export default function ChildAgeVaccinesPage({ config }: ChildAgeVaccinesPageProps) {
  const meta = ARTICLE_META[config.metaKey];
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');

  const mandatoryCount = config.groups.find((g) => g.id === 'mandatory')?.items.length ?? 0;
  const additionalCount = config.groups.find((g) => g.id === 'additional')?.items.length ?? 0;
  const totalCount = config.groups.reduce((sum, g) => sum + g.items.length, 0);
  const hasMandatory = mandatoryCount > 0;
  const hasAdditional = additionalCount > 0;
  const showCategoryControls = hasMandatory && hasAdditional;

  const activeCategoryFilter = useMemo(() => {
    if (categoryFilter === 'mandatory' && !hasMandatory) return 'all';
    if (categoryFilter === 'additional' && !hasAdditional) return 'all';
    return categoryFilter;
  }, [categoryFilter, hasMandatory, hasAdditional]);

  const visibleCategoryFilters = useMemo(
    () =>
      CATEGORY_FILTERS.filter(
        (tab) =>
          tab.id === 'all' ||
          (tab.id === 'mandatory' && hasMandatory) ||
          (tab.id === 'additional' && hasAdditional),
      ),
    [hasMandatory, hasAdditional],
  );

  const filteredGroups = useMemo(
    () =>
      config.groups
        .filter((group) => activeCategoryFilter === 'all' || group.id === activeCategoryFilter)
        .map((group) => filterGroup(group, query))
        .filter((group) => group.items.length > 0),
    [config.groups, query, activeCategoryFilter],
  );

  const visibleCount = filteredGroups.reduce((sum, g) => sum + g.items.length, 0);

  function categoryCount(id: CategoryFilter) {
    if (id === 'all') return totalCount;
    return config.groups.find((g) => g.id === id)?.items.length ?? 0;
  }

  return (
    <div className="min-h-screen child-age-vax-page vax-hub-page" dir="rtl">
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

      <section className="about-section child-age-vax-section">
        <div className="about-elegant-card vax-hub-elegant child-age-vax-elegant">
          <div className="card-corner card-corner-tl"></div>
          <div className="card-corner card-corner-tr"></div>
          <div className="card-corner card-corner-bl"></div>
          <div className="card-corner card-corner-br"></div>

          <div className="vax-hub-inner child-age-vax-inner">
            <Link href="/children-vaccines" className="child-age-vax-back">
              ← العودة لتطعيمات الأطفال
            </Link>

            <header className="vax-hub-hero child-age-vax-hero">
              <div className="vax-hub-hero-glow" aria-hidden />
              <span className="vax-hub-hero-tag">{config.hero.tag}</span>
              <h2 className="vax-hub-hero-title">{config.hero.titleAr}</h2>
              <p className="vax-hub-hero-subtitle hub-en" lang="en">
                {config.hero.titleEn}
              </p>
              <p className="vax-hub-hero-lead">{config.hero.leadAr}</p>
              <p className="child-age-vax-hero-lead-en hub-en" lang="en">
                {config.hero.leadEn}
              </p>
              <div className="hub-hero-meta">
                <ArticleMetaDate {...meta} locale="ar" align="center" compact />
              </div>
            </header>

            <div className="child-age-vax-featured-wrap">
              <div className="child-age-vax-featured">
                <Image
                  src={config.hero.imageSrc}
                  alt={config.hero.imageAlt}
                  width={600}
                  height={450}
                  className="child-age-vax-featured-img"
                  sizes="(max-width: 640px) 100vw, 420px"
                  priority
                />
              </div>
            </div>

            {showCategoryControls ? (
              <div className="child-age-vax-categories" role="tablist" aria-label="Vaccine category">
                {visibleCategoryFilters.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeCategoryFilter === tab.id}
                    className={`child-age-vax-category-btn${activeCategoryFilter === tab.id ? ' child-age-vax-category-btn--active' : ''}${tab.id === 'mandatory' ? ' child-age-vax-category-btn--mandatory' : ''}${tab.id === 'additional' ? ' child-age-vax-category-btn--additional' : ''}`}
                    onClick={() => setCategoryFilter(tab.id)}
                  >
                    <span className="child-age-vax-category-ar">{tab.labelAr}</span>
                    <span className="child-age-vax-category-en hub-en" lang="en">
                      {tab.labelEn}
                    </span>
                    <span className="child-age-vax-category-count">{categoryCount(tab.id)}</span>
                  </button>
                ))}
              </div>
            ) : null}

            <div
              className={`vax-hub-stats child-age-vax-stats${showCategoryControls ? ' vax-hub-stats--two' : ''}`}
            >
              {hasMandatory ? (
                showCategoryControls ? (
                  <button
                    type="button"
                    className={`vax-hub-stat child-age-vax-stat-btn child-age-vax-stat-btn--mandatory${activeCategoryFilter === 'mandatory' ? ' child-age-vax-stat-btn--active' : ''}`}
                    onClick={() => setCategoryFilter('mandatory')}
                    aria-pressed={activeCategoryFilter === 'mandatory'}
                  >
                    <span className="vax-hub-stat-num">{mandatoryCount}</span>
                    <span className="vax-hub-stat-label">إجبارية · Mandatory</span>
                  </button>
                ) : (
                  <div className="vax-hub-stat">
                    <span className="vax-hub-stat-num">{mandatoryCount}</span>
                    <span className="vax-hub-stat-label">إجبارية · Mandatory</span>
                  </div>
                )
              ) : null}
              {hasAdditional ? (
                showCategoryControls ? (
                  <button
                    type="button"
                    className={`vax-hub-stat child-age-vax-stat-btn child-age-vax-stat-btn--additional${activeCategoryFilter === 'additional' ? ' child-age-vax-stat-btn--active' : ''}`}
                    onClick={() => setCategoryFilter('additional')}
                    aria-pressed={activeCategoryFilter === 'additional'}
                  >
                    <span className="vax-hub-stat-num">{additionalCount}</span>
                    <span className="vax-hub-stat-label">إضافية · Additional</span>
                  </button>
                ) : (
                  <div className="vax-hub-stat">
                    <span className="vax-hub-stat-num">{additionalCount}</span>
                    <span className="vax-hub-stat-label">إضافية · Additional</span>
                  </div>
                )
              ) : null}
            </div>

            <div className="vax-hub-search-wrap">
              <span className="vax-hub-search-icon" aria-hidden>
                🔍
              </span>
              <input
                type="search"
                className="vax-hub-search"
                placeholder="دور على لقاح… Search a vaccine…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search vaccines for this age"
                dir="rtl"
              />
              {query ? (
                <button
                  type="button"
                  className="vax-hub-search-clear"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              ) : null}
            </div>

            {query ? (
              <p className="vax-hub-search-meta">
                {visibleCount > 0
                  ? `عرض ${visibleCount} من ${totalCount} · Showing ${visibleCount} of ${totalCount}`
                  : 'مفيش نتائج · No matches — جرّب كلمة تانية'}
              </p>
            ) : null}

            {filteredGroups.length === 0 ? (
              <p className="child-age-vax-empty">مفيش نتائج — جرّب اسم لقاح تاني أو امسح البحث.</p>
            ) : (
              <div className="child-age-vax-groups">
              {filteredGroups.map((group) => (
                <section
                  key={group.id}
                  className={`child-age-vax-group child-age-vax-group--${group.id}`}
                  aria-labelledby={`${group.id}-heading`}
                >
                  <header className="child-age-vax-group-head">
                    <span className={`child-age-vax-group-badge child-age-vax-group-badge--${group.id}`}>
                      {group.id === 'mandatory' ? '✓ إجبارية' : '＋ إضافية'}
                    </span>
                    <h3 id={`${group.id}-heading`} className="child-age-vax-group-title">
                      <span className="child-age-vax-group-ar">{group.titleAr}</span>
                      <span className="child-age-vax-group-en hub-en" lang="en">
                        {group.titleEn}
                      </span>
                    </h3>
                    <p className="child-age-vax-group-desc">
                      {group.id === 'mandatory'
                        ? 'لقاحات على الجدول الوطني المصري — مطلوبة لكل الأطفال.'
                        : 'لقاحات موصى بها — اختيارية حسب توفرها والنصيحة الطبية.'}
                      <span className="child-age-vax-group-desc-en hub-en" lang="en">
                        {group.id === 'mandatory'
                          ? 'On Egypt’s national schedule — required for all children.'
                          : 'Recommended vaccines — optional based on availability and medical advice.'}
                      </span>
                    </p>
                    <span className="child-age-vax-group-count">
                      {group.items.length} لقاح · {group.items.length} vaccine{group.items.length === 1 ? '' : 's'}
                    </span>
                  </header>
                  <div className="vax-hub-grid child-age-vax-grid">
                    {group.items.map((item) => (
                      <Link key={item.id} href={item.href} className="vax-hub-tile">
                        <span className="vax-hub-tile-emoji" aria-hidden>
                          {item.emoji}
                        </span>
                        <span className="vax-hub-tile-ar">{item.ar}</span>
                        <span className="vax-hub-tile-en hub-en" lang="en">
                          {item.en}
                        </span>
                        <span className="vax-hub-tile-arrow" aria-hidden>
                          ←
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
