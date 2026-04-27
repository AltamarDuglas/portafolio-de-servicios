import { motion } from "framer-motion"; // Simplificamos los imports de framer-motion
import { ArrowUpRight } from "lucide-react"; // Mantenemos el icono para el link

/**
 * Componente ProjectCard.
 * Se ha simplificado eliminando el efecto de spotlight dinámico para
 * un diseño más limpio y menos "brillante" según la solicitud del usuario.
 */
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative h-full"
    >
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -8 }}
        className="ds-card ds-glow-gold group block no-underline h-full flex flex-col relative z-20 border-ds-gold/10 hover:border-ds-gold/30"
      >
        {/* Contenedor de Imagen */}
        <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden border-b border-ds-gold/20 bg-ds-black">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale brightness-[0.4] contrast-[1.2] transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-[0.9]"
            loading="lazy"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop";
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-ds-black via-transparent to-transparent opacity-60" />
          
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <div className="bg-ds-gold/80 backdrop-blur-sm p-2 border border-ds-gold/30">
              <ArrowUpRight size={16} className="text-ds-black font-bold" />
            </div>
          </div>
        </div>

        {/* Información del Proyecto */}
        <div className="flex-grow flex flex-col relative z-10">
          <div className="mb-3">
            <h3 className="text-xl text-ds-parchment font-cascadia group-hover:text-ds-gold transition-colors duration-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-ds-gold group-hover:shadow-[0_0_8px_#d4af37] transition-all" />
              {project.title}
            </h3>
          </div>
          
          <p className="text-sm font-body text-ds-parchment/50 group-hover:text-ds-parchment/80 transition-colors duration-300 mb-6 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.2em] border border-ds-charcoal text-ds-parchment/30 group-hover:border-ds-gold/30 group-hover:text-ds-gold/60 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Detalles ornamentales minimalistas */}
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-ds-gold/0 group-hover:border-ds-gold/40 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-ds-gold/0 group-hover:border-ds-gold/40 transition-all duration-500" />
      </motion.a>
    </motion.div>
  );
};

export default ProjectCard;
