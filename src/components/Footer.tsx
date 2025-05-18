
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link 
            to="/" 
            className="text-lg font-bold text-gradient mb-4 md:mb-0"
          >
            portfolio
          </Link>
          
          <div className="text-gray-400 text-sm">
            © {currentYear} Frontend Developer Portfolio. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a 
              href="#home" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#portfolio" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
