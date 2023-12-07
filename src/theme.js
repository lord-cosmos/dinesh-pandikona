import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#CCF381",
    },
    secondary: {
      main: "#330d40",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
  },
});

export default theme;
