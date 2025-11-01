import './App.css'
import { Canvas } from '@react-three/fiber'

import Cube from './components/Cube'

function App() {
 
 

  return (
    <Canvas>

      <directionalLight position={[0, 0, 2]} />
      <ambientLight intensity={0.5} />
      <Cube position={[2, 0, 0]} args={[2, 2, 3]} color="blue" />
      
    </Canvas>
  )
}

export default App

//minute 50:50
