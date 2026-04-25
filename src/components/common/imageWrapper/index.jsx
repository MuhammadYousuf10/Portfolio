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
  fill = false,
  ...props
}) {
  return (
    <Box
      sx={{
        display: "inline-block",
        position: fill ? "relative" : "static", // required for `fill`
        width: fill ? "100%" : width,
        height: fill ? "100%" : height,
        ...sx,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        priority={priority}
        style={{ objectFit: "contain", ...style }}
        {...props}
      />
    </Box>
  );
}
