import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero-bg/1920/1080')" }}>
      <div className="absolute inset-0 bg-light-background dark:bg-dark-background opacity-80"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <span className="block">Hi, I'm Naveen Manthri</span>
          <span className="block text-light-primary dark:text-dark-primary">A Full Stack Engineer</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-light-onBackground/80 dark:text-dark-onBackground/80 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
           Fullstack developer with 4 years of expertise in .NET Core and have strong experience with microservice architectures. I build web applications using React and Angular and work with relational databases like SQL Server, Oracle, and PostgreSQL, with solid knowledge of Entity Framework. I am also familiar with few Azure services.
        </p>
        <div className="flex justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <a
            href="#projects"
            className="inline-block bg-light-primary dark:bg-dark-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="inline-block bg-light-surface dark:bg-dark-surface text-light-onSurface dark:text-dark-onSurface font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;