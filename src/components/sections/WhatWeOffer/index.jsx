"use client";

import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, Chip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import AdjustIcon from "@mui/icons-material/Adjust";
import CustomImage from "@/components/common/CustomImage";
import { services } from "@/data/portfolio";
import MarqueeTags from "@/components/common/MarqueeTags";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <Box
      sx={{
        flex: 1,
        position: "relative",
        width: "100%",
        height: 250,
        bgcolor: "rgba(255,255,255,0.02)",
        borderRadius: "16px",
        border: "1px solid",
        borderColor: "divider",
        overflow: "hidden",
      }}
    >
      <AnimatePresence mode="wait">
        <Box
          key={currentIndex}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <CustomImage
            src={images[currentIndex]}
            alt="Service preview"
            objectFit="cover"
            sx={{ filter: "grayscale(100%)" }}
          />
        </Box>
      </AnimatePresence>

      {/* Vertical carousel indicator */}
      {images.length > 1 && (
        <Box
          sx={{
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            p: 0.5,
            borderRadius: "12px",
            bgcolor: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
            zIndex: 2,
          }}
        >
          {images.map((_, i) => (
            <Box
              key={i}
              onClick={() => setCurrentIndex(i)}
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                bgcolor: i === currentIndex ? "#fff" : "rgba(255,255,255,0.3)",
                boxShadow:
                  i === currentIndex ? "0 0 4px rgba(255,255,255,0.8)" : "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

const WhatWeOffer = () => {
  return (
    <Box
      component="section"
      id="services"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radar Background */}
      <Box
        sx={{
          position: "absolute",
          top: 100, // adjust this so center aligns with header
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px", // Only show top half
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* Full circle container shifted down to only show top half */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-400px",
            left: "0",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
          }}
        >
          {/* Border light spool - animated rotate (Behind main border) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            style={{
              position: "absolute",
              inset: -2,
              borderRadius: "50%",
              background:
                "conic-gradient(from 0deg at 50% 50%, rgba(255, 113, 25, 0.4) 0deg, transparent 16deg, transparent 322deg, rgba(255, 113, 25, 0.4) 360deg)",
              opacity: 0.15,
            }}
          />

          {/* Main border frame */}
          <Box
            sx={{
              position: "absolute",
              inset: 2,
              borderRadius: "50%",
              background:
                "linear-gradient(rgba(5, 5, 5, 0.76) 0%, rgba(13, 13, 13, 0.79) 100%)",
              backdropFilter: "blur(11px)",
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px 0.76px 0.68px -0.5px, rgba(0, 0, 0, 0.17) 0px 1.87px 1.68px -1px, rgba(0, 0, 0, 0.16) 0px 6.19px 5.57px -2px",
            }}
          />

          {/* Inner background */}
          <Box
            sx={{
              position: "absolute",
              inset: 4,
              bgcolor: "rgb(5, 2, 0)",
              borderRadius: "50%",
            }}
          />

          {/* Inner outlines */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "25%",
                height: "25%",
                border: "2px solid rgba(255,255,255,0.03)",
                borderRadius: "50%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: "50%",
                height: "50%",
                border: "2px solid rgba(255,255,255,0.03)",
                borderRadius: "50%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: "75%",
                height: "75%",
                border: "2px solid rgba(255,255,255,0.03)",
                borderRadius: "50%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                border: "2px solid rgba(255,255,255,0.03)",
                borderRadius: "50%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "2px",
                bgcolor: "rgba(255,255,255,0.03)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                height: "100%",
                width: "2px",
                bgcolor: "rgba(255,255,255,0.03)",
              }}
            />
          </Box>

          {/* Light beam sweep */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background:
                "conic-gradient(rgba(255,255,255,0) 0deg, rgba(255,255,255,0.01) 300deg, rgba(255,255,255,0.15) 360deg)",
              zIndex: 1,
            }}
          />

          {/* Element on the radar */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 8,
              height: 8,
              bgcolor: "rgba(255,255,255,0.5)",
              borderRadius: "50%",
              boxShadow: "0 0 10px rgba(255,255,255,0.5)",
              zIndex: 2,
            }}
          />
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box
          sx={{
            mb: 12,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Chip
            icon={
              <AdjustIcon
                fontSize="small"
                sx={{ color: "text.primary !important" }}
              />
            }
            label="Services"
            sx={{
              mb: 3,
              bgcolor: "rgba(255,255,255,0.08)",
              color: "text.primary",
              px: 1,
            }}
          />
          <Typography variant="h2" sx={{ mb: 2 }}>
            What We{" "}
            <Typography component="span" variant="gradientText">
              Offer
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 500 }}
          >
            Our services blend strategy and creativity to deliver impact.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={3} sx={{ mb: 5 }}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: service.size }} key={index}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  height: "100%",
                  display: "flex",
                  flexDirection: service.images
                    ? {
                        xs: "column",
                        sm: index % 2 === 0 ? "row" : "row-reverse",
                      }
                    : "column",
                  gap: 4,
                  alignItems: service.images ? "center" : "flex-start",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                {service.images ? (
                  <ImageCarousel images={service.images} />
                ) : null}
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignSelf: "flex-start",
                      p: 1.5,
                      mb: 3,
                      borderRadius: "12px",
                      bgcolor: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      boxShadow:
                        "inset 0 1px 1px rgba(255,255,255,0.1), 0 4px 10px rgba(0,0,0,0.5)",
                      color: "text.secondary",
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Scrolling Tags */}
        <MarqueeTags />
      </Container>
    </Box>
  );
};

export default WhatWeOffer;
