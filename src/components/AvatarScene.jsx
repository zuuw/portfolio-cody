"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import ModelMe from "./models/cody-head";

function AvatarCameraLogic({ scrollY }) {
  const { camera } = useThree();

  useFrame(() => {
    // Adjust the camera's position without scaling the model
    const targetY = 1 - Math.min(scrollY / 1000, 1) * 2;  // Camera moves downward based on scroll
    camera.position.y = targetY;
    camera.lookAt(0, 0, 0);  // Keep the camera looking at the model
  });

  return null;
}

export default function AvatarScene() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    console.log(scrollY.valueOf);
  }, []);

  return (
    <Canvas className="w-full h-screen">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />

      <ModelMe />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3} 
        maxPolarAngle={Math.PI / 2} 
        minDistance={3}             
        maxDistance={10}            
      />

      <AvatarCameraLogic scrollY={scrollY} />
    </Canvas>
  );
}
