import { motion } from 'framer-motion';

export default function Skills({ skills }) {
  if (!skills || skills.length === 0) return null;

  const categories = skills.reduce((acc, skill) => {
    const cat = skill.category || 'TECHNICAL';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="relative py-32 md:py-48 px-6 bg-[#050505] text-[#fcfcfc] overflow-hidden border-t border-[#333]">
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-7xl mx-auto px-0 sm:px-6 md:px-14 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between"
        >
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="w-8 h-px bg-[#960018]"></span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#960018]">05 / ARSENAL</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-serif tracking-tighter leading-none text-white">
              Technical<br/>
              <span className="italic text-[#888] font-light">Stack.</span>
            </h2>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
          {Object.entries(categories).map(([category, categorySkills], index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-8">
                <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#960018] font-bold">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-[#333]"></div>
              </div>
              
              <ul className="flex flex-col space-y-4">
                {categorySkills.map((skill, sIdx) => (
                  <motion.li 
                    key={skill._id} 
                    className="group relative cursor-none flex items-center overflow-hidden py-1"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <span className="text-[#333] font-mono text-[9px] mr-6 opacity-100 group-hover:text-[#960018] transition-colors duration-300">
                      0{sIdx + 1}
                    </span>
                    <span className="font-serif text-2xl md:text-3xl text-[#a0a0a0] group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#960018] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-100"></div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}