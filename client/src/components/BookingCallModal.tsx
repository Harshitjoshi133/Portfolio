import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Video, 
  ShieldCheck, 
  Globe2, 
  Send,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingCallModal = ({ isOpen, onClose }: BookingCallModalProps) => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<string>("Tomorrow, 10:00 AM EST");
  const [selectedSlot, setSelectedSlot] = useState<string>("10:00 AM EST");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timezone, setTimezone] = useState("EST (UTC-5)");
  const [projectBrief, setProjectBrief] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your work email to receive calendar invite.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Discovery Call Requested!",
        description: `Calendar invitation and Google Meet link sent to ${email}. Looking forward to speaking!`,
      });
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden overflow-y-auto max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-montserrat flex items-center gap-2">
                  Book 30-Min Discovery Call
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                    NO OBLIGATION
                  </span>
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  Direct consultation with Harshit Joshi — AI & Backend Specialist
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleBook} className="p-6 space-y-6">
            
            {/* Timezone & Time Slot Selection */}
            <div className="space-y-3 p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-300 uppercase flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                  Select Timezone Alignment:
                </span>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-lg px-2.5 py-1 focus:outline-none focus:border-emerald-500 font-mono"
                >
                  <option value="EST (UTC-5)">Eastern Time (PST/EST)</option>
                  <option value="PST (UTC-8)">Pacific Time (PST)</option>
                  <option value="UTC / GMT">London / UTC (GMT)</option>
                  <option value="CET (UTC+1)">Europe (CET)</option>
                </select>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2">
                {[
                  "Tomorrow 10:00 AM",
                  "Tomorrow 2:30 PM",
                  "Day After 11:00 AM",
                  "Day After 4:00 PM",
                  "Fri 9:30 AM",
                  "Fri 3:00 PM"
                ].map((slot, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-3 rounded-xl text-xs font-mono border text-center transition-all ${
                      selectedSlot === slot 
                        ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400' 
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Founder Contact Details */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@startup.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Project Goals / Current Bottleneck (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Tell me briefly about what you're building or trying to automate..."
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>
            </div>

            {/* Assurance badges */}
            <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-800 gap-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Mutual NDA Guaranteed</span>
              </span>
              <span className="flex items-center gap-1">
                <Video className="w-4 h-4 text-cyan-400" />
                <span>Google Meet Link Included</span>
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Instant Confirmation</span>
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl text-sm font-bold font-mono text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Generating Meet Invite...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Confirm Discovery Call & Send Calendar Invite</span>
                </>
              )}
            </button>

          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingCallModal;
