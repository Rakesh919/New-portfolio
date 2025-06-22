import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedWaves({ width = 16, depth = 16, size = 10 }) {
  const mesh = useRef();
  const verticesRef = useRef([]);

  // Generate grid vertices
  const geometry = React.useMemo(() => {
    const geo = new THREE.PlaneGeometry(width, depth, width, depth);
    geo.rotateX(-Math.PI / 2);
    verticesRef.current = geo.attributes.position.array.slice();
    return geo;
  }, [width, depth]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pos = mesh.current.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3;
      const origY = verticesRef.current[ix + 1];
      pos.setY(i, origY + Math.sin(t * 1.2 + ix * 0.15) * 0.35 + Math.cos(t * 0.7 + ix * 0.12) * 0.18);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh ref={mesh} geometry={geometry} position={[0, -2.5, 0]} receiveShadow>
      <meshStandardMaterial
        color="#6366f1"
        roughness={0.7}
        metalness={0.2}
        transparent
        opacity={0.45}
        flatShading
      />
    </mesh>
  );
}

const Hero3DParticles = () => (
  <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
    <Canvas camera={{ position: [0, 2, 12], fov: 60 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <AnimatedWaves />
    </Canvas>
  </div>
);

export default Hero3DParticles; 