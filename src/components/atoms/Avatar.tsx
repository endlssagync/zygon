import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'base' | 'lg';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'base',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    base: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 flex items-center justify-center ${className}`}
      style={{ borderColor: '#FFFFFF', backgroundColor: '#3A3A3A' }}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-primary" />
      )}
    </div>
  );
};

