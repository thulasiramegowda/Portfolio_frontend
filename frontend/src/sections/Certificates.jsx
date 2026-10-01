import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function Certificates({ certificates }) {
  if (!certificates || certificates.length === 0) return null;

  return (
    <section id="certificates" className="py-32 md:py-48 bg-[#fdfbf7] text-[#111] overflow-hidden border-t border-[#e0e0e0]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center pb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-8 h-px bg-[#960018]"></span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#960018] uppercase">CERTIFICATIONS</span>
            <span className="w-8 h-px bg-[#960018]"></span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter leading-none mb-6">
            Verified Learning
          </h2>
          <p className="font-serif italic text-xl text-[#888]">Continuous improvement & official credentials.</p>
        </motion.div>

        {/* Small Grid Row Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {certificates.map((cert, index) => (
            <motion.div 
              key={cert._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col relative"
            >
              {/* Certificate Frame */}
              <div className="relative z-10 p-2 bg-white border border-[#d0d0d0] shadow-md group-hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-[#fafafa]">
                  {cert.imageUrl && !cert.imageUrl.includes('null') ? (
                    <img 
                      src={cert.imageUrl} 
                      alt={cert.title} 
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-500" 
                      onError={(e) => {
                        const parent = e.target.parentElement;
                        import('react-dom/client').then(ReactDOM => {
                          const root = ReactDOM.createRoot(parent);
                          root.render(<ImagePlaceholder text="CERTIFICATE" subtext="VISUAL COMING SOON" />);
                        });
                      }}
                    />
                  ) : (
                    <ImagePlaceholder text="CERTIFICATE" subtext="VISUAL COMING SOON" />
                  )}
                </div>
              </div>
              
              {/* Text Info */}
              <div className="mt-6 flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-serif leading-tight font-medium text-[#111]">{cert.title}</h3>
                <div className="font-mono text-[10px] tracking-widest text-[#666] uppercase leading-relaxed">
                  {cert.issuer} <br/><span className="text-[#960018]">{cert.date}</span>
                </div>
                
                {cert.credentialUrl && (
                  <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase text-[#111] hover:text-[#960018] border-b border-[#111] hover:border-[#960018] pb-1 transition-colors self-start">
                    VIEW CREDENTIAL <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credly CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-[#111]/10 flex justify-center"
        >
          <a href="https://www.credly.com/users/thulasi-g-t.8bb7928f" target="_blank" rel="noreferrer" className="group flex items-center gap-4 bg-[#111] hover:bg-[#960018] text-white px-8 py-5 transition-colors duration-300">
            <span className="font-mono text-[11px] font-bold tracking-widest uppercase">VIEW MY CREDLY BADGES</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}