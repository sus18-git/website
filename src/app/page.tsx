
import PingPalLogo from "@/components/PingPalLogo";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { AnimatedText, ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { AgentIcon, WorkflowIcon, AppIcon, DataIcon } from "@/components/PremiumFeatureIcons";
import WhyPingPalPanels from "@/components/WhyPingPalPanels";
import DNAWireframe from "@/components/DNAWireframe";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-clip font-sans">

      {/* SCROLLABLE CONTENT */}
      <div className="relative z-10 w-full overflow-hidden">

        {/* ═══════════════════════════════════════════
            HERO SECTION — Full-screen video background
            ═══════════════════════════════════════════ */}
        <section id="hero" className="relative h-screen flex items-center overflow-hidden">

          {/* 4K Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            poster=""
          >
            <source src="/hero-ants.mp4" type="video/mp4" />
          </video>

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40 z-[1]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,transparent_40%,rgba(0,0,0,0.5)_100%)] z-[1]" />
          {/* Extra top band for navbar readability */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/70 to-transparent z-[1]" />

          {/* Hero Content */}
          <div className="relative z-[2] w-full max-w-7xl mx-auto px-7 md:px-12 lg:px-20 pt-28 md:pt-32">

            {/* Premium Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-red-500/60" />
              <span className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-white/40 font-light">
                PingPal AI / Enterprise AI
              </span>
            </div>

            {/* H1 */}
            <AnimatedText
              as="h1"
              text="AI automation & custom software—built fast, built right."
              className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-[-0.03em] leading-[1.1] text-white max-w-3xl"
            />

            {/* Sub-hero */}
            <AnimatedText
              as="p"
              delay={0.3}
              text="PingPal AI helps teams modernize operations with AI chatbots, automation, and custom software that reduces manual work and accelerates execution. We ship production-ready systems with an elite, lean delivery model."
              className="mt-8 text-base md:text-lg text-white/40 font-light leading-relaxed max-w-2xl"
            />

            {/* CTA Buttons */}
            <ScrollReveal delay={0.6} className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact">
                <PremiumButton primary>
                  Book a Call <ArrowRight className="ml-2 w-4 h-4" />
                </PremiumButton>
              </Link>
              <Link href="/solutions">
                <PremiumButton>
                  Explore Solutions
                </PremiumButton>
              </Link>
            </ScrollReveal>

            {/* Trust signals */}
            <ScrollReveal delay={0.9} className="mt-14 flex flex-wrap gap-x-10 gap-y-3">
              {[
                "Production-first delivery",
                "Security & privacy by design",
                "Fast iterations, clear outcomes",
              ].map((signal, i) => (
                <div key={i} className="flex items-center gap-2.5 text-white/20 text-[11px] tracking-[0.2em] uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  {signal}
                </div>
              ))}
            </ScrollReveal>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]">
            <Link href="#capabilities">
              <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-all group animate-bounce">
                <ChevronDown className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
              </div>
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CAPABILITIES SECTION — Masterclass Sticky Layout
            Cinematic scrolling experience inspired by top-tier tech:
            Left side sticks, right side scrolls past with massive scale.
            ═══════════════════════════════════════════ */}
        <section id="capabilities" className="relative w-full py-32 lg:py-44">

          <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">

              {/* Left Column: Header + Full-height DNA */}
              <div className="lg:w-5/12 relative w-full">
                <div className="relative z-20 mb-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-px bg-red-500/60" />
                    <span className="text-[11px] tracking-[0.3em] uppercase text-red-500 font-medium">Core Capabilities</span>
                  </div>

                  <AnimatedText
                    as="h2"
                    text="Systems built for scale."
                    className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] font-bold tracking-[-0.03em] text-[color:var(--theme-text)] mb-8"
                  />

                  <p className="text-white/40 leading-relaxed font-light text-lg mb-8">
                    We design and engineer autonomous systems, intelligent workflows, and production-grade software — not prototypes or fragile demos.
                  </p>

                  <ScrollReveal delay={0.2} className="hidden lg:block relative z-20">
                    <Link href="/solutions">
                      <PremiumButton>
                        View All Architecture <ArrowRight className="ml-2 w-4 h-4" />
                      </PremiumButton>
                    </Link>
                  </ScrollReveal>
                </div>

                {/* DNA Wireframe — Fills remaining vertical space alongside all cards */}
                <div className="hidden lg:block relative w-full" style={{ height: 'calc(100% - 340px)', minHeight: '900px' }}>
                  <DNAWireframe />
                </div>
              </div>

              {/* Right Column: Scrolling Feature Cards */}
              <div className="lg:w-7/12 flex flex-col gap-20 lg:gap-28 lg:pl-8 relative">

                {/* Master structural connector line (hidden on mobile) */}
                <div className="hidden lg:block absolute left-0 top-12 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

                {[
                  {
                    id: "01",
                    icon: <AgentIcon className="w-full h-full stroke-[1px]" />,
                    title: "AI Chatbots & Agents",
                    desc: "Deploy intelligent nodes. Customer support bots, sales assistants, internal knowledge retrieval, and task-driven AI agents that natively connect to your secure systems and execute workflows autonomously.",
                    tech: ["LLMs", "RAG", "Function Calling"]
                  },
                  {
                    id: "02",
                    icon: <WorkflowIcon className="w-full h-full stroke-[1px]" />,
                    title: "Workflow Automation",
                    desc: "Eliminate manual routing. Automate multi-step approvals, complex reporting, ticketing, dispatch logic, and back-office pipelines. Integrate CRM, payments, and legacy inventory layers flawlessly.",
                    tech: ["Event-Driven Logic", "API Integration", "Webhooks"]
                  },
                  {
                    id: "03",
                    icon: <AppIcon className="w-full h-full stroke-[1px]" />,
                    title: "Custom Applications",
                    desc: "High-performance interfaces. From mission-critical internal tools to customer-facing SaaS apps — dashboards, deep portals, booking systems, and scalable marketplaces engineered for instant observability.",
                    tech: ["React/Next.js", "Serverless", "Realtime"]
                  },
                  {
                    id: "04",
                    icon: <DataIcon className="w-full h-full stroke-[1px]" />,
                    title: "Data Engineering & ML",
                    desc: "Unlock the telemetry. We build clean robust pipelines, unified operational dashboards, predictive forecasting, anomaly detection systems, and dedicated ML architectures.",
                    tech: ["ETL Pipelines", "Predictive ML", "Data Lakes"]
                  },
                ].map((feature, idx) => (
                  <ScrollReveal key={idx} delay={0} className="relative group">

                    {/* Node connector to master line */}
                    <div className="hidden lg:flex absolute -left-[64px] top-8 items-center gap-4 z-10">
                      <div className="w-px h-px shadow-[0_0_10px_2px_rgba(255,0,0,0.5)] bg-red-500 rounded-full" />
                      <div className="w-12 h-px bg-gradient-to-r from-red-500/50 to-transparent" />
                    </div>

                    <div className="relative z-10 bg-white/[0.02] border border-white/[0.04] p-8 md:p-12 lg:p-16 rounded-[2rem] hover:border-white/[0.08] transition-all duration-700 overflow-hidden backdrop-blur-md">

                      {/* Ambient background effect inside card */}
                      <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-500/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                      {/* Header block within card */}
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                        <div className="w-20 h-20 md:w-24 md:h-24 text-white/30 group-hover:text-red-500 transition-colors duration-700">
                          {feature.icon}
                        </div>
                        <span className="text-[6rem] md:text-[8rem] font-bold leading-none tracking-tighter text-white/[0.03] group-hover:text-white/[0.05] transition-colors duration-700 select-none">
                          {feature.id}
                        </span>
                      </div>

                      {/* Content block */}
                      <div className="max-w-xl">
                        <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors duration-500 mb-6">
                          {feature.title}
                        </h3>
                        <p className="text-white/40 leading-relaxed font-light text-base md:text-lg mb-10 group-hover:text-white/60 transition-colors duration-500">
                          {feature.desc}
                        </p>

                        {/* Tech pills array */}
                        <div className="flex flex-wrap gap-3">
                          {feature.tech.map((techItem, techIdx) => (
                            <div key={techIdx} className="px-4 py-2 rounded-full border border-white/[0.05] bg-white/[0.02] text-[11px] uppercase tracking-wider text-white/50 group-hover:border-white/[0.1] transition-all duration-500">
                              {techItem}
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </ScrollReveal>
                ))}

              </div>

              {/* Mobile CTA */}
              <div className="block lg:hidden mt-16 w-full text-center">
                <Link href="/solutions">
                  <PremiumButton>
                    View All Architecture <ArrowRight className="ml-2 w-4 h-4" />
                  </PremiumButton>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* ═══════════════════════════════════════════
            WHY PINGPAL AI — Trust & differentiation
            Cinematic alternating horizontal panel layout
            ═══════════════════════════════════════════ */}
        <section className="relative w-full max-w-7xl mx-auto px-7 py-32 md:px-12 lg:px-20 lg:py-44 overflow-hidden">

          {/* Background ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/[0.025] rounded-full blur-[180px] pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-28">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-red-500/60" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-light">Why PingPal AI</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-red-500/60" />
            </div>
            <AnimatedText
              as="h2"
              text="Enterprise-grade results without enterprise overhead."
              className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[color:var(--theme-text)]"
            />
          </div>

          {/* New Scroll-Activated Panels */}
          <WhyPingPalPanels />
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* ═══════════════════════════════════════════
            USE CASES — Cross-industry proof
            ═══════════════════════════════════════════ */}
        <section className="relative w-full max-w-7xl mx-auto px-7 py-32 md:px-12 lg:px-20 lg:py-44">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-red-500/60" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-light">Real-World Impact</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-red-500/60" />
            </div>
            <AnimatedText
              as="h2"
              text="Use cases we deliver — across any industry."
              className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[color:var(--theme-text)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
            {[
              { label: "Insurance", text: "AI chatbot for policy questions, claims intake, and agent support" },
              { label: "Hospitality", text: "Guest support + upsell assistant for hotels and hospitality" },
              { label: "Logistics", text: "Fleet tracking dashboards, driver workflows, and automation" },
              { label: "Transport", text: "Smart booking + dispatch + pricing logic for taxi/transport platforms" },
              { label: "Sales", text: "Sales copilots that qualify leads and create proposals" },
              { label: "Internal", text: "Internal knowledge assistants for SOPs, policies, and training" },
              { label: "Reporting", text: "Automated reporting pipelines replacing spreadsheets and manual updates" },
              { label: "CX", text: "Customer onboarding flows, reminders, and follow-ups that run themselves" },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={0} className="group flex items-start gap-5 p-6 rounded-xl border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-500">
                <span className="flex-shrink-0 text-[10px] tracking-[0.2em] uppercase text-red-500/70 font-medium bg-red-500/[0.06] px-3 py-1.5 rounded-full mt-0.5">
                  {item.label}
                </span>
                <p className="text-white/50 text-[15px] font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                  {item.text}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0} className="text-center mt-14">
            <p className="text-white/25 text-sm font-light italic">If it&apos;s digital and non-hardware, PingPal AI can build it.</p>
          </ScrollReveal>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* ═══════════════════════════════════════════
            LEAN PRICING SECTION
            ═══════════════════════════════════════════ */}
        <section className="relative w-full max-w-7xl mx-auto px-7 py-32 md:px-12 lg:px-20 lg:py-44">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-red-500/60" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-light">Lean Pricing</span>
              </div>
              <AnimatedText
                as="h2"
                text="Premium delivery. Lean cost."
                className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-8 text-[color:var(--theme-text)]"
              />
              <p className="text-white/40 leading-relaxed font-light text-lg mb-10">
                PingPal AI is built for teams that want high quality without high overhead. Our model is designed to be significantly more cost-efficient than large IT consultancies, while maintaining enterprise-grade engineering standards.
              </p>
              <ScrollReveal delay={0.2}>
                <Link href="/contact">
                  <PremiumButton>
                    Get a Build Plan <ArrowRight className="ml-2 w-4 h-4" />
                  </PremiumButton>
                </Link>
              </ScrollReveal>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6">
              {[
                { title: "Transparent scope + milestones", desc: "Every engagement starts with a clear scope, phased delivery, and defined success metrics — no surprise invoices." },
                { title: "Flexible engagement options", desc: "From a single MVP sprint to long-term product partnership. We adapt to your pace and budget." },
                { title: "You pay for builders, not bureaucracy", desc: "No layers of account managers or unnecessary signoff cycles. Your investment goes directly into engineering and delivery." },
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={0} className="group p-6 rounded-xl border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-red-500/60 shadow-[0_0_8px_rgba(255,0,0,0.3)] mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-white/90 mb-2">{item.title}</h3>
                      <p className="text-white/35 text-[15px] font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* ═══════════════════════════════════════════
            PROCESS SECTION
            ═══════════════════════════════════════════ */}
        <section id="process" className="relative w-full max-w-7xl mx-auto px-7 py-32 md:px-12 lg:px-20 lg:py-44">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

            {/* Left: Header */}
            <div className="lg:w-5/12 flex flex-col gap-8 lg:sticky lg:top-40 lg:self-start">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-red-500/60" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-light">How we deliver</span>
              </div>
              <AnimatedText
                as="h2"
                text="A process designed to ship—fast."
                className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[color:var(--theme-text)]"
              />
              <p className="text-white/40 leading-relaxed font-light text-lg">
                Working software is the truth. We keep alignment tight, reduce unnecessary signoffs, and move from idea to production with clear milestones.
              </p>
              <ScrollReveal delay={0.2}>
                <Link href="/contact">
                  <PremiumButton>
                    Talk to a Builder <ArrowRight className="ml-2 w-4 h-4" />
                  </PremiumButton>
                </Link>
              </ScrollReveal>
            </div>

            {/* Right: Timeline */}
            <div className="lg:w-7/12 flex flex-col gap-0">
              {[
                { step: "01", title: "Discovery", subtitle: "Days, not weeks", desc: "We map your workflow, identify the biggest bottleneck, and define success metrics. No unnecessary meetings." },
                { step: "02", title: "Prototype", subtitle: "Validate fast", desc: "Validate the approach quickly, then build the production path with clear milestones and technical architecture." },
                { step: "03", title: "Build", subtitle: "Sprint by sprint", desc: "Every sprint delivers working features, tested and demo-ready. You see real progress every week." },
                { step: "04", title: "Launch", subtitle: "Ship & train", desc: "Deploy, monitor, harden, and train your team. Adoption matters as much as code quality." },
                { step: "05", title: "Iterate", subtitle: "Optimize for ROI", desc: "Optimize for impact: speed, cost reduction, accuracy, conversion, or customer experience." },
              ].map((step, idx) => (
                <ScrollReveal key={idx} delay={0} className="group relative flex gap-8 pb-12 last:pb-0">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[11px] font-mono text-white/30 group-hover:text-red-500 group-hover:border-red-500/40 transition-all duration-500 bg-black relative z-10 flex-shrink-0">
                      {step.step}
                    </div>
                    {idx < 4 && <div className="w-px flex-1 bg-white/[0.06] mt-2" />}
                  </div>

                  {/* Content */}
                  <div className="pb-8 pt-1.5">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-xl font-medium tracking-tight text-white">{step.title}</h3>
                      <span className="text-[11px] tracking-[0.2em] uppercase text-red-500/60 font-light">{step.subtitle}</span>
                    </div>
                    <p className="text-white/40 leading-relaxed font-light">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* ═══════════════════════════════════════════
            EARLY PARTNER SECTION
            ═══════════════════════════════════════════ */}
        <section id="about" className="relative w-full max-w-7xl mx-auto px-7 py-32 md:px-12 lg:px-20 lg:py-44">
          <div className="relative p-10 md:p-16 lg:p-20 rounded-3xl border border-white/[0.05] bg-gradient-to-br from-white/[0.02] to-transparent overflow-hidden">

            {/* Subtle glow */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-red-500/60" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-light">Early Partner Advantage</span>
              </div>

              <AnimatedText
                as="h2"
                text="Premium delivery at lean cost."
                className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-8 text-[color:var(--theme-text)]"
              />

              <p className="text-white/40 leading-relaxed font-light text-lg mb-8">
                Early partners get preferred pricing and founder-mode attention. You get a high-impact build at a lean cost, and PingPal AI gets momentum to keep building bigger from the ground up — through real work, real value, and long-term relationships.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {[
                  "Preferred pricing",
                  "Founder-mode attention",
                  "Long-term partnership",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/50 text-sm font-light">
                    <div className="w-2 h-2 rounded-full bg-red-500/60 shadow-[0_0_8px_rgba(255,0,0,0.4)]" />
                    {item}
                  </div>
                ))}
              </div>

              <ScrollReveal delay={0.2}>
                <Link href="/contact">
                  <PremiumButton primary>
                    Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                  </PremiumButton>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* ═══════════════════════════════════════════
            FAQ SECTION
            ═══════════════════════════════════════════ */}
        <section className="relative w-full max-w-7xl mx-auto px-7 py-32 md:px-12 lg:px-20 lg:py-44">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-5/12 lg:sticky lg:top-40 lg:self-start">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-red-500/60" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-light">FAQ</span>
              </div>
              <AnimatedText
                as="h2"
                text="Common questions."
                className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-8 text-[color:var(--theme-text)]"
              />
              <p className="text-white/40 leading-relaxed font-light text-lg">
                Straight answers about how PingPal AI works, what we deliver, and what to expect.
              </p>
            </div>

            <div className="lg:w-7/12 flex flex-col gap-0">
              {[
                { q: "How fast can PingPal AI build?", a: "Most MVPs ship in weeks, not quarters. Timelines depend on scope, integrations, and data readiness. We structure every engagement to show working software early." },
                { q: "Do you work with small businesses too?", a: "Yes. From solo operators to multi-location teams — if the workflow matters, we can modernize it. Our lean delivery model scales to fit your needs." },
                { q: "Can you integrate with our existing systems?", a: "Yes — CRMs, ERPs, spreadsheets, databases, payment gateways, ticketing tools, WhatsApp/email, and custom APIs. We build around what you already use." },
                { q: "Is this production-grade or just a demo?", a: "Production-grade. We design for reliability, security, monitoring, and maintainability. Every system ships with role-based access, audit logging, and documentation." },
              ].map((faq, idx) => (
                <ScrollReveal key={idx} delay={0} className="border-b border-white/[0.05] last:border-b-0">
                  <details className="group py-8">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="text-lg font-medium text-white/80 group-open:text-white transition-colors duration-300 pr-8">{faq.q}</h3>
                      <span className="flex-shrink-0 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-open:text-red-500 group-open:border-red-500/30 transition-all duration-300 group-open:rotate-45 text-lg leading-none">+</span>
                    </summary>
                    <p className="mt-4 text-white/40 leading-relaxed font-light text-[15px] max-w-xl">{faq.a}</p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FINAL CTA
            ═══════════════════════════════════════════ */}
        <section className="relative w-full px-7 pb-48 pt-32 md:px-12 lg:px-20 flex flex-col items-center text-center overflow-hidden">

          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.05)_0%,transparent_60%)] pointer-events-none" />

          <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-red-500/60" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-light">Let&apos;s build</span>
              <div className="w-8 h-px bg-red-500/60" />
            </div>

            <AnimatedText as="h2" text="Ready to automate work and ship fast?" className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-8 text-[color:var(--theme-text)]" />
            <p className="text-lg text-white/40 mb-12 max-w-lg font-light leading-relaxed">
              Tell us what you&apos;re building. PingPal AI will propose a clear plan, timeline, and lean-cost build approach.
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

        {/* ═══════════════════════════════════════════
            FOOTER
            ═══════════════════════════════════════════ */}
        <footer className="border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-20 py-16">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">

              {/* Brand */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <PingPalLogo size={32} />
                  <span className="text-white font-semibold tracking-tight">
                    Ping<span className="text-red-500">Pal</span> AI
                  </span>
                </div>
                <p className="text-white/30 text-sm font-light max-w-xs leading-relaxed">
                  AI automation & custom software — built fast, built right.
                </p>
              </div>

              {/* Links */}
              <div className="flex gap-12 md:gap-16 flex-wrap">
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-2">Navigate</span>
                  {[
                    { label: "Home", href: "/" },
                    { label: "Solutions", href: "/solutions" },
                    { label: "Industries", href: "/industries" },
                    { label: "About", href: "/about" },
                    { label: "Process", href: "/#process" },
                    { label: "Contact", href: "/contact" },
                  ].map((link) => (
                    <Link key={link.label} href={link.href} className="text-sm text-white/40 hover:text-white/70 transition-colors font-light">
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-2">Solutions</span>
                  {["AI Chatbots", "Automation", "Custom Apps", "Data & ML"].map((link) => (
                    <Link key={link} href="/solutions" className="text-sm text-white/40 hover:text-white/70 transition-colors font-light">
                      {link}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-2">Resources</span>
                  {[
                    { label: "FAQ", href: "/faq" },
                    { label: "Insurance", href: "/industries/insurance" },
                    { label: "Hospitality", href: "/industries/hospitality" },
                    { label: "Fleet & Logistics", href: "/industries/fleet-logistics" },
                  ].map((link) => (
                    <Link key={link.label} href={link.href} className="text-sm text-white/40 hover:text-white/70 transition-colors font-light">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/20 text-xs font-light">© 2026 PingPal AI. All rights reserved.</p>
              <p className="text-white/15 text-[11px] tracking-wider uppercase font-light">Production-first delivery. No buzzword demos.</p>
            </div>
          </div>
        </footer>

      </div >
    </main >
  );
}
