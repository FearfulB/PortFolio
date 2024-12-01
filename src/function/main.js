
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'


// export default function AnimatedBox() {
//     const meshRef = useRef();
  
//     useFrame(() => {
//       if (meshRef.current) {
//         meshRef.current.rotation.x += 0.01;
//         meshRef.current.rotation.y += 0.01;
//       }
//     });
  
//     return (
//       <mesh ref={meshRef} position={[0, 0, -200]}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color="red" />
//       </mesh>
//     );
//   }


export function LoadFbx(){

  const fbx = useLoader(FBXLoader, 'assets/models/winterIsland.fbx');
  const pivotRef = useRef();

  useFrame(() => {
    if (pivotRef.current) {
      // modelRef.current.rotation.x += 0.01;
      pivotRef.current.rotation.y += 0.004;
    }
  });
  

  return (
    <>
    <object3D ref = {pivotRef} position={[0,-120, -400]} >
      <primitive object={fbx} position = {[-20,0,0]}  scale={[0.1,0.1,0.1 ]} />
    </object3D>
    </>
  );
}
