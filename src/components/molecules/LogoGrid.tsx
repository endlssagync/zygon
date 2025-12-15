import React from 'react';

export interface LogoGridProps {
  logos: Array<{
    name: string;
    src?: string;
  }>;
  className?: string;
}

export const LogoGrid: React.FC<LogoGridProps> = ({ logos, className = '' }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 ${className}`}>
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center p-4 rounded-xl transition-all duration-300"
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #2A2A2A',
            animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + index * 0.05}s forwards`,
            opacity: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#0EA5E9';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#2A2A2A';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {logo.src ? (
            <img src={logo.src} alt={logo.name} className="max-w-full h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          ) : (
            <span className="text-sm font-semibold" style={{ color: '#A1A1A1' }}>
              {logo.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};


