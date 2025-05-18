import React, { useRef, useEffect } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
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
          id="contact"
          ref={sectionRef}
          className="min-h-screen py-20 opacity-0"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Feel free to reach out through any of the platforms below.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">Contact Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium">nurgisabazaraly@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple">
                      <Send size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Telegram</p>
                      <a
                          href="https://t.me/@GU7eNTAG"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-portfolio-purple transition-colors"
                      >
                        @GU7eNTAG
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple">
                      <Github size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <a
                          href="https://github.com/EduWarden"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-portfolio-purple transition-colors"
                      >
                        https://github.com/EduWarden
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple">
                      <Linkedin size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <a
                          href="https://www.linkedin.com/in/nurgisa-b-b79345357/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-portfolio-purple transition-colors"
                      >
                        https://www.linkedin.com/in/nurgisa-b-b79345357/
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-400">
                  Would you prefer to contact us directly? Write to me by email or Telegram.
                </p>
                <div className="mt-8 flex justify-center gap-6">
                  <a
                      href="https://github.com/EduWarden"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors"
                  >
                    <Github size={22} />
                  </a>
                  <a
                      href="https://t.me/@GU7eNTAG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors"
                  >
                    <Send size={22} />
                  </a>
                  <a
                      href="https://www.linkedin.com/in/nurgisa-b-b79345357/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors"
                  >
                    <Linkedin size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;