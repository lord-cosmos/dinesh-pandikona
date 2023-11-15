import { Container, Typography } from "@mui/material";
import React, { forwardRef } from "react";

function ProfileImage() {
  return (
    <Container
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <img
        src="https://source.unsplash.com/man-wearing-green-polo-shirt-6anudmpILw4"
        style={{
          borderRadius: "50%",
          width: "400px",
          height: "400px",
          border: "5px solid orange",
        }}
        alt="Aatik Tasneem"
      />
    </Container>
  );
}

export default ProfileImage;
