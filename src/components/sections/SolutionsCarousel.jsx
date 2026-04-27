import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

/**
 * Componente de Carrusel de Soluciones.
 * Maneja la lógica de scroll infinito y arrastre.
 */
const SolutionsCarousel = () => {
  const controls = useAnimation();

  const startInfiniteScroll = async () => {
    await controls.start({
      y: ["0%", "-100%"],
      transition: {
        duration: 50,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    startInfiniteScroll();
  }, []);

  const items = [
    "Arquitectura Escalable en AWS & Supabase",
    "Desarrollo Full Stack con React & NestJS",
    "Agentes de IA para Productos Digitales",
    "Entornos Asistidos por Agentes (Claude, Codex & Antigravity)",
    "Bases de Datos con PostgreSQL & MongoDB",
    "Software a la medida para Negocios",
    "Integración de APIs y Servicios Digitales",
    "Diseño de Plataformas SaaS Modernas",
    "Consultoría Educativa STEM+A",
    "Arquitectura Escalable en AWS & Supabase" // Repeated for seamless loop
  ];

  return (
    <div
      className="h-12 overflow-hidden flex flex-col items-center relative min-w-[300px] md:min-w-[500px]"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
      }}
    >
      <motion.div
        drag="y"
        dragConstraints={{ top: -576, bottom: 0 }}
        animate={controls}
        onDragStart={() => controls.stop()}
        onDragEnd={() => startInfiniteScroll()}
        className="flex flex-col gap-4 font-serif text-ds-parchment/60 uppercase tracking-widest text-xs md:text-sm cursor-grab active:cursor-grabbing"
      >
        {items.map((item, index) => (
          <span key={index} className="h-12 flex items-center justify-center text-center px-4">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default SolutionsCarousel;
