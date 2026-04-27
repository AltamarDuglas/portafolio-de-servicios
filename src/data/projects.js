/**
 * Constante que contiene los proyectos del portafolio.
 * Se ha diseñado para ser fácilmente extensible.
 * 
 * He eliminado las interfaces de TypeScript para seguir con la arquitectura en JavaScript puro,
 * manteniendo la claridad mediante comentarios JSDoc.
 */
export const PROJECTS = [
  {
    id: 1,
    title: "Herbarium.space",
    description: "Plataforma Full Stack para la gestión de especímenes botánicos. Desarrollada con React, NestJS y PostgreSQL.",
    image: "/herbarium.png", // En Vite, las imágenes en public/ se acceden desde la raíz /
    tags: ["React", "NestJS", "PostgreSQL", "AWS"],
    link: "https://herbarium.space",
  },
  {
    id: 2,
    title: "impriMELO - Fotografía y más",
    description: "Plataforma web para la gestión de venta de fotografías y relacionados.",
    image: "imprimelo.png",
    tags: ["HTML", "CSS", "Python", "FastAPI", "PostgreSQL"],
    link: "https://impri-melo.vercel.app/",
  },
  {
    id: 3,
    title: "Ruidómetro Escolar - Aula Gamificada",
    description: "Aplicación educativa para el control del ruido en el aula de clases, usando Vue 3, NestJS y PostgreSQL.",
    image: "/ruidometro.png",
    tags: ["Vue 3", "NestJS", "PostgreSQL",]
  },
];
