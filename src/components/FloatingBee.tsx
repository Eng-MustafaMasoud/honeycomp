import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Bee model with animation
function BeeModel() {
  const beeRef = useRef<THREE.Group>(null);
  const wingsRef = useRef<THREE.Group>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = maxScroll > 0 ? scrollY / maxScroll : 0;
      setScrollPosition(scrollRatio);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Wing flapping
    if (wingsRef.current) {
      wingsRef.current.children[0].rotation.z = Math.sin(t * 35) * 0.5;
      wingsRef.current.children[1].rotation.z = -Math.sin(t * 35) * 0.5;
    }

    // Rotate and move bee
    if (beeRef.current) {
      const fullRotation = scrollPosition * Math.PI * 2;
      const xOffset = Math.sin(scrollPosition * Math.PI * 2) * 0.4;

      beeRef.current.rotation.y = THREE.MathUtils.lerp(
        beeRef.current.rotation.y,
        fullRotation,
        0.1
      );

      beeRef.current.position.x = THREE.MathUtils.lerp(
        beeRef.current.position.x,
        xOffset,
        0.1
      );

      beeRef.current.position.z = THREE.MathUtils.lerp(
        beeRef.current.position.z,
        -0.2,
        0.1
      );
    }
  });

  return (
    <group ref={beeRef} scale={0.2}>
      {/* Thorax */}
      <mesh position={[0, 0, -0.05]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#FFC107" roughness={0.6} />
      </mesh>
      {/* Abdomen */}
      <mesh position={[0, -0.02, 0.12]}>
        <sphereGeometry args={[0.11, 16, 16]} />
        <meshStandardMaterial color="#FFB300" roughness={0.6} />
      </mesh>
      <mesh position={[0, -0.03, 0.25]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#D2691E" roughness={0.5} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.06, -0.15]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#4A4A4A" roughness={0.4} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.04, 0.08, -0.2]}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshStandardMaterial color="#222222" roughness={0.1} />
      </mesh>
      <mesh position={[0.04, 0.08, -0.2]}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshStandardMaterial color="#222222" roughness={0.1} />
      </mesh>
      {/* Antennae */}
      <mesh position={[-0.035, 0.13, -0.17]} rotation={[0, 0.2, 0.6]}>
        <cylinderGeometry args={[0.007, 0.005, 0.09, 8]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      <mesh position={[0.035, 0.13, -0.17]} rotation={[0, -0.2, -0.6]}>
        <cylinderGeometry args={[0.007, 0.005, 0.09, 8]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      {/* Wings */}
      <group ref={wingsRef} position={[0, 0.08, -0.03]}>
        <mesh position={[-0.05, 0, 0]} rotation={[0.25, 0.3, 0]}>
          <planeGeometry args={[0.28, 0.13]} />
          <meshStandardMaterial
            color="#AFEEEE"
            transparent
            opacity={0.45}
            side={THREE.DoubleSide}
            roughness={0.1}
            metalness={0.05}
          />
        </mesh>
        <mesh position={[0.05, 0, 0]} rotation={[0.25, -0.3, 0]}>
          <planeGeometry args={[0.28, 0.13]} />
          <meshStandardMaterial
            color="#AFEEEE"
            transparent
            opacity={0.45}
            side={THREE.DoubleSide}
            roughness={0.1}
            metalness={0.05}
          />
        </mesh>
      </group>
      {/* Stripes */}
      <mesh position={[0, 0, -0.02]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.125, 0.025, 8, 32]} />
        <meshStandardMaterial color="#333333" roughness={0.7} />
      </mesh>
      <mesh position={[0, -0.015, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.11, 0.025, 8, 32]} />
        <meshStandardMaterial color="#333333" roughness={0.7} />
      </mesh>
      {/* Legs */}
      {[...Array(3)].map((_, i) => (
        <React.Fragment key={`leg-pair-${i}`}>
          <mesh
            position={[-0.05 - i * 0.01, -0.12 + i * 0.01, -0.08 + i * 0.08]}
            rotation={[0, -0.2, -0.8 + i * 0.15]}
          >
            <cylinderGeometry args={[0.01, 0.008, 0.12, 6]} />
            <meshStandardMaterial color="#4A3B31" roughness={0.8} />
          </mesh>
          <mesh
            position={[0.05 + i * 0.01, -0.12 + i * 0.01, -0.08 + i * 0.08]}
            rotation={[0, 0.2, 0.8 - i * 0.15]}
          >
            <cylinderGeometry args={[0.01, 0.008, 0.12, 6]} />
            <meshStandardMaterial color="#4A3B31" roughness={0.8} />
          </mesh>
        </React.Fragment>
      ))}
    </group>
  );
}

// Bobbing wrapper
function AnimatedBee() {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    let animationId: number;
    const animate = () => {
      if (groupRef.current) {
        groupRef.current.position.y = Math.sin(Date.now() * 0.0025) * 0.06;
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <group ref={groupRef}>
      <BeeModel />
    </group>
  );
}

// Main floating bee
const FloatingBee: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkVisibility = () => {
      setIsVisible(window.innerWidth >= 768); // hide on small screens
    };

    checkVisibility();
    window.addEventListener("resize", checkVisibility);
    return () => window.removeEventListener("resize", checkVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 40,
      }}
    >
      <Canvas camera={{ position: [0, 0, 1.8], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 3, 5]} intensity={2.5} />
        <AnimatedBee />
      </Canvas>
    </div>
  );
};

export default FloatingBee;
