import { motion } from 'framer-motion';

export default function Hero({ profile }) {
  if (!profile) return null;

  return (
    <section id="hero" className="relative min-h-[90vh] bg-[#050505] overflow-hidden flex items-center pt-24 pb-12">
      
      {/* Dark texture gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111] via-[#050505] to-[#050505] z-0"></div>
      
      {/* Minimal grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Text Column */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 pt-8 lg:pt-0">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#555] flex items-center space-x-4"
          >
            <span>THE JOURNEY</span>
            <span className="w-12 h-px bg-[#333]"></span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-serif font-medium tracking-tighter leading-[0.9] text-white mb-6 uppercase"
          >
            {profile.name}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-10 font-mono text-[10px] tracking-widest uppercase text-[#a0a0a0]"
          >
            <span className="border border-[#333] px-3 py-1.5 cursor-default hover:text-white hover:border-[#555] transition-colors">AI DEVELOPER</span>
            <span className="border border-[#333] px-3 py-1.5 cursor-default hover:text-white hover:border-[#555] transition-colors">CREATIVE TECHNOLOGIST</span>
            <span className="border border-[#333] px-3 py-1.5 cursor-default hover:text-white hover:border-[#555] transition-colors">ARTIST</span>
            <span className="border border-[#333] px-3 py-1.5 cursor-default hover:text-white hover:border-[#555] transition-colors">DSA IN C</span>
            <span className="px-3 py-1.5 cursor-default flex items-center gap-2">
              BENGALURU, INDIA 
              <span className="w-1.5 h-1.5 bg-[#ff4747] rounded-full animate-pulse"></span>
            </span>
          </motion.div>

          {/* User specifically asked to make this sentence bigger like before */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#a0a0a0] max-w-3xl leading-snug italic"
          >
            {profile.tagline}
          </motion.p>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-5 relative flex items-end justify-center order-1 lg:order-2 lg:h-[70vh]">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-full h-full min-h-[400px] max-w-sm lg:max-w-md ml-auto"
          >
            {/* The offset border frame */}
            <div className="absolute inset-0 border border-[#333] translate-x-4 translate-y-4"></div>
            
            <div className="absolute inset-0 overflow-hidden bg-[#111] z-10 border border-[#222]">
              {profile.photoUrl ? (
                <img 
                  src={profile.photoUrl} 
                  alt={profile.name} 
                  className="w-full h-full object-cover filter grayscale contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center opacity-30 font-mono text-[10px] tracking-widest">
                  [ PROFILE VISUAL ]
                </div>
              )}
            </div>

            {/* Static Annotations on the image */}
            <div className="absolute top-4 -right-4 z-20 bg-[#fdfcf7] text-[#050505] px-3 py-1 font-mono text-[10px] font-bold shadow-xl border border-[#050505]">
              BUILDING
            </div>

            <div className="absolute bottom-4 -left-4 z-20 bg-[#050505] text-[#a0a0a0] px-3 py-1 font-mono text-[10px] font-bold shadow-xl border border-[#333]">
              CSIT / REVA UNIVERSITY
            </div>
          </motion.div>
          
        </div>

      </div>
      
    </section>
  );
}