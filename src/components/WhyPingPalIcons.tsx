import React from 'react';

/**
 * Premium "Why PingPal AI" Icons
 * Masterclass geometric icons on a 32x32 grid.
 * Same design language as PremiumFeatureIcons:
 *   - 1.5px stroke width
 *   - Opacity layers for depth
 *   - Brand-red highlights for active/high-value elements
 *   - Complex inner structures (not simple outlines)
 */

// ⚡ Fast Timelines — Speedometer/gauge with needle at max
export function SpeedIcon({ className = "" }: { className?: string }) {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Outer gauge arc (instrument housing) */}
            <path d="M6 24 A 13 13 0 1 1 26 24" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" />

            {/* Active speed zone (top arc — the fast zone) */}
            <path d="M20 5.5 A 12 12 0 0 1 26 24" className="stroke-red-500" strokeWidth="2" strokeLinecap="round" />

            {/* Tick marks around the gauge */}
            <line x1="16" y1="4" x2="16" y2="6.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="7" y1="10" x2="9" y2="11.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="25" y1="10" x2="23" y2="11.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="5" y1="19" x2="7.5" y2="19" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />

            {/* Needle (pointing to fast zone) */}
            <line x1="16" y1="18" x2="23" y2="10" className="stroke-red-500" strokeWidth="2" strokeLinecap="round" />

            {/* Center pivot */}
            <circle cx="16" cy="18" r="2.5" className="fill-red-500/20 stroke-red-500" strokeWidth="1.5" />
            <circle cx="16" cy="18" r="1" className="fill-red-500" />

            {/* Base platform */}
            <line x1="8" y1="26" x2="24" y2="26" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

// 🛡️ Security by Design — Shield with lock core and circuit traces
export function SecurityIcon({ className = "" }: { className?: string }) {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Outer shield body */}
            <path d="M16 3 L27 8 L27 16 C27 22 22 27 16 29 C10 27 5 22 5 16 L5 8 Z"
                stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" strokeLinejoin="round" />

            {/* Inner shield layer (depth) */}
            <path d="M16 6 L24 9.5 L24 16 C24 20.5 20.5 24.5 16 26 C11.5 24.5 8 20.5 8 16 L8 9.5 Z"
                stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" strokeLinejoin="round" />

            {/* Circuit traces emanating from the lock */}
            <path d="M12 14 L8 14" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 14 L24 14" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M16 20 L16 23" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />

            {/* Lock body (the secure core) */}
            <rect x="12" y="14" width="8" height="6" rx="1.5" className="fill-red-500/10 stroke-red-500" strokeWidth="1.5" />

            {/* Lock shackle */}
            <path d="M13.5 14 L13.5 12 C13.5 10.5 14.5 9.5 16 9.5 C17.5 9.5 18.5 10.5 18.5 12 L18.5 14"
                className="stroke-red-500" strokeWidth="1.5" strokeLinecap="round" />

            {/* Keyhole */}
            <circle cx="16" cy="16.5" r="1" className="fill-red-500" />
            <line x1="16" y1="17.5" x2="16" y2="19" className="stroke-red-500" strokeWidth="1.5" strokeLinecap="round" />

            {/* Energy nodes at circuit endpoints */}
            <circle cx="8" cy="14" r="1" fill="currentColor" fillOpacity="0.4" />
            <circle cx="24" cy="14" r="1" fill="currentColor" fillOpacity="0.4" />
        </svg>
    );
}

// 👥 Senior-Led Execution — Hierarchical org with crown node
export function LeadershipIcon({ className = "" }: { className?: string }) {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Leader node (top, prominent, red-highlighted) */}
            <circle cx="16" cy="8" r="3.5" className="fill-red-500/10 stroke-red-500" strokeWidth="1.5" />
            {/* Crown / spark on the leader */}
            <path d="M14 5.5 L15 7 L16 5 L17 7 L18 5.5" className="stroke-red-500" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

            {/* Connection lines from leader to team */}
            <path d="M16 11.5 L16 15" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M16 15 L8 19" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M16 15 L24 19" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M16 15 L16 19" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />

            {/* Team member nodes */}
            <circle cx="8" cy="21" r="2.5" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
            <circle cx="16" cy="21" r="2.5" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
            <circle cx="24" cy="21" r="2.5" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />

            {/* Execution output lines (team delivering results) */}
            <line x1="8" y1="23.5" x2="8" y2="27" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
            <line x1="16" y1="23.5" x2="16" y2="27" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
            <line x1="24" y1="23.5" x2="24" y2="27" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />

            {/* Delivery base / output platform */}
            <line x1="5" y1="28" x2="27" y2="28" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

