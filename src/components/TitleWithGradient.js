import React from "react";

function TitleWithGradient({
  content = "Dinesh Pandikona",
  from = "pink",
  to = "white",
}) {
  const gradientStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    backgroundImage: `linear-gradient(to right, ${from},blue, ${to})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return <div style={gradientStyle}>{content}</div>;
}

export default TitleWithGradient;
