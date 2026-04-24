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
}) => (
  <MotionBox
    layout
    onClick={onClick}
    initial={{ scale: 0.95, y: 20 }}
    animate={{
      scale: scale,
      y: yOffset,
      zIndex: zIndex,
    }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
    sx={{
      position: "absolute",
      left,
      p: 4,
      width: 600,
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
      filter: isFocused ? "none" : `blur(${blur}px)`,
    }}
  >
    <Box
      sx={{
        py: 2,
        px: 2,
        borderRadius: "16px",
        backgroundColor: "transparent",
        position: "relative",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <IconButton sx={{ color: "text.primary" }}>
          <Icon style={{ fontSize: 40 }} color="inherit" />
        </IconButton>

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
      </Stack>

      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
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
          mt: 8,
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
    const timer = setInterval(() => {
      setFocusedCard((prev) => (prev % cards.length) + 1);
    }, 6000); // Slower interval
    return () => clearInterval(timer);
  }, [cards.length]);

  const cardWidth = 750;
  const overlap = 550;
  const totalWidth = cardWidth + (cards.length - 1) * (cardWidth - overlap);
  const startLeft = `calc(50% - ${totalWidth / 2}px)`; // center

  // Reorder cards: [back, middle, front]
  // if focused is 1: [3, 2, 1]
  // if focused is 2: [1, 3, 2]
  // if focused is 3: [2, 1, 3]
  const getOrderedCards = () => {
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
            minHeight: "100vh",
            height: "100%",
          }}
        >
          <Stack
            direction={"row"}
            spacing={4}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ mb: 16 }}
          >
            <Box sx={{ mb: 2 }}>
              <SectionBadge text="Process" icon={AutoAwesomeIcon} />
            </Box>
            <Box>
              <Typography variant="h2" color="text.primary" sx={{ mb: 2 }}>
                Process is {""}
                <Typography component="span" variant="gradientText">
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
              startIcon={<ArrowOutwardIcon />}
            />
          </Stack>
          {orderedCards.map((card, index) => {
            // index 2 = front (focused)
            // index 1 = middle
            // index 0 = back
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
                isFocused={isFocused}
                blur={blur}
                onClick={() => setFocusedCard(card.id)}
                left={`calc(${startLeft} + ${index * (cardWidth - overlap)}px)`}
                focusedCard={focusedCard}
                totalCards={cards.length}
                scale={scale}
                yOffset={yOffset}
                zIndex={index}
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default CardSection;
