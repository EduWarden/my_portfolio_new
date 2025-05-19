import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Award, Boxes, Link as LinkIcon, X } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from '@/hooks/use-mobile';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Modal component for viewing certificates
const ImageModal = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen) return null;

  return (
      <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
      >
        <div
            className="relative max-w-4xl w-full bg-black/40 border border-white/20 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
        >
          <button
              onClick={onClose}
              className="absolute top-2 right-2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full transition-colors z-10"
          >
            <X size={20} />
          </button>

          <div className="p-4">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <div className="relative w-full">
              <img
                  src={imageUrl}
                  alt={title}
                  className="w-full object-contain rounded"
                  style={{ maxHeight: '80vh' }}
              />
            </div>
          </div>
        </div>
      </div>
  );
};

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
  category: string;
}

interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
}

interface TechItem {
  name: string;
  icon: string;
}

// Toggle button component from first file
const ToggleButton = ({ onClick, isShowingMore }: { onClick: () => void; isShowingMore: boolean }) => (
    <button
        onClick={onClick}
        className="
      px-3 py-1.5
      text-slate-300
      hover:text-white
      text-sm
      font-medium
      transition-all
      duration-300
      ease-in-out
      flex
      items-center
      gap-2
      bg-white/5
      hover:bg-white/10
      rounded-md
      border
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
    >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
    </button>
);

