import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Stars, Float, Torus, Icosahedron, Sphere } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main central shape */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron args={[1, 0]} position={[2, 1, -2]}>
          <meshStandardMaterial color="#00ffff" wireframe />
        </Icosahedron>
      </Float>

      {/* Floating Torus */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Torus args={[0.8, 0.2, 16, 100]} position={[-3, 2, -4]} rotation={[Math.PI / 3, 0, 0]}>
           <meshStandardMaterial color="#6366f1" roughness={0.5} metalness={0.8} />
        </Torus>
      </Float>

      {/* Distant Sphere */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[0.5, 32, 32]} position={[3, -2, -3]}>
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.2} roughness={0.2} />
        </Sphere>
      </Float>
      
       {/* Wireframe Cube */}
       <Float speed={2.5} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[-2, -1, -1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#a855f7" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#020617']} /> {/* Deep slate/black background matching theme */}
          <fog attach="fog" args={['#020617', 5, 20]} />
          
          <group rotation={[0, 0, Math.PI / 4]}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          </group>
          
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
          <pointLight position={[-5, 5, -5]} intensity={5} color="#00ffff" />
          <pointLight position={[5, -5, -5]} intensity={5} color="#a855f7" />
          
          <FloatingShapes />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
