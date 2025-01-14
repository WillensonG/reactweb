import React from "react";
import { Globe } from "lucide-react";

const DesarrolloWeb = () => {
  return (
    <section className="py-32 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-8">Desarrollo Web Profesional</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-200">
          Creamos experiencias digitales modernas y funcionales para potenciar
          tu negocio en el entorno digital.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Aplicaciones Web Modernas",
              desc: "Diseñamos aplicaciones intuitivas y con excelente rendimiento.",
            },
            {
              icon: Globe,
              title: "Diseño Responsivo",
              desc: "Garantizamos que tu sitio luzca increíble en cualquier dispositivo.",
            },
            {
              icon: Globe,
              title: "Soluciones Personalizadas",
              desc: "Creamos desarrollos a medida según las necesidades de tu negocio.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white/10 p-8 rounded-lg shadow-lg hover:bg-white/20 transition-transform transform hover:scale-105"
            >
              <service.icon className="w-12 h-12 text-blue-300 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-200">{service.desc}</p>
              <button className="mt-6 bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600 transition-all">
                Leer Más
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesarrolloWeb;
