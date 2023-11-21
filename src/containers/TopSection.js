import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import ProfileImage from "../components/ProfileImage";
// import { ParallaxBanner } from "react-scroll-parallax";

function TopSection() {
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          color: "black",
          backgroundColor: "#00000",
          fontFamily: "fantasy",
          py: 1,
          mb: 2,
        }}
      >
        Dinesh Pandikona
      </Typography>
      <ProfileImage />
    </Container>
  );
}

export default TopSection;
