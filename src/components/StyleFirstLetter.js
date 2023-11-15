import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "../theme";

const CapitalizedText = styled("div")({
  textTransform: "capitalize",
  display: "inline",
  color: "rgb(246, 59, 59)",
  fontSize: "32px",
});

const StyleFirstLetter = ({ content }) => {
  // Capitalize the first letter of the content
  const capitalizedContent = content.charAt(0).toUpperCase() + content.slice(1);

  return <CapitalizedText>{capitalizedContent}</CapitalizedText>;
};

export default StyleFirstLetter;
