"use client";

import { Box, Container, Typography, Stack, Grid, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Janny Necolo",
    role: "CEO, NexaCraft Innovations Studio",
    metrics: { customers: "70k+", value: "$8m+" },
    quote:
      "Truly a talented team! They brought our brand to life with precision and creativity. Every design felt intentional, polished, and user-focused. Working with them was effortless.",
  },
  {
    name: "Michael Chen",
    role: "Founder, PixelRise Creative Solutions",
    metrics: { customers: "100k+", value: "$5m+" },
    quote:
      "The team delivered outstanding designs that perfectly captured our brand’s essence. Every detail was thoughtful, polished, and user-centric. Collaborating with them was smooth and efficient.",
  },
  {
    name: "Sarah Jenkins",
    role: "Director, VividForge Design Collective",
    metrics: { customers: "50k+", value: "$2m+" },
    quote:
      "Their creativity and professionalism shone through every stage. The designs were clean, purposeful, and aligned with our goals. Working together felt natural and productive from start to finish.",
  },
];

const TestimonialsSection = () => {
  return (
    <Box
      id="testimonials"
      sx={{ py: 15, bgcolor: "background.default", color: "text.primary" }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 8, textAlign: "center" }}>
          Proven Results
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Box
                sx={{
                  p: 4,
                  bgcolor: "background.paper",
                  borderRadius: "16px",
                  border: "1px solid",
                  borderColor: "divider",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ mb: 4, fontWeight: 600 }}>
                    {testimonial.role}
                  </Typography>
                  <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
                    <Box>
                      <Typography variant="h4" color="custom.neonGreen">
                        {testimonial.metrics.customers}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        new customers
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h4" color="custom.neonGreen">
                        {testimonial.metrics.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        opportunity value
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography
                    variant="body1"
                    sx={{ mb: 4, fontStyle: "italic", color: "text.secondary" }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                </Box>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar sx={{ bgcolor: "divider" }}>
                    {testimonial.name.charAt(0)}
                  </Avatar>
                  <Typography variant="body2" fontWeight={600}>
                    {testimonial.name}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
