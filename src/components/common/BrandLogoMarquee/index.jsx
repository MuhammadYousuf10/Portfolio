import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import CustomImage from "@/components/common/CustomImage";

import { clientLogos } from "@/data/portfolio";

const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

const BrandLogoMarquee = () => {
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
              sx={{
                position: "relative",
                height: 40,
                width: 100, // Approximate width for contain
              }}
            >
              <CustomImage
                src={logo.image}
                alt="Client Logo"
                objectFit="contain"
                sx={{
                  filter: "grayscale(100%) brightness(0.6)",
                  transition: "filter 0.3s ease",
                  "&:hover": {
                    filter: "grayscale(0%) brightness(1)",
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
