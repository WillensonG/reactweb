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
  Globe,
  Phone,
} from "lucide-react";

const ModernPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("es"); // Estado para el idioma

  // Detectar idioma del navegador al cargar
  useEffect(() => {
    const browserLang = navigator.language.startsWith("es") ? "es" : "en";
    setLanguage(browserLang);
  }, []);

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  // Contenido traducido
  const content = {
    es: {
      nav: {
        home: "Inicio",
        projects: "Proyectos",
        about: "Sobre mí",
        contact: "Contactar ✨",
      },
      hero: {
        role: "Desarrollador Full Stack",
        description:
          "Especializado en la creación de soluciones tecnológicas innovadoras y experiencias digitales excepcionales. Transformo ideas en aplicaciones web modernas y eficientes.",
        viewProjects: "Ver Proyectos",
        downloadCV: "Descargar CV",
      },
      stats: [
        {
          icon: "💻",
          title: "20+ Proyectos",
          description: "Entregados con éxito",
        },
        {
          icon: "✨",
          title: "4 años",
          description: "De experiencia",
        },
        {
          icon: "🚀",
          title: "Disponible",
          description: "Para proyectos",
        },
      ],
      projects: {
        title: "Proyectos Destacados",
        viewGithub: "GitHub",
        items: [
          {
            title: "✨ Sistema de Pasarela de Pago",
            description:
              "Plataforma de procesamiento de pagos integrada con múltiples proveedores",
            tags: ["⚛️ React", "🚀 Node.js", "💳 Stripe"],
            imageUrl: "./img/pagos.png",
          },
          {
            title: "🎨 Landing Page Moderna",
            description:
              "Página de aterrizaje con diseño moderno y animaciones fluidas",
            tags: ["⚛️ React", "🎭 Framer"],
            imageUrl: "./img/webS.png",
          },
          {
            title: "📊 App de gestión de Tareas",
            description:
              "Aplicación Web para gestión eficiente de tareas y proyectos en equipo.",
            tags: ["⚛️ React", "📈 Framer Motion"],
            imageUrl: "./img/to-do.png",
          },
        ],
      },
      skills: {
        title: "Habilidades Técnicas 🛠️",
        items: [
          { name: "⚛️ React", level: 90, color: "from-blue-200 to-blue-600" },
          {
            name: "📜 JavaScript",
            level: 85,
            color: "from-yellow-200 to-yellow-600",
          },
          {
            name: "🎭 Wordpress",
            level: 90,
            color: "from-purple-200 to-purple-600",
          },
          {
            name: "🐍 Python",
            level: 70,
            color: "from-green-200 to-green-600",
          },
          {
            name: "🌐 node.js",
            level: 80,
            color: "from-green-300 to-gray-600",
          },
          {
            name: "🎨 Tailwind CSS",
            level: 85,
            color: "from-teal-200 to-teal-600",
          },
          {
            name: "📦 MongoDB",
            level: 65,
            color: "from-emerald-200 to-emerald-600",
          },
          {
            name: "📊 Data Analysis",
            level: 55,
            color: "from-pink-200 to-pink-600",
          },
        ],
      },
      contact: {
        title: "Conectemos 🤝",
        github: {
          title: "GitHub",
          description: "Revisa mis proyectos",
        },
        linkedin: {
          title: "LinkedIn",
          description: "Conecta conmigo",
        },
        email: {
          title: "Email",
          description: "willensonr.g@gmail.com",
        },
      },
      footer: {
        about: {
          title: "Willenson Rafael",
          description:
            "Desarrollador web apasionado por crear experiencias digitales extraordinarias y soluciones innovadoras que marquen la diferencia.",
        },
        quickLinks: {
          title: "Enlaces Rápidos",
          home: "Inicio",
          projects: "Proyectos",
          about: "Sobre mí",
        },
        contact: {
          title: "Contacto",
          location: "Santo Domingo, RD",
        },
        copyright: "© {year} Willenson Rafael. Todos los derechos reservados.",
        privacyPolicy: "Política de Privacidad",
        termsOfUse: "Términos de Uso",
      },
      techStack: [
        { name: "React", icon: "⚛️" },
        { name: "Laravel", icon: "🔥" },
        { name: "AI", icon: "🤖" },
        { name: "Web", icon: "🌐" },
        { name: "Mobile", icon: "📱" },
      ],
    },
    en: {
      nav: {
        home: "Home",
        projects: "Projects",
        about: "About me",
        contact: "Contact ✨",
      },
      hero: {
        role: "Full Stack Developer",
        description:
          "Specialized in creating innovative technological solutions and exceptional digital experiences. I transform ideas into modern and efficient web applications.",
        viewProjects: "View Projects",
        downloadCV: "Download CV",
      },
      stats: [
        {
          icon: "💻",
          title: "20+ Projects",
          description: "Successfully delivered",
        },
        {
          icon: "✨",
          title: "4 years",
          description: "Of experience",
        },
        {
          icon: "🚀",
          title: "Available",
          description: "For projects",
        },
      ],
      projects: {
        title: "Featured Projects",
        viewGithub: "GitHub",
        items: [
          {
            title: "✨ Payment Gateway System",
            description:
              "Payment processing platform integrated with multiple providers",
            tags: ["⚛️ React", "🚀 Node.js", "💳 Stripe"],
            imageUrl: "./img/pagos.png",
          },
          {
            title: "🎨 Modern Landing Page",
            description:
              "Landing page with modern design and smooth animations",
            tags: ["⚛️ React", "🎭 Framer"],
            imageUrl: "./img/webS.png",
          },
          {
            title: "📊 Task Management App",
            description:
              "Web application for efficient management of tasks and team projects",
            tags: ["⚛️ React", "📈 Framer Motion"],
            imageUrl: "./img/to-do.png",
          },
        ],
      },
      skills: {
        title: "Technical Skills 🛠️",
        items: [
          { name: "⚛️ React", level: 90, color: "from-blue-200 to-blue-600" },
          {
            name: "📜 JavaScript",
            level: 85,
            color: "from-yellow-200 to-yellow-600",
          },
          {
            name: "🎭 Wordpress",
            level: 90,
            color: "from-purple-200 to-purple-600",
          },
          {
            name: "🐍 Python",
            level: 70,
            color: "from-green-200 to-green-600",
          },
          {
            name: "🌐 node.js",
            level: 80,
            color: "from-green-300 to-gray-600",
          },
          {
            name: "🎨 Tailwind CSS",
            level: 85,
            color: "from-teal-200 to-teal-600",
          },
          {
            name: "📦 MongoDB",
            level: 65,
            color: "from-emerald-200 to-emerald-600",
          },
          {
            name: "📊 Data Analysis",
            level: 55,
            color: "from-pink-200 to-pink-600",
          },
        ],
      },
      contact: {
        title: "Let's Connect 🤝",
        github: {
          title: "GitHub",
          description: "Check out my projects",
        },
        linkedin: {
          title: "LinkedIn",
          description: "Connect with me",
        },
        email: {
          title: "Email",
          description: "willensonr.g@gmail.com",
        },
      },
      footer: {
        about: {
          title: "Willenson Rafael",
          description:
            "Web developer passionate about creating extraordinary digital experiences and innovative solutions that make a difference.",
        },
        quickLinks: {
          title: "Quick Links",
          home: "Home",
          projects: "Projects",
          about: "About me",
        },
        contact: {
          title: "Contact",
          location: "Santo Domingo, DR",
        },
        copyright: "© {year} Willenson Rafael. All rights reserved.",
        privacyPolicy: "Privacy Policy",
        termsOfUse: "Terms of Use",
      },
      techStack: [
        { name: "React", icon: "⚛️" },
        { name: "Laravel", icon: "🔥" },
        { name: "AI", icon: "🤖" },
        { name: "Web", icon: "🌐" },
        { name: "Mobile", icon: "📱" },
      ],
    },
  };
  const WhatsAppButton = ({ phoneNumber, message }) => {
    // Generate WhatsApp URL with phone number and pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    return (
      <div className="fixed bottom-8 right-8 z-50">
        {/* Pulse animation ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-purple-700 opacity-30"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        {/* Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-gray-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Phone size={24} />
        </motion.a>
      </div>
    );
  };

  // Usar el contenido del idioma seleccionado
  const t = content[language];

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
              {t.nav.home}
            </motion.a>
            <motion.a
              href="/projects"
              className="text-gray-300 hover:text-white"
            >
              {t.nav.projects}
            </motion.a>
            <motion.a href="/about" className="text-gray-300 hover:text-white">
              {t.nav.about}
            </motion.a>

            {/* Botón de idioma */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-gray-300 hover:text-white bg-purple-900/30 px-3 py-1.5 rounded-lg"
            >
              <Globe size={16} />
              <span>{language === "es" ? "EN" : "ES"}</span>
            </motion.button>

            <a href="mailto:Willensonr.g@gmail.com">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg"
              >
                {t.nav.contact}
              </motion.button>
            </a>
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
              {t.nav.home}
            </a>
            <a
              href="/projects"
              className="block text-gray-300 hover:text-white py-2"
            >
              {t.nav.projects}
            </a>
            <a
              href="/about"
              className="block text-gray-300 hover:text-white py-2"
            >
              {t.nav.about}
            </a>

            {/* Botón de idioma en menú móvil */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-gray-300 hover:text-white py-2"
            >
              <Globe size={16} />
              <span className="ml-1">
                {language === "es" ? "English" : "Español"}
              </span>
            </motion.button>
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
                {t.hero.role}
              </motion.h2>
              <motion.p
                className="text-gray-400 text-lg mb-12 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {t.hero.description}
              </motion.p>

              <div className="flex gap-4 mb-12">
                <motion.a
                  href="/projects"
                  className="bg-purple-600 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 relative group overflow-hidden shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 transition-opacity group-hover:opacity-90" />
                  <span className="relative z-10">{t.hero.viewProjects}</span>
                  <span className="relative z-10">✨</span>
                </motion.a>
                <motion.a
                  href="/CV-Willenson-Guillen-Developer.pdf"
                  download="/CV-Willenson-Guillen-Developer.pdf"
                  className="bg-transparent border border-purple-600/50 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 hover:border-purple-600 transition-colors shadow-[0_0_15px_rgba(147,51,234,0.1)] hover:shadow-[0_0_15px_rgba(147,51,234,0.2)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{t.hero.downloadCV}</span>
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
                {t.stats.map((stat, index) => (
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
            {t.projects.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.items.map((project, index) => (
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
            {t.skills.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.skills.items.map((skill, index) => (
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
            {t.contact.title}
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
                <h3 className="font-semibold">{t.contact.github.title}</h3>
                <p className="text-gray-400">{t.contact.github.description}</p>
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
                <h3 className="font-semibold">{t.contact.linkedin.title}</h3>
                <p className="text-gray-400">
                  {t.contact.linkedin.description}
                </p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:willensonr.g@gmail.com"
              className="bg-zinc-900/50 p-6 rounded-xl flex items-center gap-4"
              whileHover={{ y: -5 }}
            >
              <Mail size={24} />
              <div>
                <h3 className="font-semibold">{t.contact.email.title}</h3>
                <p className="text-gray-400">{t.contact.email.description}</p>
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
                {t.footer.about.title}
              </motion.h3>
              <motion.p
                className="text-gray-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {t.footer.about.description}
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
                {t.footer.quickLinks.title}
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
                    {t.footer.quickLinks.home}
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="/projects"
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    {t.footer.quickLinks.projects}
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="/about"
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    {t.footer.quickLinks.about}
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
                {t.footer.contact.title}
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
                  {t.footer.contact.location}
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
                {t.footer.copyright.replace("{year}", new Date().getFullYear())}
              </motion.p>
              <motion.div
                className="flex items-center gap-6 text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <a href="#" className="hover:text-purple-300 transition-colors">
                  {t.footer.privacyPolicy}
                </a>
                <span className="h-1 w-1 rounded-full bg-purple-500"></span>
                <a href="#" className="hover:text-purple-300 transition-colors">
                  {t.footer.termsOfUse}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
      {/* WhatsApp Button */}
      <WhatsAppButton
        phoneNumber="18097773462" // Replace with your actual phone number (with Dominican Republic country code)
        message={
          language === "es"
            ? "Hola, me interesa contactarte desde tu portafolio web."
            : "Hello, I'm interested in contacting you from your portfolio website."
        }
      />
    </div>
  );
};

export default ModernPortfolio;
