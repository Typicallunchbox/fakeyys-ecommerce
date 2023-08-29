import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
// import "./styles.scss";

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),

    time: 0.1 ,
    speed:  0.0005 ,

    waveDefinition: 1.5 ,
    waveAmplitude:  0.17 ,

    topoDefinition: 30 ,
    topoColor: new THREE.Color(0/255, 0/255, 0/255) ,
  },
  // Vertex Shader
  glsl`
      vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }

      vec2 mod289(vec2 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }

      vec3 permute(vec3 x) {
        return mod289(((x*34.0)+1.0)*x);
      }

      float snoise(vec2 v)
      {
        const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
            0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
            -0.577350269189626,  // -1.0 + 2.0 * C.x
            0.024390243902439); // 1.0 / 41.0
        // First corner
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);

        // Other corners
        vec2 i1;
        //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
        //i1.y = 1.0 - i1.x;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        // x0 = x0 - 0.0 + 0.0 * C.xx ;
        // x1 = x0 - i1 + 1.0 * C.xx ;
        // x2 = x0 - 1.0 + 2.0 * C.xx ;
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;

        // Permutations
        i = mod289(i); // Avoid truncation effects in permutation
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
            + i.x + vec3(0.0, i1.x, 1.0 ));

        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;

        // Gradients: 41 points uniformly over a line, mapped onto a diamond.
        // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;

        // Normalise gradients implicitly by scaling m
        // Approximation of: m *= inversesqrt( a0*a0 + h*h );
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

        // Compute final noise value at P
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      uniform float time;
      uniform float waveDefinition;
      uniform float waveAmplitude;

      varying vec3 vPosition;

      void main(void) {
        float newZ = snoise(uv) + snoise((uv * waveDefinition) + time);
        newZ *= waveAmplitude;

        vec3 newPosition = vec3(position.xy, position.z + newZ);
        vPosition = newPosition;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,
  // Fragment Shader
  glsl`
      float map(float value, float inMin, float inMax, float outMin, float outMax) {
        return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
      }


      uniform float waveAmplitude;
      uniform float topoDefinition;
      uniform vec3 topoColor;

      varying vec3 vPosition;

      void main(void) {
        float coord = vPosition.z * topoDefinition;
        float line = abs(fract(coord - 0.1) - 0.5) / fwidth(coord);
        line /= 1.1;

        gl_FragColor = vec4(topoColor, 2.0 - line);
      }
    `
);

extend({ WaveShaderMaterial });

const Wave = () => {
  const ref = useRef();
  useFrame(({ clock }) => (
    // ref.current.uTime = clock.getElapsedTime()
    ref.current.time += ref.current.speed
    
    ));

  const [image] = useLoader(THREE.TextureLoader, [
    "https://images.unsplash.com/photo-1604011092346-0b4346ed714e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
  ]);

  return (
    <mesh>
      <planeGeometry args={[12, 12, 100, 100]} />
      <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas id="demoTest" className="canvas" camera={{ fov: 12, position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Wave />
      </Suspense>
    </Canvas>
  );
};

const App = () => {
  return (
    <>
      <Scene />
    </>
  );
};

export default App;
