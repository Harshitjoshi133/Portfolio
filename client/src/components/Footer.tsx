import { Mail, Github, Globe2, ShieldCheck, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#05070a] border-t border-slate-900 text-slate-400 py-16">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-400 text-sm">
                HJ
              </div>
              <span className="font-montserrat font-extrabold text-xl text-white tracking-tight">
                Harshit Joshi
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Freelance AI Integration & Scalable Backend Specialist. Designing resilient microservices and agentic LLM workflows for North American and European startups.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-emerald-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Asynchronous Reliability</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Globe2 className="w-4 h-4 text-cyan-400" />
                <span>Wise & Stripe Ready</span>
              </span>
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-montserrat font-bold text-sm text-white uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors">Overview</a></li>
              <li><a href="#technical-arsenal" className="hover:text-emerald-400 transition-colors">Technical Arsenal</a></li>
              <li><a href="#case-studies" className="hover:text-emerald-400 transition-colors">Featured Case Studies</a></li>
              <li><a href="#process" className="hover:text-emerald-400 transition-colors">Founder Process</a></li>
              <li><a href="#estimator" className="hover:text-emerald-400 transition-colors">Scope Estimator</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact & Onboarding</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-montserrat font-bold text-sm text-white uppercase tracking-wider font-mono">
              Direct Inquiries
            </h4>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:Harshithardyjoshi@gmail.com" 
                className="inline-flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-emerald-500/50 hover:text-emerald-400 transition-all font-mono text-xs w-full"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">Harshithardyjoshi@gmail.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-500" />
              </a>

              <a 
                href="https://linkedin.com/in/harshitjoshi20" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-emerald-500/50 hover:text-emerald-400 transition-all font-mono text-xs w-full"
              >
                <span className="w-4 h-4 rounded bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-[10px]">in</span>
                <span>linkedin.com/in/harshitjoshi20</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-500" />
              </a>

              <a 
                href="https://github.com/Harshitjoshi133" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-emerald-500/50 hover:text-emerald-400 transition-all font-mono text-xs w-full"
              >
                <Github className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>github.com/Harshitjoshi133</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-500" />
              </a>
            </div>
          </div>

        </div>
        
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>&copy; {new Date().getFullYear()} Harshit Joshi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>PST / EST / UTC Availability</span>
            <span>•</span>
            <span>Mutual NDA Protected</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

