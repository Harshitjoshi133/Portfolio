import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Bot, 
  Server, 
  Layers, 
  Database,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EstimatorProps {
  onOpenBookingModal: () => void;
}

const ProjectEstimator = ({ onOpenBookingModal }: EstimatorProps) => {
  const { toast } = useToast();
  const [projectType, setProjectType] = useState<string>("ai-agent");
  const [timeline, setTimeline] = useState<string>("standard");
  const [integrations, setIntegrations] = useState<string[]>(["fastapi", "postgres", "gemini"]);
  const [founderName, setFounderName] = useState("");
  const [founderEmail, setFounderEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleIntegration = (id: string) => {
    if (integrations.includes(id)) {
      setIntegrations(integrations.filter(i => i !== id));
    } else {
      setIntegrations([...integrations, id]);
    }
  };

  const projectTypeDetails = {
    "ai-agent": {
      title: "Agentic AI & Workflow Automation",
      estTime: "3 - 4 Weeks",
      highlights: ["Multi-agent prompt routing", "Structured JSON output schema validation", "RAG vector search store"],
      recommendedStack: "Python, FastAPI, Gemini API / OpenAI, PgVector, Docker"
    },
    "backend-redesign": {
      title: "Scalable Backend & Microservice Redesign",
      estTime: "4 - 5 Weeks",
      highlights: ["Sub-20ms API response latency", "Redis Pub/Sub caching & Celery queues", "PostgreSQL schema optimization"],
      recommendedStack: "Python, FastAPI, Node.js, PostgreSQL, Redis, Docker"
    },
    "fullstack-mvp": {
      title: "Full-Stack SaaS MVP Launch",
      estTime: "4 - 6 Weeks",
      highlights: ["Complete user authentication & RBAC", "Stripe / Wise payment billing", "Clean responsive Next.js founder UI"],
      recommendedStack: "Next.js, React, FastAPI, PostgreSQL, Tailwind, Docker"
    },
    "rag-search": {
      title: "Enterprise RAG & Knowledge Indexing",
      estTime: "2 - 3 Weeks",
      highlights: ["Automated PDF / Document embeddings", "Pinecone / PgVector indexing", "Hallucination-proof response guardrails"],
      recommendedStack: "Python, LangChain, PgVector, FastAPI, Docker"
    }
  };

  const selectedDetails = projectTypeDetails[projectType as keyof typeof projectTypeDetails];

  const handleSubmitEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!founderEmail) {
      toast({
        title: "Email required",
        description: "Please enter your work email to receive the project brief.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Project Scope Brief Received!",
        description: `Thank you ${founderName || 'Founder'}. I'll review your scope and respond within 12 hours with a custom roadmap.`,
      });
      setFounderName("");
      setFounderEmail("");
      setCompanyName("");
    }, 1000);
  };

  return (
    <section id="estimator" className="py-20 bg-[#070a0f] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 font-medium">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE SCOPE BUILDER</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Configure Your <span className="text-gradient">Project Scope & Timeline</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Select your project goals to see instant timeline estimates, recommended tech stack, and generate a custom intake brief for your startup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Selector Options */}
          <div className="lg:col-span-7 space-y-8 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800">
            
            {/* 1. Project Type Selector */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-300 uppercase font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                1. Select Primary Objective:
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: "ai-agent", title: "Agentic AI & Automation", icon: Bot, desc: "LLM agents, structured JSON, workflow triggers" },
                  { id: "backend-redesign", title: "Scalable Backend Redesign", icon: Server, desc: "FastAPI, sub-20ms APIs, Redis queues" },
                  { id: "fullstack-mvp", title: "Full-Stack SaaS MVP", icon: Layers, desc: "Complete web app, auth, billing, DB" },
                  { id: "rag-search", title: "Enterprise RAG & Search", icon: Database, desc: "Document vector indexing, PgVector" }
                ].map(item => {
                  const Icon = item.icon;
                  const isSelected = projectType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProjectType(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-start gap-3 ${
                        isSelected 
                          ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-lg shadow-emerald-500/10' 
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl shrink-0 ${isSelected ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-slate-100">{item.title}</div>
                        <div className="text-xs text-slate-400 font-mono mt-0.5">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Timeline Selector */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-300 uppercase font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                2. Preferred Delivery Urgency:
              </label>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "urgent", label: "Urgent Sprint", badge: "2-3 Weeks" },
                  { id: "standard", label: "Standard Sprint", badge: "4-5 Weeks" },
                  { id: "advisory", label: "Ongoing Advisory", badge: "Retainer" }
                ].map(t => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTimeline(t.id)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      timeline === t.id 
                        ? 'bg-cyan-950/40 border-cyan-500 text-cyan-300 font-bold' 
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-semibold">{t.label}</div>
                    <div className="text-[10px] font-mono mt-1 opacity-80">{t.badge}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Tech Stack Chips */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-300 uppercase font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                3. Include Specific Frameworks:
              </label>

              <div className="flex flex-wrap gap-2">
                {[
                  { id: "fastapi", label: "Python FastAPI" },
                  { id: "postgres", label: "PostgreSQL / PgVector" },
                  { id: "gemini", label: "Gemini 2.5 / Flash API" },
                  { id: "docker", label: "Docker & Cloud Run" },
                  { id: "redis", label: "Redis & Celery" },
                  { id: "nextjs", label: "Next.js & React" }
                ].map(item => {
                  const isChecked = integrations.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleIntegration(item.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                        isChecked 
                          ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-semibold' 
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      {isChecked ? '✓ ' : '+ '}{item.label}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Calculated Scope Brief & Booking Trigger */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Generated Scope Brief
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 font-bold">
                EST: {selectedDetails.estTime}
              </span>
            </div>

            <div>
              <h3 className="font-montserrat font-bold text-2xl text-white">
                {selectedDetails.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Recommended Stack: <span className="text-slate-200">{selectedDetails.recommendedStack}</span>
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono text-slate-400 uppercase font-semibold">Included Milestones:</div>
              <ul className="space-y-2 text-xs text-slate-300 font-sans">
                {selectedDetails.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Intake Brief Form */}
            <form onSubmit={handleSubmitEstimate} className="space-y-3 pt-4 border-t border-slate-800">
              <div className="text-xs font-mono text-slate-300 font-semibold">
                Submit this scope for a guaranteed 12-hour response:
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={founderName}
                  onChange={(e) => setFounderName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <input
                  type="text"
                  placeholder="Company / Startup"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <input
                type="email"
                required
                placeholder="founder@company.com"
                value={founderEmail}
                onChange={(e) => setFounderEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl font-mono text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                {isSubmitting ? (
                  <span>Sending Brief...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Brief for Async Review</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectEstimator;
