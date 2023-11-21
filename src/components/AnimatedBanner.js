import { Typography, Box, CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid green",
    padding: "3px",
    margin: "5px 10px",
    height: "200px",
    width: "200px",
  },
}));

export default function AnimatedBanner() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Parallax pages={1}>
        <ParallaxLayer offset={0} speed={2.5}>
          <p>Parallax</p>
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
}
