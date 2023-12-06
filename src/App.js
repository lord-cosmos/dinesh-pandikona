import { Container, Typography } from "@mui/material";
import TopSection from "./containers/TopSection";
import FlashyIntro from "./containers/FlashyIntro/FlashyIntro";
import AnimatedBackground from "./components/AnimatedParticleBackground";
import AnimatedBanner from "./components/AnimatedBanner";
import CssBaseline from "@mui/material/CssBaseline";
import ScrollAnimatedBorders from "./components/ColorBorders";
import ParallaxHeader from "./containers/ParallaxHeader/ParallaxHeader";
import { height } from "@mui/system";
// import "./App.css";
import TitleWithGradient from "./components/TitleWithGradient";
import LandingSection from "./containers/LandingSection/LandingSection";

const App = () => {
  return (
    <>
      <CssBaseline />
      <LandingSection />
      <LandingSection />
      <LandingSection />

      <ScrollAnimatedBorders />
    </>
  );
};

export default App;
