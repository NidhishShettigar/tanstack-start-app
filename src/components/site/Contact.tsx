import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Reveal, SectionHeader } from "./Reveal";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const EMAILJS_SERVICE_ID = "service_zamcuoe";
const EMAILJS_TEMPLATE_ID = "template_lg9cvzo";
const EMAILJS_PUBLIC_KEY = "uvqXHZDk18YyJnHOz";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    // Save to database for backup
    await supabase.from("contact_submissions").insert(parsed.data);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: parsed.data.name,
          email: parsed.data.email,
          message: parsed.data.message,
          from_name: parsed.data.name,
          from_email: parsed.data.email,
          reply_to: parsed.data.email,
          subject: "New Inquiry from MS Ventures Website",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent — we'll be in touch shortly.");
    } catch (err) {
      console.error("EmailJS error:", err);
      setLoading(false);
      toast.error("Couldn't send right now. We've saved your message — please try again.");
    }
  };

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Contact"
          title="Get in Touch"
          description="Reach out for quotes, partnerships, or any questions about our products."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="space-y-5">
              <div className="p-6 rounded-sm glow-border bg-white/[0.02] flex items-center gap-4">
                <div className="p-3 rounded-sm glow-border">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] text-white/50 uppercase mb-1">Address</div>
                  <div className="text-white/90 leading-relaxed text-sm">
                    2-113/56A, Third Floor, Commerce Centre,<br />
                    Kulur Kavoor Road, Kulur,<br />
                    Mangalore, Karnataka – 575013
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-sm glow-border bg-white/[0.02] flex items-center gap-4">
                <div className="p-3 rounded-sm glow-border">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] text-white/50 uppercase mb-1">Phone</div>
                  <a href="tel:+919844629696" className="text-white hover:text-white/70 transition-colors">+91 98446 29696</a>
                </div>
              </div>

              <div className="p-6 rounded-sm glow-border bg-white/[0.02] flex items-center gap-4">
                <div className="p-3 rounded-sm glow-border">
                  <Mail size={18} className="text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs tracking-[0.2em] text-white/50 uppercase mb-1">Email</div>
                  <a href="mailto:msventures.srthkl@gmail.com" className="text-white hover:text-white/70 transition-colors break-all">msventures.srthkl@gmail.com</a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={submit} className="p-8 md:p-10 bg-white/[0.02] rounded-sm glow-border space-y-6">
              <div>
                <label className="block text-xs tracking-[0.2em] text-white/50 uppercase mb-3">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-[#d1d5db] placeholder:text-[#9ca3af] transition-colors"
                  placeholder="Your name"
                  maxLength={100}
                />
                {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] text-white/50 uppercase mb-3">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-[#d1d5db] placeholder:text-[#9ca3af] transition-colors"
                  placeholder="Your email"
                  maxLength={255}
                />
                {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] text-white/50 uppercase mb-3">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-[#d1d5db] placeholder:text-[#9ca3af] transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                  maxLength={2000}
                />
                {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={loading || sent}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group w-full mt-2 inline-flex items-center justify-center gap-3 px-7 py-4 text-xs tracking-[0.25em] uppercase border border-white/20 rounded-full glow-border hover:bg-white hover:text-black transition-colors disabled:opacity-60"
              >
                {sent ? (
                  "Sent"
                ) : loading ? (
                  "Sending…"
                ) : (
                  <>
                    Send Message
                    <Send size={14} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
