import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CustomImage from "@/components/common/CustomImage";
import { clientLogos } from "@/data/portfolio";

const BrandLogoMarquee = () => {
  const duplicatedLogos = [
    ...clientLogos,
    ...clientLogos,
    ...clientLogos,
    ...clientLogos,
    ...clientLogos,
  ];

  return (
    <Box
      sx={{
        width: "100%",
        pt: 8,
        position: "relative",
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
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          style={{
            display: "flex",
            gap: "80px",
            whiteSpace: "nowrap",
            alignItems: "center",
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                height: 40,
                width: 90,
                flexShrink: 0,
              }}
            >
              <CustomImage
                src={logo.image}
                alt="Client Logo"
                objectFit="contain"
                sx={{
                  filter: "grayscale(0%) brightness(1)",
                  opacity: 1,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    filter: "grayscale(100%) brightness(0.7)",
                    opacity: 0.5,
                  },
                }}
              />
            </Box>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default BrandLogoMarquee;
