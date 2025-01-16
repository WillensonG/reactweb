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

const ModernPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projectData = [
    {
      title: "✨ Sistema de Pasarela de Pago",
      description:
        "Plataforma de procesamiento de pagos integrada con múltiples proveedores",
      tags: ["⚛️ React", "🚀 Node.js", "💳 Stripe"],
      imageUrl: "/api/placeholder/400/250",
    },
    {
      title: "🎨 Landing Page Moderna",
      description:
        "Página de aterrizaje con diseño moderno y animaciones fluidas",
      tags: ["⚛️ React", "🎭 Framer"],
      imageUrl: "/api/placeholder/400/250",
    },
    {
      title: "📊 Dashboard Analítico",
      description: "Panel de control interactivo para visualización de datos",
      tags: ["⚛️ React", "📈 D3.js"],
      imageUrl: "/api/placeholder/400/250",
    },
  ];

  const stats = [
    {
      icon: "💻",
      title: "10+ Proyectos",
      description: "Entregados con éxito",
    },
    {
      icon: "✨",
      title: "2 años",
      description: "De experiencia",
    },
    {
      icon: "🚀",
      title: "Disponible",
      description: "Para proyectos",
    },
  ];

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Laravel", icon: "🔥" },
    { name: "AI", icon: "🤖" },
    { name: "Web", icon: "🌐" },
    { name: "Mobile", icon: "📱" },
  ];

  const skillsData = [
    { name: "⚛️ React", level: 90, color: "from-purple-400 to-purple-600" },
    {
      name: "📜 JavaScript",
      level: 85,
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "🎭 Framer Motion",
      level: 80,
      color: "from-purple-400 to-purple-600",
    },
    { name: "🐍 Python", level: 70, color: "from-purple-400 to-purple-600" },
  ];

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1
            className="text-xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            WR
          </motion.h1>

          <div className="hidden md:flex items-center space-x-8">
            <motion.a href="#inicio" className="text-gray-300 hover:text-white">
              Inicio
            </motion.a>
            <motion.a
              href="/projects"
              className="text-gray-300 hover:text-white"
            >
              Proyectos
            </motion.a>
            <motion.a href="/about" className="text-gray-300 hover:text-white">
              Sobre mí
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 px-4 py-2 rounded-lg"
            >
              Contactar ✨
            </motion.button>
          </div>

          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <a
              href="#inicio"
              className="block text-gray-300 hover:text-white py-2"
            >
              Inicio
            </a>
            <a
              href="#proyectos"
              className="block text-gray-300 hover:text-white py-2"
            >
              Proyectos
            </a>
            <a
              href="#sobre-mi"
              className="block text-gray-300 hover:text-white py-2"
            >
              Sobre mí
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 pt-32">
        {/* Hero Section */}
        <section className="py-12" id="inicio">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="max-w-3xl">
              <motion.h2
                className="text-purple-500 text-xl mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              ></motion.h2>
              <motion.h1
                className="text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Willenson R. Guillen Inirio
              </motion.h1>
              <motion.h2
                className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Desarrollador Full Stack
              </motion.h2>
              <motion.p
                className="text-gray-400 text-lg mb-12 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Especializado en la creación de soluciones tecnológicas
                innovadoras y experiencias digitales excepcionales. Transformo
                ideas en aplicaciones web modernas y eficientes.
              </motion.p>

              <div className="flex gap-4 mb-12">
                <motion.a
                  href="#proyectos"
                  className="bg-purple-600 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 relative group overflow-hidden shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 transition-opacity group-hover:opacity-90" />
                  <span className="relative z-10">Ver Proyectos</span>
                  <span className="relative z-10">✨</span>
                </motion.a>
                <motion.a
                  href="/CV Willenson Rafael Guillen Inirio.pdf"
                  download="/CV Willenson Rafael Guillen Inirio.pdf"
                  className="bg-transparent border border-purple-600/50 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 hover:border-purple-600 transition-colors shadow-[0_0_15px_rgba(147,51,234,0.1)] hover:shadow-[0_0_15px_rgba(147,51,234,0.2)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Descargar CV</span>
                  <Download size={18} className="text-purple-500" />
                </motion.a>
              </div>
            </div>

            {/* Stats Card */}
            <motion.div
              className="lg:w-96 shrink-0 bg-gradient-to-br from-purple-900/20 to-black rounded-3xl p-8 backdrop-blur-xl border border-purple-500/20 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center text-2xl">
                      {stat.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {stat.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {stat.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12" id="proyectos">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Proyectos Destacados
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900/50 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
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
                        href="#"
                        className="bg-purple-600/90 p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Habilidades Técnicas 🛠️
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900/50 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12" id="contacto">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Conectemos 🤝
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.a
              href="https://github.com/WillensonG"
              className="bg-zinc-900/50 p-6 rounded-xl flex items-center gap-4"
              whileHover={{ y: -5 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-gray-400">Revisa mis proyectos</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/willensón-rafael-guillén-inirio/"
              className="bg-zinc-900/50 p-6 rounded-xl flex items-center gap-4"
              whileHover={{ y: -5 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-gray-400">Conecta conmigo</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:willensonr.g@gmail.com"
              className="bg-zinc-900/50 p-6 rounded-xl flex items-center gap-4"
              whileHover={{ y: -5 }}
            >
              <Mail size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">willensonr.g@gmail.com</p>
              </div>
            </motion.a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
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
                className="text-gray-400 mb-6"
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
                  className="bg-zinc-900/50 p-2.5 rounded-xl text-purple-400 hover:text-purple-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/willensón-rafael-guillén-inirio/"
                  className="bg-zinc-900/50 p-2.5 rounded-xl text-purple-400 hover:text-purple-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:willensonr.g@gmail.com"
                  className="bg-zinc-900/50 p-2.5 rounded-xl text-purple-400 hover:text-purple-300"
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
                <li>
                  <motion.a
                    href="#inicio"
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    Inicio
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="/projects"
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    Proyectos
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="/about"
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    Sobre mí
                  </motion.a>
                </li>
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
                <p className="flex items-center gap-3 text-gray-400">
                  <Mail size={16} />
                  willensonr.g@gmail.com
                </p>
                <p className="flex items-center gap-3 text-gray-400">
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
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                © {new Date().getFullYear()} Willenson Rafael. Todos los
                derechos reservados.
              </motion.p>
              <motion.div
                className="flex items-center gap-6 text-gray-400 text-sm"
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

export default ModernPortfolio;
