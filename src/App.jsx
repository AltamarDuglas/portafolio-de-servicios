import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Layout & Sections
import ParticlesBackground from "./components/ParticlesBackground";
import ShootingStars from "./components/ShootingStars";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import ContactForm from "./components/ContactForm";

// Views
import AboutView from "./components/views/AboutView";

/**
 * Componente principal (Orquestador).
 * Aplica SOLID dividiendo responsabilidades en componentes especializados.
 */
function App() {
  const [view, setView] = useState("home"); // "home" o "about"
  const [activeSection, setActiveSection] = useState("hero");

  // Detección de sección activa mediante scroll
  useEffect(() => {
    if (view !== "home") return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Margen para detectar la sección central
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["hero", "projects", "skills", "contact"];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [view]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fondo de Partículas global */}
      <ParticlesBackground />
      <ShootingStars />

      {/* Navegación global */}
      <Navbar view={view} setView={setView} activeSection={activeSection} />

      <AnimatePresence mode="wait">
        {view === "home" ? (
          <motion.main
            key="home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Vista Principal organizada por secciones */}
            <div id="hero">
              <Hero onNavigateAbout={() => setView("about")} />
            </div>
            <ProjectsSection />
            <SkillsSection />
            <ContactForm />
          </motion.main>
        ) : (
          /* Vista Conóceme */
          <AboutView onBack={() => setView("home")} />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
