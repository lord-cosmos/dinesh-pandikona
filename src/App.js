import { Container, Typography } from "@mui/material";
import TopSection from "./containers/TopSection";
import FlashyIntro from "./containers/FlashyIntro/FlashyIntro";
import AnimatedBackground from "./components/AnimatedParticleBackground";
import AnimatedBanner from "./components/AnimatedBanner";
import CssBaseline from "@mui/material/CssBaseline";
import ScrollAnimatedBorders from "./components/ColorBorders";
import ParallaxHeader from "./containers/ParallaxHeader/ParallaxHeader";
// import "./App.css";

const App = () => {
  return (
    <>
      <CssBaseline />
      <ParallaxHeader />
      <ScrollAnimatedBorders />
    </>
  );
};

export default App;
