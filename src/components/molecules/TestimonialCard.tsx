import React from 'react';
import { Avatar } from '../atoms/Avatar';

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc?: string;
  delay?: number;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatarSrc,
  delay = 0,
  className = '',
}) => {
  return (
    <div
      className={`p-6 rounded-2xl ${className}`}
      style={{
        backgroundColor: '#1A1A1A',
        border: '1px solid #2A2A2A',
        animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s forwards`,
        opacity: 0,
      }}
    >
      <div className="mb-4">
        <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 24V14.4C0 9.6 1.6 5.6 4.8 2.4C8 0 12 0 16 0V4.8C12.8 4.8 10.4 5.6 8.8 7.2C7.2 8.8 6.4 11.2 6.4 14.4H16V24H0ZM16 24V14.4C16 9.6 17.6 5.6 20.8 2.4C24 0 28 0 32 0V4.8C28.8 4.8 26.4 5.6 24.8 7.2C23.2 8.8 22.4 11.2 22.4 14.4H32V24H16Z"
            fill="#0EA5E9"
            fillOpacity="0.3"
          />
        </svg>
      </div>
      <p className="text-base leading-relaxed mb-6" style={{ color: '#FFFFFF' }}>
        "{quote}"
      </p>
      <div className="flex items-center gap-3">
        {avatarSrc && <Avatar src={avatarSrc} alt={author} size="sm" />}
        <div>
          <p className="font-semibold text-sm" style={{ color: '#FFFFFF' }}>
            {author}
          </p>
          <p className="text-xs" style={{ color: '#A1A1A1' }}>
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};


