import { motion } from "framer-motion";
import { 
  Clock, 
  CheckCircle2, 
  Video, 
  ShieldCheck, 
  CreditCard, 
  FileText, 
  GitBranch, 
  Slack, 
  Sparkles,
  ArrowRight,
  Globe2,
  Lock,
  Workflow
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Architecture Blueprint",
    timeframe: "Days 1 - 3",
    description: "We align on your business goals via a 30-min call or async intake brief. I deliver a fixed-scope architecture proposal, tech stack recommendation, and guaranteed milestone breakdown.",
    deliverables: ["System Architecture Diagram", "Fixed-Scope Milestone Proposal", "Mutual NDA Execution"]
  },
  {
    step: "02",
    title: "Milestone Sprints & Async Updates",
    timeframe: "Weeks 1 - 3",
    description: "I build in focused 1-week sprints. Every Friday, you receive a detailed 3-minute Loom video demo, staging link deployment, and progress update in your dedicated Slack or Notion.",
    deliverables: ["Weekly Loom Video Demos", "Live Staging Environment", "Clean GitHub PRs & Commits"]
  },
  {
    step: "03",
    title: "Fail-Safe AI & Performance Audit",
    timeframe: "Sprint Finalization",
    description: "Rigorous load testing under simulated spikes. We implement exponential retry policies for LLM rate limits, database index optimizations, and unit test suites.",
    deliverables: ["Sub-50ms Endpoint Latency", "LLM Fallback & Rate-Limit Guardrails", "Security & Load Test Report"]
  },
  {
    step: "04",
    title: "Frictionless Handover & 30-Day Warranty",
    timeframe: "Launch & Post-Launch",
    description: "100% IP & repository transfer to your cloud account (AWS, GCP, Vercel). Includes automated Swagger API docs, video onboarding for your team, and 30 days of bug-fix warranty.",
    deliverables: ["Full Repository & IP Transfer", "Interactive OpenAPI / Postman Specs", "30-Day Post-Launch Warranty"]
  }
];

const WorkingWithMe = () => {
  return (
    <section id="process" className="py-24 bg-[#080c14] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-medium">
            <Workflow className="w-3.5 h-3.5" />
            <span>HOW WE COLLABORATE</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Working With Me: <span className="text-gradient">The Founder Framework</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Built specifically for busy startup founders and agency owners who need predictable, high-speed engineering execution without babysitting or endless status calls.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-white">Asynchronous Reliability</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              No daily 9 AM standups required. Stay fully informed via concise Loom video demos, clear written documentation, and transparent Notion task boards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-white">Milestone-Based Delivery</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Clear scope, fixed deliverables, and guaranteed timelines. Payments are tied strictly to verified sprint milestones—zero hidden billing surprises.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-white">Frictionless Timezone Overlap</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Strategic scheduling with dedicated daily response windows across major global time zones for fast, async-friendly iteration.
            </p>
          </motion.div>
        </div>

        {/* Process Steps Timeline */}
        <div className="space-y-6">
          <div className="text-center text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-6">
            4-Step Step-by-step Engagement Flow
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.map((s, idx) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-extrabold text-3xl text-emerald-400/80 group-hover:text-emerald-300 transition-colors">
                    {s.step}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                    {s.timeframe}
                  </span>
                </div>

                <h4 className="font-montserrat font-bold text-2xl text-white">
                  {s.title}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {s.description}
                </p>

                <div className="pt-4 border-t border-slate-900 space-y-2">
                  <div className="text-xs font-mono text-slate-400 font-semibold uppercase">Key Deliverables:</div>
                  <div className="space-y-1.5">
                    {s.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* International Payments & NDA Notice Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase">
              <Lock className="w-4 h-4" />
              <span>Seamless International Legal & Payment Setup</span>
            </div>
            <h4 className="font-montserrat font-bold text-xl text-white">
              Hassle-Free Global Invoicing & Remote Contracts
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Standard mutual NDAs executed before access. Direct invoicing via <strong className="text-slate-100">Wise, Stripe, ACH, or Wire Transfer</strong> in USD ($), EUR (€), or GBP (£).
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20 font-mono whitespace-nowrap"
          >
            <span>Start Onboarding Brief</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default WorkingWithMe;
