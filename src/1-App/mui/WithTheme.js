import { teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#9b27af",
      light: "#cf5ce2",
      dark: "#69007f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffeb3b",
      light: "#ffff72",
      dark: "#c8b900",
      contrastText: "#000",
    },
    success: {
      main: "#00e676",
      light: "#33eb91",
      dark: "#00a152",
      contrastText: "#000",
    },
  },
});
