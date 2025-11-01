import Cube from './Cube'
import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { DirectionalLightHelper } from 'three';

const Scene = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper, 2, "black");  

  return (
    <>
        <directionalLight position={[0, 0, 2]} ref={directionalLightRef} />
        <ambientLight intensity={0.5} />
        <Cube position={[2, 0, 0]} args={[2, 2, 3]} color="blue" />
        <OrbitControls/>
    </>
  )
}

export default Scene