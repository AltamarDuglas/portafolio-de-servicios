import { motion } from "framer-motion";

/**
 * Componente LogoSVG - Una llama estilizada con estilo "sketchy" (dibujo a mano).
 * Representa la "chispa" de la creación y la temática de supervivencia.
 */
const LogoSVG = () => {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      initial="initial"
      whileHover="hover"
      className="cursor-pointer"
    >
      {/* Círculo base irregular (como una mancha de tinta) */}
      <path
        d="M50,10 Q60,30 80,50 T50,90 T20,50 T50,10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-ds-charcoal opacity-30"
      />
      
      {/* La llama principal con trazos irregulares - Animación constante de fuego */}
      <motion.path
        animate={{ 
          scaleY: [1, 1.15, 1, 1.05, 1],
          scaleX: [1, 0.95, 1.05, 1, 1],
          rotate: [0, -2, 2, -1, 0],
          skewX: [0, 2, -2, 1, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 0.4, // Rápido para efecto de parpadeo
          ease: "easeInOut" 
        }}
        d="M50,85 C30,75 25,55 35,40 C40,30 50,10 50,10 C50,10 60,30 65,40 C75,55 70,75 50,85 Z"
        fill="currentColor"
        className="text-ds-ember drop-shadow-[0_0_12px_rgba(226,88,34,0.8)]"
      />

      {/* Detalle interno (núcleo de la llama) - Parpadeo síncrono */}
      <motion.path
        animate={{ 
          scale: [1, 1.2, 0.9, 1.1, 1],
          opacity: [0.8, 1, 0.7, 1, 0.8]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 0.3,
          ease: "linear"
        }}
        d="M50,75 C40,65 38,55 45,45 C50,38 50,25 50,25 C50,25 50,38 55,45 C62,55 60,65 50,75 Z"
        fill="currentColor"
        className="text-ds-blood"
      />

      {/* Líneas de "boceto" extras para dar ese toque Don't Starve */}
      <path
        d="M45,15 L55,15 M30,50 L40,50 M60,50 L70,50 M45,95 L55,95"
        stroke="currentColor"
        strokeWidth="1"
        className="text-ds-blood/40"
      />
    </motion.svg>
  );
};

export default LogoSVG;
