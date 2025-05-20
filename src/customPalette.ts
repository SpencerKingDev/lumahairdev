import { createTheme } from "@mui/material";
import { red, green } from "@mui/material/colors";
import AppColors from "./assets/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: AppColors.primaryText,
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
      default: AppColors.backgroundDefault,
      paper: AppColors.backgroundAccent,
    },
  },
});

export default theme;
