"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff", // white accents
    },
    secondary: {
      main: "#999999", // muted gray
    },
    background: {
      default: "#000000", // pure black bg
      paper: "#0a0a0a", // slightly lighter for cards
    },
    text: {
      primary: "#ffffffe6", // 90% white for headings
      secondary: "#ffffff99", // 60% white for body text
    },
    // ✅ custom colors
    // success: {
    //   main: "#00ff91", // neon green
    // },
    // warning: {
    //   main: "#ffcc00", // yellow
    // },
    // error: {
    //   main: "#ff4d4d", // red
    // },
    // info: {
    //   main: "#3da9fc", // blue
    // },

    // ✅ completely custom category
    custom: {
      neonPink: "#ff00ff",
      teal: "#00e6e6",
      orange: "#ff7f50",
      neonGreen: "00ff91",
      silver: "#c7c7c7",
      golden:'#fab700'
    },
  },
  typography: {
    fontFamily: `"Inter", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontSize: "5rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
      color: "#ffffffe6",
    },
    h2: {
      fontSize: "4rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.3,
      color: "#ffffffe6",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.4,
      color: "#ffffffe6",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#ffffffe6",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: "#ffffffe6",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "#ffffffcc",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#ffffff99", // slightly muted
    },
    body2: {
      fontSize: "0.9rem",
      lineHeight: 1.5,
      color: "#ffffff80", // more muted
    },
    button: {
      fontWeight: 600,
      fontSize: "0.95rem",
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "2rem",
          padding: "0.6rem 1.5rem",
          fontWeight: 600,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body1,
          textDecoration: "none",
          fontWeight: 400,
          transition: "color 0.3s ease",
          "&:hover": {
            color: theme.palette.primary.main,
          },
        }),
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
