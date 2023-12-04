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

const App = () => {
  return (
    <>
      <CssBaseline />
      {/* <ParallaxHeader /> */}
      <p style={{ height: "200vh" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eius saepe
        quo necessitatibus eveniet consectetur impedit molestias quisquam
        tempore fuga obcaecati, sunt aspernatur reiciendis nihil officiis quam
        cumque provident. Eos vel veritatis voluptatem quis dolorum repudiandae
        ipsam cum placeat iure dignissimos, sapiente, sequi quas expedita.
        <TitleWithGradient from="cyan" />
      </p>
      <ScrollAnimatedBorders />
    </>
  );
};

export default App;
