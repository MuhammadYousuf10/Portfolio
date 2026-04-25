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
import theme from "@/theme/theme";

const testimonials = [
  {
    username: "@DesignGenius87",
    name: "pot mov",
    quote:
      "Adrian took our ideas and turned them into an impressive digital experience that feels fresh and strategic.",
  },
  {
    username: "@michelle56704",
    name: "james carter",
    quote:
      "Adrian delivered a bold, modern design that captured our vision and elevated our entire brand presence.",
  },
  {
    username: "@CreativEdge",
    name: "sarah smith",
    quote:
      "The attention to detail and unique perspective Adrian brings is unmatched. Our conversion rates have skyrocketed.",
  },
  {
    username: "@BrandMaster",
    name: "alex johnson",
    quote:
      "Working with Fade Studio was the best decision for our startup. Clean design and perfect execution.",
  },
  {
    username: "@WebWizard",
    name: "lisa wong",
    quote:
      "Seamless collaboration and stunning results. They really understand modern aesthetics and UX.",
  },
  {
    username: "@TechLead_99",
    name: "mark davis",
    quote:
      "Highly recommended for anyone looking to stand out. The designs are not just pretty, they work.",
  },
];

const duplicatedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
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
        py: 10,
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
          width: "15%",
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
          width: "15%",
          height: "100%",
          background: "linear-gradient(to left, #000000, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <SectionBadge text="Testimonials" icon={RateReviewIcon} />
        </Box>
        <Box sx={{ mb: 8 }}>
          <TestimonialRow
            items={duplicatedTestimonials}
            direction="left"
            speed={50}
          />
          <TestimonialRow
            items={duplicatedTestimonials}
            direction="right"
            speed={60}
          />
        </Box>
      </Container>

      {/* Trusted By Footer */}
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ mt: 8, opacity: 0.8 }}
        >
          <AvatarGroup max={4}>
            <Avatar alt="User 1" src="https://i.pravatar.cc/150?u=1" />
            <Avatar alt="User 2" src="https://i.pravatar.cc/150?u=2" />
            <Avatar alt="User 3" src="https://i.pravatar.cc/150?u=3" />
            <Avatar alt="User 4" src="https://i.pravatar.cc/150?u=4" />
          </AvatarGroup>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Trusted by{" "}
            <Typography
              component="span"
              sx={{ fontWeight: 700, color: "text.primary" }}
            >
              10,000+
            </Typography>{" "}
            Audience worldwide
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;
