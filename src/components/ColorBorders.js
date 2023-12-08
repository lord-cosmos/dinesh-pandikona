import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { makeStyles } from "@mui/styles";
import theme from "../theme";

const primary = theme.palette.primary.main;
const secondary = theme.palette.secondary.main;

const useStyles = makeStyles((theme) => ({
  leftBorder: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    borderRight: `1px double ${theme.palette.secondary.main}`, // Adjust color and width as needed
    zIndex: 999, // Ensure it's above other content
  },
  rightBorder: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    borderLeft: `1px double ${theme.palette.secondary.main}`, // Adjust color and width as needed
    zIndex: 999, // Ensure it's above other content
  },
}));

const LeftBorder = ({ scrollY }) => {
  // Calculate the number of 100vh sections scrolled
  const sectionsScrolled = Math.floor(scrollY / window.innerHeight);

  // Define an array of colors for each section
  const colors = [secondary, primary, primary, "yellow"]; // Add more colors as needed

  // Get the color based on the section scrolled
  const colorIndex = sectionsScrolled % colors.length;
  const color = colors[colorIndex];
  const classes = useStyles();
  let ratio = scrollY / 25;
  ratio = ratio > 25 ? 25 : ratio;
  const springProps = useSpring({
    borderRightWidth: `${ratio}px`, // Adjust the scroll range and width
    borderRightColor: color,
  });

  return (
    <animated.div className={classes.leftBorder} style={{ ...springProps }} />
  );
};

const RightBorder = ({ scrollY }) => {
  // Calculate the number of 100vh sections scrolled
  const sectionsScrolled = Math.floor(scrollY / window.innerHeight);

  // Define an array of colors for each section
  const colors = [secondary, primary, primary, "yellow"]; // Add more colors as needed

  // Get the color based on the section scrolled
  const colorIndex = sectionsScrolled % colors.length;
  const color = colors[colorIndex];
  const classes = useStyles();
  let ratio = scrollY / 25;
  ratio = ratio > 25 ? 25 : ratio;
  const springProps = useSpring({
    borderLeftWidth: `${ratio}px`, // Adjust the scroll range and width
    borderLeftColor: color,
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
