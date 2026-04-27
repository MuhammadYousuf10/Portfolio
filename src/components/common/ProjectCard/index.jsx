"use client";

import React from "react";
import { Box, Stack, Typography, Chip, alpha } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
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
        transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
        "&:hover .main-img, &:hover .hover-img": {
          transform: "scale(1.1)",
        },
        "&:hover .project-overlay-button": {
          opacity: 1,
          visibility: "visible",
          transform: "translate(-50%, -50%) scale(1)",
        },
        "&:hover .hover-glow": {
          opacity: 1,
        },
        "&:hover .arrow-icon": {
          transform: "translate(3px, -3px)",
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

        {/* Hover Overlay Button */}
        <Box
          className="project-overlay-button"
          sx={(theme) => ({
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(0.8)",
            opacity: 0,
            visibility: "hidden",
            transition: "all 500ms cubic-bezier(0.16, 1, 0.3, 1)",
            display: "inline-flex",
            alignItems: "center",
            gap: 1.2,
            px: 3.5,
            py: 1.5,
            borderRadius: "100px",
            color: "#fff",
            bgcolor: "rgba(0, 0, 0, 0.6)",
            border: `1px solid rgba(255, 255, 255, 0.2)`,
            backdropFilter: "blur(12px)",
            fontSize: "0.9rem",
            fontWeight: 600,
            whiteSpace: "nowrap",
            boxShadow:
              "0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,255,255,0.05)",
            zIndex: 3,
            "& .arrow-icon": {
              transition: "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            },
          })}
        >
          <Box
            component="span"
            sx={{
              position: "absolute",
              inset: "-1px",
              borderRadius: "100px",
              padding: "1px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 100%)",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "destination-out",
              pointerEvents: "none",
            }}
          />
          View Project
          <ArrowOutwardIcon className="arrow-icon" sx={{ fontSize: 18 }} />
        </Box>

        {/* Subtle Background Glow on Hover */}
        <Box
          className="hover-glow"
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
            opacity: 0,
            transition: "opacity 600ms ease",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
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
