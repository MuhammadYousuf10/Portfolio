import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

import logo1 from "@/assests/projects/project-logo1.avif";
import logo2 from "@/assests/projects/project-logo2.avif";
import logo3 from "@/assests/projects/project-logo3.avif";

const logos = [
  { image: logo1 },
  { image: logo2 },
  { image: logo3 },
  { image: logo1 },
  { image: logo2 },
];

const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

const LogoMarquee = () => {
  return (
    <Box
      sx={{
        width: "100%",
        mt: 8,
        pt: 8,
        position: "relative",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      {/* Edge fade masks */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "150px",
          background: "linear-gradient(to right, #000, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "150px",
          background: "linear-gradient(to left, #000, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <Box sx={{ overflow: "hidden", width: "100%" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          style={{
            display: "flex",
            gap: "60px",
            whiteSpace: "nowrap",
            paddingLeft: "30px",
            alignItems: "center",
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <Box
              key={index}
              component="img"
              src={logo.image.src || logo.image}
              alt="Client Logo"
              sx={{
                height: 40,
                objectFit: "contain",
                filter: "grayscale(100%) brightness(0.6)",
                transition: "filter 0.3s ease",
                "&:hover": {
                  filter: "grayscale(0%) brightness(1)",
                },
              }}
            />
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default LogoMarquee;
