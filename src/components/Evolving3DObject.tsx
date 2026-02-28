"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, MeshTransmissionMaterial, Html } from "@react-three/drei";
import * as THREE from "three";

// ==========================================
// 1. HIGH-FIDELITY BIONIC ANT ANATOMY
// ==========================================

const antRedMaterial = new THREE.MeshPhysicalMaterial({
  color: "#ff0000", // Pure bright red
  emissive: "#ff0000",
  emissiveIntensity: 0.3, // Added emissive to overcome environment reflection
  roughness: 0.3, // increased roughness so it isn't completely reflecting white
  metalness: 0.8,
  clearcoat: 0.5,
  clearcoatRoughness: 0.2,
});

const jointMaterial = new THREE.MeshStandardMaterial({
  color: "#1a1a1a",
  roughness: 0.7,
  metalness: 0.5,
});

const glowingEyeMaterial = new THREE.MeshPhysicalMaterial({
  color: "#ff0000",
  emissive: "#ff0000",
  emissiveIntensity: 1.5,
  roughness: 0.1,
  metalness: 0.8,
  clearcoat: 1.0,
});

function AntHead() {
  const headGroup = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (headGroup.current) {
      // Subtle idle head movement
      headGroup.current.rotation.y = Math.sin(clock.elapsedTime * 1.5) * 0.1;
      headGroup.current.rotation.z = Math.cos(clock.elapsedTime * 1.2) * 0.05;
    }
  });

  return (
    <group position={[-0.6, 0.3, 0]} ref={headGroup}>
      {/* Main Head Capsule (Heart/Triangular shape) */}
      <mesh rotation={[0, 0, 0.2]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <primitive object={antRedMaterial} />
      </mesh>

      {/* Compound Eyes */}
      <mesh position={[-0.1, 0.08, 0.2]} rotation={[0.2, -0.4, 0.2]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <primitive object={glowingEyeMaterial} />
      </mesh>
      <mesh position={[-0.1, 0.08, -0.2]} rotation={[-0.2, -0.4, -0.2]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <primitive object={glowingEyeMaterial} />
      </mesh>

      {/* Elbowed Antennae */}
      <AntAntenna side={1} />
      <AntAntenna side={-1} />

      {/* Mandibles (Large & Sharp) */}
      <group position={[-0.22, -0.15, 0]} rotation={[0, 0, -0.4]}>
        <mesh position={[0, -0.1, 0.08]} rotation={[0.2, 0.4, 0]}>
          <coneGeometry args={[0.05, 0.3, 16]} />
          <meshPhysicalMaterial color="#333333" roughness={0.2} metalness={0.9} clearcoat={0.8} />
        </mesh>
        <mesh position={[0, -0.1, -0.08]} rotation={[-0.2, -0.4, 0]}>
          <coneGeometry args={[0.05, 0.3, 16]} />
          <meshPhysicalMaterial color="#333333" roughness={0.2} metalness={0.9} clearcoat={0.8} />
        </mesh>
      </group>
    </group>
  );
}

function AntAntenna({ side }: { side: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = Math.sin(clock.elapsedTime * 3 + side) * 0.1;
      ref.current.rotation.y = Math.cos(clock.elapsedTime * 2.5 + side) * 0.1;
    }
  });
  return (
    <group position={[-0.2, 0.15, side * 0.1]} rotation={[0.8, side * -0.5, -0.4]} ref={ref}>
      {/* Scape (First long segment) */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.008, 0.012, 0.3]} />
        <primitive object={antRedMaterial} />
      </mesh>
      {/* Joint */}
      <mesh position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.015]} />
        <primitive object={jointMaterial} />
      </mesh>
      {/* Funiculus (Elbowed remaining segments) */}
      <group position={[0, 0.3, 0]} rotation={[-1.2, 0, 0]}>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.01, 0.005, 0.4]} />
          <primitive object={antRedMaterial} />
        </mesh>
      </group>
    </group>
  );
}

