import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "../theme";

const CapitalizedText = styled("div")({
  textTransform: "capitalize",
  display: "inline",
  fontSize: "32px",
});

const StyleFirstLetter = ({ content, color }) => {
  const capitalizedContent = content.charAt(0).toUpperCase() + content.slice(1);
  return (
    <CapitalizedText sx={{ color: color }}>
      {capitalizedContent}
    </CapitalizedText>
  );
};

export default StyleFirstLetter;
