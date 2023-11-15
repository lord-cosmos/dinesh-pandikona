import { Typography } from "@mui/material";
import { Children } from "react";

function UnderlinedContent(props) {
  const underlinedStyle = {
    borderBottom: `2px solid ${props.color}`,
    display: "inline-block",
  };
  return (
    <>
      <Typography variant={`${props.variant}`} sx={{ ...underlinedStyle }}>
        {props.children}
      </Typography>
    </>
  );
}

export default UnderlinedContent;
