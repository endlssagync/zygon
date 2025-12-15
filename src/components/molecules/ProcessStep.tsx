import React from 'react';

export interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  delay = 0,
  className = '',
}) => {
  return (
    <div
      className={`flex gap-6 ${className}`}
      style={{
        animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s forwards`,
        opacity: 0,
      }}
    >
      {/* Number Circle */}
      <div className="flex-shrink-0">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
          style={{
            background: 'linear-gradient(135deg, #0EA5E9 0%, #10B981 100%)',
            color: '#FFFFFF',
          }}
        >
          {number}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#FFFFFF' }}>
          {title}
        </h3>
        <p className="text-base leading-relaxed" style={{ color: '#A1A1A1' }}>
          {description}
        </p>
      </div>
    </div>
  );
};


