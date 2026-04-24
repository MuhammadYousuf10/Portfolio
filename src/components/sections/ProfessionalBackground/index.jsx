"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Rating,
  Chip,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import CustomImage from "@/components/common/CustomImage";
import { aboutData } from "@/data/portfolio";

const ProfessionalBackground = () => {
  const { title, subtitle, image, rating, clientsCount, skills, experience } =
    aboutData;

  return (
    <Box
      component="section"
      id="professional-background"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        py: { xs: 10, md: 15 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="flex-start">
          {/* Left Side: Image and Rating */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ position: "relative", mb: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    mb: 4,
                    opacity: 0.6,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 600,
                      color: "text.secondary",
                      fontSize: "0.7rem",
                      fontStyle: "italic",
                    }}
                  >
                    {title} {subtitle}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid",
                    borderColor: "rgba(255,255,255,0.05)",
                    aspectRatio: "1/1",
                    mb: 4,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <CustomImage src={image} alt="Who We Are" objectFit="cover" />
                </Box>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  justifyContent="center"
                  sx={{ opacity: 0.8 }}
                >
                  <Rating
                    value={rating}
                    readOnly
                    size="small"
                    sx={{
                      "& .MuiRating-iconFilled": { color: "#fff" },
                      "& .MuiRating-iconEmpty": { color: "rgba(255,255,255,0.1)" },
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      color: "text.secondary",
                      letterSpacing: 0.5,
                      fontSize: "0.7rem"
                    }}
                  >
                    {rating}/5 stars ({clientsCount}Clients)
                  </Typography>
                </Stack>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Side: Skills and Experience */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Skills Box */}
              <Box
                sx={{
                  p: { xs: 4, md: 5 },
                  bgcolor: "rgba(255,255,255,0.02)",
                  borderRadius: "24px",
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,0.05)",
                  mb: 6,
                }}
              >
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  {skills.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      variant="outlined"
                      sx={{
                        borderRadius: "8px",
                        borderColor: "rgba(255,255,255,0.1)",
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        px: 1,
                        height: "32px",
                        bgcolor: "transparent",
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.05)",
                          borderColor: "#fff",
                          color: "#fff",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Experience List */}
              <Box sx={{ px: { xs: 2, md: 4 } }}>
                <Stack spacing={4}>
                  {experience.map((exp, i) => (
                    <Box key={i}>
                      <Grid container alignItems="center" spacing={2}>
                        <Grid size={{ xs: 12, sm: 4 }}>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>
                            {exp.role}
                          </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem" }}>
                            {exp.company}
                          </Typography>
                        </Grid>
                        <Grid
                          size={{ xs: 12, sm: 4 }}
                          sx={{ textAlign: { sm: "right" } }}
                        >
                          <Typography
                            variant="caption"
                            sx={{ color: "rgba(255,255,255,0.5)", fontWeight: 500 }}
                          >
                            {exp.period}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt: 4, borderColor: "rgba(255,255,255,0.05)" }} />
                    </Box>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfessionalBackground;
