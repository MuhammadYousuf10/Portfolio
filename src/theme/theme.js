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

    // ✅ completely custom category
    custom: {
      neonPink: "#ff00ff",
      teal: "#00e6e6",
      orange: "#ff7f50",
      neonGreen: "#00ff91",
      silver: "#c7c7c7",
      golden: "#fab700",
    },
  },
  gradients: {
    heroCard:
      "linear-gradient(275deg, rgb(154, 151, 130) -49%, rgb(20, 20, 20) 25%, rgba(4,3,3,0) 108%)",
    textGradient:
      "linear-gradient(to right, #D3D3D3, #A8A8A8 20%, #E0E0E0 50%, #A8A8A8 80%, #D3D3D3)",
    shadowLineUp:
      "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)",
    shadowLineDown:
      "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent)",
  },
  typography: {
    fontFamily: `"Inter", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontSize: "5rem",
      "@media (max-width:900px)": {
        fontSize: "3.5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "2.8rem",
      },
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
      color: "#ffffffe6",
    },
    h2: {
      fontSize: "3.75rem",
      "@media (max-width:900px)": {
        fontSize: "3rem",
      },
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
      fontWeight: 700,
      letterSpacing: "-0.045em",
      lineHeight: 1.12,
      color: "#ffffffe6",
    },
    h3: {
      fontSize: "2.5rem",
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
      fontWeight: 700,
      letterSpacing: "-0.045em",
      lineHeight: 1,
      color: "#ffffffe6",
    },
    h4: {
      fontSize: "2.125rem",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
      fontWeight: 700,
      letterSpacing: "-0.04em",
      lineHeight: 1.2,
      color: "#ffffffe6",
    },
    h5: {
      fontSize: "1.5rem",
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
      fontWeight: 600,
      color: "#ffffffe6",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#ffffffcc",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.5,
      color: "#ffffffe6",
    },
    subtitle2: {
      fontSize: "0.9rem",
      fontWeight: 500,
      lineHeight: 1.35,
      color: "#ffffffb3",
    },
    body1: {
      fontSize: "1rem",
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
      lineHeight: 1.6,
      color: "#ffffff99",
    },
    body2: {
      fontSize: "0.9rem",
      "@media (max-width:600px)": {
        fontSize: "0.85rem",
      },
      lineHeight: 1.55,
      color: "#ffffff80",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 600,
      lineHeight: 1.2,
      color: "#ffffff80",
      display: "block",
    },
    gradientText: {
      fontWeight: 300,
      color: "#ffffff99",
      fontStyle: "italic",
      fontFamily: "'Georgia', 'serif'",
      background:
        "linear-gradient(to right, #D3D3D3, #A8A8A8 20%, #E0E0E0 50%, #A8A8A8 80%, #D3D3D3)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "0 1px 1px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.05)",
    },
    button: {
      fontWeight: 600,
      fontSize: "0.95rem",
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        section: {
          paddingTop: "80px", // lg: 10
          paddingBottom: "80px",
          "@media (max-width:900px)": {
            paddingTop: "64px", // md: 8
            paddingBottom: "64px",
          },
          "@media (max-width:600px)": {
            paddingTop: "40px", // xs: 5
            paddingBottom: "40px",
          },
        },
      },
    },
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
