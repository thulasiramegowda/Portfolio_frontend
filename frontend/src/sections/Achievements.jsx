import { motion } from 'framer-motion';

export default function Achievements({ achievements }) {
  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-32 md:py-48 bg-[#050505] text-white border-t border-[#333]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[#333] pb-12"
        >
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <span className="w-8 h-px bg-[#facc15]"></span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#facc15] uppercase">06 / MILESTONES</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter leading-none">
              Achievements
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach, index) => (
            <motion.div 
              key={ach._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111] p-10 border border-[#333] hover:border-[#facc15]/50 transition-colors group relative overflow-hidden"
            >
              {/* Decorative number */}
              <div className="absolute top-4 right-6 font-serif italic text-6xl text-[#222] z-0 group-hover:text-[#facc15]/10 transition-colors">
                0{index + 1}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif mb-4 text-[#fcfcfc]">{ach.title}</h3>
                {ach.project && (
                  <div className="text-[9px] font-mono tracking-widest text-[#facc15] border border-[#facc15]/30 px-2 py-1 inline-block uppercase mb-6 bg-[#facc15]/5">
                    {ach.project}
                  </div>
                )}
                <p className="text-[#a0a0a0] font-light leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}