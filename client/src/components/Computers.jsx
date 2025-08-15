import React from "react";
import { useGLTF } from "@react-three/drei";

const Computers = () => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  return (
    <primitive
      object={scene}
      scale={0.8}
      position={[0, -0.5, 0]}
      rotation={[0, Math.PI / 6, 0]}
    />
  );
};

export default Computers;

useGLTF.preload("/desktop_pc/scene.gltf");
