import { motion } from "framer-motion";
import { User, Code2, Sparkles } from "lucide-react";
import LogoSVG from "../LogoSVG";

/**
 * Componente de Navegación Global.
 * Maneja el cambio de vista y el desplazamiento suave (smooth scroll) hacia las secciones.
 */
const Navbar = ({ view, setView, activeSection }) => {
  
  // Función para manejar la navegación cruzada entre vistas y secciones
  const handleNavClick = (targetView, targetId) => {
    if (view !== targetView) {
      setView(targetView);
      if (targetId) {
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 600);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // Determinar si una sección está activa
  const isActive = (id) => activeSection === id;

  return (
    <nav className="fixed top-0 w-full h-20 z-50 px-6 md:px-16 py-4 md:py-6 flex justify-between items-center bg-ds-black/90 backdrop-blur-md border-b border-ds-charcoal/50">
      
      {/* Logo */}
      <div
        onClick={() => handleNavClick("home", null)}
        className="flex items-center cursor-pointer group shrink-0"
      >
        <div className="scale-90 md:scale-110 transition-transform group-hover:scale-100 md:group-hover:scale-125">
          <LogoSVG />
        </div>
      </div>

      {/* Enlaces de Navegación */}
      <div className="flex gap-4 md:gap-8 lg:gap-12 font-serif text-[9px] md:text-sm uppercase tracking-[0.1em] md:tracking-[0.2em] items-center text-ds-parchment/60">
        
        {/* Inicio */}
        <button
          onClick={() => handleNavClick("home", null)}
          className={`relative py-1 transition-all hover:text-ds-ember whitespace-nowrap ${isActive('hero') && view === 'home' ? "text-ds-ember font-bold" : ""}`}
        >
          Inicio
          {isActive('hero') && view === 'home' && (
            <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-[2px] bg-ds-blood rounded-full" />
          )}
        </button>

        {/* Proyectos */}
        <button
          onClick={() => handleNavClick("home", "projects")}
          className={`relative py-1 transition-all hover:text-ds-ember whitespace-nowrap ${isActive('projects') ? "text-ds-ember font-bold" : ""}`}
        >
          Proyectos
          {isActive('projects') && (
            <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-[2px] bg-ds-blood rounded-full" />
          )}
        </button>

        {/* Habilidades */}
        <button
          onClick={() => handleNavClick("home", "skills")}
          className={`relative py-1 transition-all hover:text-ds-ember whitespace-nowrap ${isActive('skills') ? "text-ds-ember font-bold" : ""}`}
        >
          Habilidades
          {isActive('skills') && (
            <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-[2px] bg-ds-blood rounded-full" />
          )}
        </button>

        {/* Conóceme */}
        <button
          onClick={() => handleNavClick("about", null)}
          className={`relative py-1 transition-all hover:text-ds-ember whitespace-nowrap ${view === "about" ? "text-ds-ember font-bold" : ""}`}
        >
          Conóceme
          {view === "about" && (
            <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-[2px] bg-ds-blood rounded-full" />
          )}
        </button>

        {/* Contacto */}
        <button 
          onClick={() => handleNavClick("home", "contact")}
          className={`relative py-1 transition-all hover:text-ds-ember whitespace-nowrap ${isActive('contact') ? "text-ds-ember font-bold" : ""}`}
        >
          Contacto
          {isActive('contact') && (
            <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-[2px] bg-ds-blood rounded-full" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
