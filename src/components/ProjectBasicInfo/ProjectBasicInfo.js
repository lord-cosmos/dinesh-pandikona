import { Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../../theme";

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
      <Typography variant="h2" sx={{ color: "white" }}>
        HaiD - Image Editing GUI
      </Typography>
      <Typography variant="p" sx={{ color: "white" }}>
        A image processing application natively built using Java and Swing.
      </Typography>
      <Typography variant="h6" sx={{ color: "white" }}>
        Features
      </Typography>
      <Typography sx={{ marginLeft: "20px", marginTop: "5px", color: "white" }}>
        <ul>
          <li>Import/Export</li>
          <li>PNG, JPEG, PPM formats supported</li>
          <li>Previews</li>
          <li>Split View</li>
          <li>Filters - Sepia, blur and others</li>
          <li>Color Depth Visualization - Histogram</li>
        </ul>
      </Typography>
      {/* <Button
        disableRipple
        variant="contained"
        sx={{
          marginTop: "20px",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        More...
      </Button> */}
    </Box>
  );
}

export default ProjectBasicInfo;
