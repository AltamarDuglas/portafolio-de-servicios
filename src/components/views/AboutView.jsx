import { motion } from "framer-motion";
import { Terminal, Sparkles } from "lucide-react";

/**
 * Vista 'Conóceme'.
 * Contenido detallado del perfil personal y propuesta de valor.
 */
const AboutView = ({ onBack }) => {
  return (
    <motion.main
      key="about"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 px-6 max-w-4xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-12">
        <Terminal size={40} className="text-ds-blood" />
        <h2 className="text-5xl font-heading">Conóceme</h2>
      </div>

      <div className="space-y-8 font-serif text-xl text-ds-parchment/80 leading-relaxed">
        <p>
          Soy un <span className="text-ds-ember">Licenciado en Informática</span> que encontró su verdadera pasión en la construcción de software moderno. Mi camino no ha sido solo líneas de código, sino la búsqueda constante de cómo la tecnología puede transformar la educación y los negocios.
        </p>

        <p>
          Como <span className="text-ds-ember">Desarrollador Full Stack</span>, me especializo en construir motores backend potentes con <span className="text-ds-parchment italic">NestJS</span> y experiencias de usuario fluidas en <span className="text-ds-parchment italic">React</span>. Mi formación pedagógica me otorga una ventaja única: la capacidad de comunicar ideas técnicas complejas y liderar equipos con una visión clara y estructurada.
        </p>

        <div className="mt-16 p-8 ds-card sketchy-border bg-ds-blood/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles size={120} />
          </div>

          <h3 className="text-3xl text-ds-ember mb-8 font-heading">¿Cómo puedo ayudar a tu empresa?</h3>
          <ul className="space-y-6 text-lg">
            <li className="flex gap-4">
              <span className="text-ds-blood font-bold text-2xl">▹</span>
              <span><strong className="text-ds-parchment block text-xl mb-1">Arquitectura que no falla:</strong> Diseño sistemas escalables que soportan el crecimiento de tu negocio sin comprometer el rendimiento.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-ds-blood font-bold text-2xl">▹</span>
              <span><strong className="text-ds-parchment block text-xl mb-1">Inteligencia Aplicada:</strong> No solo uso IA, la integro en tus procesos para automatizar tareas críticas y optimizar la toma de decisiones.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-ds-blood font-bold text-2xl">▹</span>
              <span><strong className="text-ds-parchment block text-xl mb-1">Infraestructura de Élite:</strong> Despliegues seguros y eficientes en la nube (AWS/Vercel) para que tu producto esté siempre en línea.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-ds-blood font-bold text-2xl">▹</span>
              <span><strong className="text-ds-parchment block text-xl mb-1">Transferencia de Conocimiento:</strong> Ayudo a tu equipo a subir de nivel, implementando mejores prácticas y metodologías de desarrollo modernas.</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="ds-button border-ds-parchment/30 hover:border-ds-blood text-ds-parchment/60 hover:text-ds-parchment"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </motion.main>
  );
};

export default AboutView;
