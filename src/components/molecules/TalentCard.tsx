import React from 'react';

export interface SocialLinks {
  youtube?: string;
  instagram?: string;
  tiktok?: string;
  facebook?: string;
  twitch?: string;
  twitter?: string;
}

export interface TalentCardProps {
  name: string;
  followers: number;
  image?: string;
  className?: string;
  socialLinks?: SocialLinks;
}

export const TalentCard: React.FC<TalentCardProps> = ({ 
  name, 
  followers, 
  image, 
  className = '',
  socialLinks 
}) => {
  // Format followers with commas and add + sign
  const formatFollowers = (count: number): string => {
    return count.toLocaleString('en-US') + '+ Followers';
  };

  // Check if className includes width/height overrides
  const hasWidthOverride = className.includes('w-');
  const hasHeightOverride = className.includes('h-');
  
  // Get available social links
  const hasSocialLinks = socialLinks && Object.keys(socialLinks).length > 0;
  
  // Calculate styles - if width is overridden, use aspect ratio to make it taller than wide
  const getCardStyles = () => {
    if (hasHeightOverride) {
      return {}; // Let Tailwind handle it
    }
    
    if (hasWidthOverride) {
      // If width is full, use aspect ratio to make it taller than wide
      // Using 2/3 ratio means height is 1.5x the width (definitely taller than wide)
      return {
        aspectRatio: '2 / 3',
      };
    }
    
    // Default fixed dimensions
    return {
      width: '240px',
      height: '400px',
    };
  };
  
  // Build className with aspect ratio if needed
  const cardClassName = hasWidthOverride && !hasHeightOverride
    ? `relative rounded-xl overflow-hidden flex-shrink-0 group aspect-[2/3] ${className}`
    : `relative rounded-xl overflow-hidden flex-shrink-0 group ${className}`;
  
  return (
    <div
      className={cardClassName}
      style={getCardStyles()}
    >
      {/* Background Image or Placeholder */}
      {image ? (
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #525252 0%, #737373 50%, #525252 100%)',
          }}
        />
      )}
      
      {/* Overlay gradient for contrast */}
      <div
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <h3 className="text-2xl font-semibold text-white mb-2" style={{ color: '#FFFFFF' }}>
          {name}
        </h3>
        <p className="text-base text-white/90 mb-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
          {formatFollowers(followers)}
        </p>
        
        {/* Social Links */}
        {hasSocialLinks && (
          <div className="flex items-center gap-3 flex-wrap">
            {socialLinks.youtube && (
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
                aria-label={`${name} YouTube`}
              >
                <img 
                  src="/social-icons/Youtube.svg" 
                  alt="YouTube" 
                  className="w-5 h-5"
                />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
                aria-label={`${name} Instagram`}
              >
                <img 
                  src="/social-icons/Instagram.svg" 
                  alt="Instagram" 
                  className="w-5 h-5"
                />
              </a>
            )}
            {socialLinks.tiktok && (
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
                aria-label={`${name} TikTok`}
              >
                <img 
                  src="/social-icons/Tik Tok.svg" 
                  alt="TikTok" 
                  className="w-5 h-5"
                />
              </a>
            )}
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
                aria-label={`${name} Facebook`}
              >
                <img 
                  src="/social-icons/Facebook.svg" 
                  alt="Facebook" 
                  className="w-5 h-5"
                />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
                aria-label={`${name} Twitter`}
              >
                <img 
                  src="/social-icons/Twitter.svg" 
                  alt="Twitter" 
                  className="w-5 h-5"
                />
              </a>
            )}
            {socialLinks.twitch && (
              <a
                href={socialLinks.twitch}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
                aria-label={`${name} Twitch`}
              >
                <img 
                  src="/social-icons/Twitch.svg" 
                  alt="Twitch" 
                  className="w-5 h-5"
                />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

