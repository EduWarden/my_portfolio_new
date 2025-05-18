import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, User, Instagram, Mail, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

  const navItems = [
    { id: 'Home', label: 'Home', icon: <Code size={16} /> },
    { id: 'about', label: 'About', icon: <User size={16} /> },
    { id: 'portfolio', label: 'Portfolio', icon: <Code size={16} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={16} /> }
  ];

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

            {/* Desktop Navigation */}
            {!isMobile && (
                <ul className="flex items-center gap-8">
                  {navItems.map(item => (
                      <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={`nav-item flex items-center gap-1 ${activeSection === item.id ? 'active' : ''}`}
                        >
                          {item.icon} {item.label}
                        </a>
                      </li>
                  ))}
                </ul>
            )}

            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              {isMobile && (
                  <button
                      onClick={toggleMenu}
                      className="text-gray-400 hover:text-white transition-colors p-1"
                      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
              )}

              {!isMobile && (
                  <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobile && isMenuOpen && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-xl pt-20 z-40 animate-fade-in">
              <div className="container mx-auto px-4">
                <ul className="flex flex-col gap-6 items-center">
                  {navItems.map(item => (
                      <li key={item.id} className="w-full">
                        <a
                            href={`#${item.id}`}
                            className={`nav-item flex items-center justify-center gap-3 text-xl py-4 ${activeSection === item.id ? 'active text-portfolio-purple' : 'text-white'}`}
                            onClick={closeMenu}
                        >
                          {item.icon} {item.label}
                        </a>
                      </li>
                  ))}

                  <li className="w-full mt-4">
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-item flex items-center justify-center gap-3 text-xl py-4"
                        onClick={closeMenu}
                    >
                      <Instagram size={20} /> Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
        )}
      </header>
  );
};

export default Navbar;