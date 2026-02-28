"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { useScroll, useTransform, motion } from "framer-motion";

function ScrollLinkedCore() {
  const group = useRef<THREE.Group>(null);
  const outerRing = useRef<THREE.Mesh>(null);
  const innerRing = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // Safely access window on client for scroll values
    if (typeof window !== 'undefined') {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const progress = scrollY / maxScroll;

      if (group.current) {
        // High-end cinematic scroll animations
        // Rotate 2.5 full times over the entire scroll length
        const targetRotY = progress * Math.PI * 5;
        // Tilt forward slightly as it descends
        const targetRotX = progress * Math.PI * 0.4;

        // Move horizontally and vertically to frame the text elegantly
        // Sine wave ensures it smoothly moves right, then back to center
        const targetPosX = Math.sin(progress * Math.PI) * 4;
        const targetPosY = (progress - 0.5) * -1;

        // Scale down slightly at the very end to give priority to footer CTAs
        const targetScale = 1 - (progress * 0.15);

        // Smoothly interpolate (lerp) current position to the scroll-based target position
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, delta * 3);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, delta * 3);
        group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetPosX, delta * 3);
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetPosY, delta * 3);
        group.current.scale.setScalar(THREE.MathUtils.lerp(group.current.scale.x, targetScale, delta * 3));
      }
    }

    // Continuous ambient rotations for the individual parts
    if (outerRing.current) {
      outerRing.current.rotation.x += delta * 0.2;
      outerRing.current.rotation.y += delta * 0.1;
    }
    if (innerRing.current) {
      innerRing.current.rotation.y -= delta * 0.4;
      innerRing.current.rotation.z -= delta * 0.2;
    }
    if (core.current) {
      core.current.rotation.y += delta * 0.3;
      core.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.8}>

        {/* The Glass Outer Shell (Simulates high-grade optical crystal/glass) */}
        <mesh>
          <icosahedronGeometry args={[2.5, 2]} />
          <MeshTransmissionMaterial
            backside
            backsideThickness={1}
            thickness={2.5}
            roughness={0.05}
            transmission={1}
            ior={1.4}
            chromaticAberration={0.04}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={0.0}
            color="#ffffff"
          />
        </mesh>

        {/* The Solid Dark Metallic Engine Core inside */}
        <mesh ref={core}>
          <octahedronGeometry args={[1.4, 0]} />
          <meshStandardMaterial color="#050505" metalness={1} roughness={0.15} />
        </mesh>

        {/* The Inner Glowing Energy Web */}
        <mesh>
          <icosahedronGeometry args={[1.5, 2]} />
          <meshBasicMaterial color="#ff0000" wireframe={true} transparent opacity={0.5} />
        </mesh>

        {/* Orbital Ring 1 - Neon Cyber-Blue */}
        <mesh ref={innerRing}>
          <torusGeometry args={[3.2, 0.015, 16, 100]} />
          <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={3} toneMapped={false} />
        </mesh>

        {/* Orbital Ring 2 - Stealth Dark Metal */}
        <mesh ref={outerRing}>
          <torusGeometry args={[4.0, 0.05, 16, 100]} />
          <meshStandardMaterial color="#111111" metalness={1} roughness={0.1} />
        </mesh>

        {/* Sensor Nodes on the outer ring */}
        {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((angle, i) => (
          <mesh key={i} position={[Math.sin(angle) * 4.0, 0, Math.cos(angle) * 4.0]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} emissive="#ffffff" emissiveIntensity={0.8} />
          </mesh>
        ))}

      </Float>
    </group>
  );
}

export default function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 900]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -900]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020202] pointer-events-none">

      {/* Dramatic cinematic background lighting reacting to scroll */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#ff0000]/10 blur-[180px] mix-blend-screen"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#ff0000]/5 blur-[180px] mix-blend-screen"
      />

      {/* The Central 3D Object Canvas */}
      <div className="absolute inset-0 opacity-100">
        <Canvas
          camera={{ position: [0, 0, 12], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          {/* Environment maps are required for MeshTransmissionMaterial to refract light realistically */}
          <Environment preset="city" />
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#ff0000" />

          <ScrollLinkedCore />

          {/* Drops a soft cinematic shadow underneath the floating object */}
          <ContactShadows position={[0, -6, 0]} opacity={0.6} scale={25} blur={2.5} far={15} color="#ff0000" />
        </Canvas>
      </div>

      {/* High-end technical grid overlay - extremely subtle */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)'
        }}
      />

      {/* Light edge vignetting to frame the 3D model, replacing heavy black overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-40" />
    </div>
  );
}
