import React from "react";
import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const CircularText = ({ text, size = 150, fontSize = 10, color }) => {
  const theme = useTheme();

  // Repeat text to fill circle
  const repeatedText = `${text} • ${text} • ${text} •`;
  const radius = size * 0.4; // 40% of size as radius

  return (
    <Box sx={{ width: size, height: size, position: "relative" }}>
      <motion.svg
        viewBox={`0 0 ${size} ${size}`}
        style={{
          width: "100%",
          height: "100%",
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {/* Define circular path */}
        <defs>
          <path
            id="circlePath"
            d={`M ${size / 2},${size / 2} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
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
