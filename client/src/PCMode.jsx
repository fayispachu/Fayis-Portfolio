// GamingSetup.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function GamingSetupModel() {
  return (
    <group>
      {/* Desk */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[6, 0.3, 2]} />
        <meshStandardMaterial color="#3a3a3a" />
      </mesh>

      {/* Monitor */}
      <mesh position={[0, 0.7, -0.7]}>
        <boxGeometry args={[1.8, 1, 0.1]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      {/* Monitor Stand */}
      <mesh position={[0, 0.3, -0.7]}>
        <boxGeometry args={[0.2, 0.4, 0.1]} />
        <meshStandardMaterial color="#555" />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, 0, -0.4]}>
        <boxGeometry args={[1.5, 0.05, 0.4]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* Gaming PC Tower */}
      <mesh position={[2, 0.2, 0]}>
        <boxGeometry args={[0.6, 1.2, 0.6]} />
        <meshStandardMaterial
          color="#111"
          emissive="#0ff"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Gaming Chair */}
      <mesh position={[-2, 0.4, 0.2]}>
        <boxGeometry args={[0.6, 1.2, 0.6]} />
        <meshStandardMaterial color="#b00" />
      </mesh>
    </group>
  );
}

export default function GamingSetupScene() {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <GamingSetupModel />
      <OrbitControls />
    </Canvas>
  );
}
