"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Complex DNA Helix — Production-Grade 3D Wireframe
 * 
 * Architecture:
 * 1. Double-helix backbone strands rendered as continuous tube geometry
 * 2. 60+ base-pair rungs connecting the two strands  
 * 3. Varying node sizes with brand-red energy nodes at key intervals
 * 4. Outer orbital scan rings that rotate independently
 * 5. Free-floating ambient particle field (200+ particles)
 * 6. Energy pulse nodes that travel along the backbone
 * 7. Cross-link data-flow lines connecting random distant nodes
 */

// Generate a helix curve for the backbone
function createHelixCurve(strandOffset: number, segments: number, radius: number, height: number, twists: number): THREE.Vector3[] {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const angle = t * Math.PI * 2 * twists + strandOffset;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (t - 0.5) * height;
        points.push(new THREE.Vector3(x, y, z));
    }
    return points;
}

function HelixBackbone({ strandOffset, color, emissiveColor, emissiveIntensity }: {
    strandOffset: number;
    color: string;
    emissiveColor: string;
    emissiveIntensity: number;
}) {
    const points = useMemo(() => createHelixCurve(strandOffset, 300, 1.2, 18, 5), [strandOffset]);
    const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);

    return (
        <mesh>
            <tubeGeometry args={[curve, 300, 0.025, 8, false]} />
            <meshStandardMaterial
                color={color}
                emissive={emissiveColor}
                emissiveIntensity={emissiveIntensity}
                transparent
                opacity={0.7}
                roughness={0.3}
                metalness={0.5}
            />
        </mesh>
    );
}

