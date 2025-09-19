
import type { Project, Skill, ExperienceItem, EducationItem } from './types';
import { CSharpIcon, DotNetIcon, ReactIcon, TypeScriptIcon, JavaScriptIcon, SqlServerIcon, PostgreSqlIcon, AzureIcon, GitIcon, FigmaIcon } from './components/icons/TechIcons';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    title: 'SwitchFxTech',
    description: 'A US-based platform for rehabilitation management. Implemented session timeouts, optimized performance, and integrated Polly Circuit Breaker for fault tolerance.',
    imageUrl: 'https://picsum.photos/seed/switchfx/600/400',
    tags: ['ASP.NET Core', 'AngularJS', 'PostgreSQL', 'JavaScript', 'CSS'],
    repoUrl: 'https://github.com/naveen-manthri',
  },
  {
    title: 'FevTutor',
    description: 'An EdTech platform for student-tutor interactions. Implemented Unit of Work pattern, integrated Serilog for logging, and automated session management.',
    imageUrl: 'https://picsum.photos/seed/fevtutor/600/400',
    tags: ['ASP.NET MVC', 'ReactJS', 'Oracle DB', 'REST API', 'JQuery'],
    repoUrl: 'https://github.com/naveen-manthri',
  },
  {
    title: 'BUZZ',
    description: 'A platform for managing employee information and project assignments. Authored a resource request module and built a real-time ReactJS dashboard.',
    imageUrl: 'https://picsum.photos/seed/buzz/600/400',
    tags: ['C#', 'WebAPI', 'Entity Framework', 'ReactJS', 'CSS'],
    repoUrl: 'https://github.com/naveen-manthri',
  },
  {
    title: 'HRMS Portal',
    description: 'A platform for efficient employee onboarding, leave management, and attendance tracking. Developed various modules and a scalable SQL Server database schema.',
    imageUrl: 'https://picsum.photos/seed/hrms/600/400',
    tags: ['C#', 'WebAPI', 'Dapper', 'SQL Server'],
    repoUrl: 'https://github.com/naveen-manthri',
  },
];

export const SKILLS: Skill[] = [
    { name: 'C#', Icon: CSharpIcon },
    { name: '.NET', Icon: DotNetIcon },
    { name: 'React', Icon: ReactIcon },
    { name: 'TypeScript', Icon: TypeScriptIcon },
    { name: 'JavaScript', Icon: JavaScriptIcon },
    { name: 'SQL Server', Icon: SqlServerIcon },
    { name: 'PostgreSQL', Icon: PostgreSqlIcon },
    { name: 'Azure', Icon: AzureIcon },
    { name: 'Git', Icon: GitIcon },
    { name: 'Figma', Icon: FigmaIcon },
];


export const EXPERIENCE: ExperienceItem[] = [
    {
      role: 'Associate Software Engineer',
      company: 'Paltech Consulting Private Limited',
      period: 'January 2023 - Present',
      description: [
        'Collaborated with stakeholders on requirements gathering and sprint planning, ensuring 100% alignment with project timelines.',
        'Contributed across all phases of SDLC in an Agile environment to deliver scalable solutions.',
        'Enhanced application performance by refining queries and APIs, reducing average response time by 35%.',
        'Designed and deployed reusable UI components (buttons, modals, forms, tables) in JavaScript frameworks, improving consistency across modules and reducing frontend development effort by 20%.',
        'Executed unit testing with XUnit/NUnit, achieving 98% code coverage and ensuring robust system reliability.'
      ]
    },
    {
      role: 'Trainee Software Engineer',
      company: 'Paltech Consulting Private Limited',
      period: 'September 2021 - December 2022',
      description: [
        'Gained expertise in .NET Core, RESTful APIs, and design patterns, delivering maintainable and scalable solutions.',
        'Crafted responsive UIs that improved user satisfaction ratings by 20% (from internal feedback surveys).',
        'Revamped SQL Server schemas, queries, and stored procedures, reducing execution time by 30%.',
        'Delivered Library Management System and Asset Management System in .NET Core, improving resource efficiency by 40% and reducing errors by 25%.'
      ]
    }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Jawaharlal Nehru Technical University',
    degree: 'BTech - Computer Science Engineering',
    period: 'September 2021 - August 2024',
    details: 'CGPA: 7/10',
  },
  {
    institution: 'Government Institute of Electronics',
    degree: 'Diploma',
    period: 'June 2017 - April 2021',
    details: 'Grade: 75%',
  },
  {
    institution: 'Telangana State Model School',
    degree: 'Secondary Education',
    period: 'March 2017',
    details: 'GPA: 8.5/10',
  },
];
