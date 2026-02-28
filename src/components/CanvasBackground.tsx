"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const particleCount = 350; // Optimized for performance while still looking dense
  const maxDistance = 5.0; // Distance to connect particles

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    // Primary brand color hsl(0, 100%, 50%) -> #ff0000 -> R: 1, G: 0, B: 0
    const baseColor = new THREE.Color(0xff0000);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      // Create a wider dispersion
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // 80% cyber blue, 20% pure white for contrast
      const mixedColor = Math.random() > 0.8 ? whiteColor : baseColor;
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, []);

  const velocities = useMemo(() => {
    const vel = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      vel[i * 3] = (Math.random() - 0.5) * 0.03;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.03;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.03;
    }
    return vel;
  }, []);

  const maxLines = (particleCount * (particleCount - 1)) / 2;
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);

  useFrame((state, delta) => {
    if (!pointsRef.current || !linesRef.current || !groupRef.current) return;

    // Slow ambient rotation
    groupRef.current.rotation.y += delta * 0.015;
    groupRef.current.rotation.x += delta * 0.005;

    // Subtle parallax effect based on mouse movement
    groupRef.current.position.x += (mouse.x * 2 - groupRef.current.position.x) * 0.05;
    groupRef.current.position.y += (mouse.y * 2 - groupRef.current.position.y) * 0.05;

    const positionsAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const posArray = positionsAttr.array as Float32Array;

    const linePosAttr = linesRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const lineColAttr = linesRef.current.geometry.attributes.color as THREE.BufferAttribute;

    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      posArray[idx] += velocities[idx];
      posArray[idx + 1] += velocities[idx + 1];
      posArray[idx + 2] += velocities[idx + 2];

      // Invisible bounding box bounds
      if (Math.abs(posArray[idx]) > 25) velocities[idx] *= -1;
      if (Math.abs(posArray[idx + 1]) > 17.5) velocities[idx + 1] *= -1;
      if (Math.abs(posArray[idx + 2]) > 25) velocities[idx + 2] *= -1;
    }

    for (let i = 0; i < particleCount; i++) {
      const idx1 = i * 3;
      for (let j = i + 1; j < particleCount; j++) {
        const idx2 = j * 3;

        const dx = posArray[idx1] - posArray[idx2];
        const dy = posArray[idx1 + 1] - posArray[idx2 + 1];
        const dz = posArray[idx1 + 2] - posArray[idx2 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistance * maxDistance) {
          const alpha = 1.0 - Math.sqrt(distSq) / maxDistance;

          linePosAttr.array[vertexpos++] = posArray[idx1];
          linePosAttr.array[vertexpos++] = posArray[idx1 + 1];
          linePosAttr.array[vertexpos++] = posArray[idx1 + 2];

          linePosAttr.array[vertexpos++] = posArray[idx2];
          linePosAttr.array[vertexpos++] = posArray[idx2 + 1];
          linePosAttr.array[vertexpos++] = posArray[idx2 + 2];

          // Deep red cyber glow
          const colorIntensity = alpha * 0.6;

          lineColAttr.array[colorpos++] = 1 * colorIntensity; // R
          lineColAttr.array[colorpos++] = 0; // G
          lineColAttr.array[colorpos++] = 0; // B

          lineColAttr.array[colorpos++] = 1 * colorIntensity;
          lineColAttr.array[colorpos++] = 0;
          lineColAttr.array[colorpos++] = 0;

          numConnected++;
        }
      }
    }

    positionsAttr.needsUpdate = true;
    linePosAttr.needsUpdate = true;
    lineColAttr.needsUpdate = true;

    // Ensure we only draw the connections that exist this frame
    linesRef.current.geometry.setDrawRange(0, numConnected * 2);
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={maxLines * 2}
            args={[linePositions, 3]}
            usage={THREE.DynamicDrawUsage}
          />
          <bufferAttribute
            attach="attributes-color"
            count={maxLines * 2}
            args={[lineColors, 3]}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.5}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default function CanvasBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none bg-black overflow-hidden">
      <Canvas
        camera={{ fov: 60, position: [0, 0, 30] }}
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 15, 45]} />
        <NeuralNetwork />
      </Canvas>

      {/* Heavy Cinematic Overlays for depth and shadow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] pointer-events-none opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none" />
    </div>
  );
}
