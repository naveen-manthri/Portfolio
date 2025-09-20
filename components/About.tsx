import React from 'react';
import Section from './Section';
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="relative group">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-200 dark:bg-gray-700">
              <img
                src="/images/naveen-manthri.jpg"
                alt="Naveen Manthri"
                loading="lazy"
                className="rounded-full w-full h-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
             <div className="absolute inset-0 rounded-full border-4 border-light-primary/50 dark:border-dark-primary/50 transition-all duration-300 group-hover:border-light-primary dark:group-hover:border-dark-primary scale-105 group-hover:scale-110 opacity-0 group-hover:opacity-100"></div>
          </div>
        </div>
        <div className="md:w-2/3 text-center md:text-left opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <p className="text-lg mb-4 text-light-onBackground/80 dark:text-dark-onBackground/80">
            I am a passionate and dedicated full-stack developer with expertise in .NET technology. With a strong background in both front-end and back-end development, I am well-versed in creating dynamic and user-friendly web applications.
          </p>
          <p className="text-lg mb-6 text-light-onBackground/80 dark:text-dark-onBackground/80">
            Proactive in learning new technologies and continuously improving skills. A team player with a positive attitude and a passion for creating innovative software solutions.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://github.com/naveen-manthri" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-light-onBackground dark:text-dark-onBackground hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300">
              <GitHubIcon className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/naveen-manthri" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-light-onBackground dark:text-dark-onBackground hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300">
              <LinkedInIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;