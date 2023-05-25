import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
      dark:"#e3d1c6"
    },
    info:{
      main:"#8e8182",
      light:"#c4bebe",
      dark:"#545454"
    },
  },
});
export default theme;
