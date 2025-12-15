import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  delay = 0,
  className = '',
}) => {
  return (
    <div
      className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${className}`}
      style={{
        backgroundColor: '#1A1A1A',
        border: '1px solid #2A2A2A',
        animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s forwards`,
        opacity: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#0EA5E9';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(14, 165, 233, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#2A2A2A';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {icon && (
        <div className="mb-4 text-4xl" style={{ color: '#0EA5E9' }}>
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2" style={{ color: '#FFFFFF' }}>
        {title}
      </h3>
      <p className="text-base leading-relaxed" style={{ color: '#A1A1A1' }}>
        {description}
      </p>
    </div>
  );
};


