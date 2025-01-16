import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Code } from "lucide-react";
import { Calendar } from "lucide-react";
import { Users } from "lucide-react";

const MobileNav = ({ isOpen, onClose, navItems }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 md:hidden">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white p-2">
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center gap-8 pt-8">
        {navItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="text-xl text-purple-200/80 hover:text-purple-200"
            onClick={onClose}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <article
      className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-2xl overflow-hidden border border-purple-500/20 cursor-pointer hover:-translate-y-1 transition-transform"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-purple-200">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-purple-200/70 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, j) => (
            <span
              key={j}
              className="text-xs md:text-sm bg-purple-900/40 text-purple-300 px-2 md:px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-b from-gray-900 to-black w-full max-w-4xl mx-4 overflow-hidden rounded-xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent md:bg-gradient-to-r" />
          </div>

          <div className="md:w-1/2 p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={20} className="text-white/80" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-3">
              {project.title}
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs font-medium bg-white/5 text-white/80 px-2.5 py-1 rounded-full ring-1 ring-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-white/70 text-sm mb-6">{project.description}</p>

            <div className="flex gap-3">
              <a
                href={project.links.github}
                className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-4 py-2 rounded-lg text-sm text-white transition-colors"
              >
                <Github size={16} className="text-white/70" />
                <span>GitHub</span>
              </a>
              <a
                href={project.links.live}
                className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-4 py-2 rounded-lg text-sm text-white transition-colors"
              >
                <ExternalLink size={16} className="text-white/70" />
                <span>Ver Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Sobre mí", href: "/about" },
    { name: "Proyectos", href: "/projects" },
  ];

  const categories = ["Todos", "Web App", "Dashboard", "Mobile"];

  const projectsData = [
    {
      title: "Sistema de Pasarela de Pago",
      description:
        "Una plataforma de procesamiento de pagos integrada con múltiples proveedores que facilita transacciones seguras.",
      image: "/api/placeholder/600/400",
      category: "Web App",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      links: { github: "#", live: "#" },
    },
    {
      title: "Dashboard Analytics",
      description:
        "Panel de control interactivo para visualización de datos empresariales en tiempo real.",
      image: "/api/placeholder/600/400",
      category: "Dashboard",
      technologies: ["React", "D3.js", "Firebase"],
      links: { github: "#", live: "#" },
    },
    {
      title: "App de Gestión de Tareas",
      description:
        "Aplicación móvil para gestión eficiente de tareas y proyectos en equipo.",
      image: "/api/placeholder/600/400",
      category: "Mobile",
      technologies: ["React Native", "Redux", "Firebase"],
      links: { github: "#", live: "#" },
    },
  ];

  const filteredProjects = projectsData.filter(
    (project) =>
      selectedCategory === "Todos" || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <MobileNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
      />

      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a
              href="/"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400"
            >
              WR
            </a>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="text-purple-200/80 hover:text-purple-200 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <button
              className="md:hidden text-purple-200"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
              Mis Proyectos
            </h1>
            <p className="text-lg md:text-xl text-purple-200/90">
              Una colección de mis trabajos más destacados
            </p>
          </header>

          <div className="overflow-x-auto -mx-4 px-4 mb-8 md:mb-12">
            <div className="flex gap-3 md:gap-4 md:justify-center min-w-max">
              {categories.map((category, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 md:px-6 py-2 rounded-xl border whitespace-nowrap ${
                    selectedCategory === category
                      ? "border-purple-500 bg-purple-500/20 text-purple-200"
                      : "border-purple-500/20 text-purple-200/60"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={i}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </main>

      <section className="py-16 md:py-20 mt-16 md:mt-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-base md:text-lg text-purple-200/90">
                Estoy disponible para nuevos proyectos y colaboraciones.
                ¡Hablemos sobre cómo puedo ayudarte!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-purple-200/80">
                  <div className="bg-purple-500/10 p-2 rounded-lg">
                    <Users size={20} />
                  </div>
                  <span className="text-sm md:text-base">
                    Disponible para trabajo freelance
                  </span>
                </div>
                <div className="flex items-center gap-3 text-purple-200/80">
                  <div className="bg-purple-500/10 p-2 rounded-lg">
                    <Calendar size={20} />
                  </div>
                  <span className="text-sm md:text-base">
                    Disponibilidad: 20h/semana
                  </span>
                </div>
                <div className="flex items-center gap-3 text-purple-200/80">
                  <div className="bg-purple-500/10 p-2 rounded-lg">
                    <Code size={20} />
                  </div>
                  <span className="text-sm md:text-base">
                    Desarrollo web y móvil
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="mailto:contacto@ejemplo.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 px-4 md:px-6 py-2.5 md:py-3 rounded-xl text-white text-sm md:text-base font-medium hover:opacity-90 transition-opacity"
                >
                  Enviar mensaje
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-2xl border border-purple-500/20 p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  <span className="text-green-400 font-medium">
                    Disponible para proyectos
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-purple-200">
                    Horario de trabajo
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-purple-200/80">
                    <div>
                      <p className="font-medium">Lunes - Viernes</p>
                      <p>9:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Zona horaria</p>
                      <p>GMT-3 (Argentina)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-purple-200">
                    Servicios
                  </h3>
                  <ul className="space-y-2 text-sm text-purple-200/80">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Desarrollo Frontend
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Desarrollo Backend
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Aplicaciones Móviles
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      UI/UX Design
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
