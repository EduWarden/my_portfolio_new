import React, { useEffect, memo, useMemo, useRef } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, UserCheck, ArrowRight } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Button } from "@/components/ui/button"

// Memoized Header component from the JSX example
const Header = memo(() => (
    <div className="text-center lg:mb-8 mb-2 px-[5%]">
      <div className="inline-block relative group">
        <h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
            data-aos="zoom-in-up"
            data-aos-duration="600"
        >
          About Me
        </h2>
      </div>
      <p
          className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
          data-aos="zoom-in-up"
          data-aos-duration="800"
      >
        <Sparkles className="w-5 h-5 text-purple-400" />
        Transforming ideas into digital experiences
        <Sparkles className="w-5 h-5 text-purple-400" />
      </p>
    </div>
));

// Memoized ProfileImage component with your image structure
const ProfileImage = memo(() => (
    <div className="relative mt-10 md:mt-0" data-aos="fade-up" data-aos-duration="1000">
      {/* Gradient background from JSX example */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative group">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

          {/* Optimized overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

          <img
              src="/placeholder.svg"
              alt="Profile"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              loading="lazy"
          />

          {/* Hover effects */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>

      {/* Experience and Projects badges */}
      <div
          className="absolute -bottom-4 sm:-bottom-8 right-0 sm:-right-8 bg-black/50 backdrop-blur-sm border border-white/10 px-4 sm:px-6 py-3 sm:py-4 rounded-lg"
          data-aos="fade-left"
          data-aos-duration="1200"
      >
        <div className="text-xs sm:text-sm text-gray-400">Experience</div>
        <div className="text-xl sm:text-2xl font-bold">3+ Years</div>
      </div>

      <div
          className="absolute -top-4 sm:-top-8 left-0 sm:-left-8 bg-black/50 backdrop-blur-sm border border-white/10 px-4 sm:px-6 py-3 sm:py-4 rounded-lg"
          data-aos="fade-right"
          data-aos-duration="1200"
      >
        <div className="text-xs sm:text-sm text-gray-400">Projects</div>
        <div className="text-xl sm:text-2xl font-bold">10+</div>
      </div>
    </div>
));

// Memoized StatCard component from JSX example
const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
    <div data-aos={animation} data-aos-duration={1300} className="relative group">
      <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
        <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>

        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <span
              className="text-4xl font-bold text-white"
              data-aos="fade-up-left"
              data-aos-duration="1500"
              data-aos-anchor-placement="top-bottom"
          >
          {value}
        </span>
        </div>

        <div>
          <p
              className="text-sm uppercase tracking-wider text-gray-300 mb-2"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
          >
            {label}
          </p>
          <div className="flex items-center justify-between">
            <p
                className="text-xs text-gray-400"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
            >
              {description}
            </p>
            <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </div>
));

const About = () => {
  const sectionRef = useRef(null);

  // Memoized stats data
  const statsData = useMemo(() => [
    {
      icon: Code,
      color: "from-[#6366f1] to-[#a855f7]",
      value: "10+",
      label: "Total Projects",
      description: "Innovative web solutions crafted",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-[#a855f7] to-[#6366f1]",
      value: "5+",
      label: "Certificates",
      description: "Professional skills validated",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "from-[#6366f1] to-[#a855f7]",
      value: "3+",
      label: "Years of Experience",
      description: "Continuous learning journey",
      animation: "fade-left",
    },
  ], []);

  // AOS initialization from JSX example
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    let resizeTimer;
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
      <div
          className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
          id="about"
          ref={sectionRef}
      >
        <Header />

        <div className="w-full mx-auto pt-8 sm:pt-12 relative">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                  data-aos="fade-right"
                  data-aos-duration="1000"
              >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Hello, I'm
              </span>
                <span
                    className="block mt-2 text-gray-200"
                    data-aos="fade-right"
                    data-aos-duration="1300"
                >
                Nurgissa Bazarali
              </span>
              </h2>

              <p
                  className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
                  data-aos="fade-right"
                  data-aos-duration="1500"
              >
                I specialize in building modern, responsive web applications with a focus on user experience and performance.
                With expertise in React, JavaScript, and modern CSS frameworks, I create seamless digital experiences
                that are both beautiful and functional.
              </p>

              <div className="mb-8" data-aos="fade-right" data-aos-duration="1700">
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
                          data-aos="fade-right"
                          data-aos-delay={index * 100}
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5" />
                        {item}
                      </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
                <Button
                    variant="default"
                    className="w-full lg:w-auto bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                </Button>
                <Button
                    variant="outline"
                    className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                </Button>
              </div>
            </div>

            <ProfileImage />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {statsData.map((stat) => (
                <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes spin-slower {
            to { transform: rotate(360deg); }
          }
          .animate-bounce-slow {
            animation: bounce 3s infinite;
          }
          .animate-pulse-slow {
            animation: pulse 3s infinite;
          }
          .animate-spin-slower {
            animation: spin-slower 8s linear infinite;
          }
        `}</style>
      </div>
  );
};

export default memo(About);