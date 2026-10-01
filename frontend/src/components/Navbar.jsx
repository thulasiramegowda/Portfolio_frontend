import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ profile }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'journey', 'projects', 'art', 'blog', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'JOURNEY', href: '#journey', id: 'journey' },
    { name: 'WORK', href: '#projects', id: 'projects' },
    { name: 'ART', href: '#art', id: 'art' },
    { name: 'BLOG', href: '#blog', id: 'blog' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 font-mono text-xs tracking-widest ${
        scrolled ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center text-white">
        <a href="#hero" onClick={(e) => handleScrollTo(e, '#hero')} className="text-sm font-sans font-bold tracking-[0.3em] hover:text-[#ff4747] transition-colors relative z-50">
          THULASI
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScrollTo(e, link.href)} 
              className={`relative py-2 flex items-center transition-colors hover:text-white ${activeSection === link.id ? 'text-white' : 'text-[#888]'}`}
            >
              {activeSection === link.id && (
                <motion.span 
                  layoutId="activeDot"
                  className="absolute -left-3 w-1.5 h-1.5 rounded-full bg-[#ff4747]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {link.name}
            </a>
          ))}
          {profile?.resumeUrl && (
            <a 
              href={profile.resumeUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-2 text-[#a0a0a0] border border-[#333] hover:text-white hover:border-[#ff4747] px-4 py-2 transition-all group"
            >
              <FileText className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>RESUME</span>
            </a>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white relative z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#050505] z-40 flex flex-col p-6 pt-32"
          >
            <nav className="flex flex-col space-y-6 font-serif text-4xl font-light tracking-wide h-full">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleScrollTo(e, link.href)} 
                  className={`transition-colors flex items-center ${activeSection === link.id ? 'text-white pl-4 border-l-2 border-[#ff4747]' : 'text-[#888] hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-auto pb-12">
                {profile?.resumeUrl && (
                  <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-[#ff4747] font-mono tracking-widest text-sm uppercase">
                    <FileText className="w-5 h-5" />
                    <span>DOWNLOAD RESUME</span>
                  </a>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
