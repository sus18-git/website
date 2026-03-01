"use client";

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════
   ThemeProvider
   
   1. Reads saved preference from localStorage
   2. Falls back to prefers-color-scheme media query
   3. Sets data-theme attribute on <html>
   4. Provides React context for ThemeToggle
   
   Scalable: add more themes by extending the Theme type
   and adding matching [data-theme="..."] blocks in globals.css
   ═══════════════════════════════════════════════════════════════ */

type Theme = "dark" | "light";

interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "pingpal-theme";

function getSystemPreference(): Theme {
    if (typeof window === "undefined") return "dark";
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function getSavedTheme(): Theme | null {
    if (typeof window === "undefined") return null;
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === "dark" || saved === "light") return saved;
    } catch {
        // localStorage not available (SSR, restricted environments)
    }
    return null;
}

function applyTheme(theme: Theme) {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);

    // Also toggle Tailwind "dark" class for shadcn compatibility
    if (theme === "dark") {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(() => getSavedTheme() ?? getSystemPreference());

    // Keep the DOM theme attribute in sync with React state.
    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    // Listen for system preference changes (if no user override exists)
    useEffect(() => {
        const mql = window.matchMedia("(prefers-color-scheme: light)");

        const handler = (e: MediaQueryListEvent) => {
            // Only auto-switch if user hasn't manually chosen
            if (!getSavedTheme()) {
                const next = e.matches ? "light" : "dark";
                setThemeState(next);
                applyTheme(next);
            }
        };

        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);

    const setTheme = useCallback((next: Theme) => {
        setThemeState(next);
        applyTheme(next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // localStorage not available
        }
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(theme === "dark" ? "light" : "dark");
    }, [theme, setTheme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    // Return a safe default during SSR or when not yet mounted
    if (!context) {
        return {
            theme: "dark" as Theme,
            setTheme: () => { },
            toggleTheme: () => { },
        };
    }
    return context;
}
