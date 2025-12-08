import React from 'react';
import { TalentCard, TalentCardProps } from './TalentCard';

export interface HorizontalTickerProps {
  items: TalentCardProps[];
  className?: string;
}

export const HorizontalTicker: React.FC<HorizontalTickerProps> = ({ items, className = '' }) => {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div 
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      {/* Scrolling content */}
      <div
        className="flex gap-6 py-4 animate-ticker-horizontal"
        style={{
          willChange: 'transform',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <TalentCard
            key={`${item.name}-${index}`}
            name={item.name}
            followers={item.followers}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

