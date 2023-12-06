import React from "react";
import theme from "../theme";

function TitleWithGradient({
  content = "Dinesh Pandikona",
  from = "pink",
  to = "white",
  fontSize = "36px",
  otherStyles,
}) {
  const gradientStyle = {
    fontSize: `${fontSize}`,
    fontWeight: "bold",
    backgroundImage: `linear-gradient(to right, ${from}, ${theme.palette.secondary.main}, ${to})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div style={gradientStyle} className={otherStyles}>
      {content}
    </div>
  );
}

export default TitleWithGradient;
