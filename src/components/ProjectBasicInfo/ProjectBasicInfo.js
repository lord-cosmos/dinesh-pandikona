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
function ProjectBasicInfo({ title, description, points }) {
  const classes = useStyles();
  return (
    <Box sx={classes.Container}>
      <Typography variant="h2" sx={{ color: "white" }}>
        {title}
      </Typography>
      <Typography variant="p" sx={{ color: "white" }}>
        {description}
      </Typography>
      <Typography variant="h6" sx={{ color: "white" }}>
        Features
      </Typography>
      <Typography sx={{ marginLeft: "20px", marginTop: "5px", color: "white" }}>
        <ul>
          {points.map((point, index) => (
            <li key={index}>
              <Typography variant="body1" sx={{ color: "white" }}>
                {point}
              </Typography>
            </li>
          ))}
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
