"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Sun() {
    const sunRef = useRef<THREE.Mesh>(null);
    const coronaRef = useRef<THREE.Mesh>(null);
    const glowRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        const t = clock.elapsedTime;
        if (sunRef.current) {
            sunRef.current.rotation.y = t * 0.05;
            sunRef.current.rotation.x = t * 0.02;
        }
        if (coronaRef.current) {
            coronaRef.current.rotation.z = t * 0.03;
            const pulse = 1.0 + Math.sin(t * 1.5) * 0.02;
            coronaRef.current.scale.set(pulse, pulse, pulse);
        }
        if (glowRef.current) {
            const glow = 0.6 + Math.sin(t * 0.8) * 0.1;
            (glowRef.current.material as THREE.MeshBasicMaterial).opacity = glow;
        }
    });

    return (
        <group position={[0, -3.8, -2]}>
            {/* Main Sun Sphere */}
            <mesh ref={sunRef}>
                <sphereGeometry args={[2.8, 128, 128]} />
                <meshStandardMaterial
                    color="#ff2200"
                    emissive="#ff4400"
                    emissiveIntensity={2.0}
                    roughness={1.0}
                    metalness={0.0}
                />
            </mesh>

            {/* Corona/Atmosphere layer */}
            <mesh ref={coronaRef}>
                <sphereGeometry args={[3.0, 64, 64]} />
                <meshBasicMaterial
                    color="#ff6600"
                    transparent
                    opacity={0.15}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Outer glow haze */}
            <mesh ref={glowRef}>
                <sphereGeometry args={[3.6, 64, 64]} />
                <meshBasicMaterial
                    color="#ff3300"
                    transparent
                    opacity={0.08}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Solar flare / rim light */}
            <pointLight position={[0, 2.5, 1]} intensity={8} color="#ff4400" distance={12} decay={2} />
            <pointLight position={[1.5, 1.5, 2]} intensity={4} color="#ff6600" distance={8} decay={2} />
            <pointLight position={[-1.5, 1, 2]} intensity={4} color="#ff2200" distance={8} decay={2} />
        </group>
    );
}

function StarField() {
    const starsRef = useRef<THREE.Points>(null);
    const count = 400;

    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 40;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20 + 3; // mostly above the sun
        positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
        sizes[i] = Math.random() * 2 + 0.5;
    }

    useFrame(({ clock }) => {
        if (starsRef.current) {
            starsRef.current.rotation.y = clock.elapsedTime * 0.003;
        }
    });

    return (
        <points ref={starsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
            </bufferGeometry>
            <pointsMaterial
                color="#ffffff"
                size={0.04}
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

export default function HeroSun() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Canvas
                camera={{ position: [0, 1.5, 6], fov: 50 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            >
                <ambientLight intensity={0.1} />
                <StarField />
                <Sun />
            </Canvas>
        </div>
    );
}
