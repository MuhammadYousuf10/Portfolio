"use client";

import { Box, Container, Grid, Typography, Stack, Chip } from "@mui/material";
import CustomButton from "@/components/common/customButtons";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const projects = [
  {
    title: "Landio",
    category: "SaaS Template",
    image:
      "https://framerusercontent.com/images/ETKy6pcTVJ5pEm7xuvzpO0jv9cw.svg", // Placeholder
  },
  {
    title: "Polo",
    category: "Portfolio Template",
    image:
      "https://framerusercontent.com/images/ETKy6pcTVJ5pEm7xuvzpO0jv9cw.svg", // Placeholder
  },
  {
    title: "Portfolite",
    category: "Portfolio Template",
    image:
      "https://framerusercontent.com/images/ETKy6pcTVJ5pEm7xuvzpO0jv9cw.svg", // Placeholder
  },
  {
    title: "AtomAI",
    category: "SaaS Template",
    image:
      "https://framerusercontent.com/images/ETKy6pcTVJ5pEm7xuvzpO0jv9cw.svg", // Placeholder
  },
];

const ProjectsSection = () => {
  return (
    <Box
      component="section"
      id="projects"
      sx={{ bgcolor: "background.default", color: "text.primary" }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Box>
              <Chip
                label="Projects"
                sx={{
                  mb: 2,
                  bgcolor: "rgba(255,255,255,0.1)",
                  color: "text.primary",
                }}
              />
              <Typography variant="h2" sx={{ mb: 2 }}>
                Our Latest Projects
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 400 }}
              >
                Our projects showcase creativity and impact in every detail.
              </Typography>
            </Box>
            <CustomButton
              text="See All Projects"
              variant="outlined"
              startIcon={<FolderOpenIcon />}
            />
          </Stack>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  bgcolor: "background.paper",
                  cursor: "pointer",
                  "&:hover .project-overlay": {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  sx={{
                    height: 400,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(255,255,255,0.02)",
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: "16px",
                  }}
                >
                  {/* Placeholder for project image */}
                  <Typography color="text.secondary">
                    Project Image: {project.title}
                  </Typography>
                </Box>
                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textTransform: "uppercase", letterSpacing: 1, mb: 1 }}
                  >
                    {project.category}
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="h4">{project.title}</Typography>
                    <ArrowOutwardIcon />
                  </Stack>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
