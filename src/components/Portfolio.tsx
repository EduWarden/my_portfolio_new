import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, File, Link, Image } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  icon: React.ReactNode;
  image: string;
}

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "FastFood Restourane",
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
      id: 1,
      title: "Advanced React and Redux",
      organization: "Udemy",
      date: "2023",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "JavaScript Algorithms and Data Structures",
      organization: "freeCodeCamp",
      date: "2022",
      image: "/placeholder.svg"
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
    { name: "HTML5", icon: <Code size={24} />, image: "/placeholder.svg" },
    { name: "CSS3", icon: <Code size={24} />, image: "/placeholder.svg" },
    { name: "JavaScript", icon: <Code size={24} />, image: "/placeholder.svg" },
    { name: "React", icon: <Code size={24} />, image: "/placeholder.svg" },
    { name: "TypeScript", icon: <Code size={24} />, image: "/placeholder.svg" },
    { name: "Node.js", icon: <Code size={24} />, image: "/placeholder.svg" },
    { name: "Tailwind CSS", icon: <Code size={24} />, image: "/placeholder.svg" },
    { name: "Next.js", icon: <Code size={24} />, image: "/placeholder.svg" },
    { name: "Redux", icon: <Code size={24} />, image: "/placeholder.svg" }
  ];

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
      id="portfolio"
      ref={sectionRef}
      className="min-h-screen py-20 opacity-0"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Portfolio Showcase</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical expertise.
            Each section represents a milestone in my continuous learning path.
          </p>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid grid-cols-3 mb-12 bg-black/20 border border-white/10">
            <TabsTrigger value="projects" className="flex items-center gap-2 data-[state=active]:bg-portfolio-purple/20">
              <Code size={16} /> Projects
            </TabsTrigger>
            <TabsTrigger value="certificates" className="flex items-center gap-2 data-[state=active]:bg-portfolio-purple/20">
              <File size={16} /> Certificates
            </TabsTrigger>
            <TabsTrigger value="tech-stack" className="flex items-center gap-2 data-[state=active]:bg-portfolio-purple/20">
              <Code size={16} /> Tech Stack
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="mt-2 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group card-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
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

                  <h3 className="text-xl font-bold mb-2 group-hover:text-portfolio-purple transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-portfolio-purple/10 text-portfolio-purple px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    className="inline-flex items-center text-portfolio-purple hover:text-portfolio-blue transition-colors"
                  >
                    View Project <Link size={16} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="mt-2 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="bg-black/20 border border-white/10 rounded-lg overflow-hidden hover:border-portfolio-purple/30 transition-colors"
                >
                  <AspectRatio ratio={4/3} className="bg-black/30">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </AspectRatio>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{certificate.title}</h3>
                    <p className="text-gray-400 text-sm">{certificate.organization}</p>
                    <p className="text-portfolio-purple text-xs mt-2">{certificate.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tech-stack" className="mt-2 animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-portfolio-purple/5 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AspectRatio ratio={1} className="w-full mb-4 bg-black/30 rounded-lg overflow-hidden">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </AspectRatio>
                  <div className="w-12 h-12 rounded-full bg-portfolio-purple/10 flex items-center justify-center mb-3 text-portfolio-purple">
                    {tech.icon}
                  </div>
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
