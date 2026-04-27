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
    // Función para crear una nueva estrella con propiedades aleatorias
    const createStar = () => {
      const id = Math.random().toString(36).substring(2, 9);
      const style = {
        top: `${Math.random() * 50}%`, // Salen desde la mitad superior
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 2 + 1}s`, // Velocidad variable
        animationDelay: "0s",
      };

      const newStar = { id, style };
      
      setStars((prevStars) => [...prevStars, newStar]);

      // Eliminamos la estrella después de que termine su animación (aprox 3s)
      setTimeout(() => {
        setStars((prevStars) => prevStars.filter((star) => star.id !== id));
      }, 3000);
    };

    // Intervalo para generar estrellas de forma aleatoria
    const interval = setInterval(() => {
      // Solo creamos una estrella si hay "suerte" (simula aleatoriedad ocasional)
      if (Math.random() > 0.6) {
        createStar();
      }
    }, 2000);

    return () => clearInterval(interval);
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
