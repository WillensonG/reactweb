import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Globe,
  Github,
  Menu,
  X,
  Code,
  Calendar,
  Users,
} from "lucide-react";

const MobileNav = ({ isOpen, onClose, navItems, language, toggleLanguage }) => {
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
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleLanguage();
          }}
          className="flex items-center gap-2 text-xl text-purple-200/80 hover:text-purple-200"
        >
          <Globe size={20} />
          {language === "es" ? "English" : "Español"}
        </button>
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
          src={project.image || "/api/placeholder/600/400"}
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

const ProjectModal = ({ project, onClose, language }) => {
  if (!project) return null;

  const translations = {
    es: {
      github: "GitHub",
      demo: "Ver Demo",
    },
    en: {
      github: "GitHub",
      demo: "View Demo",
    },
  };

  const t = translations[language];

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
              src={project.image || "/api/placeholder/600/400"}
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
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-4 py-2 rounded-lg text-sm text-white transition-colors"
                >
                  <Github size={16} className="text-white/70" />
                  <span>{t.github}</span>
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-4 py-2 rounded-lg text-sm text-white transition-colors"
                >
                  <ExternalLink size={16} className="text-white/70" />
                  <span>{t.demo}</span>
                </a>
              )}
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
  const [language, setLanguage] = useState("es"); // Default language: Spanish

  // Set language based on browser preference on component mount
  useEffect(() => {
    const browserLang = navigator.language.startsWith("es") ? "es" : "en";
    setLanguage(browserLang);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  // Translations object
  const content = {
    es: {
      navItems: [
        { name: "Inicio", href: "/" },
        { name: "Sobre mí", href: "/about" },
        { name: "Proyectos", href: "/projects" },
      ],
      categories: ["Todos", "Web App", "Dashboard", "Mobile"],
      pageTitle: "Mis Proyectos",
      pageSubtitle: "Una colección de mis trabajos más destacados",
      ctaSection: {
        title: "¿Tienes un proyecto en mente?",
        subtitle:
          "Estoy disponible para nuevos proyectos y colaboraciones. ¡Hablemos sobre cómo puedo ayudarte!",
        freelance: "Disponible para trabajo freelance",
        availability: "Disponibilidad: 20h/semana",
        development: "Desarrollo web y móvil",
        ctaButton: "Enviar mensaje",
        availabilityStatus: "Disponible para proyectos",
        workSchedule: "Horario de trabajo",
        weekdays: "Lunes - Viernes",
        workHours: "9:00 AM - 6:00 PM",
        timezone: "Zona horaria",
        timezoneValue: "GMT-3 (Argentina)",
        services: "Servicios",
        servicesList: [
          "Desarrollo Frontend",
          "Desarrollo Backend",
          "Aplicaciones Móviles",
          "UI/UX Design",
        ],
      },
    },
    en: {
      navItems: [
        { name: "Home", href: "/" },
        { name: "About me", href: "/about" },
        { name: "Projects", href: "/projects" },
      ],
      categories: ["All", "Web App", "Dashboard", "Mobile"],
      pageTitle: "My Projects",
      pageSubtitle: "A collection of my most outstanding work",
      ctaSection: {
        title: "Do you have a project in mind?",
        subtitle:
          "I'm available for new projects and collaborations. Let's talk about how I can help you!",
        freelance: "Available for freelance work",
        availability: "Availability: 20h/week",
        development: "Web and mobile development",
        ctaButton: "Send message",
        availabilityStatus: "Available for projects",
        workSchedule: "Work Schedule",
        weekdays: "Monday - Friday",
        workHours: "9:00 AM - 6:00 PM",
        timezone: "Time zone",
        timezoneValue: "GMT-3 (Argentina)",
        services: "Services",
        servicesList: [
          "Frontend Development",
          "Backend Development",
          "Mobile Applications",
          "UI/UX Design",
        ],
      },
    },
  };

  // Use current language content
  const t = content[language];

  // Updated project data with translations
  const projectsData = {
    es: [
      {
        title: "Marte Abad Soluciones Legales",
        description:
          "Sitio web profesional animado para una firma legal, creado con React y Framer Motion. Presenta servicios jurídicos y capacitaciones con un diseño sobrio y elegante, orientado al mercado dominicano.",
        image: "./img/legal.png",
        category: "Web App",
        technologies: ["React", "Framer Motion", "TailwindCSS", "JavaScript"],
        links: {
          github: "https://github.com/WillensonG",
          live: "https://legalmarte.com",
        },
      },
      {
        title: "Torre de Hanio",
        description:
          "sitio web para probar la logica de la torre de hanio, un juego de rompecabezas matemático. Desarrollado con React y Tailwind CSS.",
        image: "./img/torre.png",
        category: "Web App",
        technologies: ["React", "Framer Motion", "TailwindCSS", "JavaScript"],
        links: {
          github: "https://github.com/WillensonG",
          live: "https://hanoi.willensong.com/",
        },
      },
      {
        title: "App de Gestión de Tareas",
        description:
          "Aplicación Web para gestión eficiente de tareas y proyectos en equipo.",
        image: "./img/to-do.png",
        category: "Web App",
        technologies: ["React", "framer motion", "Firebase"],
        links: {
          github: "https://github.com/WillensonG/To-do-list/tree/main",
          live: "https://tasklist.willensong.com/",
        },
      },
      {
        title: "Ecommerce App",
        description:
          "Aplicación Web para la venta de productos, hecha con wordpress.",
        image: "./img/bestbuy.png",
        category: "Web App",
        technologies: ["Wordpress", "Css", "Elementor"],
        links: {
          live: "https://bethbuy.com/",
        },
      },
      {
        title: "Plataforma Inmobiliaria",
        description:
          "Sitio web inmobiliario desarrollado en WordPress utilizando el tema Homlisti. Permite a los usuarios buscar, filtrar y publicar propiedades, con un diseño moderno y funcionalidades avanzadas.",
        image: "./img/real.png",
        category: "WordPress",
        technologies: ["WordPress", "PHP", "Elementor"],
        links: {
          github: "https://github.com/WillensonG",
          live: "https://lightblue-kingfisher-618489.hostingersite.com",
        },
      },
      {
        title: "Tienda Web básica",
        description: "Aplicación Web para la venta de productos específicos.",
        image: "./img/product-card.png",
        category: "Web App",
        technologies: ["Html", "Css", "JavaScript"],
        links: {
          github: "https://github.com/WillensonG/products-cards",
          live: "https://productscards.willensong.com/",
        },
      },
      {
        title: "Colección Reservada",
        description:
          "Catálogo web de propiedades premium, diseñado para mostrar inmuebles exclusivos con detalles como habitaciones, baños, dirección y precio. Incluye botón de exploración y etiquetas de estatus.",
        image: "./img/11.png",
        category: "Web App",
        technologies: ["React", "TailwindCSS", "JavaScript", "HTML"],
        links: {
          live: "https://real.kellyshomepc.com/",
        },
      },
      {
        title: "Kelly's CRM",
        description:
          "Aplicación CRM para gestión de propiedades, mantenimientos, facturas, contratos y relaciones con clientes. Ideal para negocios inmobiliarios.",
        image: "./img/crm.png",
        category: "Web App",
        technologies: ["EspoCRM", "PHP", "MySQL", "JavaScript", "CSS"],
        links: {
          live: "https://kellyshomepc.com/",
        },
      },
      {
        title: "Web&IT Solutions Website (En desarrollo)",
        description:
          "Landing page corporativa moderna desarrollada con React y Tailwind CSS para una empresa de desarrollo de software. Destaca servicios, tecnologías y facilita el contacto con clientes potenciales.",
        image: "./img/webS.png",
        category: "Web App",
        technologies: ["React", "TailwindCSS", "Vite", "JavaScript"],
        links: {
          github: "https://github.com/WillensonG",
          live: "https://webitsolutions.dev/",
        },
      },
      {
        title: "Sistema de Pasarela de Pago",
        description:
          "Una plataforma de procesamiento de pagos integrada con múltiples proveedores que facilita transacciones seguras.",
        image: "./img/pagos.png",
        category: "Web App",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        links: { github: "https://github.com/WillensonG", live: "#" },
      },
      {
        title: "Dashboard Analytics",
        description:
          "Panel de control interactivo para visualización de datos empresariales en tiempo real.",
        image: "/api/placeholder/600/400",
        category: "Dashboard",
        technologies: ["React", "D3.js", "Firebase"],
        links: { github: "https://github.com/WillensonG", live: "#" },
      },
    ],
    en: [
      {
        title: "Marte Abad Legal Solutions",
        description:
          "Animated professional website for a legal firm, created with React and Framer Motion. It presents legal services and training with a sober and elegant design, oriented to the Dominican market.",
        image: "./img/legal.png",
        category: "Web App",
        technologies: ["React", "Framer Motion", "TailwindCSS", "JavaScript"],
        links: {
          github: "https://github.com/WillensonG",
          live: "https://legalmarte.com",
        },
      },
      {
        title: "Task Management App",
        description:
          "Web application for efficient management of tasks and team projects.",
        image: "./img/to-do.png",
        category: "Web App",
        technologies: ["React", "framer motion", "Firebase"],
        links: {
          github: "https://github.com/WillensonG/To-do-list/tree/main",
          live: "https://tasklist.willensong.com/",
        },
      },
      {
        title: "Ecommerce App",
        description:
          "Web application for selling products, made with WordPress.",
        image: "./img/bestbuy.png",
        category: "Web App",
        technologies: ["Wordpress", "Css", "Elementor"],
        links: {
          live: "https://bethbuy.com/",
        },
      },
      {
        title: "Real Estate Platform",
        description:
          "Real estate website developed in WordPress using the Homlisti theme. It allows users to search, filter, and list properties, with a modern design and advanced features.",
        image: "./img/real.png",
        category: "WordPress",
        technologies: ["WordPress", "PHP", "Elementor"],
        links: {
          github: "https://github.com/WillensonG",
          live: "https://lightblue-kingfisher-618489.hostingersite.com",
        },
      },
      {
        title: "Basic Web Store",
        description: "Web application for selling specific products.",
        image: "./img/product-card.png",
        category: "Web App",
        technologies: ["Html", "Css", "JavaScript"],
        links: {
          github: "https://github.com/WillensonG/products-cards",
          live: "https://productscards.willensong.com/",
        },
      },
      {
        title: "Reserved Collection",
        description:
          "Premium property web catalog, designed to showcase exclusive properties with details such as bedrooms, bathrooms, address, and price. Includes exploration button and status labels.",
        image: "./img/11.png",
        category: "Web App",
        technologies: ["React", "TailwindCSS", "JavaScript", "HTML"],
        links: {
          live: "https://real.kellyshomepc.com/",
        },
      },
      {
        title: "Kelly's CRM",
        description:
          "CRM application for property management, maintenance, invoices, contracts, and customer relationships. Ideal for real estate businesses.",
        image: "./img/crm.png",
        category: "Web App",
        technologies: ["EspoCRM", "PHP", "MySQL", "JavaScript", "CSS"],
        links: {
          live: "https://kellyshomepc.com/",
        },
      },
      {
        title: "Web&IT Solutions Website (In development)",
        description:
          "Modern corporate landing page developed with React and Tailwind CSS for a software development company. Highlights services, technologies, and facilitates contact with potential clients.",
        image: "./img/webS.png",
        category: "Web App",
        technologies: ["React", "TailwindCSS", "Vite", "JavaScript"],
        links: {
          github: "https://github.com/WillensonG",
          live: "https://webitsolutions.dev/",
        },
      },
      {
        title: "Payment Gateway System",
        description:
          "A payment processing platform integrated with multiple providers that facilitates secure transactions.",
        image: "./img/pagos.png",
        category: "Web App",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        links: { github: "https://github.com/WillensonG", live: "#" },
      },
      {
        title: "Analytics Dashboard",
        description:
          "Interactive dashboard for real-time business data visualization.",
        image: "/api/placeholder/600/400",
        category: "Dashboard",
        technologies: ["React", "D3.js", "Firebase"],
        links: { github: "https://github.com/WillensonG", live: "#" },
      },
    ],
  };

  // Handle category mapping between languages
  const categoryMap = {
    Todos: "All",
    All: "Todos",
  };

  // Transform selected category when language changes
  useEffect(() => {
    if (selectedCategory === "Todos" || selectedCategory === "All") {
      setSelectedCategory(language === "es" ? "Todos" : "All");
    }
  }, [language, selectedCategory]);

  // Get currently selected category in the current language
  const getCurrentCategory = () => {
    if (selectedCategory === "Todos" || selectedCategory === "All") {
      return language === "es" ? "Todos" : "All";
    }
    return selectedCategory;
  };

  const currentCategory = getCurrentCategory();

  // Filter projects based on selected category and language
  const filteredProjects = projectsData[language].filter(
    (project) =>
      currentCategory === (language === "es" ? "Todos" : "All") ||
      project.category === currentCategory
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <MobileNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={t.navItems}
        language={language}
        toggleLanguage={toggleLanguage}
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
              {t.navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="text-purple-200/80 hover:text-purple-200 transition-colors"
                >
                  {item.name}
                </a>
              ))}

              {/* Language toggle button */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 text-purple-200/80 hover:text-purple-200 transition-colors bg-purple-900/20 px-3 py-1.5 rounded-full"
              >
                <Globe size={16} />
                <span className="text-sm">
                  {language === "es" ? "EN" : "ES"}
                </span>
              </button>
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
              {t.pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-purple-200/90">
              {t.pageSubtitle}
            </p>
          </header>

          <div className="overflow-x-auto -mx-4 px-4 mb-8 md:mb-12">
            <div className="flex gap-3 md:gap-4 md:justify-center min-w-max">
              {t.categories.map((category, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 md:px-6 py-2 rounded-xl border whitespace-nowrap ${
                    currentCategory === category
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
                {t.ctaSection.title}
              </h2>
              <p className="text-base md:text-lg text-purple-200/90">
                {t.ctaSection.subtitle}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-purple-200/80">
                  <div className="bg-purple-500/10 p-2 rounded-lg">
                    <Users size={20} />
                  </div>
                  <span className="text-sm md:text-base">
                    {t.ctaSection.freelance}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-purple-200/80">
                  <div className="bg-purple-500/10 p-2 rounded-lg">
                    <Calendar size={20} />
                  </div>
                  <span className="text-sm md:text-base">
                    {t.ctaSection.availability}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-purple-200/80">
                  <div className="bg-purple-500/10 p-2 rounded-lg">
                    <Code size={20} />
                  </div>
                  <span className="text-sm md:text-base">
                    {t.ctaSection.development}
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="mailto:Willensonr.g@gmail.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 px-4 md:px-6 py-2.5 md:py-3 rounded-xl text-white text-sm md:text-base font-medium hover:opacity-90 transition-opacity"
                >
                  {t.ctaSection.ctaButton}
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-2xl border border-purple-500/20 p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  <span className="text-green-400 font-medium">
                    {t.ctaSection.availabilityStatus}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-purple-200">
                    {t.ctaSection.workSchedule}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-purple-200/80">
                    <div>
                      <p className="font-medium">{t.ctaSection.weekdays}</p>
                      <p>{t.ctaSection.workHours}</p>
                    </div>
                    <div>
                      <p className="font-medium">{t.ctaSection.timezone}</p>
                      <p>{t.ctaSection.timezoneValue}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-purple-200">
                    {t.ctaSection.services}
                  </h3>
                  <ul className="space-y-2 text-sm text-purple-200/80">
                    {t.ctaSection.servicesList.map((service, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        {service}
                      </li>
                    ))}
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
          language={language}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
