import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SnowEffect = () => {
  const snowflakesRef = useRef();
  const snowflakesCount = 1000;
  const positions = new Float32Array(snowflakesCount * 3);
  const speeds = new Float32Array(snowflakesCount);

  // Initialisation des positions des flocons de neige
  for (let i = 0; i < snowflakesCount; i++) {
    positions[i * 3] = Math.random() * 200 - 100;  // Position X
    positions[i * 3 + 1] = Math.random() * 200 - 100; // Position Y
    positions[i * 3 + 2] = Math.random() * 200 - 100; // Position Z
    speeds[i] = 0.02 + Math.random() * 0.05;
  }

  // Utilisation de useEffect pour créer la géométrie
  useEffect(() => {
    if (snowflakesRef.current) {
      const geometry = snowflakesRef.current.geometry;
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    }
  }, [snowflakesRef]);

  // Animation des flocons
  useFrame(() => {
    if (!snowflakesRef.current) return;
    const positionsAttribute = snowflakesRef.current.geometry.attributes.position;

    if (positionsAttribute) {
      const positionsArray = positionsAttribute.array;

      for (let i = 0; i < snowflakesCount; i++) {
        positionsArray[i * 3 + 1] -= speeds[i]; // Descendre les flocons

        // Remplacer les flocons s'ils sortent du cadre
        if (positionsArray[i * 3 + 1] < -100) {
          positionsArray[i * 3 + 1] = 100;
        }
      }
      positionsAttribute.needsUpdate = true;
    }
  });

  return (
    <points ref={snowflakesRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" color={0xffffff} size={0.5} transparent />
    </points>
  );
};

export default SnowEffect;
