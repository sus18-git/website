import Evolving3DObject from "@/components/Evolving3DObject";
import HeroSun from "@/components/HeroSun";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { PremiumLabel } from "@/components/ui/PremiumLabel";
import { AnimatedText, ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#020202] text-white overflow-clip font-sans">

      {/* 
        FIXED 3D CANVAS - Ant + Props
        Full width behind scrolling content. Hidden in hero via SceneOrchestrator.
      */}
      <div className="fixed inset-0 w-full h-full z-[1] pointer-events-none">
        <div className="w-full h-full pointer-events-auto">
          <Evolving3DObject />
        </div>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="relative z-10 w-full overflow-hidden">

        {/* ═══════════════════════════════════════════
            HERO SECTION 
            Reference: Centered headline, planet/sun at the BOTTOM of the viewport (not filling the page)
            ═══════════════════════════════════════════ */}
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pointer-events-none">

          {/* 3D Sun Scene - occupies only the lower portion */}
          <div className="absolute inset-0 z-0">
            <HeroSun />
          </div>

          {/* Dark subtle vignette overlay for text readability */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(2,2,2,0.6)_100%)] z-[1]" />

          {/* Hero Text Content */}
          <div className="relative z-[2] flex flex-col items-center text-center px-6 md:px-12 w-full max-w-5xl pointer-events-auto">

            {/* Subtitle */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/60 font-light">
                PingPal / Enterprise AI
              </span>
              <div className="w-8 h-px bg-white/30" />
            </div>

            {/* Headline */}
            <AnimatedText
              as="h1"
              text="THAT SOLVES REAL-WORLD BUSINESS PROBLEMS"
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white uppercase"
            />

            {/* Sub-description */}
            <AnimatedText
              as="p"
              delay={0.3}
              text="AI chatbots, automation, and custom software that eliminates manual work and accelerates execution."
              className="mt-8 text-base md:text-lg text-white/50 font-light leading-relaxed max-w-2xl"
            />

            {/* CTA buttons */}
            <ScrollReveal delay={0.6} className="mt-12 flex flex-col sm:flex-row items-center gap-5">
              <Link href="/contact">
                <PremiumButton primary className="shadow-[0_0_25px_rgba(255,0,0,0.2)] hover:shadow-[0_0_40px_rgba(255,0,0,0.35)] transition-shadow">
                  Book a Call <ArrowRight className="ml-2 w-4 h-4" />
                </PremiumButton>
              </Link>
              <Link href="/solutions">
                <PremiumButton className="bg-white/5 border-white/10 hover:bg-white/10">
                  Explore Solutions
                </PremiumButton>
              </Link>
            </ScrollReveal>

            {/* Scroll Indicator */}
            <ScrollReveal delay={1} className="mt-16">
              <Link href="#capabilities">
                <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-white/40 transition-all group">
                  <ChevronDown className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CAPABILITIES SECTION — Text on RIGHT, Ant enters on LEFT
            ═══════════════════════════════════════════ */}
        <section id="capabilities" className="px-7 py-32 md:px-16 lg:px-24 md:min-h-[80vh] flex flex-col justify-center items-end text-right relative pointer-events-none mt-12">
          <div className="absolute inset-0 w-full md:w-[65%] md:left-auto md:right-0 bg-[radial-gradient(ellipse_at_right_center,rgba(0,0,0,0.75)_0%,transparent_100%)] -z-10" />

          <div className="w-full md:w-[50%] lg:w-[45%] relative z-10 flex flex-col items-end pointer-events-auto">
            <PremiumLabel>Capabilities</PremiumLabel>
            <AnimatedText as="h2" text="Systems built for scale." className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-white" />

            <div className="flex flex-col gap-16 w-full">
              {[
                { title: "AI Chatbots & Agents", desc: "Customer support bots, sales assistants, internal knowledge assistants, and task-driven AI agents that connect to your systems and get real work done autonomously." },
                { title: "Workflow Automation", desc: "Automate approvals, reporting, ticketing, dispatch, follow-ups, lead routing, and back-office processes. Integrate CRM, payments, inventory, and logic layers seamlessly." },
                { title: "Custom Applications", desc: "From internal tools to customer-facing apps—dashboards, portals, booking systems, marketplaces, and admin panels built for speed, observability, and ultimate reliability." },
                { title: "Data Engineering & ML", desc: "Clean pipelines, unified dashboards, forecasting, anomaly detection, and ML models that improve decision-making and reduce operational surprises across the board." },
              ].map((feature, idx) => (
                <ScrollReveal key={idx} delay={0.1} className="flex flex-col items-end group">
                  <div className="text-[#ff0000] text-sm font-mono mb-4 tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">0{idx + 1} //</div>
                  <h3 className="text-2xl font-medium tracking-wide mb-4 text-white group-hover:text-[#ff0000] transition-colors duration-500">{feature.title}</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed font-light group-hover:text-zinc-300 transition-colors duration-500">{feature.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PROCESS SECTION — Text on LEFT, Ant walks to RIGHT
            ═══════════════════════════════════════════ */}
        <section className="px-7 py-32 md:px-16 lg:px-24 md:min-h-[80vh] flex flex-col justify-center items-start relative pointer-events-none mt-12">
          <div className="absolute inset-0 w-full md:w-[65%] bg-[radial-gradient(ellipse_at_left_center,rgba(0,0,0,0.75)_0%,transparent_100%)] -z-10" />

          <div className="w-full md:w-[50%] lg:w-[45%] relative z-10 pointer-events-auto">
            <PremiumLabel>Execution Architecture</PremiumLabel>
            <AnimatedText as="h2" text="How we deliver." className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-white" />

            <div className="flex flex-col gap-12 border-l border-white/10 pl-8 ml-2 text-left">
              {[
                { title: "Discovery & Blueprint", desc: "We map your workflow, identify bottlenecks, and define hard success metrics before a line of code is written." },
                { title: "Prototype to Production", desc: "Validate the approach in days. We build the production path with uncompromised clarity and milestones." },
                { title: "Sprint Execution", desc: "Every sprint delivers working, observable features. Working software is the single source of truth." },
                { title: "Deployment & Hardening", desc: "Launch, monitor, and train. Enterprise-grade observability ensures the system remains robust under heavy load." },
              ].map((step, idx) => (
                <ScrollReveal key={idx} delay={0.1} className="relative group flex flex-col items-start w-full">
                  <div className="absolute -left-[35px] top-2 w-2 h-2 rounded-full bg-[#ff0000] shadow-[0_0_8px_#ff0000] scale-50 group-hover:scale-100 transition-transform duration-500" />
                  <h3 className="text-xl font-medium tracking-wide mb-2 text-white">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-light">{step.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FINAL CTA — Centered
            ═══════════════════════════════════════════ */}
        <section className="px-7 pb-48 pt-48 md:px-16 lg:px-24 flex flex-col items-center text-center relative pointer-events-none mt-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.85)_0%,transparent_100%)] -z-10" />

          <div className="w-full md:w-[60%] relative z-10 flex flex-col items-center pointer-events-auto">
            <PremiumLabel>Initiate</PremiumLabel>
            <AnimatedText as="h2" text="Ready to scale your operations?" className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white" />
            <p className="text-xl text-zinc-400 mb-12 max-w-lg font-light">
              Tell us what you&apos;re building. PingPal will propose a clear architectural plan, timeline, and lean-cost execution strategy.
            </p>
            <ScrollReveal delay={0.3}>
              <Link href="/contact">
                <PremiumButton primary>
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </PremiumButton>
              </Link>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </main>
  );
}
