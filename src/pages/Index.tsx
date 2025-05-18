
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WelcomeScreen from '@/components/WelcomeScreen';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Update the document title
    document.title = 'Frontend Developer Portfolio';
    
    // If welcome screen is disabled, show content immediately
    if (!showWelcome) {
      setShowContent(true);
    }
  }, [showWelcome]);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {showWelcome && <WelcomeScreen duration={3500} onComplete={handleWelcomeComplete} />}
      
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Hero />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
