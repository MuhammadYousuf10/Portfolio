"use client";

import Image from "next/image";
import { Box } from "@mui/material";

export default function ImageWrapper({
  src,
  alt,
  width,
  height,
  style = {},
  sx = {},
  priority = false,
  ...props
}) {
  return (
    <Box sx={{ display: "inline-block", ...sx }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        style={{ objectFit: "contain", ...style }}
        {...props}
      />
    </Box>
  );
}
