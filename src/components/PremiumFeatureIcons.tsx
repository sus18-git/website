import React from 'react';

// Premium Masterclass Feature Icons
// Meticulously designed on a 32x32 precise geometric grid.
// Adopts a strict 1.5px stroke width for maximum crispness,
// utilizing opacity layers and a distinctive brand-red highlight
// to communicate deep tech and premium engineering. 

export function AgentIcon({ className = "" }: { className?: string }) {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Outer constraint ring (dashed context window) */}
            <circle cx="16" cy="16" r="12" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Orbital active execution path */}
            <path d="M28 16 A 12 12 0 0 1 16 28" stroke="currentColor" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" />

            {/* Interaction nodes */}
            <circle cx="28" cy="16" r="2" fill="currentColor" />
            <circle cx="16" cy="28" r="2" fill="currentColor" />

            {/* Central AI spark (The intelligence core) - Inherits red via class */}
            <path d="M16 8 C16 12 12 16 8 16 C12 16 16 20 16 24 C16 20 20 16 24 16 C20 16 16 12 16 8Z"
                className="fill-red-500/20 stroke-red-500" strokeWidth="1.5" />
        </svg>
    );
}

export function WorkflowIcon({ className = "" }: { className?: string }) {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Top logic node / trigger */}
            <rect x="12" y="6" width="8" height="8" rx="2" stroke="currentColor" strokeOpacity="0.9" strokeWidth="1.5" />
            <circle cx="16" cy="10" r="1.5" fill="currentColor" />

            {/* Precision routing architecture */}
            <path d="M16 14 L16 18" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 18 L22 18" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 18 L10 20" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22 18 L22 20" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />

            {/* Bottom left destination (Automated task complete, high value) */}
            <rect x="6" y="20" width="8" height="8" rx="2" className="fill-red-500/10 stroke-red-500" strokeWidth="1.5" />
            <path d="M8.5 24 L10 25.5 L13.5 22.5" className="stroke-red-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Bottom right destination (Standard workflow path) */}
            <rect x="18" y="20" width="8" height="8" rx="2" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
        </svg>
    );
}

export function AppIcon({ className = "" }: { className?: string }) {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Main Application Interface Container */}
            <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />

            {/* UI Structuring (Sidebar & Header) */}
            <path d="M10 6 L10 26" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
            <path d="M4 12 L28 12" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />

            {/* Sidebar nav indicators */}
            <circle cx="7" cy="16" r="1" fill="currentColor" fillOpacity="0.5" />
            <circle cx="7" cy="20" r="1" fill="currentColor" fillOpacity="0.5" />

            {/* Active High-Value Component (The PingPal custom capability) */}
            <rect x="13" y="15" width="12" height="4" rx="1.5" className="fill-red-500/15 stroke-red-500" strokeWidth="1.5" />

            {/* Secondary content blocks */}
            <rect x="13" y="22" width="7" height="1.5" rx="0.75" fill="currentColor" fillOpacity="0.6" />
            <rect x="22" y="22" width="3" height="1.5" rx="0.75" fill="currentColor" fillOpacity="0.3" />
        </svg>
    );
}

export function DataIcon({ className = "" }: { className?: string }) {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Left Pillar - Raw Data Input (Faded) */}
            <rect x="6" y="12" width="4" height="12" rx="1.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
            <rect x="6" y="8" width="4" height="2" rx="1" fill="currentColor" fillOpacity="0.3" />

            {/* Middle Pillar - Engineering & Processing (Medium structure) */}
            <rect x="14" y="10" width="4" height="14" rx="1.5" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" />
            <rect x="14" y="6" width="4" height="2" rx="1" fill="currentColor" fillOpacity="0.6" />

            {/* Right Pillar - ML Insights & High Value Output (The PingPal Red Focus) */}
            <rect x="22" y="6" width="4" height="18" rx="1.5" className="fill-red-500/10 stroke-red-500" strokeWidth="1.5" />

            {/* The glowing red processing core atop the ML pillar */}
            <rect x="22" y="6" width="4" height="5" rx="1.5" className="fill-red-500" />

            {/* Connective data flow laser line (moving data through the pipeline) */}
            <path d="M8 18 L16 18 M16 14 L24 14" className="stroke-red-500" strokeWidth="1.5" strokeOpacity="0.8" strokeDasharray="1 3" strokeLinecap="round" />
        </svg>
    );
}
