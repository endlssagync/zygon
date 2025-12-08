import React from 'react';
import { Button, ButtonProps } from '../atoms/Button';

export interface ButtonGroupProps {
  buttons: Array<{
    label: string;
    variant?: ButtonProps['variant'];
    onClick?: () => void;
    href?: string;
  }>;
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {buttons.map((button, index) => (
        <div
          key={index}
          style={{
            animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + index * 0.1}s forwards`,
            opacity: 0,
          }}
        >
          {button.href ? (
            <a href={button.href}>
              <Button variant={button.variant} onClick={button.onClick}>
                {button.label}
              </Button>
            </a>
          ) : (
            <Button variant={button.variant} onClick={button.onClick}>
              {button.label}
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

