import React from "react";
import "./ParallaxHeader.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ss from "../../assets/ss.svg";
import profilepic from "../../assets/Edit-pic-0.png";
const ParallaxHeader = () => {
  const imageUrl =
    "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <Parallax
      pages={3}
      //   style={{ backgroundImage: "linear-gradient(#FF671F, #046A38)" }}
      style={{
        // backgroundImage: `url(${imageUrl})`,
        // backgroundImage: `url(${ss})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <ParallaxLayer offset={0} className="center">
        <img src={profilepic} alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} className="center">
        <div>Hello world</div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} className="center">
        <div>Hello</div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxHeader;
