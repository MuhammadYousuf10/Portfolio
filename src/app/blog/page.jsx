"use client";

import React from "react";
import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BlogCard from "@/components/common/BlogCard";
import CustomButton from "@/components/common/CustomButton";
import { blogData } from "@/data/portfolio";

const BlogPage = () => {
  const featuredPost =
    blogData.posts.find((p) => p.featured) || blogData.posts[0];
  const sidePosts = blogData.posts.filter((p) => p !== featuredPost);

  return (
    <Box
      component="main"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        pt: { xs: 15, md: 20 },
        pb: 10,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 8, md: 12 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
            }}
          >
            {blogData.header.mainText}{" "}
            <Box
              component="span"
              sx={(theme) => ({
                ...theme.typography.gradientText,
                fontSize: "inherit",
              })}
            >
              {blogData.header.italicText}
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              mb: 5,
              textAlign: "center",
            }}
          >
            {blogData.header.description}
          </Typography>

          <CustomButton
            text="Contact Me"
            variant="glass"
            icon={<ArrowOutwardIcon fontSize="small" />}
          />
        </Box>

        {/* Top Row: Featured + 2 Small */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <BlogCard post={featuredPost} featured index={0} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={3} sx={{ height: "100%" }}>
              {sidePosts.slice(0, 2).map((post, index) => (
                <Box key={index} sx={{ flex: 1 }}>
                  <BlogCard post={post} compact index={index + 1} />
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Grid: Rest of the posts */}
        <Grid container spacing={3}>
          {sidePosts.slice(2).map((post, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <BlogCard post={post} index={index + 3} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPage;
