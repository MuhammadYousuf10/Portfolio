"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CustomButton from "@/components/common/CustomButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BrandLogoMarquee from "@/components/common/BrandLogoMarquee";
import { projects as portfolioProjects } from "@/data/portfolio";
import SectionBadge from "@/components/common/SectionBadge";
import ProjectCard from "@/components/common/ProjectCard";
import NextLink from "next/link";

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
          <SectionBadge text="Projects" />
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
            component={NextLink}
            href="/projects"
            text="See All Projects"
            variant="glass"
            icon={<ArrowOutwardIcon fontSize="small" />}
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
                }}
              >
                <ProjectCard project={project} />
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
