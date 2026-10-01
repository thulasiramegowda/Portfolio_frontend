import { motion } from 'framer-motion';

export default function Experience({ experience }) {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-32 md:py-48 bg-[#fdfcf7] text-[#111] relative border-t border-[#e0e0e0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="sticky top-32"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="w-8 h-px bg-[#960018]"></span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#960018] uppercase">04 / HISTORY</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif tracking-tighter leading-none mb-6">
                Experience
              </h2>
              <p className="text-[#666] font-light">
                Where I've applied my learning in real-world contexts.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-12">
            {experience.map((exp, index) => (
              <motion.div 
                key={exp._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border border-[#d0d0d0] bg-white p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-6 border-b border-[#e0e0e0] pb-6">
                  <div>
                    <h3 className="text-3xl font-serif text-[#111] group-hover:text-[#960018] transition-colors">{exp.role}</h3>
                    <div className="text-lg text-[#555] font-light mt-1 uppercase font-mono tracking-widest text-xs">{exp.company}</div>
                  </div>
                  <div className="font-mono text-[10px] tracking-widest text-[#666] whitespace-nowrap bg-[#f3f3f3] px-3 py-1 self-start md:self-auto uppercase">
                    {exp.duration}
                  </div>
                </div>
                
                <p className="text-[#444] font-light leading-relaxed mb-8 text-lg">
                  {exp.description}
                </p>

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-[9px] font-mono tracking-widest text-[#555] uppercase border border-[#d0d0d0] px-3 py-1 bg-[#fdfcf7]">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}