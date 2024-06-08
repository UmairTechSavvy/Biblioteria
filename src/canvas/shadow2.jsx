import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop2 = () => {
  const shadows = useRef();

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5] }} // Adjust camera position as needed
    >
      <AccumulativeShadows
        ref={shadows}
        temporal
        frames={60}
        alphaTest={0.85}
        scale={10} // Typo: 'scae' -> 'scale'
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -0.14]}
      >
        <RandomizedLight 
          amount={2}
          radius={4}
          intensity={0.55}
          ambient={0.25}
          position={[5, 5, -10]}
        />
        <RandomizedLight 
          amount={2}
          radius={2}
          intensity={0.2}
          ambient={0.3}
          position={[-5, 5, -9]}
        />
      </AccumulativeShadows>
    </Canvas>
  )
}

export default Backdrop2;
