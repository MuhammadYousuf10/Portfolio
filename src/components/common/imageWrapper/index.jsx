"use client";

import Image from "next/image";
import { Box } from "@mui/material";

export default function ImageWrapper({
  src,
  alt,
  width,
  height,
  layout = "intrinsic", 
  style = {},
  ...props
}) {
  return (
    <Box sx={{ display: "inline-block", ...style }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ objectFit: "contain" }}
        {...props}
      />
    </Box>
  );
}
