import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Computers from "./Computers";
import CanvasLoader from "../layout/CanvasLoader";

const ComputersCanvas = () => {
  return (
    <div className="w-full h-full">
      {" "}
      <Canvas
        shadows
        camera={{ position: [5, 5, 12], fov: 40 }}
        gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", (event) => {
            event.preventDefault();
            console.warn("⚠️ WebGL context lost.");
          });
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />

          <ambientLight intensity={0.6} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={780}
          />

          <Computers />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
