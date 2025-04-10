import React, { useState } from "react";

const WebITSolutions = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeProcess, setActiveProcess] = useState(1);

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top announcement banner */}
      <div className="bg-indigo-700 text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm md:text-base">
          ¡Oferta especial! 15% de descuento en proyectos web contratados este
          mes.{" "}
          <a href="#" className="font-bold underline">
            Más información
          </a>
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">
                  W&I
                </div>
                <span className="ml-2 text-2xl font-bold text-indigo-600">
                  Web&IT Solutions
                </span>
              </div>

              {/* Desktop Navigation - Primary */}
              <nav className="hidden md:ml-8 md:flex md:space-x-1">
                <div className="relative group">
                  <button
                    className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-md hover:bg-gray-50 flex items-center"
                    onClick={() => toggleDropdown("services")}
                  >
                    Servicios
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === "services" && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 p-4">
                      <div className="grid grid-cols-1 gap-4">
                        <a
                          href="#"
                          className="flex items-start p-2 rounded-md hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-md flex items-center justify-center text-indigo-600">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              Desarrollo Web
                            </p>
                            <p className="text-xs text-gray-500">
                              Sitios y aplicaciones web a medida
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="flex items-start p-2 rounded-md hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-md flex items-center justify-center text-indigo-600">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              Apps Móviles
                            </p>
                            <p className="text-xs text-gray-500">
                              Aplicaciones para iOS y Android
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="flex items-start p-2 rounded-md hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-md flex items-center justify-center text-indigo-600">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              Hosting y Mantenimiento
                            </p>
                            <p className="text-xs text-gray-500">
                              Servidores, soporte técnico y monitoreo 24/7
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <a
                          href="#"
                          className="text-sm text-indigo-600 font-medium hover:text-indigo-800"
                        >
                          Ver todos los servicios →
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative group">
                  <button
                    className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-md hover:bg-gray-50 flex items-center"
                    onClick={() => toggleDropdown("technologies")}
                  >
                    Tecnologías
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === "technologies" && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 p-4">
                      <div className="grid grid-cols-1 gap-4">
                        <a
                          href="#"
                          className="flex items-start p-2 rounded-md hover:bg-gray-50"
                        >
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              Frontend
                            </p>
                            <p className="text-xs text-gray-500">
                              React, Angular, Vue.js
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="flex items-start p-2 rounded-md hover:bg-gray-50"
                        >
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              Backend
                            </p>
                            <p className="text-xs text-gray-500">
                              Node.js, Python, PHP, Java
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="flex items-start p-2 rounded-md hover:bg-gray-50"
                        >
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              Móvil
                            </p>
                            <p className="text-xs text-gray-500">
                              React Native, Flutter, Kotlin
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href="#"
                  className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-md hover:bg-gray-50"
                >
                  Precios
                </a>

                <div className="relative group">
                  <button
                    className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-md hover:bg-gray-50 flex items-center"
                    onClick={() => toggleDropdown("resources")}
                  >
                    Recursos
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === "resources" && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 p-4">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Blog
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Casos de éxito
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Webinars
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Recursos gratuitos
                      </a>
                    </div>
                  )}
                </div>

                <div className="relative group">
                  <button
                    className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-md hover:bg-gray-50 flex items-center"
                    onClick={() => toggleDropdown("company")}
                  >
                    Empresa
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === "company" && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 p-4">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sobre nosotros
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Equipo
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Contacto
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Trabaja con nosotros
                      </a>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Right side - login/signup */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 font-medium"
              >
                Cliente Área
              </a>
              <div className="relative">
                <button
                  className="flex items-center text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md font-medium transition-colors"
                  onClick={() => toggleDropdown("contact")}
                >
                  Contactar
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeDropdown === "contact" && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 p-4">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Solicitar presupuesto
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Programar reunión
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Contactar por Email
                    </a>
                  </div>
                )}
              </div>
              <button className="text-gray-600 hover:text-indigo-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-indigo-600 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Abrir menú</span>
                {mobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="border-b border-gray-200 py-2">
                <button className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700">
                  Servicios
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="px-4 py-2">
                  <a href="#" className="block py-2 text-sm text-gray-600">
                    Desarrollo Web
                  </a>
                  <a href="#" className="block py-2 text-sm text-gray-600">
                    Apps Móviles
                  </a>
                  <a href="#" className="block py-2 text-sm text-gray-600">
                    Software Empresarial
                  </a>
                  <a href="#" className="block py-2 text-sm text-gray-600">
                    Hosting y Mantenimiento
                  </a>
                </div>
              </div>
              <div className="border-b border-gray-200 py-2">
                <button className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700">
                  Tecnologías
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 border-b border-gray-200"
              >
                Precios
              </a>
              <div className="border-b border-gray-200 py-2">
                <button className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700">
                  Recursos
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <div className="py-2">
                <button className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700">
                  Empresa
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700"
                >
                  Cliente Área
                </a>
                <a
                  href="#"
                  className="block mt-2 px-3 py-2 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 lg:w-5/12 mb-8 md:mb-0">
              <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
                CONSTRUCTORA DE SOFTWARE PREMIUM
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                <span className="text-indigo-600">Diseñamos</span>,{" "}
                <span className="text-indigo-600">Construimos</span> y{" "}
                <span className="text-indigo-600">Mantenemos</span> tu software
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Transformamos tus ideas en soluciones digitales escalables y
                robustas. Más de 10 años de experiencia y cientos de proyectos
                exitosos.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="px-6 py-3 bg-indigo-600 text-white text-center font-medium rounded-md hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Solicitar presupuesto
                </a>
                <a
                  href="#"
                  className="px-6 py-3 bg-white text-indigo-600 text-center font-medium rounded-md border border-indigo-600 hover:bg-indigo-50 shadow hover:shadow-md transition-all duration-200"
                >
                  Ver proyectos
                </a>
              </div>
            </div>
            <div className="md:w-1/2 lg:w-6/12 relative">
              <div className="relative transform transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-10 rounded-xl shadow-xl"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-xl overflow-hidden">
                  <div className="bg-gray-800 rounded-t-lg p-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto">
                    <p className="text-green-400">
                      $ npm install web-it-solutions
                    </p>
                    <p className="text-gray-400">installing...</p>
                    <p className="text-white mt-2">+ web-it-solutions@1.0.0</p>
                    <p className="text-gray-400">added 125 packages in 3.5s</p>
                    <p className="text-green-400 mt-2">
                      $ npx create-web-it-app my-project
                    </p>
                    <p className="text-purple-400">
                      Creating a new Web&IT application in ./my-project
                    </p>
                    <p className="text-blue-300">✓ Installing packages...</p>
                    <p className="text-blue-300">✓ Configuring project...</p>
                    <p className="text-green-400">✓ Application ready!</p>
                    <p className="text-yellow-300 mt-2">Happy coding! 🚀</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full z-0"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-100 rounded-full z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="text-indigo-600 font-semibold mb-3">
              NUESTROS SERVICIOS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Soluciones digitales de alto rendimiento
            </h2>
            <p className="text-lg text-gray-600">
              Nuestros servicios de desarrollo de software están diseñados para
              llevar su negocio al siguiente nivel. Combinamos tecnología de
              vanguardia con mejores prácticas de la industria.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-5 text-indigo-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Desarrollo Web
              </h3>
              <p className="text-gray-600">
                Sitios web y aplicaciones web personalizadas optimizadas para
                todos los dispositivos y navegadores. Desde tiendas online hasta
                plataformas SaaS complejas.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-indigo-600 font-medium hover:text-indigo-800"
              >
                Más información →
              </a>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-5 text-indigo-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Aplicaciones Móviles
              </h3>
              <p className="text-gray-600">
                Desarrollo de aplicaciones nativas y multiplataforma para iOS y
                Android. Integramos con APIs y servicios para crear experiencias
                móviles completas.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-indigo-600 font-medium hover:text-indigo-800"
              >
                Más información →
              </a>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-5 text-indigo-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Software Empresarial
              </h3>
              <p className="text-gray-600">
                Soluciones empresariales a medida: ERPs, CRMs, sistemas de
                gestión, intranets y software personalizado para optimizar
                procesos de negocio.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-indigo-600 font-medium hover:text-indigo-800"
              >
                Más información →
              </a>
            </div>

            {/* Feature 4 - Hosting y Mantenimiento */}
            <div className="bg-gray-50 rounded-lg p-8 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-5 text-indigo-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hosting y Mantenimiento
              </h3>
              <p className="text-gray-600">
                Servicios completos de alojamiento web, configuración de
                servidores, respaldo de datos, seguridad y mantenimiento
                continuo de sus aplicaciones y sitios web.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-indigo-600 font-medium hover:text-indigo-800"
              >
                Más información →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="text-indigo-600 font-semibold mb-3">
              NUESTRO PROCESO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cómo trabajamos
            </h2>
            <p className="text-lg text-gray-600">
              Nuestro proceso de desarrollo está diseñado para garantizar
              transparencia, eficiencia y resultados excepcionales en cada
              proyecto.
            </p>
          </div>

          <div className="flex flex-col md:flex-row border rounded-xl overflow-hidden bg-white shadow-lg">
            <div className="md:w-1/3 bg-gray-50 p-6">
              <div className="space-y-4">
                <button
                  onClick={() => setActiveProcess(1)}
                  className={`w-full text-left px-4 py-3 ${
                    activeProcess === 1
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  } rounded-lg font-medium border ${
                    activeProcess === 1
                      ? "border-indigo-600"
                      : "border-transparent"
                  }`}
                >
                  1. Descubrimiento
                </button>
                <button
                  onClick={() => setActiveProcess(2)}
                  className={`w-full text-left px-4 py-3 ${
                    activeProcess === 2
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  } rounded-lg font-medium border ${
                    activeProcess === 2
                      ? "border-indigo-600"
                      : "border-transparent"
                  }`}
                >
                  2. Planificación
                </button>
                <button
                  onClick={() => setActiveProcess(3)}
                  className={`w-full text-left px-4 py-3 ${
                    activeProcess === 3
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  } rounded-lg font-medium border ${
                    activeProcess === 3
                      ? "border-indigo-600"
                      : "border-transparent"
                  }`}
                >
                  3. Desarrollo
                </button>
                <button
                  onClick={() => setActiveProcess(4)}
                  className={`w-full text-left px-4 py-3 ${
                    activeProcess === 4
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  } rounded-lg font-medium border ${
                    activeProcess === 4
                      ? "border-indigo-600"
                      : "border-transparent"
                  }`}
                >
                  4. Pruebas
                </button>
                <button
                  onClick={() => setActiveProcess(5)}
                  className={`w-full text-left px-4 py-3 ${
                    activeProcess === 5
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  } rounded-lg font-medium border ${
                    activeProcess === 5
                      ? "border-indigo-600"
                      : "border-transparent"
                  }`}
                >
                  5. Lanzamiento
                </button>
                <button
                  onClick={() => setActiveProcess(6)}
                  className={`w-full text-left px-4 py-3 ${
                    activeProcess === 6
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  } rounded-lg font-medium border ${
                    activeProcess === 6
                      ? "border-indigo-600"
                      : "border-transparent"
                  }`}
                >
                  6. Mantenimiento
                </button>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              {activeProcess === 1 && (
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg text-indigo-600">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Descubrimiento
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Comenzamos cada proyecto con una fase de descubrimiento
                      profunda. Trabajamos estrechamente con usted para
                      comprender sus objetivos comerciales, requisitos técnicos
                      y las necesidades de sus usuarios finales. Esta etapa
                      establece las bases para todo el proyecto.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Definición de objetivos del proyecto
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Identificación de requisitos funcionales
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Análisis de usuarios y stakeholders
                        </p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 shadow-md transition-all"
                      >
                        Programar una sesión de descubrimiento
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {activeProcess === 2 && (
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg text-indigo-600">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Planificación
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Creamos un plan detallado basado en la información
                      recopilada durante la fase de descubrimiento. Definimos el
                      alcance del proyecto, cronogramas, presupuestos y recursos
                      necesarios, asegurando que todos los aspectos del proyecto
                      estén claramente definidos.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Definición de alcance y entregables
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Cronograma y estimación de tiempos
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Asignación de recursos y planificación de sprints
                        </p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 shadow-md transition-all"
                      >
                        Ver nuestro enfoque de planificación
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {activeProcess === 3 && (
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg text-indigo-600">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Desarrollo
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Nuestros desarrolladores expertos comienzan a construir su
                      solución siguiendo las mejores prácticas de la industria.
                      Utilizamos metodologías ágiles que permiten entregas
                      iterativas y feedback constante para asegurar que el
                      producto evolucione según sus necesidades.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Desarrollo con metodologías ágiles
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Implementación de código limpio y escalable
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Integración continua y entregas incrementales
                        </p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 shadow-md transition-all"
                      >
                        Explorar nuestras tecnologías
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {activeProcess === 4 && (
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg text-indigo-600">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Pruebas
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Realizamos rigurosas pruebas para garantizar la calidad,
                      funcionalidad y seguridad de su producto. Empleamos
                      pruebas automáticas y manuales para detectar y corregir
                      cualquier problema antes de la entrega, asegurando un
                      producto final de alta calidad.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Pruebas funcionales y unitarias
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Pruebas de integración y rendimiento
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Evaluación de usabilidad y experiencia de usuario
                        </p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 shadow-md transition-all"
                      >
                        Conocer nuestro proceso de QA
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {activeProcess === 5 && (
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg text-indigo-600">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Lanzamiento
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Gestionamos el despliegue de su producto a producción
                      garantizando un lanzamiento suave y sin inconvenientes.
                      Configuramos entornos, migramos datos, y proporcionamos
                      documentación detallada para asegurar que la transición
                      sea perfecta.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Preparación y configuración de entornos
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Despliegue monitoreado y controlado
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Capacitación y documentación
                        </p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 shadow-md transition-all"
                      >
                        Ver casos de lanzamiento exitosos
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {activeProcess === 6 && (
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg text-indigo-600">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Mantenimiento
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Ofrecemos soporte continuo para su producto, asegurando
                      que funcione de manera óptima a lo largo del tiempo.
                      Implementamos actualizaciones, monitoreamos el rendimiento
                      y resolvemos cualquier problema que pueda surgir para
                      garantizar una experiencia sin interrupciones.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Monitoreo proactivo y mantenimiento preventivo
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Actualizaciones de seguridad y rendimiento
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <p className="text-gray-700">
                          Soporte técnico continuo y resolución de incidencias
                        </p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 shadow-md transition-all"
                      >
                        Planes de mantenimiento
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="text-indigo-600 font-semibold mb-3">
              PROYECTOS DESTACADOS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestros casos de éxito
            </h2>
            <p className="text-lg text-gray-600">
              Descubre cómo hemos ayudado a empresas a transformar sus ideas en
              soluciones digitales exitosas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative">
                <div className="h-56 bg-indigo-100 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-400 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">
                        Sistema ERP en la nube
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Empresarial
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Cloud ERP para distribuidora nacional
                </h3>
                <p className="text-gray-600 mb-4">
                  Desarrollo de un sistema ERP completo en la nube para una
                  empresa distribuidora con operaciones en todo el país,
                  integrando módulos de inventario, ventas, compras y
                  contabilidad.
                </p>
                <div className="flex flex-wrap mb-4 gap-2">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    React
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Node.js
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    PostgreSQL
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    AWS
                  </span>
                </div>
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center"
                >
                  Ver proyecto
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative">
                <div className="h-56 bg-indigo-100 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-400 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">
                        Aplicación móvil de salud
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Móvil
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  HealthTrack: App de seguimiento médico
                </h3>
                <p className="text-gray-600 mb-4">
                  Aplicación móvil que permite a los pacientes gestionar sus
                  citas médicas, medicamentos y resultados de pruebas,
                  integrándose con las principales redes hospitalarias.
                </p>
                <div className="flex flex-wrap mb-4 gap-2">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    React Native
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Firebase
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    GraphQL
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    MongoDB
                  </span>
                </div>
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center"
                >
                  Ver proyecto
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative">
                <div className="h-56 bg-indigo-100 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-400 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Tienda e-commerce</h3>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Web
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  FashionStore: Plataforma de moda online
                </h3>
                <p className="text-gray-600 mb-4">
                  Plataforma e-commerce escalable para una marca de moda con más
                  de 5,000 productos, incluyendo integración con múltiples
                  pasarelas de pago y análisis de datos en tiempo real.
                </p>
                <div className="flex flex-wrap mb-4 gap-2">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Next.js
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Typescript
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Stripe
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Tailwind CSS
                  </span>
                </div>
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center"
                >
                  Ver proyecto
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block px-8 py-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 shadow-md transition-all"
            >
              Ver todos los proyectos
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para construir su próximo proyecto?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Hable con nuestros expertos y descubra cómo podemos ayudarle a
            alcanzar sus objetivos tecnológicos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-indigo-50"
            >
              Solicitar presupuesto
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-indigo-700 text-white font-medium rounded-md border border-indigo-500 hover:bg-indigo-800"
            >
              Programar una llamada
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Desarrollo Web
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Aplicaciones Móviles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Software Empresarial
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Hosting y Mantenimiento
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Casos de estudio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Guías técnicas
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Nuestro equipo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Trabajar con nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Términos de uso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-indigo-600 rounded-md mr-2 flex items-center justify-center text-white font-bold text-xs">
                W&I
              </div>
              <span className="text-xl font-bold">Web&IT Solutions</span>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.755zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-400 text-sm">
            <p>© 2025 Web&IT Solutions. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebITSolutions;
