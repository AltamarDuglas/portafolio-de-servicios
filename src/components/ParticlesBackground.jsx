import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

/**
 * Componente que maneja el fondo animado de partículas en JavaScript.
 * 
 * Principio SOLID: Responsabilidad Única - Solo gestiona el fondo.
 */
const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // Inicializamos el motor de partículas una sola vez al montar el componente.
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Cargamos la versión 'slim' para mantener el paquete ligero.
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container) => {
    // Lógica opcional tras la carga.
  };

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 0.8,
              size: 2,
            },
          },
        },
        particles: {
          color: {
            value: ["#ffffff", "#f5f5dc", "#8b0000"],
          },
          move: {
            direction: "top",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
