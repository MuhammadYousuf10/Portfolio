"use client";

import { Box, Container, Typography, Stack, Grid, Chip } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CustomButton from "@/components/common/customButtons";

const blogPosts = [
  {
    date: "Nov 18, 2024",
    title: "Why User Experience Is the Most Valuable Part of Your Website",
  },
  {
    date: "Nov 12, 2024",
    title: "Why Prioritizing Mobile Users Matters More Than Ever",
  },
  {
    date: "Nov 9, 2024",
    title: "Why Audience-Centered Design Creates More Impactful Websites",
  },
  {
    date: "Nov 5, 2024",
    title: "Emerging Web Design Shifts That Will Define 2024",
  },
];

const BlogSection = () => {
  return (
    <Box
      id="blog"
      sx={{ py: 15, bgcolor: "background.default", color: "text.primary" }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 10 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Box>
              <Chip
                label="Blog"
                sx={{
                  mb: 2,
                  bgcolor: "rgba(255,255,255,0.1)",
                  color: "text.primary",
                }}
              />
              <Typography variant="h2" sx={{ mb: 2 }}>
                Our Latest Insights
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 500 }}
              >
                Insights, ideas, and inspiration from the studio—exploring our
                work, design thinking, tools, and the stories behind the brands
                we help bring to life.
              </Typography>
            </Box>
            <CustomButton
              text="See All Posts"
              variant="outlined"
              startIcon={<ArrowOutwardIcon />}
            />
          </Stack>
        </Box>

        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Box
                sx={{
                  p: 4,
                  bgcolor: "background.paper",
                  borderRadius: "16px",
                  border: "1px solid",
                  borderColor: "divider",
                  cursor: "pointer",
                  transition: "border-color 0.3s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {post.date}
                </Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {post.title}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  color="text.secondary"
                >
                  <Typography variant="button">Read More</Typography>
                  <ArrowOutwardIcon fontSize="small" />
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogSection;
