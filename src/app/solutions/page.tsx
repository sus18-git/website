import AmbientBackground from "@/components/AmbientBackground";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { PremiumLabel } from "@/components/ui/PremiumLabel";
import { AnimatedText, ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Bot, Repeat, MonitorPlay, Database } from "lucide-react";
import Link from "next/link";

export default function Solutions() {
  return (
    <>
      <AmbientBackground />

      <main className="relative z-10 w-full flex flex-col items-center overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative w-full max-w-7xl mx-auto px-7 py-32 md:px-12 lg:px-20 lg:py-56 flex flex-col justify-center items-start">
          <PremiumLabel>Architecture & Solutions</PremiumLabel>
          <AnimatedText
            as="h1"
            text="Systems built for scale."
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.04em] leading-[1.05] mb-8 max-w-5xl text-[color:var(--theme-text)]"
          />
          <div className="max-w-3xl">
            <AnimatedText
              as="p"
              delay={0.3}
              text="PingPal AI delivers AI and software ecosystems that eliminate friction, reduce manual work, and inject clarity across your operations. We don't just build features; we engineer outcomes using a production-first mindset."
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 font-light tracking-wide"
            />
          </div>
        </section>

        {/* SOLUTIONS LIST */}
        <section className="relative w-full max-w-7xl mx-auto px-7 pb-32 md:px-12 lg:px-20 grid grid-cols-1 gap-16 lg:gap-32">

          {[
            {
              id: "ai-chatbots",
              title: "AI Chatbots & Agents",
              desc: "A conversational interface is just the beginning. PingPal AI builds autonomous, task-driven AI agents securely integrated into your core systems to deliver measurable outcomes—from support deflection to highly qualified lead conversion.",
              icon: <Bot className="w-8 h-8 text-accent" />,
              features: [
                "Enterprise RAG (Retrieval-Augmented Generation)",
                "Secure API & Tool Execution",
                "Advanced Conversation Topography",
                "Strict Guardrails & Audit Observability",
              ]
            },
            {
              id: "workflow-automation",
              title: "Workflow Automation",
              desc: "Eradicate manual data entry and system latency. We interconnect your CRM, ERP, and bespoke APIs to create zero-touch pipelines where data flows securely, accurately, and instantaneously.",
              icon: <Repeat className="w-8 h-8 text-accent" />,
              features: [
                "Zero-touch Lead & Qualification Pipelines",
                "Automated Escalation & Approval Matrices",
                "Real-time Telemetry & KPI Aggregation",
                "Intelligent Support Routing",
              ]
            },
            {
              id: "custom-apps",
              title: "Custom Platform Development",
              desc: "When off-the-shelf software fails to meet your operational complexity, we engineer bespoke web and mobile platforms. Built on modern, scalable stacks, designed for absolute reliability.",
              icon: <MonitorPlay className="w-8 h-8 text-accent" />,
              features: [
                "High-performance Internal Dashboards",
                "Complex Booking & Logistics Engines",
                "Frictionless Customer Portals",
                "Granular RBAC & Secure API Design",
              ]
            },
            {
              id: "data-ml",
              title: "Data Intelligence & ML",
              desc: "Raw data is a liability; actionable intelligence is an asset. We architect resilient ETL pipelines and deploy predictive models that preempt operational friction and identify hidden revenue streams.",
              icon: <Database className="w-8 h-8 text-accent" />,
              features: [
                "Resilient Data Pipelines (ETL/ELT)",
                "Executive-level Telemetry Dashboards",
                "Algorithmic Forecasting & Anomaly Detection",
                "Context-aware Recommendation Engines",
              ]
            }
          ].map((solution, idx) => (
            <ScrollReveal key={idx} delay={0} className="group flex flex-col lg:flex-row gap-12 lg:gap-24 items-start pb-16 lg:pb-32 border-b border-white/5 last:border-0 relative">
              <div className="lg:w-5/12 flex flex-col gap-8 relative z-10">
                <div className="w-20 h-20 rounded-[2rem] bg-black border border-white/10 flex items-center justify-center group-hover:border-accent/40 transition-colors duration-700 shadow-[0_0_40px_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_40px_rgba(100,100,255,0.1)]">
                  {solution.icon}
                </div>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white/90">{solution.title}</h2>
              </div>

              <div className="lg:w-7/12 flex flex-col gap-10 relative z-10">
                <p className="text-xl text-white/50 leading-relaxed font-light">{solution.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                  {solution.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/80 mt-2.5 shadow-[0_0_10px_rgba(100,100,255,0.5)]" />
                      <span className="text-white/70 font-light tracking-wide">{feat}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/contact">
                    <PremiumButton>
                      Initialize Discussion <ArrowRight className="ml-2 w-4 h-4" />
                    </PremiumButton>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}

        </section>
      </main>
    </>
  );
}
