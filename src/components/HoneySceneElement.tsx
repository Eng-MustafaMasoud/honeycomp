import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Cylinder } from "@react-three/drei";
import * as THREE from "three";

interface HoneySceneElementProps {
  honey: {
    id: string;
    name: string;
    benefits: string;
    color: string; // Text color (used for material)
    jarColor: string; // Jar color
  };
  position: [number, number, number];
  isActive: boolean;
}

const HoneySceneElement: React.FC<HoneySceneElementProps> = ({
  honey,
  position,
  isActive,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const textMaterialRef = useRef<THREE.MeshStandardMaterial>(null);
  const benefitsTextMaterialRef = useRef<THREE.MeshStandardMaterial>(null);
  const nameTextRef = useRef<THREE.Group>(null);
  const benefitsTextRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smoothly scale active element
      const targetScale = isActive ? 1 : 0.8;
      groupRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }

    // Animate text perspective
    if (nameTextRef.current && benefitsTextRef.current) {
      const time = state.clock.getElapsedTime();
      // Subtle rotation to follow jar curve
      nameTextRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
      benefitsTextRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Single piece jar */}
      <Cylinder args={[0.6, 0.6, 2, 32]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color={honey.jarColor}
          roughness={0.02}
          metalness={0}
          transmission={0.98}
          thickness={0.5}
          clearcoat={1}
          clearcoatRoughness={0.05}
          transparent
          opacity={0.5}
          envMapIntensity={1.5}
          ior={1.5}
        />
      </Cylinder>

      {/* Simple lid */}
      <Cylinder args={[0.62, 0.62, 0.1, 32]} position={[0, 1.05, 0]}>
        <meshStandardMaterial
          color="#F8F8F8"
          roughness={0.3}
          metalness={0.2}
          envMapIntensity={1}
        />
      </Cylinder>

      {/* 3D Text Container for Name */}
      <group ref={nameTextRef} position={[0, 0.3, 0.61]}>
        {/* Shadow text */}
        <Text
          fontSize={0.11}
          anchorX="center"
          anchorY="middle"
          maxWidth={1}
          position={[0.01, 0.01, -0.01]}
          renderOrder={0}
        >
          {honey.name}
          <meshBasicMaterial color="#fff" transparent opacity={0.5} />
        </Text>
        {/* Main text */}
        <Text
          fontSize={0.11}
          anchorX="center"
          anchorY="middle"
          maxWidth={1}
          depthOffset={-1}
          renderOrder={1}
          textAlign="center"
        >
          {honey.name}
          <meshStandardMaterial
            ref={textMaterialRef}
            color={honey.color}
            roughness={0.2}
            metalness={0.1}
            transparent
            opacity={0.95}
          />
        </Text>
      </group>

      {/* 3D Text Container for Benefits */}
      <group ref={benefitsTextRef} position={[0, 0.05, 0.61]}>
        {/* Main benefits text */}
        <Text
          fontSize={0.065}
          anchorX="center"
          anchorY="top"
          maxWidth={1}
          textAlign="center"
          lineHeight={1.2}
          depthOffset={-1}
          renderOrder={1}
        >
          {honey.benefits}
          <meshStandardMaterial
            ref={benefitsTextMaterialRef}
            color={honey.color}
            roughness={0.2}
            metalness={0.1}
            transparent
            opacity={0.95}
          />
        </Text>
      </group>
    </group>
  );
};

export default HoneySceneElement;
