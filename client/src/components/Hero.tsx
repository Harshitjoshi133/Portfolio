import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Play, 
  RotateCcw, 
  Server, 
  Database, 
  Bot, 
  Clock, 
  Globe2, 
  Sparkles,
  Layers,
  Code2
} from "lucide-react";

interface HeroProps {
  onOpenBookingModal: () => void;
}

const Hero = ({ onOpenBookingModal }: HeroProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "Ready: System Architecture Visualizer initialized.",
    "Click 'Run Pipeline Simulation' to see async AI & API throughput."
  ]);

  const simSteps = [
    { title: "Incoming Request", icon: Globe2, desc: "SaaS User / Webhook Trigger", latency: "12ms" },
    { title: "FastAPI Routing", icon: Server, desc: "Async Python Middleware & Validation", latency: "8ms" },
    { title: "PgVector / RAG Context", icon: Database, desc: "Vector similarity search (0.94 score)", latency: "24ms" },
    { title: "Agentic AI Reasoning", icon: Bot, desc: "Gemini 2.5 / Flash API with Structured Output", latency: "180ms" },
    { title: "PostgreSQL & Redis Cache", icon: Layers, desc: "Transactional commit & pub/sub update", latency: "15ms" }
  ];

  const handleRunSim = () => {
    if (isRunningSim) return;
    setIsRunningSim(true);
    setActiveStep(0);
    setLogs(["[00:00.01] Initiating high-throughput async pipeline simulation..."]);

    const runNext = (step: number) => {
      if (step >= simSteps.length) {
        setIsRunningSim(false);
        setLogs(prev => [...prev, "[SUCCESS] Pipeline completed in 239ms total latency. 0 error rate."]);
        return;
      }
      setActiveStep(step);
      setLogs(prev => [...prev, `[STEP ${step + 1}] Executing ${simSteps[step].title}: ${simSteps[step].desc} (${simSteps[step].latency})`]);
      setTimeout(() => runNext(step + 1), 600);
    };

    runNext(0);
  };

  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#070a0f] bg-radial-gradient bg-grid-pattern overflow-hidden">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Founder Pitch */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Audience Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs sm:text-sm font-mono text-emerald-300 shadow-xl shadow-emerald-950/20"
            >
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>For Startup Founders & Agency Leaders</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="hidden sm:inline text-slate-300">Global Timezones & Async-First</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
                Designing <span className="text-gradient">scalable architectures</span> & agentic AI systems that <span className="underline decoration-emerald-500/40 underline-offset-8">automate workflows</span>
              </h1>
              <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
                I help startup founders and fast-moving agencies eliminate manual operational bottlenecks, modernize legacy backends with <strong className="text-slate-100 font-semibold">Python, FastAPI, Node.js & Docker</strong>, and integrate fail-safe AI agents that scale revenue without ballooning engineering overhead.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={onOpenBookingModal}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 transition-all duration-300"
              >
                <span>View Case Studies</span>
                <Code2 className="w-4 h-4 text-emerald-400" />
              </a>
            </motion.div>

            {/* ROI Badges / Trust Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80"
            >
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="font-mono font-bold text-xl sm:text-2xl text-emerald-400">65%</div>
                <div className="text-xs text-slate-400 font-medium">Avg. Infra Savings</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="font-mono font-bold text-xl sm:text-2xl text-cyan-400">99.95%</div>
                <div className="text-xs text-slate-400 font-medium">System Uptime</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="font-mono font-bold text-xl sm:text-2xl text-indigo-400">100%</div>
                <div className="text-xs text-slate-400 font-medium">Milestone Delivery</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="font-mono font-bold text-xl sm:text-2xl text-teal-400">&lt;24h</div>
                <div className="text-xs text-slate-400 font-medium">Async SLA Response</div>
              </div>
            </motion.div>

            {/* Timezone & Guarantee Pills */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>EST / PST / UTC Overlap</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Wise, Stripe & Wire Invoicing</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Mutual NDA Signed Prior</span>
              </span>
            </div>

          </div>

          {/* Right Column: Interactive AI Architecture Simulation Terminal */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-emerald-950/30 overflow-hidden"
            >
              {/* Window Bar */}
              <div className="px-4 py-3 bg-slate-950 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-slate-400 font-medium flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    architecture_simulation.py
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                  LIVE PIPELINE
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-5 space-y-5">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Interactive Pipeline Flow</span>
                  <span className="text-emerald-400 font-semibold">FastAPI + Gemini + Docker</span>
                </div>

                {/* Steps Visualizer */}
                <div className="space-y-2">
                  {simSteps.map((step, idx) => {
                    const Icon = step.icon;
                    const isActive = activeStep === idx;
                    const isPassed = activeStep > idx;

                    return (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                          isActive 
                            ? 'bg-emerald-950/40 border-emerald-500/60 shadow-lg shadow-emerald-500/10' 
                            : isPassed 
                              ? 'bg-slate-900/80 border-slate-700/60 text-slate-300' 
                              : 'bg-slate-950/40 border-slate-800/50 text-slate-500'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${
                            isActive 
                              ? 'bg-emerald-500 text-slate-950 font-bold' 
                              : isPassed 
                                ? 'bg-slate-800 text-emerald-400' 
                                : 'bg-slate-900 text-slate-600'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-200">{step.title}</div>
                            <div className="text-[11px] text-slate-400 font-mono">{step.desc}</div>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                            isActive 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse' 
                              : 'bg-slate-800/60 text-slate-400'
                          }`}>
                            {step.latency}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Log Terminal Window */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/90 font-mono text-[11px] text-slate-300 h-28 overflow-y-auto space-y-1">
                  {logs.map((log, i) => (
                    <div key={i} className={log.includes("SUCCESS") ? "text-emerald-400 font-semibold" : log.includes("Initiating") ? "text-cyan-400" : "text-slate-400"}>
                      {log}
                    </div>
                  ))}
                </div>

                {/* Control Action */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    onClick={handleRunSim}
                    disabled={isRunningSim}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold font-mono text-slate-950 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 transition-all shadow-md shadow-emerald-500/20"
                  >
                    {isRunningSim ? (
                      <>
                        <Zap className="w-3.5 h-3.5 animate-spin text-slate-950" />
                        <span>Running Simulation...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-slate-950" />
                        <span>Run Pipeline Simulation</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setActiveStep(0);
                      setLogs(["System reset. Click Run to simulate live pipeline."]);
                    }}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Reset Logs"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

