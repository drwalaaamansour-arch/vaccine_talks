'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({ href, children, className = '', onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        modern-nav-link
        ${isActive ? 'modern-nav-link-active' : ''}
        ${className}
      `}
    >
      {children}
      {isActive && (
        <span className="active-indicator" aria-hidden="true" />
      )}
    </Link>
  );
}
