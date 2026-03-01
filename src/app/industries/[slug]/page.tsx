import AmbientBackground from "@/components/AmbientBackground";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { PremiumLabel } from "@/components/ui/PremiumLabel";
import { AnimatedText, ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const industryData: Record<string, {
    title: string;
    metaTitle: string;
    metaDesc: string;
    h1: string;
    heroDesc: string;
    problems: string[];
    solutions: { title: string; desc: string }[];
    useCases: string[];
    cta: string;
}> = {
    insurance: {
        title: "Insurance",
        metaTitle: "AI for Insurance: Chatbots, Claims Automation & Ops Tools | PingPal AI",
        metaDesc: "PingPal AI builds AI chatbots and automation for insurance — claims intake, policy Q&A, agent copilots, workflow automation, and dashboards.",
        h1: "AI for insurance operations: faster claims, better support, fewer manual steps.",
        heroDesc: "Insurance workflows are document-heavy, process-driven, and time-sensitive. PingPal AI builds AI and automation systems that reduce operational load while improving customer experience — from policy Q&A to claims intake and internal agent copilots.",
        problems: [
            "High support volume and repeated policy questions",
            "Slow claims intake and missing information",
            "Manual document handling and inconsistent data entry",
            "Too much back-and-forth between teams",
            "Limited visibility into turnaround time and bottlenecks",
        ],
        solutions: [
            { title: "Policy & claims chatbots", desc: "Grounded in your documentation and rules" },
            { title: "Claims intake automation", desc: "Structured data capture + validations" },
            { title: "Agent copilots", desc: "Internal assistants for SOPs, coverage rules, and next steps" },
            { title: "Workflow routing", desc: "Ticket enrichment, assignment rules, escalations" },
            { title: "Dashboards", desc: "Turnaround time, backlog visibility, operational KPIs" },
        ],
        useCases: [
            "\"File a claim\" assistant that collects required details and opens a ticket",
            "Policy Q&A assistant that reduces call center load",
            "Internal SOP assistant for new hires and frontline agents",
            "Automation that flags missing documents and triggers follow-ups",
            "Analytics that surface delays and recurring claim issues",
        ],
        cta: "Get an Insurance Build Plan",
    },
    hospitality: {
        title: "Hospitality & Hotels",
        metaTitle: "AI for Hotels: Guest Support, Concierge & Automation | PingPal AI",
        metaDesc: "AI concierge and workflow automation for hotels — guest support, bookings, upsells, staff workflows, and operational dashboards.",
        h1: "AI concierge + hotel operations automation that improves guest experience.",
        heroDesc: "Hospitality success is speed, clarity, and service quality — across booking, check-in, support, and staff workflows. PingPal AI builds AI assistants and automation systems that reduce repetitive load and help teams respond faster.",
        problems: [
            "Repetitive guest questions (check-in, amenities, policies, timing)",
            "Slow response times during peak hours",
            "Disconnected systems between front desk, housekeeping, and management",
            "Manual follow-ups and missed requests",
            "Limited visibility into guest issues and patterns",
        ],
        solutions: [
            { title: "AI concierge / guest assistant", desc: "Web chat or messaging-based support" },
            { title: "Booking and inquiry automation", desc: "Qualification, confirmations, routing" },
            { title: "Staff workflow tools", desc: "Request tracking, status updates, escalations" },
            { title: "Upsell automation", desc: "Add-ons, late checkout, dining experiences" },
            { title: "Operations dashboard", desc: "Requests, turnaround time, service bottlenecks" },
        ],
        useCases: [
            "Guest assistant that answers FAQs and routes special requests",
            "Automated housekeeping task assignment and status tracking",
            "Upsell suggestions triggered by intent (spa, dining, upgrades)",
            "Post-stay follow-ups and review prompts automated responsibly",
        ],
        cta: "Build a Guest Experience System",
    },
    "fleet-logistics": {
        title: "Fleet & Logistics",
        metaTitle: "AI for Fleet & Logistics: Dispatch, Ops Automation & Dashboards | PingPal AI",
        metaDesc: "Fleet and logistics automation — dispatch tools, driver workflows, reporting, tracking dashboards, and AI assistants to reduce operational friction.",
        h1: "Fleet & logistics automation: dispatch faster, track better, waste less time.",
        heroDesc: "Logistics operations live and die by coordination: dispatch, status updates, exceptions, and reporting. PingPal AI builds workflow automation and custom ops platforms that reduce friction and improve visibility.",
        problems: [
            "Dispatch delays and manual coordination",
            "Drivers/field teams updating status inconsistently",
            "Reporting that takes hours every week",
            "Exceptions (late delivery, cancellations) handled too late",
            "No single dashboard for operational truth",
        ],
        solutions: [
            { title: "Dispatch dashboard", desc: "Assignment, status, exceptions, SLA tracking" },
            { title: "Driver workflows", desc: "Mobile-friendly task updates and confirmations" },
            { title: "Automation", desc: "Notifications, escalations, proof collection, follow-ups" },
            { title: "Reporting pipelines", desc: "Automated KPIs and operational analytics" },
            { title: "AI assistants", desc: "SOP/operations assistant, exception triage support" },
        ],
        useCases: [
            "Automated dispatch assignment based on rules and availability",
            "Real-time delivery tracking dashboards for operations managers",
            "Automated exception alerts when SLAs are at risk",
            "Driver mobile app with one-tap status updates",
        ],
        cta: "Get a Fleet Automation Plan",
    },
    retail: {
        title: "Retail & D2C",
        metaTitle: "AI for Retail & D2C: Support Automation, Ops Tools & Insights | PingPal AI",
        metaDesc: "AI chatbots, automation, dashboards, and custom apps for retail — order status, returns, support deflection, and operational visibility.",
        h1: "Retail AI and automation: faster support, smoother returns, better operations.",
        heroDesc: "Retail teams often fight the same battle: repeated customer questions, returns workflows, inventory confusion, and manual reporting. PingPal AI builds systems that reduce support load and improve operational speed.",
        problems: [
            "High volume of repetitive customer questions",
            "Manual, slow returns and refund processing",
            "Disconnected inventory and order tracking",
            "Manual reporting that takes hours every week",
            "Inconsistent customer support quality",
        ],
        solutions: [
            { title: "Order status + returns assistant", desc: "Accurate, policy-aligned answers" },
            { title: "Customer support automation", desc: "Ticket enrichment, routing, deflection" },
            { title: "Ops dashboards", desc: "Fulfillment, return rates, common issues" },
            { title: "Internal tools", desc: "Inventory workflows, approvals, catalog processes" },
            { title: "AI insights", desc: "Anomaly detection for spikes/drops and operational flags" },
        ],
        useCases: [
            "AI-powered order status and returns assistant for customers",
            "Automated support ticket enrichment and routing",
            "Real-time inventory and fulfillment dashboards",
            "Automated restock alerts and demand forecasting",
        ],
        cta: "Automate Retail Operations",
    },
    transport: {
        title: "Transport & Taxi Dispatch",
        metaTitle: "Taxi & Transport App Development: Booking, Dispatch, Ops | PingPal AI",
        metaDesc: "Build booking + dispatch platforms with admin dashboards, driver workflows, payments, analytics, and automation. Production-grade, fast delivery.",
        h1: "Booking + dispatch platforms built for real transport operations.",
        heroDesc: "If you're running transport operations, your system needs more than a booking app. It needs dispatch control, driver workflows, admin visibility, and reliable reporting.",
        problems: [
            "Manual booking and dispatch coordination",
            "No real-time visibility into fleet status",
            "Driver apps that are unreliable or hard to use",
            "Pricing and zone rules managed in spreadsheets",
            "Limited analytics on utilization and performance",
        ],
        solutions: [
            { title: "Customer booking", desc: "Web/mobile with real-time availability" },
            { title: "Driver workflows", desc: "Status, accept/complete, navigation support" },
            { title: "Dispatch console", desc: "Rules, overrides, and SLA tracking" },
            { title: "Pricing logic", desc: "Zones, promotions, and dynamic rules" },
            { title: "Admin panel + reporting", desc: "Payments, invoices, receipts, and dashboards" },
        ],
        useCases: [
            "Customer-facing booking with real-time driver tracking",
            "Dispatch dashboard with automated assignment and overrides",
            "Driver mobile app with job queue and navigation",
            "Optional AI layer: support bot, auto-triage, forecasting",
        ],
        cta: "Get a Dispatch Platform Plan",
    },
};

export async function generateStaticParams() {
    return Object.keys(industryData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const data = industryData[slug];
    if (!data) return {};
    return { title: data.metaTitle, description: data.metaDesc };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = industryData[slug];
    if (!data) notFound();

    return (
        <>
            <AmbientBackground />
            <main className="relative z-10 w-full flex flex-col items-center overflow-hidden">

                {/* HERO */}
                <section className="relative w-full max-w-7xl mx-auto px-7 py-32 md:px-12 lg:px-20 lg:py-56 flex flex-col justify-center items-start">
                    <PremiumLabel>{data.title}</PremiumLabel>
                    <AnimatedText
                        as="h1"
                        text={data.h1}
                        className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-[-0.04em] leading-[1.05] mb-8 max-w-5xl text-[color:var(--theme-text)]"
                    />
                    <div className="max-w-3xl">
                        <AnimatedText
                            as="p"
                            delay={0.3}
                            text={data.heroDesc}
                            className="text-lg md:text-xl text-white/50 leading-relaxed mb-12 font-light tracking-wide"
                        />
                    </div>
                </section>

                {/* PROBLEMS */}
                <section className="relative w-full max-w-7xl mx-auto px-7 pb-32 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                        <div className="lg:w-5/12">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-8 h-px bg-red-500/60" />
                                <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-light">Common Problems</span>
                            </div>
                            <AnimatedText
                                as="h2"
                                text="Challenges we solve."
                                className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-8 text-[color:var(--theme-text)]"
                            />
                        </div>
                        <div className="lg:w-7/12 flex flex-col gap-5">
                            {data.problems.map((problem, idx) => (
                                <ScrollReveal key={idx} delay={0} className="flex items-start gap-5 p-5 rounded-xl border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-500">
                                    <div className="w-2 h-2 rounded-full bg-red-500/60 shadow-[0_0_8px_rgba(255,0,0,0.3)] mt-2 flex-shrink-0" />
                                    <p className="text-white/50 text-[15px] font-light leading-relaxed">{problem}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SOLUTIONS */}
                <section className="relative w-full max-w-7xl mx-auto px-7 pb-32 md:px-12 lg:px-20">
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-8 h-px bg-red-500/60" />
                            <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-light">What We Build</span>
                        </div>
                        <AnimatedText
                            as="h2"
                            text={`What PingPal AI builds for ${data.title.toLowerCase()} teams.`}
                            className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-8 text-[color:var(--theme-text)] max-w-4xl"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.solutions.map((sol, idx) => (
                            <ScrollReveal key={idx} delay={0} className="group p-8 rounded-2xl border border-white/[0.04] hover:border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500">
                                <h3 className="text-lg font-medium text-white/90 mb-3 group-hover:text-white transition-colors duration-300">{sol.title}</h3>
                                <p className="text-white/35 text-[15px] font-light leading-relaxed group-hover:text-white/55 transition-colors duration-300">{sol.desc}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* USE CASES */}
                <section className="relative w-full max-w-7xl mx-auto px-7 pb-32 md:px-12 lg:px-20">
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-8 h-px bg-red-500/60" />
                            <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-light">Example Use Cases</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 max-w-3xl">
                        {data.useCases.map((uc, idx) => (
                            <ScrollReveal key={idx} delay={0} className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-500">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 flex-shrink-0" />
                                <p className="text-white/50 text-[15px] font-light leading-relaxed">{uc}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="relative w-full max-w-7xl mx-auto px-7 pb-32 md:px-12 lg:px-20 lg:pb-44">
                    <div className="relative p-10 md:p-16 lg:p-20 rounded-3xl border border-white/[0.05] bg-gradient-to-br from-white/[0.02] to-transparent overflow-hidden text-center">
                        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
                        <div className="relative z-10">
                            <AnimatedText
                                as="h2"
                                text={`Ready to modernize your ${data.title.toLowerCase()} operations?`}
                                className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-8 text-[color:var(--theme-text)]"
                            />
                            <ScrollReveal delay={0.2}>
                                <Link href="/contact">
                                    <PremiumButton primary>
                                        {data.cta} <ArrowRight className="ml-2 w-5 h-5" />
                                    </PremiumButton>
                                </Link>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
