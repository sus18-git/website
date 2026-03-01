"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import PingPalLogo from "@/components/PingPalLogo";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-500"
            style={{
                backgroundColor: scrolled ? "var(--theme-nav-bg)" : "var(--theme-nav-bg-idle)",
                borderBottom: `1px solid ${scrolled ? "var(--theme-nav-border)" : "var(--theme-nav-border-idle)"}`,
                boxShadow: scrolled ? "var(--theme-shadow)" : "none",
            }}
        >
            <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-[72px]">

                {/* Logo + Brand Name */}
                <Link href="/" className="flex items-center gap-3 group">
                    <PingPalLogo size={38} className="group-hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.4)] transition-all duration-500" />
                    <span className="text-white font-semibold text-lg tracking-tight">
                        Ping<span className="text-red-500">Pal</span> AI
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative px-4 py-2 text-[13px] tracking-wide text-white/50 hover:text-white transition-colors duration-300 uppercase font-medium group"
                        >
                            {link.label}
                            {/* Underline indicator on hover */}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-red-500 group-hover:w-[60%] transition-all duration-300" />
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA + Theme Toggle */}
                <div className="hidden md:flex items-center gap-3">
                    <ThemeToggle />
                    <Link href="/contact">
                        <div role="button" tabIndex={0} className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-6 font-medium text-white transition-all duration-500 hover:border-red-500/40 hover:bg-red-500/10 hover:shadow-[0_0_20px_rgba(255,0,0,0.15)]">
                            <span className="relative z-10 flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-white/70 group-hover:text-white transition-colors duration-300">
                                Start a Project <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </nav>

            {/* Mobile Dropdown */}
            {mobileOpen && (
                <div className="md:hidden glass-nav bg-black/80 border-t border-white/[0.06] px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-sm tracking-wide text-white/60 hover:text-white transition-colors uppercase font-medium py-2"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="flex items-center justify-between mt-2 gap-4">
                        <ThemeToggle />
                        <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex-1">
                            <div role="button" tabIndex={0} className="w-full h-12 rounded-full border border-red-500/30 bg-red-500/10 text-white text-xs tracking-[0.18em] uppercase flex items-center justify-center gap-2">
                                Start a Project <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
