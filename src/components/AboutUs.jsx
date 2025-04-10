import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Instagram,
  Menu,
  X,
  Download,
  Moon,
  Sun,
  Globe,
} from "lucide-react";

// Componentes separados para mejor organización
const Navigation = ({
  scrollY,
  isMenuOpen,
  setIsMenuOpen,
  isDarkMode,
  toggleTheme,
  language,
  toggleLanguage,
}) => {
  const navItems = [
    { name: language === "es" ? "Inicio" : "Home", href: "/" },
    { name: language === "es" ? "Proyectos" : "Projects", href: "/projects" },
    { name: language === "es" ? "Contacto" : "Contact", href: "/#contact" },
  ];

  // Smooth animation values for navigation
  const navOpacity = useTransform(
    scrollY,
    [0, 50],
    [isDarkMode ? 0.7 : 0.6, isDarkMode ? 0.85 : 0.75]
  );

  const navBlur = useTransform(scrollY, [0, 50], ["blur(8px)", "blur(12px)"]);

  const navPadding = useTransform(scrollY, [0, 50], ["1rem", "0.75rem"]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 border-b
        ${
          isDarkMode
            ? "bg-black border-purple-500/20 shadow-purple-500/10"
            : "bg-white border-purple-700/20 shadow-purple-700/10"
        }
        ${scrollY > 50 ? "shadow-lg" : ""}`}
      initial={{ y: -100 }}
      animate={{
        y: 0,
        backdropFilter: navBlur,
        backgroundColor: isDarkMode
          ? `rgba(0, 0, 0, ${navOpacity})`
          : `rgba(255, 255, 255, ${navOpacity})`,
      }}
      style={{ paddingTop: navPadding, paddingBottom: navPadding }}
      transition={{
        y: { type: "spring", stiffness: 300, damping: 30 },
        backgroundColor: { duration: 0.4 },
      }}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <motion.a
            href="/"
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-500"
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgba(168, 85, 247, 0.6)",
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            aria-label="Home"
          >
            WR
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className={`transition-colors ${
                  isDarkMode
                    ? "text-purple-200/80 hover:text-purple-200"
                    : "text-purple-800/80 hover:text-purple-900"
                }`}
                whileHover={{
                  y: -2,
                  color: isDarkMode ? "rgb(233, 213, 255)" : "rgb(88, 28, 135)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                {item.name}
              </motion.a>
            ))}

            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleLanguage}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-purple-900/30 text-purple-300"
                    : "bg-purple-100 text-purple-700"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={
                  language === "es" ? "Switch to English" : "Cambiar a Español"
                }
              >
                <Globe size={18} />
              </motion.button>
            </div>
          </div>

          <div className="flex md:hidden items-center space-x-3">
            <motion.button
              onClick={toggleLanguage}
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "bg-purple-900/30 text-purple-300"
                  : "bg-purple-100 text-purple-700"
              }`}
              whileTap={{ scale: 0.95 }}
              aria-label={
                language === "es" ? "Switch to English" : "Cambiar a Español"
              }
            >
              <Globe size={18} />
            </motion.button>

            <motion.button
              className={`p-2 ${
                isDarkMode ? "text-purple-200" : "text-purple-800"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: {
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                },
                opacity: {
                  duration: 0.2,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className={`block py-2 transition-colors ${
                      isDarkMode
                        ? "text-purple-200/80 hover:text-purple-200"
                        : "text-purple-800/80 hover:text-purple-900"
                    }`}
                    initial={{ x: -5, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 250,
                        damping: 20,
                      },
                    }}
                    whileHover={{
                      x: 5,
                      color: isDarkMode
                        ? "rgb(233, 213, 255)"
                        : "rgb(88, 28, 135)",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const SectionTitle = ({ children, className = "" }) => (
  <h2
    className={`text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-500 ${className}`}
  >
    {children}
  </h2>
);

const SkillItem = ({ icon, children }) => (
  <motion.div
    className="flex items-center gap-3 bg-purple-900/30 rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/50"
    whileHover={{
      scale: 1.03,
      backgroundColor: "rgba(126, 34, 206, 0.4)",
      borderColor: "rgba(168, 85, 247, 0.5)",
    }}
    whileTap={{ scale: 0.98 }}
    transition={{
      type: "spring",
      stiffness: 500,
      damping: 17,
      backgroundColor: { duration: 0.2 },
    }}
  >
    <motion.span
      className="text-purple-400"
      animate={{ y: [0, 2, 0] }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
      }}
    >
      {icon}
    </motion.span>
    <span className="text-purple-200">{children}</span>
  </motion.div>
);

const ExperienceItem = ({ year, role, company, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, x: -5 }}
    animate={{
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: 0.2 + index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }}
    className="relative pb-8 pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-purple-600/70 before:to-purple-700/30 last:before:to-transparent last:pb-0"
  >
    <motion.div
      className="absolute w-3 h-3 left-[-6px] top-2 rounded-full bg-purple-500"
      initial={{ scale: 0.5, opacity: 0.5 }}
      animate={{
        scale: 1,
        opacity: 1,
        boxShadow: "0 0 0 4px rgba(168, 85, 247, 0.2)",
        transition: {
          delay: 0.2 + index * 0.15 + 0.3,
          duration: 0.5,
        },
      }}
      whileHover={{
        scale: 1.2,
        backgroundColor: "#a855f7",
        boxShadow: "0 0 0 6px rgba(168, 85, 247, 0.3)",
      }}
    />
    <motion.span
      className="text-sm text-purple-400 font-medium inline-block"
      initial={{ opacity: 0, x: -10 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2 + index * 0.15 + 0.1,
          duration: 0.3,
        },
      }}
    >
      {year}
    </motion.span>
    <motion.h3
      className="text-lg font-medium text-purple-200 mt-1"
      initial={{ opacity: 0, x: -10 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2 + index * 0.15 + 0.2,
          duration: 0.3,
        },
      }}
    >
      {role}
    </motion.h3>
    <motion.p
      className="text-purple-300 text-sm"
      initial={{ opacity: 0, x: -10 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2 + index * 0.15 + 0.3,
          duration: 0.3,
        },
      }}
    >
      {company}
    </motion.p>
    <motion.p
      className="text-purple-200/70 mt-2"
      initial={{ opacity: 0, x: -10 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2 + index * 0.15 + 0.4,
          duration: 0.3,
        },
      }}
    >
      {description}
    </motion.p>
  </motion.div>
);

const SocialButton = ({ href, icon, label }) => (
  <motion.a
    href={href}
    className="bg-purple-900/30 p-3 rounded-xl text-purple-400 hover:text-purple-300 border border-purple-500/20"
    whileHover={{
      scale: 1.1,
      rotate: 5,
      backgroundColor: "rgba(126, 34, 206, 0.5)",
      borderColor: "rgba(168, 85, 247, 0.6)",
      boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
    }}
    whileTap={{
      scale: 0.9,
      rotate: -5,
    }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 10,
      backgroundColor: { duration: 0.2 },
      boxShadow: { duration: 0.2 },
    }}
    aria-label={label}
  >
    <motion.div
      animate={{
        rotate: [0, 5, 0, -5, 0],
        scale: [1, 1.1, 1, 1.1, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
        ease: "easeInOut",
      }}
    >
      {icon}
    </motion.div>
  </motion.a>
);

const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState("es"); // "es" for Spanish, "en" for English

  // Use framer-motion's useScroll hook for smoother scroll handling
  const { scrollY } = useScroll();
  const scrollYValue = useMotionValue(0);

  useEffect(() => {
    // Subscribe to changes in scrollY
    const unsubscribeY = scrollY.onChange((latest) => {
      scrollYValue.set(latest);
    });

    // Check user's preferred color scheme
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);

    // Check browser language
    const browserLang = navigator.language.startsWith("es") ? "es" : "en";
    setLanguage(browserLang);

    // Clean up subscriptions
    return () => {
      unsubscribeY();
    };
  }, [scrollY]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === "es" ? "en" : "es");

  // Content based on language
  const content = {
    es: {
      title: "Sobre Mí",
      subtitle:
        "Desarrollador apasionado por crear experiencias digitales excepcionales y soluciones tecnológicas innovadoras.",
      history: {
        title: "Mi Historia",
        paragraphs: [
          "Desde pequeño, siempre me ha apasionado la tecnología y cómo puede ser una herramienta poderosa para transformar el mundo. Este interés me llevó a explorar el desarrollo web, un campo en el que llevo más de 5 años trabajando.",
          "Me gradué del Instituto Tecnológico de las Américas (ITLA), donde obtuve una formación sólida en tecnologías de la información, sentando las bases para mi carrera profesional en desarrollo web y TI.",
          "Actualmente, soy pasante de desarrollo web y TI en Grupo Chavón, donde contribuyo a la creación de soluciones tecnológicas innovadoras, incluyendo pasarelas de pago y aplicaciones frontend utilizando React y otras herramientas modernas.",
          "En 2023, fui encargado del departamento de TI en Cigar Country. Durante este período, lideré la implementación de proyectos clave, optimizando los procesos internos de la empresa a través de soluciones tecnológicas avanzadas.",
          "Además, gestioné más de 30 dominios y desarrollé landing pages optimizadas para el mercado hispanohablante, combinando diseño atractivo con funcionalidades prácticas. También he desarrollado proyectos personales, como una lista de tareas en React, enfocándome siempre en crear experiencias de usuario excepcionales.",
          "Mi filosofía profesional es simple: el mejor código no solo debe cumplir con su propósito, sino también ser escalable, mantenible y una guía para que otros desarrolladores crezcan.",
        ],
      },
      experience: {
        title: "Experiencia Profesional",
        items: [
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
        ],
      },
      skills: {
        title: "Habilidades Personales",
        items: [
          "Resolución creativa de problemas",
          "Trabajo en equipo eficiente",
          "Comunicación efectiva",
          "Aprendizaje continuo",
          "Adaptabilidad",
          "Creatividad",
        ],
      },
      cta: {
        title: "¡Trabajemos Juntos!",
        text: "Siempre estoy interesado en nuevos proyectos y oportunidades de colaboración. ¿Tienes un proyecto en mente? ¡Hablemos!",
        resume: "Descargar CV",
      },
      technologies: {
        title: "Tecnologías",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Herramientas",
      },
    },
    en: {
      title: "About Me",
      subtitle:
        "A passionate developer creating exceptional digital experiences and innovative technological solutions.",
      history: {
        title: "My Story",
        paragraphs: [
          "Since I was young, I've always been passionate about technology and how it can be a powerful tool to transform the world. This interest led me to explore web development, a field in which I have been working for over 5 years.",
          "I graduated from the Instituto Tecnológico de las Américas (ITLA), where I received solid training in information technologies, laying the foundation for my professional career in web development and IT.",
          "Currently, I am a web development and IT intern at Grupo Chavón, where I contribute to the creation of innovative technological solutions, including payment gateways and frontend applications using React and other modern tools.",
          "In 2023, I was in charge of the IT department at Cigar Country. During this period, I led the implementation of key projects, optimizing the company's internal processes through advanced technological solutions.",
          "Additionally, I managed more than 30 domains and developed landing pages optimized for the Spanish-speaking market, combining attractive design with practical functionalities. I have also developed personal projects, such as a task list in React, always focusing on creating exceptional user experiences.",
          "My professional philosophy is simple: the best code should not only fulfill its purpose, but also be scalable, maintainable, and a guide for other developers to grow.",
        ],
      },
      experience: {
        title: "Professional Experience",
        items: [
          {
            year: "2024 - Present",
            role: "Web Development & IT Intern",
            company: "Grupo Chavón",
            description:
              "Contributed to the development of technological solutions, including frontend projects with React, payment gateway implementation with Framer Motion, and general technical support. Focused on Hispanic markets.",
          },
          {
            year: "2023 - 2024",
            role: "IT Department Manager",
            company: "Cigar Country",
            description:
              "Led the IT department, implementing innovative solutions and managing key technological projects to optimize the company's internal processes.",
          },
          {
            year: "2024",
            role: "Web Developer",
            company: "Freelance Project",
            description:
              "Managed 30 domains and developed optimized landing pages for Spanish-speaking users, combining attractive design with practical functionalities.",
          },
          {
            year: "2023",
            role: "Frontend Developer",
            company: "Personal Project",
            description:
              "Developed a task list in React, integrating interactive functions and improving the user experience.",
          },
        ],
      },
      skills: {
        title: "Personal Skills",
        items: [
          "Creative problem solving",
          "Efficient teamwork",
          "Effective communication",
          "Continuous learning",
          "Adaptability",
          "Attention to detail",
        ],
      },
      cta: {
        title: "Let's Work Together!",
        text: "I'm always interested in new projects and collaboration opportunities. Do you have a project in mind? Let's talk!",
        resume: "Download CV",
      },
      technologies: {
        title: "Technologies",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
      },
    },
  };

  // Use current language content
  const t = content[language];

  // Tech stack
  const technologies = {
    frontend: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
    backend: ["Node.js", "Express", "MongoDB", "Firebase"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Adobe XD"],
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
      <Navigation
        scrollY={scrollY}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        language={language}
        toggleLanguage={toggleLanguage}
      />

      {/* Hero Section with Parallax Effect */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-b from-purple-900/20 to-black"
              : "bg-gradient-to-b from-purple-100 to-white"
          }`}
        ></div>

        {/* Floating particles for visual effect - more elegant and subtle */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => {
            // Create more varied and natural particle sizes and speeds
            const size = Math.random() * 8 + 2;
            const duration = Math.random() * 15 + 15;
            const initialDelay = Math.random() * 5;
            const opacityMin = 0.05;
            const opacityMax = isDarkMode ? 0.25 : 0.2;

            return (
              <motion.div
                key={i}
                className={`absolute rounded-full blur-sm ${
                  isDarkMode ? "bg-purple-500" : "bg-purple-300"
                }`}
                style={{
                  width: size,
                  height: size,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  y: [
                    0,
                    (Math.random() * 60 - 30) * (size / 10),
                    (Math.random() * -60 + 30) * (size / 10),
                    0,
                  ],
                  x: [
                    0,
                    (Math.random() * 60 - 30) * (size / 10),
                    (Math.random() * -60 + 30) * (size / 10),
                    0,
                  ],
                  opacity: [opacityMin, opacityMax, opacityMin],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: initialDelay,
                }}
              />
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-500">
              {t.title}
            </h1>
            <p
              className={`text-xl max-w-2xl mx-auto ${
                isDarkMode ? "text-purple-200/90" : "text-purple-800/90"
              }`}
            >
              {t.subtitle}
            </p>

            <motion.a
              href="/Cv Willen.pdf"
              download="/Cv Willen.pdf"
              className={`mt-8 inline-flex items-center px-6 py-3 rounded-full font-medium ${
                isDarkMode ? "text-white" : "text-white"
              } shadow-lg ${
                isDarkMode ? "shadow-purple-500/20" : "shadow-purple-500/30"
              }`}
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 150,
                },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              style={{
                background: `linear-gradient(90deg, rgba(147, 51, 234, 1) 0%, rgba(139, 92, 246, 1) 100%)`,
                transition: "all 0.3s ease",
              }}
              transition={{
                scale: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
                boxShadow: {
                  duration: 0.2,
                },
              }}
            >
              <motion.span
                animate={{
                  x: [0, -3, 0, -3, 0],
                  rotate: [0, -10, 0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="mr-2"
              >
                <Download size={18} />
              </motion.span>
              {t.cta.resume}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Card Design */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mi Historia */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`rounded-2xl p-6 shadow-xl ${
                isDarkMode
                  ? "bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-purple-500/20"
                  : "bg-white border border-purple-100"
              }`}
            >
              <SectionTitle>{t.history.title}</SectionTitle>
              <div
                className={`space-y-4 ${
                  isDarkMode ? "text-purple-200/80" : "text-gray-700"
                }`}
              >
                {t.history.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Experiencia */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`rounded-2xl p-6 shadow-xl ${
                isDarkMode
                  ? "bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-purple-500/20"
                  : "bg-white border border-purple-100"
              }`}
            >
              <SectionTitle>{t.experience.title}</SectionTitle>
              <div className="space-y-2">
                {t.experience.items.map((exp, index) => (
                  <ExperienceItem
                    key={index}
                    year={exp.year}
                    role={exp.role}
                    company={exp.company}
                    description={exp.description}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`mt-12 rounded-2xl p-6 shadow-xl ${
              isDarkMode
                ? "bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-purple-500/20"
                : "bg-white border border-purple-100"
            }`}
          >
            <SectionTitle>{t.technologies.title}</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3
                  className={`font-medium mb-3 ${
                    isDarkMode ? "text-purple-300" : "text-purple-700"
                  }`}
                >
                  {t.technologies.frontend}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.frontend.map((tech, index) => (
                    <span
                      key={index}
                      className={`text-sm rounded-full px-3 py-1 ${
                        isDarkMode
                          ? "bg-purple-900/40 text-purple-200 border border-purple-500/30"
                          : "bg-purple-100 text-purple-800 border border-purple-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3
                  className={`font-medium mb-3 ${
                    isDarkMode ? "text-purple-300" : "text-purple-700"
                  }`}
                >
                  {t.technologies.backend}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.backend.map((tech, index) => (
                    <span
                      key={index}
                      className={`text-sm rounded-full px-3 py-1 ${
                        isDarkMode
                          ? "bg-purple-900/40 text-purple-200 border border-purple-500/30"
                          : "bg-purple-100 text-purple-800 border border-purple-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3
                  className={`font-medium mb-3 ${
                    isDarkMode ? "text-purple-300" : "text-purple-700"
                  }`}
                >
                  {t.technologies.tools}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.tools.map((tech, index) => (
                    <span
                      key={index}
                      className={`text-sm rounded-full px-3 py-1 ${
                        isDarkMode
                          ? "bg-purple-900/40 text-purple-200 border border-purple-500/30"
                          : "bg-purple-100 text-purple-800 border border-purple-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Habilidades Personales con Mejor Visualización */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`mt-12 rounded-2xl p-6 shadow-xl ${
              isDarkMode
                ? "bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-purple-500/20"
                : "bg-white border border-purple-100"
            }`}
          >
            <SectionTitle>{t.skills.title}</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {t.skills.items.map((skill, index) => (
                <SkillItem key={index} icon={<Code size={20} />}>
                  {skill}
                </SkillItem>
              ))}
            </div>
          </motion.div>

          {/* Call to Action Mejorado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`mt-16 rounded-2xl p-8 shadow-xl text-center ${
              isDarkMode
                ? "bg-gradient-to-r from-purple-900/30 to-violet-900/30 border border-purple-500/20"
                : "bg-gradient-to-r from-purple-100 to-violet-100 border border-purple-200"
            }`}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="inline-block p-4 rounded-full mb-6 bg-purple-500/20"
            >
              <Code size={40} className="text-purple-500" />
            </motion.div>

            <h2
              className={`text-2xl md:text-3xl font-semibold mb-6 ${
                isDarkMode ? "text-purple-300" : "text-purple-800"
              }`}
            >
              {t.cta.title}
            </h2>

            <p
              className={`mb-8 max-w-2xl mx-auto ${
                isDarkMode ? "text-purple-200/80" : "text-purple-900/80"
              }`}
            >
              {t.cta.text}
            </p>

            <div className="flex justify-center gap-4">
              <SocialButton
                href="https://github.com/WillensonG"
                icon={<Github size={24} />}
                label="GitHub Profile"
              />
              <SocialButton
                href="https://www.linkedin.com/in/willens%C3%B3n-rafael-guill%C3%A9n-inirio/"
                icon={<Linkedin size={24} />}
                label="LinkedIn Profile"
              />
              <SocialButton
                href="mailto:Willensonr.g@gmail.com"
                icon={<Mail size={24} />}
                label="Email Contact"
              />
              <SocialButton
                href="https://www.instagram.com/web_solutionsrd/"
                icon={<Instagram size={24} />}
                label="Instagram Profile"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer
        className={`py-8 border-t ${
          isDarkMode
            ? "border-purple-900/30 text-purple-300/60"
            : "border-purple-100 text-purple-800/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p>
            © {new Date().getFullYear()} Willensón Rafael Guillén Inirio.{" "}
            {language === "es"
              ? "Todos los derechos reservados."
              : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
