import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function Blog({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section id="blog" className="py-32 md:py-48 bg-[#fdfcf7] text-[#111] relative border-t border-[#e0e0e0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 md:mb-32 flex flex-col items-center text-center"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="w-8 h-px bg-[#960018]"></span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#960018] uppercase">JOURNAL</span>
            <span className="w-8 h-px bg-[#960018]"></span>
          </div>
          <h2 className="text-6xl md:text-[6rem] font-serif tracking-tighter leading-none mb-6">
            Blog & Notes
          </h2>
          <p className="text-xl text-[#666] font-light max-w-2xl font-serif italic">
            Documenting lessons, hacks, ideas, and reflections along the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {posts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-serif text-4xl text-[#111]/20 group-hover:text-[#960018] transition-colors duration-500 italic font-bold">
                  0{index + 1}
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#888] uppercase">
                  {post.date} / {post.category}
                </span>
              </div>
              
              <div className="w-full aspect-[4/3] mb-8 overflow-hidden bg-white border border-[#d0d0d0] p-2 relative">
                <div className="w-full h-full relative">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                    />
                  ) : (
                    <ImagePlaceholder text="BLOG VISUAL" subtext="DRAFT PENDING" />
                  )}
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif mb-4 leading-tight group-hover:text-[#960018] transition-colors">
                {post.title}
              </h3>
              
              <p className="text-[#555] font-light leading-relaxed mb-8 flex-1">
                {post.shortDesc}
              </p>
              
              <div className="mt-auto flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase font-bold text-[#111] group-hover:text-[#960018] transition-colors">
                READ NOTE <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
