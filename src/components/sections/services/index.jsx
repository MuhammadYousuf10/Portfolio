"use client";

import { Box, Container, Grid, Typography, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import WebIcon from "@mui/icons-material/Web";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import AdjustIcon from "@mui/icons-material/Adjust";

const services = [
  {
    title: "Product Design",
    description:
      "We craft intuitive, user-centric digital products that drive engagement and conversion. We design for real-world.",
    icon: <WebIcon />,
    image: "https://framerusercontent.com/images/ETKy6pcTVJ5pEm7xuvzpO0jv9cw.svg",
    size: 7,
  },
  {
    title: "Brand Identity Design",
    description:
      "Your brand is more than a logo. We build complete brand systems that express your vision, values, and voice - helping you stand out.",
    icon: <EmojiObjectsIcon />,
    size: 5,
  },
  {
    title: "Marketing & SEO",
    description:
      "We align creative storytelling with smart strategy. From content to technical SEO, we help you rank higher, and grow organically.",
    icon: <TrendingUpIcon />,
    size: 5,
  },
  {
    title: "Ads & Others",
    description:
      "Maximize your ROI with targeted precision- ad campaigns. Whether it’s Google, Meta, or LinkedIn.",
    icon: <GpsFixedIcon />,
    image: "https://framerusercontent.com/images/ETKy6pcTVJ5pEm7xuvzpO0jv9cw.svg",
    size: 7,
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
      component="section"
      id="services"
      sx={{ bgcolor: "background.default", color: "text.primary", position: "relative" }}
    >
      {/* Radar Background */}
      <Box sx={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: { xs: "100%", md: "800px" },
        height: "350px",
        background: "radial-gradient(ellipse at bottom, rgba(255,255,255,0.08) 0%, transparent 70%)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        zIndex: 0,
        overflow: "hidden"
      }}>
        {/* Concentric rings */}
        <Box sx={{ position: 'absolute', bottom: 0, left: '5%', width: '90%', height: '90%', borderTop: '1px solid rgba(255,255,255,0.05)', borderRadius: '50% 50% 0 0' }} />
        <Box sx={{ position: 'absolute', bottom: 0, left: '25%', width: '50%', height: '50%', borderTop: '1px solid rgba(255,255,255,0.05)', borderRadius: '50% 50% 0 0' }} />
        <Box sx={{ position: 'absolute', bottom: 0, left: '45%', width: '10%', height: '10%', borderTop: '1px solid rgba(255,255,255,0.1)', borderRadius: '50% 50% 0 0', bgcolor: "rgba(255,255,255,0.02)" }} />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ mb: 12, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Chip
            icon={<AdjustIcon fontSize="small" sx={{ color: "text.primary !important" }} />}
            label="Services"
            sx={{
              mb: 3,
              bgcolor: "rgba(255,255,255,0.08)",
              color: "text.primary",
              px: 1,
            }}
          />
          <Typography variant="h2" sx={{ mb: 2 }}>
            What We <Typography component="span" variant="gradientText">Offer</Typography>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500 }}>
            Our services blend strategy and creativity to deliver impact.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={3} sx={{ mb: 10 }}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: service.size }} key={index}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  height: "100%",
                  display: "flex",
                  flexDirection: service.image ? { xs: "column", sm: "row" } : "column",
                  gap: 4,
                  alignItems: service.image ? "center" : "flex-start",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                {service.image && (
                  <Box sx={{ flex: 1, width: "100%", height: 200, bgcolor: "rgba(255,255,255,0.02)", borderRadius: "16px", border: "1px solid", borderColor: "divider", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Typography variant="caption" color="text.secondary">Image</Typography>
                  </Box>
                )}
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column", height: "100%", justifyContent: "center" }}>
                  <Box sx={{ color: "text.secondary", mb: 2 }}>{service.icon}</Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>{service.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </Box>
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
