import { Code2 } from "lucide-react";
import ProjectCard from "../ProjectCard";
import { PROJECTS } from "../../data/projects";

/**
 * Sección de Proyectos.
 * Muestra la galería de trabajos destacados.
 */
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <Code2 size={40} className="text-ds-blood" />
        <h2 className="text-5xl font-heading">Proyectos Destacados</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
