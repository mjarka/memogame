import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#ec008c",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "rgba(255,255,255,0.54)",
    },
    background: {
      default: "#6dd8c7",
    },
  },
  shape: {
    borderRadius: 50,
  },
});
export default theme;
