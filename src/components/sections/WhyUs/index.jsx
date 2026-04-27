"use client";

import React from "react";
import { Box, Container, Grid, Typography, Stack, Rating } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import SectionBadge from "@/components/common/SectionBadge";
import SectionTitle from "@/components/common/SectionTitle";
import CustomImage from "@/components/common/CustomImage";
import { motion } from "framer-motion";
import { whyUsData } from "@/data/portfolio";
import ProfessionalBackground from "../ProfessionalBackground";
import Counter from "@/components/common/Counter";

const WhyUs = () => {
  const { header, card1, card2, card3 } = whyUsData;

  return (
    <Box
      component="section"
      id="why-us"
      sx={{ bgcolor: "background.default", color: "text.primary" }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: { xs: 6, md: 10 }, textAlign: "center" }}>
          <SectionBadge text="Why Us" icon={VerifiedIcon} />
          <SectionTitle
            mainText={header.mainText}
            italicText={header.italicText}
            sx={{ mb: 2 }}
          />
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            {header.description}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Card 1: Professionals */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                position: "relative",
                height: { xs: 450, md: 550 },
                borderRadius: "32px",
                overflow: "hidden",
                border: "1px solid",
                borderColor: "rgba(255,255,255,0.05)",
              }}
            >
              <CustomImage
                src={card1.image}
                alt="Professional"
                objectFit="cover"
                sx={{ filter: "grayscale(100%) brightness(0.8)" }}
              />
              {/* Overlay Content */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
                  p: { xs: 3, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    mb: 1.5,
                    opacity: 0.6,
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    pb: 0.5,
                  }}
                >
                  {card1.subtitle}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    lineHeight: 1.1,
                    whiteSpace: "pre-line",
                  }}
                >
                  {card1.title}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{ opacity: 0.7 }}
                >
                  {card1.features.map((feature, i) => (
                    <Stack
                      key={i}
                      direction="row"
                      alignItems="center"
                      spacing={0.5}
                    >
                      <VerifiedIcon sx={{ fontSize: "0.9rem" }} />
                      <Typography variant="caption" sx={{ fontWeight: 600 }}>
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>

          {/* Card 2: 24/7 Priority */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                bgcolor: "#0A0A0A",
                borderRadius: "32px",
                border: "1px solid",
                borderColor: "rgba(255,255,255,0.05)",
                height: { xs: "auto", md: 550 },
                minHeight: { xs: 450, md: 550 },
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Radar Graphic Container */}
              <Box
                sx={{
                  height: { xs: 200, md: 250 },
                  position: "relative",
                  mb: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
                }}
              >
                {/* Grid Background */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.05,
                    backgroundSize: "20px 20px",
                    backgroundImage:
                      "linear-gradient(to right, grey 1px, transparent 1px), linear-gradient(to bottom, grey 1px, transparent 1px)",
                  }}
                />

                <Box
                  sx={{
                    width: { xs: 140, md: 160 },
                    height: { xs: 140, md: 160 },
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "inset 0 0 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "linear",
                    }}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background:
                        "conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.2) 0deg, transparent 60deg)",
                    }}
                  />
                  <Box
                    sx={{
                      width: "80%",
                      height: "80%",
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.05)",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 4,
                        height: 4,
                        bgcolor: "#4caf50",
                        borderRadius: "50%",
                        boxShadow: "0 0 15px #4caf50",
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                {card2.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 4, lineHeight: 1.6 }}
              >
                {card2.description}
              </Typography>

              <Stack spacing={2.5} sx={{ mt: "auto", mb: { xs: 2, md: 0 } }}>
                {card2.features.map((feature, i) => (
                  <Stack
                    key={i}
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    <CheckCircleIcon
                      sx={{
                        fontSize: "1.2rem",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, color: "text.primary" }}
                    >
                      {feature}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Card 3: Growth */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                bgcolor: "#0A0A0A",
                borderRadius: "32px",
                border: "1px solid",
                borderColor: "rgba(255,255,255,0.05)",
                height: { xs: "auto", md: 550 },
                minHeight: { xs: 450, md: 550 },
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                {card3.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 4, lineHeight: 1.6 }}
              >
                {card3.description}
              </Typography>

              {/* Chart Container */}
              <Box
                sx={{
                  flex: 1,
                  position: "relative",
                  mt: 2,
                  p: 3,
                  bgcolor: "rgba(255,255,255,0.02)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 200,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ mb: 4 }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 700, opacity: 0.8 }}
                  >
                    {card3.chartSubtitle}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.5 }}>
                    {card3.chartDate}
                  </Typography>
                </Stack>

                <Box sx={{ flex: 1, position: "relative" }}>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      d="M0 35 Q 20 30 40 32 T 70 20 T 100 5"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                    />
                    <motion.path
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                      d="M0 35 Q 20 30 40 32 T 70 20 T 100 5 L 100 40 L 0 40 Z"
                      fill="url(#chartGradient)"
                    />
                    <motion.circle
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 1.5 }}
                      cx="70"
                      cy="20"
                      r="1.5"
                      fill="#fff"
                    />
                  </svg>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "15%",
                      left: "65%",
                      p: 0.5,
                      bgcolor: "rgba(0,0,0,0.8)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "4px",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ fontSize: "0.5rem", fontWeight: 700 }}
                    >
                    <Counter value={card3.chartValue} />
                    </Typography>
                  </Box>
                </Box>

                {/* Rating Block Footer */}
                <Box
                  sx={{
                    mt: 4,
                    p: 1.5,
                    bgcolor: "rgba(255,255,255,0.03)",
                    borderRadius: "100px",
                    border: "1px solid rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1.5,
                  }}
                >
                  <Rating
                    value={5}
                    readOnly
                    size="small"
                    sx={{
                      "& .MuiRating-iconFilled": {
                        color: "#facc15",
                        fontSize: "0.8rem",
                      },
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      color: "text.primary",
                      fontSize: "0.65rem",
                    }}
                  >
                    {card3.ratingText}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Professional Background Sub-section */}
        <ProfessionalBackground />
      </Container>
    </Box>
  );
};

export default WhyUs;
