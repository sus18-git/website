"use client";

import AmbientBackground from "@/components/AmbientBackground";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { PremiumLabel } from "@/components/ui/PremiumLabel";
import { AnimatedText, ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Mail, MapPin, CheckCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Log form data (replace with actual API endpoint later)
    console.log("Contact form submitted:", {
      name: formData.get("name"),
      email: formData.get("email"),
      objective: formData.get("objective"),
    });
    setSubmitted(true);
  }

  return (
    <>
      <AmbientBackground />

      <main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">

        <section className="relative w-full max-w-7xl mx-auto px-7 py-32 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="flex flex-col justify-center">
            <PremiumLabel>Contact</PremiumLabel>
            <AnimatedText
              as="h1"
              text="Tell us what you want to build."
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-8 text-[color:var(--theme-text)]"
            />
            <AnimatedText
              as="p"
              delay={0.3}
              text="Whether you need a chatbot, an internal platform, workflow automation, or a complete operational rebuild — PingPal AI will propose a practical plan with timeline and milestones."
              className="text-lg md:text-xl text-white/50 leading-relaxed mb-16 font-light"
            />

            <ScrollReveal delay={0.6} className="space-y-8">
              <a href="mailto:hello@pingpal.dev" className="flex items-center gap-6 text-white/50 hover:text-white transition-colors group cursor-pointer w-fit">
                <div className="w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-red-500/40 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.15)] transition-all duration-500">
                  <Mail className="w-5 h-5 group-hover:text-red-500 transition-colors" />
                </div>
                <span className="text-lg font-light tracking-wide">hello@pingpal.dev</span>
              </a>
              <div className="flex items-center gap-6 text-white/50">
                <div className="w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg font-light tracking-wide">Global Delivery Infrastructure</span>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4} className="relative p-1 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent">
            <div className="absolute inset-0 bg-black rounded-[2rem] m-[1px]" />
            <div className="relative z-10 bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] flex flex-col gap-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-6 text-center">
                  <CheckCircle className="w-16 h-16 text-red-500" />
                  <h3 className="text-2xl font-medium tracking-wide text-white/90">Request Received</h3>
                  <p className="text-white/50 font-light leading-relaxed max-w-sm">
                    Thank you! We&apos;ll review your project details and respond within 24 hours with a preliminary plan.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-medium tracking-wide text-white/90">Send Project Details</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em]">Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder-white/20 focus:outline-none focus:border-red-500/60 transition-colors font-light text-lg"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em]">Email</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder-white/20 focus:outline-none focus:border-red-500/60 transition-colors font-light text-lg"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="contact-objective" className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em]">What are you trying to achieve?</label>
                      <textarea
                        id="contact-objective"
                        name="objective"
                        rows={3}
                        required
                        className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder-white/20 focus:outline-none focus:border-red-500/60 transition-colors resize-none font-light text-lg"
                        placeholder="Reduce support load, automate ops, launch a product..."
                      />
                    </div>
                    <div className="mt-4">
                      <PremiumButton primary type="submit" className="w-full">
                        Send Project Details <ArrowRight className="ml-2 w-5 h-5" />
                      </PremiumButton>
                    </div>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </section>
      </main>
    </>
  );
}
