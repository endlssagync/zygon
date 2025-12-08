import React from 'react';
import { AvatarGroup, AvatarGroupProps } from './AvatarGroup';

export interface SocialProofProps {
  userCount: number;
  avatars?: AvatarGroupProps['avatars'];
  text?: string;
  className?: string;
}

export const SocialProof: React.FC<SocialProofProps> = ({
  userCount,
  avatars = [],
  text,
  className = '',
}) => {
  const defaultText = `Join with ${userCount}+ Creators and brands building lasting partnerships`;

  // Generate placeholder avatars if none provided
  const displayAvatars = avatars.length > 0 
    ? avatars 
    : Array.from({ length: 4 }, (_, i) => ({ 
        src: undefined, 
        alt: `Creator ${i + 1}` 
      }));

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <AvatarGroup avatars={displayAvatars} count={userCount} maxVisible={4} />
      <p
        className="text-sm"
        style={{
          color: '#A1A1A1',
          animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards`,
          opacity: 0,
        }}
      >
        {text || defaultText}
      </p>
    </div>
  );
};

