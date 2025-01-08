import React, { useState, useEffect } from "react";
import {
  Code2,
  Globe,
  ShieldCheck,
  Server,
  Database,
  Cpu,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
} from "lucide-react";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 animate-gradient bg-[length:200%_200%] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600" />

      <nav className="border-b border-gray-700 relative z-20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center gap-2 transition-all duration-700 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <img src="/api/placeholder/40/40" alt="Logo" className="h-10" />
              <span className="text-xl font-bold">WEB&IT</span>
            </div>

            <div className="hidden md:flex gap-8">
              {["Servicios", "Proyectos", "Tecnologías", "Contacto"].map(
                (item, index) => (
                  <a
                    key={item}
                    href="#"
                    className={`hover:text-blue-400 transition-all duration-500 transform ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          <div
            className={`md:hidden transition-all duration-300 transform ${
              isMenuOpen ? "h-48 opacity-100" : "h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="py-4 space-y-4">
              {["Servicios", "Proyectos", "Tecnologías", "Contacto"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="block hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl relative">
            <div className="absolute -left-20 -top-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -right-10 -bottom-20 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl animate-blob" />

            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h1 className="text-6xl font-bold mb-8 relative">
                <span
                  className={`block transition-all duration-700 delay-300 transform ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }`}
                >
                  Soluciones IT
                </span>
                <span
                  className={`block text-blue-400 transition-all duration-700 delay-500 transform ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                >
                  para el mundo digital
                </span>
              </h1>

              <p
                className={`text-xl text-gray-300 mb-12 relative z-10 transition-all duration-700 delay-700 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                Transformamos negocios a través de soluciones tecnológicas
                innovadoras y desarrollo web de alta calidad
              </p>

              <button
                className={`bg-blue-500 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-600 relative z-10 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "900ms" }}
              >
                Comenzar Proyecto <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-900/50 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Globe,
                title: "Desarrollo Web",
                desc: "Sitios y aplicaciones web modernas",
              },
              {
                icon: Server,
                title: "Infraestructura IT",
                desc: "Soluciones cloud y on-premise optimizadas",
              },
              {
                icon: ShieldCheck,
                title: "Ciberseguridad",
                desc: "Protección integral para tu negocio",
              },
              {
                icon: Database,
                title: "Base de Datos",
                desc: "Diseño e implementación de sistemas robustos",
              },
              {
                icon: Code2,
                title: "Desarrollo Custom",
                desc: "Soluciones personalizadas a medida",
              },
              {
                icon: Cpu,
                title: "Automatización",
                desc: "Optimización de procesos empresariales",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <service.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-800/50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { number: "150+", label: "Proyectos Completados" },
              { number: "50+", label: "Clientes Activos" },
              { number: "10+", label: "Años de Experiencia" },
              { number: "24/7", label: "Soporte Técnico" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <h4 className="text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </h4>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a
              alcanzar tus objetivos tecnológicos
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform">
              Contactar Ahora
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900/50 border-t border-gray-800 pt-20 pb-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <img src="/api/placeholder/40/40" alt="Logo" className="h-8" />
                <span className="text-xl font-bold">WEB&IT</span>
              </div>
              <p className="text-gray-400">
                Transformando negocios a través de soluciones tecnológicas
                innovadoras desde 2014.
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Twitter, href: "#" },
                  { Icon: Linkedin, href: "#" },
                  { Icon: Github, href: "#" },
                  { Icon: Facebook, href: "#" },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {[
              {
                title: "Servicios",
                links: [
                  "Desarrollo Web",
                  "Ciberseguridad",
                  "Cloud Computing",
                  "Consultoría IT",
                  "Soporte Técnico",
                ],
              },
              {
                title: "Compañía",
                links: [
                  "Sobre Nosotros",
                  "Casos de Éxito",
                  "Blog",
                  "Carreras",
                  "Contacto",
                ],
              },
              {
                title: "Contacto",
                content: (
                  <div className="space-y-4 text-gray-400">
                    <a
                      href="tel:+1234567890"
                      className="block hover:text-blue-400 transition-colors"
                    >
                      <Phone className="inline-block w-4 h-4 mr-2" />
                      +123 456 7890
                    </a>
                    <a
                      href="mailto:info@webit.com"
                      className="block hover:text-blue-400 transition-colors"
                    >
                      <Mail className="inline-block w-4 h-4 mr-2" />
                      info@webit.com
                    </a>
                    <p>
                      <MapPin className="inline-block w-4 h-4 mr-2" />
                      123 Business Avenue,
                      <br />
                      Tech District, 12345
                    </p>
                  </div>
                ),
              },
            ].map((section, index) => (
              <div key={index} className="space-y-6">
                <h4 className="text-lg font-semibold">{section.title}</h4>
                {section.links ? (
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-blue-400 transition-colors hover:translate-x-2 inline-block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  section.content
                )}
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Web&IT Solutions. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes blob {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }

        .animate-gradient {
          animation: gradient 15s ease infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
