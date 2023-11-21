import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  leftBorder: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    borderRight: "50px solid orange", // Adjust color and width as needed
    zIndex: 999, // Ensure it's above other content
  },
  rightBorder: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100%",
    borderLeft: "50px solid green", // Adjust color and width as needed
    zIndex: 999, // Ensure it's above other content
  },
}));

const LeftBorder = ({ scrollY }) => {
  const classes = useStyles();
  const springProps = useSpring({
    borderRightWidth: `${scrollY / 5}px`, // Adjust the scroll range and width
  });

  return (
    <animated.div className={classes.leftBorder} style={{ ...springProps }} />
  );
};

const RightBorder = ({ scrollY }) => {
  const classes = useStyles();
  const springProps = useSpring({
    borderLeftWidth: `${scrollY / 5}px`, // Adjust the scroll range and width
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
