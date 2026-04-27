import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code2, Sparkles, Menu, X } from "lucide-react";
import LogoSVG from "../LogoSVG";

/**
 * Componente de Navegación Global.
 * Maneja el cambio de vista y el desplazamiento suave (smooth scroll) hacia las secciones.
 */
const Navbar = ({ view, setView, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Función para manejar la navegación cruzada entre vistas y secciones
  const handleNavClick = (targetView, targetId) => {
    setIsOpen(false); // Cerramos el menú móvil si está abierto
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

  const navLinks = [
    { label: "Inicio", target: "home", id: null, section: "hero" },
    { label: "Proyectos", target: "home", id: "projects", section: "projects" },
    { label: "Habilidades", target: "home", id: "skills", section: "skills" },
    { label: "Conóceme", target: "about", id: null, section: null },
    { label: "Contacto", target: "home", id: "contact", section: "contact" },
  ];

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

      {/* Menú Desktop */}
      <div className="hidden md:flex gap-8 lg:gap-12 font-serif text-sm uppercase tracking-[0.2em] items-center text-ds-parchment/60">
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNavClick(link.target, link.id)}
            className={`relative py-1 transition-all hover:text-ds-ember whitespace-nowrap 
              ${(link.section === activeSection && view === 'home') || (link.target === 'about' && view === 'about') 
                ? "text-ds-ember font-bold" : ""}`}
          >
            {link.label}
            {((link.section === activeSection && view === 'home') || (link.target === 'about' && view === 'about')) && (
              <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-[2px] bg-ds-blood rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Botón Hamburguesa (Móvil) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-ds-parchment p-2 hover:bg-ds-charcoal/30 rounded-lg transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-20 bg-ds-black/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleNavClick(link.target, link.id)}
                className={`text-2xl font-serif uppercase tracking-[0.3em] transition-all
                  ${(link.section === activeSection && view === 'home') || (link.target === 'about' && view === 'about') 
                    ? "text-ds-blood" : "text-ds-parchment/70"}`}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
