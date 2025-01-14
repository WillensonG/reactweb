import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  CheckCircle,
  Star,
  Sparkles,
} from "lucide-react";

const BentoPortfolio = () => {
  const [scrollY, setScrollY] = useState(0);

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
    {
      title: "📊 Dashboard Analítico",
      description: "Panel de control interactivo para visualización de datos",
      tags: ["⚛️ React", "📈 D3.js"],
      imageUrl: "/api/placeholder/400/250",
      size: "large",
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
    {
      name: "🐍 Python",
      level: 70,
      color: "from-green-400 to-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Bento Section */}
      <section className="py-12 px-4 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Profile Card - Spans 2 columns */}
            <motion.div
              className="md:col-span-2 bg-gradient-to-br from-purple-900/50 to-violet-900/50 rounded-3xl p-8 border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative group">
                  <motion.img
                    src="/api/placeholder/150/150"
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-purple-500/30 group-hover:border-purple-500/50 transition-colors duration-300"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 animate-pulse" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
                    Willenson Rafael
                    <motion.span
                      animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                      className="inline-block ml-2"
                    >
                      👋
                    </motion.span>
                  </h1>
                  <p className="text-purple-200 text-lg mb-6">
                    Desarrollador web creativo y apasionado
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-shadow duration-300"
                    >
                      Ver Proyectos <Sparkles size={18} />
                    </motion.button>
                    <motion.a
                      href="/cv.pdf"
                      download
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-purple-900/50 border border-purple-500/30 hover:border-purple-500/50 px-6 py-2.5 rounded-xl flex items-center gap-2 transition-colors duration-300"
                    >
                      Descargar CV <Download size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <motion.div
                className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-2xl p-4 border border-purple-500/20 hover:border-purple-500/30 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                <h4 className="text-purple-300 text-sm mb-1">Experiencia</h4>
                <p className="text-2xl font-bold text-purple-200">2+ años</p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-2xl p-4 border border-purple-500/20 hover:border-purple-500/30 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                <h4 className="text-purple-300 text-sm mb-1">Proyectos</h4>
                <p className="text-2xl font-bold text-purple-200">15+</p>
              </motion.div>
            </div>

            {/* Projects Grid */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6">
              {projectData.map((project, index) => (
                <motion.div
                  key={index}
                  className={`group bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-2xl p-5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300
                    ${project.size === "large" ? "md:col-span-2" : ""} 
                    ${project.size === "medium" ? "md:col-span-1" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative mb-4 overflow-hidden rounded-xl group">
                    <motion.img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                      <motion.div
                        className="flex gap-3"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                      >
                        <motion.a
                          href="#"
                          className="bg-purple-600/90 p-2 rounded-full hover:bg-purple-500/90 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={20} />
                        </motion.a>
                        <motion.a
                          href="#"
                          className="bg-purple-600/90 p-2 rounded-full hover:bg-purple-500/90 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-300 group-hover:text-purple-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-purple-200/80 text-sm mb-4 group-hover:text-purple-200/90 transition-colors">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30 group-hover:border-purple-500/50 transition-colors"
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
              className="md:col-span-3 bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-2xl p-6 border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-purple-300 flex items-center gap-2">
                Habilidades Técnicas
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  🛠️
                </motion.span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="group relative bg-black/20 rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-purple-200 group-hover:text-purple-100 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-purple-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-purple-900/30 rounded-full overflow-hidden mb-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>

                    <p className="text-sm text-purple-300/70 group-hover:text-purple-200/90 transition-colors">
                      {skill.description}
                    </p>
                    <div className="absolute -right-1 -top-1">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skills Summary */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div
                  className="bg-black/20 rounded-xl p-4 border border-purple-500/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-purple-300 font-medium mb-2">Frontend</h4>
                  <p className="text-sm text-purple-200/70">
                    Especializado en crear interfaces modernas y responsivas con
                    React y frameworks CSS modernos.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-black/20 rounded-xl p-4 border border-purple-500/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-purple-300 font-medium mb-2">Backend</h4>
                  <p className="text-sm text-purple-200/70">
                    Desarrollo de APIs RESTful y manejo de bases de datos NoSQL
                    con Node.js y MongoDB.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-black/20 rounded-xl p-4 border border-purple-500/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-purple-300 font-medium mb-2">Mobile</h4>
                  <p className="text-sm text-purple-200/70">
                    Desarrollo de aplicaciones móviles multiplataforma con React
                    Native y Firebase.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-3xl p-6 border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-300">
                Conectemos 🤝
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="#"
                  className="flex items-center gap-3 text-purple-200 hover:text-purple-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="flex items-center gap-3 text-purple-200 hover:text-purple-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-3 text-purple-200 hover:text-purple-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Mail size={20} />
                  <span>Email</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="mt-20 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                extraordinarias y soluciones innovadoras.
              </motion.p>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:contact@example.com",
                    label: "Email",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="bg-purple-900/30 p-2.5 rounded-xl text-purple-400 hover:text-purple-300 hover:bg-purple-900/50 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
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
                {[
                  { name: "Inicio", href: "#home" },
                  { name: "Proyectos", href: "#portfolio" },
                  { name: "Habilidades", href: "#skills" },
                  { name: "Contacto", href: "#contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-purple-200/70 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <span className="h-1 w-1 rounded-full bg-purple-500"></span>
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
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-3 text-purple-200/70 hover:text-purple-300 transition-colors duration-300"
                >
                  <Mail size={16} />
                  contact@example.com
                </a>
                <p className="flex items-center gap-3 text-purple-200/70">
                  <span className="inline-block">📍</span>
                  Santo Domingo, República Dominicana
                </p>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-purple-500/20">
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
