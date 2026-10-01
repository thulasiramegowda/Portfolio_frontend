import { motion } from 'framer-motion';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function BeyondCode({ art }) {
  if (!art || art.length === 0) return null;

  return (
    <section id="art" className="py-32 md:py-48 bg-[#050505] text-[#fcfcfc] relative overflow-hidden border-t border-[#333]">
      {/* Texture background */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-0"></div>
      
      {/* Decorative generated visual */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none z-0 overflow-hidden">
        <img src="/images/art/art-decorative.png" alt="Decorative" className="w-full h-full object-cover mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 md:mb-40"
        >
          <div className="flex items-center space-x-4 mb-6">
            <span className="w-8 h-px bg-[#facc15]"></span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#facc15] uppercase">BEYOND CODE</span>
          </div>
          <h2 className="text-6xl md:text-[8rem] font-serif tracking-tighter leading-none mb-8 text-white">
            Art / Drawing
          </h2>
          <p className="text-2xl text-[#a0a0a0] font-light max-w-2xl font-serif italic border-l-2 border-[#333] pl-6">
            "Somewhere between code and canvas."
          </p>
        </motion.div>

        {/* Editorial Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {art.map((item, index) => {
            // Masonry-like sizing logic
            let colSpan = "md:col-span-6";
            let height = "h-[400px] md:h-[600px]";
            let mt = "mt-0";
            
            if (item.size === "large") {
              colSpan = "md:col-span-7";
              height = "h-[500px] md:h-[800px]";
            } else if (item.size === "medium") {
              colSpan = "md:col-span-5";
              height = "h-[400px] md:h-[500px]";
              mt = index % 2 !== 0 ? "md:mt-32" : "mt-0";
            }

            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`${colSpan} ${mt} relative group flex flex-col`}
              >
                {/* Image Container */}
                <div className={`w-full ${height} relative overflow-hidden bg-[#111] p-2 md:p-4 border border-[#222] shadow-2xl`}>
                  
                  {/* Floating Number Label */}
                  <div className="absolute top-8 -left-4 z-20 bg-[#facc15] text-[#050505] px-2 py-1 font-mono text-[10px] font-bold shadow-xl rotate-[-90deg] origin-left border border-[#050505]">
                    0{index + 1} / {item.category}
                  </div>

                  <div className="w-full h-full relative overflow-hidden bg-black">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover filter grayscale-[0.3] contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out" 
                        onError={(e) => {
                          const parent = e.target.parentElement;
                          import('react-dom/client').then(ReactDOM => {
                            const root = ReactDOM.createRoot(parent);
                            root.render(<ImagePlaceholder text="ARTWORK" subtext="CANVAS SLOT" />);
                          });
                        }}
                      />
                    ) : (
                      <ImagePlaceholder text="ARTWORK" subtext="CANVAS SLOT" />
                    )}
                  </div>
                </div>
                
                {/* Caption underneath */}
                <div className="mt-6 flex flex-col px-4">
                  <h3 className="text-xl md:text-2xl font-serif text-[#fcfcfc] italic mb-2">
                    {item.title}
                  </h3>
                  <div className="font-mono text-[9px] tracking-widest text-[#555] uppercase">
                    {item.category}
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
