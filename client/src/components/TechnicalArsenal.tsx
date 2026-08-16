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
  category: "backend" | "ai" | "database" | "frontend" | "infra" | "cloud";
  badge: string;
  iconName: string;
  description: string;
  whyFoundersCare: string;
  keyMetric: string;
  accentColor: string;
}

const techStack: TechItem[] = [
  {
    id: "python-fastapi",
    name: "Python & FastAPI",
    category: "backend",
    badge: "Async Services",
    iconName: "python",
    description: "Async REST APIs, background processing, Pydantic data validation, and high-performance backend services.",
    whyFoundersCare: "Enables rapid feature iteration, clean modular architecture, and seamless integration with production AI pipelines.",
    keyMetric: "High-concurrency async",
    accentColor: "from-amber-500/20 to-emerald-500/10"
  },
  {
    id: "nodejs",
    name: "Node.js & TypeScript",
    category: "backend",
    badge: "Type-Safe APIs",
    iconName: "node",
    description: "End-to-end type safety, event-driven microservices, real-time WebSockets, and scalable API backends.",
    whyFoundersCare: "Shared schemas across client and server boundaries eliminate interface mismatches and speed up API delivery.",
    keyMetric: "Strict end-to-end typing",
    accentColor: "from-green-500/20 to-emerald-500/10"
  },
  {
    id: "postgresql",
    name: "PostgreSQL & PgVector",
    category: "database",
    badge: "Relational & Vector DB",
    iconName: "postgres",
    description: "ACID-compliant relational data modeling combined with high-dimensional vector similarity indexing and Cloud SQL.",
    whyFoundersCare: "Guarantees core business data integrity while powering semantic search and knowledge retrieval for AI workflows.",
    keyMetric: "ACID + Vector indexing",
    accentColor: "from-blue-500/20 to-cyan-500/10"
  },
  {
    id: "llm-orchestration",
    name: "LLM Orchestration & RAG",
    category: "ai",
    badge: "AI Engineering",
    iconName: "workflow",
    description: "Retrieval pipelines, vector search, tool calling, model routing, and agentic AI workflow orchestration.",
    whyFoundersCare: "Connects LLMs directly to your private business data and internal tools with deterministic execution controls.",
    keyMetric: "Context-aware retrieval",
    accentColor: "from-purple-500/20 to-indigo-500/10"
  },
  {
    id: "ai-agents",
    name: "Gemini & OpenAI API",
    category: "ai",
    badge: "Structured AI",
    iconName: "ai",
    description: "Function calling, structured outputs, schema validation, tool integration, and production AI workflows.",
    whyFoundersCare: "Reliable, schema-validated JSON outputs allow LLMs to safely trigger APIs, database mutations, and automated tasks.",
    keyMetric: "Schema-validated outputs",
    accentColor: "from-indigo-500/20 to-purple-500/10"
  },
  {
    id: "gcp-cloud-run",
    name: "GCP, Cloud Run & Serverless",
    category: "cloud",
    badge: "Google Cloud Native",
    iconName: "server",
    description: "Google Cloud Run, Firebase Functions, Edge Workers, Cloud Tasks, and Google Workspace App automation integrations.",
    whyFoundersCare: "Auto-scaling serverless infrastructure that charges only for active computation while automating business operations.",
    keyMetric: "Zero-idle serverless scale",
    accentColor: "from-sky-500/20 to-blue-500/10"
  },
  {
    id: "redis-celery",
    name: "Redis & Celery Queue",
    category: "infra",
    badge: "Caching & Async Jobs",
    iconName: "redis",
    description: "In-memory caching, distributed task queues, pub/sub messaging, and background workload decoupling.",
    whyFoundersCare: "Offloads intensive AI processing, batch data pipelines, and notifications to prevent UI latency and timeouts.",
    keyMetric: "Decoupled async queues",
    accentColor: "from-red-500/20 to-rose-500/10"
  },
  {
    id: "docker",
    name: "Docker & Cloud Infrastructure",
    category: "infra",
    badge: "DevOps & CI/CD",
    iconName: "docker",
    description: "Containerized deployments, reproducible environments, CI/CD automation, and cloud-native services.",
    whyFoundersCare: "Guarantees parity between local staging and cloud production, enabling reliable and automated zero-downtime rollouts.",
    keyMetric: "Reproducible container builds",
    accentColor: "from-cyan-500/20 to-blue-500/10"
  },
  {
    id: "nextjs",
    name: "Next.js & Modern React",
    category: "frontend",
    badge: "Full-Stack Web App",
    iconName: "next",
    description: "Server rendering, App Router, full-stack applications, and responsive, state-optimized client dashboards.",
    whyFoundersCare: "Delivers crisp UX, rapid first contentful paint, and accessible founder dashboards that scale with user growth.",
    keyMetric: "Server-driven rendering",
    accentColor: "from-slate-500/20 to-slate-400/10"
  }
];

const TechnicalArsenal = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredTech = filter === "all" 
    ? techStack 
    : techStack.filter(item => item.category === filter);

  return (
    <section id="arsenal" className="py-20 bg-[#080c14] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
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
            { id: "cloud", label: "GCP & Serverless" },
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
