import React from 'react';
import { Avatar } from '../atoms/Avatar';

export interface AvatarGroupProps {
  avatars?: Array<{ src?: string; alt?: string }>;
  count?: number;
  maxVisible?: number;
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars = [],
  count = 0,
  maxVisible = 4,
  className = '',
}) => {
  const visibleAvatars = avatars.slice(0, maxVisible);
  const remainingCount = Math.max(0, count - maxVisible);

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex -space-x-2">
        {visibleAvatars.map((avatar, index) => (
          <div
            key={index}
            style={{
              animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.4 + index * 0.1}s forwards`,
              opacity: 0,
            }}
          >
            <Avatar src={avatar.src} alt={avatar.alt} size="base" />
          </div>
        ))}
        {remainingCount > 0 && (
          <div
            style={{
              animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.4 + maxVisible * 0.1}s forwards`,
              opacity: 0,
            }}
          >
            <div 
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold"
              style={{ backgroundColor: '#3A3A3A', borderColor: '#FFFFFF', color: '#FFFFFF' }}
            >
              +{remainingCount}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

