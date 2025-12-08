import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'px-8 py-4 rounded-none font-semibold text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95';
  
  const variantClasses = {
    primary: 'shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1A1A1A]',
    secondary: 'hover:scale-105 hover:-translate-y-0.5 hover:brightness-110 focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1A1A1A]',
    accent: 'shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1A1A1A]',
    outline: 'bg-transparent hover:scale-105 hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1A1A1A]',
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#FFFFFF',
      color: '#0A0A0A',
    },
    secondary: {
      backgroundColor: '#2D2D2D',
      color: '#FFFFFF',
    },
    accent: {
      backgroundColor: '#6366F1',
      color: '#FFFFFF',
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: '#FFFFFF',
      color: '#FFFFFF',
    },
  };

  const buttonStyle = {
    ...variantStyles[variant],
    ...(variant === 'outline' && { borderWidth: '1px', borderStyle: 'solid' }),
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={buttonStyle}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = '#F5F5F5';
        } else if (variant === 'secondary') {
          e.currentTarget.style.backgroundColor = '#3A3A3A';
        } else if (variant === 'outline') {
          e.currentTarget.style.backgroundColor = '#151515';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = '#FFFFFF';
        } else if (variant === 'secondary') {
          e.currentTarget.style.backgroundColor = '#2D2D2D';
        } else if (variant === 'outline') {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};
