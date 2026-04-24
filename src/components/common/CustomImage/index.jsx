import React from "react";
import NextImage from "next/image";
import { Box } from "@mui/material";

const CustomImage = ({ 
  src, 
  alt, 
  fill = true, 
  objectFit = "cover", 
  sx = {}, 
  className = "",
  priority = false,
  quality = 90,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  ...props 
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        ...sx,
      }}
      className={className}
    >
      <NextImage
        src={src}
        alt={alt || "Portfolio asset"}
        fill={fill}
        priority={priority}
        quality={quality}
        style={{
          objectFit: objectFit,
        }}
        sizes={sizes}
        {...props}
      />
    </Box>
  );
};

export default CustomImage;
