"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  Rating,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import { motion } from "framer-motion";
import RateReviewIcon from "@mui/icons-material/RateReview";
import SectionBadge from "@/components/common/SectionBadge";
import Counter from "@/components/common/Counter";
import theme from "@/theme/theme";
import { testimonialsData } from "@/data/portfolio";

const duplicatedTestimonials = [
  ...testimonialsData.items,
  ...testimonialsData.items,
  ...testimonialsData.items,
];

const TestimonialCard = ({ testimonial }) => (
  <Box
    sx={{
      p: 2.5,
      bgcolor: "background.paper",
      borderRadius: "16px",
      border: "1px solid",
      borderColor: "divider",
      width: { xs: "260px", md: "320px" },
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "all 0.3s ease",
      "&:hover": {
        bgcolor: "rgba(255,255,255,0.05)",
        borderColor: "primary.main",
      },
    }}
  >
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ mb: 1.5 }}
      >
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontWeight: 600, fontSize: "0.75rem" }}
        >
          {testimonial.username}
        </Typography>
        <Rating
          value={5}
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
          color: "text.primary",
          mb: 2,
          fontSize: "0.8rem",
          lineHeight: 1.5,
        }}
      >
        {testimonial.quote}
      </Typography>
    </Box>
    <Typography
      variant="caption"
      sx={{
        color: "text.secondary",
        textTransform: "uppercase",
        letterSpacing: 1,
        fontSize: "0.65rem",
      }}
    >
      {testimonial.name}
    </Typography>
  </Box>
);

const TestimonialRow = ({ items, direction = "left", speed = 40 }) => (
  <Box sx={{ overflow: "hidden", display: "flex", mb: 4 }}>
    <motion.div
      animate={{
        x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
      }}
      transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      style={{ display: "flex", gap: "24px" }}
    >
      {items.map((t, i) => (
        <TestimonialCard key={i} testimonial={t} />
      ))}
    </motion.div>
  </Box>
);

const Testimonials = () => {
  return (
    <Box
      component="section"
      id="testimonials"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Edge fade masks */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: "50px", md: "15%" },
          height: "100%",
          background: "linear-gradient(to right, #000000, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: { xs: "50px", md: "15%" },
          height: "100%",
          background: "linear-gradient(to left, #000000, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: "center" }}>
          <SectionBadge text={testimonialsData.header.badge} icon={RateReviewIcon} />
        </Box>
        <Box sx={{ mb: 8 }}>
          <TestimonialRow
            items={duplicatedTestimonials}
            direction="left"
            speed={60} // Slower for mobile readability
          />
          <TestimonialRow
            items={duplicatedTestimonials}
            direction="right"
            speed={70}
          />
        </Box>
      </Container>

      {/* Trusted By Footer */}
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ mt: { xs: 4, md: 8 }, opacity: 0.8, textAlign: "center" }}
        >
          <AvatarGroup max={4}>
            {testimonialsData.avatars.map((avatar, i) => (
              <Avatar key={i} alt={`User ${i + 1}`} src={avatar} />
            ))}
          </AvatarGroup>
          <Typography variant="body2" sx={{ color: "text.secondary", fontSize: { xs: "0.8rem", md: "0.875rem" } }}>
            Trusted by{" "}
            <Counter
              value={testimonialsData.header.trustedText.split(" Audience")[0]}
              sx={{ fontWeight: 700, color: "text.primary", fontSize: "inherit" }}
            />{" "}
            Audience worldwide
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;
