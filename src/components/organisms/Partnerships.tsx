import React from 'react';
import { LogoGrid } from '../molecules/LogoGrid';

export interface PartnershipsProps {
  className?: string;
}

export const Partnerships: React.FC<PartnershipsProps> = ({ className = '' }) => {
  // Placeholder brand names - replace with actual logos when available
  const brands = [
    { name: 'Brand 1' },
    { name: 'Brand 2' },
    { name: 'Brand 3' },
    { name: 'Brand 4' },
    { name: 'Brand 5' },
    { name: 'Brand 6' },
    { name: 'Brand 7' },
    { name: 'Brand 8' },
    { name: 'Brand 9' },
    { name: 'Brand 10' },
    { name: 'Brand 11' },
    { name: 'Brand 12' },
  ];

  return (
    <section className={`w-full py-16 md:py-24 ${className}`} id="partnerships">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 animate-fade-in-up"
            style={{ color: '#FFFFFF', letterSpacing: '-0.025em' }}
          >
            Trusted Partners
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{
              color: '#A1A1A1',
              animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
              opacity: 0,
            }}
          >
            We work with leading brands and platforms to create meaningful partnerships
          </p>
        </div>

        {/* Logo Grid */}
        <LogoGrid logos={brands} />
      </div>
    </section>
  );
};

