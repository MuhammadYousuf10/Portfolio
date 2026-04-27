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
import NextLink from "next/link";
import { provenResults, provenResultsHeader } from "@/data/portfolio";
import SectionBadge from "@/components/common/SectionBadge";
import SectionTitle from "@/components/common/SectionTitle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Counter from "@/components/common/Counter";

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
      }}
    >
      <Container maxWidth="lg">
        {/* Header Area */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "center", md: "flex-end" }}
          sx={{ mb: { xs: 6, md: 8 }, textAlign: { xs: "center", md: "left" } }}
          spacing={4}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <SectionBadge text={provenResultsHeader.badge} icon={TrendingUpIcon} />
            <SectionTitle
              mainText={provenResultsHeader.mainText}
              italicText={provenResultsHeader.italicText}
              sx={{ mb: 2 }}
            />
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {provenResultsHeader.description}
            </Typography>
          </Box>
          <CustomButton
            component={NextLink}
            href="/contact"
            text="Contact Us"
            variant="glow"
            sx={{
              borderRadius: "999px",
              px: 4,
              width: { xs: "100%", sm: "auto" },
            }}
          />
        </Stack>

        {/* Main Slider Content */}
        <Box sx={{ position: "relative", display: "grid" }}>
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ gridArea: "1 / 1" }}
            >
              <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                {/* Left: Project Image */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      borderRadius: "24px",
                      overflow: "hidden",
                      border: "1px solid",
                      borderColor: "divider",
                      aspectRatio: { xs: "1.2/1", sm: "1/1" }, // Slightly shorter on mobile
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
                  <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                    <Stack
                      alignItems={{ xs: "center", md: "flex-start" }}
                      sx={{ mb: 4 }}
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ mb: 1, opacity: 0.8 }}
                      >
                        <AutoAwesomeIcon sx={{ fontSize: "1rem" }} />
                        <Typography
                          variant="h6"
                          sx={{ fontSize: "0.85rem", letterSpacing: 1 }}
                        >
                          {current.logoText}
                        </Typography>
                      </Stack>
                      <Typography variant="h4" sx={{ mb: 0, fontWeight: 600 }}>
                        {current.company}
                      </Typography>
                    </Stack>

                    <Grid container spacing={2} sx={{ mb: 4 }}>
                      {current.metrics.map((metric, i) => (
                        <Grid size={6} key={i}>
                          <Box
                            sx={{
                              p: { xs: 2, md: 3 },
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
                                top: { xs: 8, md: 12 },
                                left: "50%",
                                transform: "translateX(-50%)",
                                opacity: 0.5,
                              }}
                            >
                              <svg
                                width="14"
                                height="14"
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
                            <Counter
                              value={metric.value}
                              variant="h3"
                              sx={{
                                fontWeight: 700,
                                mb: 0.5,
                                mt: 1.5,
                              }}
                            />
                            <Typography
                              variant="caption"
                              sx={{
                                color: "text.secondary",
                                textTransform: "uppercase",
                                letterSpacing: 1,
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
                        p: { xs: 2, md: 3 },
                        textAlign: { xs: "center", md: "left" },
                        bgcolor: "rgba(255,255,255,0.02)",
                        borderRadius: "16px",
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent={{ xs: "center", md: "flex-start" }}
                        spacing={1}
                        sx={{ mb: 2 }}
                      >
                        <Avatar
                          sx={{
                            width: 32,
                            height: 32,
                            fontSize: "0.9rem",
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
                          color: "text.primary",
                        }}
                      >
                        {current.testimonial.author}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              mt: 4,
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={prevSlide}
              sx={{
                width: 44,
                height: 44,
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
                width: 44,
                height: 44,
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
      </Container>
    </Box>
  );
};

export default ProvenResults;