const Portfolio = () => {
  const sectionRef = React.useRef(null);
  const isMobile = useIsMobile();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const initialItems = isMobile ? 4 : 6;

  const projects: Project[] = [
    {
      id: 1,
      title: "FastFood Restaurant",
      description: "An interactive restaurant website featuring online ordering system, menu management, and customer reviews. Built with React and styled with Tailwind CSS for a responsive and modern user experience. The app is fully responsive and optimized for mobile devices.",
      technologies: ["React", "Tailwind CSS", "Redux"],
      image: "/Internet_Magazine.png",
      url: "https://fast-food-restourane.vercel.app/",
      category: "web"
    },
    {
      id: 2,
      title: "Todo app",
      description: "A modern task management application built with React and Firebase. Features include real-time updates, user authentication, task categorization, and responsive design for seamless usage across all devices.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      image: "/todo_app.png",
      url: "https://todo-app-x9bk.vercel.app/",
      category: "web"
    }
  ];

  const certificates: Certificate[] = [
    {
      id: 2,
      title: "Second place in graphic design",
      organization: "Eurasian National University, ENEU",
      date: "2025",
      image: "enu.png"
    },
    {
      id: 1,
      title: "Python course",
      organization: "GeekBrains",
      date: "2023",
      image: "GeekBrains.png"
    },
    {
      id: 3,
      title: "Responsive Web Design",
      organization: "freeCodeCamp",
      date: "2021",
      image: "/placeholder.svg"
    }
  ];

  const techStack: TechItem[] = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" }
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  // Toggle show more/less function
  const toggleShowMore = React.useCallback((type: string) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  // Open modal with selected certificate
  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedCertificate(null);
  };

  // Initialize AOS animation library
  React.useEffect(() => {
    AOS.init({
      once: false, // This will make animations occur every time
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
      <section
          id="portfolio"
          ref={sectionRef}
          className="min-h-screen py-20 md:px-[10%] px-[5%] w-full bg-[#030014] overflow-hidden"
      >
        <div className="container mx-auto">
          {/* Header section with gradient text */}
          <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            <span style={{
              color: '#6366f1',
              backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Portfolio Showcase
            </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
              Explore my journey through projects, certifications, and technical expertise.
              Each section represents a milestone in my continuous learning path.
            </p>
          </div>

          {/* Tabs with glass effect styling */}
          <Tabs
              defaultValue="projects"
              value={activeTab}
              onValueChange={handleTabChange}
              className="w-full"
          >
            <TabsList
                className="grid grid-cols-3 mb-8 h-[70px] p-1
                      bg-transparent border border-white/10 rounded-[20px] overflow-hidden
                      relative before:content-[''] before:absolute before:inset-0
                      before:bg-gradient-to-b before:from-[rgba(139,92,246,0.03)] before:to-[rgba(59,130,246,0.03)]
                      before:backdrop-blur-[10px] before:z-0"
            >
              <TabsTrigger
                  value="projects"
                  className="flex h-full items-center justify-center gap-2 text-sm md:text-base z-[1] m-2 rounded-[12px]
                        text-[#94a3b8] font-semibold transition-all duration-400 ease-in-out
                        hover:text-white hover:bg-[rgba(139,92,246,0.1)] hover:translate-y-[-2px]
                        data-[state=active]:text-white data-[state=active]:bg-gradient-to-br
                        data-[state=active]:from-[rgba(139,92,246,0.2)] data-[state=active]:to-[rgba(59,130,246,0.2)]
                        data-[state=active]:shadow-[0_4px_15px_-3px_rgba(139,92,246,0.2)]"
              >
                <Code className="w-5 h-5 mb-0 md:mb-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-5
                             data-[state=active]:text-[#a78bfa]" />
                Projects
              </TabsTrigger>

              <TabsTrigger
                  value="certificates"
                  className="flex h-full items-center justify-center gap-2 text-sm md:text-base z-[1] m-2 rounded-[12px]
                        text-[#94a3b8] font-semibold transition-all duration-400 ease-in-out
                        hover:text-white hover:bg-[rgba(139,92,246,0.1)] hover:translate-y-[-2px]
                        data-[state=active]:text-white data-[state=active]:bg-gradient-to-br
                        data-[state=active]:from-[rgba(139,92,246,0.2)] data-[state=active]:to-[rgba(59,130,246,0.2)]
                        data-[state=active]:shadow-[0_4px_15px_-3px_rgba(139,92,246,0.2)]"
              >
                <Award className="w-5 h-5 mb-0 md:mb-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-5
                              data-[state=active]:text-[#a78bfa]" />
                Certificates
              </TabsTrigger>

              <TabsTrigger
                  value="tech-stack"
                  className="flex h-full items-center justify-center gap-2 text-sm md:text-base z-[1] m-2 rounded-[12px]
                        text-[#94a3b8] font-semibold transition-all duration-400 ease-in-out
                        hover:text-white hover:bg-[rgba(139,92,246,0.1)] hover:translate-y-[-2px]
                        data-[state=active]:text-white data-[state=active]:bg-gradient-to-br
                        data-[state=active]:from-[rgba(139,92,246,0.2)] data-[state=active]:to-[rgba(59,130,246,0.2)]
                        data-[state=active]:shadow-[0_4px_15px_-3px_rgba(139,92,246,0.2)]"
              >
                <Boxes className="w-5 h-5 mb-0 md:mb-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-5
                              data-[state=active]:text-[#a78bfa]" />
                Tech Stack
              </TabsTrigger>
            </TabsList>

            {/* Projects Tab Content */}
            <TabsContent value="projects" className="mt-2">
              <div className="container mx-auto flex justify-center items-center overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                  {displayedProjects.map((project, index) => (
                      <div
                          key={project.id}
                          data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                          data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                          className="group card-glow transition-all duration-300"
                      >
                        <div className="aspect-video rounded-lg overflow-hidden bg-black/50 mb-4 border border-white/10">
                          <AspectRatio ratio={16/9} className="bg-black/40">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                            />
                          </AspectRatio>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-[#a78bfa] transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-gray-400 mb-4 text-sm sm:text-base line-clamp-3">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                              <span
                                  key={tech}
                                  className="bg-[rgba(139,92,246,0.1)] text-[#a78bfa] px-2 sm:px-3 py-1 rounded-full text-xs"
                              >
                          {tech}
                        </span>
                          ))}
                        </div>

                        <a
                            href={project.url}
                            className="inline-flex items-center text-[#a78bfa] hover:text-[#6366f1] transition-colors text-sm sm:text-base"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          View Project <LinkIcon size={14} className="ml-1" />
                        </a>
                      </div>
                  ))}
                </div>
              </div>
              {projects.length > initialItems && (
                  <div className="mt-6 w-full flex justify-start">
                    <ToggleButton
                        onClick={() => toggleShowMore('projects')}
                        isShowingMore={showAllProjects}
                    />
                  </div>
              )}
            </TabsContent>

            {/* Certificates Tab Content */}
            <TabsContent value="certificates" className="mt-2">
              <div className="container mx-auto flex justify-center items-center overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                  {displayedCertificates.map((certificate, index) => (
                      <div
                          key={certificate.id}
                          data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                          data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                          className="bg-black/20 border border-white/10 rounded-lg overflow-hidden hover:border-[#a78bfa]/30 transition-colors cursor-pointer"
                          onClick={() => openCertificateModal(certificate)}
                      >
                        <AspectRatio ratio={4/3} className="bg-black/30">
                          <img
                              src={certificate.image}
                              alt={certificate.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </AspectRatio>

                        <div className="p-3 sm:p-4">
                          <h3 className="text-base sm:text-lg font-semibold mb-1 line-clamp-1">{certificate.title}</h3>
                          <p className="text-gray-400 text-xs sm:text-sm line-clamp-1">{certificate.organization}</p>
                          <p className="text-[#a78bfa] text-xs mt-2">{certificate.date}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
              {certificates.length > initialItems && (
                  <div className="mt-6 w-full flex justify-start">
                    <ToggleButton
                        onClick={() => toggleShowMore('certificates')}
                        isShowingMore={showAllCertificates}
                    />
                  </div>
              )}
            </TabsContent>

            {/* Tech Stack Tab Content */}
            <TabsContent value="tech-stack" className="mt-2">
              <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                  {techStack.map((tech, index) => (
                      <div
                          key={tech.name}
                          data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                          data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                          className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4
                              flex flex-col items-center justify-center text-center
                              hover:bg-[rgba(139,92,246,0.05)] transition-colors"
                      >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5
                                  flex items-center justify-center mb-3 sm:mb-4 p-2
                                  hover:scale-110 transition-transform duration-300"
                        >
                          <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="font-medium text-sm sm:text-base">{tech.name}</span>
                      </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Certificate Modal */}
        <ImageModal
            isOpen={modalOpen}
            onClose={closeModal}
            imageUrl={selectedCertificate?.image}
            title={selectedCertificate?.title}
        />
      </section>
  );
};

export default Portfolio;