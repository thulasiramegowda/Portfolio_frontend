export default function Footer({ profile }) {
  if (!profile) return null;

  return (
    <footer className="bg-[#050505] text-[#a0a0a0] py-32 border-t border-[#333] relative overflow-hidden">
      
      {/* Background large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <h1 className="text-[15rem] md:text-[25rem] font-serif leading-none tracking-tighter whitespace-nowrap">THE JOURNEY</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 border-b border-[#333] pb-24 mb-12">
          
          <div className="md:col-span-5 flex flex-col">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-widest uppercase">
              {profile.name}
            </h2>
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-[#888] space-y-2 mb-12">
              <p>AI DEVELOPER</p>
              <p>CREATIVE TECHNOLOGIST</p>
              <p>ARTIST</p>
              <p className="pt-4 text-[#fcfcfc]">BENGALURU, INDIA</p>
            </div>
            
            <a href={`mailto:${profile.email}`} className="text-xl font-serif italic text-white hover:text-[#960018] transition-colors self-start border-b border-[#333] hover:border-[#960018] pb-1">
              {profile.email}
            </a>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12 font-mono text-[10px] tracking-[0.2em] uppercase">
            
            <div className="flex flex-col space-y-6">
              <span className="text-[#555] font-bold mb-2">PROFESSIONAL</span>
              {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>}
              {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>}
              {profile.devpost && <a href={profile.devpost} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Devpost</a>}
              {profile.leetcode && <a href={profile.leetcode} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LeetCode</a>}
            </div>

            <div className="flex flex-col space-y-6">
              <span className="text-[#555] font-bold mb-2">CREATIVE / TECH</span>
              {profile.huggingface && <a href={profile.huggingface} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Hugging Face</a>}
              {profile.credly && <a href={profile.credly} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Credly</a>}
              {profile.kaggle && <a href={profile.kaggle} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Kaggle</a>}
            </div>

            <div className="flex flex-col space-y-6">
              <span className="text-[#555] font-bold mb-2">SOCIAL</span>
              {profile.x && <a href={profile.x} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">X (Twitter)</a>}
              {profile.discord && <a href={profile.discord} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Discord</a>}
            </div>

          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#555] uppercase">
            &copy; {new Date().getFullYear()} {profile.name}
          </div>
          
          <div className="font-serif italic text-2xl md:text-3xl text-white">
            Still learning. <span className="text-[#888]">Still building.</span> <span className="text-[#555]">Still becoming.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
