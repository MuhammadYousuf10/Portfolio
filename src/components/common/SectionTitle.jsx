"use client";

import React from "react";
import { Typography } from "@mui/material";

const SectionTitle = ({ mainText, italicText, sx = {} }) => {
  return (
    <Typography
      variant="h2"
      sx={{
        fontWeight: 600,
        ...sx,
      }}
    >
      {mainText}{" "}
      <Typography
        component="span"
        variant="inherit"
        sx={{
          fontStyle: "italic",
          fontWeight: 300,
          color: "text.secondary",
        }}
      >
        {italicText}
      </Typography>
    </Typography>
  );
};

export default SectionTitle;
