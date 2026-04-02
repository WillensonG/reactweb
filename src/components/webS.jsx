import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RoadmapExpanded = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Stack tecnológico con iconos
  const stack = [
    {
      name: "Expo (React Native + Expo Router)",
      icon: "📱",
      description: "Framework para desarrollo móvil multiplataforma",
    },
    {
      name: "Supabase (PostgreSQL)",
      icon: "🗄️",
      description: "Base de datos y autenticación",
    },
    {
      name: "Zustand",
      icon: "🐻",
      description: "Gestión de estado global de la aplicación",
    },
    {
      name: "NativeWind / React Native Paper",
      icon: "💨",
      description: "UI components y estilos",
    },
    {
      name: "React Hook Form + Zod",
      icon: "📝",
      description: "Manejo de formularios con validación",
    },
    {
      name: "Expo Notifications",
      icon: "🔔",
      description: "Sistema de notificaciones para recordatorios (opcional)",
    },
    {
      name: "EAS Build + EAS Update",
      icon: "🚀",
      description: "Despliegue y actualizaciones OTA",
    },
  ];

  // Fases del proyecto
  const phases = [
    {
      id: 1,
      name: "Setup Inicial",
      icon: "🔧",
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500",
      description: "Configuración del entorno de desarrollo y servicios base",
      tasks: [
        {
          name: "Crear repo y estructura base del proyecto con Expo Router",
          responsible: "Dev",
          date: "Día 1",
        },
        {
          name: "Configurar Supabase (proyecto, tablas, API keys)",
          responsible: "Backend",
          date: "Día 1",
        },
        {
          name: "Crear helper lib/supabase.ts",
          responsible: "Dev",
          date: "Día 2",
        },
        {
          name: "Configurar .env + variables de entorno",
          responsible: "Dev",
          date: "Día 2",
        },
      ],
    },
    {
      id: 2,
      name: "Autenticación de Usuario",
      icon: "🔐",
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500",
      description: "Sistema de login, registro y gestión de sesiones",
      tasks: [
        {
          name: "Implementar pantalla de Login (app/login.tsx)",
          responsible: "Dev Frontend",
          date: "Día 3",
        },
        {
          name: "Implementar pantalla de Registro (app/register.tsx)",
          responsible: "Dev Frontend",
          date: "Día 3",
        },
        {
          name: "Validación y manejo de sesiones",
          responsible: "Dev",
          date: "Día 4",
        },
        {
          name: "Redireccionamiento condicional según login",
          responsible: "Dev",
          date: "Día 4",
        },
      ],
    },
    {
      id: 3,
      name: "Gestión de Clientes",
      icon: "👥",
      color: "from-green-500 to-green-600",
      borderColor: "border-green-500",
      description: "CRUD completo para la gestión de clientes",
      tasks: [
        {
          name: "Crear pantalla de lista de clientes (clientes/index.tsx)",
          responsible: "Dev",
          date: "Día 5",
        },
        {
          name: "Crear pantalla de nuevo cliente (clientes/nuevo.tsx)",
          responsible: "Dev",
          date: "Día 6",
        },
        {
          name: "Crear pantalla de detalle de cliente (clientes/[id].tsx)",
          responsible: "Dev",
          date: "Día 7",
        },
        {
          name: "Conectar con Supabase para CRUD de clientes",
          responsible: "Dev",
          date: "Día 8",
        },
      ],
    },
    {
      id: 4,
      name: "Gestión de Préstamos",
      icon: "💰",
      color: "from-yellow-500 to-yellow-600",
      borderColor: "border-yellow-500",
      description: "Sistema de creación y gestión de préstamos",
      tasks: [
        {
          name: "Crear tabla prestamos en Supabase",
          responsible: "Backend",
          date: "Día 6",
        },
        {
          name: "Crear pantalla de nuevo préstamo (prestamos/nuevo.tsx)",
          responsible: "Dev",
          date: "Día 8",
        },
        {
          name: "Listar préstamos por cliente en su detalle",
          responsible: "Dev",
          date: "Día 9",
        },
        {
          name: "Cálculo de intereses y validación de campos",
          responsible: "Dev",
          date: "Día 9",
        },
      ],
    },
    {
      id: 5,
      name: "Dashboard e Inicio",
      icon: "📊",
      color: "from-red-500 to-red-600",
      borderColor: "border-red-500",
      description: "Panel principal con resumen de actividad",
      tasks: [
        {
          name: "Crear página principal con resumen de préstamos, pagos próximos (index.tsx)",
          responsible: "Dev UI",
          date: "Día 10",
        },
        {
          name: "Implementar estadísticas básicas y calendario",
          responsible: "Dev",
          date: "Día 11",
        },
      ],
    },
    {
      id: 6,
      name: "Extras y Optimización",
      icon: "⚡",
      color: "from-indigo-500 to-indigo-600",
      borderColor: "border-indigo-500",
      description: "Mejoras adicionales y optimización de la aplicación",
      tasks: [
        {
          name: "Envío de notificaciones (recordatorio de pagos)",
          responsible: "Dev",
          date: "Día 12",
        },
        {
          name: "Validaciones robustas (Zod)",
          responsible: "Dev",
          date: "Día 12",
        },
        {
          name: "Responsive y estilos finales",
          responsible: "Dev UI",
          date: "Día 13",
        },
        { name: "Pruebas de QA básicas", responsible: "QA", date: "Día 14" },
      ],
    },
    {
      id: 7,
      name: "Deploy y Testing",
      icon: "🚀",
      color: "from-pink-500 to-pink-600",
      borderColor: "border-pink-500",
      description: "Despliegue y pruebas finales",
      tasks: [
        {
          name: "Crear build para Android/iOS con EAS",
          responsible: "Dev",
          date: "Día 15",
        },
        {
          name: "Testear en dispositivos reales",
          responsible: "QA",
          date: "Día 16",
        },
        {
          name: "Subida a TestFlight / Google Play Beta",
          responsible: "Dev",
          date: "Día 17",
        },
      ],
    },
  ];

  // Hitos importantes
  const milestones = [
    {
      name: "MVP Funcional",
      date: "Día 10",
      icon: "🎯",
      color: "from-blue-500 to-purple-500",
      description:
        "Entrega de la primera versión funcional con capacidades básicas",
    },
    {
      name: "QA y Testing",
      date: "Día 14",
      icon: "🔍",
      color: "from-purple-500 to-indigo-500",
      description: "Fase de pruebas intensivas y corrección de errores",
    },
    {
      name: "Primera Release para Testeo",
      date: "Día 17",
      icon: "🚀",
      color: "from-indigo-500 to-pink-500",
      description: "Primera versión disponible para usuarios beta",
    },
  ];

  // Notas adicionales
  const notes = [
    "Se recomienda usar Zustand para el manejo del estado del usuario autenticado.",
    "A medida que el proyecto crezca, se pueden incluir roles (admin/usuarios), historial de pagos, exportación de reportes, y más.",
    "Para escalabilidad, se recomienda desacoplar lógica de negocio en lib/ o services/.",
    "Implementar tests unitarios para los cálculos de préstamos e intereses para garantizar precisión.",
    "Considerar sincronización offline para operaciones en áreas con poca cobertura.",
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-blue-300 text-lg">Cargando roadmap...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header con gradiente animado */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-size-200 animate-gradient-x py-6 px-6 sticky top-0 z-10 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold flex items-center">
            <span className="mr-2">📌</span>
            Roadmap de Desarrollo – App de Préstamos Personales
          </h1>
          <p className="text-blue-100 mt-2">
            Una guía detallada para el desarrollo de aplicación móvil con Expo +
            Supabase
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {/* Stack tecnológico */}
        <section className="mb-12">
          <motion.h2
            className="text-2xl font-bold mb-6 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-400 mr-2">🧰</span> Stack Tecnológico
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {stack.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-all hover:shadow-lg"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-3">{tech.icon}</span>
                  <div>
                    <h3 className="font-medium text-blue-300">{tech.name}</h3>
                    <p className="text-sm text-gray-400">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Fases del proyecto - Todas expandidas */}
        <section className="mb-12">
          <motion.h2
            className="text-2xl font-bold mb-6 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-green-400 mr-2">🚦</span> Fases del Proyecto
          </motion.h2>

          <div className="space-y-8">
            {phases.map((phase) => (
              <motion.div
                key={phase.id}
                className={`rounded-xl overflow-hidden shadow-lg ${phase.borderColor} border`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + phase.id * 0.1 }}
              >
                <div className={`bg-gradient-to-r ${phase.color} p-4`}>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl mr-4">
                      {phase.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        Fase {phase.id}: {phase.name}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-5">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">
                            Tarea
                          </th>
                          <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">
                            Responsable
                          </th>
                          <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">
                            Fecha estimada
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {phase.tasks.map((task, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-700/50 last:border-0 hover:bg-gray-700/30"
                          >
                            <td className="py-3 px-4 text-white">
                              {task.name}
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  task.responsible === "Dev"
                                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                    : task.responsible === "Dev Frontend"
                                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                                    : task.responsible === "Backend"
                                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                                    : task.responsible === "Dev UI"
                                    ? "bg-pink-500/20 text-pink-300 border border-pink-500/30"
                                    : task.responsible === "QA"
                                    ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                                    : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
                                }`}
                              >
                                {task.responsible}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-gray-300">
                              {task.date}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Hitos importantes */}
        <section className="mb-12">
          <motion.h2
            className="text-2xl font-bold mb-6 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-yellow-400 mr-2">📈</span> Hitos Importantes
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${milestone.color} rounded-xl p-6 shadow-lg text-white`}
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                }}
              >
                <div className="text-3xl mb-3">{milestone.icon}</div>
                <h3 className="text-xl font-bold mb-2">{milestone.name}</h3>
                <p className="text-white/70 text-sm mb-3">
                  {milestone.description}
                </p>
                <div className="mt-2 inline-block bg-white/20 px-3 py-1 rounded-full text-sm">
                  {milestone.date}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Notas adicionales */}
        <section>
          <motion.h2
            className="text-2xl font-bold mb-6 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-pink-400 mr-2">📝</span> Notas Adicionales
          </motion.h2>
          <motion.div
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ul className="space-y-3 list-disc pl-5">
              {notes.map((note, index) => (
                <li key={index} className="text-gray-300">
                  {note}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-6 border-t border-gray-800 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Desarrollado con ❤️ por el equipo de
            desarrollo
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
              Exportar como PDF
            </button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors">
              Compartir Roadmap
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RoadmapExpanded;
