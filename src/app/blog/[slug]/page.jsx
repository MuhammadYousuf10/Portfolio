"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Stack,
  Avatar,
  Grid,
  Divider,
  alpha,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { blogData } from "@/data/portfolio";
import CustomButton from "@/components/common/CustomButton";
import BlogCard from "@/components/common/BlogCard";
import SectionBadge from "@/components/common/SectionBadge";

const BlogDetails = () => {
  const params = useParams();
  const router = useRouter();
  const post = blogData.posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <Box sx={{ py: 20, textAlign: "center" }}>
        <Typography variant="h2">Post not found</Typography>
        <CustomButton
          text="Back to Blog"
          onClick={() => router.push("/blog")}
          sx={{ mt: 4 }}
        />
      </Box>
    );
  }

  const relatedPosts = blogData.posts
    .filter((p) => p.slug !== params.slug)
    .slice(0, 2);

  return (
    <Box
      component="main"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
      }}
    >
      <Grid container sx={{ minHeight: "100vh" }}>
        {/* Left Column: Sticky Image */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            height: { xs: "auto", md: "100vh" },
            position: { xs: "relative", md: "sticky" },
            top: 0,
            display: "flex",
            alignItems: "flex-start", // Align to top
            justifyContent: "center",
            pt: { xs: 4, md: 20 },
            px: { xs: 2, md: 4, lg: 6 },
            pb: { xs: 4, md: 6 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: { xs: "50vh", md: "80vh" }, // Smaller height
              borderRadius: { xs: 0, md: "32px" }, // Rounded corners
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            <Box
              component="img"
              src={post.image.src || post.image}
              alt={post.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.9)",
              }}
            />
          </Box>
        </Grid>

        {/* Right Column: Content */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            p: { xs: 4, md: 8, lg: 12 },
            pt: { xs: 8, md: 16 },
          }}
        >
          {/* Back button */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            onClick={() => router.push("/blog")}
            sx={{
              cursor: "pointer",
              mb: 6,
              color: "text.secondary",
              "&:hover": { color: "text.primary" },
            }}
          >
            <KeyboardBackspaceIcon fontSize="small" />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Back to Insights
            </Typography>
          </Stack>

          {/* Metadata */}
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              display: "block",
              mb: 2,
              fontStyle: "italic",
            }}
          >
            {post.date}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              lineHeight: 1.1,
              mb: 4,
            }}
          >
            {post.title}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              fontWeight: 400,
              mb: 6,
              lineHeight: 1.6,
            }}
          >
            {post.description}
          </Typography>

          {/* Author */}
          {post.author && (
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ mb: 8 }}
            >
              <Avatar
                src={post.author.avatar}
                sx={{
                  width: 48,
                  height: 48,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, lineHeight: 1.2 }}
                >
                  {post.author.name}
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  {post.author.role}
                </Typography>
              </Box>
            </Stack>
          )}

          <Divider
            sx={{
              mb: 8,
              borderColor: alpha("#fff", 0.1),
              borderStyle: "dashed",
            }}
          />

          {/* Article Body */}
          <Box
            sx={{
              "& h2": {
                fontSize: "2rem",
                fontWeight: 700,
                mt: 6,
                mb: 3,
                color: "text.primary",
              },
              "& p": {
                fontSize: "1.125rem",
                lineHeight: 1.8,
                mb: 4,
                color: "text.secondary",
              },
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related Posts */}
          <Box sx={{ mt: 15 }}>
            <SectionBadge text="Recent blogs" />
            <Typography variant="h2" sx={{ mt: 2, mb: 6 }}>
              Related{" "}
              <Box
                component="span"
                sx={(theme) => ({
                  ...theme.typography.gradientText,
                  fontSize: "inherit",
                })}
              >
                Insights
              </Box>
            </Typography>

            <Grid container spacing={3}>
              {relatedPosts.map((relatedPost, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <BlogCard post={relatedPost} index={index} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogDetails;
