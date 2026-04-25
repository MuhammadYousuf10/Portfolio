"use client";

import React from "react";
import { Box, Container, Typography, Stack, Grid, alpha } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArticleIcon from "@mui/icons-material/Article";
import CustomButton from "@/components/common/CustomButton";
import SectionBadge from "@/components/common/SectionBadge";
import CustomImage from "@/components/common/CustomImage";
import { blogData } from "@/data/portfolio";

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
          <Grid container spacing={2}>
            {/* Featured Card */}
            <Grid size={{ xs: 12, md: 6 }}>
              <BlogCard post={featuredPost} featured />
            </Grid>

            {/* Right Cards */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={2}>
                {sidePosts.map((post, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <BlogCard post={post} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const BlogCard = ({ post, featured = false }) => {
  return (
    <Box
      sx={(theme) => ({
        height: "100%",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: "8px",
        bgcolor: "background.paper",
        border: `1px solid ${alpha(theme.palette.primary.main, 0.09)}`,
        p: featured ? 1.25 : 1,
        transition:
          "border-color 240ms ease, transform 240ms ease, box-shadow 240ms ease",

        "&:hover": {
          borderColor: alpha(theme.palette.primary.main, 0.24),
          boxShadow: `0 18px 60px ${alpha(theme.palette.primary.main, 0.08)}`,
        },

        "&:hover .blog-image": {
          transform: "scale(1.055)",
          filter: featured
            ? "grayscale(0%) sepia(20%) saturate(115%) brightness(0.92)"
            : "grayscale(0%) saturate(105%) brightness(0.92)",
        },

        "&:hover .blog-overlay-button": {
          opacity: 1,
          transform: "translate(-50%, -50%) scale(1)",
        },
      })}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "6px",
          height: featured
            ? { xs: 320, sm: 390, md: 390 }
            : { xs: 220, sm: 135, md: 135 },
          bgcolor: "background.default",
        }}
      >
        <CustomImage
          src={post.image}
          alt={post.title}
          className="blog-image"
          sx={{
            position: "absolute",
            inset: 0,
            filter: "grayscale(100%) brightness(0.72)",
            transform: "scale(1)",
            transition: "transform 500ms ease, filter 500ms ease",
          }}
        />

        <Box
          sx={(theme) => ({
            position: "absolute",
            inset: 0,
            background: featured
              ? `linear-gradient(to bottom, transparent 42%, ${alpha(
                  theme.palette.background.default,
                  0.46,
                )} 100%)`
              : `linear-gradient(to bottom, transparent 48%, ${alpha(
                  theme.palette.background.default,
                  0.24,
                )} 100%)`,
            pointerEvents: "none",
          })}
        />

        <Box
          className="blog-overlay-button"
          sx={(theme) => ({
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(0.96)",
            opacity: 0,
            transition: "opacity 240ms ease, transform 240ms ease",
            display: "inline-flex",
            alignItems: "center",
            gap: 0.75,
            px: featured ? 2 : 1.5,
            py: featured ? 0.9 : 0.7,
            borderRadius: 999,
            color: "text.primary",
            bgcolor: alpha(theme.palette.background.default, 0.36),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.34)}`,
            backdropFilter: "blur(8px)",
            fontSize: featured ? "0.8rem" : "0.7rem",
            fontWeight: 600,
            whiteSpace: "nowrap",
          })}
        >
          View Blog
          <ArrowOutwardIcon sx={{ fontSize: featured ? 15 : 13 }} />
        </Box>
      </Box>

      <Box sx={{ px: featured ? 0.25 : 0.15, pt: featured ? 1.7 : 1.2 }}>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            mb: featured ? 0.8 : 0.75,
          }}
        >
          {post.date}
        </Typography>

        <Typography
          variant={featured ? "h4" : "subtitle1"}
          sx={{
            pb: featured ? 0.6 : 0.4,
          }}
        >
          {post.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Blog;
