
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-surface dark:bg-dark-surface py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Naveen Manthri. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;