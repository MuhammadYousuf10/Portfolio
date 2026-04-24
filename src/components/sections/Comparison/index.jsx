"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SectionBadge from "@/components/common/SectionBadge";
import SectionTitle from "@/components/common/SectionTitle";
import { comparisonData } from "@/data/portfolio";

const Comparison = () => {
  const { header, fade, others } = comparisonData;

  return (
    <Box
      component="section"
      id="comparison"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        py: { xs: 10, md: 15 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <SectionBadge text="Comparison" icon={VerifiedIcon} />
          <SectionTitle mainText={header.mainText} italicText={header.italicText} />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 500, mx: "auto" }}
          >
            {header.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Card: Fade */}
          <Grid size={{ xs: 12, md: 7.5 }}>
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: "#080808",
                borderRadius: "40px",
                border: "1px solid",
                borderColor: "rgba(255,255,255,0.05)",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                // Top white glow line
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "10%",
                  width: "80%",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                }
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                 <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box sx={{ p: 0.5, border: "1px solid rgba(255,255,255,0.2)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography variant="h5" sx={{ fontWeight: 900, lineHeight: 1 }}>{fade.title.charAt(0)}</Typography>
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: -1 }}>{fade.title}</Typography>
                 </Stack>
              </Box>

              <Divider sx={{ mb: 6, borderColor: "rgba(255,255,255,0.05)" }} />

              <Grid container spacing={4}>
                {fade.items.map((item, i) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={i}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <AutoAwesomeIcon
                        sx={{
                          fontSize: "0.9rem",
                          color: "text.primary",
                          opacity: 0.9,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600, color: "rgba(255,255,255,0.9)", letterSpacing: 0.3 }}
                      >
                        {item}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Card: Others */}
          <Grid size={{ xs: 12, md: 4.5 }}>
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: "rgba(255,255,255,0.01)",
                borderRadius: "40px",
                border: "1px solid",
                borderColor: "rgba(255,255,255,0.05)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  fontWeight: 800,
                  mb: 4,
                  opacity: 0.5,
                  letterSpacing: -1
                }}
              >
                {others.title}
              </Typography>

              <Divider sx={{ mb: 6, borderColor: "rgba(255,255,255,0.05)" }} />

              <Stack spacing={4}>
                {others.items.map((item, i) => (
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    key={i}
                  >
                    <AutoAwesomeIcon
                      sx={{
                        fontSize: "0.9rem",
                        color: "text.secondary",
                        opacity: 0.3,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        opacity: 0.5,
                      }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Comparison;
