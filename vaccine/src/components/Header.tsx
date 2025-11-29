'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchModal from './SearchModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
      if (event.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { 
      href: '/non-hcp', 
      label: 'غير العاملين بالمجال الطبي',
      submenu: [
        { href: '/children-vaccines', label: 'تطعيمات الأطفال' },
        { href: '/adult-vaccines', label: 'تطعيمات الكبار' },
        { href: '/vaccinations', label: 'التطعيمات' },
        { href: '/important-info', label: 'معلومات تهمك' },
        { href: '/whats-new', label: 'ما الجديد' },
        { href: '/non-hcp/common-questions', label: 'أسئلة شائعة' },
      ]
    },
    { 
      href: '/hcp-resources', 
      label: 'HCP',
      submenu: [
        { href: '/hcp-vaccination-basics', label: 'Vaccination Basics' },
        { href: '/hcp-documents', label: 'Documents' },
        { href: '/hcp-vaccines-sera', label: 'Vaccines and Sera' },
        { href: '/hcp-special-populations', label: 'Special Populations' },
        { href: '/hcp-vaccine-updates', label: 'Global Vaccine Updates' },
        { href: '/hcp-faq', label: 'FAQ' },
      ]
    },
    { href: '/gallery', label: 'Gallery' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <Link href="/" className="logo-link">
          <div className="logo-box">
            <Image
              src="/logonew.jpeg"
              alt="Vaccine Talk"
              width={180}
              height={80}
              priority
              className="logo-image"
              style={{ width: 'auto', height: '60px' }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <div className="nav-box">
            {navLinks.map((link, index) => (
              <div 
                key={link.href} 
                className="nav-item"
                onMouseEnter={() => link.submenu && setIsDropdownOpen(true)}
                onMouseLeave={() => link.submenu && setIsDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'nav-link-active' : ''}`}
                >
                  {link.label}
                </Link>
                {link.submenu && isDropdownOpen && (
                  <div className="dropdown-menu">
                    {link.submenu.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className={`dropdown-link ${pathname === subLink.href ? 'dropdown-link-active' : ''}`}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search... (⌘K)"
              className="search-input"
              aria-label="Search"
              onFocus={() => setIsSearchOpen(true)}
              onClick={() => setIsSearchOpen(true)}
              readOnly
              style={{ cursor: 'pointer' }}
            />
            <button 
              className="search-btn" 
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
              title="Search (⌘K or Ctrl+K)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>

          <button 
            className="menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div className="mobile-backdrop" onClick={() => {
            setIsMobileMenuOpen(false);
            setOpenMobileSubmenu(null);
          }} />
          <div className="mobile-menu">
            <nav style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              {navLinks.map((link) => (
                <div key={link.href} className="mobile-menu-item">
                  {link.submenu ? (
                    <>
                      <button
                        className={`mobile-link mobile-link-with-submenu ${pathname === link.href ? 'mobile-link-active' : ''}`}
                        onClick={() => setOpenMobileSubmenu(openMobileSubmenu === link.href ? null : link.href)}
                        aria-expanded={openMobileSubmenu === link.href}
                        type="button"
                      >
                        <span>{link.label}</span>
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          className={`mobile-submenu-icon ${openMobileSubmenu === link.href ? 'mobile-submenu-icon-open' : ''}`}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                      {openMobileSubmenu === link.href && (
                        <div className="mobile-submenu">
                          {link.submenu.map((subLink) => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              className={`mobile-submenu-link ${pathname === subLink.href ? 'mobile-submenu-link-active' : ''}`}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setOpenMobileSubmenu(null);
                              }}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`mobile-link ${pathname === link.href ? 'mobile-link-active' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}