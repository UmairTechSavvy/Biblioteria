

import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Backdrop2 from './shadow2';
import CameraRig from './CamerRig';

const CanvasModel3 = () => {
  const controls = useRef();

  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 5] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      {/* Ambient light */}
      <ambientLight intensity={0.5} />

      {/* Directional light */}
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

      {/* Spotlights */}
      <spotLight position={[5, 5, -5]} angle={0.8} intensity={0.8} penumbra={1} castShadow />
      <spotLight position={[-5, 5, -5]} angle={0.8} intensity={0.8} penumbra={1} castShadow />

      {/* Add environment */}
      <Environment preset="sunset" background />

      {/* Add OrbitControls for camera navigation */}
      <OrbitControls ref={controls} />

      {/* Your 3D Models go here */}
      {/* Example: <mesh><boxGeometry /><meshStandardMaterial color="red" /></mesh> */}
      <CameraRig >
      <Backdrop2 />
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel3;
