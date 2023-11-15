import { Container, Typography } from "@mui/material";
import TopSection from "./containers/TopSection";
import ParallaxHeader from "./containers/ParallaxHeader/ParallaxHeader";
import { ParallaxProvider } from "react-scroll-parallax";
import FlashyIntro from "./containers/FlashyIntro/FlashyIntro";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <Container>
      <TopSection />
      <FlashyIntro />
      <AnimatedBackground />
    </Container>
  );
}

export default App;
