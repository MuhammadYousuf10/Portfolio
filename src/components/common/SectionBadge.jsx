"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const SectionBadge = ({ text, icon: Icon = AutoAwesomeIcon, sx = {} }) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1.5,
        mb: 2,
        px: 2.5,
        py: 0.75,
        bgcolor: "background.paper",
        borderRadius: "999px",
        border: "1px solid",
        borderColor: "divider",
        ...sx,
      }}
    >
      <Icon sx={{ fontSize: "1rem", color: "text.secondary" }} />
      <Typography
        variant="caption"
        sx={{
          color: "text.secondary",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          fontSize: "1rem",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SectionBadge;
