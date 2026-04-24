"use client";

import { Box, Container, Grid, Typography, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const services = [
  {
    title: "Product Design",
    description:
      "We craft intuitive, user-centric digital products that drive engagement and conversion. We design for real-world.",
  },
  {
    title: "Brand Identity Design",
    description:
      "Your brand is more than a logo. We build complete brand systems that express your vision, values, and voice - helping you stand out.",
  },
  {
    title: "Marketing & SEO",
    description:
      "We align creative storytelling with smart strategy. From content to technical SEO, we help you rank higher, and grow organically.",
  },
  {
    title: "Ads & Others",
    description:
      "Maximize your ROI with targeted precision- ad campaigns. Whether it’s Google, Meta, or LinkedIn.",
  },
];

const tags1 = [
  "Creative Direction",
  "Web Development",
  "UI/UX",
  "Brand Identity",
];
const tags2 = [
  "Logo Design",
  "Visual Content Creation",
  "Packaging Design",
  "Art Direction",
  "Design Consulting",
];

const ServicesSection = () => {
  return (
    <Box
      id="services"
      sx={{ py: 15, bgcolor: "background.default", color: "text.primary" }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8, textAlign: "left" }}>
          <Chip
            label="Services"
            sx={{
              mb: 2,
              bgcolor: "rgba(255,255,255,0.1)",
              color: "text.primary",
            }}
          />
          <Grid container spacing={4} alignItems="flex-end">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h2">What We Offer</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="body1" color="text.secondary">
                Our services blend strategy and creativity to deliver impact.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: "16px",
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  height: "100%",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{ mb: 2 }}
                >
                  <Typography variant="h4">{service.title}</Typography>
                  <ArrowOutwardIcon sx={{ color: "text.secondary" }} />
                </Stack>
                <Typography variant="body1" color="text.secondary">
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Tags */}
        <Box sx={{ textAlign: "center" }}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
            sx={{ mb: 2 }}
          >
            {tags1.map((tag, i) => (
              <Chip
                key={i}
                label={tag}
                variant="outlined"
                sx={{
                  color: "text.primary",
                  borderColor: "divider",
                  fontSize: "1rem",
                  py: 2.5,
                  px: 1,
                  borderRadius: "999px",
                }}
              />
            ))}
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
          >
            {tags2.map((tag, i) => (
              <Chip
                key={i}
                label={tag}
                variant="outlined"
                sx={{
                  color: "text.primary",
                  borderColor: "divider",
                  fontSize: "1rem",
                  py: 2.5,
                  px: 1,
                  borderRadius: "999px",
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
