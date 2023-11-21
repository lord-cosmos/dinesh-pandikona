import { Container, Typography } from "@mui/material";
import TopSection from "./containers/TopSection";
import FlashyIntro from "./containers/FlashyIntro/FlashyIntro";
import AnimatedBackground from "./components/AnimatedParticleBackground";
import AnimatedBanner from "./components/AnimatedBanner";
import CssBaseline from "@mui/material/CssBaseline";
import ScrollAnimatedBorders from "./components/ColorBorders";
// import "./App.css";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <Container sx={{ backgroundColor: "lightcyan", height: "500vh" }}>
          <AnimatedBanner />
        </Container>
        <ScrollAnimatedBorders />
        {/* <h1 className="open" children="Dinesh Pandikona"></h1> */}
      </Container>
    </>
  );
};

export default App;
