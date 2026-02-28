import AmbientBackground from "@/components/AmbientBackground";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { PremiumLabel } from "@/components/ui/PremiumLabel";
import { AnimatedText, ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      <AmbientBackground />

      <main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <section className="relative w-full max-w-7xl mx-auto px-7 py-32 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="flex flex-col justify-center">
            <PremiumLabel>Contact</PremiumLabel>
            <AnimatedText 
              as="h1" 
              text="Architect your next advantage." 
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70"
            />
            <AnimatedText 
              as="p" 
              delay={0.3}
              text="Provide the parameters of your operational bottleneck or product vision. Our engineering team will return a lean, production-ready execution plan." 
              className="text-lg md:text-xl text-white/50 leading-relaxed mb-16 font-light"
            />

            <ScrollReveal delay={0.6} className="space-y-8">
              <div className="flex items-center gap-6 text-white/50 hover:text-white transition-colors group cursor-pointer w-fit">
                <div className="w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-accent/40 group-hover:shadow-[0_0_30px_rgba(100,100,255,0.15)] transition-all duration-500">
                  <Mail className="w-5 h-5 group-hover:text-accent transition-colors" />
                </div>
                <span className="text-lg font-light tracking-wide">hello@pingpal.dev</span>
              </div>
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
              <h3 className="text-2xl font-medium tracking-wide text-white/90">Initialize Request</h3>
              <form className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em]">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors font-light text-lg"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em]">Corporate Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors font-light text-lg"
                    placeholder="name@company.com"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em]">Operational Objective</label>
                  <textarea 
                    rows={3}
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors resize-none font-light text-lg"
                    placeholder="Briefly describe the system or automation required..."
                  />
                </div>
                <div className="mt-4">
                  <PremiumButton primary className="w-full">
                    Transmit Requirements <ArrowRight className="ml-2 w-5 h-5" />
                  </PremiumButton>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </>
  );
}
