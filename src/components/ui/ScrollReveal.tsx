"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={containerRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

export function AnimatedText({
  text,
  className = "",
  as: Component = "p",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      const lines = containerRef.current.querySelectorAll(".line-reveal");

      gsap.fromTo(
        lines,
        { y: "100%" },
        {
          y: "0%",
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.1,
          delay: delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, text]);

  // Separate gradient-related classes so they apply to the inner text wrapper.
  // Use prefix checks to support arbitrary Tailwind values like from-[var(--theme-text)].
  const gradientClasses = new Set(["text-transparent", "bg-clip-text"]);

  const classTokens = className.split(/\s+/);
  const outerClasses: string[] = [];
  const innerGradientClasses: string[] = [];

  for (const token of classTokens) {
    if (!token) continue;
    const baseToken = token.split(":").pop() ?? token;
    const isGradient =
      gradientClasses.has(baseToken) ||
      baseToken.startsWith("bg-gradient-") ||
      baseToken.startsWith("from-") ||
      baseToken.startsWith("via-") ||
      baseToken.startsWith("to-");
    if (isGradient) {
      innerGradientClasses.push(token);
    } else {
      outerClasses.push(token);
    }
  }

  const words = text.split(" ");

  return (
    <Component ref={containerRef} className={outerClasses.join(" ")}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className={`inline-flex flex-wrap gap-[0.2em] ${innerGradientClasses.join(" ")}`}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-1">
            <span className="inline-block line-reveal translate-y-full will-change-transform">
              {word}
            </span>
          </span>
        ))}
      </span>
    </Component>
  );
}
