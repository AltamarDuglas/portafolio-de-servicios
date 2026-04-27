import { useEffect, useState } from "react";

/**
 * Componente ShootingStars.
 * Genera estrellas fugaces aleatorias en el fondo.
 * 
 * Aplicamos SOLID (Single Responsibility) al separar este efecto visual
 * del motor principal de partículas.
 */
const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let timeoutId;
    
    // Función para crear una nueva estrella con propiedades aleatorias
    const createStar = () => {
      const id = Math.random().toString(36).substring(2, 9);
      
      // Aleatorizamos la posición de inicio (fuera de pantalla o bordes)
      const x = Math.random() * 100;
      const y = Math.random() * 40; // Solo en la parte superior

      const style = {
        top: `${y}%`,
        left: `${x}%`,
        animationDuration: `${Math.random() * 1 + 1}s`, // Más rápido (1-2s)
        animationDelay: "0s",
      };

      const newStar = { id, style };
      
      setStars((prevStars) => {
        // Limitamos a máximo 2 estrellas simultáneas para evitar saturación
        if (prevStars.length >= 2) return prevStars;
        return [...prevStars, newStar];
      });

      // Eliminamos la estrella después de su animación (2s es suficiente ahora)
      setTimeout(() => {
        setStars((prevStars) => prevStars.filter((star) => star.id !== id));
      }, 2000);

      // Programamos la siguiente estrella con un retraso mucho más largo y variable
      const nextDelay = Math.random() * 6000 + 4000; // Entre 4 y 10 segundos
      timeoutId = setTimeout(createStar, nextDelay);
    };

    // Iniciamos el ciclo
    timeoutId = setTimeout(createStar, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-5]">
      {stars.map((star) => (
        <span
          key={star.id}
          className="shooting-star"
          style={star.style}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
