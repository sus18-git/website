"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   ThemeToggle — Animated Sun/Moon button
   
   Placed inside the Navbar. Uses the ThemeProvider context.
   Smooth icon transition with scale + rotate animation.
   ═══════════════════════════════════════════════════════════════ */

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="relative w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:border-white/20 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300 overflow-hidden group"
        >
            {/* Sun icon */}
            <Sun
                className={`absolute w-4 h-4 transition-all duration-500 ease-out ${theme === "light"
                        ? "opacity-100 rotate-0 scale-100 text-amber-500"
                        : "opacity-0 rotate-90 scale-50 text-white/40"
                    }`}
            />
            {/* Moon icon */}
            <Moon
                className={`absolute w-4 h-4 transition-all duration-500 ease-out ${theme === "dark"
                        ? "opacity-100 rotate-0 scale-100 text-white/70 group-hover:text-white"
                        : "opacity-0 -rotate-90 scale-50 text-white/40"
                    }`}
            />
        </button>
    );
}
