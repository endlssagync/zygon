import React from 'react';
import { Link } from 'react-router-dom';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '/#about' },
      { label: 'Services', href: '/#services' },
      { label: 'Talent', href: '/talent' },
      { label: 'Contact', href: '/#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/zygontalent/' },
  ];

  return (
    <footer className={`w-full py-12 md:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/Zygon Logo.svg" 
                alt="Zygon Talent Agency Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold" style={{ color: '#FFFFFF' }}>
                Zygon Talent Agency
              </span>
            </div>
            <p className="text-sm mb-4" style={{ color: '#A1A1A1' }}>
              Where talent meets opportunity
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
              Empowering creators, elevating brands, and building lasting partnerships through clarity, structure, and high-value strategy.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm" style={{ color: '#FFFFFF' }}>
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => {
                if (link.href.startsWith('#')) {
                  return (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-300"
                        style={{ color: '#A1A1A1' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1A1'}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-sm transition-colors duration-300"
                      style={{ color: '#A1A1A1' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1A1'}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm" style={{ color: '#FFFFFF' }}>
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: '#A1A1A1' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1A1'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-sm transition-colors duration-300"
              style={{ color: '#A1A1A1' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0EA5E9'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1A1'}
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div
          className="pt-8 border-t flex justify-between items-center"
          style={{ borderColor: '#2A2A2A' }}
        >
          <p className="text-sm" style={{ color: '#6B6B6B' }}>
            © {new Date().getFullYear()} Zygon Talent Agency. All rights reserved.
          </p>
          <a
            href="https://endlessagency.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-300"
            style={{ color: '#6B6B6B' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#6B6B6B'}
          >
            Made by Endless
          </a>
        </div>
      </div>
    </footer>
  );
};

