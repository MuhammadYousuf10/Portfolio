"use client";

import React, { useState } from "react";
import {
  Avatar,
  Box,
  Container,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import StarIcon from "@mui/icons-material/Star";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import CustomButton from "@/components/common/CustomButton";
import SectionBadge from "@/components/common/SectionBadge";

const pricingData = {
  header: {
    mainText: "Simple Pricing,",
    italicText: "No Surprises",
    description:
      "Choose a plan that fits your goals and creative needs perfectly.",
  },
  monthly: {
    price: "$1750",
    period: "/month",
    features: [
      "Unlimited Requests",
      "Fast Turnarounds",
      "Fixed Monthly Rate",
      "Ongoing Collaboration",
      "Pause or Cancel Anytime",
    ],
  },
  project: {
    price: "Custom",
    period: "",
    features: [
      "One-Time Fee",
      "Defined Timeline",
      "Tailored to Scope",
      "Revisions Included",
      "Best for Launches",
    ],
  },
  addOn: {
    title: "Hero Section Revamp",
    description:
      "This is the service we are providing so that you can test our services as a demo.",
    price: "$97",
    period: "one time payment",
  },
  testimonial: {
    quote:
      '"Truly a talented team! They brought our brand to life with precision and creativity. Every design felt intentional, polished, and user-focused. Working with them was effortless."',
    author: "Janny necolo",
    avatar:
      "https://framerusercontent.com/images/q3gTUOBoxKAobXGtZtKxUomvqTc.jpeg?scale-down-to=1024",
  },
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const currentPlan =
    activeTab === "monthly" ? pricingData.monthly : pricingData.project;

  return (
    <Box
      component="section"
      id="pricing"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        py: { xs: 8, md: 10 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 5.5 } }}>
          <SectionBadge text="Pricing" icon={LocalOfferOutlinedIcon} />

          <Typography
            component="h2"
            sx={(theme) => ({
              mt: 2,
              fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3rem" },
              lineHeight: 1.12,
              fontWeight: 700,
              letterSpacing: "-0.045em",
              color: "text.primary",
            })}
          >
            {pricingData.header.mainText}{" "}
            <Box
              component="span"
              sx={(theme) => ({
                ...theme.typography.gradientText,
                fontSize: "inherit",
                fontWeight: 300,
              })}
            >
              {pricingData.header.italicText}
            </Box>
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mt: 2,
              mx: "auto",
              maxWidth: 560,
              color: "text.secondary",
            }}
          >
            {pricingData.header.description}
          </Typography>
        </Box>

        {/* Main pricing card */}
        <Box
          sx={(theme) => ({
            maxWidth: 1080,
            mx: "auto",
            position: "relative",
            overflow: "hidden",
            borderRadius: "18px",
            border: `1px solid ${alpha(theme.palette.primary.main, 0.11)}`,
            bgcolor: "background.paper",
            px: { xs: 2.25, sm: 3, md: 3.5 },
            py: { xs: 2.5, sm: 3, md: 3.5 },

            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 92,
              background: theme.gradients.heroCard,
              opacity: 0.24,
              pointerEvents: "none",
            },

            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "16%",
              right: "16%",
              height: 120,
              background: `radial-gradient(ellipse at top, ${alpha(
                theme.palette.primary.main,
                0.1,
              )}, transparent 72%)`,
              pointerEvents: "none",
            },
          })}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 3.5 }}
            sx={{ position: "relative", zIndex: 1 }}
          >
            {/* Left side */}
            <Box
              sx={{
                flex: "0 0 38%",
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <PricingTabs
                tabs={[
                  { value: "monthly", label: "Monthly" },
                  { value: "project", label: "Per Project" },
                ]}
                activeTab={activeTab}
                onChange={setActiveTab}
              />

              <Box sx={{ mt: 3, mb: { xs: 5, md: "auto" } }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Stack
                      direction="row"
                      alignItems="baseline"
                      spacing={0.75}
                      sx={{ mb: 2.5 }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          letterSpacing: "-0.045em",
                          lineHeight: 1,
                        }}
                      >
                        {currentPlan.price}
                      </Typography>

                      {currentPlan.period && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            fontWeight: 500,
                          }}
                        >
                          {currentPlan.period}
                        </Typography>
                      )}
                    </Stack>
                  </motion.div>
                </AnimatePresence>

                <CustomButton
                  text="Get Started Now"
                  variant="glass"
                  icon={<ArrowOutwardIcon fontSize="small" />}
                />
              </Box>

              {/* Add-on card */}
              <Box
                sx={(theme) => ({
                  mt: { xs: 0, md: 5.5 },
                  p: { xs: 2.25, md: 2.5 },
                  borderRadius: "14px",
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.09)}`,
                  bgcolor: "transparent",
                  boxShadow: `inset 0 1px 0 ${alpha(
                    theme.palette.primary.main,
                    0.04,
                  )}`,
                })}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 700,
                    color: "text.primary",
                    mb: 1.25,
                  }}
                >
                  {pricingData.addOn.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    maxWidth: 330,
                    lineHeight: 1.55,
                    mb: 2.5,
                  }}
                >
                  {pricingData.addOn.description}
                </Typography>

                <Stack direction="row" alignItems="baseline" spacing={0.75}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {pricingData.addOn.price}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 600,
                    }}
                  >
                    {pricingData.addOn.period}
                  </Typography>
                </Stack>
              </Box>
            </Box>

            {/* Right side */}
            <Box
              sx={(theme) => ({
                flex: 1,
                minWidth: 0,
                borderRadius: "16px",
                border: `1px solid ${alpha(theme.palette.primary.main, 0.09)}`,
                bgcolor: "transparent",
                p: { xs: 2.5, md: 3 },
                display: "flex",
                flexDirection: "column",
                minHeight: { xs: "auto", md: 360 },
                boxShadow: `inset 0 1px 0 ${alpha(
                  theme.palette.primary.main,
                  0.04,
                )}`,
              })}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                  fontWeight: 700,
                  mb: 2.5,
                  textTransform: "lowercase",
                }}
              >
                whats included
              </Typography>

              <Box sx={{ mb: { xs: 4, md: 5 } }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Stack spacing={1.55}>
                      {currentPlan.features.map((feature, index) => (
                        <Stack
                          direction="row"
                          spacing={1.1}
                          alignItems="center"
                          key={index}
                        >
                          <CheckIcon
                            sx={{
                              fontSize: 15,
                              color: "text.secondary",
                              flexShrink: 0,
                            }}
                          />

                          <Typography
                            variant="body2"
                            sx={{
                              color: "text.primary",
                              fontWeight: 500,
                              lineHeight: 1.35,
                            }}
                          >
                            {feature}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </motion.div>
                </AnimatePresence>
              </Box>

              {/* Testimonial */}
              <Box
                sx={(theme) => ({
                  mt: "auto",
                  pt: 3,
                  borderTop: `1px solid ${alpha(
                    theme.palette.primary.main,
                    0.08,
                  )}`,
                })}
              >
                <Stack
                  direction="row"
                  spacing={1.25}
                  alignItems="center"
                  mb={2}
                >
                  <Avatar
                    src={pricingData.testimonial.avatar}
                    sx={{
                      width: 28,
                      height: 28,
                      filter: "grayscale(100%)",
                    }}
                  />

                  <Stack direction="row" spacing={0.2} alignItems="center">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        sx={{
                          fontSize: 15,
                          color: "text.primary",
                          opacity: 0.7,
                        }}
                      />
                    ))}
                  </Stack>
                </Stack>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                    lineHeight: 1.55,
                    mb: 2,
                    maxWidth: 520,
                  }}
                >
                  {pricingData.testimonial.quote}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    color: "text.primary",
                    fontWeight: 700,
                  }}
                >
                  {pricingData.testimonial.author}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

const PricingTabs = ({ tabs, activeTab, onChange }) => {
  return (
    <Box
      sx={(theme) => ({
        display: "inline-flex",
        alignItems: "center",
        alignSelf: "flex-start",
        position: "relative",
        overflow: "hidden",
        p: "3px",
        borderRadius: "6px",
        bgcolor: alpha(theme.palette.background.default, 0.75),
        border: `1px solid ${alpha(theme.palette.primary.main, 0.04)}`,
        boxShadow: `inset 0 1px 0 ${alpha(theme.palette.primary.main, 0.06)}`,
      })}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value;

        return (
          <Box
            key={tab.value}
            onClick={() => onChange(tab.value)}
            sx={{
              position: "relative",
              cursor: "pointer",
              px: { xs: 1.5, md: 1.6 },
              py: 0.9,
              minWidth: 70,
              textAlign: "center",
              zIndex: 1,
            }}
          >
            {isActive && (
              <motion.div
                layoutId="active-pricing-tab"
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 36,
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 5,
                  zIndex: -1,
                }}
              >
                <Box
                  sx={(theme) => ({
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px",
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                    border: `1px solid ${alpha(
                      theme.palette.primary.main,
                      0.08,
                    )}`,
                    boxShadow: `0 8px 24px ${alpha(
                      theme.palette.primary.main,
                      0.06,
                    )}`,
                  })}
                />
              </motion.div>
            )}

            <Typography
              variant="caption"
              sx={(theme) => ({
                display: "block",
                fontSize: "0.74rem",
                lineHeight: 1,
                fontWeight: 700,
                color: isActive
                  ? theme.palette.text.primary
                  : alpha(theme.palette.text.secondary, 0.65),
                transition: "color 180ms ease",
                whiteSpace: "nowrap",
              })}
            >
              {tab.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Pricing;
