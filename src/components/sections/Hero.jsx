import { motion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import SolutionsCarousel from "./SolutionsCarousel";

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.35 6.52-1.54 6.52-7.14a5.46 5.46 0 0 0-1.53-3.79 5.07 5.07 0 0 0-.15-3.7s-1.29-.41-4.24 1.5a14.81 14.81 0 0 0-8 0C3.71 1.95 2.42 2.36 2.42 2.36a5.07 5.07 0 0 0-.15 3.7A5.46 5.46 0 0 0 .75 9.83c0 5.6 3.34 6.79 6.52 7.14a4.8 4.8 0 0 0-1 3.03v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

/**
 * Sección Hero.
 * Bienvenida, Título y CTA principal.
 */
const Hero = ({ onNavigateAbout }) => {
  return (
    <header className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <h1 className="text-6xl md:text-8xl mb-4 text-ds-parchment font-heading drop-shadow-[0_5px_15px_rgba(139,0,0,0.4)]">
          Duglas Altamar Gómez
        </h1>
        <p className="text-xl md:text-2xl font-serif text-ds-ember mb-8">
          Licenciado en Informática & Desarrollador de Software a la medida
        </p>

        <SolutionsCarousel />

        {/* Botones de Navegación Accesibles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-8"
        >
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#projects" className="ds-button sketchy-border bg-ds-blood/10 border-ds-blood hover:bg-ds-blood text-ds-parchment group">
              Explorar Proyectos
            </a>
            <button
              onClick={onNavigateAbout}
              className="ds-button sketchy-border border-ds-charcoal hover:border-ds-ember text-ds-parchment/80 hover:text-ds-ember"
            >
              Conóceme más
            </button>
          </div>

          {/* Enlaces de Contacto Rápido con Animación de Respiración */}
          <div className="flex gap-8 items-center text-ds-parchment/60">
            <a
              href="https://linkedin.com/in/duglas-altamar-gomez-9b559a317"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ds-gold transition-all duration-300 flex items-center gap-2 text-sm font-cascadia group animate-breathing"
            >
              <LinkedinIcon size={20} className="group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#d4af37] transition-all" />
              <span className="hidden md:inline tracking-widest opacity-80 group-hover:opacity-100">LinkedIn</span>
            </a>
            <a
              href="https://github.com/AltamarDuglas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ds-gold transition-all duration-300 flex items-center gap-2 text-sm font-cascadia group animate-breathing [animation-delay:0.5s]"
            >
              <GithubIcon size={20} className="group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#d4af37] transition-all" />
              <span className="hidden md:inline tracking-widest opacity-80 group-hover:opacity-100">GitHub</span>
            </a>
            <a
              href="mailto:duglasphone@gmail.com"
              className="hover:text-ds-gold transition-all duration-300 flex items-center gap-2 text-sm font-cascadia group animate-breathing [animation-delay:1s]"
            >
              <Mail size={20} className="group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#d4af37] transition-all" />
              <span className="hidden md:inline tracking-widest opacity-80 group-hover:opacity-100">Email</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10"
      >
        <ChevronDown size={32} className="text-ds-blood/50" />
      </motion.div>
    </header>
  );
};

export default Hero;
