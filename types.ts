import React from 'react';
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details: string;
}
