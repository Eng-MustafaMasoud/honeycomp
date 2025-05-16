
import React, { useEffect, useRef, useState } from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '', backgroundImage }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Optional: stop observing once visible
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const style = backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 md:py-24 min-h-[70vh] flex items-center scroll-section ${isVisible ? 'visible' : ''} ${className}`}
      style={style}
    >
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
