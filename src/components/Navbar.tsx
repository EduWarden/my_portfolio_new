
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, User, Instagram, Mail } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update isScrolled state
      setIsScrolled(window.scrollY > 50);
      
      // Find which section is currently in view
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/60 backdrop-blur-xl py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-lg font-bold text-gradient hover:opacity-80 transition-opacity"
          >
            portfolio
          </Link>
          
          <ul className="flex items-center gap-8">
            <li>
              <a 
                href="#home" 
                className={`nav-item flex items-center gap-1 ${activeSection === 'home' ? 'active' : ''}`}
              >
                <Code size={16} /> Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-item flex items-center gap-1 ${activeSection === 'about' ? 'active' : ''}`}
              >
                <User size={16} /> About
              </a>
            </li>
            <li>
              <a 
                href="#portfolio" 
                className={`nav-item flex items-center gap-1 ${activeSection === 'portfolio' ? 'active' : ''}`}
              >
                <Code size={16} /> Portfolio
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-item flex items-center gap-1 ${activeSection === 'contact' ? 'active' : ''}`}
              >
                <Mail size={16} /> Contact
              </a>
            </li>
          </ul>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