// 🛤️ Custom to Your Ops — Adaptive circuit board with branching paths
export function CustomOpsIcon({ className = "" }: { className?: string }) {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Input node (your system) */}
            <circle cx="4" cy="16" r="2" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />

            {/* Main routing path */}
            <path d="M6 16 L10 16" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />

            {/* Central decision hub (the customization engine) */}
            <rect x="10" y="12" width="8" height="8" rx="2" className="fill-red-500/10 stroke-red-500" strokeWidth="1.5" />
            {/* Gear teeth on hub */}
            <circle cx="14" cy="16" r="2" className="stroke-red-500" strokeWidth="1" />
            <line x1="14" y1="13" x2="14" y2="12.5" className="stroke-red-500" strokeWidth="1" strokeLinecap="round" />
            <line x1="14" y1="19" x2="14" y2="19.5" className="stroke-red-500" strokeWidth="1" strokeLinecap="round" />

            {/* Adaptive branching outputs */}
            <path d="M18 14 L22 8" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M18 16 L24 16" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M18 18 L22 24" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />

            {/* Output destination nodes */}
            <circle cx="23" cy="7" r="2" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
            <circle cx="26" cy="16" r="2.5" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" />
            <circle cx="23" cy="25" r="2" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />

            {/* Active data flow indicators */}
            <circle cx="20" cy="10" r="0.8" className="fill-red-500" fillOpacity="0.7" />
            <circle cx="22" cy="16" r="0.8" className="fill-red-500" fillOpacity="0.7" />
            <circle cx="20" cy="22" r="0.8" className="fill-red-500" fillOpacity="0.7" />
        </svg>
    );
}

// 🚀 Production-First — Launch rocket with telemetry lines
export function ProductionIcon({ className = "" }: { className?: string }) {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Launch pad / ground */}
            <line x1="8" y1="28" x2="24" y2="28" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" strokeLinecap="round" />

            {/* Rocket body */}
            <path d="M16 5 C16 5 12 10 12 18 L20 18 C20 10 16 5 16 5Z"
                stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" strokeLinejoin="round" />

            {/* Nose cone highlight */}
            <path d="M16 5 C15 8 14 10 14 12 L18 12 C18 10 17 8 16 5Z"
                className="fill-red-500/15" />

            {/* Side fins */}
            <path d="M12 16 L8 20 L12 18" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M20 16 L24 20 L20 18" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" strokeLinejoin="round" />

            {/* Engine exhaust (thrust flame) */}
            <path d="M14 18 L13 22 L16 20 L19 22 L18 18" className="fill-red-500/20 stroke-red-500" strokeWidth="1.5" strokeLinejoin="round" />

            {/* Telemetry / monitoring lines */}
            <line x1="6" y1="8" x2="11" y2="8" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="round" />
            <line x1="5" y1="11" x2="10" y2="11" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="round" />
            <line x1="21" y1="8" x2="26" y2="8" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="round" />
            <line x1="22" y1="11" x2="27" y2="11" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="round" />

            {/* Monitoring node / status indicator */}
            <circle cx="16" cy="14" r="1.5" className="fill-red-500/30 stroke-red-500" strokeWidth="1" />
        </svg>
    );
}

// 💰 Lean Pricing — Efficiency diamond with minimal structure
export function LeanPricingIcon({ className = "" }: { className?: string }) {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Outer efficiency ring (dashed — representing the overhead you DON'T pay for) */}
            <circle cx="16" cy="16" r="13" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="4 6" />

            {/* Value diamond (core — lean, sharp, efficient) */}
            <path d="M16 6 L24 16 L16 26 L8 16 Z"
                className="fill-red-500/05 stroke-red-500" strokeWidth="1.5" strokeLinejoin="round" />

            {/* Inner diamond (compressed value) */}
            <path d="M16 10 L21 16 L16 22 L11 16 Z"
                stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" strokeLinejoin="round" />

            {/* Efficiency arrows pointing inward (compressing cost) */}
            <path d="M4 16 L7 16" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M5 14.5 L7 16 L5 17.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

            <path d="M28 16 L25 16" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M27 14.5 L25 16 L27 17.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

            {/* Core value node */}
            <circle cx="16" cy="16" r="2" className="fill-red-500/20 stroke-red-500" strokeWidth="1.5" />
            <circle cx="16" cy="16" r="0.8" className="fill-red-500" />

            {/* Value output radiating lines */}
            <line x1="16" y1="3" x2="16" y2="5" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="16" y1="27" x2="16" y2="29" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}
