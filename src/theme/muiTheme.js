"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000", // Adjust if needed
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: { color: "#ffffffe6", fontSize: "3.5rem" },
    h2: { color: "#ffffffe6", fontSize: "3rem" },
    h3: { color: "#ffffffe6" },
    h4: { color: "#ffffffe6" },
    h5: { color: "#ffffffe6" },
    h6: { color: "#ffffffe6" },
    body1: { color: "#ffffff99", fontSize: "1rem" },
    body2: { color: "#ffffff99", fontSize: "0.9rem" },
  },
  // components: {
  //   MuiTypography: {
  //     styleOverrides: {
  //       // color: "#ffffffe6",
  //       h1: { color: "#ffffffe6", fontSize: "72px" },
  //       h2: { color: "#ffffffe6" },
  //       h3: { color: "#ffffffe6" },
  //       h4: { color: "#ffffffe6" },
  //       h5: { color: "#ffffffe6" },
  //       h6: { color: "#ffffffe6" },
  //       body1: { color: "#ffffff99" },
  //       body2: { color: "#ffffff99" },
  //     },
  //   },
  // },
});
theme = responsiveFontSizes(theme);
export default theme;
