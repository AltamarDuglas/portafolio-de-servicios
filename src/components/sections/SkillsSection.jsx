import { GraduationCap, Sparkles } from "lucide-react";

/**
 * Sección de Habilidades y Educación.
 * Muestra el perfil técnico y la formación académica.
 */
const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-ds-gray/50 border-y border-ds-charcoal">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Habilidades Técnicas */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <Sparkles size={32} className="text-ds-ember" />
            <h2 className="text-4xl font-heading">Habilidades Técnicas</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 font-serif">
            <div>
              <h4 className="text-ds-gold mb-3 uppercase text-xs tracking-widest font-cascadia">Frontend</h4>
              <ul className="space-y-1 text-ds-parchment/70">
                <li>React / Next.js</li>
                <li>JavaScript</li>
                <li>TailwindCSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div>
              <h4 className="text-ds-gold mb-3 uppercase text-xs tracking-widest font-cascadia">Backend</h4>
              <ul className="space-y-1 text-ds-parchment/70">
                <li>Node.js / NestJS</li>
                <li>Python</li>
                <li>PostgreSQL / MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h4 className="text-ds-gold mb-3 uppercase text-xs tracking-widest font-cascadia">Infraestructura & IA</h4>
              <ul className="space-y-1 text-ds-parchment/70">
                <li>AWS / Vercel / Supabase</li>
                <li>Agentes de IA (Claude, Codex)</li>
                <li>Docker / Git</li>
                <li>Metodologías Ágiles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Formación Académica */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap size={32} className="text-ds-blood" />
            <h2 className="text-4xl font-heading">Formación Académica</h2>
          </div>
          <div className="space-y-8 font-serif">
            <div className="border-l-2 border-ds-blood pl-6 py-1">
              <span className="text-ds-ember text-sm">2025</span>
              <h4 className="text-xl font-heading">Licenciatura en Informática</h4>
              <p className="text-ds-parchment/60">Universidad de Córdoba</p>
            </div>
            <div className="border-l-2 border-ds-blood pl-6 py-1">
              <span className="text-ds-ember text-sm">En curso</span>
              <h4 className="text-xl font-heading">Programación de Software</h4>
              <p className="text-ds-parchment/60">SENA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
