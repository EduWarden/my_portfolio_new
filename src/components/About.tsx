import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
      <section
          id="about"
          ref={sectionRef}
          className="min-h-screen flex items-center py-20 opacity-0"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gradient text-3xl sm:text-4xl font-bold mb-4">Hello, I'm <br /><span className="text-white text-4xl sm:text-5xl mt-2 block">Nurgissa Bazarali</span></h2>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">
                I specialize in building modern, responsive web applications with a focus on user experience and performance.
                With expertise in React, JavaScript, and modern CSS frameworks, I create seamless digital experiences
                that are both beautiful and functional.
              </p>

              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">What I do:</h3>
                <ul className="space-y-2">
                  {[
                    'Building responsive user interfaces',
                    'Creating interactive web applications',
                    'Implementing modern UI/UX designs',
                    'Optimizing web performance'
                  ].map((item, index) => (
                      <li
                          key={index}
                          className="flex items-start gap-2 text-gray-400 text-sm sm:text-base"
                      >
                        <span className="w-2 h-2 bg-portfolio-purple rounded-full mt-1.5" />
                        {item}
                      </li>
                  ))}
                </ul>
              </div>

              <Button
                  variant="default"
                  className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90"
              >
                Download CV <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

            <div className="relative mt-10 md:mt-0">
              <div className="aspect-square rounded-full bg-gradient-to-br from-portfolio-purple/20 to-portfolio-blue/20 animate-glow p-1">
                <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-sm border border-white/10 overflow-hidden flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/30">FD</span>
                </div>
              </div>

              <div className="absolute -bottom-4 sm:-bottom-8 right-0 sm:-right-8 bg-black/50 backdrop-blur-sm border border-white/10 px-4 sm:px-6 py-3 sm:py-4 rounded-lg">
                <div className="text-xs sm:text-sm text-gray-400">Experience</div>
                <div className="text-xl sm:text-2xl font-bold">3+ Years</div>
              </div>

              <div className="absolute -top-4 sm:-top-8 left-0 sm:-left-8 bg-black/50 backdrop-blur-sm border border-white/10 px-4 sm:px-6 py-3 sm:py-4 rounded-lg">
                <div className="text-xs sm:text-sm text-gray-400">Projects</div>
                <div className="text-xl sm:text-2xl font-bold">10+</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;