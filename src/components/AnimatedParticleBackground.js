import React from "react";
import ParticleBackground from "react-particle-backgrounds";

const AnimatedParticleBackground = function () {
  const settings = {
    canvas: {
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 50,
      color: "#000",
      minSize: 1,
      maxSize: 5,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 30,
      minSpeed: 0.2,
      maxSpeed: 1,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 5000,
    },
  };

  return <ParticleBackground settings={settings}></ParticleBackground>;
};
export default AnimatedParticleBackground;
