import { Typography, Box, Button, List } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "left",
    gap: "16px",
  },
}));

function ProjectBasicInfo({ title, description, points }) {
  const classes = useStyles();
  return (
    <Box className={classes.Container}>
      <Typography variant="h2" sx={{ color: "white", alignSelf: "flex-start" }}>
        {title}
      </Typography>
      <Typography variant="p" sx={{ color: "white", alignSelf: "flex-start" }}>
        {description}
      </Typography>
      <Typography variant="h6" sx={{ color: "white", alignSelf: "flex-start" }}>
        Features
      </Typography>
      <div style={{ alignSelf: "flex-start" }}>
        <Typography
          sx={{ marginLeft: "20px", marginTop: "5px", color: "white" }}
        >
          <ul alignSelf="flex-start">
            {points.map((point, index) => (
              <li key={index}>
                <Typography variant="body1" sx={{ color: "white" }}>
                  {point}
                </Typography>
              </li>
            ))}
          </ul>
        </Typography>
      </div>

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
