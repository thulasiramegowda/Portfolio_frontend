import { motion } from 'framer-motion';

export default function Education({ education }) {
  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="py-32 bg-[#fafafa] text-[#0f0f11] border-t border-[#0f0f11]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20">
        
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="sticky top-32"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="w-8 h-px bg-[#ff4747]"></span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#ff4747] uppercase">ACADEMICS</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif tracking-tighter leading-none mb-6">
                Education
              </h2>
            </motion.div>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-12">
            {education.map((edu, index) => (
              <motion.div 
                key={edu._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative border-b border-[#e0e0e0] pb-12 last:border-0"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-4">
                  <h3 className="text-3xl font-serif text-[#0f0f11] group-hover:text-[#ff4747] transition-colors">{edu.degree}</h3>
                  <div className="font-mono text-xs tracking-widest text-[#888] whitespace-nowrap">
                    {edu.period}
                  </div>
                </div>
                
                <div className="text-lg text-[#555] font-medium mb-6 uppercase tracking-widest text-xs font-mono">
                  {edu.institution}
                </div>
                
                <div className="text-[#666] font-light leading-relaxed whitespace-pre-line">
                  {edu.details}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}