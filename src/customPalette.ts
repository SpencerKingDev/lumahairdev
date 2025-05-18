import { createTheme } from "@mui/material";
import { red, green, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      contrastText: "#fff",
    },
    error: {
      main: red[600],
      contrastText: green[400],
    },
    warning: {
      main: "#ff9800",
      contrastText: "#fff",
    },
    info: {
      main: "#2196f3",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      contrastText: "#fff",
    },
    background: {
      default: "rgb(250, 249, 244)",
      paper: "rgb(175, 196, 188)",
    },
  },
});

export default theme;
