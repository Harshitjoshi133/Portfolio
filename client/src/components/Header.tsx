import { useState, useEffect } from "react";
import { Sparkles, Calendar, Menu, X, ArrowUpRight, Terminal } from "lucide-react";

interface HeaderProps {
  onOpenBookingModal: () => void;
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
        ? 'bg-[#080b11]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl shadow-black/40' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center text-slate-950 font-mono font-bold text-lg shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-bold text-lg text-slate-100 tracking-tight flex items-center gap-1.5">
                Harshit Joshi
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                AI & Backend Specialist
              </span>
            </div>
          </a>
          
          {/* Status Badge (Desktop) */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs font-mono text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-200">Available for New Projects</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-semibold">Global Founders</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            <a href="#arsenal" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
              Technical Arsenal
            </a>
            <a href="#case-studies" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
              Case Studies
            </a>
            <a href="#process" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
              Process
            </a>
            <a href="#estimator" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
              Scope Estimator
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Action Call Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBookingModal}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Discovery Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0a0e17] border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Global Remote Sprints</span>
          </div>
          
          <div className="space-y-1">
            <a 
              href="#arsenal" 
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Technical Arsenal
            </a>
            <a 
              href="#case-studies" 
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Featured Case Studies
            </a>
            <a 
              href="#process" 
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Working With Me (Process)
            </a>
            <a 
              href="#estimator" 
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Scope & ROI Estimator
            </a>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Contact & Onboarding
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                closeMenu();
                onOpenBookingModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:opacity-90 transition-all shadow-lg shadow-emerald-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Discovery Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

