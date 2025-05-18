
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isTextRevealed, setIsTextRevealed] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [animationStage, setAnimationStage] = useState(1);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const welcomeText = "Frontend Developer";
  const typingSpeed = 70; // milliseconds per character

  useEffect(() => {
    setTimeout(() => {
      setIsTextRevealed(true);
    }, 800);
    
    // Text typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= welcomeText.length) {
        setDisplayedText(welcomeText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
        
        // Wait a moment before transitioning to the next animation stage
        setTimeout(() => {
          setAnimationStage(2);
        }, 500);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden py-20 pt-32"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-portfolio-purple/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 
            className={`text-6xl font-bold mb-6 welcome-animation overflow-hidden`}
          >
            {animationStage === 1 ? (
              <>
                {displayedText}
                <span className="typing-cursor">|</span>
              </>
            ) : (
              <span className="text-gradient">{welcomeText}</span>
            )}
          </h1>
          
          <p 
            className={`text-xl text-gray-400 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-300 ${
              isTextRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Transforming ideas into digital experiences with modern web development and beautiful user interfaces
          </p>
          
          <div 
            className={`flex gap-4 transition-all duration-700 delay-500 ${
              isTextRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 px-8 py-6 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({behavior: "smooth"})}
            >
              View Projects <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 hover:bg-white/10 px-8 py-6 transform transition-all duration-300 hover:scale-105 hover:border-portfolio-purple/50 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)]"
              onClick={() => document.getElementById("about")?.scrollIntoView({behavior: "smooth"})}
            >
              About Me
            </Button>
          </div>
          
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-28 w-full transition-all duration-700 delay-700 ${
              isTextRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS'].map((tech, index) => (
              <div 
                key={tech}
                className="bg-black/30 backdrop-blur-sm border border-white/10 p-5 rounded-lg flex items-center justify-center transition-all duration-500 hover:border-portfolio-purple/30 hover:transform hover:scale-105 hover:bg-black/40"
                style={{ 
                  animation: `slow-glow 4s ease-in-out infinite`,
                  animationDelay: `${index * 0.7}s` 
                }}
              >
                <span className="text-white/80 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
