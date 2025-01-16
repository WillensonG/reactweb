import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, Instagram, Menu, X } from "lucide-react";

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/projects" },

    { name: "Contacto", href: "/#contact" },
  ];

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
  const experiences = [
    {
      year: "2024 - Presente",
      role: "Pasante de Desarrollo Web y TI",
      company: "Grupo Chavón",
      description:
        "Contribuí al desarrollo de soluciones tecnológicas, incluyendo proyectos de frontend con React, implementación de pasarelas de pago con Framer Motion y soporte técnico general. Enfocado en mercados hispanos.",
    },
    {
      year: "2023 - 2024",
      role: "Encargado del Departamento de TI",
      company: "Cigar Country",
      description:
        "Lideré el departamento de TI, implementando soluciones innovadoras y gestionando proyectos tecnológicos clave para optimizar los procesos internos de la empresa.",
    },
    {
      year: "2024",
      role: "Desarrollador Web",
      company: "Proyecto Freelance",
      description:
        "Gestioné 30 dominios y desarrollé landing pages optimizadas para usuarios hispanohablantes, combinando diseño atractivo con funcionalidades prácticas.",
    },
    {
      year: "2023",
      role: "Desarrollador Frontend",
      company: "Proyecto Personal",
      description:
        "Desarrollé una lista de tareas en React, integrando funciones interactivas y mejorando la experiencia del usuario.",
    },
  ];

  const personalSkills = [
    "Resolución creativa de problemas",
    "Trabajo en equipo eficiente",
    "Comunicación efectiva",
    "Aprendizaje continuo",
    "Adaptabilidad",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
              Sobre Mí
            </h1>
            <p className="text-xl text-purple-200/90 max-w-2xl mx-auto">
              Desarrollador apasionado por crear experiencias digitales
              excepcionales y soluciones tecnológicas innovadoras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mi Historia */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-2xl p-6 border border-purple-500/20"
            >
              <h2 className="text-2xl font-semibold mb-6 text-purple-300">
                Mi Historia
              </h2>
              <div className="space-y-4 text-purple-200/80">
                <p>
                  Desde pequeño, siempre me ha apasionado la tecnología y cómo
                  puede ser una herramienta poderosa para transformar el mundo.
                  Este interés me llevó a explorar el desarrollo web, un campo
                  en el que llevo más de 5 años trabajando.
                </p>
                <p>
                  Me gradué del{" "}
                  <b>Instituto Tecnológico de las Américas (ITLA)</b>, donde
                  obtuve una formación sólida en tecnologías de la información,
                  sentando las bases para mi carrera profesional en desarrollo
                  web y TI.
                </p>
                <p>
                  Actualmente, soy pasante de desarrollo web y TI en{" "}
                  <b>Grupo Chavón</b>, donde contribuyo a la creación de
                  soluciones tecnológicas innovadoras, incluyendo pasarelas de
                  pago y aplicaciones frontend utilizando <b>React</b> y otras
                  herramientas modernas.
                </p>
                <p>
                  En 2023, fui encargado del departamento de TI en{" "}
                  <b>Cigar Country</b>. Durante este período, lideré la
                  implementación de proyectos clave, optimizando los procesos
                  internos de la empresa a través de soluciones tecnológicas
                  avanzadas.
                </p>
                <p>
                  Además, gestioné más de 30 dominios y desarrollé landing pages
                  optimizadas para el mercado hispanohablante, combinando diseño
                  atractivo con funcionalidades prácticas. También he
                  desarrollado proyectos personales, como una lista de tareas en
                  React, enfocándome siempre en crear experiencias de usuario
                  excepcionales.
                </p>
                <p>
                  Mi filosofía profesional es simple: el mejor código no solo
                  debe cumplir con su propósito, sino también ser escalable,
                  mantenible y una guía para que otros desarrolladores crezcan.
                </p>
              </div>
            </motion.div>

            {/* Experiencia */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-2xl p-6 border border-purple-500/20"
            >
              <h2 className="text-2xl font-semibold mb-6 text-purple-300">
                Experiencia Profesional
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                    className="border-l-2 border-purple-500/30 pl-4"
                  >
                    <span className="text-sm text-purple-400">{exp.year}</span>
                    <h3 className="text-lg font-medium text-purple-200 mt-1">
                      {exp.role}
                    </h3>
                    <p className="text-purple-300 text-sm">{exp.company}</p>
                    <p className="text-purple-200/70 mt-2">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Habilidades Personales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-2xl p-6 border border-purple-500/20"
          >
            <h2 className="text-2xl font-semibold mb-6 text-purple-300">
              Habilidades Personales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {personalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-purple-900/30 rounded-xl p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-purple-400">
                    <Code size={20} />
                  </span>
                  <span className="text-purple-200">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-semibold mb-6 text-purple-300">
              ¡Trabajemos Juntos!
            </h2>
            <p className="text-purple-200/80 mb-8 max-w-2xl mx-auto">
              Siempre estoy interesado en nuevos proyectos y oportunidades de
              colaboración. ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://github.com/WillensonG"
                className="bg-purple-900/30 p-3 rounded-xl text-purple-400 hover:text-purple-300 hover:bg-purple-900/50 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/willens%C3%B3n-rafael-guill%C3%A9n-inirio/"
                className="bg-purple-900/30 p-3 rounded-xl text-purple-400 hover:text-purple-300 hover:bg-purple-900/50 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:Willensonr.g@gmail.com"
                className="bg-purple-900/30 p-3 rounded-xl text-purple-400 hover:text-purple-300 hover:bg-purple-900/50 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/web_solutionsrd/"
                className="bg-purple-900/30 p-3 rounded-xl text-purple-400 hover:text-purple-300 hover:bg-purple-900/50 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
