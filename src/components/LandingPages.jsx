import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Menu,
  X,
} from "lucide-react";

const BentoPortfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projectData = [
    {
      title: "✨ Sistema de Pasarela de Pago",
      description:
        "Plataforma de procesamiento de pagos integrada con múltiples proveedores",
      tags: ["⚛️ React", "🚀 Node.js", "💳 Stripe"],
      imageUrl: "/api/placeholder/400/250",
      size: "large",
    },
    {
      title: "🎨 Landing Page Moderna",
      description:
        "Página de aterrizaje con diseño moderno y animaciones fluidas",
      tags: ["⚛️ React", "🎭 Framer"],
      imageUrl: "/api/placeholder/400/250",
      size: "medium",
    },
    {
      title: "📊 Dashboard Analítico",
      description: "Panel de control interactivo para visualización de datos",
      tags: ["⚛️ React", "📈 D3.js"],
      imageUrl: "/api/placeholder/400/250",
      size: "small",
    },
  ];

  const skillsData = [
    { name: "⚛️ React", level: 90, color: "from-blue-400 to-blue-600" },
    {
      name: "📜 JavaScript",
      level: 85,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "🎭 Framer Motion",
      level: 80,
      color: "from-purple-400 to-purple-600",
    },
    { name: "🐍 Python", level: 70, color: "from-green-400 to-green-600" },
  ];

  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "/about" },
    { name: "Proyectos", href: "/projects" },
    { name: "Proyectos", href: "/tests" },
  ];

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
            href="#"
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-violet-600 px-4 py-2 rounded-xl flex items-center gap-2 text-sm"
            >
              Contactar ✨
            </motion.button>
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

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 px-4 md:py-20" id="home">
          <div className="max-w-7xl mx-auto">
            {/* Profile Card */}
            <div className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-purple-900/50 to-violet-900/50 rounded-3xl p-8 border border-purple-500/20">
              <motion.img
                src="/api/placeholder/150/150"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-purple-500/30"
                whileHover={{ scale: 1.05, rotate: 5 }}
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-200">
                  Willenson Rafael Guillen Inirio
                  <span className="inline-block ml-2">👋</span>
                </h1>

                <p className="text-purple-200 text-lg mb-6">
                  Desarrollador web creativo y apasionado
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-2.5 rounded-xl flex items-center gap-2"
                  >
                    Ver Proyectos ✨
                  </motion.button>
                  <motion.a
                    href="\CV Willenson Rafael Guillen Inirio.pdf"
                    download="\CV Willenson Rafael Guillen Inirio.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-900/50 border border-purple-500/30 hover:border-purple-500/50 px-6 py-2.5 rounded-xl flex items-center gap-2"
                  >
                    Descargar CV <Download size={18} />
                  </motion.a>
                </div>
              </div>
            </div>

            <hr />
            {/* Projects Grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
              id="portfolio"
            >
              {projectData.map((project, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-2xl p-5 border border-purple-500/20
                    ${project.size === "large" ? "md:col-span-2" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex gap-3">
                        <motion.a
                          href="https://github.com/WillensonG"
                          className="bg-purple-600/90 p-2 rounded-full"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Github size={20} />
                        </motion.a>
                        <motion.a
                          href="https://github.com/WillensonG"
                          className="bg-purple-600/90 p-2 rounded-full"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">
                    {project.title}
                  </h3>
                  <p className="text-purple-200/80 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Section */}
            <motion.div
              className="mt-12 bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-2xl p-6 border border-purple-500/20"
              id="skills"
            >
              <h3 className="text-2xl font-semibold mb-8 text-purple-300">
                Habilidades Técnicas 🛠️
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-black/20 rounded-xl p-4 border border-purple-500/20"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-purple-200">
                        {skill.name}
                      </span>
                      <span className="text-purple-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-purple-900/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              className="mt-12 bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-3xl p-6 border border-purple-500/20"
              id="contact"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-300">
                Conectemos 🤝
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="https://github.com/WillensonG"
                  className="flex items-center gap-3 text-purple-200 hover:text-purple-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/willens%C3%B3n-rafael-guill%C3%A9n-inirio/"
                  className="flex items-center gap-3 text-purple-200 hover:text-purple-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href="mailto:willensonr.g@gmail.com"
                  className="flex items-center gap-3 text-purple-200 hover:text-purple-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Mail size={20} />
                  <span>Email</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="mt-20 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* About Column */}
            <div className="md:col-span-2">
              <motion.h3
                className="text-xl font-bold mb-4 text-purple-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Willenson Rafael
              </motion.h3>
              <motion.p
                className="text-purple-200/80 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Desarrollador web apasionado por crear experiencias digitales
                extraordinarias y soluciones innovadoras que marquen la
                diferencia.
              </motion.p>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.a
                  href="https://github.com/WillensonG"
                  className="bg-purple-900/30 p-2.5 rounded-xl text-purple-400 hover:text-purple-300 hover:bg-purple-900/50 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/willens%C3%B3n-rafael-guill%C3%A9n-inirio/"
                  className="bg-purple-900/30 p-2.5 rounded-xl text-purple-400 hover:text-purple-300 hover:bg-purple-900/50 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:willensonr.g@gmail.com"
                  className="bg-purple-900/30 p-2.5 rounded-xl text-purple-400 hover:text-purple-300 hover:bg-purple-900/50 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={20} />
                </motion.a>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h3
                className="text-lg font-semibold mb-4 text-purple-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Enlaces Rápidos
              </motion.h3>
              <motion.ul
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {navItems.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-purple-200/70 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Contact Info */}
            <div>
              <motion.h3
                className="text-lg font-semibold mb-4 text-purple-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Contacto
              </motion.h3>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="flex items-center gap-3 text-purple-200/70">
                  <Mail size={16} />
                  Willensonr.g@gmailcom
                </p>
                <p className="flex items-center gap-3 text-purple-200/70">
                  <span className="inline-block">📍</span>
                  Santo Domingo, RD
                </p>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-purple-500/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                className="text-purple-200/60 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                © {new Date().getFullYear()} Willenson Rafael. Todos los
                derechos reservados.
              </motion.p>
              <motion.div
                className="flex items-center gap-6 text-purple-200/60 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <a href="#" className="hover:text-purple-300 transition-colors">
                  Política de Privacidad
                </a>
                <span className="h-1 w-1 rounded-full bg-purple-500"></span>
                <a href="#" className="hover:text-purple-300 transition-colors">
                  Términos de Uso
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BentoPortfolio;
