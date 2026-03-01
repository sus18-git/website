"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Preload, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

// --------------------------------------------------------------------------
// PREMIUM ENTERPRISE VISUALIZATION
// A glass sphere with internal neural-network data lattice.
// Clean, professional, meaningful — represents interconnected AI systems.
// --------------------------------------------------------------------------

// Internal Neural Lattice — represents AI nodes and connections
function NeuralLattice() {
    const groupRef = useRef<THREE.Group>(null);

    const { positions, redPositions, linePositions, activeLinePositions } = useMemo(() => {
        const nodeCount = 80;
        const pos: THREE.Vector3[] = [];
        const radius = 1.6;

        for (let i = 0; i < nodeCount; i++) {
            const r = radius * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            pos.push(new THREE.Vector3(x, y, z));
        }

        const lines: number[] = [];
        const activeLines: number[] = [];
        const activeNodes = new Set<number>();
        const connectThreshold = 0.9;

        for (let i = 0; i < nodeCount; i++) {
            const distances: { index: number; dist: number }[] = [];
            for (let j = i + 1; j < nodeCount; j++) {
                distances.push({ index: j, dist: pos[i].distanceTo(pos[j]) });
            }
            distances.sort((a, b) => a.dist - b.dist);

            for (let k = 0; k < Math.min(3, distances.length); k++) {
                const neighbor = distances[k];
                if (neighbor.dist < connectThreshold) {
                    const isActive = Math.random() > 0.7;
                    const target = isActive ? activeLines : lines;
                    target.push(pos[i].x, pos[i].y, pos[i].z, pos[neighbor.index].x, pos[neighbor.index].y, pos[neighbor.index].z);
                    if (isActive) { activeNodes.add(i); activeNodes.add(neighbor.index); }
                }
            }
        }

        const standardPos: number[] = [];
        const highlightPos: number[] = [];
        pos.forEach((p, i) => {
            (activeNodes.has(i) ? highlightPos : standardPos).push(p.x, p.y, p.z);
        });

        return {
            positions: new Float32Array(standardPos),
            redPositions: new Float32Array(highlightPos),
            linePositions: new Float32Array(lines),
            activeLinePositions: new Float32Array(activeLines),
        };
    }, []);

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.08;
            groupRef.current.rotation.x += delta * 0.03;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Quiet nodes */}
            <points>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                </bufferGeometry>
                <pointsMaterial color="#ffffff" size={0.025} transparent opacity={0.5} sizeAttenuation />
            </points>
            {/* Active nodes */}
            <points>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" args={[redPositions, 3]} />
                </bufferGeometry>
                <pointsMaterial color="#ff2200" size={0.04} transparent opacity={0.9} sizeAttenuation />
            </points>
            {/* Quiet connections */}
            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
                </bufferGeometry>
                <lineBasicMaterial color="#ffffff" transparent opacity={0.06} />
            </lineSegments>
            {/* Active connections */}
            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" args={[activeLinePositions, 3]} />
                </bufferGeometry>
                <lineBasicMaterial color="#ff0000" transparent opacity={0.25} />
            </lineSegments>
        </group>
    );
}

// The Glass Sphere Shell — same approach as the solutions page AmbientBackground
function GlassSphere() {
    return (
        <mesh>
            <icosahedronGeometry args={[2.2, 3]} />
            <MeshTransmissionMaterial
                backside
                backsideThickness={0.8}
                thickness={1.8}
                roughness={0.03}
                transmission={1}
                ior={1.35}
                chromaticAberration={0.03}
                anisotropy={0.08}
                distortion={0.05}
                distortionScale={0.15}
                temporalDistortion={0.0}
                color="#ffffff"
            />
        </mesh>
    );
}

// Orbital ring — elegant, technical framing
function OrbitalRings() {
    const ringRef = useRef<THREE.Group>(null);

    useFrame((_, delta) => {
        if (ringRef.current) ringRef.current.rotation.z += delta * 0.15;
    });

    return (
        <group ref={ringRef}>
            <mesh rotation={[Math.PI / 3, 0, 0]}>
                <torusGeometry args={[2.8, 0.012, 16, 100]} />
                <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={2} toneMapped={false} />
            </mesh>
            <mesh rotation={[Math.PI / 2.2, Math.PI / 4, 0]}>
                <torusGeometry args={[3.2, 0.04, 16, 100]} />
                <meshStandardMaterial color="#111111" metalness={1} roughness={0.1} />
            </mesh>
            {/* Sensor nodes */}
            {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((angle, i) => (
                <mesh key={i} position={[Math.sin(angle) * 3.2, 0, Math.cos(angle) * 3.2]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} emissive="#ffffff" emissiveIntensity={0.6} />
                </mesh>
            ))}
        </group>
    );
}

// Subtle mouse parallax
function ParallaxGroup({ children }: { children: React.ReactNode }) {
    const groupRef = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (!groupRef.current) return;
        const tx = (state.pointer.x * Math.PI) / 12;
        const ty = (state.pointer.y * Math.PI) / 12;
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -ty, 0.04);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, tx, 0.04);
    });
    return <group ref={groupRef}>{children}</group>;
}

export default function ComplexWireframe() {
    return (
        <div className="w-full h-full relative" style={{ minHeight: '500px' }}>
            <Canvas
                camera={{ position: [0, 0, 9], fov: 45 }}
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                dpr={[1, 2]}
            >
                <Environment preset="city" />
                <ambientLight intensity={0.15} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
                <directionalLight position={[-10, -10, -5]} intensity={1} color="#ff0000" />

                <ParallaxGroup>
                    <Float speed={2} rotationIntensity={0.15} floatIntensity={0.6} floatingRange={[-0.08, 0.08]}>
                        <GlassSphere />
                        <NeuralLattice />
                        <OrbitalRings />
                    </Float>
                </ParallaxGroup>

                <Preload all />
            </Canvas>

            {/* Radial fade to seamlessly blend into the dark BG */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,#000000_75%)] opacity-80" />
        </div>
    );
}
