export default function ImagePlaceholder({ text = "IMAGE PENDING", subtext = "SLOT" }) {
  return (
    <div className="w-full h-full bg-[#f3f3f3] border border-dashed border-[#d0d0d0] flex flex-col items-center justify-center relative overflow-hidden group">
      {/* Editorial Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>
      
      {/* Crosshair marks */}
      <div className="absolute top-4 left-4 w-4 h-px bg-[#a0a0a0]"></div>
      <div className="absolute top-4 left-4 w-px h-4 bg-[#a0a0a0]"></div>
      <div className="absolute bottom-4 right-4 w-4 h-px bg-[#a0a0a0]"></div>
      <div className="absolute bottom-4 right-4 w-px h-4 bg-[#a0a0a0]"></div>
      
      {/* Content */}
      <div className="z-10 text-center font-mono tracking-[0.2em] uppercase">
        <span className="block text-[#a0a0a0] text-xs mb-2 border border-[#d0d0d0] px-4 py-2 bg-[#fcfcfc]">{text}</span>
        <span className="block text-[#888] text-[9px]">{subtext}</span>
      </div>
    </div>
  );
}
