import { motion } from 'framer-motion';

export default function About({ profile }) {
  if (!profile) return null;

  return (
    <section id="about" className="py-32 md:py-48 bg-[#fdfcf7] text-[#111] relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <span className="w-8 h-px bg-[#960018]"></span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#960018] uppercase">01 / WHO I AM</span>
              </div>
              <h2 className="text-6xl md:text-7xl lg:text-[6rem] font-serif tracking-tighter leading-[0.9] mb-8">
                Curious.<br />
                Driven.<br />
                <span className="italic text-[#888] font-light">Builder.</span>
              </h2>
            </motion.div>
            
            {/* Hand-drawn underline */}
            <svg className="absolute top-[80%] left-0 w-48 h-8 text-[#facc15] opacity-60 z-0 hidden lg:block" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15 Q 100 0 195 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="font-serif text-xl md:text-2xl text-[#333] font-light leading-relaxed space-y-8"
            >
              <p>
                I am a Computer Science & Information Technology student who learns best by building.
              </p>
              <p>
                My interest lies at the intersection of <strong className="font-medium text-[#111]">Artificial Intelligence</strong>, <strong className="font-medium text-[#111]">Software Development</strong>, and <strong className="font-medium text-[#111]">Creative Design</strong>. I enjoy experimenting with unfamiliar technologies and turning concepts into practical, working solutions.
              </p>
              <p>
                Ultimately, I'm working towards becoming an AI Developer and entrepreneur—exploring ideas that can create meaningful impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 pt-12 border-t border-[#111]/10 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div>
                <span className="block text-[10px] font-mono tracking-[0.2em] text-[#888] uppercase mb-3">Focus</span>
                <span className="font-sans font-bold text-sm tracking-widest uppercase">AI & Software</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono tracking-[0.2em] text-[#888] uppercase mb-3">Status</span>
                <span className="font-sans font-bold text-sm tracking-widest uppercase">Student</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono tracking-[0.2em] text-[#888] uppercase mb-3">Drive</span>
                <span className="font-sans font-bold text-sm tracking-widest uppercase">Entrepreneur</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono tracking-[0.2em] text-[#888] uppercase mb-3">Vibe</span>
                <span className="font-sans font-bold text-sm tracking-widest uppercase">Creative</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}