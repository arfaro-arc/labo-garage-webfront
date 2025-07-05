
import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  threshold?: number;
}

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  className, 
  id, 
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={sectionRef} className={className} id={id}>
      {isVisible ? (
        children
      ) : (
        <div className="min-h-[400px] bg-gray-50 animate-pulse" />
      )}
    </div>
  );
};

export default LazySection;
