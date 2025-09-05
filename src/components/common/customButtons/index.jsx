import React from "react";
import { Button, Stack } from "@mui/material";

const CustomButton = ({
  text,
  icon,
  variant = "filled", // "filled" | "outlined" | "glow"
  size = "medium", // allow MUI button sizes
  disableHover = false,
  sx = {}, // allow sx overrides
  ...props
}) => {
  const isFilled = variant === "filled";
  const isOutlined = variant === "outlined";
  const isGlow = variant === "glow";

  const sizeStyles = {
    small: { px: 2, py: 0.8, fontSize: "14px" },
    medium: { px: 3, py: 1.2, fontSize: "16px" },
    large: { px: 4, py: 1.5, fontSize: "18px" },
  };

  return (
    <Button
      {...props}
      disableRipple
      disableElevation
      sx={{
        borderRadius: "999px",
        textTransform: "none",
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        gap: 1,
        "&:focus": { outline: "none" },
        "&:focus-visible": { outline: "none" },

        ...sizeStyles[size],

        // Filled
        ...(isFilled && {
          backgroundColor: "rgba(0,0,0,0.9)",
          color: "#fff",
          boxShadow: "0 0 14px rgba(0,0,0,0.35)",
          transition: "box-shadow 0.3s ease, background-color 0.3s ease",
          "&:hover": !disableHover && {
            backgroundColor: "rgba(0,0,0,1)",
            boxShadow: "0 0 18px rgba(0,0,0,0.45)",
          },
          "&:active": {
            boxShadow: "0 0 10px rgba(0,0,0,0.4)",
          },
        }),

        // Outlined
        ...(isOutlined && {
          backgroundColor: "transparent",
          color: "#fff",
          border: "1.5px solid rgba(255,255,255,0.5)",
          boxShadow: "none",
          transition: "all 0.3s ease",
          "&:hover": !disableHover && {
            borderColor: "#fff",
            backgroundColor: "rgba(255,255,255,0.08)",
          },
        }),

        // Glow
        ...(isGlow && {
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgba(0,0,0,0.9)",
          color: "#fff",
          border: "2px solid transparent",
          backgroundImage: [
            "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9))",
            "linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.0) 60%)",
          ].join(", "),
          backgroundOrigin: "padding-box, border-box",
          backgroundClip: "padding-box, border-box",
          backgroundSize: "100% 100%, 200% 100%",
          backgroundPosition: "center, left center",
          transition:
            "background-position 2.5s ease-in-out, background-image 2.5s ease-in-out",
          "&:hover": !disableHover && {
            backgroundImage: [
              "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9))",
              "linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 100%)",
            ].join(", "),
            backgroundPosition: "center, right center",
          },
        }),

        ...sx,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        {icon && <span style={{ display: "flex", fontSize: 20 }}>{icon}</span>}
        <span>{text}</span>
      </Stack>
    </Button>
  );
};

export default CustomButton;
