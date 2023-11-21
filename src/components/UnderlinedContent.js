import { Typography } from "@mui/material";

function UnderlinedContent(props) {
  const underlinedStyle = {
    borderBottom: `1px solid ${props.color}`,
    display: "inline",
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
