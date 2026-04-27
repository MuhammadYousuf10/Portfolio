import React from "react";
import { Button, Stack, Box, alpha, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionButton = motion.create(Button);

const CustomButton = ({
  text,
  icon,
  variant = "filled", // "filled" | "outlined" | "glow" | "glass"
  size = "medium",
  disableHover = false,
  sx = {},
  ...props
}) => {
  const isFilled = variant === "filled";
  const isOutlined = variant === "outlined";
  const isGlow = variant === "glow";
  const isGlass = variant === "glass";
  const isPrimary = variant === "primary";

  const sizeStyles = {
    small: { px: 2.5, py: 1, fontSize: "0.85rem" },
    medium: { px: 4, py: 1.5, fontSize: "0.95rem" },
    large: { px: 6, py: 2, fontSize: "1.1rem" },
  };

  return (
    <MotionButton
      {...props}
      disableRipple
      disableElevation
      whileHover={!disableHover ? { scale: 1 } : {}}
      whileTap={!disableHover ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      sx={{
        borderRadius: "100px",
        textTransform: "none",
        fontWeight: 600,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        border: "1px solid transparent",
        ...sizeStyles[size],

        // Transitions for non-motion properties
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",

        "&:focus": { outline: "none" },

        // Variant Styles
        ...(isFilled && {
          backgroundColor: "#000000",
          color: "#ffffff",
          borderColor: "rgba(255, 255, 255, 0.15)",
          "&:hover": {
            borderColor: "rgba(255, 255, 255, 0.4)",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
          },
        }),

        ...(isPrimary && {
          backgroundColor: "#000000",
          color: "#ffffff",
          borderColor: "rgba(255, 255, 255, 0.1)",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            background: "radial-gradient(50% 50% at 50% 100%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
            transition: "all 0.4s ease",
            opacity: 0.8,
            zIndex: 0,
          },
          "&:hover": {
            borderColor: "rgba(255, 255, 255, 0.3)",
            boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.15)",
            "&::after": {
              opacity: 1,
              height: "120%",
              background: "radial-gradient(50% 50% at 50% 100%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)",
            },
          },
        }),

        ...(isOutlined && {
          backgroundColor: "transparent",
          color: "text.primary",
          borderColor: "rgba(255, 255, 255, 0.2)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 0 15px rgba(255,255,255,0.15)",
          },
        }),

        ...(isGlass && {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          color: "#ffffff",
          borderColor: "rgba(255, 255, 255, 0.1)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            borderColor: "rgba(255, 255, 255, 0.2)",
          },
        }),

        ...(isGlow && {
          backgroundColor: "#000000",
          color: "#ffffff",
          borderColor: "rgba(255, 255, 255, 0.2)",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-60%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)",
            filter: "blur(25px)",
            transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
            opacity: 0,
            zIndex: 0,
          },
          "&:hover": {
            borderColor: "rgba(255, 255, 255, 0.6)",
            boxShadow: `
              0 0 40px rgba(255, 255, 255, 0.15),
              0 0 80px rgba(255, 255, 255, 0.05)
            `,
            "&::after": {
              opacity: 1,
              bottom: "-20%",
              animation: "glowFloat 6s infinite ease-in-out",
            },
          },
        }),

        "@keyframes glowFloat": {
          "0%, 100%": { opacity: 0.6, transform: "translateX(-50%) scale(1)" },
          "50%": { opacity: 0.9, transform: "translateX(-50%) scale(1.2)" },
        },

        // Add Shine Animation for all variants on hover
        "&:hover .btn-shine": {
          left: "150%",
        },

        ...sx,
      }}
    >
      {/* Shine Effect Overlay */}
      <Box
        className="btn-shine"
        sx={{
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "50%",
          height: "100%",
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
          transform: "skewX(-25deg)",
          transition: "left 0.7s ease",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <Stack 
        direction="row" 
        alignItems="center" 
        spacing={1.2} 
        sx={{ position: "relative", zIndex: 2 }}
      >
        {icon && (
          <motion.span 
            style={{ display: "flex", fontSize: 20 }}
          >
            {icon}
          </motion.span>
        )}
        <Typography 
          component="span" 
          sx={{ 
            fontSize: "inherit", 
            fontWeight: "inherit",
            letterSpacing: "-0.01em"
          }}
        >
          {text}
        </Typography>
      </Stack>
    </MotionButton>
  );
};

export default CustomButton;
