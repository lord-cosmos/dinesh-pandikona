import React from "react";

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
    backgroundImage: `linear-gradient(to right, ${from},#EFDCD8, ${to})`,
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
