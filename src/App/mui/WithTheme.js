import {lightBlue} from "@mui/material/colors";
import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[400],
      light: "#79ecfd",
      dark: "#00d4f6",
      contrastText: "#fff",
    },
    secondary: {
      main: "#8cfb7a",
      light: "#b2fda4",
      dark: "#30e132",
      contrastText: "#fff",
    }
	}
})
