"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Rating,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import CustomImage from "@/components/common/CustomImage";
import SectionBadge from "@/components/common/SectionBadge";
import InfoIcon from "@mui/icons-material/Info";
import { aboutData } from "@/data/portfolio";
import LineHeader from "@/components/common/LineHeader";
import CustomButton from "@/components/common/CustomButton";
import Counter from "@/components/common/Counter";

const About = () => {
  const { title, subtitle, image, rating, clientsCount, skills, experience } =
    aboutData;

  return (
    <Box
      component="section"
      id="about"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <SectionBadge text="Who We Are" icon={InfoIcon} />
        </Box>

        <Grid container spacing={6} alignItems="flex-start">
          {/* Left Side: Image and Rating */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ mb: { xs: 6, md: 4 } }}>
                <LineHeader text={`${title} ${subtitle}`} sx={{ mb: 3 }} />

                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "32px",
                    overflow: "hidden",
                    border: "1px solid",
                    borderColor: "divider",
                    aspectRatio: "1/1",
                    mb: 3,
                  }}
                >
                  <CustomImage src={image} alt="Who We Are" objectFit="cover" />
                </Box>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1.5}
                  justifyContent="center"
                  sx={{
                    p: 2,
                    bgcolor: "rgba(255,255,255,0.02)",
                    borderRadius: "16px",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Rating
                    value={rating}
                    readOnly
                    size="small"
                    sx={{
                      "& .MuiRating-iconFilled": { color: "text.primary" },
                      "& .MuiRating-iconEmpty": {
                        color: "rgba(255,255,255,0.1)",
                      },
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, color: "text.primary" }}
                  >
                    <Counter value={rating} />/5 stars (<Counter value={clientsCount} /> Clients)
                  </Typography>
                </Stack>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Side: Skills and Experience */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: { xs: 0, md: 30 } }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Skills Grid */}
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  bgcolor: "background.paper",
                  borderRadius: "24px",
                  border: "1px solid",
                  borderColor: "divider",
                  mb: 4,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  {skills.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      variant="outlined"
                      sx={{
                        borderRadius: "8px",
                        borderColor: "divider",
                        color: "text.secondary",
                        height: "32px",
                        bgcolor: "rgba(255,255,255,0.02)",
                        "&:hover": {
                          bgcolor: "background.paper",
                          borderColor: "primary.main",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Experience Table */}
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  bgcolor: "background.paper",
                  borderRadius: "24px",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Stack spacing={3}>
                  {experience.map((exp, i) => (
                    <Box key={i}>
                      <Grid container alignItems="center" spacing={1}>
                        <Grid size={{ xs: 12, sm: 4 }}>
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>
                            {exp.role}
                          </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 5 }}>
                          <Typography variant="body2" color="text.secondary">
                            {exp.company}
                          </Typography>
                        </Grid>
                        <Grid
                          size={{ xs: 12, sm: 3 }}
                          sx={{ textAlign: { xs: "left", sm: "right" } }}
                        >
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ fontSize: "0.7rem" }}
                          >
                            {exp.period}
                          </Typography>
                        </Grid>
                      </Grid>
                      {i < experience.length - 1 && (
                        <Divider sx={{ mt: 3, opacity: 0.5 }} />
                      )}
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

export default About;
