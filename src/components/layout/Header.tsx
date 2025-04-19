'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import NavLink from '@/components/ui/NavLink';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll olayını dinle
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigasyon menüsü öğeleri
  const navigationItems = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Hizmetlerimiz', href: '/services' },
    { name: 'SSS', href: '/faq' },
    { name: 'İletişim', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  // Mobil menü animasyon varyantları
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Menü öğeleri animasyon varyantları
  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-white shadow-soft-md py-3 sm:py-4' 
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo_black.png" 
              alt="Gifthoria Logo" 
              className="h-8 sm:h-10 md:h-12" 
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:flex items-center space-x-6 xl:space-x-8"
        >
          {navigationItems.map((item) => (
            <NavLink key={item.name} href={item.href} activeClassName="text-primary font-medium">
              {item.name}
            </NavLink>
          ))}
          
          <div className="flex items-center space-x-4">
            <Link 
              href="https://app.gifthoria.com/" 
              className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:text-primary hover:border-primary font-medium transition-all duration-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
              Giriş Yap
            </Link>
            <Link 
              href="https://app.gifthoria.com/" 
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-full text-gray-700 hover:text-primary font-medium transition-all duration-300 flex items-center shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              Kayıt Ol
            </Link>
            <Link 
              href="https://app.gifthoria.com" 
              className="btn btn-primary rounded-full px-6 py-2.5 font-semibold text-white hover:shadow-red-glow transition-all duration-300"
            >
              Hemen Başla
            </Link>
          </div>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md transition-all duration-300"
            aria-label={isMobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
          >
            {isMobileMenuOpen ? (
              <FiX className="h-6 w-6 text-primary" />
            ) : (
              <FiMenu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial="closed"
          animate="open"
          variants={mobileMenuVariants}
          className="lg:hidden bg-white absolute top-full left-0 w-full shadow-soft-lg px-4 py-4 sm:py-6 max-h-[85vh] overflow-y-auto"
        >
          <motion.nav className="flex flex-col space-y-3 sm:space-y-4">
            {navigationItems.map((item) => (
              <motion.div key={item.name} variants={menuItemVariants}>
                <Link 
                  href={item.href} 
                  className="block px-4 py-2 text-gray-900 hover:text-primary hover:bg-gray-100 rounded-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={menuItemVariants} className="pt-2">
              <div className="flex flex-col gap-2">
                <Link 
                  href="https://app.gifthoria.com/" 
                  className="block w-full text-center rounded-full py-2.5 font-medium text-gray-700 border border-gray-300 hover:border-primary hover:text-primary flex items-center justify-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                  </svg>
                  <span>Giriş Yap</span>
                </Link>
                <Link 
                  href="https://app.gifthoria.com/" 
                  className="block w-full text-center rounded-full py-2.5 font-medium bg-gray-100 text-gray-700 border border-gray-300 shadow-sm hover:bg-gray-200 hover:border-primary hover:text-primary flex items-center justify-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                  <span>Kayıt Ol</span>
                </Link>
                <Link 
                  href="https://app.gifthoria.com" 
                  className="block w-full text-center btn btn-primary rounded-full py-2.5 font-semibold text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hemen Başla
                </Link>
              </div>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
