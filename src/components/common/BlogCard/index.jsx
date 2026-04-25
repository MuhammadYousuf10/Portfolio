"use client";

import React from "react";
import { Box, Typography, alpha, Avatar, Stack } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";
import NextLink from "next/link";
import CustomImage from "@/components/common/CustomImage";

const BlogCard = ({ post, featured = false, compact = false, index = 0 }) => {
  return (
    <Box
      component={NextLink}
      href={`/blog/${post.slug}`}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.215, 0.61, 0.355, 1]
      }}
      sx={(theme) => ({
        textDecoration: "none",
        color: "inherit",
        display: "block",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: "24px",
        bgcolor: alpha(theme.palette.common.white, 0.02),
        border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
        p: featured ? 2 : 1.5,
        transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",

        "&:hover": {
          borderColor: alpha(theme.palette.primary.main, 0.15),
          bgcolor: alpha(theme.palette.common.white, 0.04),
          transform: "translateY(-6px)",
          boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.4)}`,
        },

        "&:hover .blog-image": {
          transform: "scale(1.08)",
          filter: "grayscale(0%) brightness(1)",
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
          borderRadius: "16px",
          height: featured 
            ? { xs: 320, md: 480 } 
            : compact ? 160 : 240,
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
            filter: "grayscale(100%) brightness(0.8)",
            transition: "all 700ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.7) 100%)",
            pointerEvents: "none",
          }}
        />

        <Box
          className="blog-overlay-button"
          sx={(theme) => ({
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(0.9)",
            opacity: 0,
            transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
            display: "inline-flex",
            alignItems: "center",
            gap: 1.2,
            px: 3,
            py: 1.2,
            borderRadius: "100px",
            color: "text.primary",
            bgcolor: alpha(theme.palette.background.default, 0.5),
            border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
            backdropFilter: "blur(12px)",
            fontSize: "0.85rem",
            fontWeight: 600,
            whiteSpace: "nowrap",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
          })}
        >
          Read Article
          <ArrowOutwardIcon sx={{ fontSize: 16 }} />
        </Box>
      </Box>

      <Box sx={{ mt: 3, px: 1 }}>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            color: "text.secondary",
            mb: 1.2,
            fontWeight: 500,
            letterSpacing: "0.03em",
            textTransform: "uppercase",
            fontSize: "0.7rem",
          }}
        >
          {post.date}
        </Typography>

        <Typography
          variant={featured ? "h3" : compact ? "subtitle1" : "h5"}
          sx={{
            fontWeight: 700,
            lineHeight: 1.3,
            color: "text.primary",
            letterSpacing: "-0.01em",
          }}
        >
          {post.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogCard;
