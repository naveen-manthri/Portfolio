import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skills" className="bg-light-surface dark:bg-dark-surface">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
        {SKILLS.map((skill, index) => (
          <div 
            key={skill.name} 
            className="flex flex-col items-center justify-center gap-2 p-4 bg-light-background dark:bg-dark-background rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* <skill.Icon className="h-16 w-16 mb-4 text-light-primary dark:text-dark-primary" /> */}
            <img src={skill.Icon} alt={skill.name} width={50} height={50} />
            <p className="font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;