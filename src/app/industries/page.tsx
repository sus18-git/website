import AmbientBackground from "@/components/AmbientBackground";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { PremiumLabel } from "@/components/ui/PremiumLabel";
import { AnimatedText, ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "AI Solutions by Industry | PingPal AI",
    description: "PingPal AI builds AI automation and custom software across industries — insurance, hospitality, logistics, retail, transport, and more.",
};

const industries = [
    {
        slug: "insurance",
        title: "Insurance",
        desc: "Claims intake, policy Q&A, agent copilots, document processing, fraud signals, customer self-service.",
        cta: "Get an Insurance Build Plan",
    },
    {
        slug: "hospitality",
        title: "Hospitality & Hotels",
        desc: "Guest support, booking assistance, concierge bots, upsell automation, staff workflows, operational dashboards.",
        cta: "Build a Guest Experience System",
    },
    {
        slug: "fleet-logistics",
        title: "Fleet & Logistics",
        desc: "Dispatch support, driver workflows, route operations, tracking dashboards, maintenance alerts, automated reporting.",
        cta: "Get a Fleet Automation Plan",
    },
    {
        slug: "retail",
        title: "Retail & D2C",
        desc: "Support automation, order status systems, returns workflows, product discovery bots, inventory insights.",
        cta: "Automate Retail Operations",
    },
    {
        slug: "transport",
        title: "Transport & Taxi Dispatch",
        desc: "Booking + dispatch platforms with admin dashboards, driver workflows, payments, analytics, and automation.",
        cta: "Get a Dispatch Platform Plan",
    },
];

export default function Industries() {
    return (
        <>
            <AmbientBackground />

            <main className="relative z-10 w-full flex flex-col items-center overflow-hidden">

                {/* HERO */}
                <section className="relative w-full max-w-7xl mx-auto px-7 py-32 md:px-12 lg:px-20 lg:py-56 flex flex-col justify-center items-start">
                    <PremiumLabel>Industries</PremiumLabel>
                    <AnimatedText
                        as="h1"
                        text="AI automation and custom software across industries."
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.04em] leading-[1.05] mb-8 max-w-5xl text-[color:var(--theme-text)]"
                    />
                    <div className="max-w-3xl">
                        <AnimatedText
                            as="p"
                            delay={0.3}
                            text="Operational problems repeat across industries: manual work, slow handoffs, disconnected systems, and knowledge trapped in documents. We modernize workflows with AI chatbots, automation, and custom platforms — built around how your business actually runs."
                            className="text-lg md:text-xl text-white/50 leading-relaxed mb-12 font-light tracking-wide"
                        />
                    </div>
                </section>

                {/* INDUSTRY CARDS */}
                <section className="relative w-full max-w-7xl mx-auto px-7 pb-32 md:px-12 lg:px-20 grid grid-cols-1 gap-12 lg:gap-16">
                    {industries.map((industry, idx) => (
                        <ScrollReveal key={idx} delay={0} className="group">
                            <Link href={`/industries/${industry.slug}`}>
                                <div className="relative p-8 md:p-12 lg:p-16 rounded-[2rem] border border-white/[0.04] hover:border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-700 overflow-hidden">
                                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-500/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                                        <div className="flex-1">
                                            <span className="text-[10px] tracking-[0.25em] uppercase text-red-500/60 font-medium mb-4 block">{String(idx + 1).padStart(2, "0")}</span>
                                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors duration-500 mb-4">
                                                {industry.title}
                                            </h2>
                                            <p className="text-white/40 leading-relaxed font-light text-base md:text-lg max-w-xl group-hover:text-white/60 transition-colors duration-500">
                                                {industry.desc}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <PremiumButton>
                                                {industry.cta} <ArrowRight className="ml-2 w-4 h-4" />
                                            </PremiumButton>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </section>
            </main>
        </>
    );
}
