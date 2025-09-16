
import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import { GraduationCapIcon } from './icons/UIIcons';

const Education: React.FC = () => {
  return (
    <Section id="education" title="My Education">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EDUCATION.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col p-6 bg-light-surface dark:bg-dark-surface rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex-shrink-0 mb-4">
              <GraduationCapIcon className="h-12 w-12 text-light-primary dark:text-dark-primary" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold">{item.institution}</h3>
              <p className="font-semibold text-light-primary dark:text-dark-primary mt-1">{item.degree}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{item.period}</p>
              <p className="mt-3 text-light-onBackground/80 dark:text-dark-onBackground/80">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;