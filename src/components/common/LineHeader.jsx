"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

const LineHeader = ({ text, sx = {} }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        mb: 2,
        opacity: 0.6,
        ...sx,
      }}
    >
      <Box sx={{ height: "1px", width: 40, bgcolor: "divider" }} />
      <Typography
        variant="caption"
        sx={{
          textTransform: "uppercase",
          letterSpacing: 2,
          fontWeight: 600,
          color: "text.secondary",
          fontSize: "0.65rem",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </Typography>
      <Box sx={{ height: "1px", width: 40, bgcolor: "divider" }} />
    </Box>
  );
};

export default LineHeader;
