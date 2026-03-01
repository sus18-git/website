import AmbientBackground from "@/components/AmbientBackground";
import { PremiumLabel } from "@/components/ui/PremiumLabel";
import { AnimatedText, ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | PingPal AI",
    description: "Answers to common questions about AI chatbots, workflow automation, integrations, pricing, security, and how PingPal AI delivers production-ready systems.",
};

const faqs = [
    { q: "What's the difference between an AI chatbot and an AI agent?", a: "An AI chatbot is primarily designed to answer questions and guide users through a conversation. It's great for FAQs, basic support, product discovery, and document-based Q&A. An AI agent goes further: it can take actions inside your tools — create tickets, update CRM fields, generate quotes, schedule appointments, trigger workflows, or produce reports. PingPal AI builds both and recommends the right approach based on your workflow." },
    { q: "How much does it cost to build an AI chatbot for a business?", a: "AI chatbot cost depends on scope, integrations, data readiness, and quality requirements. PingPal AI's delivery model is intentionally lean, which often makes builds significantly more cost-efficient than traditional IT consultancies, without reducing quality. The fastest way to get a realistic estimate is a short discovery where we map your workflow and define success metrics." },
    { q: "How long does it take to build and launch an AI chatbot?", a: "A practical build timeline usually looks like: Week 1 — discovery + workflow design + data collection. Weeks 2–3 — MVP build + knowledge grounding + core flows. Week 4 — testing, guardrails, escalation rules, and rollout. If integrations are complex, timelines increase — but the key is still shipping a working version early, then iterating quickly." },
    { q: "Can an AI chatbot use my company documents and answer accurately?", a: "Yes — when built correctly. The best practice is knowledge grounding, often called RAG (Retrieval-Augmented Generation). Instead of guessing, the chatbot retrieves relevant information from your documents (SOPs, policies, pricing sheets, manuals) and answers using that content. PingPal AI sets up a clean knowledge pipeline: document ingestion, chunking, search relevance, and quality evaluation." },
    { q: "How do you prevent hallucinations in AI systems?", a: "You don't promise zero hallucinations — you engineer the system to reduce risk and control outcomes. This includes grounding answers in documents (RAG), guardrails for restricted topics, tool-based actions, confidence checks and fallbacks, human escalation for complex requests, and continuous testing and monitoring. PingPal AI treats accuracy like a product requirement." },
    { q: "Can you integrate an AI agent with CRM and ticketing tools?", a: "Yes. Common integrations include CRMs, ticketing systems, email/WhatsApp flows, databases, internal admin panels, payment tools, scheduling systems, and custom APIs. PingPal AI designs these systems with clear permissions and audit trails so the agent can move work forward while keeping operations safe and traceable." },
    { q: "What workflows should I automate first to get ROI quickly?", a: "The best automation targets are high-frequency, rules-heavy workflows. Strong first candidates include: support triage and ticket enrichment, lead qualification and follow-ups, report generation and KPI dashboards, booking/reminders/confirmations, internal approvals and escalations, and document intake and structured data extraction." },
    { q: "What is RAG (Retrieval-Augmented Generation) and why does it matter?", a: "RAG is a method that makes AI answers more accurate by retrieving relevant information from your own knowledge sources (documents, FAQs, product sheets, SOPs) and using that content to generate the response. It improves maintainability because when knowledge changes, you update the content source — not the entire system." },
    { q: "Should I fine-tune a model or use RAG?", a: "Most business use cases should start with RAG, not fine-tuning. RAG is faster to build, easier to update, and typically delivers strong accuracy. Fine-tuning makes sense when you need consistent style, specialized behavior, or domain-specific patterns. PingPal AI often uses a hybrid approach: start with RAG for speed, then selectively fine-tune once usage data is available." },
    { q: "Can you build WhatsApp chatbots or multichannel AI assistants?", a: "Yes. Many customer workflows live inside messaging: WhatsApp, web chat, email, and sometimes voice. PingPal AI designs multichannel assistants to match your operational reality. A WhatsApp flow can capture intent, validate details, open a ticket, send confirmations, and escalate to a human — all while logging everything in your existing systems." },
    { q: "Is it safe to use AI with customer data?", a: "It can be safe — if privacy and security are engineered from the start. Production systems require role-based access, data minimization, audit logs, clear retention rules, redaction for sensitive fields, and policy enforcement. PingPal AI builds with a security-first mindset, defining what data is allowed, what must be masked, and what should never be exposed." },
    { q: "Can you modernize a legacy system without rewriting everything?", a: "Yes — and that's usually the smartest approach. A practical modernization plan includes automating the most painful manual steps first, building APIs around legacy data, introducing dashboards to replace spreadsheets, adding AI assistants to reduce load, and migrating modules step-by-step. PingPal AI delivers modernization in phases so you see improvements early and reduce risk." },
    { q: "Can you build a taxi/transport app with booking + dispatch + operations?", a: "Yes. A production-ready transport platform includes customer booking interface, driver app or workflow module, dispatch dashboard for operations, pricing and routing rules, payments and receipts, support tools, and analytics. PingPal AI builds these around real operations — not generic templates." },
    { q: "Do you work with small businesses or solo operators?", a: "Yes. The size of your business doesn't change the value of good systems — it changes what you build first. For smaller teams, the best solution is often a targeted automation that saves hours every week and removes bottlenecks. PingPal AI's model is built to serve both lean teams and large operations." },
    { q: "What do we need to start a project with PingPal AI?", a: "You don't need a perfect spec. To start, we only need: your business goal, a short description of the current workflow, the tools you use today, and any constraints (timeline, security, integrations). PingPal AI runs a short discovery to map the workflow and identify the highest-ROI build path." },
    { q: "Can you automate reporting and dashboards?", a: "Yes. Reporting automation is one of the highest ROI upgrades because it eliminates repeated manual work and reduces decision delays. Common builds include operational dashboards, sales dashboards, finance/collections views, and inventory reporting. PingPal AI builds reporting systems that people actually trust." },
    { q: "What does 'production-ready' mean for AI and software?", a: "Production-ready means it works reliably in real operations, not just in a demo. This includes reliable deployments, monitoring and alerting, error handling, role-based access, security boundaries, performance testing, documentation and training, and a plan for maintenance and iteration." },
    { q: "How do you measure ROI for automation and AI?", a: "ROI is measurable. Common metrics include: time saved per workflow, reduction in manual errors, faster turnaround time, higher lead conversion, reduced support ticket volume, higher CSAT, and fewer operational escalations. PingPal AI starts by defining baseline metrics and success targets, then builds in phases to validate ROI early." },
    { q: "Can you build internal tools to replace spreadsheets?", a: "Yes — this is one of the most common modernization wins. A lightweight internal tool can provide clean data entry, role-based access, activity history, searchable records, automated reminders, and integrations with CRM/ERP. If your team spends hours updating spreadsheets weekly, replacing them often pays back quickly." },
    { q: "Do you offer ongoing support after launch?", a: "Yes. Most systems improve after launch because real usage reveals the best next steps. PingPal AI can support ongoing iteration, monitoring, reliability improvements, feature expansion, and new automation workflows. We can also design the system so your internal team takes over cleanly with documentation and handover support." },
];

