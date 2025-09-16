
import React, { ReactNode, useRef, useEffect, useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-light-primary dark:text-dark-primary">{title.split(' ')[0]}</span> {title.substring(title.indexOf(' ') + 1)}
      </h2>
      {children}
    </section>
  );
};

export default Section;
