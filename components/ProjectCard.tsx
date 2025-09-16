import React from 'react';
import type { Project } from '../types';
import { GitHubIcon } from './icons/SocialIcons';
import { ExternalLinkIcon } from './icons/UIIcons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { title, description, imageUrl, tags, liveUrl, repoUrl } = project;

  return (
    <div 
      className="group rounded-lg overflow-hidden shadow-lg bg-light-surface dark:bg-dark-surface flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
        <img
          src={imageUrl}
          alt={title}
          width="600"
          height="400"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-light-onSurface/80 dark:text-dark-onSurface/80 text-sm flex-grow">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold bg-light-primary/20 dark:bg-dark-primary/20 text-light-primary dark:text-dark-primary px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 pt-0 flex justify-end items-center gap-4">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="text-light-onSurface dark:text-dark-onSurface hover:text-light-primary dark:hover:text-dark-primary transition-colors"
          >
            <GitHubIcon className="w-6 h-6" />
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Demo"
            className="text-light-onSurface dark:text-dark-onSurface hover:text-light-primary dark:hover:text-dark-primary transition-colors"
          >
            <ExternalLinkIcon className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;