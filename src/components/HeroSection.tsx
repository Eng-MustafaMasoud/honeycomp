import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import HoneySceneElement from "./HoneySceneElement";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const honeyData = [
  {
    id: "wildflower",
    name: "Wildflower Honey",
    benefits:
      "Aromatic blend from diverse wildflowers.\nRich in antioxidants, supports local ecosystems.",
    color: "#4A3B31", // Dark brown text for contrast on beige
    jarColor: "#FFD700", // Gold
  },
  {
    id: "manuka",
    name: "Manuka Honey",
    benefits:
      "Derived from the Manuka bush in New Zealand.\nHighly antibacterial, supports wound healing and digestion.",
    color: "#3E2C1C", // Deep brown for richness
    jarColor: "#8B4513", // Saddle brown
  },
  {
    id: "acacia",
    name: "Acacia Honey",
    benefits:
      "Delicate flavor from acacia blossoms.\nLow glycemic index, helps regulate blood sugar.",
    color: "#3B3B3B", // Neutral dark for pale honey
    jarColor: "#FFF8DC", // Cornsilk
  },
  {
    id: "buckwheat",
    name: "Buckwheat Honey",
    benefits:
      "Strong, malty flavor and dark color.\nHigh in iron and antioxidants, great for immune support.",
    color: "#2F1B0C", // Very dark brown
    jarColor: "#654321", // Dark chocolate
  },
  {
    id: "clover",
    name: "Clover Honey",
    benefits:
      "Classic mild taste from clover fields.\nVersatile and naturally soothing.",
    color: "#4A3B31",
    jarColor: "#FFFACD", // Lemon chiffon
  },
  {
    id: "orange-blossom",
    name: "Orange Blossom Honey",
    benefits:
      "Citrusy notes from orange groves.\nCalming aroma, supports respiratory health.",
    color: "#5C4033",
    jarColor: "#FFA500", // Orange
  },
  {
    id: "eucalyptus",
    name: "Eucalyptus Honey",
    benefits:
      "Herbal taste from eucalyptus trees.\nHelps relieve cold symptoms and sore throats.",
    color: "#3A2F2F",
    jarColor: "#A9A9A9", // Dark gray
  },
];

const SceneContent: React.FC<{
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}> = ({ activeIndex, setActiveIndex }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const [targetX, setTargetX] = useState(0);

  useEffect(() => {
    const itemSpacing = 4;
    const newTargetX = -activeIndex * itemSpacing;
    setTargetX(newTargetX);
  }, [activeIndex]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        targetX,
        0.1
      );
    }
  });

  const itemSpacing = 4;

  return (
    <>
      <ambientLight intensity={1.0} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={0.8} />

      <group ref={groupRef}>
        {honeyData?.map((honey, index) => (
          <HoneySceneElement
            key={honey.id}
            honey={honey}
            position={[index * itemSpacing, 0, 0]}
            isActive={index === activeIndex}
          />
        ))}
      </group>
    </>
  );
};

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout>();

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : honeyData.length - 1));
    resetTimer();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < honeyData.length - 1 ? prev + 1 : 0));
    resetTimer();
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying) {
      resetTimer();
    } else {
      clearInterval(timerRef.current);
    }
  };

  const resetTimer = () => {
    if (isAutoPlaying) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(handleNext, 5000);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(handleNext, 5000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoPlaying]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-start bg-nature-beige relative overflow-hidden"
    >
      {/* Title Section */}
      <div className="mt-20 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-honey-dark mb-4 animate-fade-in-up">
          Pure & Natural Honey
          <br />
          <span className="text-honey">Sweetness From Nature</span>
        </h1>
      </div>

      {/* Canvas Section */}
      <div className="w-full h-[60vh] relative z-0">
        <Canvas
          camera={{ position: [0, 1, 7], fov: 50 }}
          shadows
          style={{ width: "100%", height: "100%" }}
        >
          <Suspense fallback={null}>
            <SceneContent
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Slider Content - Now below the canvas */}
      <div className="w-full max-w-xl px-4 mt-8 z-10">
        <div className="bg-white/50 backdrop-blur-sm text-center rounded-2xl p-8 shadow-xl">
          <h2 className="text-xl md:text-lg font-bold text-honey-dark mb-4">
            {honeyData[activeIndex].name}
          </h2>
          <p className="text-sm md:text-sm text-gray-700 leading-relaxed">
            {honeyData[activeIndex].benefits}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