function DNAConstruct() {
    const groupRef = useRef<THREE.Group>(null);
    const outerRingsRef = useRef<THREE.Group>(null);
    const particleRef = useRef<THREE.Points>(null);
    const pulseRef = useRef<THREE.Group>(null);

    const basePairs = 65;
    const radius = 1.2;
    const height = 18;
    const twists = 5;

    // Pre-compute all base pair positions and connections
    const { nodes, rungs, crossLinks, energyNodes } = useMemo(() => {
        const n: React.JSX.Element[] = [];
        const r: React.JSX.Element[] = [];
        const cl: React.JSX.Element[] = [];
        const en: React.JSX.Element[] = [];

        const allPositionsA: THREE.Vector3[] = [];
        const allPositionsB: THREE.Vector3[] = [];

        for (let i = 0; i < basePairs; i++) {
            const t = i / basePairs;
            const angle = t * Math.PI * 2 * twists;
            const y = (t - 0.5) * height;

            const x1 = Math.cos(angle) * radius;
            const z1 = Math.sin(angle) * radius;
            const x2 = Math.cos(angle + Math.PI) * radius;
            const z2 = Math.sin(angle + Math.PI) * radius;

            allPositionsA.push(new THREE.Vector3(x1, y, z1));
            allPositionsB.push(new THREE.Vector3(x2, y, z2));

            // Determine node types
            const isPrimaryRed = i % 4 === 0;
            const isSecondaryRed = i % 6 === 0;
            const isMajorNode = i % 8 === 0;
            const nodeRadius = isMajorNode ? 0.1 : 0.06;

            // Strand A node
            n.push(
                <mesh key={`a-${i}`} position={[x1, y, z1]}>
                    <sphereGeometry args={[nodeRadius, 16, 16]} />
                    <meshStandardMaterial
                        color={isPrimaryRed ? "#ff2020" : "#e0e0e0"}
                        emissive={isPrimaryRed ? "#ff0000" : "#ffffff"}
                        emissiveIntensity={isPrimaryRed ? 2.0 : 0.3}
                        roughness={0.15}
                        metalness={0.6}
                    />
                </mesh>
            );

            // Strand B node
            n.push(
                <mesh key={`b-${i}`} position={[x2, y, z2]}>
                    <sphereGeometry args={[nodeRadius, 16, 16]} />
                    <meshStandardMaterial
                        color={isSecondaryRed ? "#ff2020" : "#c0c0c0"}
                        emissive={isSecondaryRed ? "#ff0000" : "#ffffff"}
                        emissiveIntensity={isSecondaryRed ? 2.0 : 0.2}
                        roughness={0.15}
                        metalness={0.6}
                    />
                </mesh>
            );

            // Base pair rung (connecting line)
            if (i % 2 === 0) {
                const midX = (x1 + x2) / 2;
                const midZ = (z1 + z2) / 2;
                const dx = x2 - x1;
                const dz = z2 - z1;
                const len = Math.sqrt(dx * dx + dz * dz);
                const rotAngle = Math.atan2(dz, dx);

                r.push(
                    <mesh key={`rung-${i}`} position={[midX, y, midZ]} rotation={[0, -rotAngle, Math.PI / 2]}>
                        <cylinderGeometry args={[0.012, 0.012, len, 6]} />
                        <meshStandardMaterial color="#ffffff" transparent opacity={isPrimaryRed ? 0.35 : 0.12} emissive={isPrimaryRed ? "#ff0000" : "#444444"} emissiveIntensity={isPrimaryRed ? 0.5 : 0.1} />
                    </mesh>
                );
            }

            // Major energy nodes (larger glowing spheres at key positions)
            if (isMajorNode) {
                en.push(
                    <mesh key={`energy-${i}`} position={[x1, y, z1]}>
                        <sphereGeometry args={[0.18, 24, 24]} />
                        <meshStandardMaterial color="#ff0000" transparent opacity={0.15} emissive="#ff0000" emissiveIntensity={3} />
                    </mesh>
                );
            }
        }

        // Cross-link data flows — long diagonal connections across distant nodes
        const crossPairs = [[3, 18], [12, 35], [22, 48], [8, 42], [30, 55], [15, 50], [5, 38], [25, 58]];
        crossPairs.forEach(([a, b], idx) => {
            if (a < basePairs && b < basePairs) {
                const pA = allPositionsA[a];
                const pB = allPositionsB[b];
                const mid = new THREE.Vector3().lerpVectors(pA, pB, 0.5);
                const dir = new THREE.Vector3().subVectors(pB, pA);
                const len = dir.length();
                dir.normalize();

                // Calculate rotation to align cylinder
                const quaternion = new THREE.Quaternion();
                quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
                const euler = new THREE.Euler().setFromQuaternion(quaternion);

                cl.push(
                    <mesh key={`cross-${idx}`} position={[mid.x, mid.y, mid.z]} rotation={euler}>
                        <cylinderGeometry args={[0.006, 0.006, len, 4]} />
                        <meshStandardMaterial color="#ff0000" transparent opacity={0.08} emissive="#ff0000" emissiveIntensity={1.0} />
                    </mesh>
                );
            }
        });

        return { nodes: n, rungs: r, crossLinks: cl, energyNodes: en };
    }, []);

    // Ambient particle field
    const particleCount = 250;
    const particlePositions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            // Distribute in a cylinder shape around the DNA
            const angle = Math.random() * Math.PI * 2;
            const r = 1.5 + Math.random() * 4;
            pos[i * 3] = Math.cos(angle) * r;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 2] = Math.sin(angle) * r;
        }
        return pos;
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.25;
        }
        if (outerRingsRef.current) {
            outerRingsRef.current.rotation.y -= delta * 0.15;
            outerRingsRef.current.rotation.x += delta * 0.05;
        }
        if (particleRef.current) {
            particleRef.current.rotation.y -= delta * 0.03;
        }
        if (pulseRef.current) {
            pulseRef.current.rotation.y += delta * 0.6;
        }
    });

    return (
        <group>
            {/* Main DNA helix */}
            <group ref={groupRef}>
                <Float speed={1.0} rotationIntensity={0.1} floatIntensity={0.5}>
                    {/* Backbone strand A */}
                    <HelixBackbone strandOffset={0} color="#ffffff" emissiveColor="#ffffff" emissiveIntensity={0.3} />
                    {/* Backbone strand B */}
                    <HelixBackbone strandOffset={Math.PI} color="#ff4444" emissiveColor="#ff0000" emissiveIntensity={0.8} />

                    {/* All base pair nodes */}
                    {nodes}
                    {/* Base pair rungs */}
                    {rungs}
                    {/* Energy glow nodes */}
                    {energyNodes}
                    {/* Cross-link data flows */}
                    {crossLinks}
                </Float>
            </group>

            {/* Outer orbital scanning rings */}
            <group ref={outerRingsRef}>
                {/* Ring 1 — Wide, tilted */}
                <mesh rotation={[Math.PI / 6, 0, Math.PI / 8]}>
                    <torusGeometry args={[3.5, 0.012, 16, 100]} />
                    <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={2} transparent opacity={0.4} />
                </mesh>
                {/* Ring 2 — Opposite tilt */}
                <mesh rotation={[-Math.PI / 5, Math.PI / 4, 0]}>
                    <torusGeometry args={[4.0, 0.008, 16, 100]} />
                    <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} transparent opacity={0.15} />
                </mesh>
                {/* Ring 3 — Tight, fast */}
                <mesh ref={pulseRef} rotation={[Math.PI / 3, 0, -Math.PI / 6]}>
                    <torusGeometry args={[2.8, 0.006, 16, 80]} />
                    <meshStandardMaterial color="#ff2020" emissive="#ff0000" emissiveIntensity={1.5} transparent opacity={0.25} />
                </mesh>

                {/* Sensor nodes on outer ring */}
                {[0, Math.PI / 3, Math.PI * 2 / 3, Math.PI, Math.PI * 4 / 3, Math.PI * 5 / 3].map((angle, i) => (
                    <mesh key={`sensor-${i}`} position={[Math.cos(angle) * 3.5, Math.sin(angle) * 3.5 * Math.sin(Math.PI / 6), Math.sin(angle) * 3.5 * Math.cos(Math.PI / 6)]}>
                        <sphereGeometry args={[0.06, 12, 12]} />
                        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.5} />
                    </mesh>
                ))}
            </group>

            {/* Ambient particle cloud */}
            <points ref={particleRef}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
                </bufferGeometry>
                <pointsMaterial size={0.035} color="#ffffff" transparent opacity={0.25} sizeAttenuation />
            </points>
        </group>
    );
}

