import React from "react";
import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const CircularText = ({ text, size = 150, fontSize = 10, color }) => {
  const theme = useTheme();

  // Repeat text to fill circle
  const repeatedText = `${text} • ${text} • ${text} •`;

  return (
    <Box sx={{ position: "absolute", top: 0, right: 0, width: size, height: size }}>
      <motion.svg
        viewBox={`0 0 ${size} ${size}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          position: "absolute",
          inset: 0,
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 25, // slower = larger number, faster = smaller
          ease: "linear",
        }}
      >
        {/* Define circular path */}
        <defs>
          <path
            id="circlePath"
            d={`M ${size / 2},${size / 2} m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0`}
            fill="none"
          />
        </defs>

        {/* Text on circular path */}
        <text
          style={{
            fontFamily: "Sintony, sans-serif",
            fontSize: `${fontSize}px`,
            fontWeight: 400,
            letterSpacing: "0.1em",
            fill: color || theme.palette.text.secondary,
          }}
          dominantBaseline="middle"
        >
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            {repeatedText}
          </textPath>
        </text>
      </motion.svg>
    </Box>
  );
};

export default CircularText;
