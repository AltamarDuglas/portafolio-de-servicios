import { motion } from "framer-motion";
import { Mail, Briefcase, Terminal, Send } from "lucide-react";

/**
 * Componente de formulario de contacto con estilo de "Nota de Superviviente".
 * Utiliza una estética de papel viejo y bordes irregulares.
 */
const ContactForm = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 bg-ds-black relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-ds-gray/50 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#f2ead3] text-ds-black p-6 md:p-16 sketchy-border relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-ds-black/10 mx-2"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')",
          }}
        >
          {/* Mancha de café decorativa - Oculta en móviles muy pequeños */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-ds-blood/10 blur-3xl rounded-full pointer-events-none hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Información de Contacto */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-5xl mb-6 md:mb-8 text-ds-blood font-heading tracking-tight">Hablemos</h2>
                <p className="font-cascadia mb-8 md:mb-10 text-base md:text-lg leading-relaxed border-l-4 border-ds-blood/20 pl-4 md:pl-6 italic text-ds-black/70">
                  Las buenas ideas se mueren cuando no tienen una herramienta que las sostenga. Deja de adivinar cuánta mercancía tienes o cuánto vendiste ayer; hablemos y digitalicemos tu proceso para que tomes decisiones con datos reales.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6 font-cascadia text-base md:text-lg">
                {/* Email — mismo que en el Hero */}
                <a
                  href="mailto:duglasphone@gmail.com"
                  className="flex items-center gap-3 md:gap-4 hover:text-ds-blood transition-all hover:translate-x-2"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-ds-black/5 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <span className="truncate border-b border-transparent hover:border-ds-blood">duglasphone@gmail.com</span>
                </a>
                {/* LinkedIn — URL real del Hero */}
                <a
                  href="https://linkedin.com/in/duglas-altamar-gomez-9b559a317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 hover:text-ds-blood transition-all hover:translate-x-2"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-ds-black/5 flex items-center justify-center shrink-0">
                    <Briefcase size={18} />
                  </div>
                  <span className="truncate border-b border-transparent hover:border-ds-blood">LinkedIn</span>
                </a>
                {/* GitHub — URL real del Hero */}
                <a
                  href="https://github.com/AltamarDuglas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 hover:text-ds-blood transition-all hover:translate-x-2"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-ds-black/5 flex items-center justify-center shrink-0">
                    <Terminal size={18} />
                  </div>
                  <span className="truncate border-b border-transparent hover:border-ds-blood">GitHub</span>
                </a>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-ds-black/5 p-6 md:p-8 rounded-xl border border-ds-black/5 mt-4 md:mt-0">
              <form className="space-y-5 md:space-y-6">
                <div>
                  <label className="block font-cascadia text-[10px] md:text-sm uppercase tracking-widest mb-1 md:mb-2 opacity-60">Tu nombre o el de tu empresa</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b-2 border-ds-black/20 focus:border-ds-blood outline-none py-2 md:py-3 font-cascadia placeholder:text-ds-black/20 text-base md:text-lg transition-colors"
                    placeholder="Tu nombre aquí..."
                  />
                </div>
                <div>
                  <label className="block font-cascadia text-[10px] md:text-sm uppercase tracking-widest mb-1 md:mb-2 opacity-60">WhatsApp / Celular</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-transparent border-b-2 border-ds-black/20 focus:border-ds-blood outline-none py-2 md:py-3 font-cascadia placeholder:text-ds-black/20 text-base md:text-lg transition-colors"
                    placeholder="+57 300..."
                  />
                </div>
                <div>
                  <label className="block font-cascadia text-[10px] md:text-sm uppercase tracking-widest mb-1 md:mb-2 opacity-60">Tu Proyecto</label>
                  <textarea
                    rows={3}
                    required
                    className="w-full bg-transparent border-b-2 border-ds-black/20 focus:border-ds-blood outline-none py-2 md:py-3 font-cascadia resize-none placeholder:text-ds-black/20 text-base md:text-lg transition-colors"
                    placeholder="¿Qué tienes en mente?"
                  />
                </div>
                <button
                  type="submit"
                  className="ds-button bg-ds-black text-ds-parchment hover:bg-ds-blood w-full flex items-center justify-center gap-3 py-3 md:py-4 text-base md:text-lg font-cascadia tracking-widest group transition-all active:scale-95 mt-2"
                >
                  <span>Enviar</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
