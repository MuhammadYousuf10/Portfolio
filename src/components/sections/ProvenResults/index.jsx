"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  Rating,
  IconButton,
  Avatar,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CustomImage from "@/components/common/CustomImage";
import CustomButton from "@/components/common/CustomButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { provenResults } from "@/data/portfolio";
import SectionBadge from "@/components/common/SectionBadge";
import SectionTitle from "@/components/common/SectionTitle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const ProvenResults = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % provenResults.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + provenResults.length) % provenResults.length,
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = provenResults[currentIndex];

  return (
    <Box
      component="section"
      id="proven-results"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        py: { xs: 10, md: 15 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header Area */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "flex-end" }}
          sx={{ mb: 8 }}
          spacing={4}
        >
          <Box>
            <SectionBadge text="Results" icon={TrendingUpIcon} />
            <SectionTitle mainText="Proven" italicText="Results" sx={{ mb: 2 }} />
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Simple, streamlined process is what gets you results
            </Typography>
          </Box>
          <CustomButton
            text="Contact Us"
            variant="outlined"
            sx={{ borderRadius: "999px", px: 4 }}
          />
        </Stack>

        {/* Main Slider Content */}
        <Box sx={{ position: "relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Grid container spacing={6} alignItems="center">
                {/* Left: Project Image */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      borderRadius: "24px",
                      overflow: "hidden",
                      border: "1px solid",
                      borderColor: "divider",
                      aspectRatio: "1/1",
                    }}
                  >
                    <CustomImage
                      src={current.image}
                      alt={current.company}
                      objectFit="cover"
                    />
                  </Box>
                </Grid>

                {/* Right: Project Metrics and Testimonial */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box>
                    <Stack alignItems="center" sx={{ mb: 4 }}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ mb: 1, opacity: 0.8 }}
                      >
                        <AutoAwesomeIcon sx={{ fontSize: "1rem" }} />
                        <Typography
                          variant="h6"
                          sx={{ fontSize: "1rem", letterSpacing: 1 }}
                        >
                          {current.logoText}
                        </Typography>
                      </Stack>
                      <Typography
                        variant="h4"
                        sx={{ mb: 0, fontWeight: 600, textAlign: "center" }}
                      >
                        {current.company}
                      </Typography>
                    </Stack>

                    <Grid container spacing={2} sx={{ mb: 4 }}>
                      {current.metrics.map((metric, i) => (
                        <Grid size={6} key={i}>
                          <Box
                            sx={{
                              p: 3,
                              bgcolor: "background.paper",
                              borderRadius: "16px",
                              border: "1px solid",
                              borderColor: "divider",
                              textAlign: "center",
                              position: "relative",
                            }}
                          >
                            <Box
                              sx={{
                                position: "absolute",
                                top: 12,
                                left: "50%",
                                transform: "translateX(-50%)",
                                opacity: 0.5,
                              }}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </Box>
                            <Typography
                              variant="h3"
                              sx={{ fontWeight: 700, mb: 1, mt: 1 }}
                            >
                              {metric.value}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: "text.secondary",
                                textTransform: "uppercase",
                                fontSize: "0.7rem",
                              }}
                            >
                              {metric.label}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>

                    <Box
                      sx={{
                        p: 3,
                        textAlign: "left",
                      }}
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-start"
                        spacing={1}
                        sx={{ mb: 2 }}
                      >
                        <Avatar
                          sx={{
                            width: 35,
                            height: 35,
                            fontSize: "1rem",
                          }}
                        >
                          {current.testimonial.author.charAt(0)}
                        </Avatar>
                        <Rating
                          value={current.testimonial.rating}
                          readOnly
                          size="small"
                          sx={{
                            "& .MuiRating-iconFilled": {
                              color: "text.primary",
                            },
                            "& .MuiRating-iconEmpty": {
                              color: "rgba(255,255,255,0.1)",
                            },
                          }}
                        />
                      </Stack>
                      <Typography
                        variant="body1"
                        sx={{
                          fontStyle: "italic",
                          mb: 2,
                          color: "text.secondary",
                          fontSize: "0.85rem",
                          lineHeight: 1.6,
                        }}
                      >
                        "{current.testimonial.quote}"
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          textTransform: "capitalize",
                        }}
                      >
                        {current.testimonial.author}
                      </Typography>
                    </Box>

                    {/* Navigation Arrows - Repositioned to bottom right of this column */}
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        mt: 4,
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        onClick={prevSlide}
                        sx={{
                          width: 40,
                          height: 40,
                          border: "1px solid",
                          borderColor: "divider",
                          color: "text.primary",
                          bgcolor: "rgba(255,255,255,0.03)",
                          "&:hover": {
                            bgcolor: "background.paper",
                            borderColor: "primary.main",
                          },
                        }}
                      >
                        <ArrowBackIosNewIcon sx={{ fontSize: "0.9rem" }} />
                      </IconButton>
                      <IconButton
                        onClick={nextSlide}
                        sx={{
                          width: 40,
                          height: 40,
                          border: "1px solid",
                          borderColor: "divider",
                          color: "text.primary",
                          bgcolor: "rgba(255,255,255,0.03)",
                          "&:hover": {
                            bgcolor: "background.paper",
                            borderColor: "primary.main",
                          },
                        }}
                      >
                        <ArrowForwardIosIcon sx={{ fontSize: "0.9rem" }} />
                      </IconButton>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
};

export default ProvenResults;
