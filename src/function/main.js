import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "@react-three/drei";
import SnowEffect from "./snow";

const Scene = () => {
  const fbx = useLoader(FBXLoader, 'assets/models/winterIsland.fbx');
  const pivotRef = useRef();

  useFrame(() => {
    if (pivotRef.current) {
      // modelRef.current.rotation.x += 0.01;
      pivotRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={pivotRef} position={[0, -120, -400]}>
      <primitive object={fbx} position={[-20, 0, 0]} scale={[0.08, 0.08, 0.08]} />
      <hemisphereLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </group>
  );
};

const ThreeCanvas = () => {
  return (
    <Canvas style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 0
    }}>
      <ambientLight intensity={0.5} />
      <SnowEffect/>
      <Scene />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeCanvas;

