import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../atoms/Button';

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Apply dark mode on mount
    document.documentElement.classList.add('dark');
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link and we're on a different page, navigate first
    if (href.startsWith('#') && location.pathname !== '/') {
      e.preventDefault();
      window.location.href = `/${href}`;
    }
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Talent', href: '/talent' },
  ];

  return (
    <header className={`w-full ${className}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/Zygon Logo.svg" 
            alt="Zygon Talent Agency Logo" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold" style={{ color: '#FFFFFF' }}>Zygon Talent Agency</span>
        </Link>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-8">
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
          <a href="mailto:garrett@zygontalent.agency" className="hidden sm:inline-flex">
            <Button variant="primary">
              Contact Us
            </Button>
          </a>
          
          {/* Mobile menu button */}
          <button className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
            <span className="w-full h-0.5 rounded" style={{ backgroundColor: '#FFFFFF' }}></span>
            <span className="w-full h-0.5 rounded" style={{ backgroundColor: '#FFFFFF' }}></span>
            <span className="w-full h-0.5 rounded" style={{ backgroundColor: '#FFFFFF' }}></span>
          </button>
        </div>
      </nav>
    </header>
  );
};
