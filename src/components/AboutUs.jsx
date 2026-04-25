import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
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
  Globe,
  CheckCircle,
  GraduationCap,
  Briefcase,
} from "lucide-react";

// ─── Sub-components ───────────────────────────────────────────────────────────

const Navigation = ({
  scrollY,
  isMenuOpen,
  setIsMenuOpen,
  isDarkMode,
  language,
  toggleLanguage,
}) => {
  const navItems = [
    { name: language === "es" ? "Inicio" : "Home", href: "/" },
    { name: language === "es" ? "Proyectos" : "Projects", href: "/projects" },
    { name: language === "es" ? "Contacto" : "Contact", href: "/#contact" },
  ];

  const navBlur = useTransform(scrollY, [0, 50], ["blur(8px)", "blur(12px)"]);
  const navPadding = useTransform(scrollY, [0, 50], ["1rem", "0.75rem"]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 border-b ${
        isDarkMode
          ? "bg-black/80 border-purple-500/20"
          : "bg-white/80 border-purple-700/20"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0, backdropFilter: navBlur }}
      style={{ paddingTop: navPadding, paddingBottom: navPadding }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <motion.a
            href="/"
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-500"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            WR
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                className={`transition-colors ${
                  isDarkMode
                    ? "text-purple-200/80 hover:text-purple-200"
                    : "text-purple-800/80 hover:text-purple-900"
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.name}
              </motion.a>
            ))}
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

          {/* Mobile controls */}
          <div className="flex md:hidden items-center space-x-3">
            <motion.button
              onClick={toggleLanguage}
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "bg-purple-900/30 text-purple-300"
                  : "bg-purple-100 text-purple-700"
              }`}
              whileTap={{ scale: 0.95 }}
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

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="py-4 space-y-4">
                {navItems.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    className={`block py-2 ${
                      isDarkMode
                        ? "text-purple-200/80 hover:text-purple-200"
                        : "text-purple-800/80 hover:text-purple-900"
                    }`}
                    initial={{ x: -5, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: { delay: i * 0.1 },
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

const SectionTitle = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-6">
    {Icon && <Icon size={20} className="text-purple-400 shrink-0" />}
    <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-500">
      {children}
    </h2>
  </div>
);

/** Single education entry */
const EducationItem = ({ degree, institution, status, period, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2 + index * 0.15, type: "spring", stiffness: 120 }}
    className="flex gap-4 items-start"
  >
    <div className="mt-1 w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
    <div>
      <p className="text-purple-200 font-medium">{degree}</p>
      <p className="text-purple-300 text-sm">{institution}</p>
      <div className="flex items-center gap-2 mt-1">
        <span
          className={`text-xs px-2 py-0.5 rounded-full border ${
            status === "current"
              ? "bg-purple-500/20 text-purple-300 border-purple-500/40"
              : "bg-purple-900/20 text-purple-400 border-purple-700/30"
          }`}
        >
          {period}
        </span>
      </div>
    </div>
  </motion.div>
);

/** Timeline experience entry */
const ExperienceItem = ({ year, role, company, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + index * 0.15, type: "spring", stiffness: 100 },
    }}
    className="relative pb-8 pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-purple-600/60 before:to-purple-700/20 last:pb-0"
  >
    <motion.div
      className="absolute w-3 h-3 left-[-6px] top-2 rounded-full bg-purple-500"
      animate={{ boxShadow: "0 0 0 4px rgba(168,85,247,0.2)" }}
      whileHover={{ scale: 1.3, boxShadow: "0 0 0 6px rgba(168,85,247,0.3)" }}
    />
    <span className="text-xs text-purple-400 font-medium tracking-wide uppercase">
      {year}
    </span>
    <h3 className="text-base font-semibold text-purple-200 mt-0.5">{role}</h3>
    <p className="text-purple-400 text-sm">{company}</p>
    <p className="text-purple-200/70 text-sm mt-1 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

/** QA / Skill badge */
const SkillBadge = ({ label, icon: Icon }) => (
  <motion.div
    className="flex items-center gap-2 bg-purple-900/30 rounded-xl px-4 py-3 border border-purple-500/20"
    whileHover={{
      scale: 1.04,
      backgroundColor: "rgba(126,34,206,0.35)",
      borderColor: "rgba(168,85,247,0.5)",
    }}
    transition={{ type: "spring", stiffness: 500, damping: 18 }}
  >
    {Icon && <Icon size={16} className="text-purple-400 shrink-0" />}
    <span className="text-purple-200 text-sm">{label}</span>
  </motion.div>
);

const SocialButton = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="bg-purple-900/30 p-3 rounded-xl text-purple-400 border border-purple-500/20"
    whileHover={{
      scale: 1.12,
      rotate: 5,
      backgroundColor: "rgba(126,34,206,0.5)",
      boxShadow: "0 0 18px rgba(168,85,247,0.5)",
    }}
    whileTap={{ scale: 0.9, rotate: -5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

// ─── Main Component ────────────────────────────────────────────────────────────

const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState("es");

  const { scrollY } = useScroll();
  const scrollYValue = useMotionValue(0);

  useEffect(() => {
    const unsub = scrollY.onChange((v) => scrollYValue.set(v));
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    setLanguage(navigator.language.startsWith("es") ? "es" : "en");
    return () => unsub();
  }, [scrollY]);

  const toggleLanguage = () => setLanguage((l) => (l === "es" ? "en" : "es"));

  // ── i18n content ──────────────────────────────────────────────────────────
  const content = {
    es: {
      title: "Sobre Mí",
      subtitle:
        "Ingeniero de sistemas en evolución continua: de desarrollo web a QA & automatización. Orientado a calidad, eficiencia y oportunidades de impacto global.",
      history: {
        title: "Mi Trayectoria",
        paragraphs: [
          "Soy un profesional de tecnología con base en República Dominicana, con experiencia en soporte técnico, operaciones IT y desarrollo web. Actualmente formo parte del equipo de Claro Dominicana, donde gestiono sistemas, operaciones y soporte en un entorno empresarial de alta demanda.",
          "Tengo formación técnica sólida del ITLA y actualmente estoy cursando Ingeniería en UNICARIBE, lo que refuerza mi base teórica y me impulsa hacia roles más especializados.",
          "En los últimos años he transitado desde el frontend hacia un interés profundo en Quality Assurance: pruebas de software, automatización de testing y aseguramiento de calidad. Creo que el software de alta calidad empieza antes de que se escriba una línea de código.",
          "Mi objetivo es crecer en el área de QA, contribuir a equipos internacionales y seguir construyendo soluciones que realmente funcionen.",
        ],
      },
      education: {
        title: "Formación",
        items: [
          {
            degree: "Ingeniería en Sistemas",
            institution: "UNICARIBE — Universidad del Caribe",
            period: "En curso",
            status: "current",
          },
          {
            degree: "Tecnologías de la Información",
            institution: "ITLA — Instituto Tecnológico de las Américas",
            period: "Egresado",
            status: "done",
          },
        ],
      },
      experience: {
        title: "Experiencia Profesional",
        items: [
          {
            year: "2025 – Presente",
            role: "Ingeniero IT",
            company: "Claro Dominicana",
            description:
              "Soporte técnico, gestión de sistemas y operaciones en entorno empresarial de telecomunicaciones. Coordinación de incidencias, mantenimiento de infraestructura y aseguramiento de continuidad operativa.",
          },
          {
            year: "2023 – 2024",
            role: "Encargado de TI",
            company: "Cigar Country",
            description:
              "Lideré el departamento de IT: implementación de soluciones tecnológicas, gestión de proyectos internos y optimización de procesos operativos.",
          },
          {
            year: "2024",
            role: "Desarrollador Web — Freelance",
            company: "Proyectos independientes",
            description:
              "Gestión de más de 30 dominios y desarrollo de landing pages optimizadas para el mercado hispanohablante con foco en rendimiento y UX.",
          },
          {
            year: "2025",
            role: "Desarrollador Frontend",
            company: "Grupo Chavón",
            description:
              "Desarrollo de soluciones frontend en React, integración de pasarelas de pago y soporte técnico general.",
          },
        ],
      },
      qa: {
        title: "Enfoque en QA & Calidad",
        description:
          "Actualmente profundizando en Quality Assurance: desde pruebas manuales hasta automatización con herramientas modernas.",
        skills: [
          "Pruebas funcionales y de regresión",
          "Automatización con Playwright / Cypress",
          "API Testing con Postman",
          "Gestión de bugs y reportes",
          "Testing en metodologías Agile",
          "Mentalidad de calidad end-to-end",
        ],
      },
      technologies: {
        title: "Stack Técnico",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Herramientas",
      },
      cta: {
        title: "Abierto a oportunidades",
        text: "Busco roles en QA, automatización de pruebas y operaciones IT. Disponible para proyectos remotos e internacionales.",
        resume: "Descargar CV",
      },
    },

    en: {
      title: "About Me",
      subtitle:
        "Systems engineer in continuous evolution: from web development to QA & automation. Focused on quality, efficiency, and global-impact opportunities.",
      history: {
        title: "My Journey",
        paragraphs: [
          "I'm a technology professional based in the Dominican Republic, with experience in technical support, IT operations, and web development. I currently work at Claro Dominicana, where I manage systems, operations, and support in a high-demand enterprise environment.",
          "I have a solid technical background from ITLA and am currently pursuing an Engineering degree at UNICARIBE, strengthening my theoretical foundation and pushing me toward more specialized roles.",
          "Over the past years I've transitioned from frontend development toward a deep interest in Quality Assurance: software testing, test automation, and quality engineering. I believe high-quality software starts before a single line of code is written.",
          "My goal is to grow in the QA space, contribute to international teams, and keep building things that actually work.",
        ],
      },
      education: {
        title: "Education",
        items: [
          {
            degree: "Systems Engineering",
            institution: "UNICARIBE — Universidad del Caribe",
            period: "In progress",
            status: "current",
          },
          {
            degree: "Information Technologies",
            institution: "ITLA — Instituto Tecnológico de las Américas",
            period: "Graduate",
            status: "done",
          },
        ],
      },
      experience: {
        title: "Professional Experience",
        items: [
          {
            year: "2025 – Present",
            role: "IT Engineer",
            company: "Claro Dominicana",
            description:
              "Technical support, systems management, and operations in a high-demand telecom enterprise environment. Incident coordination, infrastructure maintenance, and operational continuity.",
          },
          {
            year: "2025",
            role: "Frontend Developer",
            company: "Grupo Chavón",
            description:
              "React frontend development, payment gateway integration, and general technical support.",
          },
          {
            year: "2023 – 2024",
            role: "IT Department Lead",
            company: "Cigar Country",
            description:
              "Led the IT department: technology solutions implementation, internal project management, and operational process optimization.",
          },
          {
            year: "2024",
            role: "Web Developer — Freelance",
            company: "Independent projects",
            description:
              "Managed 30+ domains and developed performance-optimized landing pages for the Spanish-speaking market with a focus on UX.",
          },
        ],
      },
      qa: {
        title: "QA & Quality Focus",
        description:
          "Currently deepening expertise in Quality Assurance: from manual testing to automation with modern tooling.",
        skills: [
          "Functional & regression testing",
          "Automation with Playwright / Cypress",
          "API Testing with Postman",
          "Bug tracking & reporting",
          "Agile testing methodologies",
          "End-to-end quality mindset",
        ],
      },
      technologies: {
        title: "Tech Stack",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
      },
      cta: {
        title: "Open to opportunities",
        text: "Looking for QA, test automation, and IT operations roles. Available for remote and international projects.",
        resume: "Download CV",
      },
    },
  };

  const t = content[language];

  const technologies = {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
    ],
    backend: ["Node.js", "Express", "MongoDB", "Firebase", "Laravel", "Python"],
    tools: [
      "Git",
      "GitHub",
      "Postman",
      "Playwright",
      "Cypress",
      "Figma",
      "Vercel",
      "VS Code",
    ],
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
      <Navigation
        scrollY={scrollYValue}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDarkMode={isDarkMode}
        language={language}
        toggleLanguage={toggleLanguage}
      />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-b from-purple-900/20 to-black"
              : "bg-gradient-to-b from-purple-100 to-white"
          }`}
        />

        {/* Ambient particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => {
            const size = Math.random() * 7 + 2;
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
                animate={{
                  y: [0, Math.random() * 40 - 20, 0],
                  opacity: [0.05, isDarkMode ? 0.2 : 0.15, 0.05],
                }}
                transition={{
                  duration: Math.random() * 12 + 12,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              />
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-500">
              {t.title}
            </h1>
            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
                isDarkMode ? "text-purple-200/90" : "text-purple-800/90"
              }`}
            >
              {t.subtitle}
            </p>

            <motion.a
              href="/CV-Willenson-Guillen-Developer (3).pdf"
              download
              className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 24px rgba(168,85,247,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                background:
                  "linear-gradient(90deg, rgba(147,51,234,1), rgba(139,92,246,1))",
              }}
            >
              <Download size={17} />
              {t.cta.resume}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Main sections ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Row 1 — Historia + Educación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Historia */}
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
              <SectionTitle icon={Code}>{t.history.title}</SectionTitle>
              <div
                className={`space-y-3 text-sm leading-relaxed ${
                  isDarkMode ? "text-purple-200/80" : "text-gray-700"
                }`}
              >
                {t.history.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>

            {/* Educación */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`rounded-2xl p-6 shadow-xl ${
                isDarkMode
                  ? "bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-purple-500/20"
                  : "bg-white border border-purple-100"
              }`}
            >
              <SectionTitle icon={GraduationCap}>
                {t.education.title}
              </SectionTitle>
              <div className="space-y-6">
                {t.education.items.map((edu, i) => (
                  <EducationItem key={i} {...edu} index={i} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Row 2 — Experiencia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`rounded-2xl p-6 shadow-xl ${
              isDarkMode
                ? "bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-purple-500/20"
                : "bg-white border border-purple-100"
            }`}
          >
            <SectionTitle icon={Briefcase}>{t.experience.title}</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {t.experience.items.map((exp, i) => (
                <ExperienceItem key={i} {...exp} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Row 3 — QA Focus (highlighted) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`rounded-2xl p-6 shadow-xl border ${
              isDarkMode
                ? "bg-gradient-to-br from-violet-900/30 to-purple-900/20 border-violet-500/30"
                : "bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200"
            }`}
          >
            <SectionTitle icon={CheckCircle}>{t.qa.title}</SectionTitle>
            <p
              className={`text-sm mb-5 ${
                isDarkMode ? "text-purple-200/80" : "text-gray-600"
              }`}
            >
              {t.qa.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {t.qa.skills.map((skill, i) => (
                <SkillBadge key={i} label={skill} icon={CheckCircle} />
              ))}
            </div>
          </motion.div>

          {/* Row 4 — Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`rounded-2xl p-6 shadow-xl ${
              isDarkMode
                ? "bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-purple-500/20"
                : "bg-white border border-purple-100"
            }`}
          >
            <SectionTitle icon={Code}>{t.technologies.title}</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries({
                [t.technologies.frontend]: technologies.frontend,
                [t.technologies.backend]: technologies.backend,
                [t.technologies.tools]: technologies.tools,
              }).map(([label, items]) => (
                <div key={label}>
                  <h3
                    className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs rounded-full px-3 py-1 ${
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
              ))}
            </div>
          </motion.div>

          {/* Row 5 — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className={`rounded-2xl p-10 shadow-xl text-center ${
              isDarkMode
                ? "bg-gradient-to-r from-purple-900/30 to-violet-900/30 border border-purple-500/20"
                : "bg-gradient-to-r from-purple-100 to-violet-100 border border-purple-200"
            }`}
          >
            <h2
              className={`text-2xl md:text-3xl font-semibold mb-3 ${
                isDarkMode ? "text-purple-300" : "text-purple-800"
              }`}
            >
              {t.cta.title}
            </h2>
            <p
              className={`mb-8 max-w-xl mx-auto text-sm leading-relaxed ${
                isDarkMode ? "text-purple-200/80" : "text-purple-900/80"
              }`}
            >
              {t.cta.text}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <SocialButton
                href="https://github.com/WillensonG"
                icon={<Github size={22} />}
                label="GitHub"
              />
              <SocialButton
                href="https://www.linkedin.com/in/willens%C3%B3n-rafael-guill%C3%A9n-inirio/"
                icon={<Linkedin size={22} />}
                label="LinkedIn"
              />
              <SocialButton
                href="mailto:Willensonr.g@gmail.com"
                icon={<Mail size={22} />}
                label="Email"
              />
              <SocialButton
                href="https://www.instagram.com/web_solutionsrd/"
                icon={<Instagram size={22} />}
                label="Instagram"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 border-t ${
          isDarkMode
            ? "border-purple-900/30 text-purple-300/50"
            : "border-purple-100 text-purple-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-sm">
          © {new Date().getFullYear()} Willensón Rafael Guillén Inirio.{" "}
          {language === "es"
            ? "Todos los derechos reservados."
            : "All rights reserved."}
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
