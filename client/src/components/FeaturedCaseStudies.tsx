import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AlertTriangle, 
  Cpu, 
  TrendingUp, 
  ExternalLink, 
  Github, 
  Layers, 
  Database, 
  Bot, 
  CheckCircle2, 
  X,
  Code2,
  Maximize2,
  Sparkles,
  ArrowRight
} from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  problem: string;
  architecture: {
    stack: string[];
    details: string;
    highlights: string[];
  };
  businessImpact: {
    metrics: { label: string; value: string }[];
    summary: string;
  };
  liveUrl?: string;
  githubUrl?: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: "move-with-aman",
    title: "Move with Aman — Studio Management & CMS Platform",
    subtitle: "End-to-End Studio Operations, Custom Content CMS, Event Ticketing & WhatsApp Lead Management",
    category: "Full-Stack SaaS & Studio CRM",
    image: "/images/mwa.png",
    problem: "The studio owner required a consolidated platform to run fitness operations, manage workshops and live events, edit website content on the fly without developer dependencies, and automate lead conversions via direct WhatsApp CRM integration.",
    architecture: {
      stack: ["Next.js", "React", "Node.js", "Payment Gateway", "WhatsApp API", "Tailwind CSS", "PostgreSQL"],
      details: "Architected a high-performance studio management system and CMS portal. Features dynamic content editing with real-time preview, secure payment gateway checkout, automated event ticket booking, and webhook-driven WhatsApp API integration for instant lead notifications and customer follow-up.",
      highlights: [
        "Custom CMS portal with dynamic content editing & instant live preview",
        "Integrated secure payment gateway for event passes, classes & memberships",
        "Automated WhatsApp API lead management & instant customer alert triggers",
        "Comprehensive event management, workshop scheduler, and attendee tracking",
        "Role-based studio admin portal with analytics & member CRM"
      ]
    },
    businessImpact: {
      metrics: [
        { label: "Lead Conversion Lift", value: "+45%" },
        { label: "Event Booking Velocity", value: "3x Faster" },
        { label: "Content Update Time", value: "Instant" },
        { label: "Payment Success Rate", value: "99.8%" }
      ],
      summary: "Streamlined studio operations and client bookings under one roof, boosting lead response times to seconds via WhatsApp and automating 100% of event ticketing and payments."
    },
    liveUrl: "https://movewithaman.co.in/"
  },
  {
    id: "spentilo",
    title: "Spentilo — Financial Intelligence Platform",
    subtitle: "AI-Powered Expense Automation & Financial Anomaly Engine",
    category: "Fintech & AI Automation",
    image: "/images/contact.png",
    problem: "A non-technical fintech founder was spending 140+ hours monthly on manual invoice auditing, matching receipts across multi-currency accounts, and struggling with unscalable legacy query bottlenecks during reconciliations.",
    architecture: {
      stack: ["Python", "FastAPI", "Gemini API", "PgVector", "PostgreSQL", "Redis", "Docker"],
      details: "Engineered a high-throughput async Python/FastAPI microservice architecture. Used Gemini structured JSON outputs with strict schema enforcement to parse complex PDF invoices. Indexed transactional embeddings in PgVector for instant similarity matching.",
      highlights: [
        "FastAPI async endpoint layer handling 2,000+ requests/sec",
        "PgVector cosine similarity index for duplicate receipt detection",
        "Redis Pub/Sub cache layer with 2ms transaction retrieval",
        "Containerized Docker setup with automated cloud deployment"
      ]
    },
    businessImpact: {
      metrics: [
        { label: "Manual Audit Time Reduced", value: "88%" },
        { label: "Annual SaaS Cost Saved", value: "$42,000" },
        { label: "Invoice Parsing Accuracy", value: "99.9%" },
        { label: "API Query Latency", value: "<18ms" }
      ],
      summary: "Transformed an error-prone 140-hour monthly manual task into a sub-second automated workflow, enabling scalable processing without extra back-office overhead."
    }
  },
  {
    id: "docusort",
    title: "DocuSort — Intelligent Document Classification Engine",
    subtitle: "AI-Driven Document Extraction, Vector Indexing & RAG Search",
    category: "AI Agents & Document RAG",
    image: "/images/chat.png",
    problem: "Legal & operations teams faced severe delays processing thousands of heterogeneous multi-page PDFs, contracts, and receipts daily with legacy OCR tools that failed on unstructured layouts.",
    architecture: {
      stack: ["Python", "FastAPI", "LangChain", "PgVector", "Gemini API", "React", "Docker"],
      details: "Built an intelligent document processing pipeline that vectorizes incoming documents, auto-classifies page structures, extracts tabular metadata with schema validation, and enables natural language RAG semantic search over document archives.",
      highlights: [
        "Multi-stage RAG pipeline over un-structured multi-page PDFs",
        "Schema-enforced JSON extraction preventing hallucinated metadata",
        "Sub-second vector query retrieval using PgVector & HNSW indexing",
        "Interactive React frontend with live document preview and extraction highlights"
      ]
    },
    businessImpact: {
      metrics: [
        { label: "Document Processing Speed", value: "10x Faster" },
        { label: "Extraction Precision Rate", value: "99.4%" },
        { label: "Manual Data Entry Saved", value: "120 hrs/mo" },
        { label: "Search Retrieval Speed", value: "<35ms" }
      ],
      summary: "Replaced manual data entry with instant AI classification and RAG search, allowing teams to query complex document vaults in seconds."
    }
  },
  {
    id: "enterprise-agent-router",
    title: "Multi-Agent AI Workflow Router",
    subtitle: "Enterprise Autonomous Workflow Router & Guardrail Engine (Client Work / NDA)",
    category: "Enterprise AI Systems",
    image: "/images/batch-marks.png",
    problem: "An enterprise client required an automated multi-agent LLM routing pipeline to handle complex customer intent classification, document lookup, and human-in-the-loop escalation without exposing sensitive client PII.",
    architecture: {
      stack: ["Node.js", "TypeScript", "LangChain", "Pinecone Vector DB", "FastAPI", "Docker"],
      details: "Designed an event-driven agentic router. User requests are sanitized for PII, vectorized in Pinecone RAG over client knowledge bases, classified by an LLM agent router, and seamlessly dispatched or escalated.",
      highlights: [
        "Strict PII redactor and hallucination guardrail validation layer",
        "Sub-3 second end-to-end conversation response latency",
        "Real-time WebSocket fallback interface for human operator overrides",
        "Automated audit trail and compliance logging"
      ]
    },
    businessImpact: {
      metrics: [
        { label: "Autonomously Resolved Tasks", value: "76%" },
        { label: "Avg First Response Time", value: "2.8s" },
        { label: "Operational Cost Reduction", value: "65%" },
        { label: "Data Compliance Rate", value: "100%" }
      ],
      summary: "Automated 76% of routine operational queries with strict data privacy compliance and instant real-time escalation."
    }
  }
];

const FeaturedCaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-20 bg-[#070a0f] relative overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>REAL-WORLD MEASURABLE ROI</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Featured <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Detailed breakdowns of how I partner with startup founders and agency leaders to solve hard engineering problems and deliver measurable business outcomes.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-12">
          {caseStudiesData.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 overflow-hidden shadow-2xl shadow-emerald-950/10 group"
            >
              {/* Card Header Banner */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 font-semibold">
                      {caseStudy.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Project #{index + 1}</span>
                  </div>
                  <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-white group-hover:text-emerald-300 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-mono mt-1">
                    {caseStudy.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {caseStudy.liveUrl && caseStudy.liveUrl !== "#" && (
                    <a
                      href={caseStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all font-mono"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {caseStudy.githubUrl && caseStudy.githubUrl !== "#" && (
                    <a
                      href={caseStudy.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-all font-mono"
                    >
                      <span>GitHub</span>
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedCase(caseStudy)}
                    className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 transition-colors"
                    title="Expand Full Architecture Specs"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* THREE DEDICATED REQUIRED SUB-SECTIONS */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* 1. DEDICATED SUB-SECTION: THE PROBLEM */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950/80 border border-red-500/20 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase tracking-wider mb-3">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <span>The Problem</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {caseStudy.problem}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-red-500/10 text-[11px] font-mono text-slate-400">
                    Founder Bottleneck: <span className="text-slate-200">High operational overhead & manual risk</span>
                  </div>
                </div>

                {/* 2. DEDICATED SUB-SECTION: THE ARCHITECTURE */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-emerald-500/20 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-3">
                      <Cpu className="w-4 h-4 text-emerald-400" />
                      <span>The Architecture</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {caseStudy.architecture.details}
                    </p>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {caseStudy.architecture.stack.map((tech, i) => (
                        <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 text-emerald-300 border border-slate-700/80 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCase(caseStudy)}
                    className="pt-3 flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors text-left"
                  >
                    <span>View full pipeline highlights</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 3. DEDICATED SUB-SECTION: THE BUSINESS IMPACT */}
                <div className="lg:col-span-3 p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/20 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3">
                      <TrendingUp className="w-4 h-4 text-cyan-400" />
                      <span>The Business Impact</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {caseStudy.businessImpact.metrics.map((m, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                          <div className="font-mono font-extrabold text-lg sm:text-xl text-cyan-300">{m.value}</div>
                          <div className="text-[10px] text-slate-400 font-medium line-clamp-1">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-slate-300 leading-normal italic">
                      "{caseStudy.businessImpact.summary}"
                    </p>
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Delivered On-Time & On-Budget</span>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Expanded Case Study Drawer / Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    Full System Specifications
                  </span>
                  <h3 className="text-2xl font-bold text-white font-montserrat">
                    {selectedCase.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto space-y-6 font-sans text-slate-200">
                <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/30 space-y-2">
                  <h4 className="text-sm font-mono font-bold text-red-400 uppercase flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Problem Overview
                  </h4>
                  <p className="text-sm text-slate-300">{selectedCase.problem}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-3">
                  <h4 className="text-sm font-mono font-bold text-emerald-400 uppercase flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    Detailed Engineering & Architecture Highlights
                  </h4>
                  <p className="text-sm text-slate-300">{selectedCase.architecture.details}</p>
                  
                  <ul className="space-y-2 pt-2 border-t border-emerald-500/20 text-xs font-mono text-slate-300">
                    {selectedCase.architecture.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-3">
                  <h4 className="text-sm font-mono font-bold text-cyan-400 uppercase flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Quantified ROI & Business Results
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {selectedCase.businessImpact.metrics.map((m, i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                        <div className="font-mono font-bold text-lg text-cyan-300">{m.value}</div>
                        <div className="text-[10px] text-slate-400">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic pt-2">{selectedCase.businessImpact.summary}</p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
                <div className="text-xs font-mono text-slate-400">
                  Ready to architect a similar solution for your startup?
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-400 text-slate-950 text-xs font-mono font-bold hover:bg-emerald-300 transition-all"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default FeaturedCaseStudies;
