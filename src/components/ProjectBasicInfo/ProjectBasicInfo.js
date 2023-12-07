import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
function ProjectBasicInfo() {
  const classes = useStyles();
  return (
    <Box sx={classes.Container}>
      <Typography variant="h1">Adobe XD</Typography>
      <Typography variant="p">
        A powerful image editing application for desktops.
      </Typography>
    </Box>
  );
}

export default ProjectBasicInfo;
