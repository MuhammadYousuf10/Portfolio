"use client";

import React from "react";
import { Box, Container, Typography, Stack, Grid, alpha } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArticleIcon from "@mui/icons-material/Article";
import CustomButton from "@/components/common/CustomButton";
import { blogData } from "@/data/portfolio";
import SectionBadge from "@/components/common/SectionBadge";
import BlogCard from "@/components/common/BlogCard";

const Blog = () => {
  const featuredPost = blogData.posts.find(p => p.featured) || blogData.posts[0];
  const sidePosts = blogData.posts.filter(p => p !== featuredPost);

  return (
    <Box
      component="section"
      id="blog"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box>
          {/* Header */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "flex-start", md: "flex-end" }}
            justifyContent="space-between"
            spacing={4}
            sx={{ mb: { xs: 5, md: 6 } }}
          >
            <Box>
              <SectionBadge text="Blog" icon={ArticleIcon} />

              <Typography
                component="h2"
                variant="h2"
                sx={{
                  mt: 2,
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
                variant="body2"
                sx={{
                  mt: 2,
                  maxWidth: 520,
                }}
              >
                {blogData.header.description}
              </Typography>
            </Box>

            <CustomButton
              text={blogData.buttonText}
              variant="glass"
              icon={<ArrowOutwardIcon fontSize="small" />}
            />
          </Stack>

          {/* Blog Grid */}
          <Grid container spacing={3}>
            {/* Featured Card */}
            <Grid size={{ xs: 12, md: 8 }}>
              <BlogCard post={featuredPost} featured index={0} />
            </Grid>
 
            {/* Right Cards Stack */}
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
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
