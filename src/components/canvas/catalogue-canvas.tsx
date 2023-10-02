// @ts-nocheck
import { shaderMaterial } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import glsl from "babel-plugin-glsl/macro";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Product } from '../../typings/index';

type TopologyProps = {
  hoveredProduct? : Product | undefined,
  selectedProduct: Product |undefined
}

type WaveProps = {
  product: Product | undefined,
  selectedProduct: Product |undefined
}

const WaveShaderMaterial:any = shaderMaterial(
  // Uniform
  {
    time: 0.1 ,
    speed:  0.0001 ,
    waveDefinition: 1.5 ,
    waveAmplitude:  0.17 ,
    topoDefinition: 20 ,
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

        gl_FragColor = vec4(topoColor, 8.5 - line);
      }
    `
);

extend({ WaveShaderMaterial });

const Wave = ({product, selectedProduct}:WaveProps) => {
  const ref = useRef({
    time:0,
    speed:0,
    topoColor:{}
  });
  let reference:object = {};

  useFrame(() => {
    //SPEED SETTING
    if(reference === product){
      ref.current.time += ref.current.speed*2;
      return;

    }else{
      ref.current.time += ref.current.speed;
    }

    //COLOUR SETTING
    if(product && product.color_accents){
      let colours = product.color_accents.primary;
      ref.current.topoColor = new THREE.Color(colours[0]/255, colours[1]/255, colours[2]/255)
      reference = product;

    }else if (selectedProduct) {
      let colours = selectedProduct.color_accents.primary;
      ref.current.topoColor = new THREE.Color(colours[0]/255, colours[1]/255, colours[2]/255)
      reference = selectedProduct;
    }
    else{
      ref.current.topoColor = new THREE.Color(225/255, 225/255, 225/255)
    }
  })

  return (
    <mesh>
      <planeGeometry args={[13, 13, 110, 110]} />
      <waveShaderMaterial ref={ref} />
    </mesh>
  );
};

const Scene = ({hoveredProduct,selectedProduct}:TopologyProps) => {
  const [product, setProduct] = useState<Product | undefined>(hoveredProduct)

  useEffect(() => {
    setProduct(hoveredProduct);
  }, [hoveredProduct])

  return (
    <Canvas id="demoTest" className="canvas" camera={{ fov: 60, position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Wave product={product} selectedProduct={selectedProduct} />
      </Suspense>
    </Canvas>
  );
};


export default Scene;
