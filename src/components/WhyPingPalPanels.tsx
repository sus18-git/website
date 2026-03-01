"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { SpeedIcon, SecurityIcon, LeadershipIcon, CustomOpsIcon, ProductionIcon, LeanPricingIcon } from "@/components/WhyPingPalIcons";

const panels = [
    { id: "speed", icon: <SpeedIcon className="w-full h-full" />, title: "Fast Timelines", desc: "Most MVPs ship in weeks, not quarters. Weekly demos and measurable sprint progress — no hiding behind documentation cycles." },
    { id: "security", icon: <SecurityIcon className="w-full h-full" />, title: "Security by Design", desc: "Every system ships with role-based access, audit logging, data boundaries, and guardrails — privacy and control are engineered from day one." },
    { id: "leadership", icon: <LeadershipIcon className="w-full h-full" />, title: "Senior-Led Execution", desc: "A blend of highly experienced product engineers and next-gen AI specialists. Practical architecture decisions combined with modern AI capability." },
    { id: "custom", icon: <CustomOpsIcon className="w-full h-full" />, title: "Custom to Your Ops", desc: "Every workflow is different. PingPal AI builds around your systems, your roles, your constraints, and your customers — no rigid templates." },
    { id: "production", icon: <ProductionIcon className="w-full h-full" />, title: "Production-First", desc: "We don't ship demos. We ship monitored, tested, production-grade systems your team can depend on — with documentation and training." },
    { id: "lean", icon: <LeanPricingIcon className="w-full h-full" />, title: "Lean Pricing", desc: "You pay for builders, not bureaucracy. Our model is significantly more cost-efficient than traditional IT consultancies — without reducing quality." },
];

function ScrollPanel({ item, idx }: { item: typeof panels[0]; idx: number }) {
    const isEven = idx % 2 === 0;

    // We want the glow to happen automatically as this specific panel scrolls through the center of the screen
    return (
        <motion.div
            initial="inactive"
            whileInView="active"
            viewport={{ margin: "-30% 0px -30% 0px", amount: "some" }}
            variants={{
                inactive: { opacity: 0.3, y: 30 },
                active: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="relative group"
        >
            {/* Central spine node marker (desktop) */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                <motion.div
                    variants={{
                        inactive: { scale: 1, backgroundColor: "rgba(255,255,255,0.2)", boxShadow: "0 0 0 rgba(255,0,0,0)" },
                        active: { scale: 1.2, backgroundColor: "rgba(255,0,0,0.8)", boxShadow: "0 0 24px 8px rgba(255,0,0,0.6)" }
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-3 h-3 rounded-full"
                />
            </div>

            {/* The panel — alternating direction */}
            <div className={`flex flex-col lg:py-16 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-0`}>

                {/* Naked Icon Side - No box, just massive glowing icon */}
                <div className={`lg:w-1/2 flex ${isEven ? 'lg:justify-end lg:pr-32' : 'lg:justify-start lg:pl-32'} items-center relative`}>

                    <motion.div
                        variants={{
                            inactive: { color: "rgba(255,255,255,0.15)", scale: 0.9 },
                            active: { color: "rgba(255,255,255,0.9)", scale: 1 }
                        }}
                        transition={{ duration: 0.8 }}
                        className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex items-center justify-center z-10"
                    >
                        {item.icon}

                        {/* Huge ambient glow directly behind naked icon */}
                        <motion.div
                            variants={{
                                inactive: { opacity: 0, scale: 0.5 },
                                active: { opacity: 1, scale: 1.2 }
                            }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 bg-red-500/10 rounded-full blur-[50px] pointer-events-none"
                        />
                    </motion.div>
                </div>

                {/* Content Side */}
                <div className={`lg:w-1/2 ${isEven ? 'lg:pl-20' : 'lg:pr-20'} text-center lg:text-left`}>
                    <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                        <div className="w-6 h-px bg-red-500/40 hidden lg:block" />
                    </div>
                    <motion.h3
                        variants={{
                            inactive: { color: "rgba(255,255,255,0.3)" },
                            active: { color: "rgba(255,255,255,0.95)" }
                        }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-[2rem] font-semibold tracking-tight mb-5"
                    >
                        {item.title}
                    </motion.h3>
                    <motion.p
                        variants={{
                            inactive: { color: "rgba(255,255,255,0.15)" },
                            active: { color: "rgba(255,255,255,0.6)" }
                        }}
                        transition={{ duration: 0.8 }}
                        className="leading-relaxed font-light text-[15px] md:text-[17px] max-w-md mx-auto lg:mx-0"
                    >
                        {item.desc}
                    </motion.p>
                </div>
            </div>

            {/* Horizontal connector from panel to spine */}
            <motion.div
                variants={{
                    inactive: { opacity: 0.2 },
                    active: { opacity: 1 }
                }}
                className={`hidden lg:block absolute top-1/2 ${isEven ? 'right-1/2 mr-[6px]' : 'left-1/2 ml-[6px]'} w-24 h-px bg-gradient-to-r ${isEven ? 'from-transparent to-red-500/50' : 'from-red-500/50 to-transparent'}`}
            />
        </motion.div>
    );
}

export default function WhyPingPalPanels() {
    return (
        <div className="flex flex-col gap-24 lg:gap-0 relative">
            {/* Central vertical spine (desktop only) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -ml-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent z-0" />

            {panels.map((item, idx) => (
                <ScrollPanel key={item.id} item={item} idx={idx} />
            ))}
        </div>
    );
}
