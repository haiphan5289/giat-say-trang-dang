"use client";
import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const SHIRT_COLORS = [
  "#bfdbfe",
  "#c7d2fe",
  "#a5f3fc",
  "#bbf7d0",
  "#fde68a",
  "#fecdd3",
];

const SHIRT_SCALE = 0.72;
const FLOOR_Y = -1.85; // bottom of visible area

useGLTF.preload("/models/tshirt.glb");

type ShirtState = {
  x: number; y: number;
  vy: number; vx: number;
  rotY: number; rotZ: number; rotZFinal: number;
  windPhase: number;
  landed: boolean; landedAt: number;
};

function randomState(staggerY = 0): ShirtState {
  return {
    x: (Math.random() - 0.5) * 7.5,
    y: 2.4 + staggerY + Math.random() * 0.6,
    vy: -(0.06 + Math.random() * 0.06),   // very slow base gravity — scroll is the main driver
    vx: (Math.random() - 0.5) * 0.02,
    rotY: Math.random() * Math.PI * 2,
    rotZ: (Math.random() - 0.5) * 0.22,
    rotZFinal: 0,
    windPhase: Math.random() * Math.PI * 2,
    landed: false,
    landedAt: 0,
  };
}

function FallingTShirt({ color, staggerY }: { color: string; staggerY: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const state = useRef<ShirtState>(randomState(staggerY));
  const prevScroll = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const { scene } = useGLTF("/models/tshirt.glb");

  const tintedScene = useMemo(() => {
    const cloned = scene.clone(true);
    const tint = new THREE.Color(color);
    cloned.traverse((child) => {
      if (!(child as THREE.Mesh).isMesh) return;
      const mesh = child as THREE.Mesh;
      const src = Array.isArray(mesh.material)
        ? (mesh.material[0] as THREE.MeshStandardMaterial)
        : (mesh.material as THREE.MeshStandardMaterial);
      mesh.material = new THREE.MeshPhysicalMaterial({
        map: src?.map ?? null,
        normalMap: src?.normalMap ?? null,
        normalScale: src?.normalScale?.clone() ?? new THREE.Vector2(1, 1),
        roughnessMap: src?.roughnessMap ?? null,
        roughness: src?.roughness ?? 0.85,
        metalness: 0,
        color: tint,
        sheen: 0.6,
        sheenRoughness: 0.8,
        sheenColor: tint,
        envMapIntensity: 0.6,
      });
    });
    return cloned;
  }, [scene, color]);

  useFrame((three, delta) => {
    if (!groupRef.current) return;
    const s = state.current;
    const dt = Math.min(delta, 0.05);

    const currentScroll = window.scrollY;
    const scrollDelta = currentScroll - prevScroll.current;
    prevScroll.current = currentScroll;

    if (!s.landed) {
      // ── Falling phase ──
      // Scroll is the main driver: scroll down = shirts fall fast
      const scrollBoost = Math.max(0, scrollDelta) * 0.016;
      s.y += s.vy * dt - scrollBoost;
      s.x += s.vx * dt + Math.sin(three.clock.elapsedTime * 0.7 + s.windPhase) * 0.001;
      s.rotY += dt * 0.25 + Math.abs(scrollDelta) * 0.007;

      if (s.y <= FLOOR_Y) {
        // Hit the floor → start landing
        s.y = FLOOR_Y;
        s.vy = 0;
        s.landed = true;
        s.landedAt = three.clock.elapsedTime;
        // Tilt sideways like dropping onto the ground
        const dir = Math.random() > 0.5 ? 1 : -1;
        s.rotZFinal = dir * (Math.PI * 0.42 + Math.random() * 0.25);
      }
    } else {
      // ── Landed / settle phase ──
      const elapsed = three.clock.elapsedTime - s.landedAt;

      // Ease rotZ toward final tilt angle (shirt "falls over")
      s.rotZ += (s.rotZFinal - s.rotZ) * Math.min(dt * 6, 1);

      // After lying still for ~1.2s, respawn from top
      if (elapsed > 1.5) {
        const next = randomState(0);
        Object.assign(s, { ...next, rotY: s.rotY });
      }
    }

    groupRef.current.position.set(s.x, s.y, 0);
    groupRef.current.rotation.y = s.rotY;
    groupRef.current.rotation.z = s.rotZ;
  });

  return (
    <group ref={groupRef} scale={SHIRT_SCALE}>
      <primitive object={tintedScene} />
    </group>
  );
}

export default function ShirtScene3D() {
  return (
    <Canvas
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      dpr={[1, 1.5]}
    >
      <hemisphereLight args={["#e0f2fe", "#f8fafc", 1.2]} />
      <directionalLight position={[3, 6, 5]} intensity={1.5} />
      <directionalLight position={[-3, 1, 3]} intensity={0.5} color="#dbeafe" />
      <pointLight position={[0, -3, 4]} intensity={0.4} color="#fef3c7" />

      <Suspense fallback={null}>
        {SHIRT_COLORS.map((color, i) => (
          <FallingTShirt key={i} color={color} staggerY={i * 0.75} />
        ))}
      </Suspense>
    </Canvas>
  );
}
