import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Shield,
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
  ArrowUp,
} from "lucide-react";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-2"
            >
              <img src="/api/placeholder/40/40" alt="Logo" className="h-10" />
              <span className="text-xl font-bold">WEB&IT</span>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="hidden md:flex gap-8"
            >
              {["Servicios", "Proyectos", "Tecnologías", "Contacto"].map(
                (item) => (
                  <motion.a
                    key={item}
                    variants={fadeIn}
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </motion.a>
                )
              )}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-32"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.h1
              variants={fadeIn}
              initial="initial"
              animate="animate"
              className="text-6xl font-bold mb-8"
            >
              Soluciones IT <br />
              <span className="text-blue-400">para el mundo digital</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-12"
            >
              Transformamos negocios a través de soluciones tecnológicas
              innovadoras y desarrollo web de alta calidad
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-600"
            >
              Comenzar Proyecto <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-32 bg-gray-900"
      >
        <div className="container mx-auto px-6">
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-20"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Globe,
                title: "Desarrollo Web",
                desc: "Sitios y aplicaciones web modernas ",
              },
              {
                icon: Server,
                title: "Infraestructura IT",
                desc: "Soluciones cloud y on-premise optimizadas",
              },
              {
                icon: Shield,
                title: "Ciberseguridad",
                desc: "Protección integral para tu negocio",
              },
              {
                icon: Database,
                title: "Base de Datos",
                desc: "Diseño e implementación de sistemas robustos",
              },
              {
                icon: Code,
                title: "Desarrollo Custom",
                desc: "Soluciones personalizadas a medida",
              },
              {
                icon: Cpu,
                title: "Automatización",
                desc: "Optimización de procesos empresariales",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors"
              >
                <service.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-32 bg-gray-800"
      >
        <div className="container mx-auto px-6">
          <motion.div
            variants={stagger}
            className="grid md:grid-cols-4 gap-12 text-center"
          >
            {[
              { number: "150+", label: "Proyectos Completados" },
              { number: "50+", label: "Clientes Activos" },
              { number: "10+", label: "Años de Experiencia" },
              { number: "24/7", label: "Soporte Técnico" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeIn} className="p-6">
                <h4 className="text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </h4>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-32"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-r from-blue-600 to-blue-400 p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a
              alcanzar tus objetivos tecnológicos
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
            >
              Contactar Ahora
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="bg-gray-900 border-t border-gray-800 pt-20 pb-10"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <motion.div variants={fadeIn}>
              <div className="flex items-center gap-2 mb-6">
                <img src="/api/placeholder/40/40" alt="Logo" className="h-8" />
                <span className="text-xl font-bold">WEB&IT</span>
              </div>
              <p className="text-gray-400 mb-4">
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
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h4 className="text-lg font-semibold mb-6">Servicios</h4>
              <ul className="space-y-4">
                {[
                  "Desarrollo Web",
                  "Ciberseguridad",
                  "Cloud Computing",
                  "Consultoría IT",
                  "Soporte Técnico",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h4 className="text-lg font-semibold mb-6">Compañía</h4>
              <ul className="space-y-4">
                {[
                  "Sobre Nosotros",
                  "Casos de Éxito",
                  "Blog",
                  "Carreras",
                  "Contacto",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h4 className="text-lg font-semibold mb-6">Contacto</h4>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a
                    href="tel:+1234567890"
                    className="hover:text-blue-400 transition-colors"
                  >
                    +123 456 7890
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@webit.com"
                    className="hover:text-blue-400 transition-colors"
                  >
                    info@webit.com
                  </a>
                </li>
                <li>
                  123 Business Avenue,
                  <br />
                  Tech District, 12345
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn}
            className="pt-8 border-t border-gray-800 text-center text-gray-400"
          >
            <p>
              &copy; {new Date().getFullYear()} Web&IT Solutions. Todos los
              derechos reservados.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default LandingPage;
