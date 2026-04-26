"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Stack, IconButton, Container } from "@mui/material";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CustomButton from "@/components/common/CustomButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SectionBadge from "@/components/common/SectionBadge";

const MotionBox = motion.create(Box);

const ProcessCard = ({
  title,
  description,
  step,
  icon: Icon,
  blur,
  isFocused,
  onClick,
  left,
  focusedCard,
  totalCards,
  scale,
  yOffset,
  zIndex,
  isMobile,
}) => (
  <MotionBox
    layout
    onClick={onClick}
    initial={isMobile ? { opacity: 0, y: 20 } : { scale: 0.95, y: 20 }}
    whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
    viewport={{ once: true }}
    animate={!isMobile ? {
      scale: scale,
      y: yOffset,
      zIndex: zIndex,
    } : {}}
    transition={{ duration: 1.2, ease: "easeInOut" }}
    sx={{
      position: isMobile ? "relative" : "absolute",
      left: isMobile ? 0 : left,
      p: { xs: 3, md: 4 },
      width: isMobile ? "100%" : 600,
      borderRadius: "24px",
      color: "text.primary",
      cursor: "pointer",
      backdropFilter: "blur(20px) saturate(180%)",
      backgroundColor: "#0A0A0A",
      border: "1px solid",
      borderColor: isFocused
        ? "rgba(255,255,255,0.1)"
        : "rgba(255,255,255,0.05)",
      boxShadow: isFocused
        ? "inset 0px 1px 0px rgba(255, 255, 255, 0.15), 0px 20px 40px rgba(0, 0, 0, 0.5)"
        : "0px 10px 20px rgba(0, 0, 0, 0.3)",
      filter: !isMobile && !isFocused ? `blur(${blur}px)` : "none",
      mb: isMobile ? 4 : 0, // Spacing between stacked cards on mobile
    }}
  >
    <Box
      sx={{
        py: { xs: 1, md: 2 },
        px: { xs: 1, md: 2 },
        borderRadius: "16px",
        backgroundColor: "transparent",
        position: "relative",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <IconButton sx={{ color: "text.primary", p: 0 }}>
          <Icon sx={{ fontSize: { xs: 32, md: 40 } }} color="inherit" />
        </IconButton>

        {!isMobile && (
          <Stack direction="row" spacing={1}>
            {[...Array(totalCards)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor:
                    i + 1 === focusedCard ? "text.primary" : "text.secondary",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              />
            ))}
          </Stack>
        )}
      </Stack>

      <Typography variant="h4" sx={{ mt: { xs: 3, md: 4 }, mb: 2 }}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: "90%", color: "text.secondary" }}
      >
        {description}
      </Typography>
      <CustomButton
        text={`Step ${step}`}
        variant="outlined"
        size={"small"}
        disableHover
        sx={{
          mt: { xs: 4, md: 8 },
          color: "text.secondary",
          borderRadius: "999px",
          px: 3,
        }}
      />
    </Box>
  </MotionBox>
);

const CardSection = () => {
  const [focusedCard, setFocusedCard] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Discover your brand",
      description:
        "We'll dive into your vision, audience, and goals to align design with purpose and clarity.",
      icon: SearchIcon,
      step: "1",
    },
    {
      id: 2,
      title: "Design with clarity",
      description:
        "We translate strategy into visuals—crafted to be clean, consistent, memorable, and always on-brand.",
      icon: DesignServicesIcon,
      step: "2",
    },
    {
      id: 3,
      title: "Deliver and refine with care",
      description:
        "Final designs are shared for review, with feedback shaping the perfect result every time.",
      icon: RocketLaunchIcon,
      step: "3",
    },
  ];

  useEffect(() => {
    if (isMobile) return;
    const timer = setInterval(() => {
      setFocusedCard((prev) => (prev % cards.length) + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [cards.length, isMobile]);

  const cardWidth = 750;
  const overlap = 550;
  const totalWidth = cardWidth + (cards.length - 1) * (cardWidth - overlap);
  const startLeft = `calc(50% - ${totalWidth / 2}px)`;

  const getOrderedCards = () => {
    if (isMobile) return cards; // Keep original order for stacking
    const fIdx = cards.findIndex((c) => c.id === focusedCard);
    return [cards[(fIdx + 2) % 3], cards[(fIdx + 1) % 3], cards[fIdx]];
  };
  const orderedCards = getOrderedCards();

  return (
    <Box component="section" id="process">
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            minHeight: isMobile ? "auto" : "100vh",
            height: "100%",
          }}
        >
          <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: 2 }}>
            <SectionBadge text="Process" icon={AutoAwesomeIcon} />
          </Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems={{ xs: "center", md: "center" }}
            justifyContent={"space-between"}
            sx={{ mb: { xs: 8, md: 16 }, textAlign: { xs: "center", md: "left" } }}
          >
            <Box>
              <Typography variant="h2" color="text.primary" sx={{ mb: 2 }}>
                Process is {""}
                <Typography component="span" variant="gradientText" sx={{ fontSize: "inherit" }}>
                  Result
                </Typography>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Thoughtful, intentional design is what makes brands stand out.
              </Typography>
            </Box>
            <CustomButton
              text={"See Plans"}
              variant="outlined"
              icon={<ArrowOutwardIcon />}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            />
          </Stack>

          <Box sx={{ 
            position: isMobile ? "relative" : "absolute", 
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? 0 : 0
          }}>
            {orderedCards.map((card, index) => {
              const isFocused = card.id === focusedCard;
              const blur = index === 2 ? 0 : index === 1 ? 2 : 4;
              const scale = index === 2 ? 1 : index === 1 ? 0.94 : 0.88;
              const yOffset = index === 2 ? 0 : index === 1 ? 15 : 30;

              return (
                <ProcessCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  step={card.step}
                  icon={card.icon}
                  isFocused={isMobile || isFocused}
                  blur={blur}
                  onClick={() => !isMobile && setFocusedCard(card.id)}
                  left={`calc(${startLeft} + ${index * (cardWidth - overlap)}px)`}
                  focusedCard={focusedCard}
                  totalCards={cards.length}
                  scale={scale}
                  yOffset={yOffset}
                  zIndex={index}
                  isMobile={isMobile}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CardSection;
