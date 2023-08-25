import { Canvas, extend } from "@react-three/fiber";
// import { shaderMaterial } from "@react-three/drei";
// import glsl from "babel-plugin-glsl/macro";

const Scene = () => {
  return (
  <Canvas className="canvas">
    <pointLight position={[10, 10, 10]}/>
    <mesh>
      <planeGeometry args={[3, 5]} />
      <meshStandardMaterial color='lightblue'/>
    </mesh>
  </Canvas>
  )
}

export default Scene;