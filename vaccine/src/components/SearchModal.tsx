'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SearchResult {
  title: string;
  href: string;
  category?: string;
  description?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Search index - includes main pages and content
const searchIndex: SearchResult[] = [
  // Main pages
  { title: 'Home', href: '/', category: 'Main' },
  { title: 'Gallery', href: '/gallery', category: 'Main' },
  
  // Non-HCP pages
  { title: 'غير العاملين بالمجال الطبي', href: '/non-hcp', category: 'For Public' },
  { title: 'تطعيمات الأطفال', href: '/children-vaccines', category: 'For Public' },
  { title: 'تطعيمات الكبار', href: '/adult-vaccines', category: 'For Public' },
  { title: 'التطعيمات', href: '/vaccinations', category: 'For Public' },
  { title: 'معلومات تهمك', href: '/important-info', category: 'For Public' },
  { title: 'ما الجديد', href: '/whats-new', category: 'For Public' },
  { title: 'أسئلة شائعة', href: '/faq', category: 'For Public' },
  
  // Children vaccines
  { title: 'عند الميلاد / At Birth', href: '/at-birth', category: 'Children Vaccines' },
  { title: 'Zero Dose', href: '/zero-dose', category: 'Children Vaccines' },
  { title: 'شهرين / Two Months', href: '/two-months', category: 'Children Vaccines' },
  { title: 'أربعة أشهر / Four Months', href: '/four-months', category: 'Children Vaccines' },
  { title: 'ستة أشهر / Six Months', href: '/six-months', category: 'Children Vaccines' },
  { title: 'تسعة أشهر / Nine Months', href: '/nine-months', category: 'Children Vaccines' },
  { title: 'سنة واحدة / One Year', href: '/one-year', category: 'Children Vaccines' },
  { title: 'السنة الثانية / Second Year', href: '/second-year', category: 'Children Vaccines' },
  
  // Disease-specific pages (Public)
  { title: 'BCG / الدرن', href: '/bcg', category: 'Vaccines' },
  { title: 'Tuberculosis', href: '/tuberculosis', category: 'Vaccines' },
  { title: 'Polio / شلل الأطفال', href: '/polio', category: 'Vaccines' },
  { title: 'Hepatitis A / التهاب الكبد أ', href: '/hepatitis-a', category: 'Vaccines' },
  { title: 'Hepatitis B / التهاب الكبد ب', href: '/hepatitis-b', category: 'Vaccines' },
  { title: 'Diphtheria / الدفتيريا', href: '/diphtheria', category: 'Vaccines' },
  { title: 'Tetanus / الكزاز', href: '/tetanus', category: 'Vaccines' },
  { title: 'Pertussis / السعال الديكي', href: '/pertussis', category: 'Vaccines' },
  { title: 'MMR / الحصبة', href: '/mmr', category: 'Vaccines' },
  { title: 'Rotavirus / الروتا', href: '/rotavirus', category: 'Vaccines' },
  { title: 'Chickenpox / الجديري المائي', href: '/chickenpox', category: 'Vaccines' },
  { title: 'HPV', href: '/hpv', category: 'Vaccines' },
  { title: 'HIB', href: '/hib', category: 'Vaccines' },
  { title: 'Influenza / الإنفلونزا', href: '/influenza', category: 'Vaccines' },
  { title: 'Meningitis', href: '/meningitis', category: 'Vaccines' },
  { title: 'HB Immunoglobulin', href: '/hb-immunoglobulin', category: 'Vaccines' },
  
  // Anti-venom pages
  { title: 'Anti-scorpion / عقرب', href: '/anti-scorpion', category: 'Anti-venom' },
  { title: 'Anti-snake / ثعبان', href: '/anti-snake', category: 'Anti-venom' },
  { title: 'Anti-viper / أفعى', href: '/anti-viper', category: 'Anti-venom' },
  
  // HCP Resources
  { title: 'HCP Resources', href: '/hcp-resources', category: 'HCP' },
  { title: 'Vaccination Basics', href: '/hcp-vaccination-basics', category: 'HCP' },
  { title: 'Documents', href: '/hcp-documents', category: 'HCP' },
  { title: 'Vaccines and Sera', href: '/hcp-vaccines-sera', category: 'HCP' },
  { title: 'Special Populations', href: '/hcp-special-populations', category: 'HCP' },
  { title: 'Global Vaccine Updates', href: '/hcp-vaccine-updates', category: 'HCP' },
  { title: 'FAQ', href: '/hcp-faq', category: 'HCP' },
  
  // HCP Sub-pages
  { title: 'How do vaccines work?', href: '/hcp-how-vaccines-work', category: 'HCP' },
  { title: 'Herd immunity', href: '/hcp-herd-immunity', category: 'HCP' },
  { title: 'Types of vaccines', href: '/hcp-types-of-vaccines', category: 'HCP' },
  { title: 'Vaccine administration', href: '/hcp-vaccine-administration', category: 'HCP' },
  { title: 'Vaccine composition', href: '/hcp-vaccine-composition', category: 'HCP' },
  { title: 'Vaccine release', href: '/hcp-vaccine-release', category: 'HCP' },
  
  // HCP Disease pages
  { title: 'HCP - Influenza', href: '/hcp/influenza', category: 'HCP Vaccines' },
  { title: 'HCP - HIB', href: '/hcp/hib', category: 'HCP Vaccines' },
  { title: 'HCP - Hepatitis A', href: '/hcp/hepatitis-a', category: 'HCP Vaccines' },
  { title: 'HCP - Hepatitis B', href: '/hcp/hepatitis-b', category: 'HCP Vaccines' },
  { title: 'HCP - Hepatitis A&B', href: '/hcp/hepatitis-a-b', category: 'HCP Vaccines' },
  { title: 'HCP - Diphtheria', href: '/hcp/diphtheria', category: 'HCP Vaccines' },
  { title: 'HCP - HPV', href: '/hcp/hpv', category: 'HCP Vaccines' },
  { title: 'HCP - Meningococcal', href: '/hcp/meningococcal', category: 'HCP Vaccines' },
  { title: 'HCP - MMR', href: '/hcp/mmr', category: 'HCP Vaccines' },
  { title: 'HCP - Pneumococcal', href: '/hcp/pneumococcal', category: 'HCP Vaccines' },
  { title: 'HCP - Polio', href: '/hcp/polio', category: 'HCP Vaccines' },
  { title: 'HCP - Rabies', href: '/hcp/rabirs', category: 'HCP Vaccines' },
  { title: 'HCP - Rotavirus', href: '/hcp/rota', category: 'HCP Vaccines' },
  { title: 'HCP - RSV', href: '/hcp/rsv', category: 'HCP Vaccines' },
  { title: 'HCP - Shingles', href: '/hcp/shingles', category: 'HCP Vaccines' },
  { title: 'HCP - Tetanus', href: '/hcp/tetanus', category: 'HCP Vaccines' },
  { title: 'HCP - Varicella', href: '/hcp/varicella', category: 'HCP Vaccines' },
  { title: 'HCP - Yellow Fever', href: '/hcp/yellow-fever', category: 'HCP Vaccines' },
  
  // FAQ pages
  { title: 'FAQ - Hepatitis A', href: '/faq/hepatitis-a', category: 'FAQ' },
  { title: 'FAQ - Hepatitis B', href: '/faq/hepatitis-b', category: 'FAQ' },
  { title: 'FAQ - HepA+HepB', href: '/faq/hepa-hepb', category: 'FAQ' },
  { title: 'FAQ - HIB', href: '/faq/hib', category: 'FAQ' },
  { title: 'FAQ - HPV', href: '/faq/hpv', category: 'FAQ' },
  { title: 'FAQ - Influenza', href: '/faq/influenza', category: 'FAQ' },
  { title: 'FAQ - MMR', href: '/faq/mmr', category: 'FAQ' },
  { title: 'FAQ - Meningococcal ACWY', href: '/faq/meningococcal-acwy', category: 'FAQ' },
  { title: 'FAQ - Meningococcal B', href: '/faq/meningococcal-b', category: 'FAQ' },
  { title: 'FAQ - Pneumococcal', href: '/faq/pneumococcal', category: 'FAQ' },
  { title: 'FAQ - Rabies', href: '/faq/rabies', category: 'FAQ' },
  { title: 'FAQ - Rotavirus', href: '/faq/rotavirus', category: 'FAQ' },
  { title: 'FAQ - RSV', href: '/faq/rsv', category: 'FAQ' },
  { title: 'FAQ - Varicella', href: '/faq/varicella', category: 'FAQ' },
  { title: 'FAQ - Zoster', href: '/faq/zoster', category: 'FAQ' },
  { title: 'FAQ - Scheduling', href: '/faq/scheduling', category: 'FAQ' },
  { title: 'FAQ - Administering Vaccines', href: '/faq/administering-vaccines', category: 'FAQ' },
  { title: 'FAQ - Contraindications & Precautions', href: '/faq/contraindications-precautions', category: 'FAQ' },
  { title: 'FAQ - BCG', href: '/faq/bcg', category: 'FAQ' },
  
  // Other pages
  { title: 'Disclaimer', href: '/disclaimer', category: 'Legal' },
  { title: 'Copyright & Content Policy', href: '/copy', category: 'Legal' },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    const filtered = searchIndex.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(searchTerm);
      const categoryMatch = item.category?.toLowerCase().includes(searchTerm);
      const hrefMatch = item.href.toLowerCase().includes(searchTerm);
      return titleMatch || categoryMatch || hrefMatch;
    });

    // Sort by relevance (exact matches first)
    filtered.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      const aExact = aTitle.startsWith(searchTerm);
      const bExact = bTitle.startsWith(searchTerm);
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      return aTitle.localeCompare(bTitle);
    });

    setResults(filtered.slice(0, 10)); // Limit to 10 results
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        router.push(results[selectedIndex].href);
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="search-backdrop"
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          zIndex: 9998,
          animation: 'fadeIn 0.2s ease',
        }}
      />
      
      {/* Modal */}
      <div
        className="search-modal"
        style={{
          position: 'fixed',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '600px',
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          zIndex: 9999,
          animation: 'slideDown 0.3s ease',
          maxHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Search Input */}
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(139, 115, 85, 0.1)' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            background: 'rgba(139, 115, 85, 0.05)',
            borderRadius: '12px',
            padding: '0.75rem 1rem',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#40606D', flexShrink: 0 }}>
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for vaccines, diseases, or pages..."
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontSize: '1rem',
                color: '#40606D',
                width: '100%',
              }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                style={{
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  color: '#40606D',
                  padding: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
                aria-label="Clear search"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div style={{ 
          overflowY: 'auto', 
          padding: '0.5rem',
          flex: 1,
        }}>
          {query.trim() === '' ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#40606D' }}>
              <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Start typing to search...</p>
              <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>
                Search for vaccines, diseases, FAQ pages, or any content on the site
              </p>
            </div>
          ) : results.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#40606D' }}>
              <p>No results found for "{query}"</p>
              <p style={{ fontSize: '0.875rem', opacity: 0.7, marginTop: '0.5rem' }}>
                Try a different search term
              </p>
            </div>
          ) : (
            <div>
              {results.map((result, index) => (
                <Link
                  key={result.href}
                  href={result.href}
                  onClick={onClose}
                  style={{
                    display: 'block',
                    padding: '1rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: '#40606D',
                    background: index === selectedIndex ? 'rgba(139, 115, 85, 0.1)' : 'transparent',
                    transition: 'background 0.2s ease',
                    border: index === selectedIndex ? '1px solid rgba(139, 115, 85, 0.2)' : '1px solid transparent',
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                        {result.title}
                      </div>
                      {result.category && (
                        <div style={{ fontSize: '0.75rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          {result.category}
                        </div>
                      )}
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.4, flexShrink: 0, marginTop: '0.25rem' }}>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div style={{ 
          padding: '0.75rem 1.5rem', 
          borderTop: '1px solid rgba(139, 115, 85, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
          color: '#40606D',
          opacity: 0.6,
        }}>
          <span>Use ↑↓ to navigate, Enter to select, Esc to close</span>
          <span>Press Esc to close</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </>
  );
}


