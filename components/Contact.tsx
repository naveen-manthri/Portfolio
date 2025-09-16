import React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg mb-8 text-light-onBackground/80 dark:text-dark-onBackground/80 opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          I'm currently open to new opportunities and collaborations. Feel free to reach out to me!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-light-surface dark:bg-dark-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary opacity-0 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-light-surface dark:bg-dark-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary opacity-0 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full px-4 py-3 bg-light-surface dark:bg-dark-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary opacity-0 animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-light-primary dark:bg-dark-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '500ms' }}
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
           <a
            href="/resume.pdf"
            download="Naveen-Manthri-Resume.pdf"
            className="inline-block bg-light-surface dark:bg-dark-surface text-light-onSurface dark:text-dark-onSurface font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;