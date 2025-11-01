import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Cube = ({position, args, color}) => {
  
  //make a reference to the mesh
  const ref = useRef();

  //animate the cube
  useFrame((state, delta) => {
    let speed = isHovered ? 0.1 : 0.5;
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed;
    //ref.current.position.z += Math.sin(state.clock.getElapsedTime()) * 0.1;
  })
  
  const [isHovered, setIsHovered] = React.useState(false);
  const onHover = () => {
    setIsHovered(true);
    console.log("Object is hovered", isHovered);
  };
  const onUnHover = () => {
    setIsHovered(false);
    console.log("Object is not hovered", isHovered);
  };


  return (
    
    <mesh position={position} ref={ref} onPointerOver={() => onHover()} onPointerOut={() => onUnHover()} >
        <boxGeometry args={args} />
        <meshStandardMaterial color={isHovered ? color : "red"} />
    </mesh>
    
  )
}

export default Cube;