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
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      elementsRef.current.forEach((el, index) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            delay: delay + index * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={containerRef} className={className}>
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
  as?: any;
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
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, text]);

  // Simple line splitting by words for illustration. In a real complex app, SplitText is better,
  // but we'll approximate a line-by-line masked effect with words.
  const words = text.split(" ");

  return (
    <Component ref={containerRef} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex flex-wrap gap-[0.2em]">
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
