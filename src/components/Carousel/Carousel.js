import React, { useEffect, useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import vectorImg from "./../../assets/endless-constellation.png";
import "./Carousel.css";
function Carousel({ slides = ["slide1", "slide2", "slide3"] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((active) => (active + 1) % slides.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // the first arg can be any data in an array.
  const transitions = useTransition([activeIndex], {
    from: { opacity: 0, display: "none" },
    enter: { opacity: 1, display: "block" },
    leave: { opacity: 0, display: "none" },
    config: { duration: 1000 },
  });

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="btn prev" onClick={prevSlide}>
        &#10094;
      </div>
      <div className="slides">
        {transitions((styles, index) => {
          return (
            <animated.img
              className="slide"
              key={index}
              style={{
                ...styles,
                height: "30rem",
                width: "40rem",
              }}
              src={slides[index]}
            />
          );
        })}
      </div>

      <div className="btn next" onClick={nextSlide}>
        &#10095;
      </div>

      {/* <div className="vector-frame">
        <img src={vectorImg} alt="vector" className="vector" />
      </div> */}
    </div>
  );
}

export default Carousel;
