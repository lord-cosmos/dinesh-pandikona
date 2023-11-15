import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { ParallaxProvider } from "react-scroll-parallax";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ParallaxProvider scrollAxis="vertical">
        <App />
      </ParallaxProvider>
    </ThemeProvider>
  </React.StrictMode>
);
