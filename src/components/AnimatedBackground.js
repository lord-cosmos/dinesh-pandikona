import React from "react";
import ParticleBackground from "react-particle-backgrounds";

const AnimatedBackground = function () {
  const settings = {
    canvas: {
      useBouncyWalls: true
    },
    particle: {
      particleCount: 100,
      color: "#d68c38",
      minSize: 1,
      maxSize: 5,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 30,
      minSpeed: 0.2,
      maxSpeed: 4,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 5000,
    },
  };

  return <ParticleBackground settings={settings}></ParticleBackground>;
};
export default AnimatedBackground;
