"use client";

import { Box, Container, Grid, Typography, Stack, Chip } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const whyUsPoints = [
  {
    title: "24/7 priority care",
    description:
      "Receive priority treatment for urgent tasks, with an average response time of 24 hours for high-priority.",
  },
  {
    title: "Perfection leads to growth",
    description:
      "Need edits? We include 4 post-launch revisions to ensure everything feels just right.",
  },
];

const comparisonUs = [
  "Exceptional Design Quality",
  "Transparent Communication",
  "Rapid Delivery Times",
  "Customized Solutions",
  "Strategy-Driven Approach",
  "Attention to Detail",
];

const comparisonThem = [
  "Basic Design Output",
  "Limited Communication",
  "Slow Turnarounds",
  "Generic Templates",
  "Minimal Post-Project Support",
];

const WhyUsSection = () => {
  return (
    <Box
      component="section"
      id="why-us"
      sx={{ bgcolor: "background.default", color: "text.primary" }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 10, textAlign: "center" }}>
          <Chip
            label="Why Us"
            sx={{
              mb: 2,
              bgcolor: "rgba(255,255,255,0.1)",
              color: "text.primary",
            }}
          />
          <Typography variant="h2" sx={{ mb: 2 }}>
            Why Even Us
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We craft innovative designs that elevate your brand and engage.
          </Typography>
        </Box>

        <Grid container spacing={6} sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                p: 4,
                bgcolor: "background.paper",
                borderRadius: "16px",
                border: "1px solid",
                borderColor: "divider",
                height: "100%",
              }}
            >
              <Typography variant="h4" sx={{ mb: 4 }}>
                Elite Design Is Now Yours
              </Typography>
              <Stack spacing={4}>
                {whyUsPoints.map((point, i) => (
                  <Box key={i}>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      {point.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {point.description}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                p: 4,
                bgcolor: "background.paper",
                borderRadius: "16px",
                border: "1px solid",
                borderColor: "divider",
                height: "100%",
              }}
            >
              <Typography variant="h4" sx={{ mb: 4 }}>
                Comparison
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                See how we stack up against others in clarity, speed, and
                quality.
              </Typography>

              <Stack direction="row" spacing={4}>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mb: 2,
                      color: "custom.neonGreen",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    Us
                  </Typography>
                  <Stack spacing={2}>
                    {comparisonUs.map((item, i) => (
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        key={i}
                      >
                        <CheckCircleIcon
                          sx={{ color: "custom.neonGreen", fontSize: 18 }}
                        />
                        <Typography variant="body2">{item}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mb: 2,
                      color: "error.main",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    Them
                  </Typography>
                  <Stack spacing={2}>
                    {comparisonThem.map((item, i) => (
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        key={i}
                      >
                        <CancelIcon
                          sx={{ color: "error.main", fontSize: 18 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUsSection;
