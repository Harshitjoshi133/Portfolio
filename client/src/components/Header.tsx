import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Terminal, Linkedin } from "lucide-react";

interface HeaderProps {
  onOpenBookingModal?: () => void;
}

const Header = ({ onOpenBookingModal }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#080b11]/95 backdrop-blur-md border-b border-slate-800/80 py-2.5 shadow-2xl shadow-black/40' 
        : 'bg-[#070a0f]/80 backdrop-blur-sm py-3 sm:py-3.5 border-b border-slate-900/60'
    }`}>
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center text-slate-950 font-mono font-bold text-base shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-4 h-4 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-bold text-base sm:text-lg text-slate-100 tracking-tight flex items-center gap-1.5 leading-tight">
                Harshit Joshi
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold leading-tight">
                AI & Backend Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#arsenal" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
              Technical Arsenal
            </a>
            <a href="#case-studies" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
              Case Studies
            </a>
            <a href="#process" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
              Process
            </a>
            <a href="#estimator" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
              Scope Estimator
            </a>
            <a href="#contact" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Action LinkedIn Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://linkedin.com/in/harshitjoshi20"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all duration-300 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-[1.02] active:scale-[0.98] font-mono"
            >
              <Linkedin className="w-3.5 h-3.5 fill-current" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0a0e17] border-b border-slate-800 px-4 pt-3 pb-5 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="space-y-1">
            <a 
              href="#arsenal" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Technical Arsenal
            </a>
            <a 
              href="#case-studies" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Featured Case Studies
            </a>
            <a 
              href="#process" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Working With Me (Process)
            </a>
            <a 
              href="#estimator" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Scope & ROI Estimator
            </a>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Contact & Onboarding
            </a>
          </div>

          <div className="pt-2">
            <a
              href="https://linkedin.com/in/harshitjoshi20"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold font-mono text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:opacity-90 transition-all shadow-md shadow-emerald-500/20"
            >
              <Linkedin className="w-4 h-4 fill-current" />
              <span>Connect on LinkedIn (@harshitjoshi20)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

