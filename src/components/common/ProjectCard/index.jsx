"use client";

import React from "react";
import { Box, Stack, Typography, Chip, alpha } from "@mui/material";
import NextLink from "next/link";
import CustomImage from "@/components/common/CustomImage";

const ProjectCard = ({ project }) => {
  return (
    <Box
      component={NextLink}
      href={`/projects/${project.slug}`}
      sx={{
        textDecoration: "none",
        color: "inherit",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        cursor: "pointer",
        "&:hover .main-img, &:hover .hover-img": {
          transform: "scale(1.08)",
        },
      }}
    >
      <Box
        sx={(theme) => ({
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          bgcolor: alpha(theme.palette.common.white, 0.02),
          border: `1px solid ${theme.palette.divider}`,
          aspectRatio: "1.375 / 1", // Maintains consistent height relative to width
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover .hover-img": {
            opacity: 1,
          },
          "&:hover .main-img": {
            opacity: 0,
          },
        })}
      >
        <CustomImage
          src={project.image}
          alt={project.title}
          className="main-img"
          objectFit="cover"
          sx={{
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        />
        {project.hoverImage && (
          <CustomImage
            src={project.hoverImage}
            alt={`${project.title} hover`}
            className="hover-img"
            objectFit="cover"
            sx={{
              position: "absolute",
              inset: 0,
              opacity: 0,
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          />
        )}
      </Box>
      <Box>
        <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
          {project.tags.map((tag, i) => (
            <Chip
              key={i}
              label={tag}
              size="small"
              sx={(theme) => ({
                bgcolor: alpha(theme.palette.common.white, 0.05),
                border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
                borderRadius: "8px",
                color: theme.palette.text.secondary,
                fontSize: "0.75rem",
              })}
            />
          ))}
        </Stack>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {project.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;
