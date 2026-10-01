import { motion } from 'framer-motion';

export default function Contact({ profile }) {
  if (!profile) return null;

  return (
    <section id="contact" className="py-32 md:py-48 bg-[#0a0a0c] text-white relative">
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          <div className="w-px h-16 bg-[#ff4747] mb-8"></div>
          
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-serif tracking-tighter leading-none mb-12">
            Let's build<br />
            <span className="italic text-[#888888]">something.</span>
          </h2>
          
          <p className="text-[#a0a0a0] max-w-lg mb-16 font-light">
            I'm currently looking for internships and open to exciting projects. Feel free to reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-6 font-mono text-[10px] tracking-widest uppercase">
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="bg-white text-[#0a0a0c] px-8 py-4 hover:scale-105 transition-transform duration-300 font-bold">
                EMAIL ME
              </a>
            )}
            
            <div className="flex items-center gap-4 border border-[#333] px-8 py-4">
              {profile.githubUrl && (
                <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-[#ff4747] transition-colors">
                  GITHUB
                </a>
              )}
              {profile.githubUrl && profile.linkedinUrl && <span className="text-[#333]">/</span>}
              {profile.linkedinUrl && (
                <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-[#ff4747] transition-colors">
                  LINKEDIN
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}