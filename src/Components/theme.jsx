import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});
export default theme;
