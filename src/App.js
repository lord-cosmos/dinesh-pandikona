import { Container, Typography } from "@mui/material";
import TopSection from "./containers/TopSection";
import FlashyIntro from "./containers/FlashyIntro/FlashyIntro";
import AnimatedBackground from "./components/AnimatedParticleBackground";
import AnimatedBanner from "./components/AnimatedBanner";
import CssBaseline from "@mui/material/CssBaseline";
import ScrollAnimatedBorders from "./components/ColorBorders";
import ParallaxHeader from "./containers/ParallaxHeader/ParallaxHeader";
import { Box, height } from "@mui/system";
// import "./App.css";
import TitleWithGradient from "./components/TitleWithGradient";
import LandingSection from "./containers/LandingSection/LandingSection";
import WorkSection from "./containers/WorkSection/WorkSection";
import Carousel from "./components/Carousel/Carousel";

const App = () => {
  return (
    <>
      <CssBaseline />
      <LandingSection />
      {/* <ParallaxHeader /> */}
      <WorkSection />
      <ScrollAnimatedBorders />
    </>
  );
};

export default App;
