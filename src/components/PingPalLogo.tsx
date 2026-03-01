/**
 * PingPal Logo — World-Class Iconic Mark
 * 
 * Concept: A masterpiece of simple geometry.
 * 1. The Pillar (Software Foundation) - Solid, bright, structural stem.
 * 2. The Ring (Automation Loop) - Continuous, vibrant, wrapping loop.
 * 3. The Core (AI Intelligence) - Glowing node suspended perfectly in the center void.
 * 
 * Designed with mathematically perfect overlaps, inspired by
 * billion-dollar tech brands (Meta, Stripe, Vercel) for maximum scalability and impact.
 */
export default function PingPalLogo({
    size = 36,
    className = ""
}: {
    size?: number;
    className?: string;
}) {
    const id = `pingpal-logo-${size}`;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                {/* Pillar Gradient: Premium Silver/White */}
                <linearGradient id={`${id}-pillar-grad`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#D4D4D8" />
                </linearGradient>

                {/* Ring Gradient: Sweeping Crimson to Bright Red */}
                <linearGradient id={`${id}-ring-grad`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FF4D4D" />
                    <stop offset="50%" stopColor="#DC2626" />
                    <stop offset="100%" stopColor="#7F1D1D" />
                </linearGradient>

                {/* Core Glowing Gradient */}
                <radialGradient id={`${id}-core-grad`} cx="0.3" cy="0.3" r="0.7">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="35%" stopColor="#FF6666" />
                    <stop offset="100%" stopColor="#B30000" />
                </radialGradient>

                {/* Drop Shadow to explicitly lift the Pillar off the Ring (3D effect) */}
                <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2.5" dy="1.5" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.45" />
                </filter>

                {/* Core Base Shadow */}
                <filter id={`${id}-core-glow`} x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <g>
                {/* 1. BACK: The Automation Ring */}
                {/* Perfectly centered at x=32, y=29. Radius 14, stroke 12 -> Outer bounds 52, Inner void diameter 16 */}
                <circle
                    cx="32"
                    cy="29"
                    r="14"
                    stroke={`url(#${id}-ring-grad)`}
                    strokeWidth="12"
                    fill="none"
                />

                {/* 2. MIDDLE: The Intelligence Core */}
                {/* Suspended in the exact center of the ring's inner void, radius 5 creates a 3px gap to the ring */}
                <circle
                    cx="32"
                    cy="29"
                    r="5"
                    fill={`url(#${id}-core-grad)`}
                />

                {/* Subtle red energy glow under the core */}
                <circle
                    cx="32"
                    cy="29"
                    r="5"
                    fill="#DC2626"
                    opacity="0.5"
                    filter={`url(#${id}-core-glow)`}
                    className="mix-blend-screen"
                />

                {/* 3. FRONT: The Software Pillar */}
                {/* Extends exactly from the left edge of the ring to perfectly cover the left half. Casts a heavy shadow onto the ring behind it. */}
                <rect
                    x="12"
                    y="9"
                    width="12"
                    height="46"
                    rx="6"
                    fill={`url(#${id}-pillar-grad)`}
                    filter={`url(#${id}-shadow)`}
                />
            </g>
        </svg>
    );
}

/**
 * Full PingPal wordmark with logo
 */
export function PingPalWordmark({
    logoSize = 36,
    className = ""
}: {
    logoSize?: number;
    className?: string;
}) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <PingPalLogo size={logoSize} />
            <span className="text-white font-semibold text-lg tracking-tight">
                Ping<span className="text-red-500">Pal</span> AI
            </span>
        </div>
    );
}
