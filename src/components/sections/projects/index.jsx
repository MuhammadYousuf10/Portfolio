"use client";

import React from "react";
import { Box, Container, Typography, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import CustomButton from "@/components/common/customButtons";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LogoMarquee from "@/components/common/LogoMarquee";

// Image Imports
import banner1 from "@/assests/projects/project-banner1.avif";
import banner2 from "@/assests/projects/project-banner2.avif";
import banner3 from "@/assests/projects/project-banner3.avif";

const projects = [
  {
    title: "AtomAI",
    tags: ["SaaS", "Template"],
    image: banner1,
  },
  {
    title: "Landio",
    tags: ["SaaS", "Template"],
    image: banner2,
  },
  {
    title: "Polo",
    tags: ["Portfolio", "Template"],
    image: banner3,
  },
  {
    title: "Portfolite",
    tags: ["Portfolio", "Template"],
    image: banner1,
  },
];

// Triplicate the projects so we can infinitely scroll them seamlessly
const duplicatedProjects = [...projects, ...projects, ...projects];

const ProjectsSection = () => {
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
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            style={{ display: "flex", gap: "32px", paddingLeft: "16px" }}
          >
            {duplicatedProjects.map((project, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "85vw", sm: "380px", md: "420px" },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  cursor: "pointer",
                  "&:hover .project-img": {
                    transform: "scale(1.02)",
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
                    height: 280,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={project.image.src || project.image}
                    className="project-img"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "grayscale(30%)",
                      transition: "transform 0.4s ease",
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

        {/* Sliding Logos Marquee */}
        <LogoMarquee />
      </Container>
    </Box>
  );
};

export default ProjectsSection;