export default function FAQ() {
    return (
        <>
            <AmbientBackground />

            <main className="relative z-10 w-full flex flex-col items-center overflow-hidden">

                {/* HERO */}
                <section className="relative w-full max-w-7xl mx-auto px-7 py-32 md:px-12 lg:px-20 lg:py-56 flex flex-col justify-center items-start">
                    <PremiumLabel>FAQ</PremiumLabel>
                    <AnimatedText
                        as="h1"
                        text="Frequently asked questions."
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.04em] leading-[1.05] mb-8 max-w-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70"
                    />
                    <div className="max-w-3xl">
                        <AnimatedText
                            as="p"
                            delay={0.3}
                            text="Straight answers about AI chatbots, workflow automation, integrations, pricing, timelines, and how PingPal AI delivers production-ready systems."
                            className="text-lg md:text-xl text-white/50 leading-relaxed mb-12 font-light tracking-wide"
                        />
                    </div>
                </section>

                {/* FAQ LIST */}
                <section className="relative w-full max-w-4xl mx-auto px-7 pb-32 md:px-12 lg:px-20 lg:pb-44">
                    <div className="flex flex-col gap-0">
                        {faqs.map((faq, idx) => (
                            <ScrollReveal key={idx} delay={0} className="border-b border-white/[0.05] last:border-b-0">
                                <details className="group py-8">
                                    <summary className="flex justify-between items-start cursor-pointer list-none gap-8">
                                        <h3 className="text-lg font-medium text-white/80 group-open:text-white transition-colors duration-300">{faq.q}</h3>
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-open:text-red-500 group-open:border-red-500/30 transition-all duration-300 group-open:rotate-45 text-lg leading-none mt-0.5">+</span>
                                    </summary>
                                    <p className="mt-4 text-white/40 leading-relaxed font-light text-[15px] max-w-3xl">{faq.a}</p>
                                </details>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            </main>

            {/* FAQ Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map((faq) => ({
                            "@type": "Question",
                            name: faq.q,
                            acceptedAnswer: { "@type": "Answer", text: faq.a },
                        })),
                    }),
                }}
            />
        </>
    );
}
