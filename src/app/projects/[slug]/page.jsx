"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  alpha,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { projects } from "@/data/portfolio";
import CustomButton from "@/components/common/CustomButton";
import CustomImage from "@/components/common/CustomImage";
import SectionBadge from "@/components/common/SectionBadge";
import ProjectCard from "@/components/common/ProjectCard";

const ProjectDetails = () => {
  const params = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <Box sx={{ py: 20, textAlign: "center" }}>
        <Typography variant="h2">Project not found</Typography>
        <CustomButton
          text="Back to Projects"
          onClick={() => router.push("/projects")}
          sx={{ mt: 4 }}
        />
      </Box>
    );
  }

  return (
    <Box
      component="main"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        pt: { xs: 12, md: 18 },
        pb: 10,
        overflowX: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 10 }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            onClick={() => router.push("/projects")}
            sx={{
              cursor: "pointer",
              mb: 4,
              color: "text.secondary",
              transition: "color 0.2s",
              "&:hover": { color: "text.primary" },
            }}
          >
            <KeyboardBackspaceIcon fontSize="small" />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Projects
            </Typography>
          </Stack>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: 5,
            }}
          >
            {project.title}
          </Typography>

          <Grid container spacing={4} alignItems="flex-end">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h5"
                sx={{
                  color: "text.secondary",
                  fontWeight: 400,
                  maxWidth: 600,
                }}
              >
                {project.description}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: "flex-start", md: "flex-end" }}
              >
                <CustomButton
                  text="Contact Me"
                  variant="glass"
                  onClick={() => router.push("/contact")}
                  icon={<ArrowOutwardIcon fontSize="small" />}
                />
                <CustomButton text="Site Preview" variant="outlined" />
              </Stack>
            </Grid>
          </Grid>

          {/* Metadata Grid */}
          <Box
            sx={(theme) => ({
              mt: 10,
              p: { xs: 4, md: 6 },
              borderRadius: "32px",
              border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
              bgcolor: alpha(theme.palette.common.white, 0.02),
            })}
          >
            <Grid container spacing={6}>
              {[
                { label: "Services", value: project.services },
                { label: "Tools", value: project.tools },
                { label: "Value", value: project.value },
                { label: "Timeline", value: project.timeline },
              ].map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Typography
                    variant="caption"
                    sx={{
                      mb: 1.5,
                      fontStyle: "italic",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.value}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Content Cards */}
        <Stack spacing={12}>
          {/* Introduction Section */}
          {project.introduction && (
            <Box
              sx={(theme) => ({
                p: { xs: 4, md: 8 },
                borderRadius: "40px",
                border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                bgcolor: alpha(theme.palette.common.white, 0.01),
              })}
            >
              <Grid container spacing={8} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      borderRadius: "24px",
                      overflow: "hidden",
                      aspectRatio: "4 / 3",
                    }}
                  >
                    <CustomImage src={project.introduction.image} objectFit="cover" />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <SectionBadge text={project.introduction.badge} />
                  <Typography variant="h2" sx={{ mt: 3, mb: 4 }}>
                    {project.introduction.title}
                  </Typography>
                  <Typography
                    variant="body1"
                  >
                    {project.introduction.description}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}

          {/* Problem Section */}
          {project.problem && (
            <Box
              sx={(theme) => ({
                p: { xs: 4, md: 8 },
                borderRadius: "40px",
                border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                bgcolor: alpha(theme.palette.common.white, 0.01),
              })}
            >
              <Grid container spacing={8} alignItems="center" direction={{ xs: "column-reverse", md: "row" }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <SectionBadge text={project.problem.badge} />
                  <Typography variant="h2" sx={{ mt: 3, mb: 4 }}>
                    Identifying The Challenges
                  </Typography>
                  <Typography
                    variant="body1"
                  >
                    {project.problem.description}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      borderRadius: "24px",
                      overflow: "hidden",
                      aspectRatio: "4 / 3",
                    }}
                  >
                    <CustomImage src={project.problem.image} objectFit="cover" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}

          {/* Solution Section */}
          {project.solution && (
            <Box
              sx={(theme) => ({
                p: { xs: 4, md: 8 },
                borderRadius: "40px",
                border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                bgcolor: alpha(theme.palette.common.white, 0.01),
              })}
            >
              <Grid container spacing={8} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      borderRadius: "24px",
                      overflow: "hidden",
                      aspectRatio: "4 / 3",
                    }}
                  >
                    <CustomImage src={project.solution.image} objectFit="cover" />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <SectionBadge text={project.solution.badge} />
                  <Typography variant="h2" sx={{ mt: 3, mb: 4 }}>
                    Crafting The Solution
                  </Typography>
                  <Typography
                    variant="body1"
                  >
                    {project.solution.description}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </Stack>

        {/* Results */}
        {project.conclusion && (
          <Box sx={{ mt: 15, textAlign: "center", maxWidth: 900, mx: "auto" }}>
            <SectionBadge text="Results" />
            <Typography variant="h2" sx={{ mt: 3, mb: 4 }}>
              The Impact Of Design
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "text.secondary",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              "{project.conclusion}"
            </Typography>
          </Box>
        )}

        {/* discovery Section */}
        <Box sx={{ mt: { xs: 15, md: 20 } }}>
          <Stack
            direction="row"
            alignItems="flex-end"
            justifyContent="space-between"
            sx={{ mb: 6 }}
          >
            <Box>
              <SectionBadge text="Discovery" />
              <Typography variant="h2" sx={{ mt: 2 }}>
                Other{" "}
                <Box
                  component="span"
                  sx={(theme) => ({
                    ...theme.typography.gradientText,
                    fontSize: "inherit",
                  })}
                >
                  Projects
                </Box>
              </Typography>
            </Box>
            <CustomButton
              text="View All"
              variant="glass"
              onClick={() => router.push("/projects")}
            />
          </Stack>

          <Grid container spacing={4}>
            {projects
              .filter((p) => p.slug !== params.slug)
              .slice(0, 2)
              .map((otherProject, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <ProjectCard project={otherProject} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectDetails;
