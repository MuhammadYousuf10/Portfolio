"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
            mb: { xs: 6, md: 12 },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <SectionBadge text="Projects" />
          <Typography variant="h2" sx={{ mb: 2 }}>
            Our Latest{" "}
            <Typography
              component="span"
              variant="gradientText"
              sx={{ fontSize: "inherit" }}
            >
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
            sx={{ width: { xs: "100%", sm: "auto" } }}
          />
        </Box>

        {/* Projects Horizontal Carousel */}
        <Box
          sx={{
            width: "100vw", // Full viewport width for better carousel feel
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
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
              width: { xs: "40px", md: "100px" },
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
              width: { xs: "40px", md: "100px" },
              background: "linear-gradient(to left, #000, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          <motion.div
            animate={{ x: ["0%", "-33.333333%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: isMobile ? 8 : 15,
            }}
            style={{ display: "flex", gap: "24px", paddingLeft: "24px" }}
          >
            {duplicatedProjects.map((project, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "280px", sm: "400px", md: "500px" },
                }}
              >
                <ProjectCard project={project} />
              </Box>
            ))}
          </motion.div>
        </Box>
      </Container>

      <Container maxWidth="lg">
        <BrandLogoMarquee />
      </Container>
    </Box>
  );
};

export default LatestProjects;
