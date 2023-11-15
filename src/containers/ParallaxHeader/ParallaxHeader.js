import React, { useRef } from "react";
import {
  ParallaxBanner,
  Parallax,
  ParallaxProvider,
  useParallax,
} from "react-scroll-parallax";
import "./ParallaxHeader.css";

const ParallaxHeader = () => {
  const parallax = useParallax({
    rotateY: [0, 360],
  });

  return (
    <div className="container-body">
      <div ref={parallax.ref} className="spinner"></div>
    </div>
  );
};

export default ParallaxHeader;
