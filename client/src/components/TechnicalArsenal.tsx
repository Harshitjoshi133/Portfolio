import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Server, 
  Database, 
  Box, 
  Cpu, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Workflow, 
  Globe, 
  CheckCircle2, 
  ArrowUpRight,
  Code2,
  Lock,
  Sparkles
} from "lucide-react";

interface TechItem {
  id: string;
  name: string;
  category: "backend" | "ai" | "database" | "frontend" | "infra";
  badge: string;
  iconName: string;
  description: string;
  whyFoundersCare: string;
  keyMetric: string;
  accentColor: string;
}

const techStack: TechItem[] = [
  {
    id: "python",
    name: "Python 3.12",
    category: "backend",
    badge: "Core Backend",
    iconName: "python",
    description: "Type-hinted, high-performance async backend services and custom AI pipelines.",
    whyFoundersCare: "Enables rapid iteration, clean architecture, and seamless LLM model integration without technical debt.",
    keyMetric: "Sub-10ms logic execution",
    accentColor: "from-amber-500/20 to-yellow-500/10"
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "backend",
    badge: "Async Microservices",
    iconName: "fastapi",
    description: "Modern, high-throughput Python web framework built for async concurrency and OpenAPI documentation.",
    whyFoundersCare: "Handles 10,000+ concurrent requests effortlessly while generating self-documenting API specs for your team.",
    keyMetric: "4x throughput vs Flask",
    accentColor: "from-emerald-500/20 to-teal-500/10"
  },
  {
    id: "nodejs",
    name: "Node.js & TypeScript",
    category: "backend",
    badge: "Event-Driven APIs",
    iconName: "node",
    description: "Strictly typed runtime for scalable microservices, real-time WebSockets, and background orchestration.",
    whyFoundersCare: "Zero runtime type errors, shared data schemas with frontend, and instant real-time user notification queues.",
    keyMetric: "99.99% Type-safe reliability",
    accentColor: "from-green-500/20 to-emerald-500/10"
  },
  {
    id: "postgresql",
    name: "PostgreSQL & PgVector",
    category: "database",
    badge: "Relational & Vector DB",
    iconName: "postgres",
    description: "Enterprise ACID compliance combined with high-dimensional vector similarity indexing.",
    whyFoundersCare: "Stores core business financial records safely while powering semantic search for AI knowledge retrieval.",
    keyMetric: "Sub-20ms vector query latency",
    accentColor: "from-blue-500/20 to-cyan-500/10"
  },
  {
    id: "docker",
    name: "Docker & Containerization",
    category: "infra",
    badge: "Deployment & CI/CD",
    iconName: "docker",
    description: "Isolated container environments ensuring identical staging, testing, and production builds.",
    whyFoundersCare: "Completely eliminates 'works on my machine' delays and enables 1-click deployments to Cloud Run / AWS.",
    keyMetric: "100% reproducible builds",
    accentColor: "from-cyan-500/20 to-blue-500/10"
  },
  {
    id: "nextjs",
    name: "Next.js & React 18",
    category: "frontend",
    badge: "Full-Stack Web App",
    iconName: "next",
    description: "Server-side rendering, static site generation, and optimized client dashboard state management.",
    whyFoundersCare: "Delivers instant page loads, top Google Lighthouse SEO scores, and crisp, responsive SaaS founder dashboards.",
    keyMetric: "Lighthouse 98+ Performance",
    accentColor: "from-slate-500/20 to-slate-400/10"
  },
  {
    id: "ai-agents",
    name: "Gemini & OpenAI API",
    category: "ai",
    badge: "Agentic Intelligence",
    iconName: "ai",
    description: "Function-calling LLMs, structured JSON validation, and RAG knowledge retrieval systems.",
    whyFoundersCare: "Automates complex human manual workflows with zero hallucination via strict JSON schema enforcement.",
    keyMetric: "99.8% structured JSON accuracy",
    accentColor: "from-indigo-500/20 to-purple-500/10"
  },
  {
    id: "redis-celery",
    name: "Redis & Celery Queue",
    category: "infra",
    badge: "Caching & Async Jobs",
    iconName: "redis",
    description: "In-memory key-value caching and distributed asynchronous task queues for background job processing.",
    whyFoundersCare: "Prevents UI freezing when processing heavy PDF reports, bulk AI analysis, or email notification blasts.",
    keyMetric: "Instant sub-2ms cache hits",
    accentColor: "from-red-500/20 to-rose-500/10"
  }
];

const TechnicalArsenal = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredTech = filter === "all" 
    ? techStack 
    : techStack.filter(item => item.category === filter);

  return (
    <section id="arsenal" className="py-24 bg-[#080c14] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-medium">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERING FOUNDATION</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Technical Arsenal & <span className="text-gradient">Infrastructure Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every technology choice is calibrated for maximum uptime, developer velocity, and measurable business ROI. No experimental hype—just rock-solid, battle-tested software architecture.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Capabilities" },
            { id: "backend", label: "Backend & Microservices" },
            { id: "ai", label: "Agentic AI & RAG" },
            { id: "database", label: "Databases & Vectors" },
            { id: "infra", label: "Container & DevOps" },
            { id: "frontend", label: "Full-Stack & Dashboards" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 font-mono ${
                filter === tab.id
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 font-bold'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredTech.map((tech) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={tech.id}
                className={`p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-950/20 bg-gradient-to-b ${tech.accentColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-950 text-emerald-400 border border-emerald-500/20 font-semibold tracking-wider uppercase">
                      {tech.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-medium">
                      {tech.keyMetric}
                    </span>
                  </div>

                  <h3 className="font-montserrat font-bold text-xl text-white mb-2 flex items-center justify-between group-hover:text-emerald-300 transition-colors">
                    {tech.name}
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                  <div className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    Why Founders Care:
                  </div>
                  <div className="text-xs text-slate-300 font-normal leading-normal">
                    {tech.whyFoundersCare}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Marquee Ticker */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Full-Stack System Reliability Guarantee</div>
              <div className="text-xs text-slate-400">Strict unit testing, automated CI/CD checks, and zero-downtime container rollouts.</div>
            </div>
          </div>

          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
          >
            <span>See how these technologies power live client case studies</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default TechnicalArsenal;
