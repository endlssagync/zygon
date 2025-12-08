import React from 'react';

export interface TickerCarouselProps {
  direction?: 'up' | 'down';
  items: { id: string; gradient: string }[];
  className?: string;
}

export const TickerCarousel: React.FC<TickerCarouselProps> = ({
  direction = 'up',
  items,
  className = '',
}) => {
  // Duplicate items for seamless loop (twice to ensure enough buffer)
  const duplicatedItems = [...items, ...items];

  return (
    <div 
      className={`relative h-full overflow-hidden rounded-2xl ${className}`}
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
      }}
    >
      {/* Scrolling content */}
      <div
        className={`flex flex-col gap-4 py-4 ${
          direction === 'up' ? 'animate-ticker-up' : 'animate-ticker-down'
        }`}
        style={{
          willChange: 'transform',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`w-full h-48 rounded-xl ${item.gradient} flex-shrink-0 transition-all duration-300 hover:scale-95 hover:shadow-lg shadow-md`}
            style={{
              transform: 'translateZ(0)',
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          />
        ))}
      </div>
    </div>
  );
};

