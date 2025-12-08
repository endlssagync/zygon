import React, { useEffect, useState, useRef } from 'react';

export interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  suffix = '',
  prefix = '',
  delay = 0,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={cardRef}
      className={`text-center ${className}`}
      style={{
        animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s forwards`,
        opacity: 0,
      }}
    >
      <div
        className="text-5xl md:text-6xl font-bold mb-2"
        style={{
          background: 'linear-gradient(135deg, #0EA5E9 0%, #10B981 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="text-lg" style={{ color: '#A1A1A1' }}>
        {label}
      </p>
    </div>
  );
};

