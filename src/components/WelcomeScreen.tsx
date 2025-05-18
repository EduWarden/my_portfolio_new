
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WelcomeScreenProps {
  duration?: number;
  onComplete?: () => void;
}

const WelcomeScreen = ({ duration = 3000, onComplete }: WelcomeScreenProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onComplete) {
        // Delay the onComplete callback slightly to allow the exit animation to play
        setTimeout(onComplete, 800);
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(0px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ 
            opacity: 0, 
            scale: 1.2, 
            filter: "blur(20px)",
            transition: { duration: 1.2, ease: "easeInOut" }
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ 
              opacity: 0, 
              y: -30,
              transition: { duration: 0.7 } 
            }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">Welcome to my website</h1>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              exit={{ width: "0%" }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="h-1 bg-portfolio-purple mt-4 rounded-full"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-portfolio-purple/10 to-portfolio-blue/10 blur-[120px] rounded-full" 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
