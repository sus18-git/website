import AmbientBackground from "@/components/AmbientBackground";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { PremiumLabel } from "@/components/ui/PremiumLabel";
import { AnimatedText, ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "About PingPal AI | Senior Builders + Next-Gen AI Execution",
    description: "PingPal AI is a collective of highly experienced product engineers and new-generation AI professionals. We build fast, production-ready AI and software.",
};

export default function About() {
    return (
        <>
            <AmbientBackground />

            <main className="relative z-10 w-full flex flex-col items-center overflow-hidden">

                {/* HERO */}
                <section className="relative w-full max-w-7xl mx-auto px-7 py-32 md:px-12 lg:px-20 lg:py-56 flex flex-col justify-center items-start">
                    <PremiumLabel>About PingPal AI</PremiumLabel>
                    <AnimatedText
                        as="h1"
                        text="Built by senior product engineers and next-gen AI specialists."
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.04em] leading-[1.05] mb-8 max-w-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70"
                    />
                    <div className="max-w-3xl">
                        <AnimatedText
                            as="p"
                            delay={0.3}
                            text="PingPal AI is a collective of builders who have shipped real systems — apps, platforms, automation, and AI — under real-world constraints. We combine deep engineering fundamentals with modern AI capability, so you get solutions that are both innovative and dependable."
                            className="text-lg md:text-xl text-white/50 leading-relaxed mb-12 font-light tracking-wide"
                        />
                    </div>
                </section>

                {/* BELIEFS */}
                <section className="relative w-full max-w-7xl mx-auto px-7 pb-32 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                        <div className="lg:w-5/12">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-8 h-px bg-red-500/60" />
                                <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-light">What We Believe</span>
                            </div>
                            <AnimatedText
                                as="h2"
                                text="Principles that guide every build."
                                className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70"
                            />
                        </div>

                        <div className="lg:w-7/12 flex flex-col gap-6">
                            {[
                                { title: "Impact over buzzwords", desc: "We measure success by operational improvement, not slide decks. Every build targets a measurable outcome." },
                                { title: "Fast delivery, high quality", desc: "Speed and quality are not opposites. Our lean model eliminates overhead, not engineering standards." },
                                { title: "Systems that teams can run", desc: "We build for adoption. Documentation, training, and maintainability are part of every delivery." },
                                { title: "Security & privacy by design", desc: "Role-based access, audit logs, data boundaries, and guardrails are architected from day one — not bolted on later." },
                                { title: "Partnership over transactions", desc: "We invest in long-term relationships. Your success is our momentum." },
                            ].map((item, idx) => (
                                <ScrollReveal key={idx} delay={0} className="group flex items-start gap-5 p-6 rounded-xl border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-500">
                                    <div className="w-2 h-2 rounded-full bg-red-500/60 shadow-[0_0_8px_rgba(255,0,0,0.3)] mt-2 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-medium text-white/90 mb-2">{item.title}</h3>
                                        <p className="text-white/35 text-[15px] font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MUTUAL WIN */}
                <section className="relative w-full max-w-7xl mx-auto px-7 pb-32 md:px-12 lg:px-20 lg:pb-44">
                    <div className="relative p-10 md:p-16 lg:p-20 rounded-3xl border border-white/[0.05] bg-gradient-to-br from-white/[0.02] to-transparent overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

                        <div className="relative z-10 max-w-3xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-8 h-px bg-red-500/60" />
                                <span className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-light">The Mutual Win</span>
                            </div>

                            <AnimatedText
                                as="h2"
                                text="Enterprise-grade delivery at a lean cost."
                                className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70"
                            />

                            <p className="text-white/40 leading-relaxed font-light text-lg mb-10">
                                When you work with PingPal AI, you get enterprise-grade delivery at a lean cost — and you help fuel a bigger long-term vision: building a world-class engineering collective from the ground up through real, high-impact projects.
                            </p>

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
            </main>
        </>
    );
}
