import logo from "./logo.svg";
import hebelogo from "./hebeLogo.png";
import motylek from "./motylek.png";
import "./App.css";
import { CssBaseline, Grid, Typography } from "@mui/material";
import cards from "./cards";
import top from "./top.png";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CardsFlip from "./CardsFlip";
import Points from "./Points";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <img src={top} className="top-decorator" alt="logo" />

        <Box pt={4}>
          <header className="App-header">
            <img src={hebelogo} className="hebe-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </Box>
        <Points />
        <CardsFlip />
      </div>
    </ThemeProvider>
  );
}

export default App;
