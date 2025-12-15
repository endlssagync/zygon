import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../atoms/Button';

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    // Apply dark mode on mount
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link and we're on a different page, navigate first
    if (href.startsWith('#') && location.pathname !== '/') {
      e.preventDefault();
      window.location.href = `/${href}`;
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Talent', href: '/talent' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`w-full relative ${className}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={handleLinkClick}>
          <img 
            src="/Zygon Logo.svg" 
            alt="Zygon Talent Agency Logo" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold" style={{ color: '#FFFFFF' }}>Zygon Talent Agency</span>
        </Link>

        {/* Desktop Navigation Items */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            if (item.href.startsWith('#')) {
              // Hash link for same-page navigation
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-medium transition-colors duration-base"
                  style={{ color: '#FFFFFF' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  {item.label}
                </a>
              );
            }
            // Regular route link
            return (
              <Link
                key={item.label}
                to={item.href}
                className="font-medium transition-colors duration-base"
                style={{ color: '#FFFFFF' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:inline-flex">
            <Button variant="primary">
              Contact Us
            </Button>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span 
              className="w-full h-0.5 rounded transition-all duration-300"
              style={{ 
                backgroundColor: '#FFFFFF',
                transform: isMobileMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none'
              }}
            ></span>
            <span 
              className="w-full h-0.5 rounded transition-all duration-300"
              style={{ 
                backgroundColor: '#FFFFFF',
                opacity: isMobileMenuOpen ? 0 : 1
              }}
            ></span>
            <span 
              className="w-full h-0.5 rounded transition-all duration-300"
              style={{ 
                backgroundColor: '#FFFFFF',
                transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
              }}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 w-full transition-all duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          backgroundColor: '#0A0A0A',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          maxHeight: isMobileMenuOpen ? '500px' : '0',
          overflow: 'hidden',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
          {navItems.map((item) => {
            if (item.href.startsWith('#')) {
              // Hash link for same-page navigation
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block font-medium transition-colors duration-base py-2"
                  style={{ color: '#FFFFFF' }}
                >
                  {item.label}
                </a>
              );
            }
            // Regular route link
            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={handleLinkClick}
                className="block font-medium transition-colors duration-base py-2"
                style={{ color: '#FFFFFF' }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link 
            to="/contact" 
            className="inline-block mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Button variant="primary">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
