import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Code, ExternalLink } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function Projects({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-32 md:py-48 bg-[#fdfcf7] text-[#111] relative border-t border-[#e0e0e0] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32 md:mb-48"
        >
          <div className="flex items-center space-x-4 mb-6">
            <span className="w-8 h-px bg-[#960018]"></span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#960018] uppercase">03 / CASE STUDIES</span>
          </div>
          <h2 className="text-6xl md:text-[8rem] font-serif tracking-tighter leading-none mb-6">
            Selected Work
          </h2>
          <p className="text-xl md:text-2xl text-[#666] font-light max-w-2xl font-serif italic border-l-2 border-[#111]/20 pl-6">
            Practical solutions built through exploration of AI, software engineering, and modern tech stacks.
          </p>
        </motion.div>

        <div className="space-y-40 md:space-y-64">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const ref = useRef(null);
            const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
            const yOffset = useTransform(scrollYProgress, [0, 1], [50, -50]);

            return (
              <motion.div 
                key={project._id}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="group relative"
              >
                {/* Visual Number */}
                <div className={`absolute -top-24 ${isEven ? 'left-0' : 'right-0'} font-serif italic text-[10rem] md:text-[18rem] text-[#111]/5 z-0 font-bold leading-none pointer-events-none`}>
                  0{index + 1}
                </div>

                <div className={`flex flex-col gap-16 md:gap-24 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} relative z-10 items-center`}>
                  
                  {/* Image Block */}
                  <div className="w-full lg:w-[60%]">
                    <motion.a 
                      style={{ y: yOffset }}
                      href={project.liveUrl || project.githubUrl || '#'} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block w-full overflow-hidden bg-white border border-[#e0e0e0] p-3 shadow-xl group-hover:shadow-2xl transition-all duration-700 relative"
                    >
                      <div className="aspect-[16/10] relative overflow-hidden bg-[#fafafa]">
                        {project.imageUrl ? (
                          <img 
                            src={project.imageUrl} 
                            alt={project.name} 
                            className="w-full h-full object-cover filter grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-1000 ease-out" 
                            onError={(e) => {
                              const parent = e.target.parentElement;
                              import('react-dom/client').then(ReactDOM => {
                                const root = ReactDOM.createRoot(parent);
                                root.render(<ImagePlaceholder text={project.name} subtext="VISUAL COMING SOON" />);
                              });
                            }}
                          />
                        ) : (
                          <ImagePlaceholder text={project.name} subtext="VISUAL COMING SOON" />
                        )}
                      </div>
                    </motion.a>
                  </div>
                  
                  {/* Content Block */}
                  <div className="w-full lg:w-[40%] flex flex-col pt-8 md:pt-0">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-[#111] text-white px-3 py-1">
                        {project.role || 'DEVELOPER'}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#888]">
                        {project.category || 'PROJECT'}
                      </span>
                    </div>
                    
                    <h3 className="text-5xl md:text-7xl font-serif mb-8 leading-none tracking-tight text-[#111]">
                      {project.name}
                    </h3>

                    <div className="space-y-8 text-[#444] font-light leading-relaxed mb-10 text-lg">
                      <p>{project.shortDesc}</p>
                      
                      {project.myRole && (
                        <div className="border-l-2 border-[#960018]/50 pl-4 bg-[#f9f9f9] py-3 pr-4">
                          <strong className="block text-[9px] font-mono tracking-[0.2em] text-[#888] uppercase mb-1">My Role</strong>
                          <p className="text-base text-[#333] italic">{project.myRole}</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-12">
                      {project.technologies?.map(tech => (
                        <span key={tech} className="text-[10px] font-mono tracking-widest border border-[#d0d0d0] px-3 py-1.5 text-[#333] uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8 mt-auto font-mono text-xs tracking-widest uppercase font-bold">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-2 hover:text-[#960018] transition-colors pb-1 border-b border-[#111] hover:border-[#960018]">
                          LIVE DEMO <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-2 hover:text-[#960018] transition-colors pb-1 border-b border-[#111] hover:border-[#960018]">
                          GITHUB <Code size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}