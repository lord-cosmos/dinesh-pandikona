import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  leftBorder: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    borderRight: "2px solid #FF671F", // Adjust color and width as needed
    zIndex: 999, // Ensure it's above other content
  },
  rightBorder: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    borderLeft: "2px solid #046A38", // Adjust color and width as needed
    zIndex: 999, // Ensure it's above other content
  },
}));

const LeftBorder = ({ scrollY }) => {
  const classes = useStyles();
  let ratio = scrollY / 25;
  ratio = ratio > 25 ? 25 : ratio;
  const springProps = useSpring({
    borderRightWidth: `${ratio}px`, // Adjust the scroll range and width
  });

  return (
    <animated.div className={classes.leftBorder} style={{ ...springProps }} />
  );
};

const RightBorder = ({ scrollY }) => {
  const classes = useStyles();
  let ratio = scrollY / 25;
  ratio = ratio > 25 ? 25 : ratio;
  const springProps = useSpring({
    borderLeftWidth: `${ratio}px`, // Adjust the scroll range and width
  });

  return (
    <animated.div className={classes.rightBorder} style={{ ...springProps }} />
  );
};

export default function ScrollAnimatedBorders() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <LeftBorder scrollY={scrollY} />
      <RightBorder scrollY={scrollY} />
      {/* Your content */}
    </>
  );
}
