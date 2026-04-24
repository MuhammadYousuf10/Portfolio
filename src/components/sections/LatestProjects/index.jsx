"use client";

import React from "react";
import { Box, Container, Typography, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import CustomButton from "@/components/common/CustomButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CustomImage from "@/components/common/CustomImage";
import BrandLogoMarquee from "@/components/common/BrandLogoMarquee";
import { projects as portfolioProjects } from "@/data/portfolio";

// Triplicate the projects so we can infinitely scroll them seamlessly
const duplicatedProjects = [
  ...portfolioProjects,
  ...portfolioProjects,
  ...portfolioProjects,
];

const LatestProjects = () => {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* Centered Header */}
        <Box
          sx={{
            mb: 8,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Chip
            icon={
              <AutoAwesomeIcon
                fontSize="small"
                sx={{ color: "text.primary !important" }}
              />
            }
            label="Projects"
            sx={{
              mb: 3,
              bgcolor: "rgba(255,255,255,0.08)",
              color: "text.primary",
              px: 1,
            }}
          />
          <Typography variant="h2" sx={{ mb: 2 }}>
            Our Latest{" "}
            <Typography component="span" variant="gradientText">
              Projects
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 500, mb: 4 }}
          >
            Our projects showcase creativity and impact in every detail.
          </Typography>
          <CustomButton
            text="See All Projects"
            variant="outlined"
            startIcon={
              <ArrowOutwardIcon sx={{ transform: "rotate(-45deg)" }} />
            }
          />
        </Box>

        {/* Projects Horizontal Carousel */}
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
            pb: 4,
            position: "relative",
          }}
        >
          {/* Edge fade masks */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: "100px",
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
              width: "100px",
              background: "linear-gradient(to left, #000, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          <motion.div
            animate={{ x: ["0%", "-33.333333%"] }} // Moves exactly one set of the 3 duplicated arrays
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            style={{ display: "flex", gap: "32px", paddingLeft: "16px" }}
          >
            {duplicatedProjects.map((project, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "85vw", sm: "480px", md: "550px" },
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
                  sx={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    bgcolor: "rgba(255,255,255,0.02)",
                    border: "1px solid",
                    borderColor: "divider",
                    height: 400,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover .hover-img": {
                      opacity: 1,
                    },
                    "&:hover .main-img": {
                      opacity: 0,
                    },
                  }}
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
                        sx={{
                          bgcolor: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "8px",
                          color: "text.secondary",
                          fontSize: "0.75rem",
                        }}
                      />
                    ))}
                  </Stack>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </motion.div>
        </Box>
      </Container>

      {/* Sliding Logos Marquee - Moved outside container for full width */}
      <Container maxWidth="lg">
        <BrandLogoMarquee />
      </Container>
    </Box>
  );
};

export default LatestProjects;
