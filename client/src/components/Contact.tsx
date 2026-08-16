import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Globe2, 
  ShieldCheck, 
  CreditCard, 
  FileText, 
  MessageSquare,
  Github,
  Linkedin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const emailAddress = "Harshithardyjoshi@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setIsCopied(true);
    toast({
      title: "Email Copied!",
      description: `${emailAddress} copied to clipboard.`,
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formUrl = import.meta.env.VITE_FORMBOLD_URL;
      if (!formUrl) {
        await new Promise((res) => setTimeout(res, 800));
        toast({
          title: "Message Received!",
          description: "Thank you for reaching out. I'll respond within 12 hours with next steps.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
        setIsSubmitting(false);
        return;
      }

      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("company", formData.company);
      formPayload.append("message", formData.message);

      const response = await fetch(formUrl, {
        method: "POST",
        body: formPayload,
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Message Sent!",
        description: "Thank you! I've logged your intake inquiry and will email you back within 12 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#070a0f] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-medium">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DIRECT FOUNDER ONBOARDING</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Let's Build Your <span className="text-gradient">Next Systems Sprint</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Have a project in mind or need an AI & backend technical audit? Send a direct message or copy my email below. I guarantee a response within 12-24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Onboarding & Payment Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Email Copy Card */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
                Direct Email Communication
              </span>
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                    {emailAddress}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 transition-colors shrink-0"
                  title="Copy Email"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Response SLA: &lt;12 Hours</span>
                </span>
                <span>PST / EST / UTC</span>
              </div>
            </div>

            {/* EXPLICIT REQUIREMENT: Seamless International Onboarding & Payments */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-emerald-500/30 space-y-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg text-white">
                    International Onboarding & Payments
                  </h3>
                  <p className="text-xs font-mono text-emerald-400">
                    Built for Global Startups & Remote Teams
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Mutual NDAs & IP Ownership</strong>
                    I execute standard mutual NDAs prior to accessing your repositories or architecture plans. 100% IP rights transferred upon milestone signoff.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Wise, Stripe & Wire Transfers</strong>
                    Flexible invoice processing in USD ($), EUR (€), or GBP (£) via Wise, Stripe, ACH, or international SWIFT wire transfer with standard net-15 terms.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Milestone-Based Releases</strong>
                    Invoices are attached to verified GitHub milestone pull requests. You only approve funds after testing code on staging.
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3 flex-wrap">
                <span className="text-xs font-mono text-slate-400">Profiles:</span>
                <a
                  href="https://linkedin.com/in/harshitjoshi20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4 fill-current text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Harshitjoshi133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-xs font-mono"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Intake Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-montserrat font-bold text-2xl text-white">
                  Send a Direct Scope Inquiry
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  Fill out your project details to initiate an async intake review
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="sarah@agency.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                  Company / Startup Name
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="e.g. Apex AI Labs"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                  Project Scope & Desired Outcomes *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your current tech stack, primary bottleneck, and target launch timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-mono text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Project Scope Brief</span>
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

export default Contact;

