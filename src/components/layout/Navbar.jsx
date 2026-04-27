import { useState, useEffect } from "react";
import { createPortal } from "react-dom"; // Usamos Portal para renderizar el sidebar fuera del <nav> y evitar herencia de estilos
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LogoSVG from "../LogoSVG";

/**
 * Componente de Navegación Global.
 *
 * Principio SOLID (SRP): Este componente solo maneja la barra de navegación.
 * El sidebar móvil se monta mediante un Portal directamente en el <body>,
 * garantizando que sea completamente opaco y sin herencia de z-index o
 * transparencias del componente padre.
 */
const Navbar = ({ view, setView, activeSection }) => {
  // Estado que controla la visibilidad del menú móvil
  const [isOpen, setIsOpen] = useState(false);
  // Estado para detectar si el usuario ha hecho scroll (solo afecta en móvil)
  const [scrolled, setScrolled] = useState(false);

  // Listener pasivo de scroll para máxima performance
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Maneja la navegación entre vistas y secciones de forma inteligente.
   * Cierra el menú móvil antes de navegar para evitar estados inconsistentes.
   */
  const handleNavClick = (targetView, targetId) => {
    setIsOpen(false);

    if (view !== targetView) {
      // Cambiamos de vista (home <-> about) y luego hacemos scroll si es necesario
      setView(targetView);
      if (targetId) {
        setTimeout(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        }, 600);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // Misma vista: solo hacemos scroll directo
      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  /**
   * Determina si un enlace está activo según la sección visible o la vista actual.
   * @param {string} section - ID de la sección a comprobar
   * @param {string} target - Vista objetivo del enlace ("home" | "about")
   */
  const isLinkActive = (section, target) => {
    if (target === "about") return view === "about";
    return view === "home" && activeSection === section;
  };

  // Datos de los enlaces, centralizados aquí para cumplir DRY (Don't Repeat Yourself)
  const navLinks = [
    { label: "Inicio",      target: "home",  id: null,       section: "hero"     },
    { label: "Proyectos",   target: "home",  id: "projects", section: "projects" },
    { label: "Habilidades", target: "home",  id: "skills",   section: "skills"   },
    { label: "Conóceme",    target: "about", id: null,       section: null       },
    { label: "Contacto",    target: "home",  id: "contact",  section: "contact"  },
  ];

  return (
    <>
      {/* ---- Barra de Navegación Principal ---- */}
      {/* Navbar con blur que se desvanece hacia abajo mediante mask-image.
          El gradiente de la máscara hace que el blur "se funda" con el contenido
          en lugar de tener un borde duro visible */}
      <nav
        className="fixed top-0 w-full h-28 z-50 px-6 md:px-16 flex justify-between items-start pt-6 backdrop-blur-md bg-black/30"
        style={{
          /* Máscara que desvanece el fondo desde opaco arriba hasta transparente abajo.
             Esto elimina la línea de corte y hace que la navbar "fluya" con el contenido */
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      >
        {/* Logo - visible siempre en desktop, se oculta en móvil al hacer scroll */}
        <motion.div
          onClick={() => handleNavClick("home", null)}
          className="flex items-center cursor-pointer group shrink-0"
          animate={{
            // En móvil: desaparece al bajar. En desktop: siempre visible
            opacity: scrolled ? 0 : 1,
            scale: scrolled ? 0.7 : 1,
            pointerEvents: scrolled ? "none" : "auto",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="scale-90 md:scale-110 transition-transform group-hover:scale-105">
            <LogoSVG />
          </div>
        </motion.div>

        {/* ---- Menú Desktop (solo visible en md+) ---- */}
        <div className="hidden md:flex gap-8 lg:gap-12 font-serif text-sm uppercase tracking-[0.2em] items-center text-white/50">
          {navLinks.map((link) => {
            const active = isLinkActive(link.section, link.target);
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.target, link.id)}
                className={`relative py-1 transition-colors duration-200 hover:text-orange-500 whitespace-nowrap ${
                  active ? "text-orange-500 font-bold" : ""
                }`}
              >
                {link.label}
                {/* Línea indicadora de sección activa */}
                {active && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-900 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ---- Botón Hamburguesa (solo visible en móvil) ---- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-lg transition-colors hover:bg-white/10"
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* ---- Sidebar Móvil montado en el <body> via Portal ----
          Al usar createPortal, el div queda fuera del árbol del <nav>,
          eliminando cualquier herencia de estilos que causara transparencia */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop oscuro que atenúa el contenido de fondo */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
                style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.75)", zIndex: 9998 }}
              />

              {/* Sidebar - fondo absolutamente sólido mediante style inline */}
              <motion.div
                key="sidebar"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 280 }}
                style={{
                  position: "fixed",
                  top: 0,
                  right: 0,
                  height: "100%",
                  width: "80%",
                  maxWidth: "300px",
                  backgroundColor: "#0a0a0a", // Negro sólido garantizado
                  borderLeft: "1px solid rgba(212,175,55,0.2)", // Borde dorado sutil
                  boxShadow: "-12px 0 40px rgba(0,0,0,0.9)",
                  zIndex: 9999,
                  display: "flex",
                  flexDirection: "column",
                  padding: "2rem",
                }}
              >
                {/* Cabecera del sidebar con logo y botón de cierre */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
                  <LogoSVG />
                  <button
                    onClick={() => setIsOpen(false)}
                    style={{ color: "rgba(245,245,220,0.5)", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.target.style.color = "#8b0000")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(245,245,220,0.5)")}
                  >
                    <X size={30} />
                  </button>
                </div>

                {/* Lista de enlaces del menú */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                  {navLinks.map((link, i) => {
                    const active = isLinkActive(link.section, link.target);
                    return (
                      <motion.button
                        key={link.label}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        onClick={() => handleNavClick(link.target, link.id)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          textAlign: "left",
                          padding: 0,
                        }}
                      >
                        {/* Punto indicador de sección activa */}
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: active ? "#8b0000" : "#2d2d2d",
                            boxShadow: active ? "0 0 8px #8b0000" : "none",
                            flexShrink: 0,
                            transition: "all 0.3s",
                          }}
                        />
                        {/* Texto del enlace */}
                        <span
                          style={{
                            fontFamily: "JetBrains Mono, monospace",
                            fontSize: "1.1rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            color: active ? "#f5f5dc" : "rgba(245,245,220,0.45)",
                            transition: "color 0.2s",
                          }}
                        >
                          {link.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Pie del sidebar con información discreta */}
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "2rem",
                    borderTop: "1px solid rgba(45,45,45,0.5)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "0.6rem",
                      color: "#2d2d2d",
                      textTransform: "uppercase",
                      letterSpacing: "0.3em",
                      lineHeight: 1.8,
                    }}
                  >
                    Duglas Altamar
                    <br />
                    Portfolio v2.0
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body // Montamos directamente en el body para evitar herencia de estilos
      )}
    </>
  );
};

export default Navbar;
