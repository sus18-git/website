"use client";

import { useRef, useState } from "react";

export function PremiumButton({
  children,
  primary = false,
  className = "",
  onClick,
  type,
}: {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}) {
  const ref = useRef<HTMLButtonElement | HTMLDivElement | null>(null);
  const assignRef = (node: HTMLButtonElement | HTMLDivElement | null) => {
    ref.current = node;
  };
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const sharedClassName = `group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black px-8 font-medium text-white transition-all duration-500 hover:border-white/20 hover:bg-black/80 cursor-pointer ${className}`;

  const innerContent = (
    <>
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      {primary && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: opacity ? 0.6 : 0,
            background: `radial-gradient(120px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.05), transparent 40%)`,
          }}
        />
      )}
      <span className={`relative z-10 flex items-center gap-2 text-xs tracking-[0.15em] uppercase transition-transform duration-500 group-hover:scale-[1.02] ${primary ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
        {children}
      </span>
    </>
  );

  // For form submissions, use a real <button type="submit">
  if (type === "submit") {
    return (
      <button
        type="submit"
        ref={assignRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={sharedClassName}
      >
        {innerContent}
      </button>
    );
  }

  // Default: render as <div role="button"> so it can be nested inside <Link>/<a> without invalid HTML
  return (
    <div
      ref={assignRef}
      role="button"
      tabIndex={0}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick?.(); }}
      className={sharedClassName}
    >
      {innerContent}
    </div>
  );
}