function AntThorax() {
  return (
    <group position={[-0.1, 0.1, 0]}>
      {/* Pronotum */}
      <mesh position={[-0.15, 0.1, 0]} rotation={[0, 0, 0.2]}>
        <capsuleGeometry args={[0.18, 0.2, 32, 32]} />
        <primitive object={antRedMaterial} />
      </mesh>
      {/* Mesonotum */}
      <mesh position={[0.05, 0.05, 0]} rotation={[0, 0, -0.1]}>
        <capsuleGeometry args={[0.16, 0.2, 32, 32]} />
        <primitive object={antRedMaterial} />
      </mesh>
      {/* Epinotum */}
      <mesh position={[0.25, 0, 0]} rotation={[0, 0, -0.4]}>
        <capsuleGeometry args={[0.13, 0.15, 32, 32]} />
        <primitive object={antRedMaterial} />
      </mesh>
    </group>
  );
}

function AntAbdomen() {
  return (
    <group position={[0.4, 0, 0]}>
      {/* Petiole (Connecting nodes) */}
      <mesh position={[0, -0.05, 0]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <primitive object={antRedMaterial} />
      </mesh>
      <mesh position={[0.15, -0.02, 0]}>
        <sphereGeometry args={[0.06, 32, 32]} />
        <primitive object={antRedMaterial} />
      </mesh>

      {/* Gaster (Main bulbous abdomen) */}
      <mesh position={[0.6, 0.1, 0]} rotation={[0, 0, Math.PI / 2 - 0.2]}>
        <capsuleGeometry args={[0.38, 0.5, 32, 32]} />
        <primitive object={antRedMaterial} />
      </mesh>
      {/* Abdomen segments/stripes (More organic gradient) */}
      {[0.4, 0.55, 0.7, 0.85].map((x, i) => (
        <mesh key={i} position={[x, 0.1 - (i * 0.02), 0]} rotation={[0, 0, -0.2]}>
          <torusGeometry args={[0.37 - (i * 0.03), 0.025, 16, 64]} />
          <meshPhysicalMaterial color="#111111" roughness={0.3} metalness={0.9} clearcoat={0.8} />
        </mesh>
      ))}

      {/* Glowing Abdomen Core */}
      <mesh position={[0.6, 0.1, 0]} rotation={[0, 0, Math.PI / 2 - 0.2]}>
        <capsuleGeometry args={[0.36, 0.48, 32, 32]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.2} transparent opacity={0.5} />
      </mesh>

      {/* Stinger point */}
      <mesh position={[1.15, -0.05, 0]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.04, 0.3, 16]} />
        <meshPhysicalMaterial color="#222222" roughness={0.1} metalness={1.0} emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function AntLeg({ side, type, typingMode, walkingMode }: { side: number, type: 'fore' | 'mid' | 'hind', typingMode: React.MutableRefObject<number>, walkingMode?: React.MutableRefObject<number> }) {
  const ref = useRef<THREE.Group>(null);

  let basePos: [number, number, number];
  let defaultJoints: any[];

  if (type === 'fore') {
    basePos = [-0.25, 0.05, side * 0.15];
    defaultJoints = [
      { l: 0.3, rx: side * 0.5, ry: side * 0.4, rz: -0.2 }, // Femur up & forward
      { l: 0.4, rx: 0, ry: 0, rz: -1.2 }, // Tibia down
      { l: 0.2, rx: 0, ry: 0, rz: 0.5 } // Tarsus flat
    ];
  } else if (type === 'mid') {
    basePos = [-0.05, 0.05, side * 0.15];
    defaultJoints = [
      { l: 0.35, rx: side * 0.8, ry: 0, rz: 0.2 }, // Femur out & slightly back
      { l: 0.45, rx: 0, ry: 0, rz: -1.5 },
      { l: 0.25, rx: 0, ry: 0, rz: 0.4 }
    ];
  } else {
    basePos = [0.15, 0, side * 0.15];
    defaultJoints = [
      { l: 0.4, rx: side * 0.6, ry: side * -0.5, rz: 0.6 }, // Femur back
      { l: 0.5, rx: 0, ry: 0, rz: -1.4 },
      { l: 0.3, rx: 0, ry: 0, rz: 0.2 }
    ];
  }

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const time = clock.elapsedTime;

    // Idle stance breathing
    ref.current.rotation.z = Math.sin(time * 2 + side) * 0.02;

    let currentFemurRz = defaultJoints[0].rz;
    let currentTibiaRz = defaultJoints[1].rz;
    let currentFemurRx = defaultJoints[0].rx;

    // Typing animation for forelegs
    if (type === 'fore' && typingMode && typingMode.current > 0) {
      const typeW = typingMode.current;
      const typingFemurRz = -0.8 + Math.sin(time * 15 + side) * 0.2;
      const typingTibiaRz = -0.5 + Math.cos(time * 15 + side) * 0.2;
      currentFemurRz = THREE.MathUtils.lerp(currentFemurRz, typingFemurRz, typeW);
      currentTibiaRz = THREE.MathUtils.lerp(currentTibiaRz, typingTibiaRz, typeW);
    }

    // Walking animation for all legs
    if (walkingMode && walkingMode.current > 0) {
      const walkW = walkingMode.current;
      // Create a tripod gait offset
      let phase = time * 15;
      if (type === 'fore') phase += side === 1 ? 0 : Math.PI;
      if (type === 'mid') phase += side === 1 ? Math.PI : 0;
      if (type === 'hind') phase += side === 1 ? 0 : Math.PI;

      const walkFemurRz = defaultJoints[0].rz + Math.sin(phase) * 0.4;
      const walkTibiaRz = defaultJoints[1].rz + Math.cos(phase) * 0.4;
      const walkFemurRx = defaultJoints[0].rx + Math.sin(phase) * 0.2;

      currentFemurRz = THREE.MathUtils.lerp(currentFemurRz, walkFemurRz, walkW);
      currentTibiaRz = THREE.MathUtils.lerp(currentTibiaRz, walkTibiaRz, walkW);
      currentFemurRx = THREE.MathUtils.lerp(currentFemurRx, walkFemurRx, walkW);
    }

    // Apply joint rotations
    if (ref.current.children.length > 1) {
      const femur = ref.current.children[1] as THREE.Group;
      const tibia = femur?.children[1] as THREE.Group;
      if (femur && tibia) {
        femur.rotation.z = currentFemurRz;
        femur.rotation.x = currentFemurRx;
        tibia.rotation.z = currentTibiaRz;
      }
    }
  });

  return (
    <group position={basePos} ref={ref}>
      {/* Coxa (Base joint) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <capsuleGeometry args={[0.04, 0.1]} />
        <primitive object={jointMaterial} />
      </mesh>

      {/* Femur */}
      <group rotation={[defaultJoints[0].rx, defaultJoints[0].ry, defaultJoints[0].rz]}>
        <mesh position={[0, -defaultJoints[0].l / 2, 0]}>
          <capsuleGeometry args={[0.03, defaultJoints[0].l, 8, 8]} />
          <primitive object={antRedMaterial} />
        </mesh>

        {/* Tibia */}
        <group position={[0, -defaultJoints[0].l, 0]} rotation={[defaultJoints[1].rx, defaultJoints[1].ry, defaultJoints[1].rz]}>
          {/* Knee joint */}
          <mesh><sphereGeometry args={[0.035]} /><primitive object={jointMaterial} /></mesh>
          <mesh position={[0, -defaultJoints[1].l / 2, 0]}>
            <capsuleGeometry args={[0.02, defaultJoints[1].l, 8, 8]} />
            <primitive object={antRedMaterial} />
          </mesh>

          {/* Tarsus */}
          <group position={[0, -defaultJoints[1].l, 0]} rotation={[defaultJoints[2].rx, defaultJoints[2].ry, defaultJoints[2].rz]}>
            <mesh><sphereGeometry args={[0.025]} /><primitive object={jointMaterial} /></mesh>
            <mesh position={[0, -defaultJoints[2].l / 2, 0]}>
              <capsuleGeometry args={[0.012, defaultJoints[2].l, 8, 8]} />
              <primitive object={antRedMaterial} />
            </mesh>
            {/* Small claws at the end of the leg */}
            <mesh position={[0.015, -defaultJoints[2].l, 0]} rotation={[0, 0, -0.6]}>
              <coneGeometry args={[0.005, 0.04, 8]} />
              <meshPhysicalMaterial color="#000000" roughness={0.2} metalness={0.8} />
            </mesh>
            <mesh position={[-0.015, -defaultJoints[2].l, 0]} rotation={[0, 0, 0.6]}>
              <coneGeometry args={[0.005, 0.04, 8]} />
              <meshPhysicalMaterial color="#000000" roughness={0.2} metalness={0.8} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

function BionicAnt({ typingWeight, walkingWeight }: { typingWeight: React.MutableRefObject<number>, walkingWeight: React.MutableRefObject<number> }) {
  return (
    <group>
      <AntHead />
      <AntThorax />
      <AntAbdomen />

      <AntLeg side={1} type="fore" typingMode={typingWeight} walkingMode={walkingWeight} />
      <AntLeg side={-1} type="fore" typingMode={typingWeight} walkingMode={walkingWeight} />
      <AntLeg side={1} type="mid" typingMode={typingWeight} walkingMode={walkingWeight} />
      <AntLeg side={-1} type="mid" typingMode={typingWeight} walkingMode={walkingWeight} />
      <AntLeg side={1} type="hind" typingMode={typingWeight} walkingMode={walkingWeight} />
      <AntLeg side={-1} type="hind" typingMode={typingWeight} walkingMode={walkingWeight} />
    </group>
  );
}

// ==========================================
// 2. ENVIRONMENT PROPS
// ==========================================

function ComputerConsole() {
  return (
    <group>
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.6, 0.8, 0.4, 32]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.15, 0.25, 1.0, 32]} />
        <meshStandardMaterial color="#222" metalness={0.8} />
      </mesh>
      {/* Keyboard Panel */}
      <mesh position={[0.2, -0.1, 0]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.7, 0.05, 1.4]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} />
      </mesh>
      {/* Glowing Keys */}
      <mesh position={[0.2, -0.07, 0]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.5, 0.02, 1.0]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>
      {/* Stand */}
      <mesh position={[-0.15, 0.2, 0]} rotation={[0, 0, 0.5]}>
        <cylinderGeometry args={[0.06, 0.06, 0.6]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      {/* Screen Frame */}
      <mesh position={[-0.4, 0.5, 0]} rotation={[0, 0, 0.1]}>
        <boxGeometry args={[0.05, 1.2, 2.0]} />
        <meshStandardMaterial color="#050505" metalness={0.8} />
      </mesh>
      {/* Immersive Holographic Screen */}
      <mesh position={[-0.34, 0.5, 0]} rotation={[0, Math.PI / 2, 0.1]}>
        <planeGeometry args={[1.8, 1.0]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.8} transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
      {/* Data Lines on Screen */}
      <mesh position={[-0.32, 0.7, 0]} rotation={[0, Math.PI / 2, 0.1]}>
        <planeGeometry args={[1.5, 0.03]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={3} />
      </mesh>
      <mesh position={[-0.32, 0.4, -0.4]} rotation={[0, Math.PI / 2, 0.1]}>
        <planeGeometry args={[0.8, 0.03]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={3} />
      </mesh>
    </group>
  );
}

function ROIChart() {
  const lineMaterial = new THREE.MeshStandardMaterial({
    color: "#ff0000", // Vibrant ant red
    emissive: "#ff0000",
    emissiveIntensity: 2,
    roughness: 0.2,
    metalness: 0.8,
  });

  // Create a smooth, curving tube to represent a line chart
  const path = useMemo(() => {
    // Defines a smooth upward curve
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.2, -0.6, 0),
      new THREE.Vector3(-0.6, -0.4, 0),
      new THREE.Vector3(0.2, -0.5, 0),
      new THREE.Vector3(1.0, 0.2, 0),
      new THREE.Vector3(1.8, 1.5, 0),
    ]);
    return curve;
  }, []);

  return (
    <group>
      {/* Base Platform */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[1.8, 1.8, 0.1, 32]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0, -1.14, 0]}>
        <cylinderGeometry args={[1.7, 1.7, 0.02, 64]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>

      {/* Smooth Line Chart */}
      <mesh>
        <tubeGeometry args={[path, 64, 0.06, 16, false]} />
        <primitive object={lineMaterial} />
      </mesh>

      {/* Grid Lines to make it look like a chart backdrop */}
      <group position={[0.2, 0.5, -0.5]}>
        {[0, 0.5, 1.0, 1.5, 2.0].map((y, i) => (
          <mesh key={`h-${i}`} position={[0, y - 1.5, 0]}>
            <cylinderGeometry args={[0.01, 0.01, 3.2]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
          </mesh>
        ))}
        {[-1.5, -0.75, 0, 0.75, 1.5].map((x, i) => (
          <mesh key={`v-${i}`} position={[x, -0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.01, 0.01, 2.0]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
          </mesh>
        ))}
      </group>

      {/* The Arrow Head (Positioned at the end of the curve, pointing along the tangent) */}
      <mesh position={[1.8, 1.5, 0]} rotation={[0, 0, -Math.PI / 3.5]}>
        <coneGeometry args={[0.25, 0.5, 16]} />
        <primitive object={lineMaterial} />
      </mesh>
    </group>
  );
}

// ==========================================
// 3. CINEMATIC SCENE ORCHESTRATOR
// ==========================================

function SceneOrchestrator() {
  const antGroup = useRef<THREE.Group>(null);
  const computer = useRef<THREE.Group>(null);
  const roiChart = useRef<THREE.Group>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Ref to pass animation weights cleanly
  const typingWeight = useRef(1);
  const walkingWeight = useRef(0);

  // The curve the ant will climb
  const chartCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.2, -0.6, 0),
      new THREE.Vector3(-0.6, -0.4, 0),
      new THREE.Vector3(0.2, -0.5, 0),
      new THREE.Vector3(1.0, 0.2, 0),
      new THREE.Vector3(1.8, 1.5, 0),
    ]);
  }, []);

  useFrame((state, delta) => {
    if (typeof window === 'undefined') return;

    const scrollY = window.scrollY;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
    const time = state.clock.getElapsedTime();

    let antPos = new THREE.Vector3(0, 0.5, 0); // Base standing pos
    let antRot = new THREE.Euler(0, 0, 0);

    let compScale = 0;
    let chartScale = 0;
    let popupOpacity = 0;
    let popupY = 0;
    let popupScale = 0;
    let antScale = 0.7; // Base ant scale

    if (progress < 0.25) {
      // 1. Hero Section - Hidden offscreen
      antPos.set(-8.0, 0, 0); // Offscreen left
      antRot.set(0, 0, 0);
      compScale = 0;
      chartScale = 0;
      antScale = 0;
      typingWeight.current = 0;
      walkingWeight.current = 0;
      popupOpacity = 0;
    } else if (progress >= 0.25 && progress < 0.55) {
      // 2. Capabilities Section - Text on RIGHT, Ant on LEFT side
      const p = Math.min(1, (progress - 0.25) / 0.08); // Quick entrance

      // Ant slides in from far left to sit at left side of viewport
      antPos.set(THREE.MathUtils.lerp(-8.0, -3.5, p), 0.4 + Math.sin(time * 4) * 0.02, 0);
      antRot.set(0, 0, 0);

      compScale = 1 * p;
      chartScale = 0;
      antScale = 0.85 * p;

      typingWeight.current = THREE.MathUtils.lerp(typingWeight.current, 1, delta * 5);
      walkingWeight.current = THREE.MathUtils.lerp(walkingWeight.current, 0, delta * 5);

      popupOpacity = p > 0.8 ? 1 : 0;
      popupY = (1 - popupOpacity) * 20;
      popupScale = 0.8 + popupOpacity * 0.2;

      // Computer sits next to ant
      if (computer.current) computer.current.position.set(-2.0, -0.2, 0);
    } else if (progress >= 0.55 && progress < 0.75) {
      // 3. Process Section - Text on LEFT, Ant walks to RIGHT side
      const p = (progress - 0.55) / 0.2;

      // Ant walks from left across to the right side
      antPos.set(THREE.MathUtils.lerp(-3.5, 3.5, p), 0.4 + Math.abs(Math.sin(time * 12)) * 0.05, 0);
      antRot.set(0, -(Math.PI / 2) + Math.sin(time * 8) * 0.1, 0); // Facing right

      compScale = Math.max(0, 1 - p * 3); // Fade out comp quickly
      chartScale = p > 0.6 ? (p - 0.6) / 0.4 : 0;
      antScale = 0.85;

      typingWeight.current = 0;
      walkingWeight.current = THREE.MathUtils.lerp(walkingWeight.current, 1, delta * 5);
      popupOpacity = 0;
    } else {
      // 4. CTA Section - Climbing the ROI Chart
      const rawP = Math.min(1, Math.max(0, (progress - 0.75) / 0.25));

      compScale = 0;
      chartScale = Math.min(1, rawP * 3); // Chart grows early
      typingWeight.current = 0;
      walkingWeight.current = THREE.MathUtils.lerp(walkingWeight.current, 1, delta * 5);
      popupOpacity = 0;

      const chartOffset = new THREE.Vector3(-2.0, -0.2, -1);

      // Calculate how far along the curve the ant is based on continuous TIME, not scroll.
      // We want it to climb from the bottom (0.0) up to the slope and loop back down.
      // E.g., moving from 0.0 to 0.95 over 6 seconds.
      const curveProgress = (time * 0.15) % 0.95;

      // Get exact position on the 3D line
      const targetPoint = chartCurve.getPointAt(curveProgress);
      // Get the direction the line is moving at this exact point
      const tangent = chartCurve.getTangentAt(curveProgress).normalize();

      // Move point to world space
      targetPoint.add(chartOffset);

      // Orienting to the slope properly 
      const worldUp = new THREE.Vector3(0, 1, 0);
      const binormal = new THREE.Vector3().crossVectors(tangent, worldUp).normalize();
      const localUp = new THREE.Vector3().crossVectors(binormal, tangent).normalize();

      // Position ant on top of the line
      // localUp.clone() prevents mutating the original vector
      antPos.copy(targetPoint).add(localUp.clone().multiplyScalar(0.2));
      // Nudge it forward towards the camera slightly so it's fully visible
      antPos.z += 0.2;

      // Add a slight bobbing motion to simulate walking
      antPos.add(localUp.clone().multiplyScalar(Math.abs(Math.sin(time * 15)) * 0.04));

      // Scale down slightly as it climbs to create forced perspective/depth
      antScale = 0.7 - (curveProgress * 0.2);

      // Calculate Rotation using a Matrix4 to ensure absolute precision.
      // The ant's natural head is -X. We want -X to point to `tangent`.
      // The ant's natural top is +Y. We want +Y to point to `localUp`.
      // Therefore, the local X axis must be `-tangent`.
      const xAxis = tangent.clone().negate();
      const yAxis = localUp.clone();
      const zAxis = new THREE.Vector3().crossVectors(xAxis, yAxis).normalize();

      const rotationMatrix = new THREE.Matrix4().makeBasis(xAxis, yAxis, zAxis);
      const quaternion = new THREE.Quaternion().setFromRotationMatrix(rotationMatrix);

      // Apply the rotation, and tilt it slightly towards the camera (+Z) so we can see its side
      const euler = new THREE.Euler().setFromQuaternion(quaternion);
      antRot.set(euler.x, euler.y, euler.z + 0.3);
    }

    if (antGroup.current) {
      // Smooth positional transition
      antGroup.current.position.lerp(antPos, delta * 4);

      // Scale transition
      const targetScaleVec = new THREE.Vector3(antScale, antScale, antScale);
      antGroup.current.scale.lerp(targetScaleVec, delta * 4);

      // Smooth rotational transition using Quaternions to prevent gimbal lock
      const currentQuat = antGroup.current.quaternion;
      const targetQuat = new THREE.Quaternion().setFromEuler(antRot);
      currentQuat.slerp(targetQuat, delta * 5);
    }

    if (computer.current) computer.current.scale.lerp(new THREE.Vector3(compScale, compScale, compScale), delta * 5);
    if (roiChart.current) roiChart.current.scale.lerp(new THREE.Vector3(chartScale, chartScale, chartScale), delta * 5);

    // Update DOM element directly for high performance
    if (popupRef.current) {
      popupRef.current.style.opacity = popupOpacity.toString();
      popupRef.current.style.transform = `translate3d(-50%, calc(-100% + ${popupY}px), 0) scale(${popupScale})`;
      popupRef.current.style.pointerEvents = popupOpacity > 0.5 ? 'auto' : 'none';
    }
  });

  return (
    <group position={[0, -0.5, 0]} scale={0.8}>
      <group ref={antGroup}>
        <BionicAnt typingWeight={typingWeight} walkingWeight={walkingWeight} />

        {/* DOM HTML Pop-up Message Anchored to Ant Head */}
        <Html position={[-0.6, 0.8, 0]}>
          <div
            ref={popupRef}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-full mb-4 bg-black/80 backdrop-blur-xl border border-white/20 text-white px-8 py-5 rounded-3xl whitespace-nowrap shadow-[0_0_40px_rgba(255,0,0,0.4)] opacity-0 transition-none will-change-transform origin-bottom"
            style={{ transform: 'translate3d(-50%, -100%, 0) scale(0.8)' }}
          >
            <p className="text-xl md:text-2xl font-semibold tracking-wide bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Did u get what your looking for !
            </p>
            {/* Elegant Tail */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-black/80 border-b border-r border-white/20 transform rotate-45 backdrop-blur-xl"></div>
          </div>
        </Html>
      </group>

      <group ref={computer} position={[-2.5, -0.2, 0]}>
        <ComputerConsole />
      </group>

      <group ref={roiChart} position={[-2.0, -0.2, -1]}>
        <ROIChart />
      </group>
    </group>
  );
}

export default function Evolving3DObject() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Environment preset="city" />
        <ambientLight intensity={0.8} />
        <spotLight position={[15, 15, 15]} intensity={4} color="#ffffff" penumbra={1} />
        <spotLight position={[-15, -15, -15]} intensity={2} color="#ff4444" penumbra={1} />
        <directionalLight position={[0, 5, 5]} intensity={2} color="#ffffff" />

        <SceneOrchestrator />

        <ContactShadows position={[0, -2.5, 0]} opacity={0.7} scale={30} blur={2.5} far={15} color="#ff0000" />
      </Canvas>
    </div>
  );
}
