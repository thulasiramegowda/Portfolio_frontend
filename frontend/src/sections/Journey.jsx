import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Journey({ timeline }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (!timeline || timeline.length === 0) return null;

  return (
    <section id="journey" ref={containerRef} className="relative py-32 md:py-48 px-6 bg-[#f5f5f7] text-[#0f0f11] overflow-hidden">
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32 md:mb-40 flex flex-col md:flex-row justify-between items-end border-b border-[#0f0f11]/10 pb-12"
        >
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="w-8 h-px bg-[#ff4747]"></span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#ff4747] uppercase">02 / THE PATH</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter leading-none">
              My Journey.
            </h2>
          </div>
          <div className="mt-8 md:mt-0 font-serif italic text-2xl text-[#888888]">
            Learning, building, and evolving.
          </div>
        </motion.div>
        
        <div className="relative space-y-24 md:space-y-32">
          {/* Animated central/side line */}
          <div className="absolute left-0 md:left-auto md:right-[75%] top-0 bottom-0 w-px bg-[#0f0f11]/10 ml-4 md:ml-0 translate-x-1/2">
            <motion.div 
              className="w-full bg-[#ff4747] origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {timeline.map((event, index) => (
            <motion.div 
              key={event._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 items-start group relative z-10"
            >
              {/* Year & Category */}
              <div className="md:col-span-1 flex flex-row md:flex-col items-baseline md:items-end text-left md:text-right relative pl-12 md:pl-0 pr-0 md:pr-16">
                {/* Timeline node */}
                <div className="absolute left-4 md:left-auto md:right-0 top-3 md:top-4 md:translate-x-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-[#ff4747] bg-[#f5f5f7] group-hover:bg-[#ff4747] transition-colors duration-500 z-20"></div>
                
                <h3 className="text-3xl md:text-5xl font-sans font-medium tracking-tighter mb-2 group-hover:text-[#ff4747] transition-colors duration-500">{event.year}</h3>
                <span className="text-[#888888] text-[10px] font-mono tracking-[0.2em] uppercase">{event.category || 'MILESTONE'}</span>
              </div>
              
              {/* Content */}
              <div className="md:col-span-3 pl-12 md:pl-0 bg-white p-8 md:p-10 shadow-sm border border-[#0f0f11]/5 hover:shadow-xl transition-shadow duration-500">
                <h4 className="text-2xl md:text-4xl font-serif mb-6 leading-tight">{event.title}</h4>
                
                <div className="flex flex-col lg:flex-row gap-8">
                  <p className="text-[#555] text-lg font-light leading-relaxed flex-1">
                    {event.description}
                  </p>
                  
                  {event.imageUrl && (
                    <div className="w-full lg:w-1/3 shrink-0 overflow-hidden relative">
                      <div className="aspect-[4/3] relative">
                        <img 
                          src={event.imageUrl} 
                          alt={event.title} 
                          className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out" 
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}