export default function DNAWireframe() {
    return (
        <div className="w-full h-full" style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)'
        }}>
            {/* Ambient red glow behind DNA */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.03)_0%,transparent_60%)] z-0 pointer-events-none" />

            {/* Giant ghost text underlays */}
            <div className="absolute inset-0 z-0 flex flex-col items-center justify-center overflow-hidden pointer-events-none select-none">
                <div className="absolute top-[15%] -rotate-90 whitespace-nowrap text-[5rem] font-black text-white/[0.015] tracking-[-0.05em] leading-none">
                    INTELLIGENCE
                </div>
                <div className="absolute top-[40%] -rotate-90 whitespace-nowrap text-[3.5rem] font-bold text-red-500/[0.02] tracking-[0.15em] leading-none">
                    IN_OUR_DNA
                </div>
                <div className="absolute top-[65%] -rotate-90 whitespace-nowrap text-[4rem] font-black text-white/[0.01] tracking-[-0.03em] leading-none">
                    PRODUCTION_GRADE
                </div>
                <div className="absolute top-[85%] -rotate-90 whitespace-nowrap text-[2.5rem] font-bold text-red-500/[0.015] tracking-[0.2em] leading-none">
                    SYSTEMS
                </div>
            </div>

            {/* The 3D Canvas */}
            <div className="absolute inset-0 z-10">
                <Canvas
                    camera={{ position: [0, 0, 12], fov: 40 }}
                    dpr={[1, 1.5]}
                    gl={{ antialias: true, alpha: true }}
                >
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[8, 12, 5]} intensity={2.0} color="#ffffff" />
                    <directionalLight position={[-5, -8, -5]} intensity={1.5} color="#ff0000" />
                    <pointLight position={[0, 0, 3]} intensity={0.8} color="#ff4444" distance={10} />
                    <DNAConstruct />
                </Canvas>
            </div>
        </div>
    );
}
