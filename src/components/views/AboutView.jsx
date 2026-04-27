import { motion } from "framer-motion";
import { Terminal, TrendingUp, Zap, ShieldCheck, Clock } from "lucide-react";

/**
 * Vista 'Conóceme'.
 * Redactada como propuesta de valor orientada a dueños de negocio,
 * no como CV técnico. El objetivo es que el lector piense:
 * "Quiero a este tipo construyendo mi software".
 */
const AboutView = ({ onBack }) => {

  /**
   * Cada beneficio está formulado en lenguaje de negocio, no de programador.
   * Evitamos jerga técnica innecesaria para que cualquier dueño de empresa lo entienda.
   */
  const beneficios = [
    {
      icon: TrendingUp,
      titulo: "Tu negocio crece, el software lo sigue",
      texto:
        "Construyo sistemas que no se rompen cuando tu empresa escala. Ya sean 10 o 10,000 usuarios al día, el software que entrego sigue funcionando sin que tengas que empezar de cero.",
    },
    {
      icon: Zap,
      titulo: "De idea a producto en el menor tiempo posible",
      texto:
        "Trabajo con metodologías modernas que eliminan el desperdicio. Recibes versiones funcionales rápido, ves el progreso desde el día uno y pagas por resultados reales.",
    },
    {
      icon: ShieldCheck,
      titulo: "Inviertes una vez, no todos los meses en arreglos",
      texto:
        "El software mal hecho sale caro. Me especializo en código limpio y bien estructurado desde el principio, lo que reduce el mantenimiento y los errores inesperados a largo plazo.",
    },
    {
      icon: Clock,
      titulo: "Automatiza lo que hoy hace alguien a mano",
      texto:
        "¿Tienes procesos repetitivos que consumen tiempo de tu equipo? Los convierto en flujos automáticos. Menos errores humanos, menos costos operativos, más tiempo para lo que importa.",
    },
  ];

  return (
    <motion.main
      key="about"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 px-6 max-w-4xl mx-auto"
    >
      {/* Encabezado de la sección */}
      <div className="flex items-center gap-4 mb-12">
        <Terminal size={40} className="text-ds-blood" />
        <h2 className="text-5xl font-heading">Conóceme</h2>
      </div>

      <div className="space-y-10 font-serif text-xl text-ds-parchment/80 leading-relaxed">

        {/* --- SECCIÓN: Quién soy --- */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Bloque de datos clave - da credibilidad rápida */}
          <div className="shrink-0 w-full md:w-56 flex flex-col gap-3">
            {[
              { label: "Formación", valor: "Licenciado en Informática" },
              { label: "Especialidad", valor: "Full Stack Developer" },
              { label: "Enfoque",  valor: "Software a la medida" },
              { label: "Ubicación", valor: "Colombia" },
            ].map(({ label, valor }) => (
              <div key={label} className="border border-ds-charcoal/60 p-3 bg-ds-gray/20">
                <p className="text-[10px] font-mono text-ds-parchment/40 uppercase tracking-[0.2em] mb-0.5">{label}</p>
                <p className="text-sm text-ds-parchment font-mono">{valor}</p>
              </div>
            ))}
          </div>

          {/* Presentación personal con tono humano */}
          <div className="space-y-5 text-lg">
            <p>
              Soy <span className="text-ds-ember">Duglas Altamar Gómez</span>, desarrollador de software con formación en Licenciatura en Informática y varios años construyendo productos digitales reales — desde plataformas de impresión hasta sistemas de gestión empresarial.
            </p>
            <p>
              Empecé mi camino en la educación, lo que me dio algo que la mayoría de programadores no tienen:{" "}
              <span className="text-ds-ember">la capacidad de escuchar, entender y explicar sin perderme en el tecnicismo</span>. Hoy eso me permite trabajar de la mano con empresas para entregar software que realmente resuelve problemas.
            </p>
            <p>
              Mi stack principal incluye <span className="text-ds-parchment/90 italic">React, NestJS, Python, PostgreSQL y despliegues en la nube</span> — pero lo que realmente ofrezco no es un stack, es{" "}
              <span className="text-ds-ember">un producto terminado que funciona</span>.
            </p>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-ds-charcoal/40 pt-4">
          <p className="text-sm font-mono text-ds-parchment/30 uppercase tracking-[0.3em]">Propuesta de valor</p>
        </div>

        {/* Párrafo de apertura: habla de problemas del negocio, no de tecnología */}
        <p>
          Si estás leyendo esto, probablemente tienes{" "}
          <span className="text-ds-ember">
            una idea que no has podido convertir en software
          </span>
          , o un sistema que ya no aguanta el ritmo de tu negocio. Yo me dedico exactamente a eso: transformar necesidades reales de empresas en productos digitales que funcionan, que se ven bien y que generan resultados.
        </p>

        {/* Párrafo de diferenciación */}
        <p>
          No soy solo un programador. Soy un{" "}
          <span className="text-ds-ember">
            socio técnico que habla tu idioma
          </span>
          . Para ti no importa si uso React o NestJS — lo que importa es que el producto esté listo, funcione sin fallas y que tus clientes lo amen desde el primer clic.
        </p>

        {/* Bloque de beneficios orientados al cliente */}
        <div className="mt-8 p-8 ds-card bg-ds-blood/5 relative overflow-hidden">

          <h3 className="text-3xl text-ds-ember mb-10 font-heading">
            ¿Qué ganas trabajando conmigo?
          </h3>

          <ul className="space-y-10">
            {beneficios.map(({ icon: Icon, titulo, texto }, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 items-start"
              >
                {/* Icono del beneficio */}
                <div className="mt-1 shrink-0 p-2 border border-ds-blood/30 text-ds-blood">
                  <Icon size={22} />
                </div>
                <span>
                  <strong className="text-ds-parchment block text-xl mb-1">
                    {titulo}
                  </strong>
                  {texto}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Cierre con llamada a la acción clara */}
        <div className="mt-4 p-6 border border-ds-charcoal/50 bg-ds-gray/30">
          <p className="text-base text-ds-parchment/60 font-mono uppercase tracking-widest mb-2">
            Siguiente paso
          </p>
          <p className="text-lg mb-0">
            Si tienes un proyecto en mente —grande o pequeño— hablemos.{" "}
            <span className="text-ds-ember">
              Una consulta inicial no te cuesta nada
            </span>{" "}
            y puede ser el inicio de algo que cambie tu negocio.
          </p>
        </div>

        {/* Botón de regreso */}
        <div className="mt-8 text-center">
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
