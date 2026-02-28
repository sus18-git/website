"use client";

import { motion } from "framer-motion";

export function DataFlowCircuit() {
  return (
    <div className="relative w-full h-full flex items-center justify-center opacity-40 overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* System Architecture Paths */}
        <path d="M -100 200 L 200 200 L 300 100 L 500 100 L 600 250 L 900 250 L 1000 150 L 1300 150" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M -100 100 L 100 100 L 200 250 L 400 250 L 500 150 L 800 150 L 900 300 L 1300 300" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M -100 300 L 150 300 L 250 150 L 450 150 L 550 50 L 850 50 L 950 200 L 1300 200" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
        
        {/* Node Intersections */}
        {[
          { cx: 200, cy: 200 }, { cx: 300, cy: 100 }, { cx: 500, cy: 100 }, { cx: 600, cy: 250 }, { cx: 900, cy: 250 }, { cx: 1000, cy: 150 },
          { cx: 100, cy: 100 }, { cx: 200, cy: 250 }, { cx: 400, cy: 250 }, { cx: 500, cy: 150 }, { cx: 800, cy: 150 }, { cx: 900, cy: 300 }
        ].map((node, i) => (
          <circle key={i} cx={node.cx} cy={node.cy} r="2" fill="#ffffff" fillOpacity="0.3" />
        ))}

        {/* Data Pulses moving along paths */}
        <motion.circle r="3" fill="#818cf8" filter="drop-shadow(0 0 6px #818cf8)">
          <animateMotion 
            dur="6s" 
            repeatCount="indefinite" 
            path="M -100 200 L 200 200 L 300 100 L 500 100 L 600 250 L 900 250 L 1000 150 L 1300 150" 
          />
        </motion.circle>
        
        <motion.circle r="3" fill="#c7d2fe" filter="drop-shadow(0 0 6px #c7d2fe)">
          <animateMotion 
            dur="8s" 
            begin="2s"
            repeatCount="indefinite" 
            path="M -100 100 L 100 100 L 200 250 L 400 250 L 500 150 L 800 150 L 900 300 L 1300 300" 
          />
        </motion.circle>

        <motion.circle r="2" fill="#6366f1" filter="drop-shadow(0 0 4px #6366f1)">
          <animateMotion 
            dur="5s" 
            begin="1s"
            repeatCount="indefinite" 
            path="M -100 300 L 150 300 L 250 150 L 450 150 L 550 50 L 850 50 L 950 200 L 1300 200" 
          />
        </motion.circle>
      </svg>
      {/* Edge Fades */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
    </div>
  );
}