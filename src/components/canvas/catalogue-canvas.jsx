import { Canvas, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";


const WaveShaderMaterial = shaderMaterial(
  {},
  glsl`
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4
      (position, 1.0)
    }
  `,
  glsl`
    voind main() {
      gl_FragColor = vec4(0.0,0.4,1.0,1.0);
    }
  `
);

extend({ WaveShaderMaterial });

const Scene = () => {
  return (
  <Canvas className="canvas">
    <pointLight position={[10, 10, 10]}/>
    <mesh>
      <planeGeometry args={[3, 5]} />
      <waveShaderMaterial color='lightblue'/>
    </mesh>
  </Canvas>
  )
}

export default Scene;