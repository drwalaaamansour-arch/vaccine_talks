'use client';

import { useState, useEffect } from 'react';
import NavLink from './NavLink';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="modern-icon-button lg:hidden"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-300"
        >
          {isOpen ? (
            <>
              <path d="M18 6L6 18" className="origin-center animate-[rotate_0.3s_ease-in-out]" />
              <path d="M6 6l12 12" className="origin-center animate-[rotate_0.3s_ease-in-out]" />
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

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="modern-mobile-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div className={`modern-mobile-menu ${isOpen ? 'modern-mobile-menu-open' : ''}`}>
        <nav className="flex flex-col gap-2 p-6">
          <NavLink href="/" className="modern-mobile-link" onClick={closeMenu}>
            <span className="modern-mobile-link-icon">🏠</span>
            Home
          </NavLink>
          
          <NavLink href="/non-hcp" className="modern-mobile-link" onClick={closeMenu}>
            <span className="modern-mobile-link-icon">👥</span>
            <span className="arabic">للجمهور</span>
          </NavLink>
          
          <NavLink href="/hcp-resources" className="modern-mobile-link" onClick={closeMenu}>
            <span className="modern-mobile-link-icon">⚕️</span>
            HCP Resources
          </NavLink>
          
          <NavLink href="/gallery" className="modern-mobile-link" onClick={closeMenu}>
            <span className="modern-mobile-link-icon">🖼️</span>
            Gallery
          </NavLink>
        </nav>

        {/* Footer info */}
        <div className="mt-auto p-6 border-t border-slate-200">
          <p className="text-xs text-center" style={{ color: '#40606D' }}>
            Vaccine Talk - Egyptian Edition
          </p>
        </div>
      </div>
    </>
  );
}
