
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function AnimatedBox() {
    const meshRef = useRef();
  
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
      }
    });
  
    return (
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }
  

  
