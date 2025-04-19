'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  activeClassName?: string;
  className?: string;
}

const NavLink = ({ 
  href, 
  children, 
  activeClassName = "text-primary font-medium",
  className = "text-gray-800 hover:text-primary font-medium transition-colors duration-300"
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link 
      href={href} 
      className={`${className} ${isActive ? activeClassName : ''}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
