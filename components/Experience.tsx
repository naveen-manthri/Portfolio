
import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience" className="bg-light-surface dark:bg-dark-surface">
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Timeline Line */}
        <div className="absolute top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-600 left-4 md:left-1/2 md:-translate-x-1/2"></div>

        {EXPERIENCE.map((item, index) => (
          <div key={index} className={`relative mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Content */}
            <div className="md:w-1/2 w-full">
              <div
                className={`pl-12 md:pl-0 opacity-0 ${index % 2 === 0 ? 'md:pl-8 animate-slide-in-right' : 'md:pr-8 animate-slide-in-left'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-light-primary dark:text-dark-primary">{item.role}</h3>
                  <p className="font-semibold mb-1">{item.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.period}</p>
                  <ul className="list-disc list-inside space-y-2 text-light-onBackground/80 dark:text-dark-onBackground/80">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Spacer */}
            <div className="hidden md:block md:w-1/2"></div>
            {/* Dot */}
            <div className="absolute top-1 left-4 md:left-1/2 w-4 h-4 bg-light-primary dark:bg-dark-primary rounded-full -translate-x-1/2 animate-pulse"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;