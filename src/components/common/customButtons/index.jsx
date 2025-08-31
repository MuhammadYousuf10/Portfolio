import React from "react";
import { Button, Stack } from "@mui/material";

const CustomButton = ({
  text,
  icon,
  variant = "filled", // "filled" | "outlined"
  ...props
}) => {
  const isFilled = variant === "filled";

  return (
    <Button
      {...props}
      disableRipple
      disableElevation // prevent MUI from adding its own elevation
      sx={{
        borderRadius: "999px",
        px: 3,
        py: 1.2,
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        gap: 1,
        transition: "box-shadow .2s ease, background-color .2s ease, color .2s ease",
        // remove any focus ring/elevation changes that can look like a moving shadow
        "&:focus": { outline: "none" },
        "&:focus-visible": { outline: "none" },

        ...(isFilled
          ? {
              backgroundColor: "rgba(0,0,0,0.9)",
              color: "#fff",
              // centered ambient glow (no X/Y offset)
              boxShadow: "0 0 14px rgba(0,0,0,0.35)",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,1)",
                // keep it centered on hover (slightly stronger blur only)
                boxShadow: "0 0 18px rgba(0,0,0,0.45)",
              },
              "&:active": {
                boxShadow: "0 0 10px rgba(0,0,0,0.4)",
              },
            }
          : {
              backgroundColor: "transparent",
              color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.5)",
              boxShadow: "none", // no glow by default
              "&:hover": {
                borderColor: "#fff",
                backgroundColor: "rgba(255,255,255,0.08)",
                boxShadow: "none", // keep hover from adding a full-button glow
              },
              "&:active": {
                boxShadow: "none",
              },
            }),
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
