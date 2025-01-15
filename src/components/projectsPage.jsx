import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Menu, X, Code } from "lucide-react";

const ProjectsPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Mí", href: "/about" },
    { name: "Proyectos", href: "/projects" },
    { name: "Contacto", href: "/#contact" },
  ];

  const projectsData = [
    {
      title: "Sistema de Pasarela de Pago",
      description:
        "Una plataforma de procesamiento de pagos integrada con múltiples proveedores que facilita transacciones seguras.",
      image: "/api/placeholder/600/400",
      category: "Web App",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      featured: true,
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Dashboard Analytics",
      description:
        "Panel de control interactivo para visualización de datos empresariales en tiempo real.",
      image: "/api/placeholder/600/400",
      category: "Dashboard",
      technologies: ["React", "D3.js", "Firebase"],
      featured: true,
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "App de Gestión de Tareas",
      description:
        "Aplicación móvil para gestión eficiente de tareas y proyectos en equipo.",
      image: "/api/placeholder/600/400",
      category: "Mobile",
      technologies: ["React Native", "Redux", "Firebase"],
      featured: false,
      links: {
        github: "#",
        live: "#",
      },
    },
  ];

  const categories = ["Todos", "Web App", "Dashboard", "Mobile"];

  const filteredProjects = projectsData.filter(
    (project) =>
      selectedCategory === "Todos" || project.category === selectedCategory
  );

  // Componente de Navegación
  const Navigation = () => (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20
        ${scrollY > 50 ? "shadow-lg shadow-purple-500/10" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.a
            href="/"
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400"
            whileHover={{ scale: 1.05 }}
          >
            WR
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-purple-200/80 hover:text-purple-200 transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <motion.button
            className="md:hidden text-purple-200 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <motion.div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="block text-purple-200/80 hover:text-purple-200 py-2 transition-colors"
                whileHover={{ x: 5 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Header */}
      <header className="pt-28 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Mis Proyectos
          </motion.h1>
          <motion.p
            className="text-xl text-purple-200/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Una colección de mis trabajos más destacados en desarrollo web y
            mobile
          </motion.p>
        </div>
      </header>

      {/* Filter Categories */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-xl border ${
                  selectedCategory === category
                    ? "border-purple-500 bg-purple-500/20 text-purple-200"
                    : "border-purple-500/20 text-purple-200/60 hover:border-purple-500/40"
                } transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={index}
                className={`bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-2xl overflow-hidden border border-purple-500/20
                  ${project.featured ? "md:col-span-2" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 flex gap-4">
                      <motion.a
                        href={project.links.github}
                        className="bg-purple-600/90 p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.links.live}
                        className="bg-purple-600/90 p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-purple-200">
                    {project.title}
                  </h3>
                  <p className="text-purple-200/70 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-sm bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-3xl p-8 border border-purple-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-200">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-purple-200/80 mb-6">
              Estoy disponible para nuevos proyectos y colaboraciones. ¡Hablemos
              sobre cómo puedo ayudarte!
            </p>
            <motion.a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3 rounded-xl text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar
              <Code size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
