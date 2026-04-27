"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  Avatar,
  AvatarGroup,
  alpha,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ProjectCard from "@/components/common/ProjectCard";
import CustomButton from "@/components/common/CustomButton";
import Counter from "@/components/common/Counter";
import NextLink from "next/link";
import { projects, projectsPageData } from "@/data/portfolio";

const ProjectsPage = () => {
  const { header, trustedAvatars } = projectsPageData;
  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <Box
      component="main"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        pt: { xs: 15, md: 20 },
        pb: 10,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 8, md: 12 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 700,
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            {header.mainText}{" "}
            <Box
              component="span"
              sx={(theme) => ({
                ...theme.typography.gradientText,
                fontSize: "inherit",
              })}
            >
              {header.italicText}
            </Box>
          </Typography>

          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 4 }}>
            <AvatarGroup max={4}>
              {trustedAvatars.map((url, index) => (
                <Avatar
                  key={index}
                  src={url}
                  sx={{ width: 32, height: 32, border: "2px solid #000 !important" }}
                />
              ))}
            </AvatarGroup>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Trusted by <Counter value="10,000+" sx={{ fontWeight: "inherit" }} /> Audience worldwide
            </Typography>
          </Stack>

          <CustomButton
            component={NextLink}
            href="/contact"
            text={header.buttonText}
            variant="glow"
            icon={<ArrowOutwardIcon fontSize="small" />}
          />
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {visibleProjects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>

        {/* Load More Button */}
        {hasMore && (
          <Box sx={{ display: "flex", justifyContent: "center", mb: 12 }}>
            <CustomButton
              text="Load More"
              variant="glass"
              onClick={handleLoadMore}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ProjectsPage;
